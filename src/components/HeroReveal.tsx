"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function HeroReveal() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Staggered delay for each child
        delayChildren: 0.1,
      },
    },
  };

  // Premium Framer-like ease
  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } 
    },
  };

  return (
    <motion.div 
      variants={container} 
      initial="hidden" 
      animate="show" 
      className="relative z-10 w-full max-w-[840px] mx-auto px-6 text-center mt-20 flex flex-col items-center"
    >
      <motion.h1 variants={item} className="text-[44px] md:text-[64px] font-heading text-white leading-[1.05] tracking-tight">
        Indonesia&apos;s Trusted Water{' '}<br className="hidden md:block" />
        Resources Engineering{' '}<br className="hidden md:block" />
        Consultant Since 1973
      </motion.h1>
      
      <motion.p variants={item} className="mt-6 text-[15px] md:text-[17px] text-white/80 leading-[1.7] max-w-[650px] font-sans">
        Beyond Technologies. For more than 50 years, we have{' '}<br className="hidden md:block" />
        partnered with Indonesian government agencies and industries{' '}<br className="hidden md:block" />
        to design, supervise, and certify water infrastructure — from{' '}<br className="hidden md:block" />
        Southeast Asia&apos;s longest dam to nationwide hydropower plants.
      </motion.p>
      
      <motion.div variants={item} className="mt-8 flex flex-wrap justify-center items-center gap-4">
        <Link href="#contact" className="bg-white text-black px-6 py-3 rounded-md font-mono font-bold text-[10px] tracking-widest uppercase hover:bg-white/90 transition-colors flex items-center gap-2">
          WORK WITH US <span>↗</span>
        </Link>
        <Link href="#services" className="bg-transparent text-white border border-white/30 px-6 py-3 rounded-md font-mono font-bold text-[10px] tracking-widest uppercase hover:bg-white/10 transition-colors">
          OUR SERVICES
        </Link>
      </motion.div>
    </motion.div>
  );
}
