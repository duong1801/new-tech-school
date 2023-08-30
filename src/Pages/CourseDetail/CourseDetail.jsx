import { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Skeleton from 'react-loading-skeleton';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import ModalPayment from '../../Components/ModalPayment/ModalPayment';
import Header from '../../Layouts/Header/Header';
import { fetchDetailCourse } from '../../Slice/CoursesSlice';
import BuyCourse from './Components/BuyCourse/BuyCourse';
import DescriptionCourse from './Components/DescreptionCourse/DescriptionCourse';
import ListsVideo from './Components/ListsVideo/ListsVideo';
import TitleCourse from './Components/TitleCourse/TitleCourse';
import "./CourseDetailResponsive.scss";
const CourseDetail = () => {
  const { pathname } = useLocation();


  const {isLoading, detailCourse, isError} = useSelector(
    (state) => state.courses.detailCourse
  );

  const {myCourse} = useSelector((state) => state.user)

  let checkUserHasCourse = myCourse.some(myCourseID => myCourseID.id === detailCourse.id);


  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchDetailCourse(pathname));
  }, [pathname]);




  return (
    <>
      <div className="course-detail">
        <div className="middle-sidebar-bottom background-whiteGray">
          <div className="py-4">
            <Container>
              <Row>
                <Col xs={12} sm={12} lg={9}>
                  {isLoading || isError ? (
                    <>
                      <Skeleton height={257} />
                      <div className="my-5">
                        <Skeleton className="mb-4" height={66} />
                        <Skeleton className="mb-4" height={66} />
                        <Skeleton className="mb-4" height={66} />
                      </div>
                      <Skeleton height={350} />
                    </>
                  ) : (
                    <>
                      <TitleCourse name={detailCourse?.name} category={detailCourse?.category} description={detailCourse?.description} />
                      <ListsVideo modules={detailCourse?.modules} courseSlug={detailCourse?.slug}/>
                      <DescriptionCourse description={detailCourse?.description} />
                      {/* <TitleCourse {...course} /> */}
                    </>
                  )}
                </Col>
                <Col xs={12} sm={12} lg={3}>
                  {isLoading || isError ? (
                    <div className="text-center rounded bg-white border">
                      <Skeleton height={130} />
                      <div className="p-3 mb-2">
                        <Skeleton width={200} />
                        <Skeleton width={200} />
                      </div>
                      <div className="mb-3 d-flex align-items-center justify-content-center">
                        <Skeleton
                          height={50}
                          width={50}
                          borderRadius={50}
                          inline
                        />
                        <Skeleton
                          style={{ marginLeft: "10px" }}
                          height={20}
                          width={100}
                          inline
                        />
                      </div>
                      <div className="p-3">
                        <Skeleton width={100} />
                      </div>
                    </div>
                  ) : (
                    <BuyCourse {...detailCourse} canAccess={checkUserHasCourse} />
                  )}
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </div>
      <ModalPayment {...detailCourse} />
    </>
  );
};
export default CourseDetail;
