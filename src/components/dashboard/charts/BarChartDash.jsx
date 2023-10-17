import * as React from "react";
import { BarChart } from "@mui/x-charts/BarChart";
import { Box, Typography } from "@mui/material";

export default function BarChartDash() {
    return (
        <Box>
            <Typography variant="h5">Top 3 Courses with Bar Chart</Typography>
            <Box sx={{display:"flex"}}>
                <Typography sx={{color:"#0FADAA", ml:2}}>Enrolled Students</Typography>
                <Typography sx={{color:"#2E96FF", ml:2}}>Review Stars</Typography>
                <Typography sx={{color:"#B800D8", ml:2}}>Rating</Typography>
            </Box>
            <BarChart
                xAxis={[
                    {
                        scaleType: "band",
                        data: ["Design Courses", "Rockstar", "PWD"],
                    },
                ]}
                series={[
                    { data: [4, 3, 5] },
                    { data: [1, 6, 3] },
                    { data: [2, 5, 6] },
                ]}
                width={500}
                height={300}
            />
        </Box>
    );
}
