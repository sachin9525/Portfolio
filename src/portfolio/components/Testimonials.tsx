import React, { useState, useEffect } from "react";
import { testimonialsData } from "../data/portfolioData";
import { Quote, Star, ChevronLeft, ChevronRight, MessageSquareHeart } from "lucide-react";

export const Testimonials: React.FC = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonialsData.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setCurrent((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
  };

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % testimonialsData.length);
  };

  return (
    <section className="portfolio-gutter py-20 relative overflow-hidden">
      <div className="portfolio-container">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-50 dark:bg-indigo-950/30 text-indigo-600 dark:text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <MessageSquareHeart size={13} />
            <span>Endorsements</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-3">
            What People <span className="bg-gradient-to-r from-indigo-600 via-cyan-600 to-indigo-800 dark:from-indigo-400 dark:via-cyan-300 dark:to-white bg-clip-text text-transparent">Say</span>
          </h2>
          <p className="max-w-xl text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            Feedback from team leads, collaborators, and clients I have had the pleasure to work with.
          </p>
        </div>

        {/* Carousel Card */}
        <div className="relative p-8 sm:p-12 rounded-3xl glass-panel border border-slate-200/90 dark:border-slate-800 bg-white/90 dark:bg-slate-900/60 shadow-xl shadow-slate-200/50 dark:shadow-none">
          <div className="absolute top-6 left-6 text-indigo-200 dark:text-indigo-900/40 pointer-events-none">
            <Quote size={60} />
          </div>

          <div className="relative z-10 flex flex-col items-center text-center">
            {/* 5-Star Rating */}
            <div className="flex items-center gap-1 text-amber-400 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={17} fill="currentColor" />
              ))}
            </div>

            {/* Testimonial Quote */}
            <p className="text-base sm:text-xl text-slate-800 dark:text-slate-200 font-medium leading-relaxed italic mb-8 max-w-2xl">
              "{testimonialsData[current].quote}"
            </p>

            {/* Author Info */}
            <div className="flex items-center gap-3.5">
              <img
                src={testimonialsData[current].avatar}
                alt={testimonialsData[current].name}
                className="w-12 h-12 rounded-full object-cover border-2 border-indigo-500/40 shadow-md"
              />
              <div className="text-left">
                <h4 className="text-base font-bold text-slate-900 dark:text-white">
                  {testimonialsData[current].name}
                </h4>
                <p className="text-xs text-indigo-600 dark:text-indigo-400 font-medium">
                  {testimonialsData[current].role}
                </p>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center justify-center gap-3 mt-8 pt-6 border-t border-slate-200 dark:border-slate-800/80">
            <button
              onClick={handlePrev}
              aria-label="Previous testimonial"
              className="p-2 rounded-xl border border-slate-300 dark:border-slate-800 bg-slate-100 dark:bg-slate-800/60 text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-white transition-colors"
            >
              <ChevronLeft size={18} />
            </button>
            <div className="flex items-center gap-1.5 px-3">
              {testimonialsData.map((_, i) => (
                <span
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`cursor-pointer transition-all duration-300 rounded-full h-2 ${
                    current === i
                      ? "w-6 bg-gradient-to-r from-indigo-600 to-cyan-500"
                      : "w-2 bg-slate-300 dark:bg-slate-700"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={handleNext}
              aria-label="Next testimonial"
              className="p-2 rounded-xl border border-slate-300 dark:border-slate-800 bg-slate-100 dark:bg-slate-800/60 text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-white transition-colors"
            >
              <ChevronRight size={18} />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
