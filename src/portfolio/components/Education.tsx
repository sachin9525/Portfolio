import React from "react";
import { GraduationCap, Calendar, Award, BookOpen } from "lucide-react";

export const Education: React.FC = () => {
  const educationList = [
    {
      period: "2020 — 2024",
      degree: "Bachelor of Technology in Computer Science & Engineering",
      institution: "Institute of Technology & Sciences",
      grade: "CGPA: 8.8 / 10",
      description: "Focused on Data Structures, Algorithms, Distributed Computing, Database Management Systems, and Artificial Intelligence.",
      highlights: [
        "Specialization in Full Stack Web Engineering & Cloud Systems",
        "Lead Developer in University Coding & Innovation Club",
        "Winner of Regional Smart India Hackathon"
      ]
    },
    {
      period: "2023",
      degree: "Advanced Full-Stack & System Design Certification",
      institution: "Meta / Coursera Professional Specialization",
      grade: "Honors Certification",
      description: "Comprehensive mastery in React architecture, asynchronous state patterns, microservices, and database indexing.",
      highlights: [
        "Production-level CI/CD pipelines & Dockerization",
        "High-throughput caching architectures using Redis"
      ]
    }
  ];

  return (
    <section id="education" className="py-20 px-4 relative">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/25 bg-indigo-50 dark:bg-indigo-950/30 text-indigo-600 dark:text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <GraduationCap size={13} />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-white mb-3">
            Education & <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-500 dark:from-indigo-400 dark:via-purple-400 dark:to-blue-400 bg-clip-text text-transparent">Credentials</span>
          </h2>
          <p className="max-w-xl text-zinc-600 dark:text-zinc-400 text-sm sm:text-base">
            Formal foundations in computer science and continuous professional certifications.
          </p>
        </div>

        {/* Education List Cards */}
        <div className="space-y-6">
          {educationList.map((edu, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-zinc-900/70 border border-zinc-200/80 dark:border-zinc-800 shadow-sm hover:border-indigo-400 dark:hover:border-indigo-600/50 transition-all"
            >
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-indigo-50 dark:bg-indigo-950/80 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800">
                  <Calendar size={12} />
                  <span>{edu.period}</span>
                </span>
                <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 font-mono">
                  {edu.grade}
                </span>
              </div>

              <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-1">
                {edu.degree}
              </h3>
              <h4 className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 mb-3">
                {edu.institution}
              </h4>

              <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4">
                {edu.description}
              </p>

              <div className="space-y-1.5 pt-3 border-t border-zinc-100 dark:border-zinc-800">
                {edu.highlights.map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs sm:text-sm text-zinc-700 dark:text-zinc-300">
                    <Award size={14} className="text-indigo-500 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
