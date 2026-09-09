import React, { useState, useEffect } from "react";
import { User, Code2, Globe2, Cpu, Zap, Sparkles, CheckCircle2, Terminal } from "lucide-react";
import { personalInfo } from "../data/portfolioData";

export const About: React.FC = () => {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          timeZoneName: "short",
        })
      );
    };
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  const strengths = [
    "Full-Stack Architecture & Microservices",
    "Production AI Agents & LLM Fine-Tuning",
    "High-Performance React & Fluid Animations",
    "Scalable Databases & Sub-10ms Redis Caching",
    "Modern DevOps, Docker & Continuous Integration",
  ];

  return (
    <section id="about" className="py-20 px-4 relative">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-50 dark:bg-indigo-950/30 text-indigo-600 dark:text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <User size={13} />
            <span>About Me</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-3">
            Crafting Digital Experiences with <span className="bg-gradient-to-r from-indigo-600 to-cyan-600 dark:from-indigo-400 dark:to-cyan-400 bg-clip-text text-transparent">Precision</span>
          </h2>
          <p className="max-w-xl text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            A developer who bridges engineering rigor with design aesthetics to build scalable products users love.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          
          {/* Bento Item 1: Bio & Mission (Spans 2 cols) */}
          <div className="md:col-span-2 p-6 sm:p-8 rounded-3xl glass-panel border border-slate-200/90 dark:border-slate-700/50 bg-white/90 dark:bg-slate-900/60 shadow-lg shadow-slate-200/50 dark:shadow-none relative overflow-hidden group hover:border-indigo-500/40 transition-all duration-300">
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-indigo-500/15 transition-all" />
            
            <div className="flex items-center gap-3 mb-5">
              <div className="p-2.5 rounded-2xl bg-indigo-50 dark:bg-indigo-600/20 border border-indigo-200 dark:border-indigo-500/30 text-indigo-600 dark:text-indigo-400">
                <Code2 size={22} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">Full Stack Engineering</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">From concept to production-ready scalable deployments</p>
              </div>
            </div>

            <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base mb-6">
              I am a dedicated software developer with deep passion for modern web technologies, AI integrations, and responsive UI engineering. I specialize in building end-to-end applications that prioritize sub-second load times, intuitive micro-interactions, and fault-tolerant cloud backends.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {strengths.map((strength, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                  <CheckCircle2 size={16} className="text-cyan-600 dark:text-cyan-400 shrink-0" />
                  <span>{strength}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Bento Item 2: Live Code Terminal Mockup (Consistent Dark IDE Look) */}
          <div className="p-6 rounded-3xl border border-slate-800 bg-slate-950 text-slate-100 shadow-xl flex flex-col justify-between group hover:border-cyan-500/40 transition-all duration-300">
            <div>
              {/* Terminal Titlebar */}
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                </div>
                <div className="flex items-center gap-1 text-[11px] font-mono text-slate-400">
                  <Terminal size={12} />
                  <span>developer.sh</span>
                </div>
              </div>

              {/* Terminal Code Snippet */}
              <div className="font-mono text-xs text-slate-300 space-y-2">
                <p className="text-slate-500">// Status check</p>
                <p>
                  <span className="text-cyan-400">const</span> developer = &#123;
                </p>
                <p className="pl-4">
                  name: <span className="text-emerald-400">"{personalInfo.name}"</span>,
                </p>
                <p className="pl-4">
                  role: <span className="text-amber-300">"Full Stack & AI"</span>,
                </p>
                <p className="pl-4">
                  coffeeConsumed: <span className="text-indigo-400">"∞"</span>,
                </p>
                <p className="pl-4">
                  openToWork: <span className="text-cyan-400">true</span>
                </p>
                <p>&#125;;</p>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800 mt-4 flex items-center justify-between text-xs text-slate-400">
              <span className="font-mono">echo "Ready to ship!"</span>
              <span className="px-2 py-0.5 rounded bg-emerald-950/80 text-emerald-400 text-[10px] border border-emerald-800 font-mono">
                EXIT 0
              </span>
            </div>
          </div>

          {/* Bento Item 3: Live Timezone & Remote Availability */}
          <div className="p-6 rounded-3xl glass-panel border border-slate-200/90 dark:border-slate-700/50 bg-white/90 dark:bg-slate-900/60 shadow-lg shadow-slate-200/50 dark:shadow-none flex flex-col justify-between group hover:border-indigo-500/40 transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-2xl bg-cyan-50 dark:bg-cyan-600/20 border border-cyan-200 dark:border-cyan-500/30 text-cyan-600 dark:text-cyan-400">
                <Globe2 size={20} />
              </div>
              <div>
                <h4 className="text-base font-bold text-slate-900 dark:text-white">Global Availability</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400">{personalInfo.location}</p>
              </div>
            </div>

            <div className="p-3.5 rounded-2xl bg-slate-100 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800/80 mb-3">
              <span className="text-xs text-slate-500 dark:text-slate-400 block mb-1">Local Time</span>
              <span className="text-lg sm:text-xl font-mono font-semibold text-slate-900 dark:text-white tracking-wider">
                {time || "Loading..."}
              </span>
            </div>

            <p className="text-xs text-slate-600 dark:text-slate-400">
              Flexible across US, European, and Asian timezones for synchronous collaboration.
            </p>
          </div>

          {/* Bento Item 4: AI & Machine Learning Focus */}
          <div className="p-6 rounded-3xl glass-panel border border-slate-200/90 dark:border-slate-700/50 bg-white/90 dark:bg-slate-900/60 shadow-lg shadow-slate-200/50 dark:shadow-none flex flex-col justify-between group hover:border-cyan-500/40 transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-2xl bg-purple-50 dark:bg-purple-600/20 border border-purple-200 dark:border-purple-500/30 text-purple-600 dark:text-purple-400">
                <Cpu size={20} />
              </div>
              <div>
                <h4 className="text-base font-bold text-slate-900 dark:text-white">AI Agent Engineering</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400">LLMs, Function Calling, RAG</p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
              Building intelligent agents that reason, plan, and automate repetitive tasks using vector embeddings and stateful workflows.
            </p>

            <div className="flex flex-wrap gap-1.5">
              {["LangChain", "OpenAI", "Pinecone", "RAG Pipeline", "FastAPI"].map((tag, i) => (
                <span key={i} className="px-2.5 py-1 rounded-lg bg-purple-50 dark:bg-slate-800/80 text-[11px] font-mono text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-500/20">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Bento Item 5: Ultra-Fast Performance */}
          <div className="p-6 rounded-3xl glass-panel border border-slate-200/90 dark:border-slate-700/50 bg-white/90 dark:bg-slate-900/60 shadow-lg shadow-slate-200/50 dark:shadow-none flex flex-col justify-between group hover:border-indigo-500/40 transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-2xl bg-amber-50 dark:bg-amber-600/20 border border-amber-200 dark:border-amber-500/30 text-amber-600 dark:text-amber-400">
                <Zap size={20} />
              </div>
              <div>
                <h4 className="text-base font-bold text-slate-900 dark:text-white">Speed & Performance</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400">Sub-second First Contentful Paint</p>
              </div>
            </div>

            <div className="space-y-2 mb-2">
              <div className="flex justify-between text-xs text-slate-700 dark:text-slate-300">
                <span>Lighthouse Score</span>
                <span className="font-mono text-emerald-600 dark:text-emerald-400 font-bold">100 / 100</span>
              </div>
              <div className="w-full h-2 rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden">
                <div className="h-full bg-gradient-to-r from-emerald-500 to-cyan-400 rounded-full w-full" />
              </div>
            </div>

            <p className="text-xs text-slate-600 dark:text-slate-400">
              Zero bloat, efficient bundle splitting, server-side caching, and modern tree-shaking.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};
