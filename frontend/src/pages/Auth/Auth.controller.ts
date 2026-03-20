import { makeAutoObservable, runInAction } from "mobx";
import { client } from "../../shared/api/client";
import { sessionService } from "../../services/session.service";

export type AuthMode = "signin" | "signup";

export class AuthController {
    name = "";
    email = "";
    password = "";

    error = false;
    errorMessage = "";
    isLoading = false;

    constructor() {
        makeAutoObservable(this);
    }

    setName(name: string) {
        this.name = name;
    }

    setEmail(email: string) {
        this.email = email;
    }

    setPassword(password: string) {
        this.password = password;
    }

    resetError() {
        this.error = false;
        this.errorMessage = "";
    }

    async identify() {
        const currentUser = await client.users.usersControllerMe();
        sessionService.setUser(currentUser);
    }

    async signIn(): Promise<boolean> {
        if (!this.email || !this.password) {
            runInAction(() => {
                this.error = true;
                this.errorMessage = "All fields are required";
            });
            return false;
        }

        runInAction(() => {
            this.resetError();
            this.isLoading = true;
        });

        try {
            await client.auth.authControllerLogin({
                loginRequest: {
                    email: this.email,
                    password: this.password,
                },
            });

            await this.identify();
            return true;
        } catch (error) {
            runInAction(() => {
                this.error = true;
                this.errorMessage = "An error occurred during sign in";
            });
            return false;
        } finally {
            runInAction(() => {
                this.isLoading = false;
            });
        }
    }

    async signUp(): Promise<boolean> {
        if (!this.name || !this.email || !this.password) {
            runInAction(() => {
                this.error = true;
                this.errorMessage = "All fields are required";
            });
            return false;
        }

        runInAction(() => {
            this.resetError();
            this.isLoading = true;
        });

        try {
            await client.auth.authControllerRegister({
                registerRequest: {
                    username: this.name,
                    email: this.email,
                    password: this.password,
                },
            });

            await this.identify();
            return true;
        } catch (error) {
            runInAction(() => {
                this.error = true;
                this.errorMessage = "An error occurred during sign up";
            });
            return false;
        } finally {
            runInAction(() => {
                this.isLoading = false;
            });
        }
    }
}