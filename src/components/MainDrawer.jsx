import {
    Avatar,
    Box,
    Drawer,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Typography,
} from "@mui/material";
import { green } from "@mui/material/colors";
import LoginIcon from "@mui/icons-material/Login";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import DashboardIcon from "@mui/icons-material/Dashboard";
import CastForEducationIcon from "@mui/icons-material/CastForEducation";
import { useLocation, useNavigate } from "react-router-dom";
import { themeContext } from "../ThemedApp";
import { useContext } from "react";
import LogoutIcon from "@mui/icons-material/Logout";

export default function MainDrawer({ showDrawer, toggleDrawer }) {
    const navigate = useNavigate();
    const location = useLocation();
    const { authUser } = useContext(themeContext);
    const storedUser = JSON.parse(localStorage.getItem("user"));

    console.log(storedUser.user.role);

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
                    <Typography sx={{ ml: 9 }}>
                        <b>role : </b>
                        {storedUser.user.role}
                    </Typography>
                    <List>
                        {storedUser.user && (
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
                        )}

                        {storedUser.user && (
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
                        )}

                        {storedUser.user?.role === "Teacher" && (
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
                        {storedUser.user?.role === "Admin" && (
                            <ListItemButton
                                onClick={() => {
                                    navigate("/admindash");
                                    toggleDrawer();
                                }}
                            >
                                <ListItemIcon>
                                    <DashboardIcon />
                                </ListItemIcon>
                                <ListItemText primary="Admin Dashboard" />
                            </ListItemButton>
                        )}

                        {storedUser?.user?.role === "Student" && (
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

                        <ListItemButton
                            onClick={() => {
                                
                                navigate("/login");

                                // Close the drawer
                                toggleDrawer();
                            }}
                        >
                            <ListItemIcon>
                                <LogoutIcon />
                            </ListItemIcon>
                            <ListItemText primary="Logout" />
                        </ListItemButton>
                    </List>
                </Box>
            </Drawer>
        </Box>
    );
}
