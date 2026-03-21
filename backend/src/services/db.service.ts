import { MongoClient } from "mongodb";
import { config } from "../config";
import { UserModel } from "../models/user.model";

const client = new MongoClient(config.mongoURL!);

export function db() {
    const database = client.db();

    return {
        users: database.collection<UserModel>('users'),
        work_sessions: database.collection('work_sessions')
    }
}