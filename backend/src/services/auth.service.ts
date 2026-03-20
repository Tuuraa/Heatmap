import { SessionModel } from "../models/session.model";
import { redis } from "./redis.service";
import { randomUUID } from "crypto";

export type CreateSessionData = {
    userId: string;
}

class AuthService {
    async createSession(session: CreateSessionData): Promise<string> {
        const sessionId = randomUUID(); 

        const sessionData: SessionModel = {
            sessionId,
            userId: session.userId,
            createdAt: new Date().toISOString(),
        }

        redis().set(`session:${sessionId}`, JSON.stringify(sessionData), 'EX', 60 * 60 * 24);

        return sessionId;
    }

    async getSession(sessionId: string): Promise<SessionModel | null> {
        const sessionData = await redis().get(`session:${sessionId}`);
        if (!sessionData) return null; 

        return JSON.parse(sessionData) as SessionModel;
    }

    async deleteSession(sessionId: string): Promise<void> {
        await redis().del(`session:${sessionId}`);
    }
}

export const authService = new AuthService();