import React from "react";
import BlurOnScroll from "../../NewComponents/BlurOnScroll";

export default function MoreProjectHeading() {
  return (
    <div className="flex max-lg:flex-col max-2xl:px-[4%] mt-[8rem]">
      <div className="md:w-[35%] flex flex-col gap-[22px] leading-[01] max-lg:mb-[3rem]">
        <BlurOnScroll>
          <h2 className="text-[5.4rem]  font-bold  capitalize">
            more projects.
          </h2>
        </BlurOnScroll>
      </div>
      <div className="lg:w-[25%] sm:w-[80%] flex flex-col justify-center">
        <BlurOnScroll>
          <p className="md:text-[1.4rem] text-[1.8rem]   font-[600] text-[#6e6e6e]">
            We’ve helped businesses across industries achieve their goals. Here
            are some of our recent projects.
          </p>
        </BlurOnScroll>
      </div>
    </div>
  );
}
