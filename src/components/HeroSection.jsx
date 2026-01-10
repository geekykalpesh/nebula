import React, { useRef, useEffect } from "react";
import { ArrowRight, ArrowLeft } from "lucide-react";
import laserVideo from "../assets/laser.webm";

// Carousel cards data
const cards = [
  {
    title: "Cyberpunk Noir",
    subtitle: "Generative Video",
    img: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&w=600&auto=format&fit=crop",
  },
  {
    title: "Space Odyssey",
    subtitle: "AI Short Film",
    img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=600&auto=format&fit=crop",
  },
  {
    title: "Digital Dreams",
    subtitle: "Generative Video",
    img: "https://images.unsplash.com/photo-1519985176271-adb1088fa94c?q=80&w=600&auto=format&fit=crop",
  },
  {
    title: "Neon City",
    subtitle: "AI Cinematics",
    img: "https://images.unsplash.com/photo-1606925794604-92c5a5b5f01b?q=80&w=600&auto=format&fit=crop",
  },
  {
    title: "Futuristic Visions",
    subtitle: "AI Short Film",
    img: "https://images.unsplash.com/photo-1601597118694-62d68a4c0c42?q=80&w=600&auto=format&fit=crop",
  },
];

const HeroSection = () => {
  const carouselRef = useRef(null);

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

  // Scroll carousel left
  const scrollLeft = () => {
    carouselRef.current?.scrollBy({ left: -300, behavior: "smooth" });
  };

  // Scroll carousel right
  const scrollRight = () => {
    carouselRef.current?.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <section className="relative w-full mx-auto px-6 pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">

      {/* BACKGROUND VIDEO */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-30"
        src={laserVideo}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
      />

      {/* BACKGROUND - UnicornStudio */}
      <div className="absolute inset-0 z-5">
        <div 
          data-us-project="svh2rywh5ubFrAHS7oPp" 
          style={{width:'1440px', height: '900px'}}
        ></div>
      </div>
      
      {/* Premium Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40 z-5" />

      {/* BACKGROUND BLUR CIRCLE */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                      w-[800px] h-[500px] bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5 blur-[120px] rounded-full
                      pointer-events-none z-10" />

      {/* MAIN GRID: TEXT + CAROUSEL */}
      <div className="grid lg:grid-cols-2 gap-16 md:gap-24 items-center relative z-30 max-w-7xl mx-auto">

        {/* LEFT: HERO TEXT */}
        <div className="max-w-2xl space-y-8">
          {/* Premium Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 mb-2">
            <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 animate-pulse"></div>
            <span className="text-white/70 text-xs font-light tracking-wider uppercase">Award-Winning Studio</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl text-premium text-white tracking-tight leading-[1.1] animate-fade-up">
            Nebula
            <span className="block text-gradient-premium font-extralight">
              Films
            </span>
          </h1>
          <p className="text-2xl md:text-3xl text-white/80 font-extralight animate-fade-up delay-150 leading-tight">
            AI ad films that tell your story, stir emotions and engage…
          </p>
          <p className="text-white/60 text-lg leading-relaxed max-w-md animate-fade-up delay-300 font-light">
            Ad films designed for how people watch today.
          </p>

          {/* Premium Button */}
          <button className="btn-premium group relative px-8 py-4 bg-white text-black rounded-full font-medium transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-white/20 animate-fade-up delay-450">
            <span className="relative z-10">Hire Us</span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </button>
        </div>

        {/* RIGHT: SCROLLABLE CINEMATIC STORY CARDS */}
        <div className="relative h-[480px] w-full" style={{perspective: '1200px'}}>
          {/* Navigation Buttons */}
          <button
            onClick={scrollLeft}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-50 w-10 h-10 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all duration-300 hover:scale-110"
          >
            <ArrowLeft className="w-4 h-4 text-white" strokeWidth={2} />
          </button>
          <button
            onClick={scrollRight}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-50 w-10 h-10 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all duration-300 hover:scale-110"
          >
            <ArrowRight className="w-4 h-4 text-white" strokeWidth={2} />
          </button>

          {/* Scrollable Cards Container */}
          <div
            ref={carouselRef}
            className="flex gap-8 overflow-x-auto no-scrollbar snap-x snap-mandatory scroll-smooth h-full items-center px-12"
          >
            {cards.map((card, idx) => {
              const isLeft = idx % 3 === 0;
              const isCenter = idx % 3 === 1;
              const isRight = idx % 3 === 2;
              
              return (
                <div
                  key={idx}
                  className="snap-center shrink-0 w-[240px] h-[380px] rounded-2xl overflow-hidden shadow-2xl cursor-pointer transition-all duration-700 hover:scale-105"
                  style={{
                    transform: isLeft 
                      ? 'rotateY(-15deg) rotateX(5deg) translateZ(0px)' 
                      : isCenter 
                      ? 'rotateY(0deg) rotateX(0deg) translateZ(20px)'
                      : 'rotateY(15deg) rotateX(-5deg) translateZ(0px)',
                    zIndex: isCenter ? 3 : isLeft ? 1 : 2
                  }}
                >
                  <img
                    src={card.img}
                    alt={card.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white font-medium text-lg mb-1">{card.title}</h3>
                    <p className={`text-sm font-light ${
                      isLeft ? 'text-orange-300' : isCenter ? 'text-blue-300' : 'text-orange-300'
                    }`}>{card.subtitle}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>


      </div>
    </section>
  );
};

export default HeroSection;
