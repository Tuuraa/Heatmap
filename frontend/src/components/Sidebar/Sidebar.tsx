import { Box, Button, Paper, Stack, Typography } from "@mui/material";
import DashboardRoundedIcon from "@mui/icons-material/DashboardRounded";
import FolderRoundedIcon from "@mui/icons-material/FolderRounded";
import InsightsRoundedIcon from "@mui/icons-material/InsightsRounded";
import Groups2RoundedIcon from "@mui/icons-material/Groups2Rounded";
import CalendarMonthRoundedIcon from "@mui/icons-material/CalendarMonthRounded";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import HelpOutlineRoundedIcon from "@mui/icons-material/HelpOutlineRounded";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import type { SvgIconComponent } from "@mui/icons-material";

type SidebarItemProps = {
  label: string;
  icon: SvgIconComponent;
  active?: boolean;
};

function SidebarItem({
  label,
  icon: Icon,
  active = false,
}: SidebarItemProps) {
  return (
    <Box
      sx={{
        height: 46,
        px: 1.5,
        borderRadius: "14px",
        display: "flex",
        alignItems: "center",
        gap: 1.25,
        color: active ? "#fff" : "#6f6670",
        bgcolor: active ? "#a77483" : "transparent",
        boxShadow: active ? "0 10px 24px rgba(167, 116, 131, 0.28)" : "none",
        cursor: "pointer",
        transition: "all 0.2s ease",
        "&:hover": {
          bgcolor: active ? "#a77483" : "#ece4e8",
        },
      }}
    >
      <Icon sx={{ fontSize: 20 }} />
      <Typography sx={{ fontSize: 14, fontWeight: 600 }}>{label}</Typography>
    </Box>
  );
}

export function Sidebar() {
  return (
    <Box
      sx={{
        p: 2.25,
        display: "flex",
        flexDirection: "column",
        gap: 2,
        height: "100%",
        boxSizing: "border-box",
      }}
    >
      <Box sx={{ px: 1, pt: 0.5 }}>
        <Typography
          sx={{
            fontSize: 22,
            fontWeight: 800,
            color: "#2a2428",
          }}
        >
          Heatmap
        </Typography>
        <Typography sx={{ fontSize: 12, color: "#9a8c93" }}>
          Workspace dashboard
        </Typography>
      </Box>

      <Stack spacing={0.75}>
        <SidebarItem label="Dashboard" icon={DashboardRoundedIcon} active />
        <SidebarItem label="Projects" icon={FolderRoundedIcon} />
        <SidebarItem label="Analytics" icon={InsightsRoundedIcon} />
        <SidebarItem label="Team" icon={Groups2RoundedIcon} />
        <SidebarItem label="Calendar" icon={CalendarMonthRoundedIcon} />
      </Stack>

      <Box
        sx={{
          mx: 1,
          my: 0.5,
        }}
      />

      <Stack spacing={0.75}>
        <SidebarItem label="Settings" icon={SettingsRoundedIcon} />
        <SidebarItem label="Help" icon={HelpOutlineRoundedIcon} />
        <SidebarItem label="Logout" icon={LogoutRoundedIcon} />
      </Stack>

      <Box sx={{ mt: "auto" }}>
        <Paper
          sx={{
            p: 2,
            borderRadius: "24px",
            color: "#fff",
            background: "linear-gradient(145deg, #1d1d22 0%, #0f1013 100%)",
          }}
        >
          <Typography sx={{ fontWeight: 700, fontSize: 15 }}>
            Upgrade to Pro
          </Typography>

          <Typography
            sx={{
              fontSize: 12,
              opacity: 0.72,
              mt: 0.75,
              mb: 2,
            }}
          >
            Unlock advanced analytics, reports and team tools.
          </Typography>

          <Button
            fullWidth
            variant="contained"
            sx={{
              bgcolor: "#a77483",
              textTransform: "none",
              borderRadius: "14px",
              fontWeight: 700,
              "&:hover": {
                bgcolor: "#996a78",
              },
            }}
          >
            Upgrade
          </Button>
        </Paper>
      </Box>
    </Box>
  );
}