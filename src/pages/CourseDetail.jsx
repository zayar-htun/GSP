import { Box, Divider, Grid, Typography } from "@mui/material";
import BreadCrumb from "../components/BreadCrumb";
import ShowCourse from "../components/CourseDetail/ShowCourse";
import TabsForDetail from "../components/CourseDetail/TabsForDetail";

export default function CourseDetail() {
    return (
        <Box sx={{ marginTop: "25px", marginLeft: "25px",marginRight: "25px" }}>
            <Box>
                <BreadCrumb />
            </Box>
            <Box sx={{ margin: 6 }}>
                <ShowCourse />
            </Box>
            <Divider/>
            <Box>
                <TabsForDetail/>
            </Box>
        </Box>
    );
}
