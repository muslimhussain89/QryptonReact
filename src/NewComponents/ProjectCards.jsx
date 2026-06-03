import React from "react";
import "aos/dist/aos.css";
export default function ProjectCards({ ProjectName, ProjectImage, videoSrc, projectLink, dataAos, projectDate }) {

  return (
    <a href={projectLink} target="_blank">
      <div className="group transition-all duration-300 gap-y-[5px]">
        <div className="flex justify-between items-center bg-white  w-full p-6 rounded-[18px]">
          <p className="text-[1.6rem] font-semibold capitalize">
            {ProjectName}
            <span className="text-[1rem] text-[#6e6e6e] ml-[15px]">
              /{projectDate}
            </span>{" "}
          </p>
          <p>
            <span className="bg-[#e7e7e7] w-[10px] h-[10px] inline-block  rounded-full group-hover:bg-red-500 transition-all duration-300"></span>
            <span className="bg-[#e7e7e7] w-[10px] h-[10px] inline-block mx-[6px] rounded-full group-hover:bg-yellow-500 transition-all duration-300"></span>
            <span className="bg-[#e7e7e7] w-[10px] h-[10px] inline-block  rounded-full group-hover:bg-green-500 transition-all duration-300"></span>
          </p>
        </div>
        <div
          className="border-4 border-white   transition-all duration-100   mt-[5px]  flex items-center justify-center
           rounded-[18px] bg-white overflow-hidden"
        >
        {
          ProjectImage && (<img
            src={ProjectImage}
            alt="project-image"
            className="rounded-[18px] group-hover:blur-[2px] transition-all duration-200 group-hover:scale-[1.1] w-full "
          />)
        }
          
          {
            videoSrc && (<video autoPlay loop muted playsInline preload="auto" className="pointer-events-none rounded-[18px] group-hover:blur-[2px] transition-all duration-200 group-hover:scale-[1.1] h-full object-cover">
            <source src={videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>)
          }
          
        </div>
      </div>
    </a>
  );
}
