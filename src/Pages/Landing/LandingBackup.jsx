import CustomCursor from "../../Components/CustomCursor/CustomCursor";
import "./Landing.css";
import { Helmet } from "react-helmet";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import PricingSection from "../../NewComponents/PricingSection";
import FaqAccordion from "../../NewComponents/FaqAccordion";
import ContactUs from "../../Components/ContactUs/ContactUs";
import { BiPlus } from "react-icons/bi";
import BlurOnScroll from "../../NewComponents/BlurOnScroll";

const ourwork = [
  {
    ProjectVideo: "./Videos/HAGAN.mp4",
    ProjectDetail:
      "HAGAN, A pioneer lubricant brand, has had a profound impact on the global lubricant industry.",
    ProjectIndustry: "startup",
    ProjectName: "hagan lubricants",
    ProjectLink: "/haganlubricants",
  },
  {
    ProjectImg: "./Images/OurWorkImages/AlAli.webp",
    ProjectDetail:
      "AL Ali, A promising brand that delivers high quality cooking oil.",
    ProjectIndustry: "startup",
    ProjectName: "al ali",
    ProjectLink: "/alalioil",
  },
  {
    ProjectImg: "./Images/OurWorkImages/iPad Air Mockup.webp",
    ProjectDetail:
      "PEL, A Pakistani Exploration And Production Company With An International Presence",
    ProjectIndustry: "corporate",
    ProjectName: "pel",
    ProjectLink: "/pel",
  },
  {
    ProjectImg: "./Images/OurWorkImages/RTX.webp",
    ProjectDetail:
      "RTX is a brand of automotive and industrial lubricants offering a wide range of German formulated and locally blended oils, lubricants & greases.",
    ProjectIndustry: "startup",
    ProjectName: "rtx",
    ProjectLink: "/rtxlubricants",
  },
  {
    ProjectVideo: "./Videos/seekho.mp4",
    ProjectDetail:
      "Seekho is an award-winning Driver's Education Program in Karachi, that has trained over 1000 students since 2019.",
    ProjectIndustry: "startup",
    ProjectName: "seekho",
    ProjectLink: "/seekho",
  },
];

export default function Landing({ handleContactToggle }) {
  // Separate useInView for DigitalProductPorfpolio
  const { ref: digitalRef, inView: digitalInView } = useInView({
    triggerOnce: true, // Ensures the animation happens only once
    threshold: 0.2, // Trigger animation when 20% of the component is visible
  });

  return (
    <>
      <CustomCursor />

      <div className="QryptonLandingPage">
        <Helmet>
          <title>Qrypton - Inception to Perfection</title>
        </Helmet>
        <div className="HeaderVideo">
          <video autoPlay muted loop preload="auto">
            <source src="./Videos/Reels_Sections.mp4" type="video/mp4" />
          </video>
        </div>

        <section className="LandingSec2">
          {/*********************************************************************************
           *********************WE BUILD DIGITAL PRODUCT *************************************
           ***********************************************************************************/}

          <motion.section
            ref={digitalRef}
            initial={{ opacity: 0, y: 250 }}
            animate={digitalInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="DigitalProductPorfpolio"
          >
            <div className="digitalProductInner">
              <div className="digitalProductSec">
                <p>
                  we build digital <br /> products
                </p>
              </div>
              <div className="digitalProductSec">
                <h1>
                  Ready to take your ambitious project from intriguing idea to
                  smashing success?
                </h1>
                <p>
                  You want to improve your processes, serve more customers, and
                  grow your business with cutting-edge technology? We know how
                  to get you there.
                </p>
              </div>
              <div className="digitalProductSec">
                <h2>
                  Consulting, workshopping, and delivering advanced digital
                  solutions since 2019.
                </h2>
              </div>
              <div className="digitalProductSec">
                <div className="TotalWorksec1">
                  <p>OFFICES WORLDWIDE</p>
                  <p>2</p>
                </div>
                <div className="TotalWorksec1">
                  <p>TECH PROFESSIONALS</p>
                  <p>50+</p>
                </div>
              </div>
            </div>
          </motion.section>

          {/*********************************************************************************
           *********************OUR PROJECTS / OUR WORKS *************************************
           ***********************************************************************************/}
          <div className="OurWorkSection">
            {ourwork.map((project, index) => {
              // Create separate useInView for each project
              const { ref: projectRef, inView: projectInView } = useInView({
                triggerOnce: true,
                threshold: 0.1, // Adjust threshold based on when you want animation to trigger
              });

              // Conditional animation based on index
              const animationSettings =
                index === 2
                  ? {
                      initial: { opacity: 0, x: 250 },
                      animate: projectInView ? { opacity: 1, x: 0 } : {},
                    }
                  : index === 3
                    ? {
                        initial: { opacity: 0, x: -250 },
                        animate: projectInView ? { opacity: 1, x: 0 } : {},
                      }
                    : {
                        initial: { opacity: 0, y: 250 },
                        animate: projectInView ? { opacity: 1, y: 0 } : {},
                      };

              return (
                <motion.div
                  ref={projectRef}
                  className="EachWork"
                  key={index}
                  initial={animationSettings.initial}
                  animate={animationSettings.animate}
                  transition={{ duration: 0.8, delay: index * 0.2 }} // Stagger animation
                >
                  <a
                    href={project.ProjectLink}
                    target="_blank"
                    className="custom-cursor-target"
                  >
                    {project.ProjectVideo ? (
                      <div className="ProjectVideo">
                        <video autoPlay muted loop preload="auto">
                          <source src={project.ProjectVideo} type="video/mp4" />
                        </video>
                      </div>
                    ) : (
                      ""
                    )}
                    {project.ProjectImg ? (
                      <div className="ProjectImage">
                        <img src={project.ProjectImg} alt="" />
                      </div>
                    ) : (
                      ""
                    )}

                    <div className="ProjectDetails">
                      <h1>{project.ProjectDetail}</h1>
                    </div>
                    <div className="ProjectName">
                      <p>
                        {project.ProjectIndustry}:
                        <span>{project.ProjectName}</span>
                      </p>
                    </div>
                  </a>
                </motion.div>
              );
            })}
          </div>

          {/* PRICING SECTION  */}
          <PricingSection handleContactToggle={handleContactToggle} />

          {/* FAQS  */}
          <div className="max-w-[1500px] mx-auto md:mt-[150px] mt-[10rem] md:mb-[150px] mb-[10rem] max-2xl:px-[4%]">
            <div className="md:flex justify-between">
              <div className="flex flex-col gap-[22px] md:w-[50%]">
                <div className="flex w-[22%] max-xl:mb-[0px]">
                  <p className="capitalize flex items-center text-[1.6rem] font-semibold ">
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
                    <h2 className="text-[5.4rem]  font-bold  capitalize">
                      FAQ.
                    </h2>
                  </BlurOnScroll>
                </div>
                <BlurOnScroll>
                  <p className="text-[#6e6e6e] md:text-[1.4rem] text-[1.8rem] font-semibold w-[60%] max-md:my-[20px] ">
                    Got questions? We’ve got answers. Here’s <br></br>{" "}
                    everything you need to know about working with us.
                  </p>
                </BlurOnScroll>
              </div>
              <FaqAccordion />
            </div>
          </div>

          {/* LET'S TALK */}
          <div className="bg-[#00000005] md:py-[150px] pt-20 pb-20">
            <div className="max-w-[1500px] mx-auto max-2xl:px-[4%]">
              <div className="flex justify-between max-md:flex-col-reverse">
                <div className=" md:w-[45%] max-md:mt-[80px] bg-white">
                  <div className="bg-white lg:px-14 pt-18 pb-15 px-5 rounded-3xl flex flex-col justify-between">
                    <div>
                      <span class=" text-[1.6rem] font-[600] capitalize">
                        Qrypton
                      </span>
                      <p class="text-[black] text-[3.2rem] font-[600] leading-12 mt-[10px]">
                        Have a project{" "}
                        <span className="text-[#6e6e6e]">in mind?</span>
                      </p>
                    </div>
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
                    <h2 className="text-[5.4rem] font-bold text-black capitalize mt-[-15px]">
                      Let’s talk.
                    </h2>
                  </BlurOnScroll>

                  <BlurOnScroll>
                    <p className="text-[2.5rem] font-medium  leading-15 text-black lg:w-[80%] ">
                      Tell us about your&nbsp; project —{" "}
                      <span style={{ color: "#6e6e6e" }}>
                        websites and marketing campaigns.
                      </span>
                    </p>
                  </BlurOnScroll>

                  <div className="mt-[72px] pt-[72px] flex justify-between border-t-2 border-[#232323] ">
                    <div className="xl:w-[45%] w-[48%]">
                      <p class="text-[1.6rem] font-semibold text-black">
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
                        If you’re ready to create and collaborate, we’d love to
                        hear from you.
                      </p>
                    </div>
                    <div className="xl:w-[45%] w-[48%]">
                      <p class="text-[1.6rem] font-semibold text-black">
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
                        After the consultation, we’ll provide you with a
                        detailed plan and timeline.
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
                  <button class="landingbookmeeting submit press-effect max-2xl:mt-[90px] mt-[72px]   ">
                    <a
                      href="https://cal.com/shahrozqrypton/30min"
                      target="blank"
                    >
                      Book a meeting
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
