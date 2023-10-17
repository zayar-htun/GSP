import * as React from "react";
import { PieChart } from "@mui/x-charts/PieChart";
import { Box, Typography } from "@mui/material";

export default function PieChartDash() {
    return (
        <Box >
            <Typography variant="h5">Pie Chart For Students and Courses</Typography>
            <PieChart
                series={[
                    {
                        data: [
                            { id: 0, value: 9, label: "Courses" },
                            { id: 1, value: 20, label: "Students" },
                        ],
                    },
                ]}
                width={400}
                height={200}
            />
        </Box>
    );
}
