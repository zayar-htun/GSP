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
            name: "Sarah",
            learn: "Marketing",
            des: "Joining this e-learning platform has been a game-changer for my career. The courses are not only relevant but also presented in an engaging manner. The flexibility to learn at my own pace has been a lifesaver, allowing me to balance work and education seamlessly.",
            logo: "/src/assets/stu/1.jpg",
        },
        {
            _id: 2,
            name: "Alex",
            learn: "Computer Science",
            des: "As a computer science student, I appreciate the in-depth content and practical approach of the courses offered here. The hands-on projects have significantly enhanced my coding skills, making me more confident in tackling real-world challenges. The community forums are a fantastic resource for collaboration and knowledge sharing.",
            logo: "/src/assets/stu/2.jpg",
        },
        {
            _id: 3,
            name: "Raj",
            learn: "Stay-at-home",
            des: "Being a stay-at-home mom, finding time for personal development seemed impossible. This e-learning website changed that for me. The bite-sized lessons and mobile-friendly interface let me squeeze in learning during nap times, helping me stay intellectually engaged while managing my household responsibilities.",
            logo: "/src/assets/stu/3.jpeg",
        },
        {
            _id: 4,
            name: "Carlos",
            learn: "Small Business Owner",
            des: "As a small business owner, time is of the essence. The practical business courses on this platform have given me actionable insights that I can implement immediately. The convenience of accessing courses on my schedule has made learning efficient and relevant to my entrepreneurial journey.",
            logo: "/src/assets/stu/4.jpg",
        },
        {
            _id: 5,
            name: "Mia",
            learn: "High School Graduate",
            des: "After high school, I wasn't sure about college, but I wanted to continue learning. This platform has been the perfect bridge. The diverse range of courses has allowed me to explore various fields and find my passion. The supportive community has been invaluable in guiding my educational decisions.",
            logo: "/src/assets/stu/5.jpg",
        },
        {
            _id: 6,
            name: "Luna",
            learn: "Healthcare Professional",
            des: "In the ever-evolving field of healthcare, staying updated is crucial. The healthcare courses on this platform are curated by industry experts, providing me with the latest information and best practices. The certification I earned here has opened up new opportunities for career advancement.",
            logo: "/src/assets/stu/5.jpg",
        },
        {
            _id: 7,
            name: "James",
            learn: "Graphic Designer",
            des: "The design courses on this platform have not only refined my technical skills but also broadened my creative perspective. The portfolio projects were instrumental in building my professional portfolio. I can confidently say that this platform has played a pivotal role in my success as a graphic designer.",
            logo: "/src/assets/stu/7.jpg",
        },
        {
            _id: 8,
            name: "James",
            learn: "Retiree",
            des: "Retirement doesn't mean the end of learning. The diverse courses on history, literature, and philosophy have been a source of intellectual stimulation. The interactive format makes learning enjoyable, and I appreciate the chance to connect with learners of all ages, fostering a sense of community.",
            logo: "/src/assets/stu/8.jpg",
        },
        {
            _id: 9,
            name: "Aisha",
            learn: "English Language Learner",
            des: "As someone learning English as a second language, the language courses here have been a tremendous help. The interactive lessons, pronunciation guides, and language exchange forums have significantly improved my language skills. I now feel more confident in my communication abilities, both written and spoken.",
            logo: "/src/assets/stu/9.jpg",
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
                    <Box
                        key={comment._id}
                        sx={{ marginTop: 1, marginBottom: 1, padding: 1 }}
                    >
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
                            <Typography variant="h4">{comment.name}</Typography>
                            <Typography>{comment.learn}</Typography>
                            <Rating name="read-only" value={5} readOnly />
                            <Typography sx={{ textAlign: "center" }}>
                                {comment.des}
                            </Typography>
                        </Card>
                    </Box>
                ))}
            </Slider>
        </Box>
    );
}
