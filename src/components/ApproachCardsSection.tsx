"use client";

import React from "react";
import { motion } from "framer-motion";
import { Briefcase, TrendingUp, Handshake } from "lucide-react";

export default function ApproachCardsSection() {
  return (
    <section className="py-10 lg:py-14 bg-[#f8fafc] text-slate-900 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
        
        {/* SECTION CATEGORY TAG */}
        <div className="flex items-center gap-1.5 text-xs font-black text-[#001035] uppercase tracking-wider mb-6">
          <span className="text-[#2563eb] text-base leading-none">✴</span>
          <span>OUR APPROACH</span>
        </div>

        {/* 3 DISTINCT CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          
          {/* CARD 1: WHITE CARD */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="p-7 rounded-xl bg-white border border-slate-200/90 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group"
          >
            <div>
              <div className="w-12 h-12 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center mb-5 text-[#2563eb] group-hover:scale-105 transition-transform">
                <Briefcase className="w-6 h-6 stroke-[1.75]" />
              </div>
              <h3 className="text-lg font-bold text-[#001035] leading-snug mb-2">
                Next-Gen Strategic Investments
              </h3>
              <p className="text-slate-500 text-xs sm:text-[13px] leading-relaxed mb-6">
                Evaluating companies with disciplined underwriting, verified unit economics, and scalable market moats.
              </p>
            </div>

            {/* Blue Rectangle Button with White Text */}
            <div>
              <a
                href="#what-we-do"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg bg-[#2563eb] hover:bg-blue-700 text-white text-xs font-bold shadow-xs hover:scale-105 transition-all"
              >
                <span>Explore More</span>
                <span className="text-xs font-black text-white">&gt;</span>
              </a>
            </div>
          </motion.div>

          {/* CARD 2: VIBRANT SKY-BLUE GRADIENT CARD */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.08 }}
            className="relative p-7 rounded-xl bg-gradient-to-br from-[#38bdf8] via-[#0ea5e9] to-[#0284c7] text-white shadow-md hover:shadow-lg transition-all flex flex-col justify-between overflow-hidden group"
          >
            {/* Concentric rings watermark */}
            <div className="absolute -bottom-16 -right-16 w-56 h-56 rounded-full border-[10px] border-white/15 pointer-events-none" />
            <div className="absolute -bottom-28 -right-28 w-80 h-80 rounded-full border-[12px] border-white/10 pointer-events-none" />

            <div className="relative z-10">
              <div className="w-12 h-12 rounded-lg bg-white/20 backdrop-blur-xs flex items-center justify-center mb-5 text-white group-hover:scale-105 transition-transform">
                <TrendingUp className="w-6 h-6 stroke-[1.75]" />
              </div>
              <h3 className="text-lg font-bold text-white leading-snug mb-2">
                Growth &amp; Value Creation
              </h3>
              <p className="text-sky-50 text-xs sm:text-[13px] leading-relaxed mb-6">
                Active partnership to strengthen operations, optimize margins, and expand institutional capabilities.
              </p>
            </div>

            {/* Blue Rectangle Button with White Text */}
            <div className="relative z-10 pt-2">
              <a
                href="#approach"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg bg-[#001c40] hover:bg-[#002b61] text-white text-xs font-bold shadow-xs hover:scale-105 transition-all"
              >
                <span>Explore More</span>
                <span className="text-xs font-black text-[#38bdf8]">&gt;</span>
              </a>
            </div>
          </motion.div>

          {/* CARD 3: DARK NAVY CARD */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.16 }}
            className="p-7 rounded-xl bg-[#00142e] text-white border border-blue-950/80 shadow-md hover:shadow-lg transition-all flex flex-col justify-between group"
          >
            <div>
              <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center mb-5 text-[#38bdf8] group-hover:scale-105 transition-transform">
                <Handshake className="w-6 h-6 stroke-[1.5]" />
              </div>
              <h3 className="text-lg font-bold text-white leading-snug mb-2">
                Business Process &amp; Partnerships
              </h3>
              <p className="text-slate-300 text-xs sm:text-[13px] leading-relaxed mb-6">
                Aligning long-term incentives with founders, leadership teams, and strategic co-investors.
              </p>
            </div>

            {/* Blue Rectangle Button with White Text */}
            <div className="pt-2">
              <a
                href="#approach"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg bg-[#2563eb] hover:bg-blue-700 text-white text-xs font-bold shadow-xs hover:scale-105 transition-all"
              >
                <span>Explore More</span>
                <span className="text-xs font-black text-white">&gt;</span>
              </a>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
