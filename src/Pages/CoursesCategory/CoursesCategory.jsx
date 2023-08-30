import { useEffect } from "react";
import { Col, Container,Row } from "react-bootstrap";
import Skeleton from "react-loading-skeleton";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import RowCourses from "../../Components/RenderCourses/RowCourses/RowCourses";
import Header from "../../Layouts/Header/Header";
import { fetchCoursesByCategory } from "../../Slice/CoursesSlice";

const CoursesCategory = () => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  const courseCategory = useSelector(
    (state) => state.courses.coursesCategory.coursesCategory
  );

  const isLoading = useSelector(
    (state) => state.courses.coursesCategory.isLoading
  );

  useEffect(() => {
    dispatch(fetchCoursesByCategory(pathname));
  }, [pathname, dispatch]);
  return (
    <div className="course-category">
      <div className="middle-sidebar-bottom background-whiteGray">
        <div className="py-4">
          <Container>
            {
              isLoading
                ?
                <div className="row-courses loading-courses">
                  {/* <h2 className="my-4">{rowTitle}</h2> */}
                  <Row>
                    {new Array(4).fill(0).map((item, i) => {
                      return (
                        <Col key={i} xs="3">
                          <div className="card-course">
                            <div className="card-course__image">
                              <Skeleton height={150} />
                            </div>
                            <div className="card-course__body">
                              <div className="mt-2">
                                <Skeleton height={40} />
                              </div>
                              <div className="card-course--title mt-3">
                                <Skeleton />
                              </div>
                              <div className="card-course--content">
                                <Skeleton count={4} />
                              </div>
                              <div className="d-flex align-items-center py-2">
                                <Skeleton inline width={80} />
                              </div>
                            </div>
                          </div>
                        </Col>
                      )
                    })}
                  </Row>
                </div>
                :
                <RowCourses
                  rowTitle={courseCategory?.name}
                  courses={courseCategory?.courses}
                  description={courseCategory?.description}
                />
            }
          </Container>
        </div>
      </div>
    </div>
  );
};
export default CoursesCategory;
