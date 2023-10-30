import {
    Box,
    Button,
    Container,
    IconButton,
    OutlinedInput,
    Typography,
} from "@mui/material";
import { FileUpload as FileUploadIcon } from "@mui/icons-material";
import { useRef, useState } from "react";
import { getUploadModule } from "../../apicalls";

function AddCourse() {
    const titleInput = useRef();
    const desInput = useRef();
    const [uploadIds, setUploadIds] = useState([]);
    const [video, setVideo] = useState("");

    const getFile = async () => {
        const [fileHandle] = await window.showOpenFilePicker({
            types: [
                {
                    description: "Videos",
                    accept: {
                        "video/mp4": [".mp4"],
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
        setVideo(URL.createObjectURL(file));

        const fileName =
            file.type === "video/mp4" ? `module.mp4` : `module.mp4`;

        const formData = new FormData();
        formData.append("video", file, fileName);
        formData.append("title", titleInput.current.value);
        formData.append("description", desInput.current.value);

        formData.forEach((value, key) => {
            console.log(key, value);
        });

        getUploadModule(formData).then(response => {
            if (response) {
                setUploadIds([...uploadIds, response]);
            }
        });
    };

    return (
        <Box>
            <Typography variant="h5">
                <b> Add Modules and Make Courses</b>
            </Typography>{" "}
            {uploadIds.length ? (
                <Typography variant="h7" sx={{ mt: 5 }}>
                    {" "}
                    {uploadIds.length} modules is uploaded{" "}
                </Typography>
            ) : (
                <Typography variant="h7" sx={{ mt: 2 }}>
                    {" "}
                    No module is uploaded yet!!!{" "}
                </Typography>
            )}
            <Box sx={{ m: 2 }}>
                <form
                    onSubmit={async e => {
                        e.preventDefault();

                        titleInput.current.value = "";
                        desInput.current.value = "";
                        
                    }}
                >
                    <OutlinedInput
                        required
                        inputRef={titleInput}
                        placeholder="lesson title"
                        fullWidth={true}
                        sx={{ mb: 2 }}
                    />
                    <OutlinedInput
                        required
                        inputRef={desInput}
                        placeholder="lesson description"
                        fullWidth={true}
                        sx={{ mb: 2 }}
                    />

                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                            bgcolor: "#fffff2",
                            height: "200px",
                            width: "100%",
                        }}
                        onClick={changePhoto}
                    >
                        <Typography>Upload Video</Typography>
                        <IconButton>
                            <FileUploadIcon />
                        </IconButton>
                    </Box>

                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "center", // Center horizontally
                            my: 2, // Adjust the margin-top as needed
                        }}
                    >
                        <Button variant="contained" color="info" type="submit">
                            Add Modules
                        </Button>
                    </Box>
                </form>
                <Container>
                    <Button
                        type="submit"
                        variant="contained"
                        color="info"
                        fullWidth={true}
                    >
                        Add Courses
                    </Button>
                </Container>
            </Box>
        </Box>
    );
}

export default AddCourse;
