import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Landing from "./Pages/Landing/Landing";
import Footer from "./Components/Footer/Footer";
import ServicesPage from "./Pages/ServicesPage/ServicesPage";
import HaganLubricantsProject from "./Pages/HaganLubricantsProject/HaganLubricantsProject";
import RtxLubricantsProject from "./Pages/RtxLubricantsProject/RtxLubricantsProject";
import AlAliOilProject from "./Pages/AlAliOilProject/AlAliOilProject";
import SeekhoProject from "./Pages/SeekhoProject/SeekhoProject";
import PeplProject from "./Pages/PeplProject/PeplProject";

// GOOGLE ANALYTICS
import ReactGA from "react-ga4";

// Google Analytics tracking hook
function usePageTracking() {
  const location = useLocation();

  useEffect(() => {
    ReactGA.initialize('G-211WPCFWSW'); // Use your Measurement ID
    ReactGA.send({ hitType: "pageview", page: location.pathname }); // Track page changes
  }, [location]);
}

function App() {
  return (
    <BrowserRouter>
      {/* Call the tracking hook inside the BrowserRouter */}
      <PageTracker />
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/haganlubricants" element={<HaganLubricantsProject />} />
        <Route path="/rtxlubricants" element={<RtxLubricantsProject />} />
        <Route path="/alalioil" element={<AlAliOilProject />} />
        <Route path="/seekho" element={<SeekhoProject />} />
        <Route path="/pel" element={<PeplProject />} />
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
