import { Box, Card, CardHeader, Typography } from "@mui/material";
import { useContext } from "react";
import { themeContext } from "../../../ThemedApp";

export default function AboutCourse({courseDetail}) {
    const { translate } = useContext(themeContext);
    return (
        <Box>
            <Card sx={{boxShadow:1}}>
                <Box
                    sx={{
                        px: "32px",
                        paddingTop: "32px",
                        paddingBottom: "48px",
                    }}
                >
                    <Typography
                        sx={{
                            fontSize: "32px",
                            fontWeight: 500,
                            lineHeight: "38.4px",
                        }}
                    >
                        {translate.aboutcourse}
                    </Typography>
                    <Typography
                        sx={{
                            marginTop: "20px",
                            fontSize: "16px",
                            fontWeight: 400,
                            lineHeight: "22.4px",
                        }}
                    >
                        {courseDetail.description}
                    </Typography>
                </Box>
            </Card>
        </Box>
    );
}
