import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ThemedApp from "./ThemedApp.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import Home from "./pages/Home.jsx";
import AllCourses from "./pages/AllCourses.jsx";
import CourseDetail from "./pages/CourseDetail.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Checkout from "./pages/Checkout.jsx";
import EnrolledCourse from "./pages/EnrolledCourse.jsx";
import ViewEnrolledCourse from "./pages/ViewEnrolledCourse.jsx";
import TeacherRegister from "./pages/TeacherRegister.jsx";
import ChatRoom from "./pages/ChatRoom.jsx";
import ChatMessage from "./pages/ChatMesssage.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <ThemedApp />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/register",
                element: <Register />,
            },
            {
                path: "/allcourses",
                element: <AllCourses />,
            },
            {
                path: "/coursedetail/:id",
                element: <CourseDetail />,
            },
            {
                path: "/dashboard",
                element: <Dashboard />,
            },
            {
                path: "/checkout/:id",
                element: <Checkout />,
            },
            {
                path: "/enrolledCourse",
                element: <EnrolledCourse />,
            },
            {
                path: "/viewenrolledcourse/:id",
                element: <ViewEnrolledCourse />,
            },
            {
                path: "/teacherregister",
                element: <TeacherRegister />,
            },
            {
                path: "/chatroom",
                element: <ChatRoom />,
            },
            {
                path: "/ChatMessage",
                element: <ChatMessage />,
            },
            
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
