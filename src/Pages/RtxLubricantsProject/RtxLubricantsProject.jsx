import ProjectHeroSection from "../../Components/ProjectHeroSection/ProjectHeroSection";
import ProjectAbout from "../../Components/ProjectAbout/ProjectAbout";
import ProjectTwoColumnWrapper from "../../Components/ProjectTwoColumnWrapper/ProjectTwoColumnWrapper";
import ImageComp from "../../Components/ImageComp/ImageComp";
import OurSolutionSection from "../../Components/OurSolutionSection/OurSolutionSection";
import SeoHelmet from "../../Components/SeoHelmet/SeoHelmet";
import MoreProjectHeading from "../../Components/MoreProjectHeading/MoreProjectHeading";
import MoreProjectsSlider from "../../NewComponents/ProjectSlider";

export default function RtxLubricantsProject() {
  return (
    <div className="ProjectPage">
      <SeoHelmet
        title="RTX Lubricants Project | Qrypton"
        description="See how Qrypton shaped the brand identity and digital design for RTX Lubricants — a German-formulated automotive and industrial lubricants brand based in Pakistan."
        path="/rtxlubricants"
        image="/Images/Rtx/RtxWebImage.webp"
        type="article"
        imageAlt="RTX Lubes project by Qrypton"
      />
      <ProjectHeroSection
        TextDetail={
          "<span>RTX, </span> brand of automotive <br> and industrial lubricants"
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
          <source src=" ./Videos/RTX webreel.mp4" type="video/mp4" />
        </video>
      </div>

      <ProjectAbout
        AboutProject={
          "<span>RTX, </span> is renowned for providing top-notch lubricant products for automobiles, spanning from petrol to diesel engines."
        }
        ProjectImg1={"./Images/Rtx/RtxProducts.webp"}
        AboutProjectHead={"About Project"}
        AboutProjectDetails={
          "RTX Lubes, based in Karachi, offers high-quality lubricants for both petrol and diesel engines.<br><br>Qrypton undertook a comprehensive branding and product design initiative for RTX Lubes, establishing a distinct brand identity and creating visually appealing product designs that align with their premium standards "
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
          "The lubricant industry is highly competitive, and RTX needed a unique and memorable brand identity. <br><br>Additionally, the challenge was to design product packaging that not only looked aesthetically pleasing but also communicated the brand's values and quality."
        }
      />
      <ImageComp Src={"./Images/Rtx/RtxWebImage.webp"} Width={"100%"} />

      <ProjectTwoColumnWrapper
        TextCol1={"Challenges"}
        TextCol2={
          "Creating a standout brand identity in a crowded market and ensuring that the product design reflects the quality and innovation of Hagan Lubricants were the primary challenges."
        }
      />
      <OurSolutionSection
        SolutionDetails={
          "The Qrypton team meticulously crafted the logo, branding, and brand guidelines, incorporating thoughtful planning and inspiration. Mood boards were utilized to ensure that the design elements aligned with RTX's vision."
        }
        SolutionImage1={"./Images/Rtx/SolutionImage1.webp"}
        Solution1={
          "<span>Product Design:</span>The Qrypton team meticulously crafted the logo, branding, and brand guidelines, incorporating thoughtful planning and inspiration. Mood boards were utilized to ensure that the design elements aligned with RTX's vision."
        }
        SolutionImage2={"./Images/Rtx/SolutionImage3.webp"}
        Solution2={
          "<span>Social Media: </span>The Qrypton team meticulously crafted the logo, branding, and brand guidelines, incorporating thoughtful planning and inspiration. Mood boards were utilized to ensure that the design elements aligned with RTX's vision."
        }
        SolutionImage3={"./Images/Rtx/SolutionImage2.webp"}
        Solution3={
          "<span>Website Development:  </span>The Qrypton team meticulously crafted the logo, branding, and brand guidelines, incorporating thoughtful planning and inspiration. Mood boards were utilized to ensure that the design elements aligned with RTX's vision."
        }
        SolutionImage4={"./Images/Rtx/SolutionImage4.webp"}
      />
      <ImageComp Src={"./Images/Rtx/SolutionImage5.webp"} Width={"100%"} />

      {/* PROJECTS SECTIONS  */}
      <div id="projects" >
        <MoreProjectHeading />
        <MoreProjectsSlider excludeLinks={["/rtxlubricants"]} />
      </div>
    </div>
  );
}
