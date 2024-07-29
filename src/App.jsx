import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Landing from './Pages/Landing/Landing'
import Footer from './Components/Footer/Footer'
import ServicesPage from './Pages/ServicesPage/ServicesPage';
import HaganLubricantsProject from './Pages/HaganLubricantsProject/HaganLubricantsProject';
import RtxLubricantsProject from './Pages/RtxLubricantsProject/RtxLubricantsProject';
import AlAliOilProject from './Pages/AlAliOilProject/AlAliOilProject';
import SeekhoProject from './Pages/SeekhoProject/SeekhoProject';
import PeplProject from './Pages/PeplProject/PeplProject';

function App() {

  return (
    <>
    <BrowserRouter>
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
    </>
  )
}

export default App
