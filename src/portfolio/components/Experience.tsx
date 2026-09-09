import React from "react";
import { experienceData } from "../data/portfolioData";
import { Briefcase, Calendar, MapPin, CheckCircle2 } from "lucide-react";

export const Experience: React.FC = () => {
  return (
    <section id="career" className="py-20 px-4 relative">
      <div className="max-w-5xl mx-auto">

        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-50 dark:bg-indigo-950/30 text-indigo-600 dark:text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Briefcase size={13} />
            <span>Career Journey</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-3">
            Experience & <span className="bg-gradient-to-r from-indigo-600 via-cyan-600 to-sky-600 dark:from-indigo-400 dark:via-cyan-300 dark:to-sky-400 bg-clip-text text-transparent">Milestones</span>
          </h2>
          <p className="max-w-xl text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            My professional journey building scalable systems and impactful products.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative pl-6 sm:pl-8 border-l-2 border-indigo-400/40 dark:border-indigo-500/30 space-y-12">
          {experienceData.map((exp, index) => (
            <div key={index} className="relative group">
              
              {/* Glowing Node on Timeline */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 flex items-center justify-center w-8 h-8 rounded-full bg-white dark:bg-slate-900 border-2 border-indigo-500 text-indigo-600 dark:text-indigo-400 group-hover:scale-110 group-hover:border-cyan-500 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-all duration-200 shadow-md shadow-indigo-500/20">
                <Briefcase size={14} />
              </div>

              {/* Card Content */}
              <div className="p-6 sm:p-7 rounded-3xl glass-panel border border-slate-200/90 dark:border-slate-800 bg-white/90 dark:bg-slate-900/60 hover:border-indigo-400 dark:hover:border-indigo-500/40 shadow-lg shadow-slate-200/40 dark:shadow-none transition-all duration-300">
                
                {/* Meta details */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-indigo-50 dark:bg-indigo-950/80 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-700/50">
                    <Calendar size={12} />
                    <span>{exp.period}</span>
                  </span>
                  <span className="inline-flex items-center gap-1 text-xs text-slate-500 dark:text-slate-400">
                    <MapPin size={12} />
                    <span>{exp.location}</span>
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-cyan-300 transition-colors">
                  {exp.role}
                </h3>
                <h4 className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 mb-3">
                  {exp.company}
                </h4>

                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                  {exp.description}
                </p>

                {/* Achievements */}
                {exp.achievements && exp.achievements.length > 0 && (
                  <div className="space-y-1.5 mb-4">
                    {exp.achievements.map((ach, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                        <CheckCircle2 size={15} className="text-cyan-600 dark:text-cyan-400 shrink-0 mt-0.5" />
                        <span>{ach}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Tech stack used */}
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-200 dark:border-slate-800/80">
                  {exp.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-0.5 rounded-lg text-[11px] font-mono bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
