import React, { useState, useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Experience } from "./components/Experience";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { FloatingDock } from "./components/FloatingDock";

export const PortfolioApp: React.FC = () => {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("theme");
      if (saved) return saved === "dark";
      return window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
    return true;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
      root.classList.remove("light");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.add("light");
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <div className="relative min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100 transition-colors duration-300">
      {/* Ambient background blur blobs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 opacity-40 dark:opacity-40">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-300/30 dark:bg-indigo-600/20 rounded-full blur-[128px]" />
        <div className="absolute top-2/3 right-1/4 w-96 h-96 bg-cyan-300/30 dark:bg-cyan-600/20 rounded-full blur-[128px]" />
      </div>

      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Floating Navbar */}
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

        {/* Main Content Sections */}
        <main className="flex-1">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
        </main>

        {/* Footer */}
        <Footer />

        {/* Floating Dock Quick Access */}
        <FloatingDock />
      </div>
    </div>
  );
};
