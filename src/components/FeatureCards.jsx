import React from "react";
import { Zap, Clapperboard, Layers } from "lucide-react";

const FeatureCards = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      {/* Intro Text */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight">
          We are a creative lab that uses AI-powered workflows and cinematic tools to bring the most ambitious ad films to life.
        </h2>
      </div>

      {/* Cards Grid */}
      <div className="grid md:grid-cols-3 gap-6">
        {/* Card 1 */}
        <div className="glass-panel rounded-3xl p-8 hover:-translate-y-1 transition duration-500 border border-slate-700/30">
          <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400 mb-6 border border-blue-500/20">
            <Zap className="w-5 h-5" strokeWidth={1.5} />
          </div>
          <h3 className="font-semibold text-white text-lg mb-3 tracking-tight">Rapid creative exploration</h3>
          <p className="text-sm text-slate-400 leading-relaxed">
            We use AI to explore multiple storylines, hooks, visual styles, and formats early — allowing us to identify what resonates before production scales.
          </p>
        </div>

        {/* Card 2 */}
        <div className="glass-panel rounded-3xl p-8 hover:-translate-y-1 transition duration-500 border border-slate-700/30">
          <div className="w-10 h-10 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-400 mb-6 border border-purple-500/20">
            <Clapperboard className="w-5 h-5" strokeWidth={1.5} />
          </div>
          <h3 className="font-semibold text-white text-lg mb-3 tracking-tight">High-speed cinematic production</h3>
          <p className="text-sm text-slate-400 leading-relaxed">
            AI-assisted editing, visuals, and automation help us compress timelines without compromising on polish, pacing, or emotional depth.
          </p>
        </div>

        {/* Card 3 */}
        <div className="glass-panel rounded-3xl p-8 hover:-translate-y-1 transition duration-500 border border-slate-700/30">
          <div className="w-10 h-10 rounded-full bg-teal-500/10 flex items-center justify-center text-teal-400 mb-6 border border-teal-500/20">
            <Layers className="w-5 h-5" strokeWidth={1.5} />
          </div>
          <h3 className="font-semibold text-white text-lg mb-3 tracking-tight">Intelligent iteration at scale</h3>
          <p className="text-sm text-slate-400 leading-relaxed">
            Instead of one “final” cut, we create variations optimised for different platforms, audiences, and objectives — efficiently and cost-effectively.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FeatureCards;
