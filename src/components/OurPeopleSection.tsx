"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function OurPeopleSection() {
  const team = [
    {
      name: "Managing Partner",
      role: "Lead Strategist & FCA",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=500&q=80",
    },
    {
      name: "Strategic Partner",
      role: "Valuation & M&A Specialist",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=500&q=80",
    },
    {
      name: "Principal Associate",
      role: "Private Equity & Governance",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=500&q=80",
    },
    {
      name: "Lead Analyst",
      role: "Forensic Research & Capital",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=500&q=80",
    },
  ];

  const stats = [
    { number: "CA-Led", label: "Governance & Rigor" },
    { number: "100+", label: "Research Coverage" },
    { number: "100%", label: "Capital Alignment" },
  ];

  return (
    <section id="people" className="py-10 lg:py-14 bg-[#fdfdfd] text-slate-900 border-b border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
        
        {/* MAIN CONTAINER (Boxy rounded-xl) */}
        <div className="rounded-xl bg-[#f0f9ff] border border-sky-100 p-6 sm:p-10 shadow-xs">
          
          {/* HEADER */}
          <div className="text-center max-w-3xl mx-auto mb-8">
            <div className="flex items-center justify-center gap-1.5 text-xs font-black text-[#001035] uppercase tracking-wider mb-2">
              <span className="text-[#2563eb] text-base leading-none">✴</span>
              <span>MEET OUR TEAM</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-[2.35rem] font-extrabold text-[#001035] tracking-tight mb-2">
              Meet Our Team
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              Blue Ocean brings together individuals with diverse business perspectives and a shared commitment to thoughtful investment and sustainable growth.
            </p>
          </div>

          {/* 4 TEAM CARDS GRID (Boxy rounded-xl with boxy portrait frames) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.06 }}
                className="p-5 rounded-xl bg-white border border-slate-200/80 shadow-xs hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 flex flex-col items-center text-center group"
              >
                {/* Boxy Portrait Frame */}
                <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-lg overflow-hidden mb-4 border-2 border-slate-200 shadow-xs group-hover:scale-105 transition-transform duration-300 bg-slate-100">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 150px, 180px"
                  />
                </div>

                {/* Name */}
                <h3 className="text-base font-bold text-[#001035] tracking-tight mb-0.5">
                  {member.name}
                </h3>

                {/* Role */}
                <p className="text-xs font-semibold text-slate-500">
                  {member.role}
                </p>
              </motion.div>
            ))}
          </div>

          {/* 3 BOTTOM STAT CARDS (Boxy rounded-lg) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.08 }}
                className="p-5 rounded-lg bg-[#2563eb] text-white flex flex-col items-center justify-center text-center shadow-md shadow-blue-500/10"
              >
                <div className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-0.5">
                  {stat.number}
                </div>
                <div className="text-xs font-bold text-blue-100 uppercase tracking-wide">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
