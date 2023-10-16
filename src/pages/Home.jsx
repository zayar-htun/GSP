import { Box } from "@mui/material";
import Carousel from "../components/Home/CarouselShow";
import BestCourse from "../components/Home/BestCourse";
import ViewSomeCourse from "../components/Home/ViewSomeCourse";
import AboutGsp from "../components/Home/AboutGsp";
import LeanerSays from "../components/Home/LeanerSays";

export default function Home() {
    return (
        <Box>
            <Box sx={{ mx: { lg: 6, md: 3 }, my: { lg: 3, md: 2 } }}>
                <Carousel />
            </Box>
            <Box sx={{ bgcolor: "bestCourse.background" }}>
                <BestCourse />
            </Box>
            <Box sx={{ mx: { lg: 6, md: 3 }, my: { lg: 3, md: 2 } }}>
                <ViewSomeCourse />
            </Box>
            <Box sx={{ bgcolor: "bestCourse.background" }}>
                <AboutGsp />
            </Box>
            <Box sx={{ mx: { lg: 6, md: 3 }, my: { lg: 3, md: 2 } }}>
                <LeanerSays />
            </Box>
        </Box>
    );
}
