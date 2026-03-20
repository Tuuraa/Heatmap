import { User } from "../data/user";
import { UserModel } from "../models/user.model";

export class UserMapper {
    static toDTO(user: UserModel): User {
        if (!user._id || !user.username || !user.email) {
            throw new Error("Invalid user model");
        }

        return new User(
            user._id.toString(),
            user.username,
            user.email
        );
    }
}