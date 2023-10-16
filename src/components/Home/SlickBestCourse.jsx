import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useMediaQuery } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
export default function SlickBestCourse() {
    const [courseLists, setCourseLists] = useState([
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
    const navigate = useNavigate();

    const PrevArrow = ({ onClick }) => (
        <div className="slick-arrow" onClick={onClick}>
            <ArrowBackIosNewIcon /> {/* Replace with your left arrow icon */}
        </div>
    );

    const NextArrow = ({ onClick }) => (
        <div className="slick-arrow" onClick={onClick}>
            <ArrowForwardIosIcon /> {/* Replace with your right arrow icon */}
        </div>
    );

    // Use the useMediaQuery hook to determine the screen size
    const isLargeScreen = useMediaQuery(theme => theme.breakpoints.up("lg"));
    const isTablet = useMediaQuery(theme => theme.breakpoints.up("sm"));

    // Set the slidesToShow value based on the screen size
    const slidesToShow = isLargeScreen ? 3 : isTablet ? 2 : 1;

    const settings = {
        dots: true,
        infinite: false,
        slidesToShow: slidesToShow, // Use the dynamically determined value
        slidesToScroll: 3,
        arrows: false, // Enable arrows
        prevArrow: <PrevArrow />, // Custom previous arrow component
        nextArrow: <NextArrow />, // Custom next arrow component
    };
    
    return (
        <Box>
            <Slider {...settings}>
                {courseLists.map(course => (
                    <Box key={course._id}>
                        <Card
                            sx={{
                                marginLeft: 1,
                                maxWidth: 400,
                                borderRadius: "30px",
                            }}
                        >
                            <CardMedia
                                component="img"
                                height="260"
                                image={course.logo} // Use the course's logo as the image
                                alt={course.name}
                                onClick={() => {
                                    navigate(`/coursedetail/${course._id}`);
                                }}
                            />
                        </Card>
                        <Typography
                            variant="h4"
                            sx={{ margin: 1, marginBottom: 0 }}
                        >
                            {course.name}
                        </Typography>
                        <Typography
                            variant="h6"
                            sx={{ margin: 1, marginTop: 0, marginBottom: 3 }}
                        >
                            Programming
                        </Typography>
                    </Box>
                ))}
            </Slider>
        </Box>
    );
}
