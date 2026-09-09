import React, { useState, useEffect } from "react";
import { personalInfo } from "../data/portfolioData";
import { ArrowRight, Download, Github, Linkedin, Twitter, Mail, Sparkles, Terminal, Code2 } from "lucide-react";
import { TypingText } from "@/components/ui/typing-text";

export const Hero: React.FC = () => {
  const [titleIndex, setTitleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % personalInfo.typingTitles.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 px-4 overflow-hidden">
      {/* Background Aurora / Mesh Gradient */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[750px] h-[450px] bg-gradient-to-tr from-indigo-500/15 via-cyan-400/15 to-purple-500/10 dark:from-indigo-600/20 dark:via-cyan-500/20 dark:to-purple-600/10 blur-[130px] rounded-full opacity-70" />
        <div className="absolute top-1/3 -left-32 w-[350px] h-[350px] bg-indigo-400/15 dark:bg-indigo-500/15 blur-[100px] rounded-full" />
        <div className="absolute bottom-10 -right-32 w-[400px] h-[400px] bg-cyan-400/15 dark:bg-cyan-500/15 blur-[110px] rounded-full" />
        
        {/* Grid lines */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a0d_1px,transparent_1px),linear-gradient(to_bottom,#0f172a0d_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1e293b0a_1px,transparent_1px),linear-gradient(to_bottom,#1e293b0a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      </div>

      <div className="relative max-w-5xl mx-auto w-full flex flex-col items-center text-center z-10">
        
        {/* Status Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-50 dark:bg-emerald-950/30 text-emerald-700 dark:text-emerald-400 text-xs font-semibold mb-6 backdrop-blur-md shadow-sm dark:shadow-lg dark:shadow-emerald-900/20 animate-in fade-in slide-in-from-bottom-3 duration-500">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <span>{personalInfo.badgeTitle}</span>
        </div>

        {/* Introduction / Greeting */}
        <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 font-mono text-xs sm:text-sm tracking-wider uppercase mb-3 font-semibold">
          <Terminal size={15} className="text-cyan-600 dark:text-cyan-400" />
          <span>Hello World, I'm</span>
        </div>

        {/* Large Name Display with Gradient */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight mb-4">
          <span className="bg-gradient-to-b from-slate-950 via-slate-800 to-slate-600 dark:from-white dark:via-slate-100 dark:to-slate-400 bg-clip-text text-transparent">
            {personalInfo.name}
          </span>
        </h1>

        {/* Dynamic Animated Typing Title */}
        <div className="h-14 sm:h-16 flex items-center justify-center mb-6">
          <div className="text-xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-indigo-600 via-cyan-600 to-sky-600 dark:from-indigo-400 dark:via-cyan-300 dark:to-sky-400 bg-clip-text text-transparent">
            <TypingText
              key={titleIndex}
              delay={0.1}
              duration={1.5}
              fontSize="text-xl sm:text-3xl md:text-4xl"
              fontWeight="font-bold"
              color="text-transparent"
              className="bg-gradient-to-r from-indigo-600 via-cyan-600 to-sky-600 dark:from-indigo-400 dark:via-cyan-300 dark:to-sky-400 bg-clip-text text-transparent"
            >
              {personalInfo.typingTitles[titleIndex]}
            </TypingText>
          </div>
        </div>

        {/* Bio Description */}
        <p className="max-w-2xl text-base sm:text-lg text-slate-600 dark:text-slate-300 font-normal leading-relaxed mb-9">
          {personalInfo.bio}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3.5 mb-12">
          <a
            href="#projects"
            className="group relative inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-600 via-indigo-500 to-cyan-500 text-white font-medium text-sm shadow-lg shadow-indigo-600/25 hover:shadow-cyan-500/40 hover:scale-[1.03] active:scale-[0.98] transition-all duration-200 border border-indigo-400/30"
          >
            <span>View Featured Work</span>
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-slate-200 dark:border-slate-700/70 bg-white/90 dark:bg-slate-900/60 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white font-medium text-sm backdrop-blur-md hover:border-slate-300 dark:hover:border-slate-600 transition-all duration-200 shadow-sm"
          >
            <Mail size={16} className="text-cyan-600 dark:text-cyan-400" />
            <span>Contact Me</span>
          </a>

          <a
            href={personalInfo.resumeUrl}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-slate-200 dark:border-slate-700/70 bg-white/90 dark:bg-slate-900/60 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white font-medium text-sm backdrop-blur-md hover:border-slate-300 dark:hover:border-slate-600 transition-all duration-200 shadow-sm"
          >
            <Download size={16} className="text-indigo-600 dark:text-indigo-400" />
            <span>Resume</span>
          </a>
        </div>

        {/* Social Links Bar */}
        <div className="flex items-center gap-4 mb-14">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/70 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:border-slate-300 dark:hover:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all duration-200 shadow-sm"
          >
            <Github size={18} />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/70 text-slate-600 dark:text-slate-400 hover:text-sky-600 dark:hover:text-sky-400 hover:border-sky-300 dark:hover:border-sky-500/40 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all duration-200 shadow-sm"
          >
            <Linkedin size={18} />
          </a>
          <a
            href={personalInfo.twitter}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/70 text-slate-600 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 hover:border-cyan-300 dark:hover:border-cyan-500/40 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all duration-200 shadow-sm"
          >
            <Twitter size={18} />
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            aria-label="Email"
            className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/70 text-slate-600 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 hover:border-emerald-300 dark:hover:border-emerald-500/40 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all duration-200 shadow-sm"
          >
            <Mail size={18} />
          </a>
        </div>

        {/* Quick Highlights / Stats Banner with Glass Border */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3.5 sm:gap-6 w-full max-w-4xl p-4 sm:p-6 rounded-2xl glass-panel border border-slate-200/80 dark:border-slate-700/50 bg-white/80 dark:bg-slate-900/50 backdrop-blur-xl shadow-lg dark:shadow-indigo-950/20">
          {personalInfo.stats.map((stat, i) => (
            <div key={i} className="flex flex-col items-center justify-center p-2.5">
              <span className="text-2xl sm:text-3xl font-extrabold bg-gradient-to-r from-indigo-600 via-cyan-600 to-indigo-800 dark:from-indigo-400 dark:via-cyan-300 dark:to-white bg-clip-text text-transparent mb-1">
                {stat.value}
              </span>
              <span className="text-xs font-semibold text-slate-600 dark:text-slate-400 text-center tracking-wide">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
