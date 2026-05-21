/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Highlights from "./components/Highlights";
import Menu from "./components/Menu";
import About from "./components/About";
import DailySpecial from "./components/DailySpecial";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const sections = ["hero", "wyróżniki", "menu", "danie-dnia", "kontakt"];
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120; // offset of navy
      
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Initial call to set active section
    handleScroll();
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#FAF6F0] text-[#1C1C1C] flex flex-col selection:bg-[#C0392B]/20 selection:text-[#C0392B]" id="app-viewport-root">
      
      {/* Fixed top Navbar */}
      <Navbar activeSection={activeSection} />

      {/* Main Sections */}
      <main className="flex-grow">
        
        {/* Section 1: Hero */}
        <Hero />

        {/* Section Divider 1: Thin border line */}
        <div className="h-[1px] bg-[#1C1C1C]/10 w-full" />

        {/* Section 2: Highlights of hand-cooking */}
        <Highlights />

        {/* Section Divider 2: Horizontal single wave line (SVG 6 of 6) */}
        <div className="bg-[#FAF6F0] py-6 flex justify-center text-[#C0392B]/25 select-none" id="horizontal-wave-line-divider">
          <svg
            viewBox="0 0 100 20"
            className="w-24 h-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            aria-hidden="true"
          >
            <path d="M10,10 C25,18 45,2 60,10 C75,18 85,2 90,10" />
          </svg>
        </div>

        {/* Section 3: O nas (Asymmetric prose + wheat icon) */}
        <About />

        {/* Section Divider 3: Full-width 5px red line used ONCE */}
        <div className="h-[5px] bg-[#C0392B] w-full" id="major-separator-line" />

        {/* Section 4: Traditional Menu (Dotted leaders, authentic design) */}
        <Menu />

        {/* Section 5: Daily Special (Full-width dark chalkboard styling, Caveat handwriting) */}
        <DailySpecial />

        {/* Section Divider 4: Simple spacing */}
        <div className="h-[2px] bg-[#1C1C1C]/15 w-[80%] mx-auto" />

        {/* Section 6: Contact & Interactive Iframe Google Maps & Facebook */}
        <Contact />

      </main>

      {/* Human-Designed Footer */}
      <Footer />

    </div>
  );
}
