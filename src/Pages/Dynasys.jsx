import React from "react";
import ProjectHeroSection from "../Components/ProjectHeroSection/ProjectHeroSection";
import ProjectAbout from "../Components/ProjectAbout/ProjectAbout";
import ProjectTwoColumnWrapper from "../Components/ProjectTwoColumnWrapper/ProjectTwoColumnWrapper";
import ImageComp from "../Components/ImageComp/ImageComp";
import OurSolutionSection from "../Components/OurSolutionSection/OurSolutionSection";
import SeoHelmet from "../Components/SeoHelmet/SeoHelmet";

export default function Dynasys() {
  return (
    <div className="ProjectPage">
      <SeoHelmet
        title="DynaSys Project | Qrypton"
        description="See how Qrypton supported DynaSys Networks with brand strategy and digital design. Delivering user-centric experiences for Pakistan's leading IoT infrastructure company."
        path="/dynasys"
        image="/Images/Dynasys/Dynasys-page-image-1.webp"
        type="website"
        imageAlt="DynaSys project by Qrypton"
      />
      <ProjectHeroSection
        TextDetail={
          "<span>DynaSys,</span>is IoT technology company"
        }
        Tab1={"branding"}
        Tab2={"UI/UX"}
        Tab3={"Product Design"}
        Tab4={"Social Media Marketing"}
        Tab5={"Development"}
      />

      {/* PROJECT VIDEO */}
      <div className="ProjectVideo">
        <video autoPlay muted loop preload="auto">
          <source src=" ./Videos/LandingSateliteVideo.mp4" type="video/mp4" />
        </video>
      </div>

      <ProjectAbout
        AboutProject={
          "<span>DynaSys,</span> is dedicated to building intelligent digital infrastructure that enables smart cities."
        }
        ProjectImg1={"./Images/Dynasys/Dynasys-page-image-1.webp"}
        AboutProjectHead={"About Project"}
        AboutProjectDetails={
          "DynaSys Networks is an innovative technology company focused on advancing Internet of Things (IoT), satellite communications, cybersecurity, and networking solutions. <br /> <br />The company is dedicated to building intelligent digital infrastructure that enables smart cities, industrial automation, and data-driven decision making."
        }
        ProjectFounded={"Founded:"}
        ProjectFoundedDate={"2023"}
        ProjectIndustry={"Industry"}
        ProjectIndustryName={"IoT"}
        ProjectScope={"Scope of Work"}
        ProjectScopeName={"Brand Dev"}
      />

      <ProjectTwoColumnWrapper
        TextCol1={"Problems"}
        TextCol2={
          "As a technology-driven company working in complex domains like IoT, satellite communications, and cybersecurity, DynaSys Networks required a digital platform capable of clearly explaining their advanced solutions to businesses, government organizations, and industry stakeholders. <br /><br /> Their online presence needed a structured way to present technical services, industry applications, and innovation initiatives."
        }
      />
      <ImageComp
        Src={"./Images/Dynasys/Dynasys-page-image-2.webp"}
        Width={"100%"}
      />

      <ProjectTwoColumnWrapper
        TextCol1={"Challenges"}
        TextCol2={
          "The primary challenge was creating a digital platform that translates technical solutions into engaging content. The website needed to present technical topics  in a way that is accessible to decision-makers while maintaining a professional brand identity."
        }
      />
      <OurSolutionSection
        SolutionDetails={
          "We structured the content to clearly communicate DynaSys Networks’ core capabilities in IoT, networking, satellite communications, and cybersecurity while highlighting their vision for technological innovation."
        }
        SolutionImage1={"./Images/Dynasys/Dynasys-page-image-3.webp"}
        Solution1={
          "<span>Technology & Solution Presentation:</span>  Designed dedicated sections to highlight DynaSys’ IoT infrastructure, smart solutions, and systems integration capabilities."
        }
        SolutionImage2={"./Images/Dynasys/Dynasys-page-image-4.webp"}
        Solution2={
          "<span>Social Media:</span>   Created engaging visuals and informative content to increase brand awareness, audience engagement, and industry credibility."
        }
        SolutionImage3={"./Images/Axion/Axion-page-image-5.webp"}
        Solution3={
          "<span>Website Development: </span> Developed a responsive and high-performance website designed to showcase DynaSys’ services, solutions, and projects. The site structure allows visitors to easily navigate through complex technical offerings and understand their practical applications."
        }
        SolutionImage4={"./Images/Axion/Axion-page-image-7.webp"}
      />
      
    </div>
  );
}
