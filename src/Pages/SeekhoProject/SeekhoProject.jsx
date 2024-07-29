import React from "react";
import ProjectHeroSection from "../../Components/ProjectHeroSection/ProjectHeroSection";
import ProjectAbout from "../../Components/ProjectAbout/ProjectAbout";
import ProjectTwoColumnWrapper from "../../Components/ProjectTwoColumnWrapper/ProjectTwoColumnWrapper";
import ImageComp from "../../Components/ImageComp/ImageComp";
import ProjectSolution from "../../Components/ProjectSolution/ProjectSolution";
import OurSolutionSection from "../../Components/OurSolutionSection/OurSolutionSection";

export default function SeekhoProject() {
  return (
    <div className="ProjectPage">
      <ProjectHeroSection
        TextDetail={"<span>SEEKHO,</span>A world-renowned leader in the driver education and training "}
        Tab1={"branding"}
        Tab2={"UI/UX"}
        Tab3={"Product Design"}
        Tab4={"Social Media Marketing"}
        Tab5={"Development"}
      />

      {/* PROJECT VIDEO */}
      <div className="ProjectVideo">
        <video autoPlay muted loop preload="auto">
          <source src=" ./Videos/seekho.mp4" type="video/mp4" />
        </video>
      </div>

      <ProjectAbout
        AboutProject={
          "<span>SEEKHO , </span> based in Karachi offers a comprehensive range of programs designed to enhance road safety and driving skills."
        }
        ProjectImg1={"./Images/Seekho/SeekhoWeb.png"}
        AboutProjectHead={"About Project"}
        AboutProjectDetails={
          "Seekho is a world-renowned leader in the driving education and training industry. Seekho ensures drivers are well-prepared to handle various driving conditions and emergency situations, contributing to safer roads for everyone.<br><br>Qrypton undertook a comprehensive branding and product design initiative for Seekho, establishing a distinct brand identity and creating visually appealing educational materials that align with their premium standards."
        }
        ProjectFounded={"Founded:"}
        ProjectFoundedDate={"2020"}
        ProjectIndustry={"Industry"}
        ProjectIndustryName={"Driving School"}
        ProjectScope={"Scope of Work"}
        ProjectScopeName={"Brand Dev"}
      />

      <ProjectTwoColumnWrapper
        TextCol1={"Problems"}
        TextCol2={
          "The driver education market is fiercely competitive, and Seekho required a distinctive and impactful brand identity. Furthermore, the challenge was to create training materials that not only appeared visually appealing but also conveyed the brand's values and high standards."
        }
      />
      <ImageComp Src={"./Images/Seekho/SeekhoWeb.png"} Width={"100%"} />

      <ProjectTwoColumnWrapper
        TextCol1={"Challenges"}
        TextCol2={
          "Creating a brand identity that stands out in a crowded market and ensuring that the training materials reflect the quality and innovation of Seekho."
        }
      />
      <OurSolutionSection
        SolutionDetails={
          "The Qrypton team diligently crafted the logo, branding, and brand guidelines, incorporating thoughtful planning and inspiration. Mood boards were utilized to ensure that the design elements aligned with Al-Ali's vision."
        }
        SolutionImage1={"./Images/Seekho/SeekhoSolution1.png"}
        Solution1={
          "<span>Product Design: </span>Created innovative and visually appealing product designs that align with the brand’s vision and standards."
        }
        SolutionImage2={"./Images/Seekho/SeekhoSolution2.png"}
        Solution2={
          "<span>Social Media: </span>Developed and executed a strategic social media campaign to increase brand visibility, engagement, and loyalty across various platforms"
        }
        SolutionImage3={"./Images/Seekho/SeekhoSolution3.png"}
        Solution3={
          "<span>Website Development:  </span>Built a responsive, high-performance website that showcases the brand effectively and provides an excellent user experience."
        }
        SolutionImage4={"./Images/Seekho/SeekhoSolution4.png"}
      />
      <ImageComp
        Src={"./Images/Seekho/SeekhoSolution5.png"}
        Width={"100%"}
      />
    </div>
  );
}
