import {
    Box,
    Button,
    Container,
    Divider,
    IconButton,
    OutlinedInput,
    Typography,
} from "@mui/material";
import { FileUpload as FileUploadIcon } from "@mui/icons-material";
import { useRef, useState } from "react";
import { getUploadCourse, getUploadModule } from "../../apicalls";

function AddCourse() {
    const titleInput = useRef();
    const desInput = useRef();
    const courseTitleInput = useRef();
    const courseDesInput = useRef();
    const courseCategoryInput = useRef();
    const coursePriceInput = useRef();
    const [uploadIds, setUploadIds] = useState([]);
    const [video, setVideo] = useState("");
    const [thumb, setThumb] = useState("");

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

    const getFileCourse = async () => {
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

    const changeVideo = async e => {
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
                setUploadIds([...uploadIds, response._id]);
            }
        });

        console.log(uploadIds);
    };

    const changePhoto = async e => {
        const file = await getFileCourse();
        setThumb(URL.createObjectURL(file));

        const fileName = file.type === "image/png" ? `-photo.png` : `-photo.jpg`;

        const formData = new FormData();
        formData.append("photo", file, fileName);
        formData.append("title", courseTitleInput.current.value);
        formData.append("description", courseDesInput.current.value);
        formData.append("category", courseCategoryInput.current.value);
        formData.append("price", coursePriceInput.current.value);
        formData.append("modules", uploadIds);

        formData.forEach((value, key) => {
            console.log(key, value);
        });

        getUploadCourse(formData);


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
            {
                console.log(uploadIds)
            }
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
                        onClick={changeVideo}
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
                <Divider />
                <Container>
                    <Typography
                        variant="h4"
                        sx={{ textAlign: "center", mb: 3, margin: 2 ,mt:3, fontWeight:"bold"}}
                    >
                        Upload Course
                    </Typography>
                    <form onSubmit={async e => {
                        e.preventDefault();

                        courseTitleInput.current.value = "";
                        courseDesInput.current.value = "";
                        courseCategoryInput.current.value = "";
                        coursePriceInput.current.value = "";
                        setUploadIds([]);
                    }}>
                        <OutlinedInput
                            required
                            inputRef={courseTitleInput}
                            placeholder="Course Title"
                            fullWidth={true}
                            sx={{ mb: 2 }}
                        />
                        <OutlinedInput
                            required
                            inputRef={courseDesInput}
                            placeholder="Course Description"
                            fullWidth={true}
                            sx={{ mb: 2 }}
                        />
                        <OutlinedInput
                            required
                            inputRef={courseCategoryInput}
                            placeholder="Course Category"
                            fullWidth={true}
                            sx={{ mb: 2 }}
                        />
                        <OutlinedInput
                            required
                            inputRef={coursePriceInput}
                            placeholder="Course Price"
                            fullWidth={true}
                            sx={{ mb: 2 }}
                        />
                        <Box
                            sx={{
                                bgcolor: "banner.background",
                                height: 200,
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                alignItems: "center",
                                m: 2,
                            }}
                            onClick={changePhoto}
                        >
                            <IconButton>
                                <FileUploadIcon />
                            </IconButton>
                            <img src={thumb} alt="" style={{ width: "100%" }} />
                        </Box>
                        <Button
                            type="submit"
                            variant="contained"
                            color="info"
                            fullWidth={true}
                        >
                            Add Courses
                        </Button>
                    </form>
                </Container>
            </Box>
        </Box>
    );
}

export default AddCourse;
