import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./SwiperStyles.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const SwiperComponent = ({ collections }) => {

  const swiperRef = useRef(null);
  console.log({ collections });
  return (
    <div className="swiper-container">

       <button className="custom-prev" onClick={() => swiperRef.current?.slidePrev()}>
        <FaArrowLeft />
      </button>
 
      <Swiper
        modules={[Navigation]}
        loop={true} 
        spaceBetween={70} 
        speed={500}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="mySwiper"
        onSwiper={(swiper) => (swiperRef.current = swiper)} // Store swiper instance
      >
        {collections.map((val, index) => (
          <SwiperSlide key={index}>
            <div className="slide display-flex">
              <div className="image-container">
                <img src={val.image} alt={val.title} />
              </div>
              <div className="collection">
                <span className="jost-font font-400 an">{val.title}</span>
                <p className="main-para small-para">{val.para}</p>
                <span className="discover-now font-400">DISCOVER NOW</span>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <button className="custom-next" onClick={() => swiperRef.current?.slideNext()}>
        <FaArrowRight />
      </button>
    </div>
  );
};

export default SwiperComponent;
