import * as React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
// import Link from '@mui/material/Link';
import Stack from "@mui/material/Stack";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { Link as RouterLink } from "react-router-dom";
import { Link as MuiLink } from "@mui/material";

export default function BreadCrumb() {
    const breadcrumbs = [
        <MuiLink
            component={RouterLink} // Use RouterLink as the component for routing
            to="/" // Specify the link destination
            underline="hover" // Add underline on hover
            color="text.primary" // Set the link color
            key="1"
        >
            Home
        </MuiLink>,
        <MuiLink
            component={RouterLink} // Use RouterLink as the component for routing
            to="/allcourses" // Specify the link destination
            underline="hover" // Add underline on hover
            color="text.primary" // Set the link color
            key="1"
        >
            All Courses
        </MuiLink>,
    ];

    return (
        <Stack spacing={1}>
            <Breadcrumbs
                separator={<NavigateNextIcon fontSize="small" />}
                aria-label="breadcrumb"
            >
                {breadcrumbs}
            </Breadcrumbs>
        </Stack>
    );
}
