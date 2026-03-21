import {
  Avatar,
  Box,
  Button,
  Chip,
  Divider,
  IconButton,
  LinearProgress,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneRoundedIcon from "@mui/icons-material/NotificationsNoneRounded";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import MoreHorizRoundedIcon from "@mui/icons-material/MoreHorizRounded";
import AccessTimeRoundedIcon from "@mui/icons-material/AccessTimeRounded";
import FolderRoundedIcon from "@mui/icons-material/FolderRounded";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import Groups2RoundedIcon from "@mui/icons-material/Groups2Rounded";
import CalendarMonthRoundedIcon from "@mui/icons-material/CalendarMonthRounded";
import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";
import PauseRoundedIcon from "@mui/icons-material/PauseRounded";
import StopRoundedIcon from "@mui/icons-material/StopRounded";
import type { DashboardController } from "./Dashboard.controller";

const stats = [
  { title: "Total Projects", value: 24, subtitle: "+6 this month" },
  { title: "Active Tasks", value: 10, subtitle: "3 need review" },
  { title: "Running Meetings", value: 12, subtitle: "2 live now" },
  { title: "Pending Review", value: 2, subtitle: "High priority" },
];

const projects = [
  { name: "Heatmap Core", status: "In Progress", progress: 72 },
  { name: "Dashboard UI", status: "Review", progress: 88 },
  { name: "Auth Flow", status: "Done", progress: 100 },
  { name: "Analytics", status: "Planned", progress: 28 },
];

const team = [
  { name: "Anna Petrova", role: "Product Designer" },
  { name: "Maksim Volkov", role: "Frontend Developer" },
  { name: "Daria Smirnova", role: "Backend Engineer" },
  { name: "Ilya Sokolov", role: "QA Engineer" },
];

const meetings = [
  { title: "Weekly Product Sync", time: "10:30 AM", type: "Live" },
  { title: "Design Review", time: "01:00 PM", type: "Planned" },
  { title: "Sprint Demo", time: "04:15 PM", type: "Planned" },
];

const activityBars = [52, 80, 64, 90, 48, 72, 58];

const cardSx = {
  borderRadius: "24px",
  p: 2.25,
  bgcolor: "#ffffff",
  border: "1px solid rgba(167, 116, 131, 0.10)",
  boxShadow: "0 10px 28px rgba(167, 116, 131, 0.08)",
};

function StatCard({
  title,
  value,
  subtitle,
}: {
  title: string;
  value: number;
  subtitle: string;
}) {
  return (
    <Paper sx={cardSx}>
      <Typography sx={{ fontSize: 13, color: "#7e7480", mb: 1 }}>
        {title}
      </Typography>
      <Typography sx={{ fontSize: 34, fontWeight: 700, color: "#1e1e1e", lineHeight: 1 }}>
        {value}
      </Typography>
      <Typography sx={{ mt: 1, fontSize: 12, color: "#9a8c93" }}>
        {subtitle}
      </Typography>
    </Paper>
  );
}

function SidebarItem({
  label,
  active = false,
}: {
  label: string;
  active?: boolean;
}) {
  return (
    <Box
      sx={{
        height: 42,
        px: 1.5,
        borderRadius: "14px",
        display: "flex",
        alignItems: "center",
        gap: 1.25,
        color: active ? "#fff" : "#6f6670",
        bgcolor: active ? "#a77483" : "transparent",
        boxShadow: active ? "0 10px 24px rgba(167, 116, 131, 0.28)" : "none",
        cursor: "pointer",
      }}
    >
      <Box
        sx={{
          width: 8,
          height: 8,
          borderRadius: "50%",
          bgcolor: active ? "#fff" : "#c9b8bf",
        }}
      />
      <Typography sx={{ fontSize: 14, fontWeight: 600 }}>{label}</Typography>
    </Box>
  );
}

export type DashboardViewProps = {
    controller: DashboardController;
}

export const DashboardView = ({ controller }: DashboardViewProps) => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
      }}
    >
      <Paper
        sx={{
          minHeight: "calc(100vh - 48px)",
          border: "none",
          boxShadow: "none",
          overflow: "hidden",
          bgcolor: "#f3f4f8",
          display: "grid",
        }}
      >

        <Box sx={{ p: { xs: 2, md: 3 } }}>
          <Stack
            direction={{ xs: "column", md: "row" }}
            spacing={2}
            alignItems={{ xs: "stretch", md: "center" }}
            justifyContent="space-between"
            sx={{ mb: 3 }}
          >
            <Box>
              <Typography
                sx={{
                  fontSize: { xs: 28, md: 34 },
                  fontWeight: 800,
                  color: "#1f1a1d",
                }}
              >
                Dashboard
              </Typography>
              <Typography sx={{ color: "#8f8289", mt: 0.5 }}>
                Plan, track and collaborate across your projects.
              </Typography>
            </Box>

            <Stack direction="row" spacing={1.25} alignItems="center">
              <Paper
                sx={{
                  height: 48,
                  px: 1.5,
                  borderRadius: "16px",
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  bgcolor: "#fff",
                  border: "1px solid #ece4e8",
                  minWidth: 240,
                }}
              >
                <SearchIcon sx={{ color: "#9a8c93" }} />
                <Typography sx={{ color: "#a4979e", fontSize: 14 }}>
                  Search task, project...
                </Typography>
              </Paper>

              <IconButton
                sx={{
                  width: 48,
                  height: 48,
                  bgcolor: "#fff",
                  border: "1px solid #ece4e8",
                  borderRadius: "16px",
                }}
              >
                <NotificationsNoneRoundedIcon />
              </IconButton>

              <Button
                startIcon={<AddRoundedIcon />}
                variant="contained"
                sx={{
                  height: 48,
                  px: 2.25,
                  textTransform: "none",
                  borderRadius: "16px",
                  bgcolor: "#a77483",
                  boxShadow: "0 10px 22px rgba(167, 116, 131, 0.28)",
                  "&:hover": { bgcolor: "#996a78" },
                }}
              >
                Add Project
              </Button>
            </Stack>
          </Stack>

          <Grid container spacing={2}>
            {stats.map((item) => (
              <Grid size={{ xs: 12, sm: 6, xl: 3 }} key={item.title}>
                <StatCard {...item} />
              </Grid>
            ))}

            <Grid size={{ xs: 12, xl: 5 }}>
              <Paper sx={{ ...cardSx }}>
                <Stack direction="row" justifyContent="space-between" alignItems="center" mb={2}>
                  <Typography sx={{ fontSize: 16, fontWeight: 700, color: "#1e1e1e" }}>
                    Project Analytics
                  </Typography>
                  <Chip
                    label="This week"
                    size="small"
                    sx={{
                      bgcolor: "#f7eef2",
                      color: "#a77483",
                      fontWeight: 700,
                    }}
                  />
                </Stack>

                <Stack
                  direction="row"
                  alignItems="end"
                  spacing={1.2}
                  sx={{ height: 170, pt: 2 }}
                >
                  {activityBars.map((bar, index) => (
                    <Box
                      key={index}
                      sx={{
                        flex: 1,
                        height: `${bar}%`,
                        borderRadius: "18px",
                        background:
                          index % 2 === 0
                            ? "linear-gradient(180deg, #c08a97 0%, #a77483 100%)"
                            : "repeating-linear-gradient(135deg, #eadce1 0px, #eadce1 5px, #f7f1f4 5px, #f7f1f4 10px)",
                        border: index % 2 === 0 ? "none" : "1px solid #e7d8de",
                      }}
                    />
                  ))}
                </Stack>

                <Stack direction="row" spacing={2.5} sx={{ mt: 2 }}>
                  <Stack direction="row" spacing={1} alignItems="center">
                    <Box sx={{ width: 10, height: 10, borderRadius: "50%", bgcolor: "#a77483" }} />
                    <Typography sx={{ fontSize: 13, color: "#8f8289" }}>Completed</Typography>
                  </Stack>
                  <Stack direction="row" spacing={1} alignItems="center">
                    <Box
                      sx={{
                        width: 10,
                        height: 10,
                        borderRadius: "50%",
                        bgcolor: "#eadce1",
                        border: "1px solid #d8c4cb",
                      }}
                    />
                    <Typography sx={{ fontSize: 13, color: "#8f8289" }}>Planned</Typography>
                  </Stack>
                </Stack>
              </Paper>
            </Grid>

            <Grid size={{ xs: 12, xl: 4 }}>
              <Paper sx={{ ...cardSx }}>
                <Stack direction="row" justifyContent="space-between" alignItems="center" mb={1.5}>
                  <Typography sx={{ fontSize: 16, fontWeight: 700 }}>Running Meetings</Typography>
                  <IconButton size="small">
                    <MoreHorizRoundedIcon />
                  </IconButton>
                </Stack>

                <Stack spacing={1.5}>
                  {meetings.map((meeting) => (
                    <Paper
                      key={meeting.title}
                      sx={{
                        p: 1.5,
                        borderRadius: "18px",
                        bgcolor: meeting.type === "Live" ? "#f8eef1" : "#fafafb",
                        border: "1px solid #ece4e8",
                      }}
                    >
                      <Stack direction="row" justifyContent="space-between" alignItems="center">
                        <Box>
                          <Typography sx={{ fontWeight: 700, color: "#1f1a1d" }}>
                            {meeting.title}
                          </Typography>
                          <Stack direction="row" spacing={0.75} alignItems="center" sx={{ mt: 0.5 }}>
                            <AccessTimeRoundedIcon sx={{ fontSize: 16, color: "#9a8c93" }} />
                            <Typography sx={{ fontSize: 13, color: "#8f8289" }}>
                              {meeting.time}
                            </Typography>
                          </Stack>
                        </Box>
                        <Chip
                          label={meeting.type}
                          size="small"
                          sx={{
                            bgcolor: meeting.type === "Live" ? "#a77483" : "#efe6ea",
                            color: meeting.type === "Live" ? "#fff" : "#86636f",
                            fontWeight: 700,
                          }}
                        />
                      </Stack>
                    </Paper>
                  ))}
                </Stack>

                <Button
                  startIcon={<PlayArrowRoundedIcon />}
                  variant="contained"
                  fullWidth
                  sx={{
                    mt: 2,
                    height: 48,
                    borderRadius: "16px",
                    textTransform: "none",
                    bgcolor: "#2f7d57",
                    "&:hover": { bgcolor: "#28694a" },
                  }}
                >
                  Start Meeting
                </Button>
              </Paper>
            </Grid>

            <Grid size={{ xs: 12, xl: 3 }}>
              <Paper sx={{ ...cardSx }}>
                <Stack direction="row" justifyContent="space-between" alignItems="center" mb={2}>
                  <Typography sx={{ fontSize: 16, fontWeight: 700 }}>Project Progress</Typography>
                  <TrendingUpRoundedIcon sx={{ color: "#a77483" }} />
                </Stack>

                <Box
                  sx={{
                    width: 180,
                    height: 180,
                    mx: "auto",
                    borderRadius: "50%",
                    background: `conic-gradient(#a77483 0 41%, #eadce1 41% 100%)`,
                    display: "grid",
                    placeItems: "center",
                    mb: 2,
                  }}
                >
                  <Box
                    sx={{
                      width: 132,
                      height: 132,
                      borderRadius: "50%",
                      bgcolor: "#fff",
                      display: "grid",
                      placeItems: "center",
                    }}
                  >
                    <Box sx={{ textAlign: "center" }}>
                      <Typography sx={{ fontSize: 36, fontWeight: 800, color: "#1f1a1d", lineHeight: 1 }}>
                        41%
                      </Typography>
                      <Typography sx={{ fontSize: 12, color: "#8f8289" }}>
                        overall done
                      </Typography>
                    </Box>
                  </Box>
                </Box>

                <Stack direction="row" justifyContent="space-between">
                  {[
                    { label: "Completed", color: "#2f7d57" },
                    { label: "In Progress", color: "#a77483" },
                    { label: "Pending", color: "#d5c0c8" },
                  ].map((item) => (
                    <Stack key={item.label} direction="row" spacing={0.75} alignItems="center">
                      <Box sx={{ width: 10, height: 10, borderRadius: "50%", bgcolor: item.color }} />
                      <Typography sx={{ fontSize: 12, color: "#8f8289" }}>{item.label}</Typography>
                    </Stack>
                  ))}
                </Stack>
              </Paper>
            </Grid>

            <Grid size={{ xs: 12, xl: 7 }}>
              <Paper sx={{ ...cardSx }}>
                <Stack direction="row" justifyContent="space-between" alignItems="center" mb={2}>
                  <Typography sx={{ fontSize: 16, fontWeight: 700 }}>Team Collaboration</Typography>
                  <Button
                    size="small"
                    startIcon={<Groups2RoundedIcon />}
                    sx={{
                      textTransform: "none",
                      borderRadius: "12px",
                      color: "#a77483",
                      bgcolor: "#f8eef1",
                      px: 1.25,
                    }}
                  >
                    Add Member
                  </Button>
                </Stack>

                <List sx={{ p: 0 }}>
                  {team.map((member, index) => (
                    <ListItem
                      key={member.name}
                      disableGutters
                      sx={{
                        py: 1.1,
                        borderBottom: index !== team.length - 1 ? "1px solid #f0e7eb" : "none",
                      }}
                      secondaryAction={
                        <Chip
                          label="Active"
                          size="small"
                          sx={{
                            bgcolor: "#eef7f1",
                            color: "#2f7d57",
                            fontWeight: 700,
                          }}
                        />
                      }
                    >
                      <ListItemAvatar>
                        <Avatar sx={{ bgcolor: "#c08a97", color: "#fff" }}>
                          {member.name[0]}
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText
                        primary={
                          <Typography sx={{ fontWeight: 700, color: "#1f1a1d" }}>
                            {member.name}
                          </Typography>
                        }
                        secondary={
                          <Typography sx={{ color: "#8f8289", fontSize: 13 }}>
                            {member.role}
                          </Typography>
                        }
                      />
                    </ListItem>
                  ))}
                </List>
              </Paper>
            </Grid>

            <Grid size={{ xs: 12, xl: 5 }}>
              <Paper sx={{ ...cardSx }}>
                <Stack direction="row" justifyContent="space-between" alignItems="center" mb={2}>
                  <Typography sx={{ fontSize: 16, fontWeight: 700 }}>Projects</Typography>
                  <IconButton size="small">
                    <FolderRoundedIcon sx={{ color: "#a77483" }} />
                  </IconButton>
                </Stack>

                <Stack spacing={1.5}>
                  {projects.map((project) => (
                    <Box key={project.name}>
                      <Stack direction="row" justifyContent="space-between" alignItems="center" mb={0.8}>
                        <Box>
                          <Typography sx={{ fontWeight: 700, color: "#1f1a1d" }}>
                            {project.name}
                          </Typography>
                          <Typography sx={{ fontSize: 12, color: "#8f8289" }}>
                            {project.status}
                          </Typography>
                        </Box>
                        <Typography sx={{ fontWeight: 700, color: "#7b6870" }}>
                          {project.progress}%
                        </Typography>
                      </Stack>
                      <LinearProgress
                        variant="determinate"
                        value={project.progress}
                        sx={{
                          height: 10,
                          borderRadius: 999,
                          bgcolor: "#efe6ea",
                          "& .MuiLinearProgress-bar": {
                            borderRadius: 999,
                            background:
                              "linear-gradient(90deg, #c08a97 0%, #a77483 100%)",
                          },
                        }}
                      />
                    </Box>
                  ))}
                </Stack>
              </Paper>
            </Grid>

            <Grid size={{ xs: 12, md: 7, xl: 8 }}>
              <Paper sx={{ ...cardSx }}>
                <Stack direction="row" justifyContent="space-between" alignItems="center" mb={2}>
                  <Typography sx={{ fontSize: 16, fontWeight: 700 }}>Upcoming Timeline</Typography>
                  <CalendarMonthRoundedIcon sx={{ color: "#a77483" }} />
                </Stack>

                <Stack spacing={1.25}>
                  {[
                    ["10:00", "Backend sync", "API contract and auth cleanup"],
                    ["12:30", "UI review", "Dashboard cards and responsive layout"],
                    ["15:00", "Client demo", "Heatmap analytics preview"],
                  ].map(([time, title, desc]) => (
                    <Paper
                      key={title}
                      sx={{
                        p: 1.5,
                        borderRadius: "18px",
                        bgcolor: "#fcfbfc",
                        border: "1px solid #efe6ea",
                      }}
                    >
                      <Stack direction={{ xs: "column", sm: "row" }} spacing={2} alignItems={{ sm: "center" }}>
                        <Typography
                          sx={{
                            minWidth: 72,
                            fontWeight: 800,
                            color: "#a77483",
                          }}
                        >
                          {time}
                        </Typography>
                        <Box>
                          <Typography sx={{ fontWeight: 700, color: "#1f1a1d" }}>
                            {title}
                          </Typography>
                          <Typography sx={{ fontSize: 13, color: "#8f8289" }}>
                            {desc}
                          </Typography>
                        </Box>
                      </Stack>
                    </Paper>
                  ))}
                </Stack>
              </Paper>
            </Grid>

            <Grid size={{ xs: 12, md: 5, xl: 4 }}>
              <Paper
                sx={{
                  ...cardSx,
                  background: "linear-gradient(135deg, #204634 0%, #101d17 100%)",
                  color: "#fff",
                }}
              >
                <Stack direction="row" justifyContent="space-between" alignItems="center" mb={2}>
                  <Typography sx={{ fontSize: 16, fontWeight: 700 }}>Time Tracker</Typography>
                  <CheckCircleRoundedIcon sx={{ color: "#83d1a8" }} />
                </Stack>

                <Typography
                  sx={{
                    fontSize: 46,
                    fontWeight: 800,
                    lineHeight: 1,
                    letterSpacing: "0.04em",
                    mb: 1.5,
                  }}
                >
                  {controller.formattedTime}
                </Typography>

                <Typography sx={{ fontSize: 13, color: "rgba(255,255,255,0.7)", mb: 3 }}>
                  Focus session for Dashboard UI implementation
                </Typography>

                <Stack direction="row" spacing={1.25}>
                  <IconButton onClick={() => controller.startWorkSession()} sx={{ bgcolor: "#2f7d57", color: "#fff", "&:hover": { bgcolor: "#28694a" } }}>
                    <PlayArrowRoundedIcon />
                  </IconButton>
                  <IconButton sx={{ bgcolor: "#a77483", color: "#fff", "&:hover": { bgcolor: "#996a78" } }}>
                    <PauseRoundedIcon />
                  </IconButton>
                  <IconButton onClick={() => controller.endWorkSession()} sx={{ bgcolor: "#813d49", color: "#fff", "&:hover": { bgcolor: "#6c333d" } }}>
                    <StopRoundedIcon />
                  </IconButton>
                </Stack>
              </Paper>
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </Box>
  );
}