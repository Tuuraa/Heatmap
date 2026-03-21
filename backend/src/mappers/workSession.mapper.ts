import { WorkSessionModel } from "../models/work_session.model";
import { WorkSessionResponse } from "../data/Work/WorkSessionResponse";

export class WorkSessionMapper {
    static toDTO(workSession: WorkSessionModel): WorkSessionResponse {
        if (!workSession._id || !workSession.userId || !workSession.started_at) {
            throw new Error("Invalid work session model");
        }

        const dto = new WorkSessionResponse(
            workSession._id.toString(),
            workSession.userId.toString(),
            workSession.started_at,
        );

        if (workSession.ended_at) {
            dto.ended_at = workSession.ended_at;
        }

        if (workSession.pauses) {
            dto.pauses = workSession.pauses
        }

        return dto;
    }
}
