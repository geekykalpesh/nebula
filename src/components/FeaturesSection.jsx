import React from "react";
import { Video, User, RefreshCw, Scissors, Sun, Palette, Smartphone } from "lucide-react";

const features = [
  {
    icon: <Video className="w-6 h-6 text-blue-400" />,
    title: "Generate cinematic visuals from ideas",
    desc: "Transform scripts, concepts, and references into high-quality video scenes",
  },
  {
    icon: <User className="w-6 h-6 text-purple-400" />,
    title: "Precision character movement & performance",
    desc: "Direct on-screen characters with controlled motion, gestures, and timing",
  },
  {
    icon: <RefreshCw className="w-6 h-6 text-emerald-400" />,
    title: "Visual continuity across frames",
    desc: "Maintain consistent characters, environments, and visual styles across multiple shots",
  },
  {
    icon: <Scissors className="w-6 h-6 text-pink-400" />,
    title: "Intelligent cuts, pacing, and flow",
    desc: "AI-assisted editing enables faster sequencing, smoother transitions, and platform-optimised pacing without sacrificing cinematic quality",
  },
  {
    icon: <Sun className="w-6 h-6 text-amber-400" />,
    title: "Cinematic lighting without reshoots",
    desc: "Adjust lighting, mood, and colour dynamically in post",
  },
  {
    icon: <Palette className="w-6 h-6 text-cyan-400" />,
    title: "Control the look and feel",
    desc: "Apply and iterate across multiple visual styles",
  },
  {
    icon: <Smartphone className="w-6 h-6 text-indigo-400" />,
    title: "Built for every platform",
    desc: "Generate outputs optimised for Reels, Shorts, TikTok, and YouTube",
  },
];

const FeaturesSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-32">
      <div className="grid lg:grid-cols-[1fr_1.5fr] gap-16 md:gap-24">
        {/* Left Sticky Text */}
        <div className="lg:sticky lg:top-32 h-fit">
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-snug">
            AI is redefining how brands tell stories, how ideas are visualised, and how attention is captured at scale.
          </h2>
        </div>

        {/* Right Vertical Scroll Cards */}
        <div className="relative h-[600px] overflow-y-auto no-scrollbar space-y-4 pr-2 mask-gradient-b">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="glass-panel rounded-2xl p-6 flex flex-col gap-4 hover:-translate-y-1 transition duration-500 border border-white/10 shadow-[0_0_20px_rgba(0,150,255,0.2)]"
            >
              <div className="flex items-center gap-4">
                {feature.icon}
                <h3 className="font-semibold text-white text-lg">{feature.title}</h3>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
