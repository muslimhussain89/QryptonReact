import React from "react";
import Text from "../Text/Text";
import "./ProjectHeroSection.css";

export default function ProjectHeroSection({
  TextDetail,
  Tab1,
  Tab2,
  Tab3,
  Tab4,
  Tab5,
}) {
  return (
    <>
      <div className="ProjectHeroSection">
      <div className="ProjectHeroSectionText">
        <Text text={TextDetail} FontSize={"8rem"} Color={"#525252"} />
      </div>
      <div className="ProjectHeroSectionTabs">
        <Text text={Tab1} FontSize={"2.8rem"} Color={"#525252"} TextTransform={"capitalize"} />
        <Text text={Tab2} FontSize={"2.8rem"} Color={"#525252"} TextTransform={"capitalize"}/>
        <Text text={Tab3} FontSize={"2.8rem"} Color={"#525252"} TextTransform={"capitalize"}/>
        {Tab4 ? <Text text={Tab4} FontSize={"2.8rem"} Color={"#525252"}  TextTransform={"capitalize"}/> : "" }
        {Tab5 ? <Text text={Tab5} FontSize={"2.8rem"} Color={"#525252"}  TextTransform={"capitalize"}/> : ""}
      </div>
      </div>
    </>
  );
}
