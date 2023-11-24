import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import AboutCourse from "./tabscomponents/AboutCourse";
import { themeContext } from "../../ThemedApp";
import AboutInstructor from "./tabscomponents/AboutInstructor";
import AboutReview from "./tabscomponents/AboutReview";

function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        "aria-controls": `simple-tabpanel-${index}`,
    };
}

export default function TabsForDetail({courseDetail}) {
    const [value, setValue] = React.useState(0);
    const { translate } = React.useContext(themeContext);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: "100%" }}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label="basic tabs example"
                >
                    <Tab label={translate.aboutcourse} {...a11yProps(0)} />
                    <Tab label="About The Instructor" {...a11yProps(1)} />
                    <Tab label="Reviews" {...a11yProps(2)} />

                </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
                <AboutCourse courseDetail={courseDetail}/>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
                <AboutInstructor courseDetail={courseDetail}/>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
                <AboutReview courseDetail={courseDetail}/>
            </CustomTabPanel>
        </Box>
    );
}
