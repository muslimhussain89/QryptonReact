import React, { useEffect } from "react";
import { BiPlus } from "react-icons/bi";
import { refreshAos } from "../hooks/useAos";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
// import required modules
import { Autoplay } from "swiper/modules";
export default function Logos() {
  useEffect(() => {
    const timer = setTimeout(refreshAos, 400);
    return () => clearTimeout(timer);
  }, []);

  const clientLogos = [
    {
      src: "/Images/clientLogos/hagan_logo.webp",
      className:
        "filter grayscale sm:w-[130px] w-[150px] group-hover:scale-[1.2] transition-all duration-300",
    },
    {
      src: "/Images/clientLogos/Al-Ali - Logo.webp",
      className:
        "sm:w-[120px] w-[130px] filter grayscale group-hover:scale-[1.2] transition-all duration-300",
    },
    {
      src: "/Images/clientLogos/site-logo.webp",
      className:
        "filter grayscale sm:w-auto w-[120px] group-hover:scale-[1.2] transition-all duration-300",
    },
    {
      src: "/Images/clientLogos/LogoFront.webp",
      className:
        "sm:w-[100px] w-[120px] filter grayscale group-hover:scale-[1.2] transition-all duration-300",
    },
    {
      src: "/Images/clientLogos/seekho-logo.webp",
      className:
        "filter grayscale sm:w-[150px] w-[140px] group-hover:scale-[1.2] transition-all duration-300 ",
    },
    {
      src: "/Images/clientLogos/SiteLogo.svg",
      className:
        "filter grayscale sm:w-[150px] w-[180px] group-hover:scale-[1.2] transition-all duration-300",
    },
    {
      src: "/Images/clientLogos/carnetra-logo.webp",
      className:
        "filter grayscale sm:w-[150px] w-[150px] group-hover:scale-[1.2] transition-all duration-300",
      bg: "#494949",
    },
    {
      src: "/Images/clientLogos/Axion-logo.webp",
      className:
        "filter grayscale sm:w-[150px] w-[150px] group-hover:scale-[1.2] transition-all duration-300",
    },
    {
      src: "/Images/clientLogos/pureoil-logo.webp",
      className:
        "filter grayscale sm:w-[150px] w-[150px] group-hover:scale-[1.2] transition-all duration-300",
    },
    {
      src: "/Images/clientLogos/tek-neclei-logo.webp",
      className:
        "filter grayscale sm:w-[150px] w-[150px] group-hover:scale-[1.2] transition-all duration-300",
      bg: "#494949",
    },
    {
      src: "/Images/clientLogos/onymLogo.svg",
      className:
        "filter grayscale sm:w-[150px] w-[150px] group-hover:scale-[1.2] transition-all duration-300",
    },
    {
      src: "/Images/clientLogos/galaxai-logo.svg",
      className:
        "filter grayscale sm:w-[150px] w-[150px] group-hover:scale-[1.2] transition-all duration-300",
      bg: "#494949",
    },
  ];

  return (
    <div className="max-w-[1500px] mx-auto md:mt-[150px] mt-50 md:mb-[150px] mb-50 max-2xl:px-[4%] overflow-hidden z-0 relative">
      <div className="sm:flex">
        <p className="capitalize flex items-center text-[1.6rem] font-[600] mr-[250px] max-sm:mb-[30px]">
          <BiPlus
            size={25}
            className="bg-black text-white mr-[15px] rounded-full"
          />
          our client
        </p>
        {/* <p className="text-[1.6rem] font-[600]">(2016-26©)</p> */}
      </div>
      <div className="w-full overflow-auto overflow-y-hidden mt-[80px]">
        <Swiper
          spaceBetween={10}
          slidesPerView={6}
          onSwiper={() => refreshAos()}
            //   centeredSlides={true}
            //   loop={true}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          navigation={true}
          modules={[Autoplay]}
          breakpoints={{
            320: {
              slidesPerView: 1.2,
              spaceBetween: 10,
            },
            480: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            640: {
              slidesPerView: 3,
              spaceBetween: 15,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
            1200: {
              slidesPerView: 6,
              spaceBetween: 10,
            },
          }}
        >
          {clientLogos.map((logo, index) => (
            <SwiperSlide key={index}>
              <div
                className={`h-[200px]  flex justify-center items-center p-6 rounded-[15px] group`}
                style={{ backgroundColor: logo.bg || "white" }}
                data-aos="fade-up"
                data-aos-delay={String(index * 100)}
              >
                <img
                  src={logo.src}
                  alt="our-client-logos"
                  className={logo.className}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
