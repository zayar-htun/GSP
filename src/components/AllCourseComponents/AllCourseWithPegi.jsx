import {
    Box,
    Button,
    Card,
    CardMedia,
    IconButton,
    Pagination,
    Rating,
    Typography,
} from "@mui/material";
import { useState } from "react";
import StarIcon from "@mui/icons-material/Star";
import { useNavigate } from "react-router-dom";
export default function AllCourseWithPegi() {
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
        {
            _id: 7,
            name: "The Net Ninja",
            logo: "https://www.filepicker.io/api/file/JIGkr7PVQeuw9rcBtGuB",
            price: 300000,
            rating: 3,
        },
        {
            _id: 8,
            name: "The Net Ninja",
            logo: "https://www.filepicker.io/api/file/JIGkr7PVQeuw9rcBtGuB",
            price: 300000,
            rating: 4.5,
        },
        {
            _id: 9,
            name: "The Net Ninja",
            logo: "https://www.filepicker.io/api/file/JIGkr7PVQeuw9rcBtGuB",
            price: 300000,
            rating: 4.5,
        },
    ]);

    return (
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
                            onClick={()=>{
                                navigate(`/coursedetail/${course._id}`)
                            }}
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
            <Pagination count={10} shape="rounded" />
        </Box>
    );
}
