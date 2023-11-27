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
            name: "Engineering",
            teaname:"Dr Sarvepalli ",
            logo: "/src/assets/stu/engineer.jpg",
            price: 200000,
            rating: 4.5,
        },
        {
            _id: 2,
            name: "Sage",
            teaname:"Nolan Mars",
            logo: "/src/assets/stu/sage.jpg",
            price: 300000,
            rating: 4.5,
        },
        {
            _id: 3,
            name: "Marketing",
            teaname:"Savitribai Phule",
            logo: "/src/assets/stu/marketingg.jpg",
            price: 300000,
            rating: 3,
        },
        {
            _id: 4,
            name: "UI/UX",
            teaname:"David James",
            logo: "/src/assets/stu/uiux.jpg",
            price: 300000,
            rating: 4,
        },
        {
            _id: 5,
            name: "JavaScript",
            teaname:"McAuthor",
            logo: "/src/assets/stu/js.jpg",
            price: 300000,
            rating: 3,
        },
        {
            _id: 6,
            name: "Hacking Course",
            teaname:"Swami Vivekananda",
            logo: "/src/assets/stu/hack.jpg",
            price: 300000,
            rating: 5,
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
                            <Typography variant="h4">{course.teaname}</Typography>
                            <Typography variant="h6">{course.name}</Typography>
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
