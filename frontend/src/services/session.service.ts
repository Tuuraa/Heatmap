import { makeAutoObservable, runInAction } from "mobx";
import { client } from "../shared/api/client";
import type { User } from "../shared/api/generated";

export class SessionService {
    user: User | null = null;
    isLoading: boolean = true;

    constructor() {
        makeAutoObservable(this);
    }

    get isAuthenticated() {
        return this.user !== null;
    }

    async initialize() {
        try {
            const user = await client.users.usersControllerMe();

            runInAction(() => {
                this.setUser(user);
            });
        }
        catch (error) {
            console.error("Failed to initialize session", error);
        } finally {
            runInAction(() => {
                this.isLoading = false;
            });
        }
    }

    async logout() {
        // logout logic
    }

    setUser(user: User) {
        this.user = user;
    }
}

export const sessionService = new SessionService();