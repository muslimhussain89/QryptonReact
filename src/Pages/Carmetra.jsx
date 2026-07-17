import React from "react";
import ProjectHeroSection from "../Components/ProjectHeroSection/ProjectHeroSection";
import ProjectAbout from "../Components/ProjectAbout/ProjectAbout";
import ProjectTwoColumnWrapper from "../Components/ProjectTwoColumnWrapper/ProjectTwoColumnWrapper";
import ImageComp from "../Components/ImageComp/ImageComp";
import OurSolutionSection from "../Components/OurSolutionSection/OurSolutionSection";
import SeoHelmet from "../Components/SeoHelmet/SeoHelmet";
import MoreProjectHeading from "../Components/MoreProjectHeading/MoreProjectHeading";
import MoreProjectsSlider from "../NewComponents/ProjectSlider";

export default function Carmetra() {
  return (
    <div className="ProjectPage">
      <SeoHelmet
        title="Carmetra Project | Qrypton"
        description="Discover how Qrypton designed the brand identity and visual system for Carmetra. A design case study showcasing Qrypton's expertise in automotive branding and digital presence."
        path="/carmetra"
        image="/Images/Carmetra/carmetra-1.webp"
        type="article"
        imageAlt="Carmetra project by Qrypton"
      />
      <ProjectHeroSection
        TextDetail={"<span>Carmetra</span> is a  automotive solutions brand."}
        Tab1={"branding"}
        Tab2={"UI/UX"}
        Tab3={"Product Design"}
        Tab4={"Social Media Marketing"}
        Tab5={"Development"}
      />

      {/* PROJECT VIDEO */}
      <div className="ProjectVideo">
        <video autoPlay muted loop preload="auto">
          <source src=" ./Videos/Carmetra.mp4" type="video/mp4" />
        </video>
      </div>

      <ProjectAbout
        AboutProject={
          "<span>CARMETRA </span>  is a automotive solutions brand focused on  premium accessories, services, and customized automotive experiences"
        }
        ProjectImg1={"./Images/Carmetra/carmetra-page-image-1.webp"}
        AboutProjectHead={"About Project"}
        AboutProjectDetails={
          "Carmetra is an automotive solutions brand focused on customized automotive experiences. With a commitment to quality and innovation, Carmetra aims to elevate how automotive enthusiasts and everyday drivers interact with and upgrade their vehicles.<br /><br />Qrypton collaborated with Carmetra to revitalize their brand identity and digital presence, creating a strategic online platform that showcases their offerings, engages visitors, and strengthens their position in a competitive automotive lifestyle market."
        }
        ProjectFounded={"Founded:"}
        ProjectFoundedDate={"2025"}
        ProjectIndustry={"Industry"}
        ProjectIndustryName={"Lubricants"}
        ProjectScope={"Scope of Work"}
        ProjectScopeName={"Brand Dev"}
      />

      <ProjectTwoColumnWrapper
        TextCol1={"Problems"}
        TextCol2={
          "The automotive accessories and services market is highly competitive, with customers comparing products, quality, and brand reputation before making purchasing decisions. <br /><br />Carmetra needed a compelling digital presence that clearly communicated its brand values, product offerings, and service excellence in an engaging and user-friendly way."
        }
      />
      <ImageComp
        Src={"./Images/Carmetra/carmetra-page-image-2.webp"}
        Width={"100%"}
      />

      <ProjectTwoColumnWrapper
        TextCol1={"Challenges"}
        TextCol2={
          "The main challenges were to design a distinctive brand identity that reflects Carmetra’s innovation and automotive passion, and to develop a digital platform that effectively organizes diverse content — from product showcases to service details — while engaging users visually and functionally."
        }
      />
      <OurSolutionSection
        SolutionDetails={
          "We collaborated closely with the Carmetra team to develop a refined brand direction, including visual elements and messaging that align with the company’s mission and resonate with automotive enthusiasts."
        }
        SolutionImage1={"./Images/Carmetra/carmetra-page-image-3.webp"}
        Solution1={
          "<span> Visual Design: </span>Implemented clean, dynamic visuals and layouts that elevate the look and feel of product and service pages, reinforcing the premium quality of the brand and its automotive solutions."
        }
        SolutionImage2={"./Images/Carmetra/carmetra-page-image-6.webp"}
        Solution2={
          "<span>Content & Engagement:</span>  Created strategic onsite content that helps users understand Carmetra’s offerings, benefits, and expertise, encouraging longer visits and stronger brand affinity."
        }
        SolutionImage3={"./Images/Carmetra/carmetra-page-image-4.webp"}
        Solution3={
          "<span>Website Development: </span> Built a responsive, high-performance website that clearly presents Carmetra’s product lines, services, and value propositions. The site structure was carefully crafted to guide users through offerings with ease and clarity."
        }
        SolutionImage4={"./Images/Carmetra/carmetra-page-image-5.webp"}
      />

      {/* PROJECTS SECTIONS  */}
      <div id="projects" >
        <MoreProjectHeading />
        <MoreProjectsSlider excludeLinks={["/carmetra"]} />
      </div>
    </div>
  );
}
