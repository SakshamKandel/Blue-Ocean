"use client";

import React from 'react';
import { motion, useScroll, useTransform, Variants } from 'framer-motion';
import { ChevronRight, Search, ShieldCheck, TrendingUp, Award, BarChart3, Users } from 'lucide-react';
import Link from 'next/link';
import Footer from '@/components/Footer';

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
};

export default function Home() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -300]);
  
  return (
    <div className="min-h-screen bg-surface selection:bg-secondary/20 font-sans relative">
      {/* Navbar */}
      <nav className="fixed w-full z-50 top-0 px-4 py-2 sm:px-6 sm:py-3 mix-blend-difference text-white pointer-events-none">
        <div className="max-w-7xl mx-auto flex flex-col gap-2 md:flex-row md:justify-between md:items-center pointer-events-auto">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="flex items-center">
            <Link href="/">
              <img src="/Logo.png" alt="Logo" className="h-10 sm:h-12 w-auto object-contain" />
            </Link>
          </motion.div>
          <div className="flex gap-5 sm:gap-8 md:gap-12 font-medium text-xs sm:text-sm tracking-wide overflow-x-auto whitespace-nowrap pb-1 md:pb-0 max-w-full">
             <Link href="/" className="opacity-100 border-b border-white pb-1">Home</Link>
             <Link href="/about" className="opacity-60 hover:opacity-100 transition-opacity">About</Link>
             <Link href="/strategy" className="opacity-60 hover:opacity-100 transition-opacity">Strategy</Link>
             <Link href="/portfolio" className="opacity-60 hover:opacity-100 transition-opacity">Portfolio</Link>
             <Link href="/contact" className="opacity-60 hover:opacity-100 transition-opacity">Contact</Link>
          </div>
          <motion.a 
            href="https://www.nepalstock.com/" 
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ delay: 0.7 }} 
            className="hidden md:inline-flex px-6 py-2.5 rounded-full border border-white/20 hover:bg-white hover:text-black transition-all pointer-events-auto"
          >
            NEPAL STOCK
          </motion.a>
        </div>
      </nav>

      {/* ═══════════════════════ HERO ═══════════════════════ */}
      <section className="min-h-[80vh] w-full bg-primary flex flex-col justify-center px-4 sm:px-6 relative overflow-hidden text-white pt-28 md:pt-20">
        <motion.div 
          style={{ y }} 
          className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-primary-container/40 via-primary to-primary pointer-events-none"
        />
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay"></div>
        <div className="max-w-7xl mx-auto w-full relative z-10 text-center flex flex-col items-center">
           <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="flex flex-col items-center">
             <motion.div variants={fadeInUp} className="mb-4 overflow-hidden">
               <span className="inline-block px-4 py-2 rounded-full border border-white/20 text-xs font-semibold uppercase tracking-widest backdrop-blur-md">
                 CA-Led Investment Management
               </span>
             </motion.div>
             <motion.h1 variants={fadeInUp} className="font-display text-5xl sm:text-7xl md:text-[7rem] lg:text-[8rem] font-bold tracking-tighter leading-[0.9] text-white">
               Deep Insights, <br/>
               <span className="text-secondary-fixed-dim">Infinite Horizons.</span>
             </motion.h1>
             <motion.div variants={fadeInUp} className="mt-4 max-w-2xl text-lg md:text-xl text-primary-fixed-dim font-light leading-relaxed">
               Navigating the complexities of global markets with the precision of Chartered Accountants. We don&apos;t just find opportunities; we engineer growth.
             </motion.div>
             <motion.div variants={fadeInUp} className="mt-4 flex gap-4 flex-wrap justify-center w-full">
               <Link href="/contact" className="inline-flex w-full sm:w-auto justify-center items-center gap-3 bg-secondary-fixed text-primary px-8 py-4 rounded-full font-bold hover:bg-white transition-colors group">
                 Start Your Journey <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform"/>
               </Link>
               <Link href="/strategy" className="inline-flex w-full sm:w-auto justify-center items-center gap-3 border border-white/20 text-white px-8 py-4 rounded-full font-bold hover:bg-white/10 transition-colors">
                 View Strategy
               </Link>
             </motion.div>
           </motion.div>
        </div>
      </section>

      {/* ═══════════════════════ KEY HIGHLIGHTS ═══════════════════════ */}
      <section className="py-20 px-6 bg-surface-lowest relative z-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              { icon: Award, label: 'Expertise', value: 'Chartered Accountant Led' },
              { icon: BarChart3, label: 'Precision', value: 'Data-Driven Alpha' },
              { icon: Users, label: 'Since', value: 'March 2022 Genesis' },
              { icon: ShieldCheck, label: 'Leadership', value: '100% CA Governance' },
            ].map((item) => (
              <motion.div key={item.label} variants={fadeInUp} className="p-8 rounded-2xl bg-surface text-center group hover:-translate-y-1 transition-transform duration-300">
                <item.icon className="w-8 h-8 text-secondary mx-auto mb-4" strokeWidth={1.5} />
                <p className="text-xs uppercase tracking-widest text-on-surface-variant font-semibold mb-2">{item.label}</p>
                <p className="font-display text-lg font-bold text-primary">{item.value}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════ BY THE NUMBERS ═══════════════════════ */}
      <section className="py-24 px-6 bg-primary text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/5 to-transparent pointer-events-none"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 text-center md:text-left">
            <div>
              <p className="text-secondary-fixed-dim text-4xl md:text-5xl font-display font-bold mb-2">12-15%</p>
              <p className="text-white/60 font-medium">Target Annualized Alpha</p>
            </div>
            <div>
              <p className="text-secondary-fixed-dim text-4xl md:text-5xl font-display font-bold mb-2">NPR 4.2B</p>
              <p className="text-white/60 font-medium">AUM Guidance Threshold</p>
            </div>
            <div>
              <p className="text-secondary-fixed-dim text-4xl md:text-5xl font-display font-bold mb-2">100%</p>
              <p className="text-white/60 font-medium">CA-Led Decision Making</p>
            </div>
            <div>
              <p className="text-secondary-fixed-dim text-4xl md:text-5xl font-display font-bold mb-2">Zero</p>
              <p className="text-white/60 font-medium">Opaque Fee Structures</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════ DETAILED METHODOLOGY ═══════════════════════ */}
      <section className="py-28 px-6 bg-surface">
        <div className="max-w-5xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="mb-20">
            <motion.p variants={fadeInUp} className="text-secondary text-sm font-semibold uppercase tracking-widest mb-4">The Blue Ocean Framework</motion.p>
            <motion.h2 variants={fadeInUp} className="font-display text-4xl md:text-6xl font-bold tracking-tight text-primary leading-tight">
              A meticulously engineered <br/>path to capital preservation.
            </motion.h2>
          </motion.div>
          
          <div className="space-y-16">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="flex flex-col md:flex-row gap-8 items-start">
              <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center shrink-0 font-display font-bold">01</div>
              <div>
                <h3 className="font-display text-2xl font-bold text-primary mb-4">Forensic Scrutiny</h3>
                <p className="text-on-surface-variant text-lg leading-relaxed">Before a single rupee is deployed, every potential asset undergoes a level of forensic audit normally reserved for institutional mergers. Our CAs verify the structural integrity of the underlying asset, ensuring no hidden liabilities cloud your growth.</p>
              </div>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="flex flex-col md:flex-row gap-8 items-start">
              <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center shrink-0 font-display font-bold">02</div>
              <div>
                <h3 className="font-display text-2xl font-bold text-primary mb-4">Structural Hedging</h3>
                <p className="text-on-surface-variant text-lg leading-relaxed">We don&apos;t just buy and hope. We build multi-layered hedging strategies using a mix of financial derivatives and non-correlated real-world assets. This ensures that even in turbulent markets, the floor of your portfolio remains reinforced.</p>
              </div>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="flex flex-col md:flex-row gap-8 items-start">
              <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center shrink-0 font-display font-bold">03</div>
              <div>
                <h3 className="font-display text-2xl font-bold text-primary mb-4">Radical Transparency</h3>
                <p className="text-on-surface-variant text-lg leading-relaxed">Unlike traditional firms, we provide our promoters with absolute visibility. Through our digital portal, you can see the real-time movement and performance of every allocation, down to the last decimal.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════ GENESIS METRICS ═══════════════════════ */}
      <section className="py-24 px-6 bg-surface">
        <div className="max-w-5xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="text-center mb-16">
            <motion.p variants={fadeInUp} className="text-secondary text-sm font-semibold uppercase tracking-widest mb-4">March 2022 Genesis</motion.p>
            <motion.h2 variants={fadeInUp} className="font-display text-3xl md:text-5xl font-bold text-primary tracking-tight">Our Foundation</motion.h2>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid md:grid-cols-2 gap-8">
            <motion.div variants={fadeInUp} className="p-10 bg-surface-lowest rounded-3xl border border-outline-variant/10 text-center">
              <p className="text-secondary font-display text-4xl md:text-5xl font-bold mb-4">100%</p>
              <p className="text-on-surface-variant text-lg leading-relaxed">Chartered Accountant leadership ensuring regulatory integrity and fiscal precision across every investment decision.</p>
            </motion.div>
            <motion.div variants={fadeInUp} className="p-10 bg-surface-lowest rounded-3xl border border-outline-variant/10 text-center">
              <p className="text-secondary font-display text-4xl md:text-5xl font-bold mb-4 whitespace-nowrap">Blue Ocean</p>
              <p className="text-on-surface-variant text-lg leading-relaxed">Our philosophy focuses on creating uncontested market space and capturing new demand — rather than competing in existing, saturated markets.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════ INVESTMENT THESIS ═══════════════════════ */}
      <section className="py-28 px-6 bg-surface-lowest relative z-20">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid lg:grid-cols-2 gap-20 items-start"
          >
            <motion.div variants={fadeInUp} className="lg:sticky top-40">
              <span className="inline-block px-4 py-2 rounded-full border border-outline-variant/20 text-xs font-semibold uppercase tracking-widest text-secondary mb-8">
                Our Investment Thesis
              </span>
              <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight text-primary mb-8 leading-tight">
                Forensic precision <br/>meets strategic vision.
              </h2>
              <div className="w-16 h-1 bg-secondary mb-6 mt-8 rounded-full"></div>
              <p className="text-on-surface-variant leading-relaxed text-lg max-w-md">
                We combine forensic accounting with forward-looking market sentiment to build resilient portfolios.
              </p>
            </motion.div>

            <motion.div variants={staggerContainer} className="flex flex-col gap-8">
               <motion.div variants={fadeInUp} className="p-10 bg-surface rounded-3xl group hover:-translate-y-2 transition-transform duration-500">
                  <div className="w-16 h-16 rounded-full bg-surface-lowest border border-outline-variant/10 flex items-center justify-center mb-8 group-hover:bg-secondary group-hover:text-white transition-all duration-500">
                    <Search className="w-7 h-7 text-secondary group-hover:text-white transition-colors" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-display text-2xl font-bold mb-4 text-primary">Forensic Analysis</h3>
                  <p className="text-on-surface-variant text-lg leading-relaxed">Every investment undergoes a rigorous audit-level scrutiny before capital deployment, ensuring absolute transparency.</p>
               </motion.div>

               <motion.div variants={fadeInUp} className="p-10 bg-surface rounded-3xl group hover:-translate-y-2 transition-transform duration-500">
                  <div className="w-16 h-16 rounded-full bg-surface-lowest border border-outline-variant/10 flex items-center justify-center mb-8 group-hover:bg-secondary group-hover:text-white transition-all duration-500">
                    <TrendingUp className="w-7 h-7 text-secondary group-hover:text-white transition-colors" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-display text-2xl font-bold mb-4 text-primary">Alpha Generation</h3>
                  <p className="text-on-surface-variant text-lg leading-relaxed">Proprietary models that identify market inefficiencies before the horizon shifts.</p>
               </motion.div>

               <motion.div variants={fadeInUp} className="p-10 bg-surface rounded-3xl group hover:-translate-y-2 transition-transform duration-500">
                  <div className="w-16 h-16 rounded-full bg-surface-lowest border border-outline-variant/10 flex items-center justify-center mb-8 group-hover:bg-secondary group-hover:text-white transition-all duration-500">
                    <ShieldCheck className="w-7 h-7 text-secondary group-hover:text-white transition-colors" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-display text-2xl font-bold mb-4 text-primary">Risk Mitigation</h3>
                  <p className="text-on-surface-variant text-lg leading-relaxed">Structured hedging strategies led by fiscal experts to protect downside in volatile waters.</p>
               </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════ CA ADVANTAGE ═══════════════════════ */}
      <section className="py-28 bg-primary text-white overflow-hidden relative">
         <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="whitespace-nowrap text-[4rem] sm:text-[8rem] md:text-[16rem] font-display font-extrabold opacity-[0.03] pointer-events-none absolute top-0 md:-top-20 left-0 leading-none select-none"
         >
           BLUE OCEAN INCO
         </motion.div>
         <div className="max-w-7xl mx-auto px-6 relative z-10">
           <motion.div 
             initial="hidden"
             whileInView="visible"
             viewport={{ once: true, margin: "-100px" }}
             variants={staggerContainer}
           >
             <motion.div variants={fadeInUp} className="mb-8 overflow-hidden">
               <span className="inline-block px-4 py-2 rounded-full border border-white/20 text-xs font-semibold uppercase tracking-widest backdrop-blur-md">
                 The CA Advantage
               </span>
             </motion.div>
             <motion.h2 variants={fadeInUp} className="font-display text-5xl md:text-8xl font-bold mb-20 text-white max-w-5xl tracking-tighter leading-tight">
               The CA Advantage in Modern Investment
             </motion.h2>

             <div className="grid md:grid-cols-2 gap-16 lg:gap-24 relative">
               <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-white/30 to-transparent hidden md:block"></div>
               <motion.div 
                 initial="hidden" whileInView="visible" viewport={{ once: true }}
                 variants={fadeInUp} className="md:pt-16 group"
               >
                 <div className="text-secondary-fixed-dim/40 font-display text-5xl md:text-7xl font-bold mb-8 group-hover:text-secondary-fixed transition-colors duration-500">.01</div>
                 <h3 className="font-display text-3xl font-bold mb-6 text-white">Regulatory Rigor</h3>
                 <p className="text-white/60 text-lg leading-relaxed">Our foundation is built on compliance and ethical governance, led by the highest certification in finance.</p>
               </motion.div>
               <motion.div 
                 initial="hidden" whileInView="visible" viewport={{ once: true }}
                 variants={fadeInUp} className="md:pt-16 group"
               >
                 <div className="text-secondary-fixed-dim/40 font-display text-5xl md:text-7xl font-bold mb-8 group-hover:text-secondary-fixed transition-colors duration-500">.02</div>
                 <h3 className="font-display text-3xl font-bold mb-6 text-white">Structured Growth</h3>
                 <p className="text-white/60 text-lg leading-relaxed">We view investments as living balances, requiring constant tuning and structural integrity checks.</p>
               </motion.div>
             </div>
           </motion.div>
         </div>
      </section>

      <Footer />
    </div>
  );
}
