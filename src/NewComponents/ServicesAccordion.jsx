import { useState } from "react";
import { BiPlus } from "react-icons/bi";
import { FiMinus } from "react-icons/fi";
const Accordion = ({
  number,
  serviceImage,
  title,
  categories,
  OpenTitle,
  Details,
  dataAos,
  dataDelay,
  onToggle,
  open,
}) => {
  return (
    <div
      className="cursor-pointer"
      onClick={onToggle}
      data-aos={dataAos}
      data-aos-delay={String(dataDelay)}
    >
      {/* Header */}
      <button
        className={` w-full flex justify-between  py-8 pb-0 text-left ${!open ? "cursor-pointer" : "cursor-default"}  transition-all duration-900 ${
          !open ? "max-h-[500px] opacity-100" : "max-h-[auto]"
        } `}
      >
        <p className="text-[1.6rem] font-semibold text-[#6e6e6e] lg:w-[22%] w-[10%]">
          {number}
        </p>
        <div className="border-b border-[#fffafa33] lg:w-[80%] w-[90%] flex justify-between">
          {!open && (
            <div className="flex justify-between items-center py-8 pt-0  ">
              <span className="text-[1.8rem] text-white font-semibold whitespace-nowrap">
                {title}
              </span>
            </div>
          )}

          <div
            className={`${!open ? "cursor-pointer" : "cursor-default"} overflow-hidden  transition-all duration-300  w-[90%] sm:flex justify-between py-8 pt-0 ${
              open ? "scale-[1]" : "scale-[0] h-0"
            }`}
          >
            <div className="md:flex md:w-[50%] w-[70%] mx-auto text-center sm:text-auto">
              <img
                src={serviceImage}
                className="w-[180px] h-fit md:mr-[25px] sm:mr-[10px] mx-auto"
                alt=""
              />
              <div className="max-md:mt-[20px]">
                <p
                  className="text-[white] text-[2.8rem] font-[500] leading-12"
                  dangerouslySetInnerHTML={{ __html: OpenTitle }}
                />
                <p className="text-[#6e6e6e] text-[1.4rem] font-semibold mt-[20px] leading-8">
                  {Details}
                </p>
              </div>
            </div>
            <div className="sm:w-[38%] max-sm:mt-[20px] w-[80%] mx-auto">
              <p className="text-white text-[1.2rem] font-semibold mb-[15px] max-sm:text-center">
                Services
              </p>
              <div className="flex flex-wrap gap-3">
                {categories.map((cat, i) => (
                  <span
                    key={i}
                    className={`inline-block rounded-full text-[1.1rem] font-semibold px-3 py-2
                  ${cat === "6+" ? "bg-[#272727] text-white" : "bg-[#e7e7e7]"}
                `}
                  >
                    {cat}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <span
            className={`text-2xl text-white transition-transform duration-300  `}
          >
            {open ? (
              <FiMinus
                size={25}
                className={`bg-black text-white mr-[15px] rounded-full transition-all duration-300  ${
                  open ? "rotate-360" : "rotate-0"
                }`}
              />
            ) : (
              <BiPlus
                size={25}
                className={`bg-black text-white mr-[15px] rounded-full ${
                  open ? "rotate-360" : "rotate-0"
                }`}
              />
            )}
          </span>
        </div>
      </button>
    </div>
  );
};

export default Accordion;
