import React from "react";
import { CardSpotlight } from "@/components/ui/card-spotlight";

const bentoItems = [
  {
    area: "md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]",
    num: "01",
    title: "Automated Publishing",
    points: [
      "Scheduled posting across social platforms",
      "Format-aware publishing (Reels, Shorts, YouTube)",
      "No manual handling or last-minute uploads",
    ],
  },
  {
    area: "md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]",
    num: "02",
    title: "Content Consistency",
    points: [
      "Always-on brand presence",
      "Reusable formats and narratives",
      "Visual and tonal coherence over time",
    ],
  },
  {
    area: "md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]",
    num: "03",
    title: "Performance Analytics",
    points: [
      "Engagement, retention, and format-level insights",
      "Identify what works — and what doesn’t",
      "Inform future creative decisions",
    ],
  },
  {
    area: "md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]",
    num: "04",
    title: "Creative Feedback Loop",
    points: [
      "Analytics feed directly into ideation",
      "Better decisions with every iteration",
      "Less guesswork, more signal",
    ],
  },
  {
    area: "md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]",
    num: "05",
    title: "Always-On Optimization",
    points: [
      "Real-time A/B testing of hooks and visuals",
      "Dynamic asset replacement based on performance",
      "Continuous improvement engine",
    ],
  },
];

const GridItem = ({ area, num, title, points }) => {
  return (
    <li className={`min-h-[14rem] list-none ${area}`}>
      <CardSpotlight className="h-full w-full p-6 md:p-8 bg-black/40 border-white/5 backdrop-blur-sm hover:border-white/10 transition-colors">
        <div className="relative z-20 h-full flex flex-col justify-between gap-6">
          <div className="flex flex-col gap-4">
             <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-2">
                <span className="text-xs text-white">{num}</span>
             </div>
            
            <div className="space-y-4">
              <h3 className="font-display text-xl font-semibold text-white md:text-2xl">
                {title}
              </h3>
               <ul className="space-y-2 text-sm text-slate-400">
                {points.map((point, i) => (
                  <li key={i} className="flex gap-2 leading-relaxed text-sm">
                    <span className="mt-1.5 h-1 w-1 rounded-full bg-white/40 shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </CardSpotlight>
    </li>
  );
};

const BentoGrid = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-28 relative">
       {/* Background Glow */}
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none z-0"></div>

      <div className="max-w-3xl mb-20 relative z-10">
        <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-6">
          Intelligence & Automation
        </h2>

        <p className="text-slate-400 text-lg leading-relaxed mb-6">
          Great content only works if it’s seen — consistently.
        </p>

        <p className="text-slate-400 leading-relaxed max-w-2xl">
          Our workflows extend beyond production into{" "}
          <span className="text-white font-medium">
            automated publishing and performance intelligence
          </span>
          , allowing brands to operate content as a system rather than a one-off effort.
        </p>
      </div>

      <ul className="grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-3 lg:gap-4 xl:max-h-[34rem] xl:grid-rows-2 relative z-10">
        {bentoItems.map((item, idx) => (
          <GridItem key={idx} {...item} />
        ))}
      </ul>
    </section>
  );
};

export default BentoGrid;
