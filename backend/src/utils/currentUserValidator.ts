import { Action } from "routing-controllers";
import { config } from "../config";
import { authService } from "../services/auth.service";
import { usersRepository } from "../repositories/users.repository";
import { CurrentUser } from "../definitions/current-user.type";

export const currentUserChecker = async (action: Action): Promise<CurrentUser | null> => {
    const request = action.request;

    const sessionId = request.cookies?.[config.SESSION_COOKIE_NAME];

    if (!sessionId) {
        return null;
    }

    const sessionData = await authService.getSession(sessionId);

    if (!sessionData?.userId) {
        return null;
    }

    const user = await usersRepository.findById(sessionData.userId);

    if (!user) {
        await authService.deleteSession(sessionId);
        return null;
    }

    return {
        _id: user._id,
        email: user.email,
        username: user.username
    };
}