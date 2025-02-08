import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import projectImage from "./assets/Screenshot 2024-11-30 at 10.10.05 am.png";
import myResume from "./assets/rajeshrai.pdf";
import SkillsSection from "./components/SkillsSection";
import SummarySection from "./components/SummarySection";
import Herosection from "./components/Herosection";
import RecentWork from "./components/RecentWork";
import AboutMe from "./components/AboutMe";
import GetInTouch from "./components/GetInTouch";

import GoToTop from "./components/GoToTop";
import DarkMode from "./components/DarkMode";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Route, Router, Routes } from "react-router";
import HeroSectionPage from "./pages/HeroSectionPage";
import SkillsPage from "./pages/SkillsPage";
import MyRecentWork from "./pages/MyRecentWork";
import AboutMePage from "./pages/AboutMePage";
import Contact from "./pages/Contact";
import SummaryPage from "./pages/summaryPage";

function App() {
  return (
    <>
      <DarkMode />

      <div className="wrapper-container">
        <Navbar />
        <Routes>
          <Route path="/" element={<HeroSectionPage />} />
          <Route path="/skills" element={<SkillsPage />} />
          <Route path="/recentworks" element={<MyRecentWork />} />
          <Route path="/aboutme" element={<AboutMePage />} />

          <Route path="/contact" element={<Contact />} />
          <Route path="/summary" element={<SummaryPage />} />
        </Routes>
        <SummarySection />

        <Footer />
        <GoToTop />
      </div>
    </>
  );
}

export default App;
