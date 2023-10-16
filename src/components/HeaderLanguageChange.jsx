import { useContext, useEffect, useState } from "react";
import { themeContext } from "../ThemedApp";
import {
    Avatar,
    Button,
    ButtonGroup,
    Menu,
    MenuItem,
    Typography,
} from "@mui/material";
import Tran from "../translate/data.json";

export default function HeaderLanguageChange() {
    const [anchorEl, setAnchorEl] = useState(null);
    const storedTranslate = localStorage.getItem("selectedTranslate") || "Eng";
    const [selectedOption, setSelectedOption] = useState(storedTranslate);
    const { setTranslate } = useContext(themeContext);

    const handleButtonClick = event => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuItemClick = option => {
        setSelectedOption(option);
        setAnchorEl(null);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const getAvatar = option => {
        if (option === "Eng") {
            return (
                <Avatar
                    src="https://cdn.imgbin.com/2/12/12/imgbin-logo-primera-air-organization-business-english-language-british-flag-zSPA9W4mDSMqHmnRnzhgdxHLs.jpg"
                    style={{
                        height: "28px",
                        width: "28px",
                        marginRight: "6px",
                    }}
                />
            );
        } else if (option === "Myr") {
            return (
                <Avatar
                    src="https://vectorflags.s3.amazonaws.com/flags/mm-button-01.png"
                    alt="France"
                    style={{
                        height: "28px",
                        width: "28px",
                        marginRight: "6px",
                    }}
                />
            );
        }
        return null;
    };

    useEffect(() => {
        localStorage.setItem("selectedTranslate", selectedOption); // Store the mode in localStorage
    }, [selectedOption]);

    useEffect(() => {
        if (selectedOption === "Eng") {
            setTranslate(Tran.Eng);
        } else if (selectedOption === "Myr") {
            setTranslate(Tran.Myr);
        }
    },[selectedOption]);

    return (
        <div>
            <ButtonGroup variant="contained">
                <Button
                    onClick={handleButtonClick}
                    style={{ backgroundColor: "transparent" , border: "none" }}
                    variant="text"
                >
                    {getAvatar(selectedOption)}
                    {/* {selectedOption} */}
                    {/* ▼ */}
                </Button>
            </ButtonGroup>
            <Menu
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem
                    onClick={() => {
                        handleMenuItemClick("Eng");
                    }}
                    color="inherit"
                >
                    {getAvatar("Eng")}{" "}
                    <Typography color="inherit">Eng</Typography>
                </MenuItem>
                <MenuItem
                    onClick={() => {
                        handleMenuItemClick("Myr");
                    }}
                    color="inherit"
                >
                    {getAvatar("Myr")}{" "}
                    <Typography color="inherit">Myr</Typography>
                </MenuItem>
            </Menu>
        </div>
    );
}
