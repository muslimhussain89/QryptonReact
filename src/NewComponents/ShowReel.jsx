import React, { useRef, useState } from "react";
import { IoIosPlay } from "react-icons/io";

const ShowReel = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleTogglePlay = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  };

  return (
    <div className="md:mt-[100px] mt-30 max-2xl:px-[4%]">
      <div className="relative group overflow-hidden rounded-[15px]">
        <video
        poster="/Images/project-image.webp"
          ref={videoRef}
          muted
          playsInline
          preload="auto"
          // Update state based on video events
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          onEnded={() => setIsPlaying(false)}
          className={`rounded-[18px] transition-all duration-500 h-full object-cover 
            ${!isPlaying ? "group-hover:blur-[2px] group-hover:scale-[1.1]" : ""}`}
        >
          <source src="./Videos/Reels_Sections.mp4"   type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Clickable Overlay */}
        <div
          onClick={handleTogglePlay}
          className={`absolute inset-0 flex justify-center items-center cursor-pointer transition-opacity duration-500 bg-[#ffffff70]
            ${isPlaying ? "opacity-0 pointer-events-auto" : "opacity-100"}`}
          // style={{
          //   backgroundImage: !isPlaying
          //     ? "url('/Images/project-image.jpg')"
          //     : "none",
          //   backgroundSize: "cover",
          //   backgroundPosition: "center",
          // }}
        >
          <div class="flex justify-center items-center   absolute bottom-[50%] top-[50%] left-[50%]  transform translate-x-[-50%] group-hover:opacity-100 group-hover:left-[53%] transition-all duration-600">
            <div className="">
              <button className="p-8 bg-white rounded-full cursor-pointer">
                <IoIosPlay size={30} className="" />
              </button>
            </div>

            <div className="group-hover:opacity-0 transition-opacity duration-500 ml-[15px]">
              <p class="text-[2rem] text-black font-semibold">Watch showreel</p>
              <p className="text-[#6e6e6e] font-semibold text-[1.2rem]">
                (2016-25)
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowReel;
