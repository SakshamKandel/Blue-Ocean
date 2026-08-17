"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FileText,
  Lightbulb,
  Layers,
  Smile,
} from "lucide-react";

export default function OurApproachSection() {
  const steps = [
    {
      num: "01",
      title: "Consultation",
      desc: "Initial engagement to understand the business model, leadership team, and commercial market opportunity.",
      icon: <FileText className="w-7 h-7 text-white stroke-[1.75]" />,
    },
    {
      num: "02",
      title: "Strategy",
      desc: "Forensic evaluation of financial sustainability, competitive positioning, and growth potential.",
      icon: <Lightbulb className="w-7 h-7 text-white stroke-[1.75]" />,
    },
    {
      num: "03",
      title: "Implementation",
      desc: "Disciplined capital deployment, active partnership, operational strengthening, and capability expansion.",
      icon: <Layers className="w-7 h-7 text-white stroke-[1.75]" />,
    },
    {
      num: "04",
      title: "Final Result",
      desc: "Sustainable long-term value creation, responsible growth, and compounding outcomes across business cycles.",
      icon: <Smile className="w-7 h-7 text-white stroke-[1.75]" />,
    },
  ];

  const criteriaList = [
    { num: "01", title: "Business Model & Opportunity", desc: "Viability of revenue streams, unit economics, and market addressability." },
    { num: "02", title: "Leadership Capability", desc: "Integrity, operational track record, and management depth." },
    { num: "03", title: "Long-Term Growth", desc: "Scalability, compounding potential, and market resilience." },
    { num: "04", title: "Competitive Positioning", desc: "Defensible moats, pricing power, and differentiated proposition." },
    { num: "05", title: "Operational Strength", desc: "Execution efficiency, human capital, and sound risk management." },
    { num: "06", title: "Financial Sustainability", desc: "Forensic balance sheet health, verified cash flows, and audit integrity." },
    { num: "07", title: "Strategic Alignment", desc: "Shared long-term horizon and mutual value creation objectives." },
    { num: "08", title: "Responsible Governance", desc: "Ethical standards, regulatory compliance, and community impact." },
  ];

  return (
    <section id="approach" className="py-10 lg:py-14 bg-[#fdfdfd] text-slate-900 border-b border-slate-200/80 relative overflow-hidden">
      {/* FAINT WATERMARK TEXT IN BACKGROUND */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 select-none pointer-events-none text-slate-100 font-black text-5xl sm:text-7xl lg:text-8xl tracking-[0.15em] uppercase opacity-50 z-0">
        WORK PROCESS
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 relative z-10">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="flex items-center justify-center gap-1.5 text-xs font-black text-[#001035] uppercase tracking-wider mb-2">
            <span className="text-[#2563eb] text-base leading-none">✴</span>
            <span>OUR WORK PROCESS</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-[2.35rem] font-extrabold text-[#001035] tracking-tight leading-[1.15]">
            Our Proven <span className="text-[#2563eb]">Work Process</span>
          </h2>
        </div>

        {/* 4-STEP CONNECTED TIMELINE */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4 relative mb-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="flex flex-col items-center text-center relative group cursor-pointer"
            >
              {/* CIRCULAR ICON WITH STEP BADGE + CONNECTING LINE */}
              <div className="flex items-center justify-center w-full relative mb-5">
                
                {/* Horizontal Connecting Line to Next Step (Desktop only) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute left-1/2 w-full top-1/2 -translate-y-1/2 z-0">
                    <div className="w-full h-[1.5px] bg-slate-300 mx-auto" />
                  </div>
                )}

                {/* ANIMATED CONCENTRIC CIRCLE WRAPPER */}
                <div className="relative z-10 flex items-center justify-center w-24 h-24 sm:w-26 sm:h-26">
                  
                  {/* Outer Dotted Ring + Halo (Appears smoothly on hover, perfectly centered) */}
                  <div className="absolute inset-0 rounded-full bg-sky-100/90 border-2 border-dashed border-blue-400/90 opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100 transition-all duration-400 ease-out flex items-center justify-center pointer-events-none group-hover:rotate-90" />

                  {/* Inner Core Blue Gradient Circle (Centrally Locked) */}
                  <div className="relative w-18 h-18 sm:w-20 sm:h-20 rounded-full bg-gradient-to-tr from-[#2563eb] via-[#1d4ed8] to-[#38bdf8] text-white shadow-xs flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                    
                    {/* Icon */}
                    <div className="transform group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-300 ease-out">
                      {step.icon}
                    </div>

                    {/* Step Number Badge */}
                    <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-[#001035] text-white text-[10px] font-black border-2 border-white flex items-center justify-center shadow-xs">
                      {step.num}
                    </div>
                  </div>

                </div>

              </div>

              {/* Step Title */}
              <h3 className="text-base sm:text-lg font-bold text-[#001035] group-hover:text-[#2563eb] transition-colors duration-200 tracking-tight mb-1.5">
                {step.title}
              </h3>

              {/* Step Description */}
              <p className="text-slate-500 text-xs leading-relaxed max-w-xs group-hover:text-slate-700 transition-colors duration-200">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CLEAN INSTITUTIONAL 8 EVALUATION DIMENSIONS (Simple, Bespoke & Human) */}
        <div className="pt-8 border-t border-slate-200/80">
          <div className="max-w-3xl mb-6">
            <h4 className="text-sm sm:text-base font-extrabold text-[#001035] uppercase tracking-wider mb-1">
              8 Core Investment Assessment Dimensions
            </h4>
            <p className="text-xs text-slate-500 leading-relaxed">
              Every opportunity undergoes careful appraisal across fundamental dimensions before strategic capital is committed:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {criteriaList.map((item) => (
              <div
                key={item.title}
                className="p-4 rounded-lg bg-white border border-slate-200/80 hover:border-blue-400 transition-colors"
              >
                <div className="text-xs font-mono font-bold text-[#2563eb] mb-1">
                  {item.num}.
                </div>
                <h5 className="text-xs font-bold text-[#001035] leading-snug mb-1">
                  {item.title}
                </h5>
                <p className="text-[11px] text-slate-500 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
