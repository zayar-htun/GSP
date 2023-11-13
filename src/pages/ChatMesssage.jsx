import {
    Box,
    Container,
    Divider,
    FormControl,
    IconButton,
    Input,
    InputAdornment,
    Typography,
} from "@mui/material";
import { AddComment as AddCommentIcon } from "@mui/icons-material";
import { useRef } from "react";

export default function ChatMessage() {
    const input = useRef();
    return (
        <Box>
            <Container sx={{ p: 3 }}>
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        p: 4,
                    }}
                >
                    <Typography variant="h4">
                        <b>Chat With Teacher Zay</b>
                        <Divider sx={{ mt: 2 }} />
                    </Typography>
                </Box>
                <Box
                    sx={{ mt: 4, display: "flex", justifyContent: "flex-end" }}
                >
                    <Box>
                        <Typography variant="h4">Hello student</Typography>
                        <Typography variant="subtitle2">12 min ago</Typography>
                    </Box>

                    <Typography>Teacher Zay</Typography>
                </Box>
                <Box
                    sx={{
                        mt: 4,
                        display: "flex",
                        justifyContent: "flex-start",
                    }}
                >
                    <Box>
                        <Typography variant="h4">Hello student</Typography>
                        <Typography variant="subtitle2">12 min ago</Typography>
                    </Box>
                    <Typography>Me</Typography>
                </Box>
                <Box
                    sx={{ mt: 4, display: "flex", justifyContent: "flex-end" }}
                >
                    <Box>
                        <Typography variant="h4">Hello student</Typography>
                        <Typography variant="subtitle2">12 min ago</Typography>
                    </Box>
                    <Typography>Teacher Zay</Typography>
                </Box>
                <Box
                    sx={{
                        mt: 4,
                        display: "flex",
                        justifyContent: "flex-start",
                    }}
                >
                    <Box>
                        <Typography variant="h4">Hello student</Typography>
                        <Typography variant="subtitle2">12 min ago</Typography>
                    </Box>
                    <Typography>Me</Typography>
                </Box>
                <Box
                    sx={{
                        mt: 4,
                        display: "flex",
                        justifyContent: "flex-start",
                    }}
                >
                    <Box>
                        <Typography variant="h4">Hello student</Typography>
                        <Typography variant="subtitle2">12 min ago</Typography>
                    </Box>
                    <Typography>Me</Typography>
                </Box>

                <FormControl fullWidth sx={{ mt: 2 }}>
                    <form
                        onSubmit={e => {
                            e.preventDefault();
                        }}
                    >
                        <Input
                            inputRef={input}
                            sx={{ fontSize: "16px", py: 2 }}
                            placeholder="Message"
                            multiline
                            fullWidth
                            variant="standard"
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton type="submit">
                                        <AddCommentIcon
                                            sx={{ color: "info" }}
                                        />
                                    </IconButton>
                                </InputAdornment>
                            }
                        />
                    </form>
                </FormControl>
            </Container>
        </Box>
    );
}
