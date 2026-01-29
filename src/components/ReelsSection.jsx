import React, { useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

// Carousel cards data
const cards = [
  {
    title: "Cyberpunk Noir",
    subtitle: "Generative Video",
    video: "https://cdn.higgsfield.ai/kling_video_sample/1308a1ac-d626-4178-b6d5-0e2bb676f194.mp4",
  },
  {
    title: "Space Odyssey",
    subtitle: "AI Short Film",
    video: "https://cdn.higgsfield.ai/kling_video_sample/ca854666-6bfe-40ef-a204-962a669075e6.mp4",
  },
  {
    title: "Digital Dreams",
    subtitle: "Generative Video",
    video: "https://cdn.higgsfield.ai/kling_video_sample/b326201b-a325-4cfa-b0c2-9ca38cb1a79f.mp4",
  },
  {
    title: "Neon City",
    subtitle: "AI Cinematics",
    video: "https://cdn.higgsfield.ai/kling_video_sample/d096c734-8a89-4a38-a5cc-fe99e5b44d37.mp4",
  },
  {
    title: "Futuristic Visions",
    subtitle: "AI Short Film",
    video: "https://cdn.higgsfield.ai/kling_video_sample/cf9c9837-4383-4edf-898e-7f85b687eea5.mp4",
  },
  {
    title: "Abstract Reality",
    subtitle: "AI Motion",
    video: "https://cdn.higgsfield.ai/kling_video_sample/3dac7c4c-3807-456c-af0e-491b4410390f.mp4",
  },
];

const ReelsSection = () => {
  const carouselRef = useRef(null);

  // Scroll carousel left
  const scrollLeft = () => {
    carouselRef.current?.scrollBy({ left: -320, behavior: "smooth" });
  };

  // Scroll carousel right
  const scrollRight = () => {
    carouselRef.current?.scrollBy({ left: 320, behavior: "smooth" });
  };

  return (
    <section id="reels" className="relative w-full py-24 bg-black overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex items-end justify-between mb-16 px-4">
           <div>
             <span className="text-blue-500 font-medium tracking-wider text-sm uppercase mb-4 block">Visual Proof</span>
             <h2 className="text-4xl md:text-5xl font-display font-medium text-white mb-4">Cinematic Showreel</h2>
             <p className="text-white/60 max-w-lg leading-relaxed">
               Every frame below was generated, not filmed. Welcome to the new era of production.
             </p>
           </div>
           
           {/* Navigation Buttons */}
           <div className="hidden md:flex gap-4">
              <button
               onClick={scrollLeft}
               className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-all duration-300 hover:scale-110 group"
             >
               <ArrowLeft className="w-5 h-5 text-white/70 group-hover:text-white" />
             </button>
             <button
               onClick={scrollRight}
               className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-all duration-300 hover:scale-110 group"
             >
               <ArrowRight className="w-5 h-5 text-white/70 group-hover:text-white" />
             </button>
           </div>
        </div>

        {/* Carousel Container */}
        <div className="relative h-[500px] w-full flex items-center">
          
          {/* Cinematic lighting effect behind cards */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-500/5 blur-[100px] rounded-full pointer-events-none"></div>

          {/* Scrollable Cards Container */}
          <div
            ref={carouselRef}
            className="flex gap-8 overflow-x-auto no-scrollbar snap-x snap-mandatory scroll-smooth h-full items-center px-4 w-full mask-gradient-x"
            style={{
              maskImage: 'linear-gradient(to right, transparent, black 5%, black 95%, transparent)',
              WebkitMaskImage: 'linear-gradient(to right, transparent, black 5%, black 95%, transparent)'
            }}
          >
            {cards.map((card, idx) => {
              return (
                <div
                  key={idx}
                  className="snap-center shrink-0 w-[300px] h-[450px] rounded-[2rem] overflow-hidden relative group cursor-pointer transition-all duration-500 hover:-translate-y-4 hover:shadow-2xl hover:shadow-purple-500/20"
                >
                  <video
                    src={card.video}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity"></div>
                  
                  {/* Glass overlay on hover */}
                  <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 backdrop-blur-[2px]"></div>

                  <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                    <span className="inline-block px-2 py-1 rounded-md bg-white/10 backdrop-blur-md border border-white/10 text-[10px] uppercase tracking-wider text-white/80 mb-3 opacity-0 group-hover:opacity-100 transition-opacity delay-100">
                      {card.subtitle}
                    </span>
                    <h3 className="text-2xl font-display font-medium text-white mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-blue-200 transition-all">
                      {card.title}
                    </h3>
                  </div>
                </div>
              );
            })}
             {/* Spacer for right padding */}
             <div className="snap-center shrink-0 w-8"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReelsSection;
