import React from "react";
import ProjectHeroSection from "../../Components/ProjectHeroSection/ProjectHeroSection";
import ProjectAbout from "../../Components/ProjectAbout/ProjectAbout";
import ProjectTwoColumnWrapper from "../../Components/ProjectTwoColumnWrapper/ProjectTwoColumnWrapper";
import ImageComp from "../../Components/ImageComp/ImageComp";
import ProjectSolution from "../../Components/ProjectSolution/ProjectSolution";
import OurSolutionSection from "../../Components/OurSolutionSection/OurSolutionSection";

export default function AlAliOilProject() {
  return (
    <div className="ProjectPage">
      <ProjectHeroSection
        TextDetail={"<span>AL ALI,</span> A trusted choice of quality, healthy and sustainability in cooking oil"}
        Tab1={"branding"}
        Tab2={"UI/UX"}
        Tab3={"Product Design"}
        Tab4={"Social Media Marketing"}
        Tab5={"Development"}
      />

      {/* PROJECT VIDEO */}
      <div className="ProjectVideo">
        <video autoPlay muted loop preload="auto">
          <source src=" ./Videos/Al Ali-video.mp4" type="video/mp4" />
        </video>
      </div>

      <ProjectAbout
        AboutProject={
          "<span>Al- Ali , </span> based in UAE, offers high-quality cooking oils and committed to quality, health, and flavor."
        }
        ProjectImg1={"./Images/Rtx/RtxProducts.png"}
        AboutProjectHead={"About Project"}
        AboutProjectDetails={
          "Al-Ali,  offers high-quality cooking oils t hat are cholesterol-free and vitamin-rich. With a heritage of eight decades, Al-Ali is committed to quality, health, and flavor.<br><br>Qrypton undertook a comprehensive branding and product design initiative for Al-Ali, establishing a distinct brand identity and creating visually appealing product designs that align with their premium standards"
        }
        ProjectFounded={"Founded:"}
        ProjectFoundedDate={"2024"}
        ProjectIndustry={"Industry"}
        ProjectIndustryName={"Cooking Oil"}
        ProjectScope={"Scope of Work"}
        ProjectScopeName={"Brand Dev"}
      />

      <ProjectTwoColumnWrapper
        TextCol1={"Problems"}
        TextCol2={
          "The cooking oil industry is highly competitive, and Al-Ali needed a unique and memorable brand identity. Additionally, the challenge was to design product packaging that not only looked aesthetically pleasing but also communicated the brand's values and quality."
        }
      />
      <ImageComp Src={"./Images/AlAliOils/AliAliWeb.png"} Width={"100%"} />

      <ProjectTwoColumnWrapper
        TextCol1={"Challenges"}
        TextCol2={
          "Creating a brand identity that stands out in a crowded market and ensuring that the product design reflects the quality and innovation of Al-Ali Cooking Oil."
        }
      />
      <OurSolutionSection
        SolutionDetails={
          "The Qrypton team diligently crafted the logo, branding, and brand guidelines, incorporating thoughtful planning and inspiration. Mood boards were utilized to ensure that the design elements aligned with Al-Ali's vision."
        }
        SolutionImage1={"./Images/AlAliOils/AliAliSolution1.png"}
        Solution1={
          "<span>Product Design:</span>Created innovative and visually appealing product designs that align with the brand’s vision and standards."
        }
        SolutionImage2={"./Images/AlAliOils/AliAliSolution2.png"}
        Solution2={
          "<span>Social Media: </span>Developed and executed a strategic social media campaign to increase brand visibility, engagement, and loyalty across various platforms"
        }
        SolutionImage3={"./Images/AlAliOils/AliAliSolution3.png"}
        Solution3={
          "<span>Website Development:  </span>Built a responsive, high-performance website that showcases the brand effectively and provides an excellent user experience."
        }
        SolutionImage4={"./Images/AlAliOils/AliAliSolution4.png"}
      />
      <ImageComp
        Src={"./Images/Rtx/SolutionImage5.png"}
        Width={"100%"}
      />
    </div>
  );
}
