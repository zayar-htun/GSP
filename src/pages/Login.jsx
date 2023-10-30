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
import { getLogin } from "../apicalls";

export default function Login() {
    const navigate = useNavigate();

    const emailInput = useRef();
    const passwordInput = useRef();

    const [hasError, setHasError] = useState(false);

    const { translate, setAuth, setAuthUser } = useContext(themeContext);

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
                        setHasError(false);

                        const email = emailInput.current.value;
                        const password = passwordInput.current.value;

                        (async () => {
                            const user = await getLogin(email, password);

                            if (!user) {
                                setHasError(true);
                            } else {
                                setAuth(true);
                                setAuthUser(user);
                                localStorage.setItem("user",JSON.stringify(user))
                                navigate("/");
                            }
                        })();
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
