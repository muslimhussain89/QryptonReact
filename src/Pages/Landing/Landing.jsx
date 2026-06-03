import CustomCursor from "../../Components/CustomCursor/CustomCursor";
import "./Landing.css";
import { Helmet } from "react-helmet";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

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

export default function Landing() {
   // Separate useInView for DigitalProductPorfpolio
   const { ref: digitalRef, inView: digitalInView } = useInView({
    triggerOnce: true, // Ensures the animation happens only once
    threshold: 0.2,    // Trigger animation when 20% of the component is visible
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
              const animationSettings = index === 2
                ? { initial: { opacity: 0, x: 250 }, animate: projectInView ? { opacity: 1, x: 0 } : {} }
                : index === 3
                ? { initial: { opacity: 0, x: -250 }, animate: projectInView ? { opacity: 1, x: 0 } : {} }
                : { initial: { opacity: 0, y: 250 }, animate: projectInView ? { opacity: 1, y: 0 } : {} };

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
        </section>
      </div>
    </>
  );
}
