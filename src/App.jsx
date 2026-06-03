import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
// import Navbar from "./NewComponents/Navbar";
import Landing from "./Pages/Landing/Landing";
// import Footer from "./Components/Footer/Footer";
import Footer from "./NewComponents/Footer";
import ServicesPage from "./Pages/ServicesPage/ServicesPage";
import HaganLubricantsProject from "./Pages/HaganLubricantsProject/HaganLubricantsProject";
import RtxLubricantsProject from "./Pages/RtxLubricantsProject/RtxLubricantsProject";
import AlAliOilProject from "./Pages/AlAliOilProject/AlAliOilProject";
import SeekhoProject from "./Pages/SeekhoProject/SeekhoProject";
import PeplProject from "./Pages/PeplProject/PeplProject";
import React from "react";

// GOOGLE ANALYTICS
import ReactGA from "react-ga4";
import LandingNew from "./Pages/Landing/LandingNew";
import Navbar from "./Components/Navbar/Navbar";
import Teknuclei from "./Pages/Teknuclei/Teknuclei";
import Axion from "./Pages/Axion";
import Carmetra from "./Pages/Carmetra";
import Pureoil from "./Pages/Pureoil";
import Dynasys from "./Pages/Dynasys";
import CustomCursor from "./NewComponents/CustomCursur";

// Google Analytics tracking hook
function usePageTracking() {
  const location = useLocation();

  useEffect(() => {
    ReactGA.initialize('G-211WPCFWSW'); // Use your Measurement ID
    ReactGA.send({ hitType: "pageview", page: location.pathname }); // Track page changes
  }, [location]);
}

function App() {


  const [touchButtonClicked, setTouchButtonClicked] = useState(false);
  const [activeContact, setActiveContact] = useState(false);
  const [isScrollDisabled, setIsScrollDisabled] = useState(false);
  const handleContactToggle = () => {
    setIsScrollDisabled(!isScrollDisabled);
    setActiveContact(!activeContact);
    setTouchButtonClicked(true);
    // setActiveButton(false); // wherever this lives
  };


  return (
    <BrowserRouter>

      {/* Call the tracking hook inside the BrowserRouter */}
      <PageTracker />
      <CustomCursor />
      <Navbar  handleContactToggle={handleContactToggle}
        touchButtonClicked={touchButtonClicked}
        activeContact={activeContact}
        isScrollDisabled={isScrollDisabled} />
      <Routes>
        {/* <Route path="/" element={<Landing />} /> */}
        <Route path="/" element={<LandingNew handleContactToggle={handleContactToggle} />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/haganlubricants" element={<HaganLubricantsProject />} />
        <Route path="/rtxlubricants" element={<RtxLubricantsProject />} />
        <Route path="/alalioil" element={<AlAliOilProject />} />
        <Route path="/seekho" element={<SeekhoProject />} />
        <Route path="/pel" element={<PeplProject />} />
        <Route path="/teknuclei" element={<Teknuclei />} />
        <Route path="/axion" element={<Axion />} />
        <Route path="/carmetra" element={<Carmetra />} />
        <Route path="/pureoil" element={<Pureoil />} />
        <Route path="/dynasys" element={<Dynasys />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

function PageTracker() {
  usePageTracking(); // This is where the tracking logic is handled
  return null; // This component doesn't render anything, just tracks
}

export default App;
