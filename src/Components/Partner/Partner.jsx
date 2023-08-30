import React, { useRef } from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Partner.scss'

export default function Partner() {

    const PartnerItem = ({ url, title, logo }) => (
        <a title={title} className=" featuredPosts__text">
            {/* <h5 className="text-center mb-2">{title}</h5> */}
            <img src={logo} alt={title} className="partner__img" />
        </a>
    )
    const slider = useRef(null);

    const settings = {
      arrows: false,
      slidesToShow: 3,
      infinite: true,
      slidesToScroll: 1,
      speed: 3500,
      autoplay: true,
      autoplaySpeed: 500,
      responsive: [
        {
          breakpoint: 376,
          settings: {
            slidesToShow: 1,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
          },
        }
      ]
    };

    return (
        <div className="partner-slider py-5">
            <h3 className="py-3">Danh sách đối tác của Tech2</h3>
            <Slider ref={slider} {...settings}>
                <PartnerItem
                    url="https://laptrinhcuocsong.com/"
                    title="Lập trình cuộc sống"
                    logo="https://yt3.ggpht.com/ytc/AMLnZu9fQwH7GnwTLmth5INSVlv5--cbZ-xPKjNIYRSB=s176-c-k-c0x00ffffff-no-rj"
                />
                <PartnerItem
                    url="https://fullstack.edu.vn/"
                    title="F8"
                    logo="https://fullstack.edu.vn/static/media/f8-icon.18cd71cfcfa33566a22b.png"
                />
                <PartnerItem
                    url="https://www.nodemy.vn/"
                    title="Nodemy"
                    logo="https://mlcumuvdzi0w.i.optimole.com/cb:UbYe.da8/w:300/h:169/q:mauto/f:avif/https://nodemy.vn/wp-content/uploads/2022/09/Logo-Nodemy.png"
                />
                <PartnerItem
                    url="https://holetex.com/"
                    title="Holetex"
                    logo="https://yt3.ggpht.com/MmyBjwWwb50dJo__SPHRO_kGXMjPRhiRgTykElPkjL9xoQSa38kt0_NMvlro4rkRDxnJqSWz=s176-c-k-c0x00ffffff-no-rj"
                />
                <PartnerItem
                    url="https://pveser.com/"
                    title="Pveser"
                    logo="https://pveser.com/wp-content/uploads/2019/06/logo-pveser-01.png"
                />
            </Slider>
        </div>
    )
}
