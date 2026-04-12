"use client";

import React, { useRef } from 'react';
import { motion, Variants } from 'framer-motion';
import { Search, ShieldCheck, TrendingUp, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Footer from '@/components/Footer';
import ParallaxImage from '@/components/ParallaxImage';
import HorizontalScrollFramework from '@/components/HorizontalScrollFramework';
import { CinematicHero } from '@/components/ui/cinematic-hero';
import TrustBar from '@/components/TrustBar';

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

export default function Home() {
  const containerRef = useRef(null);

  return (
    <div ref={containerRef} className="min-h-screen bg-surface-lowest selection:bg-secondary/20 font-sans relative">
      {/* ═══════════════════════ HERO ═══════════════════════ */}
      <CinematicHero />
      <TrustBar />

      {/* ═══════════════════════ PRECISION LAYER (GRID) ═══════════════════════ */}
      <section className="py-24 px-6 bg-surface-lowest relative border-b border-outline-variant/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-[1.5px] bg-secondary/30" />
                <motion.span variants={fadeInUp} className="text-secondary font-bold tracking-[0.3em] uppercase text-[10px] block">Institutional Standards</motion.span>
              </div>
              <motion.h2 variants={fadeInUp} className="font-display text-4xl md:text-6xl lg:text-7xl font-black text-primary tracking-tighter leading-[0.85] mb-8">
                Forensic rigor.<br/><span className="text-secondary italic font-light opacity-90 underline decoration-primary/10 underline-offset-8">Global vision.</span>
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-on-surface-variant text-lg leading-relaxed mb-12 max-w-xl opacity-80">
                 Founded in 2022, Blue Ocean Inco is a CA-led investment firm specialized in identifying market inefficiencies with forensic precision and institutional-grade scrutiny.
              </motion.p>
              
              <div className="grid grid-cols-2 gap-y-12 gap-x-12">
                {[
                  { value: '100%', label: 'CA-Led Leadership' },
                  { value: '10+', label: 'Years Combined Expertise' },
                  { value: '50+', label: 'Active Research Coverage' },
                  { value: '2', label: 'Primary Asset Classes' },
                ].map((stat, i) => (
                  <motion.div key={i} variants={fadeInUp} className="border-l-[2px] border-primary/10 pl-8 group">
                    <p className="text-4xl md:text-5xl font-display font-black text-primary mb-2 tracking-tighter group-hover:text-secondary transition-colors duration-500">{stat.value}</p>
                    <p className="text-[9px] font-bold tracking-[0.25em] uppercase text-on-surface-variant/40 group-hover:text-on-surface-variant/60 transition-colors duration-500">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div 
               initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }} transition={{ duration: 1, ease: "circOut" }}
               className="relative aspect-[4/5] md:aspect-square lg:aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl shadow-primary/5 border border-outline-variant/10 group"
            >
              <ParallaxImage src="/precision-abstract.png" alt="Forensic Precision" speed={-0.05} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent mix-blend-multiply opacity-60" />
              <div className="absolute inset-8 p-10 flex flex-col justify-end">
                <div className="p-6 bg-white/10 backdrop-blur-2xl rounded-3xl border border-white/20 shadow-2xl">
                   <p className="text-white text-[10px] font-bold tracking-[0.3em] uppercase mb-2">Institutional Standard</p>
                   <p className="text-white/80 text-sm leading-relaxed italic">"Every position is built on verified numbers, not market narratives."</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════ HORIZONTAL SCROLL (KINETIC PANELS) ═══════════════════════ */}
      <HorizontalScrollFramework />

      {/* ═══════════════════════ INVESTMENT THESIS ═══════════════════════ */}
      <section className="py-28 bg-primary text-white relative overflow-hidden">
        {/* Background Texture Overlay */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        <div className="absolute top-0 right-0 w-[40%] h-full bg-secondary/5 -skew-x-12 translate-x-1/2" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
           <div className="mb-24 max-w-5xl mx-auto text-center">
              <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="flex justify-center items-center gap-6 mb-10">
                <div className="w-12 h-[1px] bg-secondary-fixed-dim/20" />
                <span className="text-secondary-fixed-dim font-bold tracking-[0.5em] uppercase text-[10px]">Investment Thesis</span>
                <div className="w-12 h-[1px] bg-secondary-fixed-dim/20" />
              </motion.div>
              <motion.h2 
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.8, ease: "circOut" }}
                className="font-display text-5xl md:text-8xl font-black tracking-tighter leading-[0.85] text-white mb-12"
              >
                Capital is a tool,<br/>
                <span className="text-secondary-fixed-dim italic font-light opacity-90 underline decoration-white/5 underline-offset-[16px]">Strategy is the edge.</span>
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
                className="text-white/60 text-lg md:text-xl max-w-3xl mx-auto font-light leading-relaxed tracking-wide italic"
              >
                "Markets misprice what they don't understand. Our job is to understand it first — and act on it with discipline."
              </motion.p>
           </div>

           <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto mb-20 content-center justify-center">
             <div className="p-10 rounded-[2.5rem] bg-white/5 border border-white/10 hover:border-secondary/30 transition-all duration-700">
                <p className="text-white/80 text-lg leading-relaxed">
                  Blue Ocean Inco was founded on a simple belief: in a noisy market, the quiet, numbers-driven investor wins. We identify mispriced opportunities in Nepali and regional equity markets through line-by-line financial analysis, and hold them with the patience real returns require.
                </p>
             </div>
             <div className="flex flex-col justify-center gap-8">
               <div className="flex items-start gap-5">
                 <div className="shrink-0 w-10 h-10 rounded-xl bg-secondary/20 flex items-center justify-center text-secondary border border-secondary/20">
                    <ShieldCheck className="w-5 h-5" />
                 </div>
                 <div>
                   <h4 className="text-white font-bold tracking-wider mb-2">Forensic Scrutiny</h4>
                   <p className="text-white/40 text-sm leading-relaxed">Line-by-line financial audit before capital deployment.</p>
                 </div>
               </div>
               <div className="flex items-start gap-5">
                 <div className="shrink-0 w-10 h-10 rounded-xl bg-secondary/20 flex items-center justify-center text-secondary border border-secondary/20">
                    <TrendingUp className="w-5 h-5" />
                 </div>
                 <div>
                   <h4 className="text-white font-bold tracking-wider mb-2">Strategic Stewardship</h4>
                   <p className="text-white/40 text-sm leading-relaxed">Growing capital sustainably across public and private cycles.</p>
                 </div>
               </div>
             </div>
           </div>
        </div>
      </section>

      {/* ═══════════════════════ FINAL CALL ═══════════════════════ */}
      <section className="py-24 px-6 bg-surface-lowest text-center relative">
        <div className="absolute inset-0 bg-grid-theme opacity-[0.05] pointer-events-none" />
        <motion.div 
           initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
           className="max-w-4xl mx-auto relative z-10"
        >
          <motion.h2 variants={fadeInUp} className="font-display text-5xl md:text-8xl font-black text-primary tracking-tighter leading-none mb-8">
            Invest with precision.
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-on-surface-variant text-lg md:text-xl mb-14 max-w-2xl mx-auto opacity-70 leading-relaxed font-medium">
            Let&apos;s talk about building your portfolio with a team that treats your capital like its own.
          </motion.p>
          <motion.div variants={fadeInUp}>
            <Link href="/contact" className="inline-flex items-center gap-4 px-12 py-6 bg-primary text-white rounded-2xl font-bold text-[10px] tracking-[0.3em] uppercase hover:bg-secondary transition-all group shadow-2xl shadow-primary/20 hover:scale-105 active:scale-95">
              Start the Conversation <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
            </Link>
          </motion.div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}
