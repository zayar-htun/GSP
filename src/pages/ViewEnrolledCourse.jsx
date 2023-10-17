import {
    Box,
    Button,
    Card,
    CardContent,
    Container,
    FormControl,
    Grid,
    IconButton,
    Input,
    InputAdornment,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Typography,
} from "@mui/material";
import { DefaultPlayer as Video } from "react-html5video";
import "react-html5video/dist/styles.css";

import introVideo from "../assets/video/lesson.mp4";
import thumb from "../assets/Instructor/1675313538107.jpeg";
import UpcomingIcon from "@mui/icons-material/Upcoming";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import AddCommentIcon from "@mui/icons-material/AddComment";
import { useRef } from "react";
export default function ViewEnrolledCourse() {
    const input = useRef();
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
                    <Container>
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "space-around",
                                mb: 3,
                            }}
                        >
                            <Typography
                                sx={{
                                    bgcolor: "buttonColor.backgroundColor",
                                    color: "white",
                                    borderRadius: "12px",
                                    p: 2,
                                }}
                            >
                                Likes - 3
                            </Typography>
                            <Typography
                                sx={{
                                    bgcolor: "buttonColor.backgroundColor",
                                    color: "white",
                                    borderRadius: "12px",
                                    p: 2,
                                }}
                            >
                                Comments - 10
                            </Typography>
                            <Typography
                                sx={{
                                    bgcolor: "buttonColor.backgroundColor",
                                    color: "white",
                                    borderRadius: "12px",
                                    p: 2,
                                }}
                            >
                                Enrolled Student - 30
                            </Typography>
                            <Typography
                                sx={{
                                    bgcolor: "buttonColor.backgroundColor",
                                    color: "white",
                                    borderRadius: "12px",
                                    p: 2,
                                }}
                            >
                                Fees - $300
                            </Typography>
                        </Box>
                        <Box sx={{ m: 4 }}>
                            <Typography variant="h4">Course Details</Typography>
                            <Typography>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Temporibus possimus tempora,
                                nobis quod tempore commodi quidem voluptatem
                                non, sequi similique illo dicta nulla quaerat
                                ipsa magni sunt repudiandae est rem.
                            </Typography>
                        </Box>
                    </Container>
                    <Box
                        sx={{
                            m: 6,
                            p: 3,
                            bgcolor: "buttonColor.backgroundColor",
                            color: "white",
                            borderRadius:"10px"
                        }}
                    >
                        <Typography variant="h4">Reviews</Typography>
                        <Card sx={{mt:2}}>
                            <CardContent>
                                <Typography sx={{ fontSize: 23 }} gutterBottom>
                                    User Name
                                </Typography>
                                <Typography
                                    color="text.secondary"
                                    sx={{ fontSize: 14 }}
                                    gutterBottom
                                >
                                    Lorem ipsum dolor, sit amet consectetur
                                    adipisicing elit. Possimus labore iusto
                                    omnis sapiente unde dolorem suscipit esse
                                    excepturi sequi, quidem laudantium ab fugit.
                                    Blanditiis possimus laborum hic, autem
                                    incidunt deleniti?
                                </Typography>
                            </CardContent>
                        </Card>
                        <Card sx={{mt:2}}>
                            <CardContent>
                                <Typography sx={{ fontSize: 23 }} gutterBottom>
                                    User Name
                                </Typography>
                                <Typography
                                    color="text.secondary"
                                    sx={{ fontSize: 14 }}
                                    gutterBottom
                                >
                                    Lorem ipsum dolor, sit amet consectetur
                                    adipisicing elit. Possimus labore iusto
                                    omnis sapiente unde dolorem suscipit esse
                                    excepturi sequi, quidem laudantium ab fugit.
                                    Blanditiis possimus laborum hic, autem
                                    incidunt deleniti?
                                </Typography>
                            </CardContent>
                        </Card>
                        <FormControl fullWidth sx={{mt:2}}>
							<form
								onSubmit={e => {
									e.preventDefault();

									
								}}>
								<Input
									inputRef={input}
									sx={{ fontSize: "16px", py: 2 }}
									placeholder="Your comment"
									multiline
									fullWidth
									variant="standard"
									endAdornment={
										<InputAdornment position="end">
											<IconButton type="submit">
												<AddCommentIcon sx={{color:"white"}} />
											</IconButton>
										</InputAdornment>
									}
								/>
							</form>
						</FormControl>
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
                                mt: 2,
                                p: 2,
                            }}
                        >
                            Course Name Hello World
                        </Typography>
                        <Box>
                            <List>
                                <ListItem
                                    disablePadding
                                    sx={{
                                        bgcolor: "buttonColor.backgroundColor",
                                        color: "white",
                                    }}
                                >
                                    <ListItemButton>
                                        <ListItemIcon>
                                            <PlayCircleOutlineIcon
                                                sx={{ color: "white" }}
                                            />
                                        </ListItemIcon>
                                        <ListItemText primary="Inbox" />
                                        <ListItemIcon>
                                            <LockOpenIcon
                                                sx={{ color: "white" }}
                                            />
                                        </ListItemIcon>
                                    </ListItemButton>
                                </ListItem>
                                <ListItem
                                    disablePadding
                                    sx={{
                                        bgcolor: "buttonColor.backgroundColor",
                                    }}
                                >
                                    <ListItemButton>
                                        <ListItemIcon>
                                            <PlayCircleOutlineIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="Inbox" />
                                        <ListItemIcon>
                                            <LockOpenIcon />
                                        </ListItemIcon>
                                    </ListItemButton>
                                </ListItem>
                                <ListItem
                                    disablePadding
                                    sx={{
                                        bgcolor: "buttonColor.backgroundColor",
                                    }}
                                >
                                    <ListItemButton>
                                        <ListItemIcon>
                                            <PlayCircleOutlineIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="Inbox" />
                                        <ListItemIcon>
                                            <LockOpenIcon />
                                        </ListItemIcon>
                                    </ListItemButton>
                                </ListItem>
                                <ListItem
                                    disablePadding
                                    sx={{
                                        bgcolor: "buttonColor.backgroundColor",
                                    }}
                                >
                                    <ListItemButton>
                                        <ListItemIcon>
                                            <PlayCircleOutlineIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="Inbox" />
                                        <ListItemIcon>
                                            <LockOpenIcon />
                                        </ListItemIcon>
                                    </ListItemButton>
                                </ListItem>
                                <ListItem
                                    disablePadding
                                    sx={{
                                        bgcolor: "buttonColor.backgroundColor",
                                    }}
                                >
                                    <ListItemButton>
                                        <ListItemIcon>
                                            <PlayCircleOutlineIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="Inbox" />
                                        <ListItemIcon>
                                            <LockOpenIcon />
                                        </ListItemIcon>
                                    </ListItemButton>
                                </ListItem>
                                <ListItem
                                    disablePadding
                                    sx={{
                                        bgcolor: "buttonColor.backgroundColor",
                                    }}
                                >
                                    <ListItemButton>
                                        <ListItemIcon>
                                            <PlayCircleOutlineIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="Inbox" />
                                        <ListItemIcon>
                                            <LockOpenIcon />
                                        </ListItemIcon>
                                    </ListItemButton>
                                </ListItem>
                            </List>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
}
