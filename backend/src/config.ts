import { env } from "process";
import dotenv from "dotenv";

dotenv.config();

export const config = {
    mongoURL: env.mongoURL,
    port: parseInt(env.PORT || '8000', 10),
    redisUrl: env.redisUrl || 'redis://localhost:6379',
    SESSION_TTL_SECONDS: parseInt(env.SESSION_TTL_SECONDS || '3600', 10),
    COOKIE_TTL_SECONDS: parseInt(env.COOKIE_TTL_SECONDS || '3600', 10),
    SESSION_COOKIE_NAME: env.SESSION_COOKIE_NAME || 'session_id',
}