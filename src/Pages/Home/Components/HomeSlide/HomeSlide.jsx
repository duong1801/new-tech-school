import React, { useRef } from "react";
import Slider from "react-slick";
import { IconContext } from "react-icons";
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./HomeSlide.scss";
import "./HomeSlideResponsive.scss";

function HomeSlide(props) {
  const slider = useRef(null);
  // Settings for slider
  const settings = {
    arrows: false,
    dots: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 578,
        settings: {
          dots: false
        }
      }
    ]
  };

  // Fake data image
  const fakeSlideImage = [
    {
      id: 1,
      imageURL: "http://elomoas.uitheme.net/assets/images/video-wrap.jpg",
    },
    {
      id: 2,
      imageURL: "http://elomoas.uitheme.net/assets/images/course-2.jpg",
    },
    {
      id: 3,
      imageURL: "http://elomoas.uitheme.net/assets/images/course-3.jpg",
    },
  ];
  return (
    <div className="home-slide pt-4">
      <Slider ref={slider} {...settings}>
        {fakeSlideImage &&
          fakeSlideImage.map((item, _) => {
            return (
              <div className="card course-slider" key={item.id}>
                <div className="video-wrap">
                  <img src={item.imageURL} alt="banner" />
                </div>
                <div className="card-description">
                  <div className="card-content">
                    <span className="category-course front-end mb-4">
                      Front-End
                    </span>
                    <h2 className="text-white mb-2">
                      HTML - CSS Dành Cho Người Mới Bắt Đầu
                    </h2>
                    <p className="text-white mb-4">
                      Khoá học này sẽ giúp bạn nắm vững kiến thức HTML - CSS từ
                      cơ bản đến nâng cao. Đặc biệt khoá học này rất phù hợp với
                      những người mới tiếp cận với lập trình web nói chung, lập
                      trình Front-End nói riêng.
                    </p>
                    <a className="tech2-btn" href="#!">
                      Đăng kí học
                    </a>
                  </div>
                </div>
                <IconContext.Provider value={{ color: "#fff", size: "40px" }}>
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
            );
          })}
      </Slider>
    </div>
  );
}

export default HomeSlide;
