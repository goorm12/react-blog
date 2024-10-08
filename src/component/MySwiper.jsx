import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import "./MySwiper.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
const MySwiper = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={0}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      loop={true}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      speed={1000}
    >
      <SwiperSlide>
        <img
          src="/assets/bgc1.jpg"
          alt=""
          style={{ width: "100%", height: "auto" }}
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="/assets/bgc2.jpg"
          alt=""
          style={{ width: "100%", height: "auto" }}
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="/assets/bgc3.jpg"
          alt=""
          style={{ width: "100%", height: "auto" }}
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default MySwiper;
