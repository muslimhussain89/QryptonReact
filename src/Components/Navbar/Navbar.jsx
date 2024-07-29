import React from "react";
import MyButton from "../Button/Button";
import "./Navbar.css";
import ContactUs from "../ContactUs/ContactUs";
import { useState } from "react";
import { useEffect } from "react";




export default function Navbar() {

  const [touchButtonClicked, setTouchButtonClicked] = useState(false);
  const [activeContact, setActiveContact] = useState(false);
  const [isScrollDisabled, setIsScrollDisabled] = useState(false);




  const handleContactToggle = () => {
    setIsScrollDisabled(!isScrollDisabled);
    setActiveContact(!activeContact);
    setTouchButtonClicked(true);
    setActiveButton(false);

  };
  
    if (isScrollDisabled) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }


  return (
    <div className="QryptonNavbar">
      <div className="QryptonLogo">
        <MyButton Src={"./Images/Qrypton-logo.png"} RouteLink={"/"} />
      </div>
      <div className="QryptonNavbarLinks">
          <MyButton
            text={"services"}
            RouteLink={"/services"}
            />
            <MyButton
            text={"contact us"}
            handleClick={handleContactToggle}
            />

      </div>
      {/* CONTACT US SECTION */}
      <div
        className={`ContactUsWrapper ${
          touchButtonClicked &&
          (activeContact ? "activeContact" : "inActiveContact")
        }`}
      >
        <ContactUs />
        <div className="ContactCloseButton">
          <MyButton
          Src={"./Images/DesktopMenuCloseButton.svg"}
            TextTransform={"uppercase"}
            FontWeight={"400"}
            Color={"black"}
            ImgWidth={"4rem"}
            handleClick={handleContactToggle}
          />
        </div>
      </div>
      </div>
  );
}
