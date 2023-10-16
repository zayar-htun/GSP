import {
    Box,
    Card,
    Grid,
    IconButton,
    TextField,
    Typography,
} from "@mui/material";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";

export default function Payment() {
    return (
        <Box>
            <Card sx={{ maxWidth: "100%", boxShadow: 1 }}>
                <Box sx={{ px: "20px", py: "24px" }}>
                    <Typography
                        sx={{
                            fontSize: "32px",
                            lineHeight: "120%",
                            fontWeight: 500,
                        }}
                    >
                        Payment Method
                    </Typography>
                </Box>
                <Box sx={{ borderRadius: "4px", bgcolor: "#FBFBFB" }}>
                    <Box sx={{ px: "20px", py: "24px" }}>
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                            }}
                        >
                            <Box sx={{ display: "flex", alignItems: "center" }}>
                                <IconButton>
                                    <RadioButtonCheckedIcon />
                                </IconButton>
                                <Typography
                                    sx={{
                                        fontSize: "24px",
                                        lineHeight: "120%",
                                        fontWeight: 400,
                                    }}
                                >
                                    Credit or Debit Card
                                </Typography>
                            </Box>
                            <Box>
                                <img
                                    src="/src/assets/Payment/Visa Inc. svg.svg"
                                    alt=""
                                />
                            </Box>
                        </Box>
                        <Box sx={{ mt: "24px" }}>
                            <Box>
                                <Typography
                                    sx={{
                                        mb: 1,
                                        fontSize: "22px",
                                        lineHeight: "24px",
                                        fontWeight: 500,
                                    }}
                                >
                                    Name
                                </Typography>
                                <TextField
                                    id="outlined-basic"
                                    placeholder="1234 1234 1234 1234"
                                    fullWidth
                                    variant="outlined"
                                />
                            </Box>
                            <Box sx={{ mt: "24px" }}>
                                <Typography
                                    sx={{
                                        mb: 1,
                                        fontSize: "22px",
                                        lineHeight: "24px",
                                        fontWeight: 500,
                                    }}
                                >
                                    Card Number
                                </Typography>
                                <TextField
                                    id="outlined-basic"
                                    placeholder="1234 1234 1234 1234"
                                    fullWidth
                                    variant="outlined"
                                />
                            </Box>
                            <Box sx={{ mt: "24px" }}>
                                <Grid container spacing={2}>
                                    <Grid item xs={6}>
                                        <Typography
                                            sx={{
                                                mb: 1,
                                                fontSize: "22px",
                                                lineHeight: "24px",
                                                fontWeight: 500,
                                            }}
                                        >
                                            Valid Through
                                        </Typography>
                                        <TextField
                                            id="outlined-basic"
                                            placeholder="15/6/2026"
                                            fullWidth
                                            variant="outlined"
                                        />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Typography
                                            sx={{
                                                mb: 1,
                                                fontSize: "22px",
                                                lineHeight: "24px",
                                                fontWeight: 500,
                                            }}
                                        >
                                            CVV
                                        </Typography>
                                        <TextField
                                            id="outlined-basic"
                                            placeholder="***"
                                            fullWidth
                                            variant="outlined"
                                        />
                                    </Grid>
                                </Grid>
                            </Box>
                            <Box sx={{ mt: "24px" }}>
                                <Typography
                                    sx={{
                                        mb: 1,
                                        fontSize: "22px",
                                        lineHeight: "24px",
                                        fontWeight: 500,
                                    }}
                                >
                                    Ammount
                                </Typography>
                                <TextField
                                    id="outlined-basic"
                                    placeholder="1234 1234 1234 1234"
                                    fullWidth
                                    variant="outlined"
                                />
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Card>
        </Box>
    );
}
