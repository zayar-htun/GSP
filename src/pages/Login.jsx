import { useRef, useState, useContext } from "react";

import {
    Box,
    Alert,
    Button,
    Typography,
    OutlinedInput,
    Container,
} from "@mui/material";

import { useNavigate } from "react-router-dom";
import { UIContext, themeContext } from "../ThemedApp";

export default function Login() {
    const { setSnackbarOpen, setSnackMessage } = useContext(UIContext);
    const navigate = useNavigate();

    const emailInput = useRef();
    const passwordInput = useRef();

    const [hasError, setHasError] = useState(false);

    const { translate } = useContext(themeContext);

    return (
        <Container>
            <Box>
                <Typography
                    variant="h4"
                    sx={{ textAlign: "center", mb: 3, margin: 2 }}
                >
                    Login
                </Typography>

                {hasError && (
                    <Alert severity="warning" sx={{ mb: 3 }}>
                        Something went wrong, please try again
                    </Alert>
                )}

                <form
                    onSubmit={e => {
                        e.preventDefault();
                    }}
                >
                    <OutlinedInput
                        required
                        inputRef={emailInput}
                        placeholder={translate.email}
                        fullWidth={true}
                        sx={{ mb: 2 }}
                    />

                    <OutlinedInput
                        required
                        inputRef={passwordInput}
                        placeholder={translate.password}
                        fullWidth={true}
                        inputProps={{ type: "password" }}
                        sx={{ mb: 3 }}
                    />

                    <Container>
                        <Button
                            type="submit"
                            variant="contained"
                            color="info"
                            fullWidth={true}
                        >
                            {translate.login}
                        </Button>
                    </Container>
                </form>
            </Box>
        </Container>
    );
}
