import {
    Box,
    Button,
    Card,
    Container,
    Grid,
    IconButton,
    TextField,
    Typography,
} from "@mui/material";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import { useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function PaymentTeacher() {
    const accountNoInput = useRef();
    const pincodeInput = useRef();
    const receiveNoInput = useRef();
    const amountInput = useRef();
    const { name, price, course } = useParams();
    const [error, setError] = useState("");
    const navigate = useNavigate();
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
                    <Typography variant="subtitle2">
                        Transfer your tuition fees into this account Account
                        Profile:<b>{name}</b> Account Number:
                        <b>2141 3789 9876 2523</b>
                    </Typography>
                </Box>
                <Box sx={{ borderRadius: "4px", bgcolor: "#FBFBFB" }}>
                    <form
                        onSubmit={e => {
                            e.preventDefault();

                            const valuePin = pincodeInput.current.value;
                            if (valuePin == "619") {
                                navigate(`/success`);
                            } else {
                                setError("Pin Code Wrong");
                            }
                        }}
                    >
                        <Box sx={{ px: "20px", py: "24px" }}>
                            <Box
                                sx={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                }}
                            >
                                <Box
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                    }}
                                >
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
                                        Payment Instructions for Course Fees Via
                                        SafeVault E-Bank
                                    </Typography>
                                </Box>
                                {/* <Box>
                                <img
                                    src="/src/assets/Payment/Visa Inc. svg.svg"
                                    alt=""
                                />
                            </Box> */}
                            </Box>
                            {error === "Pin Code Wrong" && (
                                <Box sx={{bgcolor:"red"}}>
                                    <Typography sx={{m:2}}>
                                        Pin Code Wrong
                                    </Typography>
                                </Box>
                            )}
                            <Box sx={{ mt: "24px" }}>
                                <Box sx={{ mt: "24px" }}>
                                    <Typography
                                        sx={{
                                            mb: 1,
                                            fontSize: "22px",
                                            lineHeight: "24px",
                                            fontWeight: 500,
                                        }}
                                    >
                                        Bank Account Number
                                    </Typography>
                                    <TextField
                                        id="outlined-basic"
                                        placeholder="2141 3789 9876 2523"
                                        fullWidth
                                        variant="outlined"
                                        inputRef={accountNoInput}
                                        InputProps={{
                                            readOnly: true,
                                        }}
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
                                        Pin Code
                                    </Typography>
                                    <TextField
                                        id="outlined-basic"
                                        placeholder="***"
                                        fullWidth
                                        variant="outlined"
                                        inputRef={pincodeInput}
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
                                        Receive Account
                                    </Typography>
                                    <TextField
                                        id="outlined-basic"
                                        placeholder="8770 3197 4842 9519"
                                        fullWidth
                                        variant="outlined"
                                        InputProps={{
                                            readOnly: true,
                                        }}
                                        inputRef={receiveNoInput}
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
                                        Amount
                                    </Typography>
                                    <TextField
                                        id="outlined-basic"
                                        placeholder={price}
                                        fullWidth
                                        variant="outlined"
                                        inputRef={amountInput}
                                        InputProps={{
                                            readOnly: true,
                                        }}
                                    />
                                </Box>
                                <Container>
                                    <Box>
                                        <Button
                                            variant="contained"
                                            sx={{
                                                mt: "24px",
                                                width: "100%",
                                                py: "16px",
                                                px: "20px",
                                                borderRadius: "50px",
                                                bgcolor:
                                                    "buttonColor.backgroundColor",
                                                boxShadow: 1,
                                            }}
                                            type="submit"
                                        >
                                            <Typography variant="h6">
                                                Complete Payment
                                            </Typography>
                                        </Button>
                                    </Box>
                                </Container>
                            </Box>
                        </Box>
                    </form>
                </Box>
            </Card>
        </Box>
    );
}
