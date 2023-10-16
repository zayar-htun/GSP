import {
    Box,
    Button,
    Container,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Typography,
} from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import ContactsIcon from '@mui/icons-material/Contacts';

export default function Footer() {
    return (
        <Box sx={{ bgcolor: "buttonColor.backgroundColor" }}>
            <Box sx={{ mx: 9 }}>
                <Container>
                    <Typography
                        sx={{ textAlign: "center", color: "whitesmoke", pt: 3 }}
                        variant="h4"
                    >
                        Global Study Point
                    </Typography>
                    <Box
                        sx={{ display: "flex", justifyContent: "space-around" }}
                    >
                        <Box>
                            <Typography variant="h5" sx={{color:"whitesmoke"}}>Logo</Typography>
                            <List>
                                <ListItem disablePadding>
                                    <ListItemButton sx={{color:"whitesmoke"}}>
                                        <ListItemIcon sx={{color:"whitesmoke"}}>
                                            <MailIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="Email" />
                                    </ListItemButton>
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemButton sx={{color:"whitesmoke"}}>
                                        <ListItemIcon sx={{color:"whitesmoke"}}>
                                            <LocalPhoneIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="Phone" />
                                    </ListItemButton>
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemButton sx={{color:"whitesmoke"}}>
                                        <ListItemIcon sx={{color:"whitesmoke"}}>
                                            <ContactsIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="Contacts" />
                                    </ListItemButton>
                                </ListItem>
                            </List>
                        </Box>
                        <Box sx={{display:"block"}}>
                            <Button variant="text"  sx={{color:"whitesmoke",display:"block"}}>Teach on Udemy</Button>
                            <Button variant="text"  sx={{color:"whitesmoke",display:"block"}}>About Us</Button>
                            <Button variant="text"  sx={{color:"whitesmoke",display:"block"}}>Contact Us</Button>
                            <Button variant="text"  sx={{color:"whitesmoke",display:"block"}}>Terms and Conditions</Button>
                        </Box>
                    </Box>
                </Container>
            </Box>
        </Box>
    );
}
