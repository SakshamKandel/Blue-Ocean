"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FileText,
  Lightbulb,
  Layers,
  Smile,
  Briefcase,
  UserCheck,
  TrendingUp,
  Target,
  Cpu,
  BarChart4,
  GitBranch,
  ShieldCheck,
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
    { num: "01", icon: Briefcase, title: "Business Model & Opportunity", desc: "Viability of revenue streams and market size." },
    { num: "02", icon: UserCheck, title: "Leadership Capability", desc: "Integrity, track record, and execution depth." },
    { num: "03", icon: TrendingUp, title: "Long-Term Growth", desc: "Scalability and compounding over market cycles." },
    { num: "04", icon: Target, title: "Competitive Positioning", desc: "Moats, defensibility, and market proposition." },
    { num: "05", icon: Cpu, title: "Operational Strength", desc: "Process efficiency and human capital." },
    { num: "06", icon: BarChart4, title: "Financial Sustainability", desc: "Forensic balance sheet health & audit integrity." },
    { num: "07", icon: GitBranch, title: "Strategic Alignment", desc: "Mutual value creation and shared long-term horizon." },
    { num: "08", icon: ShieldCheck, title: "Responsible Practices", desc: "Environmental and ethical governance." },
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

                {/* ANIMATED CIRCLE WRAPPER */}
                <div className="relative z-10 flex items-center justify-center">
                  
                  {/* Rotating Dashed Orbital Radar Ring on Hover */}
                  <div className="absolute -inset-2 rounded-full border-2 border-dashed border-blue-500/0 group-hover:border-blue-500/60 group-hover:rotate-180 transition-all duration-700 pointer-events-none" />

                  {/* Expanding Pulse Ripple Wave on Hover */}
                  <div className="absolute inset-0 rounded-full bg-blue-400/0 group-hover:bg-blue-400/25 group-hover:scale-125 transition-all duration-500 ease-out pointer-events-none" />

                  {/* Main Circle */}
                  <div className="relative w-18 h-18 sm:w-20 sm:h-20 rounded-full bg-[#2563eb] group-hover:bg-gradient-to-tr group-hover:from-blue-700 group-hover:to-cyan-400 flex items-center justify-center transition-all duration-300 transform group-hover:-translate-y-1">
                    
                    {/* Icon */}
                    <div className="transform group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-300 ease-out">
                      {step.icon}
                    </div>

                    {/* Step Badge */}
                    <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-[#001035] group-hover:bg-[#00081a] text-white text-[10px] font-black border-2 border-white flex items-center justify-center transition-transform duration-300 transform group-hover:scale-110 group-hover:rotate-12">
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

        {/* DETAILED 8 EVALUATION CRITERIA MATRIX (Boxy rounded-xl) */}
        <div className="p-6 sm:p-8 rounded-xl bg-white border border-slate-200/90 shadow-xs">
          <div className="max-w-3xl mb-6">
            <h4 className="text-base font-bold text-[#001035] tracking-tight mb-1">
              Our 8 Investment Evaluation Dimensions
            </h4>
            <p className="text-xs text-slate-500 leading-relaxed">
              Every opportunity undergoes careful appraisal across fundamental dimensions before strategic capital is committed.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
            {criteriaList.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="p-3.5 rounded-lg bg-slate-50 border border-slate-100 flex items-start gap-3 hover:bg-blue-50/50 hover:border-blue-200 transition-colors"
                >
                  <div className="w-7 h-7 rounded-md bg-blue-100/80 text-[#2563eb] flex items-center justify-center shrink-0 mt-0.5">
                    <Icon className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-[#001035] leading-snug">{item.title}</h5>
                    <p className="text-[11px] text-slate-500 mt-0.5 leading-tight">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
