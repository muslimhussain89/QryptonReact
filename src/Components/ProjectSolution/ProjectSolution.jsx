import React from "react";
import "./ProjectSolution.css";
import ImageComp from "../ImageComp/ImageComp";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
// import required modules
import { Autoplay } from "swiper/modules";
import Text from "../Text/Text";

export default function ProjectSolution({
  Slide1Image,
  Slide2Image,
  Slide3Image,
  Slide4Image,
  Slide1Text,
  Slide2Text,
  Slide3Text,
  Slide4Text,
}) {
  return (
    <div className="ProjectSolution">
      <Swiper
        spaceBetween={10}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        centeredSlides={true}
        loop={true} // Enables continuous loop
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay]}
      >
        <SwiperSlide>
          <div className="ProjectSolutionSlider">
            <div className="SliderImage">
              <ImageComp Src={Slide1Image} />
            </div>
            <div className="SliderDetails">
              <Text FontSize={"2.4rem"} text={Slide1Text} />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="ProjectSolutionSlider">
            <div className="SliderImage">
              <ImageComp Src={Slide2Image} />
            </div>
            <div className="SliderDetails">
              <Text FontSize={"2.4rem"} text={Slide2Text} />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="ProjectSolutionSlider">
            <div className="SliderImage">
              <ImageComp Src={Slide3Image} />
            </div>
            <div className="SliderDetails">
              <Text FontSize={"2.4rem"} text={Slide3Text} />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="ProjectSolutionSlider">
            <div className="SliderImage">
              <ImageComp Src={Slide3Image} />
            </div>
            <div className="SliderDetails">
              <Text FontSize={"2.4rem"} text={Slide4Text} />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="SliderHeading">
        <Text FontSize={"2.4rem"} text={"<span>Our Solutions</span> <br><br>Qrypton initiated the design process with meticulous planning, creating mood boards, and drawing inspiration for the complete branding, including themes and brand guidelines. "} />
      </div>
    </div>
  );
}
