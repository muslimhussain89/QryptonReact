import React from "react";
import ProjectHeroSection from "../Components/ProjectHeroSection/ProjectHeroSection";
import ProjectAbout from "../Components/ProjectAbout/ProjectAbout";
import ProjectTwoColumnWrapper from "../Components/ProjectTwoColumnWrapper/ProjectTwoColumnWrapper";
import ImageComp from "../Components/ImageComp/ImageComp";
import OurSolutionSection from "../Components/OurSolutionSection/OurSolutionSection";
import SeoHelmet from "../Components/SeoHelmet/SeoHelmet";

export default function Pureoil() {
  return (
    <div className="ProjectPage">
      <SeoHelmet
        title="Pure Oil Project | Qrypton"
        description="See how Qrypton elevated PureOil's brand identity and visual communication. A case study in crafting a premium, trust-driven design system for a Pakistani lubricants brand."
        path="/pureoil"
        image="/Images/PureOil/pure-oil-1.webp"
        type="article"
        imageAlt="Pure Oil project by Qrypton"
      />
      <ProjectHeroSection
        TextDetail={
          "<span>Pureoil</span> Delivering high performance automotive oils."
        }
        Tab1={"branding"}
        Tab2={"UI/UX"}
        Tab3={"Product Design"}
        Tab4={"Social Media Marketing"}
        Tab5={"Development"}
      />

      {/* PROJECT VIDEO
      <div className="ProjectVideo">
        <video autoPlay muted loop preload="auto">
          <source src=" ./Videos/Carmetra.mp4" type="video/mp4" />
        </video>
      </div> */}

      <ProjectAbout
        AboutProject={
          "<span>PureOil </span>  represents a modern and professional online presence for a company dedicated to providing high-quality lubricant solution"
        }
        ProjectImg1={"./Images/PureOil/pure-oil-page-image-1.webp"}
        AboutProjectHead={"About Project"}
        AboutProjectDetails={
          "PureOil focuses on delivering superior lubricant products designed for automotive, industrial, and specialty applications, backed by industry-standard engineering and precision formulation.<br /><br />Qrypton was engaged to transform Pure Oil’s digital identity by creating a compelling website that effectively communicates their product range, technical expertise, and value to both professional and industrial customers."
        }
        ProjectFounded={"Founded:"}
        ProjectFoundedDate={"2024"}
        ProjectIndustry={"Industry"}
        ProjectIndustryName={"Lubricants"}
        ProjectScope={"Scope of Work"}
        ProjectScopeName={"Brand Dev"}
      />

      <ProjectTwoColumnWrapper
        TextCol1={"Problems"}
        TextCol2={
          "PureOil operates in a highly competitive market where customers often compare product performance, specifications, and brand reliability before making decisions.<br /><br />The existing online presence lacked clear structure, detailed product information, and engaging visuals to convey the technical strength and quality of their lubricant portfolio."
        }
      />
      <ImageComp
        Src={"./Images/PureOil/pure-oil-page-image-2.webp"}
        Width={"100%"}
      />

      <ProjectTwoColumnWrapper
        TextCol1={"Challenges"}
        TextCol2={
          "The key challenge was designing a digital platform that not only looks professional but also organizes complex product information in a clear and user-friendly way. It was important to reflect Pure Oil’s commitment to excellence and precision in every aspect of the site’s design and layout"
        }
      />
      <OurSolutionSection
        SolutionDetails={
          "We developed a structured content strategy that clearly communicates Pure Oil’s mission, product strengths, and technical advantages to professionals and end-users alike."
        }
        SolutionImage1={"./Images/PureOil/pure-oil-page-image-3.webp"}
        Solution1={
          "<span> Visual Design: </span>Implemented clean, dynamic visuals and layouts that elevate the look and feel of product and service pages, reinforcing the premium quality of the brand and its automotive solutions."
        }
        SolutionImage2={"./Images/PureOil/pure-oil-page-image-5.webp"}
        Solution2={
          "<span>Content & Engagement:</span>  Created strategic onsite content that helps users understand Carmetra’s offerings, benefits, and expertise, encouraging longer visits and stronger brand affinity."
        }
        SolutionImage3={"./Images/PureOil/pure-oil-page-image-4.webp"}
        Solution3={
          "<span>Website Development: </span> Built a responsive, high-performance website that clearly presents Carmetra’s product lines, services, and value propositions. The site structure was carefully crafted to guide users through offerings with ease and clarity."
        }
        SolutionImage4={"./Images/PureOil/pure-oil-page-image-6.webp"}
      />
    </div>
  );
}
