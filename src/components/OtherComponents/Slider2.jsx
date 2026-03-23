import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./SwiperStyles.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import './Slider2.css'

const Slider2 = ({items}) => {
  const swiperRef = useRef(null); // Store swiper instance
 
  return (
    <div className="swiper-container1">
      {/* Custom Navigation Buttons */}
      <button className="custom-prev1" onClick={() => swiperRef.current?.slidePrev()}>
        <FaArrowLeft />
      </button>

      <Swiper
        modules={[Navigation,Pagination]}
        pagination={{ clickable: true }}
        spaceBetween={30}
        speed={500}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
        }}
        className="mySwiper1"
        onSwiper={(swiper) => (swiperRef.current = swiper)} // Store swiper instance
      >
        {items.map((val, index) => (
          <SwiperSlide key={index}>
            <div className="slide1 display-flex">
              <div className="image-container1">
                <img src={val.image} alt={val.title} />
                <div className="like">
                <i className="ri-heart-line icon3"></i>
                </div>
              </div>
              <div className="collection1">
                <p className="font-400">{val.title}</p>
                <div className="text-box">
                    <div className="iner-box">
                     <p className="small-para small-paragram">{val.cost}</p>
                     <p className="small-para small-paragram">ADD TO CART</p>
                    </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <button className="custom-next1" onClick={() => swiperRef.current?.slideNext()}>
        <FaArrowRight />
      </button>
    </div>
  );
};

export default Slider2;
