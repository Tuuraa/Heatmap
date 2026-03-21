import { IsOptional, ValidateNested } from "class-validator";
import { WorkSessionResponse } from "./WorkSessionResponse";
import { Type } from "class-transformer";

export class CurrentSessionResponse {
    @IsOptional()
    @ValidateNested()
    @Type(() => WorkSessionResponse)
    session?: WorkSessionResponse;

    constructor(session: WorkSessionResponse) {
        this.session = session;
    }
}