import { Box, Paper } from "@mui/material";
import { Outlet } from "react-router";
import { Sidebar } from "../components/Sidebar/Sidebar";

export function AppLayout() {
  return (
    <Box
      sx={{
        height: "100vh",
        p: 3,
        background: "linear-gradient(135deg, #b8744f 0%, #965b60 100%)",
        boxSizing: "border-box",
      }}
    >
      <Paper
        sx={{
          height: "100%",
          borderRadius: "32px",
          overflow: "hidden",
          bgcolor: "#f3f4f8",
          display: "grid",
          gridTemplateColumns: { xs: "1fr", lg: "260px 1fr" },
        }}
      >
        <Box
          sx={{
            height: "100%",
            borderRight: { lg: "1px solid #ece4e8" },
            overflow: "hidden",
          }}
        >
          <Sidebar />
        </Box>

        <Box
          sx={{
            height: "100%",
            overflowY: "auto",
            p: { xs: 2, md: 3 },
          }}
        >
          <Outlet />
        </Box>
      </Paper>
    </Box>
  );
}