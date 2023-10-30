import {
    Avatar,
    Box,
    Drawer,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
} from "@mui/material";
import { green } from "@mui/material/colors";
import LoginIcon from "@mui/icons-material/Login";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import DashboardIcon from "@mui/icons-material/Dashboard";
import CastForEducationIcon from "@mui/icons-material/CastForEducation";
import { useLocation, useNavigate } from "react-router-dom";
import { themeContext } from "../ThemedApp";
import { useContext } from "react";

export default function MainDrawer({ showDrawer, toggleDrawer }) {
    const navigate = useNavigate();
    const location = useLocation();
    const { authUser } = useContext(themeContext);
    const storedUser = JSON.parse(localStorage.getItem("user"));

    // console.log(storedUser.user.role);

    return (
        <Box>
            <Drawer anchor="left" open={showDrawer} onClose={toggleDrawer}>
                <Box
                    sx={{
                        bgcolor: green[900],
                        width: 250,
                        height: 250,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "flex-end",
                    }}
                >
                    <Avatar sx={{ width: 78, height: 78, mb: -4 }}>A</Avatar>
                </Box>
                <Box sx={{ mt: 5 }}>
                    <List>
                        <ListItemButton
                            onClick={() => {
                                navigate("/register");
                                toggleDrawer();
                            }}
                        >
                            <ListItemIcon>
                                <HowToRegIcon />
                            </ListItemIcon>
                            <ListItemText primary="Register" />
                        </ListItemButton>
                        <ListItemButton
                            onClick={() => {
                                navigate("/login");
                                toggleDrawer();
                            }}
                        >
                            <ListItemIcon>
                                <LoginIcon />
                            </ListItemIcon>
                            <ListItemText primary="Login" />
                        </ListItemButton>
                        {storedUser.user.role === "Teacher" && (
                            <ListItemButton
                                onClick={() => {
                                    navigate("/dashboard");
                                    toggleDrawer();
                                }}
                            >
                                <ListItemIcon>
                                    <DashboardIcon />
                                </ListItemIcon>
                                <ListItemText primary="Dashboard" />
                            </ListItemButton>
                        )}
                        {storedUser.user.role === "Student" && (
                            <ListItemButton
                                onClick={() => {
                                    navigate("/enrolledCourse");
                                    toggleDrawer();
                                }}
                            >
                                <ListItemIcon>
                                    <CastForEducationIcon />
                                </ListItemIcon>
                                <ListItemText primary="Enrolled Courses" />
                            </ListItemButton>
                        )}
                    </List>
                </Box>
            </Drawer>
        </Box>
    );
}
