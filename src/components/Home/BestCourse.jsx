import { Box, Typography } from "@mui/material";
import SlickBestCourse from "./SlickBestCourse";
import { useContext } from "react";
import { themeContext } from "../../ThemedApp";
import { useState } from "react";
import { useEffect } from "react";
import { getBestCourse } from "../../apicalls";

export default function BestCourse() {
    const { translate } = useContext(themeContext);
    const [bestCourses,setBestCourses] = useState([]);

    useEffect(()=>{
        (
            async()=>{
                const result = await getBestCourse();

                setBestCourses(result);
            }
        )();
    },[]);

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
                <SlickBestCourse bestCourses={bestCourses}/>
            </Box>
        </Box>
    );
}
