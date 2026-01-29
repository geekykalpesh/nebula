"use client";
import React from "react";
import { SparklesCore } from "@/components/ui/sparkles";

import { useRef } from "react";
import { useMotionValue, useTransform, motion } from "motion/react";

function Letter({ char, mouseX }) {
  const ref = useRef(null);

  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const scale = useTransform(distance, [-200, 0, 200], [1, 1.3, 1]);
  const y = useTransform(distance, [-200, 0, 200], [0, -20, 0]);
  const opacity = useTransform(distance, [-200, 0, 200], [0.8, 1, 0.8]);

  return (
    <motion.span
      ref={ref}
      style={{ scale, y, opacity }}
      className="inline-block cursor-default"
    >
      {char === " " ? "\u00A0" : char}
    </motion.span>
  );
}

export default function SparklesPreview() {
  const mouseX = useMotionValue(Infinity);

  return (
    <div 
      className="h-[20rem] w-full bg-transparent flex flex-col items-center justify-center overflow-hidden rounded-md border border-white/10"
      onMouseMove={(e) => mouseX.set(e.clientX)}
      onMouseLeave={() => mouseX.set(Infinity)}
    >
      <h1 className="md:text-7xl text-3xl lg:text-9xl font-bold text-center text-white relative z-20 select-none flex items-center justify-center gap-1">
        {"Nebula Films".split("").map((char, index) => (
          <Letter key={index} char={char} mouseX={mouseX} />
        ))}
      </h1>
      <div className="w-[40rem] h-40 relative">
        {/* Gradients */}
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

        {/* Core component */}
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />

        {/* Radial Gradient to prevent sharp edges */}
        <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
      </div>
    </div>
  );
}
