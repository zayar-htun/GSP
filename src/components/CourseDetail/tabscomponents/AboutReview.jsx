import { Avatar, Box, Card, Divider, Rating, Typography } from "@mui/material";

export default function AboutReview() {
    return (
        <Box>
            <Card sx={{ boxShadow: 0 }}>
                <Box
                    sx={{
                        px: "32px",
                        paddingTop: "32px",
                        paddingBottom: "48px",
                    }}
                >
                    <Typography
                        sx={{
                            fontSize: "32px",
                            fontWeight: 500,
                            lineHeight: "38.4px",
                        }}
                    >
                        Reviews
                    </Typography>
                    <Box>
                        <Card sx={{ boxShadow: 0 }}>
                            <Box sx={{ display: "flex", margin: 2 }}>
                                <Box>
                                    <Avatar
                                        alt="Remy Sharp"
                                        src="/src/assets/Instructor/1675313538107.jpeg"
                                        sx={{ width: 82, height: 82 }}
                                    />
                                </Box>
                                <Box sx={{ marginLeft: "10px" }}>
                                    <Typography variant="h4">Name</Typography>
                                    <Typography variant="h6">Date</Typography>
                                </Box>
                            </Box>
                            <Rating name="read-only" value={4} readOnly />
                            <Typography variant="body1">
                                Lorem ipsum dolor sit amet consectetur. Pharetra
                                fermentum risus ac id. Aenean purus enim neque
                                amet pellentesque nunc a vestibulum. Sed neque
                                ultrices neque lectus tempus orci. Auctor et
                                magna habitant volutpat elit eget tempus
                                adipiscing dignissim.
                            </Typography>
                            <Divider sx={{my:2}}/>
                        </Card>
                        <Card sx={{ boxShadow: 0 }}>
                            <Box sx={{ display: "flex", margin: 2 }}>
                                <Box>
                                    <Avatar
                                        alt="Remy Sharp"
                                        src="/src/assets/Instructor/1675313538107.jpeg"
                                        sx={{ width: 82, height: 82 }}
                                    />
                                </Box>
                                <Box sx={{ marginLeft: "10px" }}>
                                    <Typography variant="h4">Name</Typography>
                                    <Typography variant="h6">Date</Typography>
                                </Box>
                            </Box>
                            <Rating name="read-only" value={4} readOnly />
                            <Typography variant="body1">
                                Lorem ipsum dolor sit amet consectetur. Pharetra
                                fermentum risus ac id. Aenean purus enim neque
                                amet pellentesque nunc a vestibulum. Sed neque
                                ultrices neque lectus tempus orci. Auctor et
                                magna habitant volutpat elit eget tempus
                                adipiscing dignissim.
                            </Typography>
                            <Divider sx={{my:2}}/>
                        </Card>
                        <Card sx={{ boxShadow: 0 }}>
                            <Box sx={{ display: "flex", margin: 2 }}>
                                <Box>
                                    <Avatar
                                        alt="Remy Sharp"
                                        src="/src/assets/Instructor/1675313538107.jpeg"
                                        sx={{ width: 82, height: 82 }}
                                    />
                                </Box>
                                <Box sx={{ marginLeft: "10px" }}>
                                    <Typography variant="h4">Name</Typography>
                                    <Typography variant="h6">Date</Typography>
                                </Box>
                            </Box>
                            <Rating name="read-only" value={4} readOnly />
                            <Typography variant="body1">
                                Lorem ipsum dolor sit amet consectetur. Pharetra
                                fermentum risus ac id. Aenean purus enim neque
                                amet pellentesque nunc a vestibulum. Sed neque
                                ultrices neque lectus tempus orci. Auctor et
                                magna habitant volutpat elit eget tempus
                                adipiscing dignissim.
                            </Typography>
                            <Divider sx={{my:2}}/>
                        </Card>
                        <Card sx={{ boxShadow: 0 }}>
                            <Box sx={{ display: "flex", margin: 2 }}>
                                <Box>
                                    <Avatar
                                        alt="Remy Sharp"
                                        src="/src/assets/Instructor/1675313538107.jpeg"
                                        sx={{ width: 82, height: 82 }}
                                    />
                                </Box>
                                <Box sx={{ marginLeft: "10px" }}>
                                    <Typography variant="h4">Name</Typography>
                                    <Typography variant="h6">Date</Typography>
                                </Box>
                            </Box>
                            <Rating name="read-only" value={4} readOnly />
                            <Typography variant="body1">
                                Lorem ipsum dolor sit amet consectetur. Pharetra
                                fermentum risus ac id. Aenean purus enim neque
                                amet pellentesque nunc a vestibulum. Sed neque
                                ultrices neque lectus tempus orci. Auctor et
                                magna habitant volutpat elit eget tempus
                                adipiscing dignissim.
                            </Typography>
                            <Divider sx={{my:2}}/>
                        </Card>
                        <Card sx={{ boxShadow: 0 }}>
                            <Box sx={{ display: "flex", margin: 2 }}>
                                <Box>
                                    <Avatar
                                        alt="Remy Sharp"
                                        src="/src/assets/Instructor/1675313538107.jpeg"
                                        sx={{ width: 82, height: 82 }}
                                    />
                                </Box>
                                <Box sx={{ marginLeft: "10px" }}>
                                    <Typography variant="h4">Name</Typography>
                                    <Typography variant="h6">Date</Typography>
                                </Box>
                            </Box>
                            <Rating name="read-only" value={4} readOnly />
                            <Typography variant="body1">
                                Lorem ipsum dolor sit amet consectetur. Pharetra
                                fermentum risus ac id. Aenean purus enim neque
                                amet pellentesque nunc a vestibulum. Sed neque
                                ultrices neque lectus tempus orci. Auctor et
                                magna habitant volutpat elit eget tempus
                                adipiscing dignissim.
                            </Typography>
                            <Divider sx={{my:2}}/>
                        </Card>
                    </Box>
                </Box>
            </Card>
        </Box>
    );
}
