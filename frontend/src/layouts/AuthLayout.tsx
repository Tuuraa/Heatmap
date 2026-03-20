import { Box, Paper } from "@mui/material";
import { Navigate, Outlet } from "react-router";
import AuthPreview from "../assets/images/auth-preview.jpg";
import { AuthController } from "../pages/Auth/Auth.controller";
import { useState } from "react";
import { sessionService } from "../services/session.service";
import { observer } from "mobx-react-lite";

export const AuthLayout = observer(() => {
    const isAuth = sessionService.isAuthenticated;

    const [controller] = useState(() => new AuthController());
    
    if (isAuth) return <Navigate to="/" replace/>

    return (
        <Box
            sx={{
                minHeight: "100vh",
                px: 2.5,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "linear-gradient(135deg, #b8744f 0%, #965b60 100%)",
            }}
        >
            <Paper
                elevation={16}
                sx={{
                    width: "100%",
                    maxWidth: 1260,
                    minHeight: 760,
                    display: "grid",
                    gridTemplateColumns: { xs: "1fr", md: "1fr 1.05fr" },
                    borderRadius: "32px",
                    overflow: "hidden",
                    bgcolor: "#f3f4f8",
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        px: { xs: 3, sm: 6, md: 8 },
                        py: { xs: 5, md: 6 },
                    }}
                >
                    <Outlet context={controller} />
                </Box>

                <Box
                    sx={{
                        display: { xs: "none", md: "block" },
                        p: 2.5,
                    }}
                >
                    <Box
                        sx={{
                            position: "relative",
                            width: "100%",
                            height: "100%",
                            borderRadius: "28px",
                            overflow: "hidden",
                            backgroundImage: `url("${AuthPreview}")`,
                            backgroundSize: "cover",
                            display: "flex",
                        }}
                    />
                </Box>
            </Paper>
        </Box>
    );
});