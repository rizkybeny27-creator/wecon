"use client";

import { useState } from 'react';
import Image from 'next/image';

const processSteps = [
  {
    id: 1,
    title: "Discovery & Site Assessment",
    phase: "PHASE 01",
    desc: "Every project begins with data collection and field investigation — topographic, hydrological, and geotechnical surveys that define site conditions, risks, and design constraints before a single drawing is made.",
    image: "/process-1.jpg",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10 10h4"/><path d="M19 7V4a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v3"/><path d="M20 21a2 2 0 0 0 2-2v-3.851c0-1.39-2-2.962-2-4.829V8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v11a2 2 0 0 0 2 2z"/><path d="M4 21a2 2 0 0 1-2-2v-3.851c0-1.39 2-2.962 2-4.829V8a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v11a2 2 0 0 1-2 2z"/><path d="M9 7V4a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v3"/>
      </svg>
    ),
  },
  {
    id: 2,
    title: "Engineering Design",
    phase: "PHASE 02",
    desc: "Our engineers translate field data into detailed, construction-ready designs — for dams, irrigation systems, hydropower infrastructure, and supporting facilities — reviewed against national safety and regulatory standards.",
    image: "/process-2.jpg",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>
      </svg>
    ),
  },
  {
    id: 3,
    title: "Construction Supervision",
    phase: "PHASE 03",
    desc: "On-site supervision teams monitor construction quality, schedule, and cost, coordinating directly with contractors and project owners to keep execution aligned with the approved design.",
    image: "/process-3.jpg",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 21h18"/><path d="M9 8h1"/><path d="M9 12h1"/><path d="M9 16h1"/><path d="M14 8h1"/><path d="M14 12h1"/><path d="M14 16h1"/><path d="M5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16"/>
      </svg>
    ),
  },
  {
    id: 4,
    title: "Certification & Handover",
    phase: "PHASE 04",
    desc: "Final technical review, dam safety certification, and permit processing ensure the completed infrastructure meets regulatory requirements before formal handover to the owner.",
    image: "/process-4.jpg",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m11 17 2 2a1 1 0 1 0 3-3"/><path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4"/><path d="m21 3 1 11h-2"/><path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3z"/><path d="M3 4h8"/>
      </svg>
    ),
  },
];

export default function ProcessSection() {
  const [activeTab, setActiveTab] = useState(1);
  const activeData = processSteps.find((step) => step.id === activeTab)!;

  return (
    <div className="bg-[#212121] rounded-[24px] p-6 md:p-12 border border-white/[0.04]">
      {/* Tabs */}
      <div role="tablist" aria-label="Process Steps" className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-16">
        {processSteps.map((step) => {
          const isActive = activeTab === step.id;
          return (
            <button
              key={step.id}
              role="tab"
              aria-selected={isActive}
              aria-controls={`panel-${step.id}`}
              id={`tab-${step.id}`}
              onClick={() => setActiveTab(step.id)}
              className={`flex items-center gap-3 px-6 py-4 rounded-xl text-[15px] font-sans transition-colors text-left ${
                isActive 
                  ? "bg-[#181818] text-white" 
                  : "bg-transparent text-white/40 hover:text-white/70"
              }`}
            >
              <span className={isActive ? "opacity-100" : "opacity-70"}>
                {step.icon}
              </span>
              Step {step.id}
            </button>
          );
        })}
      </div>

      {/* Content */}
      <div 
        id={`panel-${activeData.id}`} 
        role="tabpanel" 
        aria-labelledby={`tab-${activeData.id}`} 
        className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center min-h-[400px]"
      >
        <div>
          <p className="text-[11px] font-mono tracking-widest text-white/50 uppercase mb-8 pb-5 border-b border-white/[0.06]">
            {activeData.phase}
          </p>
          <h3 className="text-[32px] md:text-[38px] font-heading mb-6 text-white tracking-tight leading-[1.1]">
            {activeData.title}
          </h3>
          <p className="text-[#a3a3a3] leading-[1.7] text-[16px] max-w-[460px]">
            {activeData.desc}
          </p>
        </div>
        <div className="w-full aspect-[4/3] rounded-[20px] overflow-hidden relative border border-white/[0.04]">
          <Image 
            key={activeData.id}
            src={activeData.image} 
            alt={activeData.title} 
            fill
            className="object-cover animate-fade-in" 
          />
        </div>
      </div>
    </div>
  );
}
