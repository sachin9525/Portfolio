import React, { useState, useEffect } from "react";
import { Moon, Sun, Menu, X, Sparkles, Send } from "lucide-react";

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (val: boolean | ((prev: boolean) => boolean)) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ darkMode, setDarkMode }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4 sm:pt-6 transition-all duration-300">
      <nav
        className={`w-full max-w-6xl transition-all duration-300 rounded-2xl px-5 py-3 flex items-center justify-between ${
          scrolled
            ? "glass-panel shadow-lg shadow-slate-200/50 dark:shadow-indigo-950/20 border border-slate-200/80 dark:border-slate-700/40 bg-white/85 dark:bg-slate-950/80 backdrop-blur-xl"
            : "bg-transparent border border-transparent"
        }`}
      >
        {/* Brand / Logo */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="relative flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-600 to-cyan-500 text-white font-bold text-lg shadow-lg shadow-indigo-500/25 group-hover:scale-105 transition-transform">
            S
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-400 border-2 border-white dark:border-slate-950 rounded-full animate-pulse" />
          </div>
          <div className="flex flex-col">
            <span className="text-base font-bold tracking-tight text-slate-800 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-cyan-300 transition-colors">
              Sachin<span className="text-cyan-600 dark:text-cyan-400">.dev</span>
            </span>
            <span className="text-[10px] uppercase font-mono tracking-widest text-slate-500 dark:text-slate-400 -mt-0.5">
              Full Stack • AI
            </span>
          </div>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-1 bg-slate-100/90 dark:bg-slate-900/60 p-1.5 rounded-full border border-slate-200/80 dark:border-slate-700/30 backdrop-blur-md">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-4 py-1.5 text-xs font-semibold text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-white rounded-full hover:bg-slate-200/70 dark:hover:bg-slate-800/80 transition-all duration-200"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Right CTA & Controls */}
        <div className="flex items-center gap-2.5">
          {/* Theme Toggle */}
          <button
            onClick={() => setDarkMode((prev) => !prev)}
            aria-label="Toggle theme"
            className="p-2 rounded-xl border border-slate-200 dark:border-slate-700/50 bg-white dark:bg-slate-800/50 text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 hover:border-cyan-400/40 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all duration-200 shadow-sm"
          >
            {darkMode ? <Sun size={17} className="text-amber-400" /> : <Moon size={17} className="text-indigo-600" />}
          </button>

          {/* Hire Me Button */}
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-xl bg-gradient-to-r from-indigo-600 via-indigo-500 to-cyan-500 text-white shadow-lg shadow-indigo-600/25 hover:shadow-cyan-500/30 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 border border-indigo-400/30"
          >
            <Sparkles size={14} className="animate-spin" style={{ animationDuration: "4s" }} />
            <span>Get in Touch</span>
          </a>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
            className="md:hidden p-2 rounded-xl border border-slate-200 dark:border-slate-700/50 bg-white dark:bg-slate-800/50 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
          >
            {mobileMenuOpen ? <X size={19} /> : <Menu size={19} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-20 left-4 right-4 p-4 rounded-2xl glass-panel bg-white/95 dark:bg-slate-900/95 border border-slate-200 dark:border-slate-700/60 shadow-2xl animate-in fade-in slide-in-from-top-4 duration-200 flex flex-col gap-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-2.5 text-sm font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800/80 rounded-xl transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2 border-t border-slate-200 dark:border-slate-800 flex justify-center">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-2.5 text-xs font-semibold rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-500 text-white"
            >
              <Send size={14} />
              <span>Let's Connect</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
