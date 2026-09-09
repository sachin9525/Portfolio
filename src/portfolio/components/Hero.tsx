import React from "react";
import { personalInfo } from "../data/portfolioData";
import { HangingIdCard } from "@/components/ui/HangingIdCard";
import { ArrowRight, Download, Mail, Github, Linkedin, Twitter } from "lucide-react";

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[88vh] flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background dot grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1.5px,transparent_1.5px)] dark:bg-[radial-gradient(#27272a_1.5px,transparent_1.5px)] bg-[size:20px_20px] pointer-events-none opacity-70" />

      {/* Hero Container */}
      <div className="relative w-full max-w-5xl mx-auto z-10">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-8">

          {/* Left Column: Text */}
          <div className="flex-1 min-w-0 flex flex-col items-start text-left">

            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-emerald-500/25 bg-emerald-50/90 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400 text-xs font-semibold mb-6 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span>Available for work</span>
            </div>

            {/* Big Greeting */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-zinc-950 dark:text-white tracking-tight leading-none mb-1">
              Hi, I'm
            </h1>
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 dark:from-blue-400 dark:via-indigo-400 dark:to-purple-400 bg-clip-text text-transparent tracking-tight leading-tight mb-6 pb-1">
              {personalInfo.name}
            </h2>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-md mb-8">
              {personalInfo.bio}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 mb-8">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-zinc-900 hover:bg-zinc-800 dark:bg-white dark:hover:bg-zinc-100 text-white dark:text-zinc-950 font-semibold text-sm shadow-md transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Explore Projects</span>
                <ArrowRight size={15} />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-zinc-300 dark:border-zinc-700 bg-white/80 dark:bg-zinc-900/80 hover:bg-zinc-50 dark:hover:bg-zinc-800 text-zinc-800 dark:text-zinc-200 font-semibold text-sm transition-all"
              >
                <Mail size={15} className="text-indigo-600 dark:text-indigo-400" />
                <span>Contact Me</span>
              </a>

              <a
                href={personalInfo.resumeUrl}
                className="inline-flex items-center gap-2 px-4 py-3 rounded-full border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white text-sm font-medium transition-colors"
              >
                <Download size={15} />
                <span>CV</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="p-2 rounded-full border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors shadow-sm"
              >
                <Github size={17} />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-2 rounded-full border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 hover:text-sky-600 dark:hover:text-sky-400 transition-colors shadow-sm"
              >
                <Linkedin size={17} />
              </a>
              <a
                href={personalInfo.twitter}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="p-2 rounded-full border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors shadow-sm"
              >
                <Twitter size={17} />
              </a>
            </div>

          </div>

          {/* Right Column: ID Card — fixed width so it doesn't shift */}
          <div className="flex-shrink-0 flex flex-col items-center justify-center w-full lg:w-[340px]">
            <HangingIdCard
              ropeLength={70}
              ropeColor="#27272a"
              cardClassName="w-[280px] sm:w-[310px] rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200/90 dark:border-zinc-800 shadow-2xl overflow-hidden"
            >
              <div className="flex flex-col h-full bg-white dark:bg-zinc-900">
                {/* Card gradient header */}
                <div className="relative h-44 bg-gradient-to-br from-purple-500 via-indigo-600 to-pink-400 dark:from-purple-700 dark:via-indigo-800 dark:to-pink-600 flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 bg-[radial-gradient(#ffffff30_1.5px,transparent_1.5px)] bg-[size:10px_10px]" />
                  <div className="relative z-10 w-24 h-24 rounded-full border-2 border-emerald-400 shadow-2xl overflow-hidden bg-zinc-100">
                    <img
                      src={personalInfo.avatarUrl}
                      alt={personalInfo.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-5 bg-white dark:bg-zinc-900 flex flex-col items-center">
                  <h3 className="text-lg font-bold text-zinc-900 dark:text-white">
                    {personalInfo.name}
                  </h3>

                  <div className="mt-1 mb-4 px-3 py-1 rounded-full border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-800/80 text-zinc-700 dark:text-zinc-300 text-xs font-semibold">
                    {personalInfo.title}
                  </div>

                  <div className="w-full border border-zinc-200/80 dark:border-zinc-800/80 rounded-2xl p-3.5 grid grid-cols-2 gap-3 text-left">
                    <div>
                      <span className="text-[9px] uppercase font-mono text-zinc-400 font-bold block mb-0.5">
                        SPECIALTY
                      </span>
                      <span className="text-xs font-bold text-zinc-800 dark:text-zinc-200">
                        Full-Stack AI & UX
                      </span>
                    </div>

                    <div>
                      <span className="text-[9px] uppercase font-mono text-zinc-400 font-bold block mb-0.5">
                        LOCATION
                      </span>
                      <span className="text-xs font-bold text-zinc-800 dark:text-zinc-200 truncate block">
                        {personalInfo.location.split("/")[0]}
                      </span>
                    </div>

                    <div>
                      <span className="text-[9px] uppercase font-mono text-zinc-400 font-bold block mb-0.5">
                        EXPERIENCE
                      </span>
                      <span className="text-xs font-bold text-zinc-800 dark:text-zinc-200">
                        3+ Years
                      </span>
                    </div>

                    <div>
                      <span className="text-[9px] uppercase font-mono text-zinc-400 font-bold block mb-0.5">
                        STATUS
                      </span>
                      <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400">
                        Available
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </HangingIdCard>

            <span className="text-[11px] text-zinc-400 dark:text-zinc-500 mt-2 block font-medium">
              Drag or click the card
            </span>
          </div>

        </div>
      </div>
    </section>
  );
};
