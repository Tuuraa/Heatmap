import { WorkSessionModel } from "../models/work_session.model";
import { db } from "../services/db.service";
import { ObjectId } from "mongodb";

class WorkRepository {
    constructor() {}

    async create(workSession: Omit<WorkSessionModel, "_id">): Promise<WorkSessionModel> {
            const createdWorkSession = await db().work_sessions.insertOne(workSession);
            
            return {
                _id: createdWorkSession.insertedId,
                ...workSession
            };
    }

    async end(userId: string): Promise<WorkSessionModel | null> {
        const result = await db().work_sessions.findOneAndUpdate(
            { 
                userId: new ObjectId(userId), 
                ended_at: null 
            },
            { $set: { ended_at: new Date() } },
        );

        return result as WorkSessionModel || null;
    }

    async getCurrent(userId: string): Promise<WorkSessionModel | null> {
        const session = await db().work_sessions.findOne({
            userId: new ObjectId(userId),
            ended_at: null
        });
        
        return session as WorkSessionModel | null;
    }
}

export const workRepository = new WorkRepository();