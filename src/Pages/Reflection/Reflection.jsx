import React from "react";
import ProjectHeroSection from "../../Components/ProjectHeroSection/ProjectHeroSection";
import ProjectAbout from "../../Components/ProjectAbout/ProjectAbout";
import ProjectTwoColumnWrapper from "../../Components/ProjectTwoColumnWrapper/ProjectTwoColumnWrapper";
import ImageComp from "../../Components/ImageComp/ImageComp";
import OurSolutionSection from "../../Components/OurSolutionSection/OurSolutionSection";
import SeoHelmet from "../../Components/SeoHelmet/SeoHelmet";

export default function Reflection() {
  return (
    <div className="ProjectPage">
      <SeoHelmet
        title="Reflections Interior & Design | Qrypton"
        description="Reflections Interior & Design is an Islamabad-based design concept studio established in 2010"
        path="/teknuclei"
        image="/Images/Teknuclei/teknucli.webp"
        type="article"
        imageAlt="Reflections Interior & Design project by Qrypton"
      />
      <ProjectHeroSection
        TextDetail={
          "<span>Reflections Interior & Design</span>  is an Islamabad-based design concept studio established in 2010"
        }
        Tab1={"branding"}
        Tab2={"Product Design"}
        Tab3={"Catalogue design "}
      />

      {/* PROJECT VIDEO */}
      {/* <div className="ProjectVideo">
        <video autoPlay muted loop preload="auto">
          <source src=" ./Videos/Teknuclei.mp4" type="video/mp4" />
        </video>
      </div> */}

       <div className="ProjectAboutSectionParent">
        <ProjectAbout
        AboutProject={
          "<span>Reflections Interior & Design </span>   is an Islamabad-based design concept studio established in 2010, built on the philosophy of smart, sustainable materials and purposeful design."
        }
        ProjectImg1={"./Images/Reflections/refletions-page-image-1.webp"}
        AboutProjectHead={"About Project"}
        AboutProjectDetails={
          "With over 200 residential, commercial, and corporate projects delivered, Reflections needed a flagship catalogue that could speak to the elegance and breadth of their offering — from accent chairs and sofa sets to bespoke kitchens, entrance doors, and architectural ceilings — all under one cohesive brand voice. <br /><br />The deliverable was a full Interior & Design Guide: a visually rich, print-ready catalogue spanning 15+ product categories, designed to serve as both a client-facing sales tool and a brand statement."
        }
        ProjectFounded={"Founded:"}
        ProjectFoundedDate={"2026"}
        ProjectIndustry={"Industry"}
        ProjectIndustryName={"Furniture"}
        ProjectScope={"Scope of Work"}
        ProjectScopeName={"Brand Dev"}
      />
       </div> 
      

      <ProjectTwoColumnWrapper
        TextCol1={"Problems"}
        TextCol2={
          "Despite a deep portfolio and a premium product range, Reflections had no structured visual document to present to prospective clients. Walk-ins to their F-11 showroom or Rawalpindi office could see the quality in person — but there was nothing a client could take home, share with a spouse, or browse before committing to a consultation. The brand's sophistication wasn't translating beyond the showroom floor."
        }
      />
      <ImageComp
        Src={"./Images/Reflections/refletions-page-image-2.webp"}
        Width={"100%"}
      />

      <ProjectTwoColumnWrapper
        TextCol1={"Challenges"}
        TextCol2={
          "The catalogue needed to balance two very different design personalities living within the same brand — the ornate and the minimal. Reflections carries everything from the gold-carved Royal Chester Sofa to the clean-lined Valen office desk, from Baroque dining sets to handleless modular kitchens. Giving each category its own visual identity while maintaining a unified brand feel throughout was the central creative challenge. On top of that, 15+ categories had to be sequenced in a way that felt like a natural journey through a home — not a product dump."
        }
      />
      <OurSolutionSection
        SolutionDetails={
          "We designed a catalogue that opens like a space not a brochure. Each section was given its own tone and tagline rooted in the product's character "
        }
        SolutionImage1={"./Images/Reflections/refletions-page-image-3.webp"}
        Solution1={
          "<span>Catalogue design:</span> Typography, whitespace, and full-bleed photography were used throughout to let the products breathe. The result was a catalogue that doesn't just list furniture — it sells a way of living, and gives Reflections a premium leave-behind worthy of the spaces they create."
        }
        // SolutionImage2={"./Images/Reflections/refletions-page-image-4.webp"}
        // Solution2={
        //   "<span>Digital Presence Enhancement: </span> Created a strong foundation for TekNuclei’s online visibility, helping them position themselves as a trusted industrial solutions provider."
        // }
        SolutionImage3={"./Images/Reflections/refletions-page-image-5.webp"}
        Solution3={
          "<span>Brand Identity & Design:  </span> Developed a clean, professional visual identity with branding elements that align with TekNuclei’s innovative engineering focus."
        }
        // SolutionImage4={"./Images/Teknuclei/teknuclei-image-6.webp"}
      />
      {/* <ImageComp
        Src={"./Images/Teknuclei/teknuclei-image-7.webp"}
        Width={"100%"}
      /> */}
    </div>
  );
}
