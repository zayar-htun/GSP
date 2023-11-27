import { useState } from "react";
import Header from "./components/Header";
import MainDrawer from "./components/MainDrawer";
import { Outlet, useLocation } from "react-router-dom";
import { Box } from "@mui/material";
import Footer from "./components/Footer";

export default function App() {
    const location = useLocation();
    const [showDrawer, setShowDrawer] = useState(false);

    const toggleDrawer = () => {
        setShowDrawer(!showDrawer);
    };

    const shouldShowFooter =
        location.pathname !== "/login" &&
        location.pathname !== "/register" &&
        location.pathname !== "/dashboard" &&
        location.pathname !== "/success" &&
        location.pathname !== "/teacherregister";

    return (
        <>
            <Header toggleDrawer={toggleDrawer} />
            <MainDrawer showDrawer={showDrawer} toggleDrawer={toggleDrawer} />

            <Box>
                <Outlet />
            </Box>
            {shouldShowFooter && <Footer />}
        </>
    );
}
