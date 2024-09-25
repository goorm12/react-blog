import { Link } from "react-router-dom";

import "./Header.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Header = ({ rightChild }) => {
  return (
    <div className="Header-container">
      <nav className="nav">
        <h1 className="header-title">
          <Link to={"/"}>GoormLog</Link>
        </h1>
        <div className="span-container">{rightChild}</div>
      </nav>
      <header className="header">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={0}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          loop={true}
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
      </header>
    </div>
  );
};

export default Header;
