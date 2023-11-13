import { Avatar, Box, Card, Divider, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function ChatRoom() {
    const navigate = useNavigate();
    return (
        <Box>
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    p: 4,
                }}
            >
                <Typography variant="h4">
                    <b>Inbox Messages</b>
                </Typography>
            </Box>
            <Card sx={{ m: 1, cursor: "pointer" }} onClick={()=>{
                                navigate(`/chatmessage`)
                            }} >
                <Box sx={{ display: "flex", alignItems: "center", p: 4 }}>
                    <Box>
                        <Avatar
                            alt="Remy Sharp"
                            src="/static/images/avatar/1.jpg"
                            sx={{ mr: 2, width: 56, height: 56 }}
                        />
                    </Box>

                    <Box>
                        <Typography>Zayar Tun</Typography>
                        <Typography>
                            Hello Sir. I have something to tell you
                        </Typography>
                    </Box>
                </Box>
            </Card>
            <Card sx={{ m: 1, cursor: "pointer" }}>
                <Box sx={{ display: "flex", alignItems: "center", p: 4 }}>
                    <Box>
                        <Avatar
                            alt="Remy Sharp"
                            src="/static/images/avatar/1.jpg"
                            sx={{ mr: 2, width: 56, height: 56 }}
                        />
                    </Box>

                    <Box>
                        <Typography>Zayar Tun</Typography>
                        <Typography>
                            Hello Sir. I have something to tell you
                        </Typography>
                    </Box>
                </Box>
            </Card>
        </Box>
    );
}
