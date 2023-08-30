import React from "react";

import { Route, Routes } from "react-router-dom";

import "react-loading-skeleton/dist/skeleton.css";
import "react-toastify/dist/ReactToastify.css";
import "../assets/Scss/DarkMode.scss";

import { PageLayout } from "../Layouts/PageLayout/PageLayout";

import Author from "../Pages/Author/Author";
import CourseDetail from "../Pages/CourseDetail/CourseDetail";
import Courses from "../Pages/Courses/Courses";
import CoursesCategory from "../Pages/CoursesCategory/CoursesCategory";
import Home from "../Pages/Home/Home";
import Page404 from "../Pages/Page404/Page404";
import PostDetail from "../Pages/PostDetail/PostDetail";
import Posts from "../Pages/Posts/Posts";
import PostsCategory from "../Pages/PostsCategory/PostsCategory";
import UserProfile from "../Pages/User/UserProfile";
import VideoDetail from "../Pages/VideoDetail/VideoDetail";
import SearchDetail from "../Pages/SearchDetail/SearchDetail";
import PostsTag from "../Pages/PostsTag/PostsTag";
import MyCourse from "../Pages/MyCourse/MyCourse";
import ProtectedRoute from "../Components/ProtectedRoute/ProtectedRoute";

function Tech2Routes({ props }) {
  return (
    <Routes>
      <Route element={<PageLayout />}>
        <Route path="/" element={<Home />} exact />
        <Route path="/course" element={<Courses />} />
        <Route path="/course/detail/:courseID" element={<CourseDetail />} />
        <Route
          path="/course/categories/:categoryID"
          element={<CoursesCategory />}
        />
        <Route element={<ProtectedRoute />}>
          <Route path="/course/my-course" element={<MyCourse />} />
          <Route
            path="/course/:whatCourse/lesson/:lessonID"
            element={<VideoDetail />}
          />
          <Route path="/user-setting" element={<UserProfile />} />
        </Route>
        <Route path="/article" element={<Posts />} />
        <Route path="/article/detail/:articleID" element={<PostDetail />} />
        <Route path="/teacher/detail/:teacherID" element={<Author />} />
        <Route
          path="/article/category/:categoryID"
          element={<PostsCategory />}
        />
        <Route path="/article/tag/:tagID" element={<PostsTag />} />
        <Route path="/search" element={<SearchDetail />} />
          
        <Route path="/search-test" element={<SearchDetail />} />  
      </Route>

      <Route path="*" element={<Page404 />} />
    </Routes>
  );
}

export default Tech2Routes;
