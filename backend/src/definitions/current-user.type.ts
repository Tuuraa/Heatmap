import { UserModel } from "../models/user.model";

export type CurrentUser = Pick<UserModel, "_id" |  "username" | "email" >;