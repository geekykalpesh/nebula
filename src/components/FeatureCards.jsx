import React from "react";
import { Zap, Clapperboard, Layers } from "lucide-react";
import { DottedGlowBackground } from "@/components/ui/dotted-glow-background";

const features = [
  {
    title: "Test ideas before you shoot",
    description: "Don't guess what works. visually explore storylines, hooks, and styles in pre-production to find your winner before spending a dollar on filming.",
    icon: Zap,
    color: "blue"
  },
  {
    title: "Blockbuster quality, social speed",
    description: "Get the cinematic polish of a TVC with the agility of a social team. AI-assisted workflows compress months of post-production into days.",
    icon: Clapperboard,
    color: "purple"
  },
  {
    title: "Personalized scale",
    description: "One hero asset becomes hundreds of tailored variations. Adapt hooks, visuals, and formatting for every platform and audience segment instantly.",
    icon: Layers,
    color: "teal"
  }
];

const FeatureCards = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      {/* Intro Text */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium text-white leading-tight tracking-tight">
          We are a creative lab that uses AI-powered workflows and cinematic tools to bring the most ambitious ad films to life.
        </h2>
      </div>

      {/* Cards Grid */}
      <div className="grid md:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <div 
            key={index}
            className={`
              relative overflow-hidden rounded-3xl
              bg-[#0a0a0a]/50 backdrop-blur-md
              border border-white/5
              p-8 min-h-[300px] flex flex-col justify-between
              transition-all duration-500
              hover:border-white/10 hover:shadow-2xl
              group
            `}
          >
            <DottedGlowBackground
              className="pointer-events-none mask-radial-to-90% mask-radial-at-center opacity-0 group-hover:opacity-100 transition-opacity duration-700"
              opacity={0.8}
              gap={10}
              radius={1.5}
              color="#525252"
              glowColor={
                feature.color === "blue" ? "#3b82f6" :
                feature.color === "purple" ? "#a855f7" :
                "#14b8a6"
              }
              speedMin={0.3}
              speedMax={1.0}
            />

            <div className="relative z-20">
              <div className={`w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-${feature.color}-400 mb-8 border border-white/10 group-hover:scale-110 transition-transform duration-500 shadow-lg shadow-black/20`}>
                <feature.icon className="w-7 h-7" strokeWidth={1.5} />
              </div>
              
              <h3 className="font-display font-medium text-white text-2xl mb-4 tracking-wide group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-300 transition-all">{feature.title}</h3>
              
              <p className="text-base text-slate-400 leading-relaxed font-sans font-light">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeatureCards;
