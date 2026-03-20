import type { AuthController } from "../Auth.controller";
import { useNavigate } from "react-router";
import {
    Box,
    Button,
    Divider,
    IconButton,
    InputAdornment,
    Stack,
    TextField,
    Typography,
} from "@mui/material";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import AppleIcon from "@mui/icons-material/Apple";

export type SignInProps = {
    controller: AuthController;
}

export const SignIn = ({ controller }: SignInProps) => {
    const navigate = useNavigate();

    const handleSignInClick = async () => {
        const success = await controller.signIn();

        if (success) navigate("/");
    }

    return (
        <Box
            sx={{
                width: "100%",
                maxWidth: 360,
            }}
        >
            <Stack spacing={3.5}>
                <Box>
                    <Typography
                        variant="h3"
                        sx={{
                            fontWeight: 700,
                            fontSize: { xs: 38, md: 52 },
                            lineHeight: 1.05,
                            color: "#111",
                            mb: 5,
                            textAlign: "center",
                        }}
                    >
                        Hello Again!
                    </Typography>

                    <Typography
                        sx={{
                            fontSize: 15,
                            fontWeight: 600,
                            color: "#1e1e1e",
                            mb: 1.5,
                        }}
                    >
                        Let’s get started with your 30 days trial
                    </Typography>

                    <Stack spacing={2.5}>
                        <TextField
                            fullWidth
                            placeholder="Email"
                            value={controller.email}
                            onChange={(e) => controller.setEmail(e.target.value)}
                            variant="outlined"
                            sx={{
                                "& .MuiOutlinedInput-root": {
                                    height: 62,
                                    borderRadius: "14px",
                                    bgcolor: "#fff",
                                    "& fieldset": {
                                        borderColor: "transparent",
                                    },
                                    "&:hover fieldset": {
                                        borderColor: "transparent",
                                    },
                                    "&.Mui-focused fieldset": {
                                        borderColor: "#c08a97",
                                        borderWidth: "1px",
                                    },
                                },
                                "& .MuiInputBase-input": {
                                    fontSize: 20,
                                    color: "#111",
                                },
                            }}
                        />

                        <TextField
                            fullWidth
                            placeholder="Password"
                            type="password"
                            value={controller.password}
                            onChange={(e) => controller.setPassword(e.target.value)}
                            variant="outlined"
                            sx={{
                                "& .MuiOutlinedInput-root": {
                                    height: 62,
                                    borderRadius: "14px",
                                    bgcolor: "#fff",
                                    "& fieldset": {
                                        borderColor: "transparent",
                                    },
                                    "&:hover fieldset": {
                                        borderColor: "transparent",
                                    },
                                    "&.Mui-focused fieldset": {
                                        borderColor: "#c08a97",
                                        borderWidth: "1px",
                                    },
                                },
                                "& .MuiInputBase-input": {
                                    fontSize: 20,
                                    color: "#111",
                                },
                            }}
                            slotProps={{
                                input: {
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton edge="end">
                                                <VisibilityOffOutlinedIcon sx={{ color: "#9e9e9e" }} />
                                            </IconButton>
                                        </InputAdornment>
                                    ),
                                },
                            }}
                        />
                    </Stack>

                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "flex-end",
                            mt: 1.25,
                        }}
                    >
                        <Typography
                            component="button"
                            type="button"
                            sx={{
                                border: "none",
                                background: "transparent",
                                p: 0,
                                cursor: "pointer",
                                color: "#9a9a9a",
                                fontSize: 14,
                                fontWeight: 500,
                            }}
                        >
                            Recovery Password
                        </Typography>
                    </Box>
                </Box>

                <Button
                    fullWidth
                    variant="contained"
                    onClick={handleSignInClick}
                    sx={{
                        height: 60,
                        borderRadius: "14px",
                        textTransform: "none",
                        fontSize: 28,
                        fontWeight: 600,
                        bgcolor: "#a77483",
                        boxShadow: "0 10px 24px rgba(167, 116, 131, 0.35)",
                        "&:hover": {
                            bgcolor: "#996a78",
                        },
                    }}
                >
                    Sign In
                </Button>

                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 2,
                    }}
                >
                    <Divider sx={{ flex: 1, borderColor: "#e0e0e0" }} />
                    <Typography
                        sx={{
                            color: "#8f8f8f",
                            fontSize: 16,
                            whiteSpace: "nowrap",
                        }}
                    >
                        Or continue with
                    </Typography>
                    <Divider sx={{ flex: 1, borderColor: "#e0e0e0" }} />
                </Box>

                <Stack direction="row" spacing={2.5} justifyContent="center">
                    <IconButton
                        sx={{
                            width: 78,
                            height: 56,
                            borderRadius: "14px",
                            bgcolor: "#fff",
                            border: "1px solid #ececec",
                        }}
                    >
                        <GoogleIcon sx={{ fontSize: 30 }} />
                    </IconButton>

                    <IconButton
                        sx={{
                            width: 78,
                            height: 56,
                            borderRadius: "14px",
                            bgcolor: "#fff",
                            boxShadow: "0 8px 20px rgba(0,0,0,0.12)",
                        }}
                    >
                        <AppleIcon sx={{ fontSize: 30, color: "#222" }} />
                    </IconButton>

                    <IconButton
                        sx={{
                            width: 78,
                            height: 56,
                            borderRadius: "14px",
                            bgcolor: "#fff",
                            border: "1px solid #ececec",
                        }}
                    >
                        <FacebookRoundedIcon sx={{ fontSize: 30, color: "#1d9bf0" }} />
                    </IconButton>
                </Stack>
            </Stack>
        </Box>
    );
}