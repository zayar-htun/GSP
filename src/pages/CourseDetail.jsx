import { Box, Divider, Grid, Typography } from "@mui/material";
import BreadCrumb from "../components/BreadCrumb";
import ShowCourse from "../components/CourseDetail/ShowCourse";
import TabsForDetail from "../components/CourseDetail/TabsForDetail";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getCourseDetail } from "../apicalls";
import { useState } from "react";

export default function CourseDetail() {
    const {id} = useParams();
    const [courseDetail,setCourseDetail] = useState({});
    useEffect(()=>{
        (async()=>{
            const result = await getCourseDetail(id);
            setCourseDetail(result);
            console.log(result);
        })();
    },[]);
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
