import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";
import { Avatar, Button, IconButton } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useLocation, useNavigate, useParams } from "react-router-dom";

const Img = styled("img")({
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
});

export default function ShowCourse() {
    const location = useLocation();
    const navigate = useNavigate();
    const { id } = useParams();
    const shouldShowButton = location.pathname !== `/checkout/${id}`;
    return (
        <Box
            sx={{
                p: 2,
                margin: "auto",
                maxWidth: 1200,
                boxShadow:1,
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
                    <Grid item xs container direction="column" spacing={2}>
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
                            <Typography variant="h4" color="text.secondary">
                                300000 MMK
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
                            {shouldShowButton && (
                                <Typography variant="body2" sx={{ margin: 1 }}>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit. Quos blanditiis tenetur
                                    unde suscipit, quam beatae rerum inventore
                                    consectetur, neque doloribus, cupiditate
                                    numquam dignissimos laborum fugiat deleniti?
                                    Eum quasi quidem quibusdam.
                                </Typography>
                            )}
                        </Grid>
                        <Grid item>
                            {shouldShowButton && (
                                <Button
                                    variant="contained"
                                    sx={{
                                        borderRadius: "100px",
                                        bgcolor: "buttonColor.backgroundColor",
                                        boxShadow: 1,
                                    }}
                                    onClick={() => {
                                        navigate(`/checkout/${id}`);
                                    }}
                                >
                                    <Typography
                                        variant="h6"
                                        sx={{ py: 1, px: 2 }}
                                    >
                                        Buy Now
                                    </Typography>
                                </Button>
                            )}
                        </Grid>
                    </Grid>
                    <Grid item>
                        {shouldShowButton && (
                            <IconButton>
                                <FavoriteBorderIcon />
                            </IconButton>
                        )}
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    );
}
