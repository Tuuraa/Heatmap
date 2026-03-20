import { ObjectId } from "mongodb";

export type UserModel = {
    _id?: ObjectId;
    username: string;
    password: string;
    email: string;
}