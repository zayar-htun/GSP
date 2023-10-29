import {
    Box,
    Button,
    Container,
    IconButton,
    OutlinedInput,
    Typography,
} from "@mui/material";
import {FileUpload as FileUploadIcon} from '@mui/icons-material';
import { useRef } from "react";

function AddCourse() {
    const moduleInput = useRef();
    return (
        <Box>
            <Typography variant="h5" ><b> Add Modules and Make Courses</b></Typography>{" "}
            <Box sx={{m:2}}>
                <form>
                    <OutlinedInput
                        required
                        inputRef={moduleInput}
                        placeholder="module name"
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
                        // onClick={changeNrcFront}
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
                        <Button variant="contained" color="info">
                            Add Modules
                        </Button>
                    </Box>
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
                </form>
            </Box>
        </Box>
    );
}

export default AddCourse;
