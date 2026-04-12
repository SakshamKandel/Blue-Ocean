"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import { Shield, BarChart3, Eye, ArrowRight, Binary, Fingerprint, Search } from "lucide-react";
import Link from "next/link";

/** 
 * THE PRECISION MATRIX (OPTION 2)
 * A high-density institutional data-hub.
 * Focuses on structural precision, technical metadata, and forensic authority.
 */

const matrixModules = [
  {
    id: "STRAT-001",
    title: "Forensic Research",
    subtitle: "PRIMARY_DIRECTIVE",
    description: "Deep-layer balance sheet analysis. We audit the numbers to find the true intrinsic value before market validation.",
    status: "VERIFIED_CA_LED",
    technicals: [
      { label: "Scrutiny", value: "Line-by-Line" },
      { label: "Integrity", value: "CA-Verified" },
      { label: "Focus", value: "Intrinsic" }
    ],
    icon: Search,
    accent: "text-blue-600"
  },
  {
    id: "RISK-002",
    title: "Multi-Layer Risk",
    subtitle: "DEFENSIVE_PROTOCOL",
    description: "Multi-layered risk engineering. Capital preservation is prioritized through rigorous sizing and liquidity checks.",
    status: "PROTECTED",
    technicals: [
      { label: "Exposure", value: "Controlled" },
      { label: "Hedge", value: "Structural" },
      { label: "Check", value: "Non-Correlated" }
    ],
    icon: Shield,
    accent: "text-emerald-600"
  },
  {
    id: "GROW-003",
    title: "Sustainable Alpha",
    subtitle: "ALPHA_GENERATION",
    description: "Research-backed outperformance that compounds through cycles. We ignore market noise to capture fundamental growth.",
    status: "OPTIMIZED",
    technicals: [
      { label: "Cycle", value: "Aware" },
      { label: "Yield", value: "Compounding" },
      { label: "Reporting", value: "Transparent" }
    ],
    icon: BarChart3,
    accent: "text-indigo-600"
  }
];

export default function HorizontalScrollFramework() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section ref={containerRef} className="relative bg-surface-lowest overflow-hidden border-y border-outline-variant/10">
      {/* ═══════════════════════ MATRIX GRID BACKGROUND ═══════════════════════ */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ 
             backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', 
             backgroundSize: '40px 40px' 
           }} 
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-24 md:py-32 relative z-10">
        
        {/* HEADER: TERMINAL STYLE */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-6">
            <span className="font-mono text-[9px] font-bold tracking-[0.3em] text-primary/30 uppercase">[SEC_TYPE: STRATEGY_DOSSIER]</span>
            <div className="h-[1px] flex-grow bg-primary/5" />
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-end">
            <div>
              <h2 className="font-display text-4xl md:text-7xl font-black text-primary tracking-tighter leading-none mb-6">
                The Precision<br/>
                <span className="text-secondary italic underline decoration-primary/5 underline-offset-12">Matrix.</span>
              </h2>
            </div>
            <div className="pb-2">
              <p className="font-mono text-[11px] leading-relaxed text-on-surface-variant opacity-60 max-w-md">
                // DATA_STREAM: BLUE_OCEAN_INCO_STRATEGIC_TRAJECTORY
                <br />
                Institutional-grade forensic research coupled with multi-layered risk protocols to ensure sustainable alpha generation in volatile regional markets.
              </p>
            </div>
          </div>
        </div>

        {/* THE MATRIX MODULES */}
        <div className="grid md:grid-cols-3 gap-1 lg:gap-px bg-outline-variant/10 border border-outline-variant/10 rounded-[2rem] overflow-hidden shadow-2xl shadow-primary/5">
          {matrixModules.map((module, idx) => (
            <motion.div
              key={module.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="bg-white p-8 md:p-12 flex flex-col justify-between min-h-[500px] group relative overflow-hidden"
            >
              {/* Card Background Patterns */}
              <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-700">
                <module.icon className="w-32 h-32" />
              </div>

              <div>
                <div className="flex items-center justify-between mb-12">
                  <span className="font-mono text-[10px] font-bold text-primary/30 tracking-widest">{module.id}</span>
                  <div className="px-3 py-1 bg-zinc-50 border border-zinc-100 rounded-md">
                    <span className={`font-mono text-[8px] font-bold ${module.accent} tracking-tighter`}>{module.status}</span>
                  </div>
                </div>

                <div className="mb-8">
                  <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-primary/40 block mb-4">{module.subtitle}</span>
                  <h3 className="text-3xl md:text-4xl font-display font-black text-primary tracking-tight leading-[0.9] group-hover:text-secondary transition-colors duration-500">
                    {module.title}
                  </h3>
                </div>

                <p className="text-sm leading-relaxed text-on-surface-variant/70 mb-12 font-medium">
                  {module.description}
                </p>
              </div>

              <div className="space-y-6">
                <div className="grid grid-cols-1 gap-4">
                  {module.technicals.map((tech, i) => (
                    <div key={i} className="flex items-center justify-between border-b border-primary/[0.03] pb-2">
                      <span className="font-mono text-[9px] font-bold uppercase text-primary/30 tracking-widest">{tech.label}</span>
                      <span className="text-[10px] font-bold text-primary tracking-tight uppercase">{tech.value}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-6">
                   <Link href="/strategy" className="inline-flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.2em] text-primary group/link">
                      Access Briefing <ArrowRight className="w-3 h-3 group-hover/link:translate-x-2 transition-transform" />
                   </Link>
                </div>
              </div>

              {/* Interaction Overlay */}
              <div className="absolute bottom-0 left-0 w-full h-[2px] bg-primary/5 group-hover:bg-secondary transition-colors duration-500" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
