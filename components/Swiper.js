// import Swiper core and required modules
import { Navigation, Pagination, A11y, Autoplay } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import Image from "next/image";
import styled from "styled-components";

const StyledDownArrow = styled.div`
  position: relative;
  left: 0%;
  bottom: 80px;
  font-weight: 1000;
  font-size: 50px;
  animation: "kf-arrow-anime" 2s linear infinite;
  z-index: 2;

  @keyframes kf-arrow-anime {
    0%,
    50%,
    100% {
      transform: translateY(-10%);
    }
    30% {
      transform: translateY(0%);
    }
  }
`;

const StyledArrowText = styled.div`
  position: relative;
  left: 30px;
  bottom: 140px;
  font-weight: 1000;
  font-size: 20px;
  transform: rotate(90deg);
  z-index: 2;
`;

const Swiper1 = () => {
  return (
    <div className={"swiper-container"}>
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, A11y, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
        navigation={{ enabled: true }}
        pagination={{ clickable: true, el: "#pagination" }}
        autoplay={{
          delay: 3000,
          pauseOnMouseEnter: true,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide>
          <div className={"swiper__title"}>test1</div>
          <Image
            src={"/demo1.jpg"}
            width={300}
            height={300}
            alt={"demo-image"}
            priority={true}
            className={"swiper-image"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <div className={"swiper__title"}>test2</div>
          <Image
            src={"/demo2.jpg"}
            width={300}
            height={300}
            alt={"demo-image"}
            priority={true}
          />
        </SwiperSlide>
        <SwiperSlide>
          <div className={"swiper__title"}>test3</div>
          <Image
            src={"/demo3.jpg"}
            width={300}
            height={300}
            alt={"demo-image"}
            priority={true}
          />
        </SwiperSlide>
        <SwiperSlide>
          <div className={"swiper__title"}>test4</div>
          <Image
            src={"/demo4.png"}
            width={300}
            height={300}
            alt={"demo-image"}
            priority={true}
          />
        </SwiperSlide>
      </Swiper>
      <StyledDownArrow>↓</StyledDownArrow>
      <StyledArrowText>Scroll</StyledArrowText>
      <div id={"pagination"} className="swiper-pagination"></div>
    </div>
  );
};

export default Swiper1;
