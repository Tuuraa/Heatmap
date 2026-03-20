import { ObjectId } from "mongodb";
import { UserModel } from "../models/user.model";
import { db } from "../services/db.service";

class UserRepository {
    constructor() {}

    async create(user: Omit<UserModel, "_id">): Promise<UserModel> {
        const createdUser = await db().users.insertOne(user);

        return {
            _id: createdUser.insertedId,
            ...user
        }
    }

    async findByEmail(email: string) {
        return await db().users.findOne({ email });
    }

    async findById(id: string): Promise<UserModel | null> {
        if (!ObjectId.isValid(id)) {
            throw new Error("Invalid user ID");
        }
        return await db().users.findOne({ _id: new ObjectId(id) });
    }
}

export const usersRepository = new UserRepository();