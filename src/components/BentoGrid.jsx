import React from "react";

const bentoItems = [
  {
    num: "01",
    title: "Automated Publishing",
    points: [
      "Scheduled posting across social platforms",
      "Format-aware publishing (Reels, Shorts, YouTube)",
      "No manual handling or last-minute uploads",
    ],
  },
  {
    num: "02",
    title: "Content Consistency",
    points: [
      "Always-on brand presence",
      "Reusable formats and narratives",
      "Visual and tonal coherence over time",
    ],
  },
  {
    num: "03",
    title: "Performance Analytics",
    points: [
      "Engagement, retention, and format-level insights",
      "Identify what works — and what doesn’t",
      "Inform future creative decisions",
    ],
  },
  {
    num: "04",
    title: "Creative Feedback Loop",
    points: [
      "Analytics feed directly into ideation",
      "Better decisions with every iteration",
      "Less guesswork, more signal",
    ],
  },
];

const BentoGrid = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-28">
      {/* Intro */}
      <div className="max-w-3xl mb-20">
        <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-6">
          Bento Box
        </h2>

        <p className="text-slate-400 text-lg leading-relaxed mb-6">
          Great content only works if it’s seen — consistently.
        </p>

        <p className="text-slate-400 leading-relaxed">
          Our workflows extend beyond production into{" "}
          <span className="text-white font-medium">
            automated publishing and performance intelligence
          </span>
          , allowing brands to operate content as a system rather than a one-off effort.
        </p>
      </div>

      {/* Bento Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {bentoItems.map((item, idx) => (
          <div
            key={idx}
            className="
              relative overflow-hidden rounded-3xl
              bg-white/[0.025] backdrop-blur-xl
              border border-white/[0.06]
              p-8 min-h-[260px] group
            "
          >
            {/* Border Beam */}
            <span className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition duration-700">
              <span className="absolute inset-[-1px] rounded-3xl bg-[conic-gradient(from_0deg,transparent,rgba(255,255,255,0.35),transparent)] animate-border-beam" />
            </span>

            {/* Content */}
            <div className="relative z-10">
              <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-6">
                <span className="text-xs text-white">{item.num}</span>
              </div>

              <h3 className="text-lg font-medium text-white mb-4">
                {item.title}
              </h3>

              <ul className="space-y-2 text-sm text-slate-400">
                {item.points.map((point, i) => (
                  <li key={i} className="flex gap-2 leading-relaxed">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-white/40 shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            {/* Subtle inner glow */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition duration-700" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default BentoGrid;
