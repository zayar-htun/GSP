import { Box, Button, Card, CardMedia, Typography } from "@mui/material";

export default function AboutGsp() {
    return (
        <Box>
            <Box sx={{ padding: 3 }}>
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                    }}
                >
                    <Box>
                        <Card sx={{ maxWidth: 500 }}>
                            <CardMedia
                                sx={{ minWidth: "151px" }}
                                component="img"
                                height="140"
                                image="https://www.creativehatti.com/wp-content/uploads/edd/2021/02/Creative-work-with-brain-social-media-banner-design-template-07-large.jpg"
                                alt="green iguana"
                            />
                        </Card>
                    </Box>
                    <Box sx={{marginLeft: 2 }}>
                        <Typography variant="h4">Lorem ipsum</Typography>
                        <Typography variant="h6">
                            Lorem ipsum dolor sit amet consectetur. Pharetra
                            fermentum risus ac id. Aenean purus enim neque amet
                            pellentesque nunc a vestibulum. Sed neque ultrices
                            neque lectus tempus orci. Auctor et magna habitant
                            volutpat elit eget tempus adipiscing dignissim.
                        </Typography>
                        <Button
                            variant="contained"
                            sx={{
                                borderRadius: "100px",
                                bgcolor: "buttonColor.backgroundColor",
                                marginTop:"10px"
                            }}
                            onClick={() => {
                            }}
                        >
                            <Typography variant="h6" sx={{ py: 1, px: 2 }}>
                                Learn More
                            </Typography>
                        </Button>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}
