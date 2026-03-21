import { Type } from "class-transformer";
import { IsArray, IsDate, IsOptional, IsString, ValidateNested } from "class-validator";

export class PauseInterval {
    @IsDate()
    started_at: Date;

    @IsDate()
    ended_at?: Date;

    constructor(started_at: Date, ended_at?: Date) {
        this.started_at = started_at;
        this.ended_at = ended_at;
    }
}

export class WorkSessionResponse {
    @IsString()
    id: string;

    @IsString()
    userId: string;

    @IsDate()
    started_at: Date;

    @IsDate()
    ended_at?: Date;

    @IsArray()
    @IsOptional()
    @Type(() => PauseInterval)
    @ValidateNested({ each: true })
    pauses?: PauseInterval[];

    constructor(
        id: string,
        userId: string ,
        started_at: Date,
        ended_at?: Date,
        pauses?: PauseInterval[]
    ) {
        this.id = id;
        this.userId = userId;
        this.started_at = started_at;
        this.ended_at = ended_at;
        this.pauses = pauses;
    }
}