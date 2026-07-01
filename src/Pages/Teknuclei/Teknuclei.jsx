import React from "react";
import ProjectHeroSection from "../../Components/ProjectHeroSection/ProjectHeroSection";
import ProjectAbout from "../../Components/ProjectAbout/ProjectAbout";
import ProjectTwoColumnWrapper from "../../Components/ProjectTwoColumnWrapper/ProjectTwoColumnWrapper";
import ImageComp from "../../Components/ImageComp/ImageComp";
import OurSolutionSection from "../../Components/OurSolutionSection/OurSolutionSection";
import SeoHelmet from "../../Components/SeoHelmet/SeoHelmet";

export default function Teknuclei() {
  return (
    <div className="ProjectPage">
      <SeoHelmet
        title="TekNuclei Project | Qrypton"
        description="See how Qrypton built TekNuclei's brand identity and digital presence. A design case study for an Islamabad-based engineering and automation company — from inception to perfection."
        path="/teknuclei"
        image="/Images/Teknuclei/teknucli.webp"
        type="article"
        imageAlt="TekNuclei project by Qrypton"
      />
      <ProjectHeroSection
        TextDetail={
          "<span>TekNuclei,</span> A Engineering firm providing excellence in automation, design, and fabrication solutions."
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
          <source src=" ./Videos/Teknuclei.mp4" type="video/mp4" />
        </video>
      </div>

      <ProjectAbout
        AboutProject={
          "<span>TekNuclei, </span>  based in Islamabad offers a comprehensive range of services for IoT Embedded systems & Metal fabrications."
        }
        ProjectImg1={"./Images/Teknuclei/teknuclei-image-2.webp"}
        AboutProjectHead={"About Project"}
        AboutProjectDetails={
          "TekNuclei is an engineering and technology solutions company specializing in industrial automation, mechanical fabrication, and innovative product development. TekNuclei focuses on delivering reliable, precision-driven solutions that support modern industries in achieving efficiency, safety, and sustainable growth. <br/> Qrypton collaborated with TekNuclei to strengthen their brand presence and create a professional digital identity that reflects their technical expertise and forward-thinking approach."
        }
        ProjectFounded={"Founded:"}
        ProjectFoundedDate={"2026"}
        ProjectIndustry={"Industry"}
        ProjectIndustryName={"Engineering Solutions"}
        ProjectScope={"Scope of Work"}
        ProjectScopeName={"Brand Dev"}
      />

      <ProjectTwoColumnWrapper
        TextCol1={"Problems"}
        TextCol2={
          "The industrial engineering and automation sector is highly competitive, and TekNuclei required a strong brand image to stand out. Additionally, they needed a clear and structured way to communicate their services, capabilities, and technical solutions to potential clients through an impactful online platform."
        }
      />
      <ImageComp
        Src={"./Images/Teknuclei/teknuclei-image-1.webp"}
        Width={"100%"}
      />

      <ProjectTwoColumnWrapper
        TextCol1={"Challenges"}
        TextCol2={
          "Building a modern and trustworthy brand identity that represents TekNuclei’s engineering excellence, while also designing a digital experience that effectively showcases their automation, fabrication, and product development services."
        }
      />
      <OurSolutionSection
        SolutionDetails={
          "The Qrypton team delivered a complete branding and digital development solution tailored to TekNuclei’s industrial vision"
        }
        SolutionImage1={"./Images/Teknuclei/teknuclei-image-3.webp"}
        Solution1={
          "<span>Website Development:</span> Designed and built a responsive, high-performance website that clearly presents their services, projects, and technical expertise."
        }
        SolutionImage2={"./Images/Teknuclei/teknuclei-image-4.webp"}
        Solution2={
          "<span>Digital Presence Enhancement: </span> Created a strong foundation for TekNuclei’s online visibility, helping them position themselves as a trusted industrial solutions provider."
        }
        SolutionImage3={"./Images/Teknuclei/teknuclei-image-5.webp"}
        Solution3={
          "<span>Brand Identity & Design:  </span> Developed a clean, professional visual identity with branding elements that align with TekNuclei’s innovative engineering focus."
        }
        SolutionImage4={"./Images/Teknuclei/teknuclei-image-6.webp"}
      />
      <ImageComp
        Src={"./Images/Teknuclei/teknuclei-image-7.webp"}
        Width={"100%"}
      />
    </div>
  );
}
