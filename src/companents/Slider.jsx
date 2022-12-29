// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
// Import Swiper styles
import "swiper/css/pagination";


// import required modules
import { Pagination } from "swiper";
import SliderInto from "./SliderInto";

export default function Slider() {
  return (
    <div className="intro">
      <Swiper
        spaceBetween={0}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><SliderInto/></SwiperSlide>
        <SwiperSlide><SliderInto/></SwiperSlide>
        <SwiperSlide><SliderInto/></SwiperSlide>
      </Swiper>
    </div>
  );
}
