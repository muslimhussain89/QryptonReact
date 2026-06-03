import { BiPlus } from "react-icons/bi";
import "./LandingNew.css";
import TestimonialGrid from "../../NewComponents/TestimonialGrid";
import PricingSection from "../../NewComponents/PricingSection";
import FaqAccordion from "../../NewComponents/FaqAccordion";
import BlurOnScroll from "../../NewComponents/BlurOnScroll";
import LandingServicesSection from "../../NewComponents/LandingServicesSection";
import ShowReel from "../../NewComponents/ShowReel";
import { useAos } from "../../hooks/useAos";
import Logos from "../../NewComponents/Logos";
import ProjectSlider from "../../NewComponents/ProjectSlider";
import ContactUs from "../../Components/ContactUs/ContactUs";
import SeoHelmet from "../../Components/SeoHelmet/SeoHelmet";

export default function LandingNew({ handleContactToggle }) {
  // const text2 = "How we launch websites and marketing campaigns.";
  // const words2 = text2.split(" ");

  useAos({ duration: 400 });

  return (
    <>
      <SeoHelmet
        title="Qrypton — Inception to Perfection"
        description="Qrypton offers full stack development, design, branding, and more. We build clear brands, content that connects, and websites that work—so your business gets found online."
        path="/"
        image="/Images/landing-hero-bg.webp"
        imageAlt="Qrypton studio - Inception to Perfection"
      />
      <div className="bg-[url(/Images/landing-hero-bg.webp)] bg-cover sm:min-h-[92vh] sm:h-max min-h-[90vh] flex flex-col justify-between mt-[80px]">
        {/* <div className="absolute  w-full h-full overflow-hidden">
        <video autoPlay muted loop preload="auto" className="object-cover h-full">
          <source src=" ./Videos/Reels_Sections.mp4" type="video/mp4" />
        </video>
        <div className="absolute w-full h-full bg-[#0000008a] top-0"></div>
      </div> */}
        <div className="sm:pt-[150px] pt-[75px] lg:flex justify-between w-full px-[2%]">
          <h1 className="md:text-[15vw] text-[18vw] text-white relative leading-[0.5] font-[800] whitespace-nowrap mb-[80px]  header-animate">
            Qrypton
            {/* <sup className="inline-flex items-center justify-center border-[0.8vw] border-white rounded-full text-[4vw] leading-none w-[6vw] h-[6vw] align-middle">
              R
            </sup> */}
          </h1>

          <ul className=" text-white text-[1.6rem] mt-[80px] max-xl:mt-0 space-y-2 font-medium header-animate-left">
            <li>Clear brands people remember.</li>
            <li>Content that connects with the right audience.</li>
            <li>Websites that work smoothly and look right.</li>
            <li>Helping your business get found online.</li>
          </ul>
        </div>
        <div className="flex justify-between p-6">
          <span className="text-white text-[2rem] font-extralight w-[25%]">
            +
          </span>
          <span className="text-white text-[2rem] font-extralight w-[25%]">
            +
          </span>
          <span className="text-white text-[2rem] font-extralight w-[25%]">
            +
          </span>
          <span className="text-white text-[2rem] font-extralight w-[25%]">
            +
          </span>
        </div>
        <div className="p-6 pb-15 sm:flex justify-between items-end ">
          <div className="md:w-[30%] w-[80%]  md:text-center sm:mb-0 mb-[50px] header-animate">
            <p className="text-[1.8rem] text-white font-medium ">
              No generic websites. No empty marketing promises.
              <span className="opacity-[0.6] ml-2">
                Just tools and strategies that help your business grow and your
                brand shine.
              </span>
            </p>
          </div>
          <div className="flex items-end  justify-between header-animate-left">
            <p className="text-white max-md:hidden ">© 2026 Qrypton Studio</p>

            <div className="flex group sm:ml-[50px] whitespace-nowrap ">
              <div className="bg-white p-2 rounded-[15px] w-[150px] group-hover:rounded-tr-none group-hover:rounded-br-none duration-300">
                <img
                  className="rounded-[10px]"
                  src="/Images/get-in-touch-pic.webp"
                  alt="get-in-touch-pic"
                />
              </div>
              <div className="bg-white p-5 rounded-[15px] group-hover:rounded-tl-none group-hover:rounded-bl-none duration-300 flex flex-col justify-between">
                <div>
                  <p className="md:text-[1.4rem] text-[1.8rem] capitalize font-medium">
                    team lead
                  </p>
                  <p className="text-[1.2rem] text-[#090909]">at Qrypton</p>
                  <p className="text-[1.8rem] capitalize font-medium">
                    shahroz ahmad
                  </p>
                </div>

                <button
                  className=" cursor-pointer mt-[15px] bg-black text-white text-[1.2rem] px-[10px] py-[5px] rounded-full"
                >
                  <a href="https://cal.com/shahrozqrypton/30min" target="blank">
                    Let's talk
                  </a>
                  <span className="bg-white w-2.5 h-2.5 inline-block ml-[22px] rounded-full "></span>{" "}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <button
        onClick={handleContactToggle}
        className="fixed bottom-30 right-6 z-50 cursor-pointer bg-black text-white text-[1.2rem] px-[10px] py-[5px] rounded-full border border-white "
      >
        Let's talk
        <span className="bg-white w-2.5 h-2.5 inline-block ml-[22px] rounded-full"></span>
      </button> */}

      {/* OUR CLIENT SECTIOIN  */}
      <Logos />

      {/* PROJECTS SECTIONS  */}
      <div
        id="projects"
        className="max-w-[1500px] mx-auto md:mt-[150px] mt-50 md:mb-[150px] mb-50 "
      >
        <div className="flex max-lg:flex-col justify-between max-2xl:px-[4%]">
          <div className="w-[22%]">
            {/* <p className="md:text-[1.4rem] text-[1.8rem] font-[600] text-[#6e6e6e]">
              (27)
            </p> */}
          </div>
          <div className="w-[55%] flex flex-col gap-[22px] leading-[01] max-lg:my-[50px]">
            <BlurOnScroll>
              <h2 className="2xl:text-[12.2rem] sm:text-[8rem] text-[6rem]  font-[600] capitalize">
                projects.
              </h2>
            </BlurOnScroll>
            <p className="text-[3.5rem] font-[600]">©2026</p>
          </div>
          <div className="lg:w-[25%] sm:w-[80%] flex flex-col justify-center">
            <BlurOnScroll>
              <p className="md:text-[1.4rem] text-[1.8rem]   font-[600] text-[#6e6e6e]">
                We’ve helped businesses across industries achieve their goals.
                Here are some of our recent projects.
              </p>
            </BlurOnScroll>
          </div>
        </div>
        <ProjectSlider />
      </div>

      {/* WHY CHOOSE US SECTION  */}
      <div className="max-w-[1500px] mx-auto md:mt-[150px] mt-50 md:mb-[150px] mb-50">
        <div className=" flex max-lg:flex-col  max-2xl:px-[4%]">
          <div className="flex whitespace-nowrap max-lg:mb-[50px]">
            <p className="capitalize flex text-[1.6rem] font-[600] mr-[250px]">
              <BiPlus
                size={24}
                className="bg-black text-white mr-[15px] rounded-full"
              />
              Why choose us
            </p>
          </div>
          
        </div>
        <div className="md:flex  justify-between  max-2xl:px-[4%] md:mt-[35px] mt-40">
          <div className="2xl:w-[25%] xl:w-[30%] lg-[28%] md:w-[40%] w-fit  relative group overflow-hidden rounded-[15px] h-[650px]">
            <img
              src="/Images/project-section-image.webp"
              alt="why-choose-us-pic"
              className="rounded-[15px] group-hover:blur-[2px] transition-all duration-600 group-hover:scale-[1.1] h-[100%] object-cover"
            />
            <p className="capitalize flex text-[1.6rem]  absolute top-2 right-2 z-1 ">
              <BiPlus
                size={25}
                className="bg-black text-white mr-[15px] rounded-full group-hover:rotate-90 transition-all duration-300"
              />
            </p>
            <div className=" z-1 absolute bottom-24 left-8 opacity-0 group-hover:opacity-100 group-hover:bottom-14 transition-all duration-600">
              <p className="md:text-[1.4rem] text-[1.8rem]  text-white">
                Your digital journey begins with a conversation. Let's talk
                today.
              </p>
              <button
                onClick={handleContactToggle}
                className="cursor-pointer mt-[15px] bg-black text-white text-[1.2rem]  rounded-full"
              >
                <a
                  className="px-2.5 py-[5px] block"
                  href="https://cal.com/shahrozqrypton/30min"
                  target="blank"
                >
                  Let's talk{" "}
                  <span className="bg-white w-2.5 h-2.5 inline-block ml-[22px] rounded-full "></span>{" "}
                </a>
              </button>
            </div>
            <div className="z-0 absolute top-0 w-full h-full bg-black opacity-0 group-hover:opacity-50 transition-all duration-600"></div>
          </div>

          <div class="md:w-[50%] bg-[#f5f5f5] md:h-[650px] flex flex-col justify-between">
            {/* <!-- Top Heading --> */}

            <div className="flex flex-col gap-[22px] leading-[01]">
            <BlurOnScroll>
              <h3 className="text-[5.2rem] font-[600] leading-[1]">
                Proven results for every project,
                <span style={{ color: "#6e6e6e" }}>
                  {" "}
                  with a focus on design and functionality.
                </span>
              </h3>
            </BlurOnScroll>
          </div>


            <p class="md:text-[1.4rem] text-[1.8rem]  font-medium  sm:w-[80%] sm:mb-[46px] sm-mt-[0px] mb-[50px] mt-[46px] text-[#6e6e6e]">
              <span class="font-semibold text-black mr-2">
                 No complicated
                strategies.
              </span>
              No unnecessary features. No wasted time. Stronger brands. Better
              websites. Clear communication. Work that makes a difference.
            </p>

            {/* <!-- Two Cards Grid --> */}
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-2  ">
              <div
                class="rounded-2xl  flex flex-col group    transition-all duration-300"
                data-aos="fade-right"
              >
                <div class="flex items-end justify-end bg-white p-8 rounded-2xl group-hover:rounded-b-none transition-all duration-300  ">
                  <p class="text-[1.6rem] font-[600]  text-right">
                    Successful projects <br></br> completed
                  </p>
                </div>

                <div class="flex flex-col justify-between text-center bg-white p-8  sm:h-[160px] 2xl:h-[200px] h-auto mt-[5px] group-hover:mt-[0px] sm:group-hover:h-[162px] 2xl:group-hover:h-[204px]  rounded-2xl group-hover:rounded-t-none transition-all duration-300">
                  <h3 class="text-[5.5rem] font-semibold text-left">35+</h3>
                </div>
              </div>

              <div
                class="rounded-2xl  flex flex-col group   transition-all duration-300 max-sm:mt-[25px]"
                data-aos="fade-left"
              >
                <div class="flex items-start justify-end bg-white p-8 rounded-2xl group-hover:rounded-b-none transition-all duration-300">
                  <p class="text-[1.6rem] font-[600]  text-right">
                    Customer<br></br>
                    satisfaction rate
                  </p>
                </div>

                <div class="flex flex-col justify-between text-center bg-white p-8 rounded-2xl sm:h-[160px] 2xl:h-[200px] h-auto mt-[5px] group-hover:mt-[0px] sm:group-hover:h-[162px] 2xl:group-hover:h-[204px] rounded-2xl group-hover:rounded-t-none transition-all duration-300">
                  <h3 class="text-[5.5rem] font-semibold text-left">99%</h3>
                  {/* <div className="flex justify-between max-sm:mt-[50px]">
                    <img
                      src="/Images/clientLogos/Axion-logo.webp"
                      alt=""
                      className="lg:w-[28%] md:w-[26%] w-[26%] h-auto"
                    />
                    <img
                      src="/Images/clientLogos/hagan_logo.webp"
                      alt=""
                      className="mx-[15px] lg:w-[28%] md:w-[26%] w-[26%] h-auto"
                    />
                    <img
                      src="/Images/clientLogos/seekho-logo.webp"
                      alt=""
                      className="lg:w-[28%] md:w-[26%] w-[26%] h-auto"
                    />
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SERVICES SECTIONS  */}
      <LandingServicesSection handleContactToggle={handleContactToggle} />

      {/* ABOUT US  */}

      <div
        id="about"
        className="max-w-[1500px] mx-auto  md:mt-[150px] mt-50 md:mb-[150px] mb-50 "
      >
        <div className="flex max-lg:flex-col max-2xl:px-[4%]">
          <div className="flex whitespace-nowrap w-[22%]">
            <p className="capitalize flex text-[1.6rem] font-semibold mr-[250px]">
              <BiPlus
                size={24}
                className="bg-black text-white mr-[15px] rounded-full"
              />
              About us
            </p>
          </div>
          <div className="lg:w-[55%] sm:w-[80%] flex flex-col gap-[22px] leading-[1] max-lg:mt-[50px]">
            <p className=" flex text-[2rem] font-semibold mr-[250px] capitalize">
              Qrypton
            </p>
            <BlurOnScroll>
              <h3 className="text-[5.2rem] font-[600] leading-[1] w-[95%]">
                We build practical solutions
                <span style={{ color: "#6e6e6e" }}> for real businesses.</span>
              </h3>
            </BlurOnScroll>

            {/* <h3 className="text-[5.2rem] font-semibold flex flex-wrap leading-[1]">
            {words2.map((word, index) => {
              const isColored = index >= 3;

              return (
                <motion.span
                  key={index}
                  initial={{ filter: "blur(8px)" }}
                  whileInView={{ filter: "blur(0px)" }}
                  viewport={{ once: false, amount: 0.9 }}
                  transition={{
                    duration: 0.4,
                    ease: "easeOut",
                    delay: index * 0.05,
                  }}
                  className={`mr-3 inline-block ${
                    isColored ? "text-[#6e6e6e]" : "text-black"
                  }`}
                >
                  {word}
                </motion.span>
              );
            })}
          </h3> */}
            <p class="text-[#6e6e6e] text-[1.6rem] font-medium text-left mt-[20px] lg:w-[80%] sm:w-[80%] w-[100%] leading-9">
              Our work focuses on clarity, function, and good design. We believe
              simple ideas done well create the strongest results. Each project
              is approached with care and attention from start to finish.
              Because good work should last.
            </p>
          </div>
        </div>
        <ShowReel />
      </div>

      {/* Testimonials  */}

      {/* <div className="max-w-[1500px] mx-auto  mb-[150px] mt-[150px] max-2xl:px-[4%]">
        <div className="flex max-lg:flex-col ">
          <div className="flex whitespace-nowrap max-xl:mb-[50px]">
            <p className="capitalize flex text-[1.6rem] font-semibold mr-[250px]">
              <BiPlus
                size={24}
                className="bg-black text-white mr-[15px] rounded-full"
              />
              Testimonials
            </p>
          </div>
          <div className="w-[55%] flex flex-col gap-[22px]">
            <BlurOnScroll>
              <h3 className="2xl:text-[12.2rem] sm:text-[8rem] text-[6rem] font-semibold flex flex-wrap leading-[1]">
                Experiences
              </h3>
            </BlurOnScroll>

            <p className=" flex text-[3.5rem] font-semibold mr-[250px] capitalize">
              ©2025
            </p>
          </div>
        </div>
        <div>
          <TestimonialGrid />

          <div
            initial={{ filter: "blur(8px)" }}
            whileInView={{ filter: "blur(0px)" }}
            viewport={{ once: false, amount: 0.9 }}
            transition={{
              duration: 0.4,
              ease: "easeOut",
            }}
            className="grid sm:grid-cols-4 mt-[100px]"
          >
            <div>
              <BlurOnScroll>
                <p className="sm:text-[8rem] text-[5rem] font-semibold sm:text-left text-center">
                  3m+
                </p>
              </BlurOnScroll>
              <BlurOnScroll>
                <p className=" md:text-[1.4rem] text-[1.8rem] leading-7 mt-[15px] sm:text-left text-center">
                  Successful <br /> project launched
                </p>
              </BlurOnScroll>
            </div>
            <div className=" max-sm:my-[50px]">
              <BlurOnScroll>
                <p className="sm:text-[8rem] text-[5rem] font-semibold sm:text-left text-center">
                  3m+
                </p>
              </BlurOnScroll>
              <BlurOnScroll>
                <p className=" md:text-[1.4rem] text-[1.8rem] leading-7 mt-[15px] sm:text-left text-center">
                  Successful <br /> project launched
                </p>
              </BlurOnScroll>
            </div>
            <div>
              <BlurOnScroll>
                <p className="sm:text-[8rem] text-[5rem] font-semibold sm:text-left text-center">
                  3m+
                </p>
              </BlurOnScroll>
              <BlurOnScroll>
                <p className=" md:text-[1.4rem] text-[1.8rem] leading-7 mt-[15px] sm:text-left text-center">
                  Successful <br /> project launched
                </p>
              </BlurOnScroll>
            </div>
            <div className=" max-sm:mt-[50px]">
              <BlurOnScroll>
                <p className="sm:text-[8rem] text-[5rem] font-semibold sm:text-left text-center">
                  3m+
                </p>
              </BlurOnScroll>
              <BlurOnScroll>
                <p className=" md:text-[1.4rem] text-[1.8rem] leading-7 mt-[15px] sm:text-left text-center">
                  Successful <br /> project launched
                </p>
              </BlurOnScroll>
            </div>
          </div>
        </div>
      </div> */}

      {/* PRICING SECTION  */}
      <PricingSection handleContactToggle={handleContactToggle} />

      {/* FAQS  */}
      <div className="max-w-[1500px] mx-auto md:mt-[150px] mt-50 md:mb-[150px] mb-50 max-2xl:px-[4%]">
        <div className="md:flex justify-between">
          <div className="flex flex-col gap-[22px] md:w-[50%]">
          <div className="flex w-[22%] max-xl:mb-[50px]">
            <p className="capitalize flex text-[1.6rem] font-semibold ">
              <BiPlus
                size={25}
                className="bg-white text-black mr-[15px] rounded-full"
              />
              Queries
            </p>
          </div>
            <div
              initial={{ filter: "blur(8px)" }}
              whileInView={{ filter: "blur(0px)" }}
              viewport={{ once: false, amount: 0.9 }}
              transition={{
                duration: 0.4,
                ease: "easeOut",
              }}
              className="md:w-[55%] flex flex-col gap-[22px] leading-[1]"
            >
              <BlurOnScroll>
                <h2 className="2xl:text-[12.2rem] sm:text-[8rem] text-[6rem] font-semibold  capitalize">
                  FAQ.
                </h2>
              </BlurOnScroll>
            </div>
            <BlurOnScroll>
              <p className="text-[#6e6e6e] md:text-[1.4rem] text-[1.8rem] font-semibold w-[60%] max-md:my-[50px] ">
                Got questions? We’ve got answers. Here’s <br></br> everything
                you need to know about working with us.
              </p>
            </BlurOnScroll>
          </div>
          <FaqAccordion />
        </div>
      </div>

      {/* LET'S TALK */}
      <div className="bg-black md:py-[150px] pt-70 pb-50">
        <div className="max-w-[1500px] mx-auto max-2xl:px-[4%]">
          <div className="flex justify-between max-md:flex-col-reverse">
            <div className=" md:w-[45%] max-md:mt-[80px] bg-white">
              <div className="bg-white lg:px-14 pt-18 pb-15 px-5 rounded-3xl flex flex-col justify-between">
                <div><span class=" text-[1.6rem] font-[600] capitalize">
                  Qrypton
                </span>
                <p class="text-[black] text-[3.2rem] font-[600] leading-12 mt-[10px]">
                  Have a project{" "}
                  <span className="text-[#6e6e6e]">in mind?</span>
                </p></div>
                <div className="LandingContactUs">
                  <ContactUs />
                </div>
              </div>
              {/* <p class="text-[1.6rem] font-semibold text-white mt-[80px] ">
                © 2026 Qrypton Studio
              </p> */}
            </div>

            <div className="md:w-[50%] max-2xl:pt-[25px] pb-15  flex flex-col justify-between">
              <BlurOnScroll>
                <h2 className="2xl:text-[12.2rem] sm:text-[8rem] text-[6rem] font-semibold text-white capitalize mt-[-45px]">
                  Let’s talk.
                </h2>
              </BlurOnScroll>

              <BlurOnScroll>
                <p className="text-[2.5rem] font-medium  leading-15 text-white lg:w-[80%] ">
                  Tell us about your&nbsp; project —{" "}
                  <span style={{ color: "#6e6e6e" }}>
                    websites and marketing campaigns.
                  </span>
                </p>
              </BlurOnScroll>

              <div className="mt-[72px] pt-[72px] flex justify-between border-t-2 border-[#232323] ">
                <div className="xl:w-[45%] w-[48%]">
                  <p class="text-[1.6rem] font-semibold text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 256 256"
                      className="w-6 h-6 inline-block mr-5"
                      style={{ userSelect: "none", flexShrink: 0 }}
                    >
                      <g fill="white">
                        <path d="M114.34,154.34l96-96a8,8,0,0,1,11.32,11.32l-96,96a8,8,0,0,1-11.32-11.32ZM128,88a63.9,63.9,0,0,1,20.44,3.33,8,8,0,1,0,5.11-15.16A80,80,0,0,0,48.49,160.88,8,8,0,0,0,56.43,168c.29,0,.59,0,.89-.05a8,8,0,0,0,7.07-8.83A64.92,64.92,0,0,1,64,152,64.07,64.07,0,0,1,128,88Zm99.74,13a8,8,0,0,0-14.24,7.3,96.27,96.27,0,0,1,5,75.71l-181.1-.07A96.24,96.24,0,0,1,128,56h.88a95,95,0,0,1,42.82,10.5A8,8,0,1,0,179,52.27a112,112,0,0,0-156.66,137A16.07,16.07,0,0,0,37.46,200H218.53a16,16,0,0,0,15.11-10.71,112.35,112.35,0,0,0-5.9-88.3Z" />
                      </g>
                    </svg>
                    Quick response.
                  </p>
                  <p class="text-[#6e6e6e] md:text-[1.4rem] text-[1.8rem] font-semibold xl:w-[90%] leading-7 mt-[15px]">
                    If you’re ready to create and collaborate, we’d love to hear
                    from you.
                  </p>
                </div>
                <div className="xl:w-[45%] w-[48%]">
                  <p class="text-[1.6rem] font-semibold text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 256 256"
                      className="w-6 h-6 inline-block mr-5"
                      style={{ userSelect: "none", flexShrink: 0 }}
                    >
                      <g fill="currentColor">
                        <path
                          color="white"
                          d="M248,56a8,8,0,0,1-8,8H192v40a8,8,0,0,1-8,8H136v40a8,8,0,0,1-8,8H80v40a8,8,0,0,1-8,8H16a8,8,0,0,1,0-16H64V152a8,8,0,0,1,8-8h48V104a8,8,0,0,1,8-8h48V56a8,8,0,0,1,8-8h56A8,8,0,0,1,248,56Z"
                        />
                      </g>
                    </svg>
                    Clear next steps.
                  </p>
                  <p class="text-[#6e6e6e] md:text-[1.4rem] text-[1.8rem] font-semibold xl:w-[90%] leading-7 mt-[15px]">
                    After the consultation, we’ll provide you with a detailed
                    plan and timeline.
                  </p>
                </div>
              </div>

              {/* <button
                className="w-[288px]   max-2xl:mt-[90px] mt-[70px] cursor-pointer block"
              >
                <a
                  className="bg-white rounded-full py-[3.5%] px-[5.5%] w-full block text-center text-[1.8rem]"
                  href="https://cal.com/shahrozqrypton/30min"
                  target="blank"
                >
                  Book a metting
                </a>
              </button> */}
              <button class="landingbookmeeting submit press-effect max-2xl:mt-[90px] mt-[72px]  "><a href="https://cal.com/shahrozqrypton/30min"
                  target="blank">Book a meeting</a></button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
