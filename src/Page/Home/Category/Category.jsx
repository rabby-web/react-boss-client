import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";

import slide1 from "../../../assets/home/slide1.jpg";
import slide2 from "../../../assets/home/slide2.jpg";
import slide3 from "../../../assets/home/slide3.jpg";
import slide4 from "../../../assets/home/slide4.jpg";
import slide5 from "../../../assets/home/slide5.jpg";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const Category = () => {
  return (
    <div className="p-3">
      <SectionTitle
        subHeading={"From 11:00am to 10:00pm"}
        heading={"ORDER ONLINE"}
      ></SectionTitle>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper my-10"
      >
        <SwiperSlide>
          <img className="w-full" src={slide1} alt="" />
          <h3 className="text-3xl uppercase text-center -mt-20 font-semibold text-white">
            Salads
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full" src={slide2} alt="" />
          <h3 className="text-3xl uppercase text-center -mt-20 font-semibold text-white">
            Pizzas
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full" src={slide3} alt="" />
          <h3 className="text-3xl uppercase text-center -mt-20 font-semibold text-white">
            Sups
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full" src={slide4} alt="" />
          <h3 className="text-3xl uppercase text-center -mt-20 font-semibold text-white">
            Desserts
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full" src={slide5} alt="" />
          <h3 className="text-3xl uppercase text-center -mt-20 font-semibold text-white">
            Salads
          </h3>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Category;
