"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Shield, BarChart3, Eye, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

/** 
 * THE STRATEGIC HORIZON (REWORKED)
 * A cinematic horizontal scrolling experience for institutional strategy.
 * Uses Framer Motion for high-fidelity performance and stability.
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
  }
];

export default function HorizontalScrollFramework() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Use scroll progress through a tall section to drive horizontal movement
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // map 0 -> 1 progress to 0 -> -75% movement (for 4 panels)
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

  return (
    <section ref={containerRef} className="relative h-[400vh] bg-surface-lowest">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center">
        
        {/* THE OCEAN MIST BACKDROP */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden bg-zinc-50">
           <div className="absolute top-0 right-0 w-[400vw] h-full bg-[radial-gradient(circle_at_20%_30%,rgba(59,130,246,0.03)_0%,transparent_50%)]" />
           <div className="absolute bottom-0 left-0 w-[400vw] h-full bg-[radial-gradient(circle_at_80%_70%,rgba(59,130,246,0.05)_0%,transparent_50%)]" />
           <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, #E2E8F0 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        </div>

        <motion.div style={{ x }} className="flex w-[400vw] h-full relative items-center z-10">
          
          {/* PANEL 1: THE MANIFESTO / HORIZON */}
          <div className="h-screen w-screen flex flex-col justify-center px-10 md:px-24 lg:px-40 relative">
            <div className="max-w-4xl">
               <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-px bg-primary" />
                  <span className="text-primary font-bold tracking-[0.4em] uppercase text-[10px]">Strategic Horizon</span>
               </div>
               <h2 className="font-display text-[5rem] md:text-[8rem] lg:text-[10rem] font-black text-primary tracking-tighter leading-[0.8] mb-12">
                 The Blue Ocean<br/>
                 <span className="text-primary/20 italic">Trajectory.</span>
               </h2>
               
               <div className="grid md:grid-cols-2 gap-12 mt-4">
                  <div className="space-y-4">
                     <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-secondary">Today</p>
                     <p className="text-lg text-on-surface-variant leading-relaxed opacity-80 font-medium">
                        Public equities and private share placements, built on deep forensic research and CA-led due diligence.
                     </p>
                  </div>
                  <div className="space-y-4 border-l border-primary/10 pl-12">
                     <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary/40">Tomorrow</p>
                     <p className="text-lg text-on-surface-variant leading-relaxed opacity-60 font-medium italic">
                        Expanding into tangible real estate assets — bringing the same forensic discipline to regional property markets.
                     </p>
                  </div>
               </div>

               <div className="mt-16 flex items-center gap-6 group cursor-pointer">
                  <div className="w-12 h-12 rounded-full border border-primary/20 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-500">
                     <ArrowRight className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-primary/40 group-hover:text-primary transition-colors">Scroll to Traverse Precision Layer</span>
               </div>
            </div>
            
            {/* VERTICAL INDICATOR */}
            <div className="absolute left-6 md:left-12 bottom-20 flex flex-col items-center gap-6">
               <div className="h-20 w-px bg-primary/10" />
               <span className="[writing-mode:vertical-lr] text-[10px] font-bold uppercase tracking-[0.4em] text-primary/30">Discovery Phase</span>
            </div>
          </div>

          {/* STRATEGY MODULES (3nd, 3rd, 4th panels) */}
          {strategySegments.map((segment, idx) => (
            <div key={idx} className="h-screen w-screen flex items-center justify-center px-10 md:px-20 relative">
              <div className="w-full max-w-6xl grid lg:grid-cols-2 gap-20 items-center">
                 
                 {/* Visual Side */}
                 <div className="relative aspect-[4/5] md:aspect-square group overflow-hidden rounded-[3rem] border border-zinc-200 bg-white/40 backdrop-blur-3xl shadow-2xl shadow-primary/5">
                    <div className="absolute inset-0 p-12 flex flex-col justify-between">
                       <div className="flex justify-between items-start">
                          <span className="text-[12rem] font-black leading-none text-primary/[0.03] select-none">{segment.number}</span>
                          <div className="w-20 h-20 rounded-3xl bg-primary/5 border border-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-700">
                             <segment.icon className="w-10 h-10" />
                          </div>
                       </div>
                       <div>
                          <p className="text-[10px] font-bold tracking-[0.4em] uppercase text-primary/40 mb-4 px-1">Instrument Identity</p>
                          <div className="p-8 rounded-2xl bg-white/50 border border-zinc-100 backdrop-blur-sm group-hover:border-primary/20 transition-all duration-500">
                             <div className="grid grid-cols-2 gap-8">
                                <div>
                                   <p className="text-[8px] font-bold uppercase text-primary/30 mb-1">Risk Std.</p>
                                   <p className="text-xs font-bold text-primary">L-TRK-0{segment.number}</p>
                                </div>
                                <div>
                                   <p className="text-[8px] font-bold uppercase text-primary/30 mb-1">Status</p>
                                   <div className="flex items-center gap-2">
                                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                                      <span className="text-xs font-bold text-primary">Active</span>
                                   </div>
                                </div>
                             </div>
                          </div>
                       </div>
                    </div>
                    {/* Subtle Grain Overlay */}
                    <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
                 </div>

                 {/* Content Side */}
                 <div className="flex flex-col">
                    <div className="mb-12">
                       <span className="text-secondary font-bold tracking-[0.4em] uppercase text-[10px] block mb-6">Strategic Pillar</span>
                       <h3 className="text-5xl md:text-7xl font-display font-black text-primary tracking-tighter leading-none mb-4">
                          {segment.title}
                       </h3>
                       <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary/40 leading-relaxed max-w-md">
                          {segment.role}
                       </p>
                    </div>
                    
                    <p className="text-xl leading-relaxed text-on-surface-variant/70 mb-12 max-w-lg font-medium italic border-l-2 border-primary/10 pl-8">
                       "{segment.description}"
                    </p>

                    <div className="space-y-6">
                      {segment.details.map((detail, i) => (
                        <div key={i} className="flex items-center gap-4 group/item cursor-default">
                          <div className="w-2 h-2 rounded-full border border-primary/20 group-hover/item:bg-primary group-hover/item:scale-125 transition-all" />
                          <span className="text-[11px] font-bold uppercase tracking-widest text-primary/60 group-hover/item:text-primary transition-colors">{detail}</span>
                        </div>
                      ))}
                    </div>
                 </div>

              </div>
            </div>
          ))}
        </motion.div>

        {/* HORIZONTAL PROGRESS BAR */}
        <div className="absolute bottom-10 left-10 right-10 flex items-center gap-6 px-10 opacity-30 z-20">
           <span className="text-[10px] font-bold text-primary">0%</span>
           <div className="flex-grow h-px bg-primary/10 overflow-hidden">
              <motion.div 
                style={{ scaleX: scrollYProgress, originX: 0 }}
                className="h-full bg-primary" 
              />
           </div>
           <span className="text-[10px] font-bold text-primary">100%</span>
        </div>

      </div>
    </section>
  );
}
