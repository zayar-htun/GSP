import { Box, Typography } from "@mui/material";
import SlickBestCourse from "./SlickBestCourse";
import { useContext } from "react";
import { themeContext } from "../../ThemedApp";

export default function BestCourse() {
    const { translate } = useContext(themeContext);
    return (
        <Box sx={{mx: { lg: 6, md: 3 }, my: { lg: 3, md: 2 }}}>
            <Typography
                variant="h4"
                sx={{
                    paddingTop: 5,
                    paddingLeft: 2,
                    paddingBottom: 3,
                    fontWeight: "bold",
                }}
            >
                {translate.exploreCourse}
            </Typography>

            <Typography
                sx={{
                    paddingLeft: 2,
                    paddingBottom: 3,
                }}
            >
                Lorem ipsum dolor sit amet consectetur. Pharetra fermentum risus
                ac id. Aenean purus enim
            </Typography>
            <Box sx={{
                    paddingLeft: 2,
                    paddingRight: 2,
                    paddingBottom: 3,
                }}>
                <SlickBestCourse />
            </Box>
        </Box>
    );
}
