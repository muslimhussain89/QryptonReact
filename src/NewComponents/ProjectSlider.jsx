// import React from "react";
// import ProjectCards from "./ProjectCards";

// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import { Autoplay } from "swiper/modules";

// export default function ProjectSlider() {
//   const projects = [
//     {
//       projectName: "Hagan Lubricants",
//       videoSrc: "/Videos/HAGAN.mp4",
//       projectLink: "/haganlubricants",
//     },
//     {
//       projectName: "Hagan Lubricants",
//       projectImage: "./Images/AlAliOils/AliAliSolution3.png",
//       projectLink: "/alalioil",
//     },
//     {
//       projectName: "PEPL",
//       projectImage: "./Images/pel/PelSolution3.webp",
//       projectLink: "/pel",
//     },
//     {
//       projectName: "RTX",
//       projectImage: "./Images/Rtx/SolutionImage2.webp",
//       projectLink: "/rtxlubricants",
//     },
//     {
//       projectName: "DYNASYS NETWORKS",
//       videoSrc: "/Videos/LandingSateliteVideo.mp4",
//       projectLink: "/",
//     },
//     {
//       projectName: "SEEKHO PAKISTAN",
//       projectImage: "./Images/Seekho/SeekhoWeb.png",
//       projectLink: "/seekho",
//     },
//   ];

//   return (
//     <div className="max-w-[1500px] mx-auto mt-[100px] mb-[150px] grid grid-cols-1 md:grid-cols-2  gap-8 max-2xl:px-[4%]">
//       <Swiper
//         spaceBetween={10}
//         slidesPerView={6}
//         onSlideChange={() => console.log("slide change")}
//         onSwiper={(swiper) => console.log(swiper)}
        
//         autoplay={{
//           delay: 3500,
//           disableOnInteraction: false,
//         }}
//         navigation={true}
//         modules={[Autoplay]}
//         breakpoints={{
//           320: {
//             slidesPerView: 1.2,
//             spaceBetween: 10,
//           },
//           480: {
//             slidesPerView: 2,
//             spaceBetween: 10,
//           },
//           640: {
//             slidesPerView: 3,
//             spaceBetween: 15,
//           }
//         }}
//       >
//         {projects.map((project, index) => (
//           <SwiperSlide>
//             <ProjectCards
//               key={index}
//               ProjectName={project.projectName}
//               projectLink={project.projectLink}
//               videoSrc={project.videoSrc}
//               ProjectImage={project.projectImage}
//             />
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// }




import React from "react";
import ProjectCards from "./ProjectCards";
import { BiPlus } from "react-icons/bi";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
// import required modules
import { Autoplay } from "swiper/modules";
export default function projects() {
  const projects = [
    
    // {
    //   projectName: "TEKNUCLEI",
    //   projectImage: "./Images/Teknuclei/teknucli.webp",
    //   projectLink: "/teknuclei",
    //   projectDate:"2026"
    // },
    // {
    //   projectName: "AXION",
    //   projectImage: "./Images/Axion/axion-1.webp",
    //   projectLink: "/axion",
    //   projectDate:"2025"
    // },
    // {
    //   projectName: "CARMETRA",
    //   projectImage: "./Images/Carmetra/carmetra-1.webp",
    //   projectLink: "/carmetra",
    //   projectDate:"2025"

    // },
    {
      projectName: "PURE OIL",
      projectImage: "./Images/PureOil/pure-oil-1.webp",
      projectLink: "/pureoil",
      projectDate:"2024"
    },
    // {
    //   projectName: "HAGAN LUBRICANTS",
    //   videoSrc: "/Videos/HAGAN.mp4",
    //   projectLink: "/haganlubricants",
    //   projectDate:"2021"
    // },
    {
      projectName: "AL ALI",
      projectImage: "./Images/AlAliOils/AliAliSolution3.webp",
      projectLink: "/alalioil",
      projectDate:"2023"

    },
    // {
    //   projectName: "PEPL",
    //   projectImage: "./Images/pel/PelSolution3.webp",
    //   projectLink: "/pel",
    //   projectDate:"2020"

    // },
    {
      projectName: "RTX",
      projectImage: "./Images/Rtx/SolutionImage2.webp",
      projectLink: "/rtxlubricants",
      projectDate:"2020"
    },
    
    {
      projectName: "SEEKHO PAKISTAN",
      projectImage: "./Images/Seekho/SeekhoWeb.webp",
      projectLink: "/seekho",
      projectDate:"2021"
    },
    {
      projectName: "DYNASYS NETWORKS",
      videoSrc: "/Videos/LandingSateliteVideo.mp4",
      projectLink: "/dynasys",
      projectDate:"2023"
    },
    {
      projectName: "AIOTICA",
      videoSrc: "/Videos/aiotica-header-video.mp4",
      projectLink: "/aiotica",
      projectDate:"2026"
    },
    {
      projectName: "Reflections Interior & Design",
      projectImage: "./Images/Reflections/refletions-page-image-1.webp",
      projectLink: "/reflections",
      projectDate:"2026",
      Bgcolor:"#d6d8d9",
      ImgWidth:"88%"

      
    }
    
  ];

  return (
    <div className="md:mt-[100px] mt-30 max-2xl:px-[4%] overflow-hidden">
      <div className="w-full overflow-auto overflow-y-hidden">
        <Swiper
          spaceBetween={10}
          slidesPerView={6}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
            //   centeredSlides={true}
            //   loop={true}
          autoplay={{
            delay: 3500,
            disableOnInteraction: true,
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
              slidesPerView: 2.2,
              spaceBetween: 15,
            },
          }}
        >
          {projects.map((project, index) => (
            <SwiperSlide>
              <ProjectCards
              key={index}
              ProjectName={project.projectName}
              projectLink={project.projectLink}
              videoSrc={project.videoSrc}
              ProjectImage={project.projectImage}
              projectDate={project.projectDate}
              Bgcolor={project.Bgcolor}
              ImgWidth={project.ImgWidth}
            />
            
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
