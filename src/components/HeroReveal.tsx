import React from "react";
import Link from "next/link";

export default function HeroReveal() {
  return (
    <div className="relative z-10 w-full max-w-[840px] mx-auto px-6 text-center mt-20 flex flex-col items-center">
      <h1 className="text-[36px] md:text-[64px] font-heading text-white leading-[1.05] tracking-tight drop-shadow-md">
        PT Wecon: Indonesia&apos;s Trusted{' '}<br className="hidden md:block" />
        Water Engineering Consultant{' '}<br className="hidden md:block" />
        Since 1973
      </h1>
      
      <p className="mt-6 text-[15px] md:text-[17px] text-white/90 leading-[1.7] max-w-[650px] font-sans drop-shadow">
        Beyond Technologies. For over 50 years, we have{' '}<br className="hidden md:block" />
        partnered with government agencies and industries{' '}<br className="hidden md:block" />
        to design, supervise, and certify water infrastructure — from{' '}<br className="hidden md:block" />
        Southeast Asia&apos;s longest dam to nationwide hydropower plants.
      </p>
      
      <div className="mt-8 flex flex-wrap justify-center items-center gap-4">
        <Link href="#contact" className="bg-white text-black px-6 py-3 rounded-md font-mono font-bold text-[10px] tracking-widest uppercase hover:bg-white/90 transition-colors flex items-center gap-2">
          WORK WITH US <span>↗</span>
        </Link>
        <Link href="#services" className="bg-transparent text-white border border-white/30 px-6 py-3 rounded-md font-mono font-bold text-[10px] tracking-widest uppercase hover:bg-white/10 transition-colors">
          OUR SERVICES
        </Link>
      </div>
    </div>
  );
}
