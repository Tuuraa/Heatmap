import { BrowserRouter, Route, Routes, Navigate } from "react-router";
import ProtectedLayout from "../layouts/ProtectedLayout";
import { AuthLayout } from "../layouts/AuthLayout";
import { SignUpPage } from "../pages/Auth/SignUp/SignUp.page";
import { SignInPage } from "../pages/Auth/SignIn/SignIn.page";
import { AppLayout } from "../layouts/AppLayout";
import { DashboardPage } from "../pages/Dashboard/Dashboard.page";

export function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<AuthLayout />}>
                    <Route path="/sign-in" element={<SignInPage />} />
                    <Route path="/sign-up" element={<SignUpPage />} />
                </Route>

                <Route element={<ProtectedLayout />}>
                    <Route element={<AppLayout />}>
                        <Route path="/" element={<DashboardPage />} />
                    </Route>
                </Route>

                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
        </BrowserRouter>
    );
}