import { ObjectId } from "mongodb"

export type SessionModel = {
    sessionId: string;
    userId: string;
    createdAt: string;
}