import { Box, Card, CardHeader, Typography } from "@mui/material";
import { useContext } from "react";
import { themeContext } from "../../../ThemedApp";

export default function AboutCourse() {
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
                        Lorem ipsum dolor sit amet consectetur. Erat senectus
                        velit lorem quam dictum elit sit arcu. Ullamcorper
                        tincidunt aliquam ullamcorper metus elementum quis
                        consectetur aliquet. Lectus ante arcu dui fringilla
                        pulvinar duis non vitae. Sit pellentesque convallis
                        morbi rutrum lacus. Molestie aliquet ultricies sit
                        bibendum augue elit a mauris. Eget consectetur senectus
                        mi nisi enim amet habitant. Pharetra commodo vestibulum
                        elementum pulvinar tortor orci odio sed. Id a morbi
                        tortor pellentesque condimentum nibh at. Sed dictum sit
                        malesuada etiam maecenas. Lorem ipsum dolor sit amet
                        consectetur. Erat senectus velit lorem quam dictum elit
                        sit arcu. Ullamcorper tincidunt aliquam ullamcorper
                        metus elementum quis consectetur aliquet. Lectus ante
                        arcu dui fringilla pulvinar duis non vitae. Sit
                        pellentesque convallis morbi rutrum lacus. Molestie
                        aliquet ultricies sit bibendum augue elit a mauris. Eget
                        consectetur senectus mi nisi enim amet habitant..
                    </Typography>
                </Box>
            </Card>
        </Box>
    );
}
