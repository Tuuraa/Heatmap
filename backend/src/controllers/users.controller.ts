import { JsonController, NotFoundError, Post, Req, Res, UnauthorizedError } from "routing-controllers";
import { ResponseSchema } from "routing-controllers-openapi/build/decorators";
import { Request, Response } from "express";
import { User } from "../data/user";
import { usersRepository } from "../repositories/users.repository";
import { UserMapper } from "../mappers/user.mapper";
import { config } from "../config";
import { authService } from "../services/auth.service";

@JsonController('/users')
export class UsersController {
    @Post('/me')
    @ResponseSchema(User)
    async me(@Req() request: Request): Promise<User> {
        const sessionId = request.cookies?.[config.SESSION_COOKIE_NAME];

        if (!sessionId) {
            throw new UnauthorizedError("Unauthorized");
        }
        const sessionData = await authService.getSession(sessionId);

        if (!sessionData) {
            throw new UnauthorizedError("Unauthorized");
        }

        const user = await usersRepository.findById(sessionData.userId);

        if (!user) {
            await authService.deleteSession(sessionId);
            throw new UnauthorizedError("Unauthorized");
        }

        return UserMapper.toDTO(user);
    }
}