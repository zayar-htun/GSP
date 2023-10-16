import {
    Avatar,
    Box,
    ButtonBase,
    Container,
    Grid,
    Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";

const Img = styled("img")({
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
});
export default function EnrolledCourse() {
    const navigate = useNavigate();
    return (
        <Box>
            <Container sx={{my:3}}>
                <Box
                    sx={{
                        my:2,
                        p: 2,
                        margin: "auto",
                        maxWidth: 1200,
                        boxShadow: 1,
                        flexGrow: 1,
                        backgroundColor: theme =>
                            theme.palette.mode === "dark" ? "#1A2027" : "#fff",
                    }}
                    onClick={() => {
                        navigate(`/viewenrolledcourse/1`)
                    }}
                >
                    <Grid container spacing={2}>
                        <Grid item>
                            <ButtonBase sx={{ width: 128, height: 128 }}>
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
                                        Course Name
                                    </Typography>
                                    <Typography variant="body2" gutterBottom>
                                        ★ 4 (200 reviews)
                                    </Typography>
                                    <Box sx={{ display: "flex" }}>
                                        <Avatar
                                            alt="Cindy Baker"
                                            src="/static/images/avatar/3.jpg"
                                            sx={{ marginRight: 2 }}
                                        />
                                        <Typography
                                            variant="h5"
                                            sx={{ paddingTop: "5px" }}
                                        >
                                            Sayar Zay
                                        </Typography>
                                    </Box>
                                </Grid>
                                <Grid item></Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Box>
                <Box
                    sx={{
                        my:2,
                        p: 2,
                        margin: "auto",
                        maxWidth: 1200,
                        boxShadow: 1,
                        flexGrow: 1,
                        backgroundColor: theme =>
                            theme.palette.mode === "dark" ? "#1A2027" : "#fff",
                    }}
                >
                    <Grid container spacing={2}>
                        <Grid item>
                            <ButtonBase sx={{ width: 128, height: 128 }}>
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
                                        Course Name
                                    </Typography>
                                    <Typography variant="body2" gutterBottom>
                                        ★ 4 (200 reviews)
                                    </Typography>
                                    <Box sx={{ display: "flex" }}>
                                        <Avatar
                                            alt="Cindy Baker"
                                            src="/static/images/avatar/3.jpg"
                                            sx={{ marginRight: 2 }}
                                        />
                                        <Typography
                                            variant="h5"
                                            sx={{ paddingTop: "5px" }}
                                        >
                                            Sayar Zay
                                        </Typography>
                                    </Box>
                                </Grid>
                                <Grid item></Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </Box>
    );
}
