import React from "react";
import "./EffectC.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper/modules";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination} from "swiper/modules";

function EffectC({items}) {
  return (
    <div className="swipercontainer">
      <Swiper
        modules={[EffectCoverflow, Pagination]}
        spaceBetween={30}
        effect="coverflow"
        centeredSlides={true}
        breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: false, // Disable shadows
          }}
        pagination={{ clickable: true }}
        className="mySwiper2"
      >

        {items.map((val,index)=>(
           <SwiperSlide key={index}>
            <div className="coverflow">
            <h1 className="font-400">"{val.comment}"</h1>
            <p style={{textAlign:"center", marginTop:"1.5vw",fontSize:"0.9vw"}}>{val.by}</p>
            </div>
           </SwiperSlide> 
        ))}
      </Swiper>

    </div>
  );
}

export default EffectC;
