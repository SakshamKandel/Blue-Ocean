"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Star, Phone } from "lucide-react";

interface HeroSectionProps {
  onDiscoverClick?: () => void;
}

export default function HeroSection({ onDiscoverClick }: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden bg-[#04152d] text-white min-h-[520px] lg:min-h-[580px] flex items-center border-b border-blue-950/60">
      
      {/* FULL-BLEED BACKGROUND IMAGE ON RIGHT HALF */}
      <div className="absolute top-0 right-0 bottom-0 w-full lg:w-3/5 h-full pointer-events-none z-0">
        <Image
          src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1600&q=85"
          alt="Blue Ocean Strategic Leadership Team"
          fill
          priority
          className="object-cover object-top lg:object-[center_top]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#04152d] via-transparent to-transparent opacity-85" />
      </div>

      {/* GRADIENT OVERLAY WHERE TEXT IS LOCATED */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#04152d] via-[#04152d] via-50% to-[#04152d]/10 lg:to-transparent z-1 pointer-events-none" />

      {/* FOREGROUND CONTENT */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 w-full py-12 lg:py-16 relative z-10">
        <div className="max-w-xl xl:max-w-2xl">
          
          {/* RATING BADGE (Boxy rounded-md) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/10 backdrop-blur-sm border border-white/15 text-xs text-slate-200 mb-5"
          >
            <span className="font-extrabold text-white text-xs">4.9</span>
            <div className="flex items-center text-[#38bdf8] gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3 h-3 fill-[#38bdf8] text-[#38bdf8]" />
              ))}
            </div>
            <span className="text-slate-300 text-[11px] font-medium border-l border-white/20 pl-2">
              100% CA-Led
            </span>
          </motion.div>

          {/* BIG BOLD HEADLINE */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-3xl sm:text-5xl xl:text-[3.5rem] font-black tracking-tight leading-[1.08] uppercase mb-4 text-white font-display"
          >
            NEXT &mdash; GEN TOP <br />
            NOTCH <span className="text-[#38bdf8]">BUSINESS</span> <br />
            SOLUTIONS
          </motion.h1>

          {/* PARAGRAPH */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-lg mb-7 font-normal"
          >
            We provide expert strategic investment and advisory services to help companies grow, optimize operations, and achieve sustainable long-term value.
          </motion.p>

          {/* DUAL ACTION BUTTONS (Boxy) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-wrap items-center gap-5"
          >
            {/* Button 1 */}
            <a
              href="#about"
              onClick={onDiscoverClick}
              className="group inline-flex items-center rounded-lg bg-[#001c40] hover:bg-[#002657] border border-[#38bdf8]/40 p-1 pl-5 shadow-sm transition-all duration-200"
            >
              <span className="text-xs sm:text-sm font-bold text-white pr-4">
                Book Appointment
              </span>
              <div className="w-8 h-8 rounded-md bg-[#38bdf8] text-[#001035] flex items-center justify-center group-hover:scale-105 transition-transform font-black">
                <span className="text-base font-extrabold leading-none">&raquo;</span>
              </div>
            </a>

            {/* Button 2 */}
            <a
              href="tel:+9779802320122"
              className="inline-flex items-center gap-3 text-slate-200 hover:text-white transition-colors group"
            >
              <div className="w-9 h-9 rounded-lg bg-[#38bdf8] text-[#001035] flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform">
                <Phone className="w-4 h-4 fill-current" />
              </div>
              <div className="text-left">
                <span className="block text-[10px] font-bold text-slate-400 tracking-wider uppercase leading-tight">
                  CALL US
                </span>
                <span className="block text-xs sm:text-sm font-extrabold text-white tracking-tight leading-tight">
                  +977 9802320122
                </span>
              </div>
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
