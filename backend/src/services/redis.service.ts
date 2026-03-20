import Redis from "ioredis";
import { config } from "../config";

const redisClient = new Redis(config.redisUrl);

export function redis(): Redis {
  return redisClient;
}