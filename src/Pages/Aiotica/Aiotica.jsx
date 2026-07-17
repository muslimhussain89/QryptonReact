import React from "react";
import ProjectHeroSection from "../../Components/ProjectHeroSection/ProjectHeroSection";
import ProjectAbout from "../../Components/ProjectAbout/ProjectAbout";
import ProjectTwoColumnWrapper from "../../Components/ProjectTwoColumnWrapper/ProjectTwoColumnWrapper";
import ImageComp from "../../Components/ImageComp/ImageComp";
import OurSolutionSection from "../../Components/OurSolutionSection/OurSolutionSection";
import SeoHelmet from "../../Components/SeoHelmet/SeoHelmet";
import MoreProjectsSlider from "../../NewComponents/ProjectSlider";
import BlurOnScroll from "../../NewComponents/BlurOnScroll";
import MoreProjectHeading from "../../Components/MoreProjectHeading/MoreProjectHeading";

export default function Aiotica() {
  return (
    <div className="ProjectPage">
      <SeoHelmet
        title="Aiotica Project | Qrypton"
        description=" AIOTICA is a Toronto-based Industrial IoT company serving mid-sized enterprises."
        path="/teknuclei"
        image="/Images/Teknuclei/teknucli.webp"
        type="article"
        imageAlt="Aiotica project by Qrypton"
      />
      <ProjectHeroSection
        TextDetail={
          "<span>AIOTICA</span> is a Toronto-based Industrial IoT company serving mid-sized enterprises."
        }
        Tab1={"branding"}
        Tab2={"UI/UX"}
        Tab3={"Development"}
      />

      {/* PROJECT VIDEO */}
      <div className="ProjectVideo AioticaVideo">
        <video autoPlay muted loop preload="auto">
          <source src=" ./Videos/aiotica-header-video.mp4" type="video/mp4" />
        </video>
      </div>

      <ProjectAbout
        AboutProject={
          "<span>AIOTICA</span> platform helps manufacturers, logistics operators, and food & beverage producers predict disruptions, prevent inefficiencies, and drive sustainable growth through real-time data and AI-driven insights."
        }
        ProjectImg1={"./Images/Aiotica/aiotica-page-image-1.webp"}
        ImageWidth={"100%"}
        AboutProjectHead={"About Project"}
        AboutProjectDetails={
          " Qrypton was brought in to design and develop a website that could communicate complex Industrial IoT technology in plain language, build trust with enterprise decision-makers, and convert site visits into consultation bookings — all while positioning AIOTICA as the GTA's leading IIoT partner."
        }
        ProjectFounded={"Founded:"}
        ProjectFoundedDate={"2025"}
        ProjectIndustry={"Industry"}
        ProjectIndustryName={"IT solutions"}
        ProjectScope={"Scope of Work"}
        ProjectScopeName={"Brand Dev"}
      />

      <ProjectTwoColumnWrapper
        TextCol1={"Problems"}
        TextCol2={
          "AIOTICA had a powerful product and measurable results, but no digital presence strong enough to reflect it. The IIoT space is highly technical and often overwhelming to a non-specialist audience — plant managers, operations leads, and business owners who understand their pain points but not necessarily the technology solving them. The existing gap between what AIOTICA could deliver and how they were presenting themselves online was costing them credibility and leads."
        }
      />
      <ImageComp
        Src={"./Images/Aiotica/aiotica-page-image-2.webp"}
        Width={"100%"}
      />

      <ProjectTwoColumnWrapper
        TextCol1={"Challenges"}
        TextCol2={
          "The core challenge was translating a deeply technical, data-heavy offering into a website that felt both authoritative and approachable. Too technical and you lose the business decision-maker. Too simplified and you lose the credibility needed to sell enterprise IoT contracts.  "
        }
      />
      <OurSolutionSection
        SolutionDetails={
          "We designed a website that does the sales work AIOTICA's team was doing manually — educating, qualifying, and converting. By leading with outcomes over features, structuring the experience around real buyer concerns."
        }
        SolutionImage1={"./Images/Aiotica/aiotica-page-image-3.webp"}
        Solution1={
          "<span>Website Development:</span>  The website was architected around the buyer's journey — from awareness to action. The hero section leads with outcome language"
        }
        // SolutionImage2={"./Images/Aiotica/aiotica-page-image-4.webp"}
        // Solution2={
        //   "<span>Brand Identity & Design: </span> AIOTICA's visual identity was built around their core proposition: Predict. Prevent. Prosper. — a clean, confident three-word framework that anchors everything. The design language leans into precision and intelligence: deep blues, sharp typography, and data-forward layouts that signal expertise without alienating a non-technical viewer."
        // }
        SolutionImage3={"./Images/Aiotica/aiotica-page-image-4.webp"}
        Solution3={
          "<span>Brand Identity & Design:  </span> AIOTICA's visual identity was built around their core proposition: Predict. Prevent. Prosper. — a clean, confident three-word framework that anchors everything. The design language leans into precision and intelligence: deep blues, sharp typography, and data-forward layouts that signal expertise without alienating a non-technical viewer."
        }
        // SolutionImage4={"./Images/Teknuclei/teknuclei-image-6.webp"}
      />
      {/* <ImageComp
        Src={"./Images/Teknuclei/teknuclei-image-7.webp"}
        Width={"100%"}
      /> */}

      {/* PROJECTS SECTIONS  */}
      <div id="projects" >
        <MoreProjectHeading />
        <MoreProjectsSlider excludeLinks={["/aiotica"]} />
      </div>
    </div>
  );
}
