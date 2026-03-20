import { Navigate, Outlet } from "react-router";
import { sessionService } from "../services/session.service";
import { observer } from "mobx-react-lite";

const ProtectedLayout = observer(() => {
    const isAuth = sessionService.isAuthenticated;

    if (!isAuth) return <Navigate to="/sign-up" replace/>

    return <Outlet />
});

export default ProtectedLayout