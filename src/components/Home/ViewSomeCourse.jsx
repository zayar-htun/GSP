import {
    Box,
    Button,
    Card,
    CardMedia,
    IconButton,
    Rating,
    Typography,
} from "@mui/material";
import { useState } from "react";
import StarIcon from "@mui/icons-material/Star";
import { useNavigate } from "react-router-dom";
export default function ViewSomeCourse() {
    const navigate = useNavigate();
    const [courseLists, setCourseLists] = useState([
        {
            _id: 1,
            name: "The Net Ninja",
            logo: "https://www.filepicker.io/api/file/JIGkr7PVQeuw9rcBtGuB",
            price: 300000,
            rating: 4.5,
        },
        {
            _id: 2,
            name: "The Net Ninja",
            logo: "https://www.filepicker.io/api/file/JIGkr7PVQeuw9rcBtGuB",
            price: 300000,
            rating: 4.5,
        },
        {
            _id: 3,
            name: "The Net Ninja",
            logo: "https://www.filepicker.io/api/file/JIGkr7PVQeuw9rcBtGuB",
            price: 300000,
            rating: 3,
        },
        {
            _id: 4,
            name: "The Net Ninja",
            logo: "https://www.filepicker.io/api/file/JIGkr7PVQeuw9rcBtGuB",
            price: 300000,
            rating: 3,
        },
        {
            _id: 5,
            name: "The Net Ninja",
            logo: "https://www.filepicker.io/api/file/JIGkr7PVQeuw9rcBtGuB",
            price: 300000,
            rating: 4.5,
        },
        {
            _id: 6,
            name: "The Net Ninja",
            logo: "https://www.filepicker.io/api/file/JIGkr7PVQeuw9rcBtGuB",
            price: 300000,
            rating: 4.5,
        },
    ]);

    return (
        <Box>
            <Box>
                <Typography variant="h4" sx={{ mb: 3 }}>
                    Courses
                </Typography>
            </Box>
            <Box
                sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "center",
                    gap: "16px",
                }}
            >
                {courseLists.map(course => (
                    <Box key={course._id} sx={{ flexBasis: "30%" }}>
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
                            />
                        </Card>
                        <Box sx={{ margin: 1 }}>
                            <Typography variant="h4">{course.name}</Typography>
                            <Typography variant="h6">Programming</Typography>
                            <Typography>{course.price} MMK</Typography>
                            <Rating
                                name="read-only"
                                value={course.rating}
                                readOnly
                                sx={{ marginBottom: 3 }}
                            />
                        </Box>
                    </Box>
                ))}
                <Box>
                    <Button
                        variant="contained"
                        sx={{
                            borderRadius: "100px",
                            bgcolor: "buttonColor.backgroundColor",
                        }}
                        onClick={() => {
                            navigate(`/allcourses`);
                        }}
                    >
                        <Typography variant="h5" sx={{ py: 2, px: 4 }}>
                            Explore More Courses
                        </Typography>
                    </Button>
                </Box>
            </Box>
        </Box>
    );
}
