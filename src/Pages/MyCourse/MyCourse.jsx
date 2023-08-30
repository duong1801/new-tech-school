import { Col, Container, Row } from "react-bootstrap"
import Skeleton from "react-loading-skeleton";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import RowCourses from "../../Components/RenderCourses/RowCourses/RowCourses";

const MyCourse = () => {
    const { loading, myCourse, error } = useSelector(
        (state) => state.user
    );

    return (
        <>
            {
                myCourse.length > 0 ?
                    <div className="my-course">
                        <div className="middle-sidebar-bottom background-whiteGray">
                            <div className="pt-4">
                                <Container>
                                    <>
                                        {
                                            (loading || error)
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
                                                <>
                                                    <RowCourses
                                                        rowTitle={"Khoá học của tôi"}
                                                        courses={myCourse}
                                                    //   description={courseCategory?.description}
                                                    />
                                                </>
                                        }
                                    </>
                                </Container>
                            </div>
                        </div>
                    </div>
                    :
                    <div className="unauthorized">
                        <div>
                            <h3>Bạn chưa mua khoá học nào :( </h3>
                            <Link to="/course" className="tech2-btn mt-3">
                                Vào danh sách khoá học
                            </Link>
                        </div>
                    </div>
            }
        </>
    )
}

export default MyCourse