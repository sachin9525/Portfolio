import React from "react";
import { Home, User, Cpu, FolderGit2, Briefcase, Mail, Github } from "lucide-react";
import { personalInfo } from "../data/portfolioData";

export const FloatingDock: React.FC = () => {
  const dockItems = [
    { label: "Home", icon: <Home size={18} />, href: "#" },
    { label: "About", icon: <User size={18} />, href: "#about" },
    { label: "Skills", icon: <Cpu size={18} />, href: "#skills" },
    { label: "Projects", icon: <FolderGit2 size={18} />, href: "#projects" },
    { label: "Experience", icon: <Briefcase size={18} />, href: "#experience" },
    { label: "Contact", icon: <Mail size={18} />, href: "#contact" },
    { label: "GitHub", icon: <Github size={18} />, href: personalInfo.github, external: true },
  ];

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 hidden sm:flex items-center gap-2 px-3 py-2 rounded-2xl glass-panel bg-white/90 dark:bg-slate-950/85 border border-slate-200/90 dark:border-slate-700/50 shadow-xl shadow-slate-300/40 dark:shadow-indigo-950/30 backdrop-blur-2xl">
      {dockItems.map((item, idx) => (
        <a
          key={idx}
          href={item.href}
          target={item.external ? "_blank" : undefined}
          rel={item.external ? "noopener noreferrer" : undefined}
          title={item.label}
          className="relative group p-2.5 rounded-xl text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-cyan-300 hover:bg-slate-100 dark:hover:bg-slate-800/80 hover:scale-110 active:scale-95 transition-all duration-200 flex items-center justify-center"
        >
          {item.icon}

          {/* Floating Tooltip Label */}
          <span className="absolute -top-9 scale-0 group-hover:scale-100 transition-all duration-150 px-2.5 py-1 rounded-lg text-[10px] font-medium bg-slate-900 text-white dark:bg-slate-950 dark:border dark:border-slate-800 whitespace-nowrap shadow-lg">
            {item.label}
          </span>
        </a>
      ))}
    </div>
  );
};
