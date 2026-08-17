"use client";

import React from "react";
import { motion } from "framer-motion";

export default function ResponsibleInvestmentSection() {
  return (
    <section id="why-us" className="py-10 lg:py-14 bg-[#fdfdfd] text-slate-900 border-b border-slate-200/80 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
        
        {/* TOP INTRO BANNER */}
        <div className="mb-10 max-w-3xl">
          <div className="flex items-center gap-1.5 text-xs font-black text-[#001035] uppercase tracking-wider mb-2">
            <span className="text-[#2563eb] text-base leading-none">✴</span>
            <span>RESPONSIBLE INVESTMENT</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-[2.35rem] font-extrabold text-[#001035] tracking-tight leading-[1.15] mb-3">
            Growth with responsibility
          </h2>

          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-3 font-medium">
            At Blue Ocean, we believe sustainable business performance and responsible investment should work together.
          </p>

          <p className="text-slate-500 text-xs sm:text-[13px] leading-relaxed">
            Environmental awareness, social responsibility, sound governance, ethical business practices, and long-term sustainability are important considerations in our investment approach. We seek to support businesses that recognise their responsibilities to customers, employees, stakeholders, communities, and the environments in which they operate.
          </p>
        </div>

        {/* BOTTOM CREDIBILITY BANNER (Big unboxed 100% CA-Led style) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="relative rounded-xl p-6 sm:p-10 bg-gradient-to-r from-[#e0f2fe]/70 via-[#f0f9ff] to-[#e0f2fe]/50 border border-sky-100 shadow-xs overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            {/* LEFT: MASSIVE BIGGER 100% CA-LED STAT (No box, big clean bold typography) */}
            <div className="lg:col-span-4 flex flex-col items-center lg:items-start justify-center text-center lg:text-left border-b lg:border-b-0 lg:border-r border-sky-200/80 pb-6 lg:pb-0 lg:pr-8">
              <div className="text-6xl sm:text-7xl lg:text-8xl font-black text-[#2563eb] tracking-tighter leading-none mb-1">
                100%
              </div>
              <div className="text-lg sm:text-xl font-black text-[#001035] uppercase tracking-wider leading-tight">
                CA-Led <br className="hidden lg:inline" /> Governance
              </div>
              <p className="text-[11px] text-slate-500 font-semibold mt-2">
                Underwritten by Chartered Accountants under strict fiduciary standards.
              </p>
            </div>

            {/* RIGHT: 3 STAT COUNTERS */}
            <div className="lg:col-span-8 flex flex-col justify-between">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-6">
                
                {/* STAT 1 */}
                <div>
                  <div className="text-2xl sm:text-3xl font-black text-[#2563eb] tracking-tight mb-0.5">
                    100%
                  </div>
                  <h4 className="text-xs font-extrabold text-[#001035] mb-1">
                    Leadership Depth
                  </h4>
                  <p className="text-slate-500 text-[11px] leading-relaxed">
                    Senior underwriting decisions made under strict Chartered Accountant fiduciary standards.
                  </p>
                </div>

                {/* STAT 2 */}
                <div>
                  <div className="text-2xl sm:text-3xl font-black text-[#2563eb] tracking-tight mb-0.5">
                    8+
                  </div>
                  <h4 className="text-xs font-extrabold text-[#001035] mb-1">
                    Assessment Pillars
                  </h4>
                  <p className="text-slate-500 text-[11px] leading-relaxed">
                    Systematic due diligence across business models, competitive moats, and financial integrity.
                  </p>
                </div>

                {/* STAT 3 */}
                <div>
                  <div className="text-2xl sm:text-3xl font-black text-[#2563eb] tracking-tight mb-0.5">
                    2+
                  </div>
                  <h4 className="text-xs font-extrabold text-[#001035] mb-1">
                    Asset Classes Today
                  </h4>
                  <p className="text-slate-500 text-[11px] leading-relaxed">
                    Public equities &amp; private placements today, real estate expansion on the horizon.
                  </p>
                </div>

              </div>

              {/* Bottom Tagline */}
              <div className="pt-3 border-t border-sky-200/60 text-xs font-semibold text-slate-600">
                At Blue Ocean, we believe sustainable business performance and responsible investment should work together.
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
