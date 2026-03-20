import { AuthApi, Configuration, UsersApi } from "./generated";

export const apiConfig = new Configuration({
  basePath: "http://localhost:8000",
  credentials: "include",
});


export const client = {
    auth: new AuthApi(apiConfig),
    users: new UsersApi(apiConfig),
}