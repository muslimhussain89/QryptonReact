import React from "react";
import ImageComp from "../ImageComp/ImageComp";
import Text from "../Text/Text";
import "./ProjectAbout.css";
import ProjectTwoColumnWrapper from "../ProjectTwoColumnWrapper/ProjectTwoColumnWrapper";

export default function ProjectAbout({
  AboutProject,
  ProjectImg1,
  AboutProjectHead,
  AboutProjectDetails,
  ProjectFounded,
  ProjectFoundedDate,
  ProjectIndustry,
  ProjectIndustryName,
  ProjectScope,
  ProjectScopeName,
  ImageWidth,
  ProjectTopImage,
  TopImageWidth
}) {
  return (
    <div className="ProjectAbout">

    {
      ProjectTopImage && (
        <div className="ProjectAboutImages">
          <ImageComp Src={ProjectTopImage} Width={TopImageWidth}  />
        </div>
      )
    }

      <div className="ProjectAboutHeadingText" data-aos="fade-up">
        <Text text={AboutProject} FontSize={"4rem"} />
      </div>
      {
        ProjectImg1 && (
          <div className="ProjectAboutImages">
        <ImageComp Src={ProjectImg1}  Width={ImageWidth} />
      </div>
        )
      }
      
      <ProjectTwoColumnWrapper TextCol1={AboutProjectHead} TextCol2={AboutProjectDetails} />

      <div className="ProjectBioData">
        <div className="PeojectFoundedWrapper">
          <Text text={ProjectFounded} />
          <Text text={ProjectFoundedDate} />
        </div>
        <div className="ProjectIndustry">
          <Text text={ProjectIndustry} />
          <Text text={ProjectIndustryName} />
        </div>
        <div className="ProjectScope">
          <Text text={ProjectScope} />
          <Text text={ProjectScopeName} />
        </div>
      </div>
    </div>
  );
}
