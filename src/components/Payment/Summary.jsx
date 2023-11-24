import { Box, Button, Card, Divider, Typography } from "@mui/material";

export default function Summary() {
    return (
        <Box>
            <Card sx={{ maxWidth: "100%" }}>
                <Box sx={{ py: "24px", px: "16px" }}>
                    <Typography
                        sx={{
                            fontSize: "32px",
                            fontWeight: 500,
                            lineHeight: "120%",
                            mb: "24px",
                        }}
                    >
                        Summary
                    </Typography>

                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",
                        }}
                    >
                        <Box>
                            <Typography
                                sx={{
                                    fontSize: "16px",
                                    fontWeight: 400,
                                    lineHeight: "24px",
                                    mb: "12px",
                                }}
                            >
                                SubTotal
                            </Typography>
                            <Typography
                                sx={{
                                    fontSize: "16px",
                                    fontWeight: 400,
                                    lineHeight: "24px",
                                    mb: "12px",
                                }}
                            >
                                Discount
                            </Typography>
                        </Box>
                        <Box>
                            <Typography
                                sx={{
                                    fontSize: "16px",
                                    fontWeight: 400,
                                    lineHeight: "24px",
                                    mb: "12px",
                                }}
                            >
                                300000 MMK
                            </Typography>
                            <Typography
                                sx={{
                                    fontSize: "16px",
                                    fontWeight: 400,
                                    lineHeight: "24px",
                                    mb: "12px",
                                }}
                            >
                                0 MMk
                            </Typography>
                        </Box>
                    </Box>

                    <Divider />

                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            mt: "12px",
                        }}
                    >
                        <Box>
                            <Typography
                                sx={{
                                    fontSize: "24px",
                                    fontWeight: 400,
                                    lineHeight: "120%",
                                    mb: "12px",
                                }}
                            >
                                Total
                            </Typography>
                        </Box>
                        <Box>
                            <Typography
                                sx={{
                                    fontSize: "24px",
                                    fontWeight: 400,
                                    lineHeight: "120%",
                                    mb: "12px",
                                }}
                            >
                                300000 MMK
                            </Typography>
                        </Box>
                    </Box>

                    {/* <Box>
                        <Button
                            variant="contained"
                            sx={{
                                mt:"24px",
                                width: "100%",
                                py: "16px",
                                px: "20px",
                                borderRadius: "50px",
                                bgcolor: "buttonColor.backgroundColor",
                                boxShadow: 1,
                            }}
                            onClick={() => {}}
                        >
                            <Typography variant="h6">
                                Complete Checkout
                            </Typography>
                        </Button>
                    </Box> */}
                </Box>
            </Card>
        </Box>
    );
}
