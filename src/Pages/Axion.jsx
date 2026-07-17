import React from "react";
import ProjectHeroSection from "../Components/ProjectHeroSection/ProjectHeroSection";
import ProjectAbout from "../Components/ProjectAbout/ProjectAbout";
import ProjectTwoColumnWrapper from "../Components/ProjectTwoColumnWrapper/ProjectTwoColumnWrapper";
import ImageComp from "../Components/ImageComp/ImageComp";
import OurSolutionSection from "../Components/OurSolutionSection/OurSolutionSection";
import SeoHelmet from "../Components/SeoHelmet/SeoHelmet";
import MoreProjectHeading from "../Components/MoreProjectHeading/MoreProjectHeading";
import MoreProjectsSlider from "../NewComponents/ProjectSlider";

export default function Axion() {
  return (
    <div className="ProjectPage">
      <SeoHelmet
        title="AXION lubricants Project | Qrypton"
        description="Explore how Qrypton built Axion's digital brand and user experience. A case study in clean, performance-driven design for a technology-forward company — from inception to perfection."
        path="/axion"
        image="/Images/Axion/axion-1.webp"
        type="article"
        imageAlt="AXION project by Qrypton"
      />
      <ProjectHeroSection
        TextDetail={
          "<span>AXION</span> delivers high quality lubricants for better performance."
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
          <source src=" ./Videos/Axion.mp4" type="video/mp4" />
        </video>
      </div>

      <ProjectAbout
        AboutProject={
          "<span>AXION </span>  is a lubricant solutions company offering over 100 quality products designed to improve performance and protection across automotive and industrial applications."
        }
        ProjectImg1={"./Images/Axion/Axion-page-image-2.webp"}
        AboutProjectHead={"About Project"}
        AboutProjectDetails={
          "AXION portfolio includes engine oils, industrial oils, greases, and specialized lubricant products tailored to diverse operational needs.<br /><br />Qrypton collaborated with Axon Lubricants to enhance their brand communication and online presence by creating a modern, organized, and performance-focused website that effectively showcases their extensive product range and technical capabilities."
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
          "AXION operates in a global market where customers compare technical specifications, performance categories, and product reliability before making purchase decisions. Their existing digital presence needed a clearer way to present product categories and detailed performance information to users in a visually intuitive way."
        }
      />
      <ImageComp
        Src={"./Images/Axion/Axion-page-image-3.webp"}
        Width={"100%"}
      />

      <ProjectTwoColumnWrapper
        TextCol1={"Challenges"}
        TextCol2={
          "The key challenge was designing a digital platform that organizes complex lubricant product data, such as engine oils, industrial oils, greases, and specialized fluids, into a user-friendly interface that engineers, fleet managers, and automotive professionals could easily understand and evaluate. We also needed to ensure the design reflected the quality and breadth of Axon’s offerings against competitive industry expectations."
        }
      />
      <OurSolutionSection
        SolutionDetails={
          "We implemented clear product categories like automotive oils, industrial lubricants, greases, specialized products on the website so visitors can quickly browse and compare options."
        }
        SolutionImage1={"./Images/Axion/Axion-page-image-4.webp"}
        Solution1={
          "<span>Brand Marketing Strategy:</span> Crafted content that positions Axon Lubricants as a reliable and performance-driven lubricant provider, helping users understand product value and engineering benefits."
        }
        SolutionImage2={"./Images/Axion/Axion-page-image-6.webp"}
        Solution2={
          "<span>Visual & UI Design:</span> Applied a clean, professional visual style aligned with the technical credibility of industrial and automotive lubricant markets, enhancing trust and usability across devices."
        }
        SolutionImage3={"./Images/Axion/Axion-page-image-5.webp"}
        Solution3={
          "<span>Website Development: </span> Built a responsive, high-performance website with intuitive navigation and product detail pages that highlight technical specifications, benefits, and use cases."
        }
        SolutionImage4={"./Images/Axion/Axion-page-image-7.webp"}
      />
      

      {/* PROJECTS SECTIONS  */}
                  <div id="projects">
                    <MoreProjectHeading />
                    <MoreProjectsSlider excludeLinks={["/axion"]} />
                  </div>


    </div>
  );
}
