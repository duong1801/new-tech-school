import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import RowCourses from "../../../Components/RenderCourses/RowCourses/RowCourses";
import {
    fetchDiscountCourses, fetchInterestCourse, fetchUnreleaseCourse
} from "../../../Slice/CoursesSlice";
import "./MainCourses.scss";

const MainCourses = () => {
    const dispatch = useDispatch();

    const unreleaseCourses = useSelector(
        (state) => state.courses.unreleaseCourses.unreleaseCourses
    );
    const interestCourses = useSelector(
        (state) => state.courses.interestCourses.interestCourses
    );

    useEffect(() => {
        dispatch(fetchInterestCourse());
        // dispatch(fetchReleaseCourse());
        dispatch(fetchUnreleaseCourse());
        dispatch(fetchDiscountCourses())
    }, []);

    const discountCourses = useSelector(
        (state) => state.courses.discountCourses.discountCourses
    );

    return (
        <>
            <div className="render-courses">
                <RowCourses
                    isSlide
                    courses={interestCourses}
                    rowTitle="Khoá học được quan tâm"
                />
                <RowCourses
                    isSlide
                    courses={discountCourses}
                    rowTitle="Khóa học được giảm giá"
                />
                <RowCourses
                    isSlide
                    courses={unreleaseCourses}
                    rowTitle="Khóa học sắp ra mắt"
                />
            </div>
        </>
    );
};
export default MainCourses;
