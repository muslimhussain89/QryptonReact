import React, { useEffect, useState } from "react"; // Added useState
import MyButton from "../Button/Button";
import "./Navbar.css";
import ContactUs from "../ContactUs/ContactUs";
import { HashLink } from "react-router-hash-link";

export default function Navbar({
  handleContactToggle,
  touchButtonClicked,
  activeContact,
  isScrollDisabled,
}) {
  const [scrollDir, setScrollDir] = useState("at-top");

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      
      if (scrollY <= 0) {
        setScrollDir("at-top");
      } else if (scrollY > 800) {
        setScrollDir("sticky");
      } else {
        setScrollDir("hidden");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Determine class based on state
  const getNavClass = () => {
    if (scrollDir === "at-top") return "is-at-top";
    if (scrollDir === "sticky") return "sticky-nav";
    return ""; // hidden (transform -100% applies)
  };

  return (
    <div 
      id="home" 
      className={`QryptonNavbar px-6 py-5 ${getNavClass()}`}
    >
      {/* ... rest of your code stays the same ... */}
      <div className="QryptonLogo">
        <MyButton text={"Qrypton"} FontWeight={"500"} RouteLink={"/"} FontSize={"3rem"} />
      </div>
      <div className="QryptonNavbarLinks">
        <MyButton text={"services"} RouteLink={"/services"} />
        <HashLink smooth to="/#pricing">pricing</HashLink>
        <MyButton text={"contact us"} handleClick={handleContactToggle} />
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
