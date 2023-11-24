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
import { useState } from "react";
import { formatDistanceToNow } from 'date-fns';

export default function ChatMessage() {
    const input = useRef();
    const storedUser = JSON.parse(localStorage.getItem("user"));
    const [messages, setMessages] = useState([]);

    const handleAddComment = () => {
        const newMessage = {
            _id: messages.length + 1,
            mess: input.current.value,
            date: new Date(),
        };

        // Update the state with the new message
        setMessages(prevMessages => [...prevMessages, newMessage]);

        // Clear the input field after adding the comment
        input.current.value = "";
    };
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
                        <b>
                            {storedUser && storedUser.user.role === "Student"
                                ? "Chat With Teacher Zay"
                                : storedUser &&
                                  storedUser.user.role === "Teacher"
                                ? "Chat With Student Zay"
                                : "Chat With Zay"}
                        </b>
                        <Divider sx={{ mt: 2 }} />
                    </Typography>
                </Box>
                <Box
                    sx={{ mt: 4, display: "flex", justifyContent: "flex-end" }}
                >
                    <Box>
                        <Typography variant="h4">Hello</Typography>
                        <Typography variant="subtitle2">12 min ago</Typography>
                    </Box>

                    <Typography>
                        {storedUser && storedUser.user.role === "Student"
                            ? "Teacher"
                            : storedUser && storedUser.user.role === "Teacher"
                            ? "Student"
                            : "Chat With Zay"}{" "}
                        Zay
                    </Typography>
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
                        <Typography variant="h4">
                            Can I ask something!!!
                        </Typography>
                        <Typography variant="subtitle2">12 min ago</Typography>
                    </Box>
                    <Typography>
                        {storedUser && storedUser.user.role === "Student"
                            ? "Teacher"
                            : storedUser && storedUser.user.role === "Teacher"
                            ? "Student"
                            : "Chat With Zay"}{" "}
                        Zay
                    </Typography>
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
                {messages?.map(message => {
                    const timeAgo = formatDistanceToNow(new Date(message.date), { addSuffix: true });
                    return (
                        <Box
                            sx={{
                                mt: 4,
                                display: "flex",
                                justifyContent: "flex-start",
                            }}
                            key={message._id}
                        >
                            <Box>
                                <Typography variant="h4">
                                    {message.mess}
                                </Typography>
                                <Typography variant="subtitle2">
                                {timeAgo}
                                </Typography>
                            </Box>
                            <Typography>Me</Typography>
                        </Box>
                    );
                })}
                <FormControl fullWidth sx={{ mt: 2 }}>
                    <form
                        onSubmit={e => {
                            e.preventDefault();
                            handleAddComment();
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
