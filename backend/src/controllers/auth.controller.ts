import { BadRequestError, Body, JsonController, Post, Res } from "routing-controllers";
import { RegisterRequest } from "../data/Auth/register.request";
import { Response } from "express";
import { usersRepository } from "../repositories/users.repository";
import { authService } from "../services/auth.service";
import { ResponseSchema } from "routing-controllers-openapi";
import { config } from "../config";
import { User } from "../data/user";
import { UserMapper } from "../mappers/user.mapper";
import { LoginRequest } from "../data/Auth/login.request";
import { passwordService } from "../services/password.service";

@JsonController('/auth')
export class AuthController {
    @Post('/register')
    @ResponseSchema(User)
    async register(@Body() registerData: RegisterRequest, @Res() response: Response): Promise<User> {
        if (!registerData.username || !registerData.password || !registerData.email) {
            throw new BadRequestError("Username, password and email are required");
        }

        const existingUser = await usersRepository.findByEmail(registerData.email);
        if (existingUser) {
            throw new BadRequestError("User with this email already exists");
        }

        const hashedPassword = await passwordService.hashPassword(registerData.password);

        const createdUser = await usersRepository.create({
            username: registerData.username,
            password: hashedPassword,
            email: registerData.email,
        });

        if (!createdUser._id) {
            throw new BadRequestError("Failed to create user");
        }

        const sessionId = await authService.createSession({ userId: createdUser._id.toString() });

        response.cookie(
            config.SESSION_COOKIE_NAME,
            sessionId,
            {
                httpOnly: true,
                secure: false,
                maxAge: config.SESSION_TTL_SECONDS * 1000,
                sameSite: 'strict'
            }
        );

        return UserMapper.toDTO(createdUser);
    }

    @Post('/login')
    @ResponseSchema(User)
    async login(@Body() loginData: LoginRequest, @Res() response: Response): Promise<User> {
        if (!loginData.email || !loginData.password) {
            throw new BadRequestError("Email and password are required");
        }

        const user = await usersRepository.findByEmail(loginData.email);
        if (!user) {
            throw new BadRequestError("Invalid credentials");
        }

        const passwordMatch = await passwordService.comparePassword(
            loginData.password,
            user.password
        );

        if (!passwordMatch) {
            throw new BadRequestError("Invalid credentials");
        }

        const sessionId = await authService.createSession({ userId: user._id.toString() });

        response.cookie(
            config.SESSION_COOKIE_NAME,
            sessionId,
            {
                httpOnly: true,
                secure: false,
                maxAge: config.SESSION_TTL_SECONDS * 1000,
                sameSite: 'strict'
            }
        );

        return UserMapper.toDTO(user);
    }
}
