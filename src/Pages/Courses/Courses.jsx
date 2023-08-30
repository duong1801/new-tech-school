import { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Skeleton from "react-loading-skeleton";
import { useDispatch, useSelector } from "react-redux";
import RowCourses from "../../Components/RenderCourses/RowCourses/RowCourses";
import Header from "../../Layouts/Header/Header";
import {
  fetchCoursesByFrontEnd
} from "../../Slice/CoursesSlice";

const Courses = () => {
  const dispatch = useDispatch();
  const listCategoriesCourses = useSelector(
    (state) => state.courses.listCoursesFE.listCoursesFE
  );
  const isLoading = useSelector(
    (state) => state.courses.listCoursesFE.isLoading
  );
  useEffect(() => {
    dispatch(fetchCoursesByFrontEnd());
  }, []);
  return (
    <div className="courses">
      <div className="middle-sidebar-bottom background-whiteGray">
        <div className="py-4">
          <Container>
            {
              isLoading ?
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
                listCategoriesCourses.map((categoriesCourse, index) => {
                  return (
                    <RowCourses
                      key={categoriesCourse?.id}
                      id={categoriesCourse?.id}
                      isSlide
                      rowTitle={categoriesCourse?.name}
                      courses={categoriesCourse.courses}
                      link={categoriesCourse?.url}
                    />
                  )
                })
            }
          </Container>
        </div>
      </div>
    </div>
  );
};
export default Courses;
