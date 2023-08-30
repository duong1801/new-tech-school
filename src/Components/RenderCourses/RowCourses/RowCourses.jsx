import { useEffect, useRef, useState } from "react"
import { Col, Row } from "react-bootstrap"
import { IconContext } from "react-icons"
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa"
import Skeleton from "react-loading-skeleton"
import { Link } from "react-router-dom"
import Slider from "react-slick"
import "slick-carousel/slick/slick-theme.css"
import "slick-carousel/slick/slick.css"
import RenderCourses from "../RenderCourses"
import "./RowCourses.scss"
const CoursesSlide = ({ courses }) => {
  const slider = useRef(null)
  // Settings for slider
  const settings = {
    arrows:false,
    dots: false,
    speed: 100,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: courses.length > 1 ? true : false,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: courses.length >= 2 && 2 ,
          slidesToScroll: 1,
          autoplay: true,
          arrows: courses.length > 2 ? true : false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: courses.length >= 2 && 2 ,
          slidesToScroll: 1,
          autoplay: true,
          arrows: courses.length > 1 ? true : false,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: window.innerWidth <= 450 ? 1 : 2  ,
          slidesToScroll: 1,
          autoplay: true,
          arrows: window.innerWidth <= 450 ? true : false,
        },
      },
    ],
  }
  return (
    <div className="slider">
      <Slider ref={slider} {...settings} className="p-0">
        {courses?.map((course) => (
          <RenderCourses {...course} key={course.id} />
        ))}
      </Slider>
      <IconContext.Provider
        value={{ color: "rgba(245, 56, 56,.6)", size: "35px" }}
      >
        <FaChevronCircleLeft
          onClick={() => slider?.current?.slickPrev()}
          className="prev-slider btn-slider"
        />
        <FaChevronCircleRight
          onClick={() => slider?.current?.slickNext()}
          className="next-slider btn-slider"
        />
      </IconContext.Provider>
    </div>
  )
}

const CoursesGrid = ({ courses }) =>
  courses?.map((course) => {
    return (
      <Col xs="12" sm="6" lg="4" xl="3" className="p-0 mt-3 " key={course.id}>
        <RenderCourses {...course} />
      </Col>
    )
  })

const RowCourses = ({id, courses, rowTitle, isSlide, link,description }) => {

  const [loadingItem, setLoadingItem] = useState(4)

  // Resize Screen then set how many item are loading
  const handleResize = () => {
    switch (true) {
      case (window.innerWidth <= 575):
        setLoadingItem(1)
        break;
      case (576 <= window.innerWidth && window.innerWidth < 767):
        setLoadingItem(2)
        break;

      case ((768 <= window.innerWidth && window.innerWidth < 992) || (992 <= window.innerWidth && window.innerWidth < 1200)):
        setLoadingItem(3)
        break;

      default:
        setLoadingItem(4)
        break;
    }
  }

  useEffect(() => {

    window.addEventListener("resize", handleResize)
    handleResize()
    return () => window.removeEventListener("resize", handleResize)
  }, [])


  if (!courses || courses.length === 0) {
    return (
      <div className="row-courses loading-courses">
        <h2 className="my-4">{rowTitle}</h2>
        <Row>
          {new Array(loadingItem).fill(0).map((item, i) => {
            return (
              <Col key={i} xs="12" sm="6" md="4" lg="4" xl="3">
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
    )
  }
  return (
    <div id={id} className="render-courses">
      {
        link &&
        <div className="d-flex align-items-center my-4">
          <h2>{rowTitle}</h2>
          <Link className="ml-auto read-more" to={`${link}`}>Xem thêm</Link>
        </div>
      }
      {
        !link && <h2 className="my-4">{rowTitle}</h2>
      }
      {
        description && <p class="my-3">{description}</p>
      }
      <Row>
        {
          ((isSlide && courses?.length > 4) || (window.innerWidth <= 992 && courses?.length >= 2)) ? (
            <CoursesSlide courses={courses} />
          ) : (
            <CoursesGrid courses={courses} />
          )
        }
      </Row>
    </div>
  )
}
export default RowCourses
