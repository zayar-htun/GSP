import { Avatar, Box, Card, Divider, Typography } from "@mui/material";

export default function ChatRoom() {
    return (
        <Box>
            <Card sx={{ m: 1 }}>
                <Box sx={{ display: "flex", alignItems: "center", p: 4 }}>
                    <Avatar
                        alt="Remy Sharp"
                        src="/static/images/avatar/1.jpg"
                        sx={{ mr: 2, width: 56, height: 56 }}
                    />
                    <Typography variant="h4">Inbox Messages</Typography>
                </Box>
            </Card>
            <Card sx={{ m: 1 }}>
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
                <Divider />
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
