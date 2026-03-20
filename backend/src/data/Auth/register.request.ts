import { IsString } from "class-validator";

export class RegisterRequest {
    @IsString()
    username: string;

    @IsString()
    password: string;

    @IsString()
    email: string;

    constructor(username: string, password: string, email: string) {
        this.username = username;
        this.password = password;
        this.email = email;
    }
}