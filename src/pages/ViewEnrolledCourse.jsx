import { Box, Button, Grid, Typography } from "@mui/material";
import { DefaultPlayer as Video } from "react-html5video";
import "react-html5video/dist/styles.css";

import introVideo from "../assets/video/lesson.mp4";
import thumb from "../assets/Instructor/1675313538107.jpeg";
import UpcomingIcon from "@mui/icons-material/Upcoming";

export default function ViewEnrolledCourse() {
    return (
        <Box>
            <Typography>Hello World!!!</Typography>
            <Grid container spacing={2}>
                <Grid xs={12} md={9}>
                    <Box sx={{ m: 4 }}>
                        <Video
                            autoPlay
                            loop
                            poster={thumb}
                            onCanPlayThrough={() => {
                                console.log("Video Play");
                            }}
                        >
                            <source src={introVideo} type="video/webm" />
                        </Video>
                    </Box>
                </Grid>
                <Grid xs={12} md={3}>
                    <Box sx={{ mt: 4, mr: 4 }}>
                        <Button
                            variant="outlined"
                            fullWidth
                            startIcon={<UpcomingIcon />}
                        >
                            View Courses
                        </Button>
                        <Typography
                            sx={{
                                width: "100%",
                                bgcolor: "buttonColor.backgroundColor",
                                color: "white",
                                textAlign: "center",
                                mt:2,
                                p:2
                            }}
                        >
                            Course Name
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
}
