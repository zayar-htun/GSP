import * as React from "react";
import { BarChart } from "@mui/x-charts/BarChart";
import { axisClasses } from "@mui/x-charts";
import { Box } from "@mui/material";

const chartSetting = {
    yAxis: [
        {
            label: "rainfall ",
        },
    ],
    width: 500,
    height: 300,
    sx: {
        [`.${axisClasses.left} .${axisClasses.label}`]: {
            transform: "translate(-20px, 0)",
        },
    },
};
const dataset = [
    {
        student: 1,
        month: "Jan",
    },
    {
        student: 1,
        month: "Fev",
    },
    {
        student: 3,
        month: "Mar",
    },
    {
        student: 2,
        month: "Apr",
    },
    {
        student: 4,
        month: "May",
    },
    {
        student: 4,
        month: "June",
    },
    {
        student: 3,
        month: "July",
    },
    {
        student: 2,
        month: "Aug",
    },
    {
        student: 2,
        month: "Sept",
    },
    {
        student: 5,
        month: "Oct",
    },
    {
        student: 7,
        month: "Nov",
    },
    {
        student: 9,
        month: "Dec",
    },
];

const valueFormatter = value => `${value}`;

export default function LineChartDash() {
    return (
        <Box>
            <BarChart
                dataset={dataset}
                xAxis={[{ scaleType: "band", dataKey: "month" }]}
                series={[
                    { dataKey: "student", label: "STUDENTS ANNUAL LIST", valueFormatter },
                ]}
                {...chartSetting}
            />
        </Box>
    );
}
