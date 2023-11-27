import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Teacher() {
    const navigate = useNavigate();
    return (
        <Box>
            <Typography>Teacher Course Fees</Typography>
            <List sx={{ width: "100%", bgcolor: "background.paper" }}>
                <ListItem
                    alignItems="flex-start"
                    onClick={() => {
                        navigate(`/paymentTeacher/Ali/300/Rockstar`);
                    }}
                >
                    <ListItemAvatar>
                        <Avatar
                            alt="Remy Sharp"
                            src="/static/images/avatar/1.jpg"
                        />
                    </ListItemAvatar>
                    <ListItemText
                        primary="$300 to Ali Connors"
                        secondary={
                            <React.Fragment>
                                <Typography
                                    sx={{ display: "inline" }}
                                    component="span"
                                    variant="body2"
                                    color="text.primary"
                                >
                                    Ali Connors
                                </Typography>
                                {" Rockstar course bought at 28/3/2023"}
                            </React.Fragment>
                        }
                    />
                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem
                    alignItems="flex-start"
                    onClick={() => {
                        navigate(`/paymentTeacher/Remy/400/Design`);
                    }}
                >
                    <ListItemAvatar>
                        <Avatar
                            alt="Remy Sharp"
                            src="/static/images/avatar/1.jpg"
                        />
                    </ListItemAvatar>
                    <ListItemText
                        primary="$400 to Remy Sharps"
                        secondary={
                            <React.Fragment>
                                <Typography
                                    sx={{ display: "inline" }}
                                    component="span"
                                    variant="body2"
                                    color="text.primary"
                                >
                                    Remy Sharp
                                </Typography>
                                {" Design course bought at 28/3/2023"}
                            </React.Fragment>
                        }
                    />
                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem
                    alignItems="flex-start"
                    onClick={() => {
                        navigate(`/paymentTeacher/Mohammed/300/Programming`);
                    }}
                >
                    <ListItemAvatar>
                        <Avatar
                            alt="Remy Sharp"
                            src="/static/images/avatar/1.jpg"
                        />
                    </ListItemAvatar>
                    <ListItemText
                        primary="$300 to Mohammed Connors"
                        secondary={
                            <React.Fragment>
                                <Typography
                                    sx={{ display: "inline" }}
                                    component="span"
                                    variant="body2"
                                    color="text.primary"
                                >
                                    Mohammed Connors
                                </Typography>
                                {" Programming course bought at 28/3/2023"}
                            </React.Fragment>
                        }
                    />
                </ListItem>
            </List>
        </Box>
    );
}
