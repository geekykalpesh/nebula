import { Cover } from "@/components/ui/cover";
import { FlowVisualization } from "@/components/ui/flow-visualization";

const ProcessSection = () => {
  return (
    <section
      id="process"
      className="max-w-7xl mx-auto px-6 py-32 border-t border-white/5"
    >
      {/* Section Header */}
      <div className="mb-20 max-w-3xl">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
          From concept to cut—<Cover className="text-white">faster</Cover>.
        </h2>
        <p className="text-xl md:text-2xl text-slate-400 leading-relaxed">
          We've reimagined the production pipeline to remove friction, not creativity. Move from brief to final film in days, keeping the <span className="text-white">human touch</span> where it matters most.
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

            <video
              src="https://cdn.higgsfield.ai/kling_video_sample/377e5f89-37b7-4d72-8a22-2802faabf4e5.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:scale-105 transition duration-700"
            />
            <div className="absolute inset-0 bg-black/10 pointer-events-none" />
          </div>
          <p className="text-center text-xs text-slate-500 mt-4 pb-2">
            Mobile-First Storytelling
          </p>
        </div>

        {/* Generative Flow / Branching Format */}
        <div className="glass-panel rounded-3xl p-3 shadow-2xl h-full flex flex-col group">
          <FlowVisualization className="flex-1 min-h-[400px]" />
          <p className="text-center text-xs text-slate-500 mt-4 pb-2">
            Multi-Branch Generation
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
