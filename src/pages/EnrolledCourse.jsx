import {
    Avatar,
    Box,
    ButtonBase,
    Container,
    Grid,
    Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getEnrolledCourse } from "../apicalls";
import { useState } from "react";

const Img = styled("img")({
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
});
export default function EnrolledCourse() {
    const navigate = useNavigate();
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        (async () => {
            const result = await getEnrolledCourse();
            setCourses(result.coursesEnrolled);
            console.log(result);
        })();
    }, []);
    return (
        <Box>
            <Container sx={{ my: 3 }}>
                {courses?.map(course => {
                    return (
                        <Box
                        key={course._id}
                            sx={{
                                my: 2,
                                p: 2,
                                margin: "auto",
                                maxWidth: 1200,
                                boxShadow: 1,
                                flexGrow: 1,
                                backgroundColor: theme =>
                                    theme.palette.mode === "dark"
                                        ? "#1A2027"
                                        : "#fff",
                            }}
                            onClick={() => {
                                navigate(`/viewenrolledcourse/${course._id}`);
                            }}
                        >
                            <Grid container spacing={2}>
                                <Grid item>
                                    <ButtonBase
                                        sx={{ width: 128, height: 128 }}
                                    >
                                        <Img
                                            alt="complex"
                                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/600px-JavaScript-logo.png"
                                        />
                                    </ButtonBase>
                                </Grid>
                                <Grid item xs={12} sm container>
                                    <Grid
                                        item
                                        xs
                                        container
                                        direction="column"
                                        spacing={2}
                                    >
                                        <Grid item xs>
                                            <Typography
                                                gutterBottom
                                                variant="h3"
                                                component="div"
                                            >
                                               {course.title}
                                            </Typography>
                                            <Typography
                                                variant="body2"
                                                gutterBottom
                                            >
                                                ★  ({course.comments.length} reviews)
                                            </Typography>
                                            <Box sx={{ display: "flex" }}>
                                                
                                                <Typography
                                                    variant="h5"
                                                    sx={{ paddingTop: "5px" }}
                                                >
                                                    {course.description}
                                                </Typography>
                                            </Box>
                                        </Grid>
                                        <Grid item></Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Box>
                    );
                })}
            </Container>
        </Box>
    );
}
