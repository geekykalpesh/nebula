import React, { useRef, useEffect } from "react";
import { ArrowRight, ArrowLeft, Play } from "lucide-react";
import GradientBlinds from "./GradientBlinds";
import { TiltWrapper } from "@/components/ui/TiltWrapper";

const HeroSection = () => {
  useEffect(() => {
    // Load UnicornStudio script
    if (!window.UnicornStudio) {
      window.UnicornStudio = { isInitialized: false };
      const script = document.createElement("script");
      script.src = "https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v2.0.1/dist/unicornStudio.umd.js";
      script.onload = function() {
        if (!window.UnicornStudio.isInitialized) {
          window.UnicornStudio.init();
          window.UnicornStudio.isInitialized = true;
        }
      };
      (document.head || document.body).appendChild(script);
    }
  }, []);

  return (
    <section className="relative w-full h-screen flex items-center justify-center mx-auto px-6 overflow-hidden bg-black">
      
      {/* BACKGROUND NOISE TEXTURE */}
      <div className="bg-noise absolute inset-0 z-[1] mix-blend-overlay"></div>

      {/* BACKGROUND - Gradient Blinds */}
      <div className="absolute inset-0 z-0">
        <GradientBlinds 
          gradientColors={['#171717', '#3b82f6', '#9333ea', '#171717']}
          blindCount={20}
          noise={0.1}
          spotlightRadius={0.4}
          spotlightOpacity={0.8}
          angle={20}
        />
      </div>
      
      {/* Premium Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black z-5" />

      {/* CENTERED HERO CONTENT */}
      <div className="relative z-30 max-w-5xl mx-auto w-full flex flex-col items-center text-center space-y-12">

        {/* Premium Badge */}
        <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 transition-colors cursor-default animate-fade-in-up">
          <span className="flex h-2 w-2 relative mr-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          <span className="text-white/80 text-[11px] font-medium tracking-[0.2em] uppercase font-sans">Award-Winning Studio</span>
        </div>
        
        <TiltWrapper rotationIntensity={15} className="space-y-6">
          <h1 className="text-6xl md:text-7xl lg:text-[8rem] font-display font-medium text-white tracking-tighter leading-[0.9] animate-fade-in-up delay-100">
            Nebula
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 font-bold pr-2 pb-2 block md:inline-block">
              Films
            </span>
          </h1>
          <p className="text-2xl md:text-3xl text-white/70 font-sans font-light animate-fade-in-up delay-200 leading-tight max-w-2xl mx-auto transform-style-3d translate-z-10">
            Create <span className="text-white font-normal">blockbuster ads</span> at independent speeds.
          </p>
        </TiltWrapper>

        <p className="text-white/50 text-lg leading-relaxed max-w-xl mx-auto animate-fade-in-up delay-300 font-sans font-light">
          Captivate the modern attention span with generative AI that feels indistinguishably human.
        </p>


        {/* Premium Button Group */}
        <div className="flex flex-wrap items-center justify-center gap-6 animate-fade-in-up delay-400">
          <button className="group relative px-8 py-4 bg-white text-black rounded-full font-sans font-semibold text-sm transition-all duration-500 hover:scale-105 hover:shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)] overflow-hidden">
            <span className="relative z-10 flex items-center gap-2">
              Hire Us <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-purple-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </button>
          
          <a href="#reels" className="px-8 py-4 rounded-full border border-white/20 text-white font-sans font-medium text-sm hover:bg-white/5 transition-all duration-300 hover:border-white/40 flex items-center gap-3 group backdrop-blur-sm">
            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Play className="w-3 h-3 fill-current" />
            </div>
            View Showreel
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
