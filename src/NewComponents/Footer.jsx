import React from "react";
import BlurOnScroll from "./BlurOnScroll";
import { HashLink } from "react-router-hash-link";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

export default function Footer() {
  return (
    <div>
      <div className="max-w-[1500px]  md:my-[150px] my-50 mx-auto max-2xl:px-[4%]">
        <footer class="text-black flex flex-col justify-between">
          <div class="sm:flex ">
            <div class="sm:w-[50%]">
              <a
                href="mailto:info@qrypton.com"
                class="text-[3rem]  font-medium  w-[80%] mb-[80px] leading-10 group"
              >
                <p class="flex text-[1.6rem] items-center mr-4 h-fit inline-block ">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 24 24"
                    class="bg-black text-white rounded-full  group-hover:rotate-90 transition-all duration-300"
                    height="18"
                    width="18"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M19 11h-6V5h-2v6H5v2h6v6h2v-6h6z"></path>
                  </svg>
                </p>
                <p className="inline-block border-b-2 pb-3 group-hover:border-0">
                  info@qrypton.com
                </p>
              </a>
            </div>
            <div className="sm:w-[32%] w-fit max-sm:mt-[50px]">
              <div className="flex">
                <div class="space-y-2 w-[50%]">
                  <p class="md:text-[1.4rem] text-[1.8rem] font-medium capitalize text-[#6e6e6e] mb-6">
                    Navigation
                  </p>
                  <ul class="text-xl space-y-2">
                    <li className="group flex items-center">
                      <span className="group-hover:w-[10px] group-hover:mr-[8px] w-0 overflow-hidden transition-all duration-200 inline-block">
                        <span class="bg-[#cdcdcd] w-0 mr-0 w-[10px] h-[10px] inline-block  rounded-full"></span>
                      </span>
                      {/* <a href="#" class="text-[1.8rem] font-medium capitalize">
                        Home
                      </a> */}
                      <HashLink
                        smooth
                        to="#home"
                        class="text-[1.8rem] font-medium capitalize"
                      >
                        Home
                      </HashLink>
                    </li>
                    <li className="group flex items-center">
                      <span className="group-hover:w-[10px] group-hover:mr-[8px] w-0 overflow-hidden transition-all duration-200 inline-block">
                        <span class="bg-[#cdcdcd] w-0 mr-0 w-[10px] h-[10px] inline-block  rounded-full"></span>
                      </span>
                      <HashLink
                        smooth
                        to="#about"
                        class="text-[1.8rem] font-medium capitalize"
                      >
                        about us
                      </HashLink>
                    </li>
                    <li className="group flex items-center">
                      <span className="group-hover:w-[10px] group-hover:mr-[8px] w-0 overflow-hidden transition-all duration-200 inline-block">
                        <span class="bg-[#cdcdcd] w-0 mr-0 w-[10px] h-[10px] inline-block  rounded-full"></span>
                      </span>
                      <HashLink
                        smooth
                        to="#projects"
                        class="text-[1.8rem] font-medium capitalize"
                      >
                        projects
                      </HashLink>
                    </li>
                    <li className="group flex items-center">
                      <span className="group-hover:w-[10px] group-hover:mr-[8px] w-0 overflow-hidden transition-all duration-200 inline-block">
                        <span class="bg-[#cdcdcd] w-0 mr-0 w-[10px] h-[10px] inline-block  rounded-full"></span>
                      </span>
                      <HashLink
                        smooth
                        to="#services"
                        class="text-[1.8rem] font-medium capitalize"
                      >
                        services
                      </HashLink>
                    </li>
                    <li className="group flex items-center">
                      <span className="group-hover:w-[10px] group-hover:mr-[8px] w-0 overflow-hidden transition-all duration-200 inline-block">
                        <span class="bg-[#cdcdcd] w-0 mr-0 w-[10px] h-[10px] inline-block  rounded-full"></span>
                      </span>
                      <HashLink
                        smooth
                        to="#pricing"
                        class="text-[1.8rem] font-medium capitalize"
                      >
                        pricing
                      </HashLink>
                    </li>
                  </ul>
                </div>

                <div class="space-y-2">
                  <p class="md:text-[1.4rem] text-[1.8rem] font-medium capitalize text-[#6e6e6e] mb-6">
                    Social
                  </p>
                  <ul class="text-xl space-y-2 flex align-middle">
                    <li className="group flex items-center mb-0 ">
                      <a href="https://www.linkedin.com/company/qrypton-design-studio/posts?lipi=urn%3Ali%3Apage%3Ad_flagship3_company_admin_dashboard_index%3BaX8mFIxUQfSPBJn5zSLSuA%3D%3D" target="blank" class="text-[1.8rem] font-medium capitalize">
                        <FaLinkedin size={30} />
                      </a>
                    </li>
                    <li className="group flex items-center mb-0 mx-3">
                      <a href="https://www.facebook.com/qryptonoffical/" target="blank"  class="text-[1.8rem] font-medium capitalize">
                        <FaFacebookSquare size={30} />
                      </a>
                    </li>
                    <li className="group flex items-center">
                      <a href="https://www.instagram.com/qrypton.agency/" target="blank" class="text-[1.8rem] font-medium capitalize">
                        <FaInstagramSquare size={30} />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="flex flex-col gap-[22px] mt-[150px]">
                <BlurOnScroll>
                  <h1 className="md:text-[12rem] text-[8rem] relative leading-[0.5] font-[800] whitespace-nowrap ">
                    Qrypton
                  </h1>
                </BlurOnScroll>
                <BlurOnScroll>
                  <p className="text-[4.5rem] font-[600] capitalize">studio</p>
                </BlurOnScroll>
              </div>
            </div>
          </div>
        </footer>
      </div>
      <div className="bg-black p-15">
        <div class="max-w-[1500px] mx-auto text-white sm:flex flex-wrap justify-between items-center">
          <div class="md:text-[1.4rem] text-[1.8rem] font-semibold text-[#6e6e6e]">
            © 2026 Qrypton Studio. All rights reserved.
          </div>

          <div class="sm:flex flex-wrap gap-6 items-center max-sm:mt-[20px]">
            {/* <a
              href="#"
              class="hover:text-gray-400 md:text-[1.4rem] text-[1.8rem] font-semibold max-sm:mr-[10px]"
            >
              Privacy Policy
            </a> */}
            {/* <a
              href="#"
              class="hover:text-gray-400 md:text-[1.4rem] text-[1.8rem] font-semibold"
            >
              Terms of Service
            </a> */}
            <div className="max-sm:mt-[20px] max-sm:text-end">
              <span className="text-[1rem] font-bold text-[#6e6e6e] mr-4 ml-52">
                Created by
              </span>
              <span class="md:text-[1.4rem] text-[1.8rem] font-semibold">
                Qrypton
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
