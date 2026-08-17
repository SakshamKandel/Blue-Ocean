"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Star, ShieldCheck, CheckCircle2 } from "lucide-react";

export default function AboutSection() {
  const highlights = [
    "Disciplined strategic underwriting and governance",
    "Active partnership with leadership teams",
    "Long-term value creation over short-term cycles",
    "Commitment to ethical & sustainable business practices",
  ];

  return (
    <section id="about" className="py-10 lg:py-14 bg-white text-slate-900 border-b border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* LEFT: BOXY PHOTO COLLAGE */}
          <div className="lg:col-span-6 relative">
            <div className="grid grid-cols-2 gap-4">
              
              {/* Image 1 */}
              <div className="relative h-64 sm:h-72 rounded-xl overflow-hidden shadow-xs border border-slate-200">
                <Image
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80"
                  alt="Blue Ocean Corporate Office"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 300px"
                />
              </div>

              {/* Image 2 */}
              <div className="relative h-64 sm:h-72 rounded-xl overflow-hidden shadow-xs border border-slate-200 mt-6">
                <Image
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
                  alt="Strategic Collaboration"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 300px"
                />
              </div>

            </div>

            {/* Boxy Stat Box Overlay (White, No Black) */}
            <div className="absolute -bottom-4 left-4 p-3.5 px-4 rounded-lg bg-white text-[#001035] shadow-md border border-slate-200/90 flex items-center gap-3">
              <div className="w-9 h-9 rounded-md bg-blue-50 text-[#2563eb] border border-blue-100 flex items-center justify-center font-black">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <span className="block text-sm font-black text-[#001035] leading-tight">Institutional</span>
                <span className="block text-[10px] font-extrabold text-slate-500 tracking-wider uppercase leading-tight">
                  Governance &amp; Rigor
                </span>
              </div>
            </div>

          </div>

          {/* RIGHT: NARRATIVE & PILLARS */}
          <div className="lg:col-span-6 flex flex-col items-start">
            
            {/* Tag (Matching exact reference ✴ WHO WE ARE?) */}
            <div className="flex items-center gap-1.5 text-xs font-black text-[#001035] uppercase tracking-wider mb-3">
              <span className="text-[#2563eb] text-base leading-none">✴</span>
              <span>WHO WE ARE?</span>
            </div>

            {/* Headline */}
            <h2 className="text-2xl sm:text-3xl lg:text-[2.35rem] font-extrabold text-[#001035] tracking-tight leading-[1.15] mb-4">
              Building partnerships that <br />
              <span className="text-[#2563eb]">unlock long-term potential</span>
            </h2>

            {/* Paragraphs */}
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-3">
              <strong>Blue Ocean Inco Pvt. Ltd.</strong> is an investment company based in Kathmandu, Nepal, focused on identifying promising opportunities and supporting businesses with the potential for meaningful, sustainable growth.
            </p>

            <p className="text-slate-500 text-xs sm:text-[13px] leading-relaxed mb-6">
              We bring together capital, insight, and strategic partnerships to help businesses navigate challenges, scale operations, and build long-term value. We believe sustainable business success comes from combining disciplined decision-making with collaborative relationships.
            </p>

            {/* 4 Pillars Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full mb-6">
              {highlights.map((item) => (
                <div key={item} className="flex items-start gap-2 text-xs text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#2563eb] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* Bottom Row: Rating Badge & Boxy Skill Tags */}
            <div className="flex flex-wrap items-center gap-4 pt-3 border-t border-slate-100 w-full">
              
              {/* Rating Card */}
              <div className="p-2.5 px-4 rounded-lg bg-slate-50 border border-slate-200/80 flex items-center gap-3">
                <span className="text-xl font-black text-[#001035]">4.9<span className="text-xs text-slate-400 font-normal">/5.0</span></span>
                <div className="border-l border-slate-200 pl-3">
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-current" />
                    ))}
                  </div>
                  <span className="text-[10px] text-slate-500 font-semibold block">Client &amp; Partner Trust</span>
                </div>
              </div>

              {/* Boxy Skill Tags */}
              <div className="flex flex-wrap gap-1.5">
                {["STRATEGY", "EQUITY", "VALUATION", "DUE DILIGENCE", "GOVERNANCE"].map((tag) => (
                  <span key={tag} className="px-2 py-1 rounded-sm bg-slate-100 text-[10px] font-bold text-slate-700 tracking-wider">
                    {tag}
                  </span>
                ))}
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
