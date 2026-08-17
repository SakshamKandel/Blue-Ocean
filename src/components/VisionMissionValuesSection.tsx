"use client";

import React from "react";
import { motion } from "framer-motion";
import { Eye, Rocket } from "lucide-react";

export default function VisionMissionValuesSection() {
  const values = [
    {
      num: "01",
      title: "Integrity & Trust",
      desc: "Trust, transparency, and responsible conduct form the foundation of our relationships.",
    },
    {
      num: "02",
      title: "Long-Term Thinking",
      desc: "We prioritise sustainable value creation and compounding over short-term outcomes.",
    },
    {
      num: "03",
      title: "Active Collaboration",
      desc: "We believe stronger businesses and resilient models are created through effective partnerships.",
    },
    {
      num: "04",
      title: "Forensic Discipline",
      desc: "Investment decisions are approached through careful line-by-line evaluation and commercial understanding.",
    },
    {
      num: "05",
      title: "Meaningful Progress",
      desc: "We support people, ideas, and ambitious businesses capable of creating sustainable advancement.",
    },
    {
      num: "06",
      title: "Responsible Investment",
      desc: "Environmental awareness, sound governance, and ethical business practices guide our allocations.",
    },
  ];

  return (
    <section id="values" className="py-10 lg:py-14 bg-white text-slate-900 border-b border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
        
        {/* TOP SECTION: VISION & MISSION CARDS (Boxy rounded-xl) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          
          {/* VISION CARD */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="p-6 sm:p-8 rounded-xl bg-[#04152d] text-white shadow-md border border-blue-900/60 flex flex-col justify-between"
          >
            <div>
              <div className="w-10 h-10 rounded-lg bg-white/10 text-[#38bdf8] flex items-center justify-center mb-4">
                <Eye className="w-5 h-5" />
              </div>
              <span className="text-xs uppercase tracking-widest font-black text-[#38bdf8] block mb-1.5">
                Our Vision
              </span>
              <h3 className="text-lg sm:text-xl font-bold tracking-tight text-white leading-snug">
                To become a trusted investment company recognised for identifying meaningful opportunities and contributing to sustainable business growth in Nepal and beyond.
              </h3>
            </div>
            <div className="pt-4 mt-5 border-t border-white/10 text-[11px] text-slate-400 font-semibold uppercase tracking-wider">
              Strategic Horizon &middot; National &amp; Regional Impact
            </div>
          </motion.div>

          {/* MISSION CARD */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.08 }}
            className="p-6 sm:p-8 rounded-xl bg-gradient-to-br from-[#0284c7] via-[#2563eb] to-[#1d4ed8] text-white shadow-md flex flex-col justify-between"
          >
            <div>
              <div className="w-10 h-10 rounded-lg bg-white/20 text-white flex items-center justify-center mb-4">
                <Rocket className="w-5 h-5" />
              </div>
              <span className="text-xs uppercase tracking-widest font-black text-blue-100 block mb-1.5">
                Our Mission
              </span>
              <h3 className="text-lg sm:text-xl font-bold tracking-tight text-white leading-snug">
                To create long-term value through disciplined investment, strategic partnerships, responsible decision-making, and active collaboration with ambitious businesses and entrepreneurs.
              </h3>
            </div>
            <div className="pt-4 mt-5 border-t border-white/20 text-[11px] text-blue-100 font-semibold uppercase tracking-wider">
              Disciplined Capital &middot; Active Partnership
            </div>
          </motion.div>

        </div>

        {/* SECTION HEADER */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="flex items-center justify-center gap-1.5 text-xs font-black text-[#001035] uppercase tracking-wider mb-2">
            <span className="text-[#2563eb] text-base leading-none">✴</span>
            <span>WHY CHOOSE US</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-[2.35rem] font-extrabold text-[#001035] tracking-tight leading-tight mb-2">
            Why Choose Us
          </h2>
          <p className="text-slate-500 text-xs sm:text-sm">
            Building a thoughtful, knowledge-driven investment company founded on institutional rigor
          </p>
        </div>

        {/* 6-POINT GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-8">
          {values.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.04 }}
              className="flex flex-col"
            >
              <div className="flex items-baseline gap-2 mb-1.5">
                <span className="text-base font-black text-[#2563eb] tracking-tight shrink-0">
                  {item.num} &mdash;
                </span>
                <h3 className="text-base font-bold text-[#001035] tracking-tight">
                  {item.title}
                </h3>
              </div>

              <p className="text-slate-500 text-xs sm:text-[13px] leading-relaxed pl-8">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
