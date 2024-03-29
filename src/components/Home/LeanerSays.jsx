import { Box, Typography } from "@mui/material";
import LearnerCommentsSlick from "./LearnerCommentsSlick";

export default function LeanerSays() {
    return (
        <Box sx={{ marginTop: "50px" }}>
            <Typography
                variant="h3"
                sx={{ textAlign: "center", fontWeight: "bold" }}
            >
                What our learners says
            </Typography>
            <Typography
                variant="h6"
                sx={{ textAlign: "center", marginBottom: 2 }}
            >
                Empowering Careers through Flexible Learning
            </Typography>
            <LearnerCommentsSlick />
        </Box>
    );
}
