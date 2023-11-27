import { Box, Container, IconButton, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import CloseIcon from '@mui/icons-material/Close';

export default function PaymentSuccessful() {
    const navigate = useNavigate();

    return (
        <Box>
            <Container sx={{ mt: "48px" }}>
                <Typography variant="h3">SafeVault E-Bank</Typography>
                <Typography variant="subtitle1">
                    Top up to sveb bank's e-bank and make payments online
                    freely!!!
                </Typography>
                <Box sx={{height:"50px"}}>

                </Box>
                <Typography variant="h4">Payment Successful to Ali <b>$300</b></Typography>
                <Typography variant="subtitle1">
                    Rockstar Developer class
                </Typography>

                <IconButton onClick={()=>{
                    navigate(`/`)
                }}>
                    <CloseIcon/>
                </IconButton>
            </Container>
        </Box>
    );
}
