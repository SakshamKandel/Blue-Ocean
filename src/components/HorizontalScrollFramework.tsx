"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import { Shield, BarChart3, Eye, ArrowRight } from "lucide-react";

/** 
 * THE STRATEGIC HORIZON (STABLE VERTICAL VERSION)
 * A cinematic vertical stacking experience for institutional strategy.
 * Replaces the horizontal scroll to avoid pinning conflicts with the Hero.
 */

const strategySegments = [
  {
    number: "01",
    title: "Forensic Research",
    role: "The CA Standard",
    description: "We dissect balance sheets the way only Chartered Accountants can. Every position is built on verified numbers, not narratives.",
    details: [
      "Line-by-line financial audit",
      "Intrinsic value verification",
      "Scrutiny of hidden liabilities"
    ],
    icon: Eye,
    gradient: "from-blue-500/5 to-transparent"
  },
  {
    number: "02",
    title: "Multi-Layer Risk",
    role: "Capital Preservation",
    description: "Capital preservation comes before growth. Our multi-layer risk framework is engineered to protect you in every market cycle.",
    details: [
      "Rigorous sizing discipline",
      "Non-correlated asset allocation",
      "Stop-loss & liquidity checks"
    ],
    icon: Shield,
    gradient: "from-emerald-500/5 to-transparent"
  },
  {
    number: "03",
    title: "Sustainable Alpha",
    role: "Compounding Growth",
    description: "We pursue returns that compound through cycles, not headlines. Our goal is steady, research-backed outperformance.",
    details: [
      "Cycle-aware positioning",
      "Benchmark outperformance",
      "Transparent, CA-verified reporting"
    ],
    icon: BarChart3,
    gradient: "from-indigo-500/5 to-transparent"
  }
];

export default function HorizontalScrollFramework() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section ref={containerRef} className="relative bg-surface-lowest overflow-hidden">
      {/* ═══════════════════════ HEADER SECTION ═══════════════════════ */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-32 pb-20">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-12 h-px bg-primary" />
          <span className="text-primary font-bold tracking-[0.4em] uppercase text-[10px]">Strategic Horizon</span>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-end">
          <div>
            <h2 className="font-display text-5xl md:text-8xl font-black text-primary tracking-tighter leading-[0.9] mb-8">
              The Blue Ocean<br/>
              <span className="text-primary/20 italic">Trajectory.</span>
            </h2>
          </div>
          <div className="pb-4">
            <div className="space-y-8 max-w-lg">
              <div className="relative pl-8 border-l border-secondary/30">
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-secondary mb-3">Evolutionary Phase 01</p>
                <p className="text-lg text-on-surface-variant leading-relaxed opacity-80 font-medium italic">
                  &quot;Transitioning from specialized equity research to institutional-grade wealth management.&quot;
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ═══════════════════════ STACKING CARDS ═══════════════════════ */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pb-40 space-y-12 md:space-y-32">
        {strategySegments.map((segment, idx) => (
          <div 
            key={idx} 
            className="sticky top-24 md:top-32 w-full perspective-1000"
          >
            <motion.div
              initial={{ opacity: 0, y: 50, rotateX: -5 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "circOut" }}
              className={`relative overflow-hidden rounded-[2.5rem] md:rounded-[4rem] border border-outline-variant/10 bg-white/70 backdrop-blur-3xl p-8 md:p-20 shadow-2xl shadow-primary/5 group hover:border-primary/20 transition-all duration-700`}
            >
              {/* Subtle Background Interaction */}
              <div className={`absolute inset-0 bg-gradient-to-br ${segment.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-1000`} />
              
              <div className="relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
                
                {/* Visual Identity */}
                <div className="order-2 lg:order-1">
                   <div className="flex items-center gap-6 mb-10">
                      <div className="w-20 h-20 rounded-3xl bg-primary/5 border border-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-700">
                         <segment.icon className="w-10 h-10" />
                      </div>
                      <div>
                         <span className="text-6xl font-black text-primary/[0.05] leading-none mb-1 block select-none">#{segment.number}</span>
                         <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-primary/40">Component Identity</span>
                      </div>
                   </div>

                   <h3 className="text-4xl md:text-6xl font-display font-black text-primary tracking-tighter leading-[0.95] mb-6">
                      {segment.title}
                   </h3>
                   
                   <p className="text-lg leading-relaxed text-on-surface-variant font-medium opacity-70 italic border-l-2 border-primary/10 pl-6 mb-10">
                      {segment.description}
                   </p>

                   <div className="space-y-4">
                    {segment.details.map((detail, i) => (
                      <div key={i} className="flex items-center gap-4 group/item">
                        <div className="w-2 h-2 rounded-full bg-primary/20 group-hover/item:bg-primary transition-colors" />
                        <span className="text-[11px] font-bold uppercase tracking-widest text-primary/50 group-hover/item:text-primary transition-colors">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Data/Detail Side */}
                <div className="order-1 lg:order-2">
                   <div className="aspect-[4/3] rounded-[2rem] bg-zinc-50 border border-zinc-100 p-8 flex flex-col justify-between group-hover:scale-[1.02] transition-transform duration-700">
                      <div className="flex justify-between items-start">
                         <div className="space-y-1">
                            <p className="text-[9px] font-bold uppercase tracking-widest text-primary/30">Institutional Standard</p>
                            <p className="text-xs font-bold text-primary">Blue Ocean Ref: 2024-X{segment.number}</p>
                         </div>
                         <div className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                            <span className="text-[8px] font-bold uppercase text-emerald-600">Verified</span>
                         </div>
                      </div>

                      <div className="flex flex-col gap-4">
                         <div className="h-px bg-primary/5 w-full" />
                         <div className="flex items-end justify-between">
                            <div className="space-y-4">
                               <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-secondary">{segment.role}</p>
                               <Link href="/strategy" className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-primary group/link">
                                  Learn More <ArrowRight className="w-3 h-3 group-hover/link:translate-x-1 transition-transform" />
                               </Link>
                            </div>
                            <div className="text-right">
                               <span className="text-5xl font-display font-black text-primary/10">{segment.number}</span>
                            </div>
                         </div>
                      </div>
                   </div>
                </div>

              </div>
            </motion.div>
          </div>
        ))}
      </div>

      {/* ═══════════════════════ TRANSITION FOOTER ═══════════════════════ */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-32 text-center">
         <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="flex flex-col items-center gap-8"
         >
            <div className="w-px h-24 bg-gradient-to-b from-primary/20 to-transparent" />
            <p className="text-[10px] font-bold uppercase tracking-[0.5em] text-primary/30">End of Trajectory Analysis</p>
         </motion.div>
      </div>
    </section>
  );
}

// Helper to keep Link working
import Link from "next/link";
