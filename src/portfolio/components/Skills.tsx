import React, { useState } from "react";
import { skillsData } from "../data/portfolioData";
import { Cpu, Layout, Server, Bot, Sparkles, Check } from "lucide-react";

export const Skills: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case "Layout":
        return <Layout size={18} />;
      case "Server":
        return <Server size={18} />;
      case "Bot":
        return <Bot size={18} />;
      default:
        return <Cpu size={18} />;
    }
  };

  return (
    <section id="skills" className="portfolio-gutter py-20 relative">
      <div className="portfolio-container">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-50 dark:bg-cyan-950/30 text-cyan-700 dark:text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Cpu size={13} />
            <span>Tech Stack & Arsenal</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-3">
            Core <span className="bg-gradient-to-r from-cyan-600 via-sky-600 to-indigo-600 dark:from-cyan-400 dark:via-sky-300 dark:to-indigo-400 bg-clip-text text-transparent">Competencies</span>
          </h2>
          <p className="max-w-xl text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            Modern technologies and tools I utilize to turn complex challenges into seamless digital solutions.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex justify-center mb-10 overflow-x-auto pb-2 scrollbar-none">
          <div className="inline-flex p-1.5 rounded-2xl bg-slate-200/80 dark:bg-slate-900/80 border border-slate-300/80 dark:border-slate-700/50 backdrop-blur-md">
            {skillsData.map((cat, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 whitespace-nowrap ${
                  activeTab === index
                    ? "bg-gradient-to-r from-indigo-600 to-cyan-600 text-white shadow-md shadow-indigo-600/30"
                    : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-300/50 dark:hover:bg-slate-800/60"
                }`}
              >
                {getCategoryIcon(cat.icon)}
                <span>{cat.category}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Selected Category Details & Skill Cards */}
        <div className="portfolio-container">
          <div className="mb-6 text-center">
            <p className="text-slate-600 dark:text-slate-400 text-sm italic">
              {skillsData[activeTab].description}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {skillsData[activeTab].skills.map((skill, index) => (
              <div
                key={index}
                className={`p-4 rounded-2xl border transition-all duration-200 group ${
                  skill.highlight
                    ? "bg-white dark:bg-slate-900/70 border-indigo-200 dark:border-indigo-500/40 hover:border-cyan-500/60 shadow-md shadow-slate-100 dark:shadow-indigo-950/20"
                    : "bg-white/80 dark:bg-slate-900/40 border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 shadow-sm"
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    {skill.highlight && (
                      <Sparkles size={14} className="text-cyan-600 dark:text-cyan-400 group-hover:rotate-12 transition-transform" />
                    )}
                    <span className="font-semibold text-sm sm:text-base text-slate-800 dark:text-slate-100 group-hover:text-indigo-600 dark:group-hover:text-cyan-300 transition-colors">
                      {skill.name}
                    </span>
                  </div>
                  <span className="text-xs font-mono font-semibold text-slate-500 dark:text-slate-400 group-hover:text-slate-700 dark:group-hover:text-slate-200">
                    {skill.level}%
                  </span>
                </div>

                {/* Animated progress track */}
                <div className="w-full h-1.5 rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all duration-700 ease-out ${
                      skill.highlight
                        ? "bg-gradient-to-r from-indigo-500 via-cyan-500 to-emerald-400"
                        : "bg-slate-400 dark:bg-slate-600 group-hover:bg-cyan-500"
                    }`}
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Quick tech icon cloud pills */}
          <div className="mt-12 p-6 rounded-2xl glass-panel border border-slate-200/90 dark:border-slate-700/40 bg-white/70 dark:bg-slate-900/40 text-center">
            <h4 className="text-xs uppercase tracking-widest text-slate-500 dark:text-slate-400 font-mono mb-4 font-semibold">
              All Technologies & Frameworks at a Glance
            </h4>
            <div className="flex flex-wrap items-center justify-center gap-2">
              {[
                "React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js", "FastAPI",
                "Python", "PostgreSQL", "MongoDB", "Redis", "Docker", "AWS", "GraphQL",
                "LangChain", "OpenAI", "Git", "Figma", "Prisma", "Zustand", "Vite"
              ].map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-full text-xs font-medium bg-slate-100 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/50 text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-cyan-300 hover:border-indigo-300 dark:hover:border-cyan-500/40 transition-colors shadow-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
