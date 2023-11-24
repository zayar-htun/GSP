import { Box, Card, Container, Grid, Typography } from "@mui/material";
import ShowCourse from "../components/CourseDetail/ShowCourse";
import Payment from "../components/Payment/Payment";
import Summary from "../components/Payment/Summary";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { getCourseDetail } from "../apicalls";

export default function Checkout() {
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
        <Box>
            <Typography
                sx={{
                    pt: 6,
                    pl: "72px",
                    fontSize: "40px",
                    fontWeight: 500,
                    lineHeight: "120%",
                }}
            >
                Checkout
            </Typography>
            <Box sx={{ padding: "72px" }}>
                <Grid container spacing={2}>
                    <Grid item xs={8}>
                        <Box>
                            <ShowCourse courseDetail={courseDetail} />
                        </Box>
                        <Box sx={{mt:"24px"}}>
                            <Payment courseDetail={courseDetail} />
                        </Box>
                    </Grid>
                    <Grid item xs={4}>
                        <Summary />
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
}
