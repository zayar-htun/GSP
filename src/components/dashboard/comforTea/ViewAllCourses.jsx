import {
    Box,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
} from "@mui/material";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";
import React from "react";

function ViewAllCourses() {
    return (
        <Box>
            <List>
                <ListItem sx={{m:2}}>
                    <ListItemButton >
                        <ListItemIcon>
                            <LocalLibraryIcon sx={{fontSize:"30px"}} />
                        </ListItemIcon>
                        <ListItemText primary="RockStar" />
                    </ListItemButton>
                </ListItem>
                <ListItem sx={{m:2}}>
                    <ListItemButton >
                        <ListItemIcon>
                            <LocalLibraryIcon sx={{fontSize:"30px"}} />
                        </ListItemIcon>
                        <ListItemText primary="RWD" />
                    </ListItemButton>
                </ListItem>
                <ListItem sx={{m:2}}>
                    <ListItemButton >
                        <ListItemIcon>
                            <LocalLibraryIcon sx={{fontSize:"30px"}} />
                        </ListItemIcon>
                        <ListItemText primary="Graphic" />
                    </ListItemButton>
                </ListItem>
                <ListItem sx={{m:2}}>
                    <ListItemButton >
                        <ListItemIcon>
                            <LocalLibraryIcon sx={{fontSize:"30px"}} />
                        </ListItemIcon>
                        <ListItemText primary="Java" />
                    </ListItemButton>
                </ListItem>
            </List>
        </Box>
    );
}

export default ViewAllCourses;
