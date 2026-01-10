import React from "react";

const Footer = () => {
  return (
    <footer className="relative border-t border-white/10 bg-white/5 backdrop-blur-md pt-20 pb-10 overflow-hidden">
      {/* Inline Animations */}
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes pulseSoft {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 1; }
        }

        @keyframes shimmer {
          0% { background-position: -200%; }
          100% { background-position: 200%; }
        }

        .fade-up {
          animation: fadeUp 0.8s ease-out forwards;
        }

        .fade-up-delay {
          animation: fadeUp 0.8s ease-out forwards;
          animation-delay: 0.3s;
        }

        .pulse-soft {
          animation: pulseSoft 3s ease-in-out infinite;
        }

        .shimmer-text {
          background: linear-gradient(
            90deg,
            rgba(255,255,255,0.3),
            rgba(255,255,255,0.7),
            rgba(255,255,255,0.3)
          );
          background-size: 200%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shimmer 6s linear infinite;
        }
      `}</style>

      {/* Ambient glow */}
      <div className="pointer-events-none absolute inset-x-0 -top-20 h-40 bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-transparent blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start gap-10 mb-16">
          
          {/* Brand */}
          <div className="fade-up">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-4 h-4 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-400 pulse-soft"></div>
              <span className="font-semibold text-white tracking-tight">
                Nebula Films
              </span>
            </div>
            <p className="text-xs text-white/60">© 2026 Nebula Films Inc.</p>
          </div>

          {/* Links */}
          <div className="flex gap-12 md:gap-24 flex-wrap">
            {[
              {
                title: "Explore",
                links: ["Work", "Process", "About"],
              },
              {
                title: "Connect",
                links: ["Twitter", "Instagram", "LinkedIn"],
              },
              {
                title: "Legal",
                links: ["Privacy", "Terms"],
              },
            ].map((col, idx) => (
              <div key={idx} className="fade-up">
                <h4 className="text-white text-xs font-semibold uppercase tracking-wider mb-4">
                  {col.title}
                </h4>
                <ul className="space-y-3 text-xs text-white/60">
                  {col.links.map((link, i) => (
                    <li key={i}>
                      <a
                        href="#"
                        className="
                          relative inline-block transition-all duration-300
                          hover:text-blue-400 hover:translate-x-1
                          after:absolute after:left-0 after:-bottom-1
                          after:h-px after:w-0 after:bg-blue-400
                          after:transition-all after:duration-300
                          hover:after:w-full
                        "
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom tagline */}
        <div className="text-center fade-up-delay">
          <p className="text-[10px] uppercase tracking-widest shimmer-text">
            Designed for the future
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
