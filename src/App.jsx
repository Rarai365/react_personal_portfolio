import "./App.css";

import SummarySection from "./components/BlogsSection";

import GoToTop from "./components/GoToTop";
import DarkMode from "./components/DarkMode";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router";
import HeroSectionPage from "./pages/HeroSectionPage";
import SkillsPage from "./pages/SkillsPage";
import MyRecentWork from "./pages/MyRecentWork";
import AboutMePage from "./pages/AboutMePage";
import Contact from "./pages/Contact";
import SummaryPage from "./pages/SummaryPage";
import Herosection from "./components/Herosection";
import SkillsSection from "./components/SkillsSection";
import RecentWork from "./components/RecentWork";
import AboutMe from "./components/AboutMe";

function App() {
  return (
    <>
      <DarkMode />

      <div className="wrapper">
        <Navbar />

        <Routes>
          <Route path="/" element={<HeroSectionPage />} />
          <Route path="/aboutme" element={<AboutMePage />} />

          <Route path="/recentworks" element={<MyRecentWork />} />

          <Route path="/summary" element={<SummaryPage />} />
        </Routes>

        <SkillsSection />
        <SummarySection />
        {/* <RecentWork /> */}

        <Footer />
        <GoToTop />
      </div>
    </>
  );
}

export default App;
