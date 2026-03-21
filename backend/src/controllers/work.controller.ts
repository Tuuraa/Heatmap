import { JsonController, Post, CurrentUser, UnauthorizedError, NotFoundError, Get } from "routing-controllers";
import { ResponseSchema } from "routing-controllers-openapi";
import { workRepository } from "../repositories/work.repository";
import { ObjectId } from "mongodb";
import { WorkSessionMapper } from "../mappers/workSession.mapper";
import { WorkSessionResponse } from "../data/Work/WorkSessionResponse";
import { CurrentUser as CurrentUserType } from "../definitions/current-user.type";
import { CurrentSessionResponse } from "../data/Work/CurrentSessionResponse";

@JsonController("/work")
export class WorkController {
    @Post("/start")
    @ResponseSchema(WorkSessionResponse)
    async startWorkSession(@CurrentUser({ required: true }) currentUser: CurrentUserType): Promise<WorkSessionResponse> {
        if (!currentUser?._id) {
            throw new UnauthorizedError("Unauthorized");
        }

        const workSession = await workRepository.create({
            userId: currentUser._id,
            started_at: new Date(),
        });

        return WorkSessionMapper.toDTO(workSession);
    }

    @Post("/end")
    @ResponseSchema(WorkSessionResponse)
    async endWorkSession(@CurrentUser({ required: true }) currentUser: CurrentUserType): Promise<WorkSessionResponse> {
        if (!currentUser?._id) {
            throw new UnauthorizedError("Unauthorized");
        }

        const workSession = await workRepository.end(currentUser._id.toString());

        if (!workSession) {
            throw new NotFoundError("Active work session not found");
        }

        return WorkSessionMapper.toDTO(workSession);
    }

    @Get("/current")
    @ResponseSchema(CurrentSessionResponse)
    async getCurrentWorkSession(@CurrentUser({ required: true }) currentUser: CurrentUserType): Promise<CurrentSessionResponse> {
        if (!currentUser?._id) {
            throw new UnauthorizedError("Unauthorized");
        }

        const workSession = await workRepository.getCurrent(currentUser._id.toString());

        return {
            session: workSession
                ? WorkSessionMapper.toDTO(workSession)
                : undefined
        };
    }
}
