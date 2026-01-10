import React from "react";

const CTASection = () => {
  return (
    <section className="max-w-5xl mx-auto px-6 py-32">
      <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-b from-blue-900/40 to-slate-900 border border-blue-500/20 p-12 md:p-20 text-center shadow-2xl shadow-blue-900/20">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-400/50 to-transparent"></div>
        <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-400/20 to-transparent"></div>

        <h2 className="text-3xl md:text-5xl font-semibold text-white mb-6 tracking-tight leading-tight">
          Ready to build films that <br /> actually engage?
        </h2>

        <p className="text-slate-300 text-lg max-w-xl mx-auto mb-10">
          If you're a brand that values storytelling, consistency, and future-forward production.
        </p>

        <button className="inline-flex items-center justify-center px-10 py-4 rounded-full bg-white text-blue-900 hover:bg-blue-50 transition-colors shadow-lg shadow-white/10 font-medium text-sm">
          Hire Nebula Films
        </button>
      </div>
    </section>
  );
};

export default CTASection;
