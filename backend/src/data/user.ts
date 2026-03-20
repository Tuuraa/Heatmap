import { IsString } from "class-validator";

export class User {
    @IsString()
    id: string;

    @IsString()
    username: string;

    @IsString()
    email: string;

    constructor(id: string, username: string, email: string) {
        this.id = id;
        this.username = username;
        this.email = email;
    }
}