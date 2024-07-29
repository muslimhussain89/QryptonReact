import React from "react";
import ProjectHeroSection from "../../Components/ProjectHeroSection/ProjectHeroSection";
import "./HaganLubricantsProject.css";
import ProjectAbout from "../../Components/ProjectAbout/ProjectAbout";
import ProjectTwoColumnWrapper from "../../Components/ProjectTwoColumnWrapper/ProjectTwoColumnWrapper";
import ImageComp from "../../Components/ImageComp/ImageComp";
import OurSolutionSection from "../../Components/OurSolutionSection/OurSolutionSection";
export default function HaganLubricantsProject() {
  return (
    <div className="ProjectPage">
      <ProjectHeroSection
        TextDetail={"<span>HAGAN,</span> Lubricants for Modern Day Vechile’s"}
        Tab1={"branding"}
        Tab2={"UI/UX"}
        Tab3={"Product Design"}
        Tab4={"Social Media Marketing"}
        Tab5={"Development"}
      />

      {/* PROJECT VIDEO */}
      <div className="ProjectVideo">
        <video autoPlay muted loop preload="auto">
          <source src=" ./Videos/HAGAN.mp4" type="video/mp4" />
        </video>
      </div>

      <ProjectAbout
        AboutProject={
          "<span>HAGAN,</span> A pioneer lubricant brand, has had a profound impact on the global <span>lubricant industry.</span>"
        }
        ProjectImg1={"./Images/HaganLubricants/heavy-HP-7-20W50 1.png"}
        AboutProjectHead={"About Project"}
        AboutProjectDetails={
          "HAGAN, a  lubricant company base in Dubai UAE, embarked on a journey of transformation, committed to redefine industry standards.<br><br> HAGAN joined forces with Qrypton for an all-encompassing project that would revolutionize their identity from the ground up involving complete branding, web design, product design, and Social Media  Marketing. "
        }
        ProjectFounded={"Founded:"}
        ProjectFoundedDate={"2020"}
        ProjectIndustry={"Industry"}
        ProjectIndustryName={"Lubricants"}
        ProjectScope={"Scope of Work"}
        ProjectScopeName={"Brand Dev"}
      />

      <ProjectTwoColumnWrapper
        TextCol1={"Problems"}
        TextCol2={
          "Entering the competitive lubricant market, Hagan Lubricants needed a distinctive brand identity that could make a lasting impression. <br><br>Additionally, the challenge extended to designing a product packaging that not only looked appealing but also effectively communicated the brand's values and product quality."
        }
      />
      <ImageComp
        Src={"./Images/HaganLubricants/HaganWebImage.png"}
        Width={"100%"}
      />

      <ProjectTwoColumnWrapper
        TextCol1={"Challenges"}
        TextCol2={
          "Creating a standout brand identity in a crowded market and ensuring that the product design reflects the quality and innovation of Hagan Lubricants were the primary challenges."
        }
      />
      <OurSolutionSection
        SolutionDetails={
          "The Qrypton team meticulously crafted the logo, branding, and brand guidelines, incorporating thoughtful planning and inspiration. Mood boards were utilized to ensure that the design elements aligned with RTX's vision."}
          SolutionImage1={"./Images/OurSolutions/haganProductDesign.png"}
          Solution1={"<span>Product Design:</span>The Qrypton team meticulously crafted the logo, branding, and brand guidelines, incorporating thoughtful planning and inspiration. Mood boards were utilized to ensure that the design elements aligned with RTX's vision."}
        
          SolutionImage2={"./Images/OurSolutions/haganSocialMedia.png"}
          Solution2={"<span>Social Media: </span>The Qrypton team meticulously crafted the logo, branding, and brand guidelines, incorporating thoughtful planning and inspiration. Mood boards were utilized to ensure that the design elements aligned with RTX's vision."}
         
         SolutionImage3={"./Images/OurSolutions/haganWebDevelopment.png"}
        Solution3={"<span>Website Development:  </span>The Qrypton team meticulously crafted the logo, branding, and brand guidelines, incorporating thoughtful planning and inspiration. Mood boards were utilized to ensure that the design elements aligned with RTX's vision."}

        SolutionImage4={"./Images/OurSolutions/haganCricket.png"}
      />

      <ImageComp
        Src={"./Images/HaganLubricants/haganWebsite.png"}
        Width={"100%"}
      />
    </div>
  );
}
