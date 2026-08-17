"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function WhatWeDoSection() {
  const services = [
    {
      title: "Strategic Investments",
      desc: "We identify businesses and opportunities with strong fundamentals, capable leadership, and long-term growth potential.",
      icon: (
        <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
          <line x1="2" y1="9" x2="22" y2="9"/>
          <line x1="6" y1="6" x2="6.01" y2="6"/>
          <line x1="10" y1="6" x2="10.01" y2="6"/>
          <line x1="14" y1="6" x2="14.01" y2="6"/>
        </svg>
      ),
      active: true,
    },
    {
      title: "Business Partnerships",
      desc: "We develop collaborative relationships with entrepreneurs, founders, management teams, and strategic partners.",
      icon: (
        <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="6" y="2" width="12" height="20" rx="2" ry="2"/>
          <circle cx="12" cy="18" r="1"/>
        </svg>
      ),
      active: false,
    },
    {
      title: "Growth & Value Creation",
      desc: "We support businesses in strengthening operations, expanding capabilities, and pursuing new opportunities.",
      icon: (
        <div className="flex flex-col items-center justify-center font-bold text-xs tracking-tighter leading-none text-white">
          <span className="border-b border-white pb-0.5">UX</span>
          <span className="pt-0.5">UI</span>
        </div>
      ),
      active: false,
    },
    {
      title: "Strategic Insight",
      desc: "We combine commercial understanding, market knowledge, and long-term thinking when evaluating opportunities.",
      icon: (
        <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <line x1="18" y1="20" x2="18" y2="10"/>
          <line x1="12" y1="20" x2="12" y2="4"/>
          <line x1="6" y1="20" x2="6" y2="14"/>
        </svg>
      ),
      active: false,
    },
  ];

  return (
    <section id="what-we-do" className="py-10 lg:py-14 bg-[#f8fafc] text-slate-900 border-b border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
        
        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            {/* Tag */}
            <div className="flex items-center gap-1.5 text-xs font-black text-[#001035] uppercase tracking-wider mb-2">
              <span className="text-[#2563eb] text-base leading-none">✴</span>
              <span>WHAT WE DO</span>
            </div>

            {/* Headline */}
            <h2 className="text-2xl sm:text-3xl lg:text-[2.35rem] font-extrabold text-[#001035] tracking-tight leading-[1.15]">
              Services We Provide to <br />
              <span className="text-[#2563eb]">Elevate Your Business</span>
            </h2>
          </div>

          <div>
            <a
              href="#investment-request"
              className="inline-flex items-center justify-center bg-[#2563eb] hover:bg-blue-700 text-white text-xs sm:text-sm font-bold py-2.5 px-6 rounded-lg shadow-xs hover:shadow-md transition-all"
            >
              View All Services
            </a>
          </div>
        </div>

        {/* 4 BOXY CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              className={`p-6 rounded-xl bg-white border shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between group ${
                item.active
                  ? "border-blue-300 border-b-[3px] border-b-blue-600"
                  : "border-slate-200/90 hover:border-blue-300"
              }`}
            >
              <div>
                {/* Boxy Blue Squircle Icon Container */}
                <div className="w-12 h-12 rounded-lg bg-[#2563eb] flex items-center justify-center mb-5 shadow-xs group-hover:scale-105 transition-transform">
                  {item.icon}
                </div>

                {/* Card Title */}
                <h3 className="text-base font-bold text-[#001035] tracking-tight mb-2">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-slate-500 text-xs sm:text-[13px] leading-relaxed mb-6">
                  {item.desc}
                </p>
              </div>

              {/* Bottom Link */}
              <div>
                <a
                  href="#approach"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#2563eb] hover:text-blue-800 transition-colors group-hover:translate-x-1"
                >
                  <span>Learn more</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
