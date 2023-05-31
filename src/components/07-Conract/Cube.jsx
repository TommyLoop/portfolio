
import React from "react";
import Pics from '../../images/phone.jpg'
import Pics2 from '../../images/email.jpg'
import Pics3 from '../../images/linkedin.jpg'
import Pics4 from '../../images/github.jpg'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCube, Pagination } from "swiper";

/**
  * 3D Kocka komponens 
  
  * Automatikusan forgó 3d-s kocka, melyen a kapcsolati 
  * típusok szerepelnek 
  @returns {React.Component} - Cube componens
  * * Validálva
  */
export default function Cube() {
  return (
    <div>
      <Swiper
        effect={"cube"}
        grabCursor={true}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 40,
          shadowScale: 0.94,
        }}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, EffectCube, Pagination]}
        className="mySwiper px-5 mx-5 mx-lg-0 p-lg-5"
      >
        <SwiperSlide>
          <img 
            className='img-fluid' 
            src={Pics}
            alt="phone"
            style={{border: "2px solid silver"}}
          />
        </SwiperSlide>
        <SwiperSlide>
        <img 
            className='img-fluid' 
            src={Pics2}
            alt="email"
            style={{border: "2px solid silver"}}
          />
        </SwiperSlide>
        <SwiperSlide>
        <img 
            className='img-fluid' 
            src={Pics3}
            alt="linkedin"
            style={{border: "2px solid silver"}}
          />
        </SwiperSlide>
        <SwiperSlide>
        <img 
            className='img-fluid' 
            src={Pics4}
            alt="location"
            style={{border: "2px solid silver"}}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
