import React, { useState } from "react";
import { projectsData, Project } from "../data/portfolioData";
import { ExternalLink, Github, Sparkles, Layers } from "lucide-react";

export const Projects: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>("All");

  const categories = ["All", "Full Stack", "AI & ML", "Frontend", "DevOps"];

  const filteredProjects = selectedFilter === "All"
    ? projectsData
    : projectsData.filter((p) => p.category === selectedFilter);

  return (
    <section id="projects" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">

        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-50 dark:bg-indigo-950/30 text-indigo-600 dark:text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Layers size={13} />
            <span>Featured Portfolio</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-3">
            Handcrafted <span className="bg-gradient-to-r from-indigo-600 via-cyan-600 to-emerald-600 dark:from-indigo-400 dark:via-cyan-300 dark:to-emerald-400 bg-clip-text text-transparent">Creations</span>
          </h2>
          <p className="max-w-xl text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            A curated selection of web applications, AI platforms, and open-source software engineered for real-world impact.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex justify-center mb-12 overflow-x-auto pb-2">
          <div className="inline-flex items-center gap-1.5 p-1.5 rounded-2xl bg-slate-200/80 dark:bg-slate-900/80 border border-slate-300/80 dark:border-slate-800 backdrop-blur-md">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedFilter(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 whitespace-nowrap ${
                  selectedFilter === cat
                    ? "bg-gradient-to-r from-indigo-600 to-cyan-600 text-white shadow-md shadow-indigo-600/30"
                    : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-300/50 dark:hover:bg-slate-800"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative flex flex-col rounded-3xl glass-panel border border-slate-200/90 dark:border-slate-800/80 bg-white dark:bg-slate-900/50 hover:border-indigo-400 dark:hover:border-cyan-500/40 shadow-lg shadow-slate-200/40 dark:shadow-none transition-all duration-300 overflow-hidden"
            >
              {/* Project Image Banner */}
              <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-slate-950">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                />
                
                {/* Gradient overlay to ensure badges pop */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

                {/* Badges on image */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded-full text-[11px] font-medium bg-slate-900/85 border border-slate-700/60 text-cyan-300 backdrop-blur-md">
                    {project.category}
                  </span>
                  {project.featured && (
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-medium bg-indigo-950/85 border border-indigo-600/50 text-indigo-200 backdrop-blur-md">
                      <Sparkles size={11} className="text-amber-400" />
                      <span>Featured</span>
                    </span>
                  )}
                </div>

                {/* Stats badge if present */}
                {project.stats && (
                  <div className="absolute bottom-3 left-3">
                    <span className="px-2.5 py-0.5 rounded-lg text-[10px] font-mono font-semibold bg-emerald-950/85 border border-emerald-500/40 text-emerald-300 backdrop-blur-md">
                      {project.stats}
                    </span>
                  </div>
                )}
              </div>

              {/* Project Content Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-cyan-300 transition-colors mb-2">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-3 mb-4">
                    {project.description}
                  </p>
                </div>

                <div>
                  {/* Tech stack tags */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 rounded-md text-[11px] font-mono bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700/40"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Actions (Demo & GitHub) */}
                  <div className="flex items-center gap-3 pt-3 border-t border-slate-200 dark:border-slate-800">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-indigo-50 dark:bg-indigo-600/20 hover:bg-indigo-600 text-indigo-700 dark:text-indigo-300 hover:text-white text-xs font-semibold border border-indigo-200 dark:border-indigo-500/30 transition-all duration-200"
                    >
                      <ExternalLink size={13} />
                      <span>Live Demo</span>
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub Repository"
                      className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-slate-700/60 transition-colors"
                    >
                      <Github size={15} />
                    </a>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
