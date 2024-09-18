import "./Landing.css";

const ourwork = [
  {
    ProjectVideo: "./Videos/HAGAN.mp4",
    ProjectDetail:
      "HAGAN, A pioneer lubricant brand, has had a profound impact on the global lubricant industry.",
    ProjectIndustry: "startup",
    ProjectName: "hagan lubricants",
    ProjectLink:"/haganlubricants"
  },
  {
    ProjectImg: "./Images/OurWorkImages/AlAli.png",
    ProjectDetail:
      "AL Ali, A promising brand that delivers high quality cooking oil.",
    ProjectIndustry: "startup",
    ProjectName: "al ali", 
    ProjectLink:"/alalioil"
  },
  {
    ProjectImg: "./Images/OurWorkImages/iPad Air Mockup.jpg",
    ProjectDetail:
      "PEL, A Pakistani Exploration And Production Company With An International Presence",
    ProjectIndustry: "corporate",
    ProjectName: "pel",
    ProjectLink:"/pel"
  },
  {
    ProjectImg: "./Images/OurWorkImages/RTX.png",
    ProjectDetail:
      "RTX is a brand of automotive and industrial lubricants offering a wide range of German formulated and locally blended oils, lubricants & greases.",
    ProjectIndustry: "startup",
    ProjectName: "rtx",
    ProjectLink:"/rtxlubricants"

  },
  {
    ProjectVideo: "./Videos/seekho.mp4",
    ProjectDetail:
      "Seekho is an award-winning Driver's Education Program in Karachi, that has trained over 1000 students since 2019.",
    ProjectIndustry: "startup",
    ProjectName: "seekho",
    ProjectLink:"/seekho"
  },
];

export default function Landing() {
  return (
    <div className="QryptonLandingPage">
      <div className="HeaderVideo">
        <video autoPlay muted loop preload="auto">
          <source src="./Videos/Reels_Sections.mp4" type="video/mp4" />
        </video>
      </div>

      <section className="LandingSec2">
        {/*********************************************************************************
         *********************WE BUILD DIGITAL PRODUCT *************************************
         ***********************************************************************************/}

        <section className="DigitalProductPorfpolio">
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
                grow your business with cutting-edge technology? We know how to
                get you there.
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
        </section>

        {/*********************************************************************************
         *********************OUR PROJECTS / OUR WORKS *************************************
         ***********************************************************************************/}
        <div className="OurWorkSection">
          {ourwork.map((project, index) => (
            <div className="EachWork" key={index}>
              <a href={project.ProjectLink} target="_blank">
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
                    {project.ProjectIndustry}:<span>{project.ProjectName}</span>
                  </p>
                </div>
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
