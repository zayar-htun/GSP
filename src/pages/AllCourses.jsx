import { Box } from "@mui/material";
import BreadCrumb from "../components/BreadCrumb";
import Collapse from "../components/AllCourseComponents/Coll";
import AllCourseWithPegi from "../components/AllCourseComponents/AllCourseWithPegi";

export default function AllCourses() {
    return (
        <Box sx={{ marginTop: "25px", marginLeft: "25px" }}>
            <Box>
                <BreadCrumb />
            </Box>
            <Box sx={{ display: "flex" }}>
                <Box sx={{ my: { lg: 2, md: 1 } }}>
                    <Collapse />
                </Box>
                <Box sx={{my: { lg: 2, md: 1 } }}>
                    <AllCourseWithPegi/>
                </Box>
            </Box>
        </Box>
    );
}
