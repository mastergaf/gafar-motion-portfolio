import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SelectedProjects from "./components/SelectedProjects";
import AboutMe from "./components/AboutMe";
import Services from "./components/Services";
import CreativeProcess from "./components/CreativeProcess";
import ContactConsole from "./components/ContactConsole";
import FilmGrain from "./components/FilmGrain";
import ShowreelModal from "./components/ShowreelModal";
import { projects } from "./data/projects";

export default function App() {
  const [isReelOpen, setIsReelOpen] = useState(false);
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);
  const [activeSection, setActiveSection] = useState("showreel");
  
  // Manage light / dark theme with persistence and system defaults
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("portfolio-theme");
      if (saved === "light" || saved === "dark") {
        return saved;
      }
      // Check system color preference default
      if (window.matchMedia("(prefers-color-scheme: light)").matches) {
        return "light";
      }
    }
    return "dark"; // Default dark premium visual aesthetic
  });

  // Sync theme changes with DOM element and save state
  useEffect(() => {
    const root = document.documentElement;
    if (theme === "light") {
      root.classList.add("light");
      root.classList.remove("dark");
    } else {
      root.classList.add("dark");
      root.classList.remove("light");
    }
    localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  // Track scrolling to update active navbar menu item
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "showreel",
        "selected-projects",
        "about",
        "services",
        "process",
        "connect",
      ];
      const scrollPos = window.scrollY + window.innerHeight / 3;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleOpenReelWithProject = (projectIndex: number) => {
    setActiveProjectIndex(projectIndex);
    setIsReelOpen(true);
  };

  const handleOpenGeneralReel = () => {
    setActiveProjectIndex(0); // Default to the first spectacular project
    setIsReelOpen(true);
  };

  return (
    <div id="app-viewport-root" className="relative min-h-screen bg-dark-bg text-zinc-100 overflow-x-hidden selection:bg-gold-500 selection:text-black">
      {/* Organic Film Grain Overlay */}
      <FilmGrain />

      {/* Cinematic Header navigation */}
      <Navbar
        onOpenReel={handleOpenGeneralReel}
        activeSection={activeSection}
        theme={theme}
        onToggleTheme={toggleTheme}
      />

      {/* Immersive Main Views */}
      <main className="relative z-10">
        
        {/* Fullscreen Hero */}
        <Hero onOpenReel={handleOpenGeneralReel} />

        {/* Selected Projects Curated Gallery Showcase */}
        <SelectedProjects />

        {/* Premium Minimalist About Me Section */}
        <AboutMe />

        {/* Dynamic Client Services Grid */}
        <Services />

        {/* Creative Process Methodology Timeline */}
        <CreativeProcess />

        {/* Secured Client Direct Inquiry Connect Panel */}
        <ContactConsole />
        
      </main>

      {/* Fullscreen Showreel Playback Studio Console Modal */}
      <ShowreelModal
        isOpen={isReelOpen}
        onClose={() => setIsReelOpen(false)}
        projects={projects}
        initialProjectIndex={activeProjectIndex}
      />
    </div>
  );
}
