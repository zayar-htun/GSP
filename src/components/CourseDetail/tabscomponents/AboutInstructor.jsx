import {
    Avatar,
    Box,
    Grid,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Typography,
} from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";

export default function AboutInstructor() {
    return (
        <Box>
            <Grid container spacing={2}>
                <Grid xs={3}>
                    <img
                        src="/src/assets/Instructor/1675313538107.jpeg"
                        alt=""
                        style={{ width: "305px", height: "auto" }}
                    />
                </Grid>
                <Grid xs={9}>
                    <Typography>
                        <Typography gutterBottom variant="h3" component="div">
                            Name
                        </Typography>
                        <Typography variant="h5" sx={{ paddingTop: "5px" }}>
                            Role
                        </Typography>
                        <Box>
                            <List>
                                <ListItem disablePadding>
                                    <ListItemButton>
                                        <ListItemIcon>
                                            <SchoolIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="(9) courses" />
                                    </ListItemButton>
                                </ListItem>
                            </List>
                        </Box>
                        <Typography variant="body2" gutterBottom>
                            ★ 4 (200 reviews)
                        </Typography>
                    </Typography>
                </Grid>
            </Grid>
        </Box>
    );
}
