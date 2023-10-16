import { useRef, useState, useContext } from "react";

import {
    Box,
    Alert,
    Button,
    Typography,
    OutlinedInput,
    Container,
    Avatar,
    IconButton,
} from "@mui/material";

import { useNavigate } from "react-router-dom";
import { UIContext, themeContext } from "../ThemedApp";
import { pink } from "@mui/material/colors";

export default function Register() {
    const { setSnackbarOpen, setSnackMessage } = useContext(UIContext);
    const navigate = useNavigate();
    const {translate} = useContext(themeContext);

    const nameInput = useRef();
    const emailInput = useRef();
    const profileInput = useRef();
    const passwordInput = useRef();

    const [photo, setPhoto] = useState("");

    const [hasError, setHasError] = useState(false);

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

		const fileName =
			file.type === "image/png"
				? `profile-photo.png`
				: `profile-photo.jpg`;

		const formData = new FormData();
		formData.append("photo", file, fileName);
		// fetchUploadPhoto( formData);
	};

    return (
        <Container>
            <Box>
                {/* <Typography
                    variant="h4"
                    sx={{ textAlign: "center", mb: 3, margin: 2 }}
                >
                    Register
                </Typography> */}

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
                    <Box
						sx={{
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
							mb: 8,
							mt: 3,
						}}>
						<IconButton onClick={changePhoto}>
							<Avatar
								src={photo}
								sx={{
									background: pink[500],
									width: 128,
									height: 128,
									mb: -6,
								}}>
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
    );
}
