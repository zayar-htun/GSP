import {
    Box,
    Button,
    Container,
    OutlinedInput,
    Typography,
} from "@mui/material";
import { useRef } from "react";
import { getTopUp } from "../apicalls";
import { useNavigate } from "react-router-dom";

export default function Bank() {
    const nameInput = useRef();
    const accountNoInput = useRef();
    const pinInput = useRef();
    const amountInput = useRef();
    const navigate = useNavigate();
    return (
        <Box>
            <Container sx={{ mt: "48px" }}>
                <Typography variant="h4">SafeVault E-Bank</Typography>
                <Typography variant="subtitle1">
                    Top up to sveb bank's e-bank and make payments online
                    freely!!!
                </Typography>

                <form
                    onSubmit={e => {
                        e.preventDefault();
                        const name = nameInput.current.value;
                        const accountNo = accountNoInput.current.value;
                        const pin = pinInput.current.value;
                        const amount = amountInput.current.value;

                        (async () => {
                            const result = await getTopUp(
                                name,
                                accountNo,
                                pin,
                                amount
                            );

                            if (result) {
                                navigate("/");
                            }
                        })();
                    }}
                >
                    <OutlinedInput
                        required
                        inputRef={nameInput}
                        placeholder="name"
                        fullWidth={true}
                        sx={{ mb: 2, mt: 4 }}
                    />
                    <OutlinedInput
                        required
                        inputRef={accountNoInput}
                        placeholder="account number"
                        fullWidth={true}
                        sx={{ mb: 2 }}
                    />

                    <OutlinedInput
                        required
                        inputRef={pinInput}
                        placeholder="pin code"
                        fullWidth={true}
                        inputProps={{ type: "password" }}
                        sx={{ mb: 3 }}
                    />
                    <OutlinedInput
                        required
                        inputRef={amountInput}
                        placeholder="amount"
                        fullWidth={true}
                        sx={{ mb: 2 }}
                    />

                    <Container>
                        <Button
                            type="submit"
                            variant="contained"
                            color="info"
                            fullWidth={true}
                            sx={{ mb: 4 }}
                        >
                            Top Up
                        </Button>
                    </Container>
                </form>
            </Container>
        </Box>
    );
}
