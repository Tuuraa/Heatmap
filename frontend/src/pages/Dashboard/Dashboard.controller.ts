import { makeAutoObservable, runInAction } from "mobx";
import { client } from "../../shared/api/client";

export class DashboardController {
    isLoading: boolean = false;

    startedAt: Date | null = null;
    endedAt: Date | null = null;

    now = Date.now();
    timerId?: number;

    constructor() {
        makeAutoObservable(this);

        this.getCurrentWorkSession();
    }

    startTimer() {
        this.stopTimer();

        this.timerId = window.setInterval(() => {
            runInAction(() => {
                this.now = Date.now();
            });
        }, 1000);
    }

    stopTimer() {
        if (this.timerId) {
            clearInterval(this.timerId);
            this.timerId = undefined;
        }
    }

    get isWorking() {
        return this.startedAt !== null && this.endedAt === null;
    }

    get elapsedSeconds() {
        if (!this.startedAt) return 0;

        const end = this.endedAt ? this.endedAt.getTime() : this.now;
        return Math.floor((end - this.startedAt.getTime()) / 1000);
    }

    get formattedTime() {
        const total = this.elapsedSeconds;

        const h = Math.floor(total / 3600);
        const m = Math.floor((total % 3600) / 60);
        const s = total % 60;

        return [h, m, s]
            .map(v => String(v).padStart(2, "0"))
            .join(":");
    }

    async getCurrentWorkSession() {
        this.isLoading = true;

        try {
            const currentSession = await client.work.workControllerGetCurrentWorkSession();

            const session = currentSession.session

            if (session) {
                runInAction(() => {
                    this.startedAt = new Date(session.startedAt);
                    this.now = Date.now();
                })

                this.startTimer();
            } else {
                runInAction(() => {
                    this.startedAt = null;
                })
            }
        } catch (error) {
            console.error("Failed to fetch current work session", error);

            runInAction(() => {
                this.startedAt = null;
            });

            this.stopTimer();
        } finally {
            runInAction(() => {
                this.isLoading = false;
            });
        }
    }

    async startWorkSession() {
        this.isLoading = true;

        try {
            const session = await client.work.workControllerStartWorkSession();

            runInAction(() => {
                this.startedAt = new Date(session.startedAt);
                this.now = Date.now();
                this.endedAt = null;
            });

            this.startTimer();
        } catch (error) {
            console.error("Failed to start work session", error);
        } finally {
            runInAction(() => {
                this.isLoading = false;
            });
        }
    }

    async endWorkSession() {
        this.isLoading = true;

        try {
            await client.work.workControllerEndWorkSession();

            runInAction(() => {
                this.endedAt = new Date();
            });

            this.stopTimer();
        } catch (error) {
            console.error("Failed to start work session", error);
        } finally {
            runInAction(() => {
                this.isLoading = false;
            });
        }
    }

    dispose() {
        this.stopTimer();
    }
}