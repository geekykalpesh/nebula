import React from "react";

const ProcessSection = () => {
  return (
    <section
      id="process"
      className="max-w-7xl mx-auto px-6 py-32 border-t border-white/5"
    >
      {/* Section Header */}
      <div className="mb-20 max-w-3xl">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
          Our Process
        </h2>
        <p className="text-xl md:text-2xl text-slate-400 leading-relaxed">
          Our capabilities allow us to move faster, explore deeper, and produce
          more — while keeping creative direction firmly{" "}
          <span className="text-white">human-led</span>.
        </p>
      </div>

      {/* Visual Process Layout */}
      <div className="grid lg:grid-cols-[320px_1fr] gap-10 md:gap-14 items-start">
        {/* Mobile / Reel Format */}
        <div className="glass-panel rounded-3xl p-3 shadow-2xl relative group">
          <div className="aspect-[9/16] bg-black/40 rounded-2xl overflow-hidden relative border border-white/5">
            <div className="absolute top-4 right-4 flex flex-col gap-3 z-10">
              <div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-md" />
              <div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-md" />
              <div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-md" />
            </div>

            <div className="absolute bottom-6 left-4 right-12 z-10">
              <div className="w-24 h-3 bg-white/20 rounded-full mb-2" />
              <div className="w-40 h-3 bg-white/20 rounded-full" />
            </div>

            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-900 via-purple-900 to-slate-900 opacity-50 group-hover:scale-110 transition duration-700" />

            <div className="absolute inset-0 flex items-center justify-center text-white/20 font-semibold tracking-widest text-xs uppercase">
              9:16 Output
            </div>
          </div>
          <p className="text-center text-xs text-slate-500 mt-4 pb-2">
            Mobile-First Storytelling
          </p>
        </div>

        {/* Workflow / Desktop Format */}
        <div className="glass-panel rounded-3xl p-3 shadow-2xl h-full flex flex-col group">
          <div className="flex-1 bg-black/40 rounded-2xl overflow-hidden relative border border-white/5 min-h-[320px]">
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-[#0B1120] border-t border-white/5 flex items-center px-4 gap-2">
              <div className="h-12 w-1/4 bg-blue-500/20 rounded-lg border border-blue-500/30" />
              <div className="h-12 w-1/6 bg-purple-500/20 rounded-lg border border-purple-500/30" />
              <div className="h-12 w-1/3 bg-teal-500/20 rounded-lg border border-teal-500/30" />
              <div className="absolute top-0 left-1/3 w-0.5 h-full bg-red-500/50" />
            </div>

            <div className="absolute inset-0 bottom-24 bg-gradient-to-br from-slate-900 via-slate-800 to-black opacity-80" />

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-12 text-white/20 font-semibold tracking-widest text-xs uppercase">
              Timeline & Logic
            </div>
          </div>

          <p className="text-center text-xs text-slate-500 mt-4 pb-2">
            Precision Editing & Control
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
