import {
    Avatar,
    Box,
    Grid,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Typography,
} from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";

export default function AboutInstructor({ courseDetail }) {
    return (
        <Box>
            <Grid container spacing={2}>
                <Grid xs={3}>
                    <img
                        src="/src/assets/Instructor/1675313538107.jpeg"
                        alt=""
                        style={{ width: "305px", height: "auto" }}
                    />
                </Grid>
                <Grid xs={9}>
                    <Typography>
                        <Typography gutterBottom variant="h4" component="div">
                            Name :{" "}
                            {courseDetail?.teacher &&
                            courseDetail.teacher.length > 0
                                ? courseDetail.teacher[0].username
                                : "Unknown"}
                        </Typography>
                        <Typography variant="h5" sx={{ paddingTop: "5px" }}>
                            Role :{" "}
                            {courseDetail?.teacher &&
                            courseDetail.teacher.length > 0
                                ? courseDetail.teacher[0].role
                                : "Unknown"}
                        </Typography>
                        <Box>
                            <List>
                                <ListItem disablePadding>
                                    <ListItemButton>
                                        <ListItemIcon>
                                            <SchoolIcon />
                                        </ListItemIcon>
                                        <ListItemText
                                            primary={
                                                courseDetail?.teacher &&
                                                courseDetail.teacher.length > 0
                                                    ? courseDetail.teacher[0]
                                                          .courses.length +
                                                      " courses"
                                                    : "Unknown"
                                            }
                                        />
                                    </ListItemButton>
                                </ListItem>
                            </List>
                        </Box>
                        <Typography variant="body2" gutterBottom>
                            ★ {courseDetail?.rating}{" "}
                            {courseDetail?.comments.length}   reviews
                        </Typography>
                    </Typography>
                </Grid>
            </Grid>
        </Box>
    );
}
