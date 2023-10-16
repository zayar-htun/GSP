import {
    Avatar,
    Box,
    Card,
    CardContent,
    CardMedia,
    Rating,
    Typography,
} from "@mui/material";
import { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useMediaQuery } from "@mui/material";
export default function LearnerCommentsSlick() {
    const [commentLists, setCommentLists] = useState([
        {
            _id: 1,
            name: "The Net Ninja",
            logo: "https://www.filepicker.io/api/file/JIGkr7PVQeuw9rcBtGuB",
        },
        {
            _id: 2,
            name: "The Net Ninja",
            logo: "https://www.filepicker.io/api/file/JIGkr7PVQeuw9rcBtGuB",
        },
        {
            _id: 3,
            name: "The Net Ninja",
            logo: "https://www.filepicker.io/api/file/JIGkr7PVQeuw9rcBtGuB",
        },
        {
            _id: 4,
            name: "The Net Ninja",
            logo: "https://www.filepicker.io/api/file/JIGkr7PVQeuw9rcBtGuB",
        },
        {
            _id: 5,
            name: "The Net Ninja",
            logo: "https://www.filepicker.io/api/file/JIGkr7PVQeuw9rcBtGuB",
        },
        {
            _id: 6,
            name: "The Net Ninja",
            logo: "https://www.filepicker.io/api/file/JIGkr7PVQeuw9rcBtGuB",
        },
        {
            _id: 7,
            name: "The Net Ninja",
            logo: "https://www.filepicker.io/api/file/JIGkr7PVQeuw9rcBtGuB",
        },
        {
            _id: 8,
            name: "The Net Ninja",
            logo: "https://www.filepicker.io/api/file/JIGkr7PVQeuw9rcBtGuB",
        },
        {
            _id: 9,
            name: "The Net Ninja",
            logo: "https://www.filepicker.io/api/file/JIGkr7PVQeuw9rcBtGuB",
        },
    ]);

    // Use the useMediaQuery hook to determine the screen size
    const isLargeScreen = useMediaQuery(theme => theme.breakpoints.up("lg"));
    const isTablet = useMediaQuery(theme => theme.breakpoints.up("sm"));

    // Set the slidesToShow value based on the screen size
    const slidesToShow = isLargeScreen ? 3 : isTablet ? 2 : 1;

    const settings = {
        className: "center",
        dots: true,
        infinite: false,
        slidesToShow: slidesToShow, // Use the dynamically determined value
        slidesToScroll: 3,
        arrows: false,
    };
    return (
        <Box>
            <Slider {...settings}>
                {commentLists.map(comment => (
                    <Box key={comment._id} sx={{marginTop:1,marginBottom:1,padding:1}}>
                        <Card
                            sx={{
                                marginLeft: 1,
                                maxWidth: 400,
                                borderRadius: "30px",
                                display: "flex",
                                alignItems: "center",
                                // justifyContent: "center", // Center horizontally
                                flexDirection: "column", // Stack children vertically
                            }}
                        >
                            <Avatar
                                alt="Remy Sharp"
                                src={comment.logo}
                                sx={{ width: 98, height: 98, marginTop: 3 }}
                            />
                            <Typography variant="h4">Name</Typography>
                            <Typography>Professional</Typography>
                            <Rating name="read-only" value={5} readOnly />
                            <Typography sx={{textAlign:"center"}}>
                                Lorem ipsum dolor sit amet consectetur. Pharetra
                                fermentum risus ac id. Aenean purus enim neque
                                amet pellentesque nunc a vestibulum. Sed neque
                                ultrices neque lectus tempus orci. Auctor et
                                magna habitant volutpat elit eget tempus
                                adipiscing dignissim.
                            </Typography>
                        </Card>
                    </Box>
                ))}
            </Slider>
        </Box>
    );
}
