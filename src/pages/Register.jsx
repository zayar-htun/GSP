import { Alert, Avatar, Box, Button, Container, IconButton, OutlinedInput } from "@mui/material";
import { pink } from "@mui/material/colors";
import { useContext } from "react";
import { themeContext } from "../ThemedApp";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useRef } from "react";
import { getStuRegister } from "../apicalls";

export default function Register() {
    const { translate } = useContext(themeContext);
    const navigate = useNavigate();

    const [photo, setPhoto] = useState("");
    const [hasError, setHasError] = useState(false);
    
    const nameInput = useRef();
    const emailInput = useRef();
    const profileInput = useRef();
    const passwordInput = useRef();

    const getFile = async () => {
        const [fileHandle] = await window.showOpenFilePicker({
            types: [
                {
                    description: "Images",
                    accept: {
                        "image/*": [".png", ".jpeg", ".jpg"],
                    },
                },
            ],
            excludeAcceptAllOption: true,
            multiple: false,
        });

        return await fileHandle.getFile();
    };

    const changePhoto = async e => {
        const file = await getFile();
        setPhoto(URL.createObjectURL(file));

        const fileName = file.type === "image/png" ? `-photo.png` : `-photo.jpg`;

        const formData = new FormData();
        formData.append("photo", file, fileName);
        formData.append("name", nameInput.current.value);
        formData.append("email", emailInput.current.value);
        formData.append("profile", profileInput.current.value);
        formData.append("password", passwordInput.current.value);

        formData.forEach((value, key) => {
            console.log(key, value);
        });

        getStuRegister(formData);


    };

    return (
        <Box>
            <Container>
                <Box>
                    {hasError && (
                        <Alert severity="warning" sx={{ mb: 3 }}>
                            Something went wrong, please try again
                        </Alert>
                    )}

                    <form
                        onSubmit={async (e) => {
                            e.preventDefault();
                            // Call the changePhoto function to set up the formData
                          navigate(`/login`);
                        }}
                    >
                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                mb: 8, 
                                mt: 3,
                            }}
                        >
                            <IconButton onClick={changePhoto}>
                                <Avatar
                                    src={photo}
                                    sx={{
                                        background: pink[500],
                                        width: 128,
                                        height: 128,
                                        mb: -6,
                                    }}
                                >
                                    {/* {user.name[0]} */}
                                </Avatar>
                            </IconButton>
                        </Box>
                        <OutlinedInput
                            required
                            inputRef={nameInput}
                            placeholder={translate.username}
                            fullWidth={true}
                            sx={{ mb: 2 }}
                        />

                        <OutlinedInput
                            required
                            inputRef={emailInput}
                            placeholder={translate.email}
                            fullWidth={true}
                            sx={{ mb: 2 }}
                        />

                        <OutlinedInput
                            inputRef={profileInput}
                            placeholder={translate.profile}
                            fullWidth={true}
                            multiline={true}
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
                                {translate.register}
                            </Button>
                        </Container>
                    </form>
                </Box>
            </Container>
        </Box>
    );
}
