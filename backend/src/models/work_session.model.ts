import { ObjectId } from "mongodb";

export type PauseInterval = {
    started_at: Date;
    ended_at?: Date;
}

export type WorkSessionModel = {
    _id?: ObjectId;
    userId: ObjectId;
    started_at: Date;
    ended_at?: Date;
    pauses?: PauseInterval[];
}