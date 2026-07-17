import ProjectHeroSection from "../../Components/ProjectHeroSection/ProjectHeroSection";
import ProjectAbout from "../../Components/ProjectAbout/ProjectAbout";
import ProjectTwoColumnWrapper from "../../Components/ProjectTwoColumnWrapper/ProjectTwoColumnWrapper";
import ImageComp from "../../Components/ImageComp/ImageComp";
import OurSolutionSection from "../../Components/OurSolutionSection/OurSolutionSection";
import SeoHelmet from "../../Components/SeoHelmet/SeoHelmet";
import MoreProjectHeading from "../../Components/MoreProjectHeading/MoreProjectHeading";
import MoreProjectsSlider from "../../NewComponents/ProjectSlider";

export default function PeplProject() {
  return (
    <div className="ProjectPage">
      <SeoHelmet
        title="Petroleum Exploration Project | Qrypton"
        description="Explore Qrypton's design work for PEL — Pakistan's pioneer electrical goods manufacturer since 1956. A case study in branding and digital design for a leading home appliances brand."
        path="/pel"
        image="/Images/pel/pelWeb.webp"
        type="article"
        imageAlt="PEL project by Qrypton"
      />
      <ProjectHeroSection
        TextDetail={
          "<span>PEL,</span>   A subsidiary of the Shahzad International Group of Companies"
        }
        Tab1={"branding"}
        Tab2={"UI/UX"}
        Tab3={"Product Design"}
        Tab4={"Social Media Marketing"}
        Tab5={"Development"}
      />

      {/* PROJECT VIDEO */}
      {/* <div className="ProjectVideo">
        <video autoPlay muted loop preload="auto">
          <source src=" ./Videos/Al Ali-video.mp4" type="video/mp4" />
        </video>
      </div> */}

      <ProjectAbout
        AboutProject={
          "<span>PEL ,</span> Core business include exploration and production of hydrocarbons. "
        }
        ProjectImg1={"./Images/pel/pelProducts.webp"}
        ImageWidth={"100%"}
        AboutProjectHead={"About Project"}
        AboutProjectDetails={
          "PEL is engaged in diverse business pursuits including power generation, mineral development, gold exploration and prospecting, procurement services, oil and gas field services, petrochemical plants, security services, geographical information systems, and travel advisory services.<br><br>Qrypton undertook a comprehensive branding and product design initiative for PEL, establishing a distinct brand identity and creating visually appealing product designs that align with their premium standards."
        }
        ProjectFounded={"Founded:"}
        ProjectFoundedDate={"2020"}
        ProjectIndustry={"Industry"}
        ProjectIndustryName={"Petroleum Exploration"}
        ProjectScope={"Scope of Work"}
        ProjectScopeName={"Brand Dev"}
      />

      <ProjectTwoColumnWrapper
        TextCol1={"Problems"}
        TextCol2={
          "The exploration and production market is fiercely competitive, and PEL required a distinctive and impactful brand identity. Additionally, the challenge was to create product packaging that not only appeared visually appealing but also conveyed the brand's values and high standards."
        }
      />
      <ImageComp Src={"./Images/pel/pelWeb.webp"} Width={"100%"} />

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
        SolutionImage1={"./Images/pel/PelSolution1.webp"}
        Solution1={
          "<span>Product Design:</span>Created innovative and visually appealing product designs that align with the brand’s vision and standards."
        }
        SolutionImage2={"./Images/pel/PelSolution2.webp"}
        Solution2={
          "<span>Social Media: </span>Developed and executed a strategic social media campaign to increase brand visibility, engagement, and loyalty across various platforms"
        }
        SolutionImage3={"./Images/pel/PelSolution3.webp"}
        Solution3={
          "<span>Website Development:  </span>Built a responsive, high-performance website that showcases the brand effectively and provides an excellent user experience."
        }
        SolutionImage4={"./Images/pel/PelSolution4.webp"}
      />
      <ImageComp Src={"./Images/pel/PelSolution5.webp"} Width={"100%"} />

      {/* PROJECTS SECTIONS  */}
      <div id="projects" >
        <MoreProjectHeading />
        <MoreProjectsSlider excludeLinks={["/pel"]} />
      </div>
    </div>
  );
}
