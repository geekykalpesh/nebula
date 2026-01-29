import React from "react";
import { Video, User, RefreshCw, Scissors, Sun, Palette, Smartphone } from "lucide-react";

const features = [
  {
    icon: <Video className="w-6 h-6 text-blue-400" />,
    title: "Instant cinematic visualization",
    desc: "Turn scripts and concepts into high-fidelity video scenes in minutes, not days.",
  },
  {
    icon: <User className="w-6 h-6 text-purple-400" />,
    title: "Director-level control",
    desc: "Direct every gesture, expression, and movement with precision usually reserved for live action.",
  },
  {
    icon: <RefreshCw className="w-6 h-6 text-emerald-400" />,
    title: "Perfect visual continuity",
    desc: "Keep characters and environments consistent across every shot of your campaign.",
  },
  {
    icon: <Scissors className="w-6 h-6 text-pink-400" />,
    title: "AI-assisted pacing",
    desc: "Find the perfect rhythm for your edit automatically, optimized for maximum retention.",
  },
  {
    icon: <Sun className="w-6 h-6 text-amber-400" />,
    title: "Post-production magic",
    desc: "Change the time of day, lighting, or mood of any scene without a reshoot.",
  },
  {
    icon: <Palette className="w-6 h-6 text-cyan-400" />,
    title: "Infinite style exploration",
    desc: "Test five different visual styles for your brand before committing to one.",
  },
  {
    icon: <Smartphone className="w-6 h-6 text-indigo-400" />,
    title: "Native to every platform",
    desc: "Automatically reframe and optimize your master cut for Reels, TikTok, and YouTube Shorts.",
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
