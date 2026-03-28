"use client";

import React from 'react';
import { motion, useScroll, useTransform, Variants, AnimatePresence } from 'framer-motion';
import { ShieldCheck, Eye, TrendingUp } from 'lucide-react';
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

export default function About() {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"]
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, -200]);
  
  return (
    <div className="min-h-screen bg-surface selection:bg-secondary/20 font-sans relative">
      <nav className="fixed w-full z-50 top-0 px-4 py-2 sm:px-6 sm:py-3 mix-blend-difference text-white pointer-events-none">
        <div className="max-w-7xl mx-auto flex flex-col gap-2 md:flex-row md:justify-between md:items-center pointer-events-auto">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="flex items-center">
            <Link href="/">
              <img src="/Logo.png" alt="Logo" className="h-10 sm:h-12 w-auto object-contain" />
            </Link>
          </motion.div>
          <div className="flex gap-5 sm:gap-8 md:gap-12 font-medium text-xs sm:text-sm tracking-wide overflow-x-auto whitespace-nowrap pb-1 md:pb-0 max-w-full">
             <Link href="/" className="opacity-60 hover:opacity-100 transition-opacity">Home</Link>
             <Link href="/about" className="opacity-100 border-b border-white pb-1">About</Link>
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

      {/* Hero Section */}
      <section className="min-h-[50vh] w-full bg-primary flex flex-col justify-end px-4 sm:px-6 pb-12 relative overflow-hidden text-white pt-24 md:pt-20">
        <motion.div 
          style={{ y }} 
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary-container/40 via-primary to-primary pointer-events-none"
        />
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay"></div>
        <div className="max-w-7xl mx-auto w-full relative z-10">
           <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="flex flex-col">
              <motion.div variants={fadeInUp} className="mb-4 overflow-hidden">
                <span className="inline-block px-4 py-2 rounded-full border border-white/20 text-xs font-semibold uppercase tracking-widest backdrop-blur-md">
                  About Us
                </span>
              </motion.div>
              <motion.h1 variants={fadeInUp} className="font-display text-5xl sm:text-7xl md:text-[6rem] font-bold tracking-tighter leading-[0.9] text-white mb-4">
                The Union of <br/>
                <span className="text-secondary-fixed-dim">Precision and Vision.</span>
              </motion.h1>
              <motion.p variants={fadeInUp} className="max-w-3xl text-xl text-primary-fixed-dim font-light leading-relaxed">
                Founded by a collective of visionary Chartered Accountants and aspiring CA students, Blue Ocean Inco represents the convergence of academic rigor and investment foresight.
              </motion.p>
           </motion.div>
        </div>
      </section>

      {/* ═══════════════════════ OUR GENESIS ═══════════════════════ */}
      <section className="py-28 px-6 bg-surface-lowest relative z-20">
        <div className="max-w-5xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
            <motion.p variants={fadeInUp} className="text-secondary text-sm font-semibold uppercase tracking-widest mb-4">Our Genesis</motion.p>
            <motion.h2 variants={fadeInUp} className="font-display text-4xl md:text-6xl font-bold tracking-tight text-primary mb-12 leading-tight">
              Where it all began
            </motion.h2>
            <motion.div variants={fadeInUp} className="p-10 bg-surface rounded-3xl border border-outline-variant/10">
              <p className="text-on-surface-variant text-lg leading-relaxed mb-6">
                In March 2022, five CA students recognized a critical gap in the domestic investment landscape of Nepal. While traditional investment vehicles existed, there was no institution that combined the analytical rigor of chartered accountancy with modern portfolio management.
              </p>
              <p className="text-on-surface-variant text-lg leading-relaxed">
                Their objective was clear: strategically deploy pooled capital into data-driven investment vehicles, guided by the same forensic precision they applied to financial audits. What began as a shared vision among classmates has evolved into a structured investment management firm guided by the highest standards of financial governance.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════ MISSION & VISION ═══════════════════════ */}
      <section className="py-28 px-6 bg-surface">
        <div className="max-w-7xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid md:grid-cols-2 gap-12">
            <motion.div variants={fadeInUp} className="p-10 bg-primary rounded-3xl text-white">
              <p className="text-secondary-fixed-dim text-sm font-semibold uppercase tracking-widest mb-4">Our Vision</p>
              <h3 className="font-display text-3xl font-bold mb-6">The Benchmark for Excellence</h3>
              <p className="text-white/70 text-lg leading-relaxed">
                To become the benchmark for investment excellence in Nepal, where transparency and sustainable growth form the horizon of every decision.
              </p>
            </motion.div>
            <motion.div variants={fadeInUp} className="p-10 bg-surface-lowest rounded-3xl border border-outline-variant/10">
              <p className="text-secondary text-sm font-semibold uppercase tracking-widest mb-4">Our Mission</p>
              <h3 className="font-display text-3xl font-bold text-primary mb-6">Preserve and Enhance</h3>
              <p className="text-on-surface-variant text-lg leading-relaxed">
                To preserve and enhance capital by applying rigorous analytical frameworks and maintaining radical transparency with every promoter and stakeholder.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════ OUR JOURNEY (TIMELINE) ═══════════════════════ */}
      <section className="py-28 px-6 bg-surface">
        <div className="max-w-4xl mx-auto" ref={containerRef}>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="mb-20 text-center">
            <motion.p variants={fadeInUp} className="text-secondary text-sm font-semibold uppercase tracking-widest mb-4">Milestones</motion.p>
            <motion.h2 variants={fadeInUp} className="font-display text-4xl md:text-5xl font-bold tracking-tight text-primary">Our Journey</motion.h2>
          </motion.div>

          <div className="relative md:ml-32 space-y-12">
            {/* Animated Vertical Line */}
            <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-secondary/10">
              <motion.div 
                style={{ scaleY: scrollYProgress, originY: 0 }}
                className="w-full h-full bg-secondary shadow-[0_0_10px_rgba(0,163,255,0.2)]"
              />
              {/* Follower Node */}
              <motion.div 
                style={{ top: useTransform(scrollYProgress, [0, 1], ["0%", "100%"]) }}
                className="absolute left-1/2 -translate-x-1/2 w-3 h-3 bg-secondary rounded-full shadow-[0_0_15px_rgba(0,163,255,0.6)] z-20 border-2 border-surface"
              />
            </div>
            
            {[
              { date: 'March 2022', title: 'The Genesis', desc: 'A collective of five CA students identifies a gap in data-driven investment vehicles in Nepal.' },
              { date: 'September 2022', title: 'Initial Capital Pool', desc: 'Successful deployment of first-tier promoter capital into distressed real estate and blue-chip equities.' },
              { date: 'June 2023', title: 'Institutional Governance', desc: 'Implementation of full forensic audit protocols and radical transparency dashboard for promoters.' },
              { date: 'Early 2024', title: 'Digital Transformation', desc: 'Launch of the Blue Ocean Inco platform and AI-integrated market intelligence engine.' },
            ].map((milestone, i) => (
              <motion.div 
                key={milestone.date}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
                className="relative pl-12 md:pl-20"
              >
                {/* Connecting Arm */}
                <div className="absolute left-0 top-8 w-8 md:w-16 h-[1px] bg-secondary/20"></div>

                {/* Content Panel */}
                <div className="max-w-2xl">
                  <motion.div 
                    className="p-8 rounded-[32px] bg-surface-lowest border border-outline-variant/10 hover:border-secondary/20 transition-all duration-300 relative overflow-hidden group"
                  >
                    <div className="absolute top-0 right-0 w-24 h-24 bg-secondary/5 rounded-full -mr-12 -mt-12 group-hover:bg-secondary/10 transition-colors"></div>
                    
                    <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-4 mb-3">
                       <p className="text-secondary font-display font-bold text-sm uppercase tracking-widest">{milestone.date}</p>
                       <h3 className="font-display text-xl md:text-2xl font-bold text-primary">{milestone.title}</h3>
                    </div>
                    <p className="text-on-surface-variant leading-relaxed text-base">{milestone.desc}</p>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════ CREDIBILITY & COMPLIANCE ═══════════════════════ */}
      <section className="py-24 px-6 bg-surface-lowest">
        <div className="max-w-7xl mx-auto">
          <div className="p-12 md:p-16 bg-primary rounded-[40px] text-white overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
            <div className="relative z-10 grid md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="font-display text-4xl md:text-5xl font-bold mb-8">Credibility Built on Certification.</h2>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                      <ShieldCheck className="w-5 h-5 text-secondary-fixed-dim" />
                    </div>
                    <p className="text-white/70 leading-relaxed"><span className="text-white font-bold text-lg block">ICAN Affiliated Leadership</span> Our core team consists of members affiliated with the Institute of Chartered Accountants of Nepal (ICAN).</p>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                      <TrendingUp className="w-5 h-5 text-secondary-fixed-dim" />
                    </div>
                    <p className="text-white/70 leading-relaxed"><span className="text-white font-bold text-lg block">IFRS Compliance</span> We adhere strictly to International Financial Reporting Standards in all our internal and promoter reporting.</p>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-10 bg-white/5 rounded-3xl backdrop-blur-md border border-white/10 flex flex-col items-center justify-center text-center">
                  <p className="font-display text-5xl font-bold text-secondary-fixed-dim mb-3">
                    100<span className="text-2xl">%</span>
                  </p>
                  <p className="text-xs uppercase tracking-widest text-white/50 font-bold">Audit Rigor</p>
                </div>
                <div className="p-10 bg-white/5 rounded-3xl backdrop-blur-md border border-white/10 flex flex-col items-center justify-center text-center">
                  <p className="font-display text-5xl font-bold text-secondary-fixed-dim mb-3">NPR 0</p>
                  <p className="text-xs uppercase tracking-widest text-white/50 font-bold">Hidden Costs</p>
                </div>
                <div className="p-10 bg-white/5 rounded-3xl backdrop-blur-md border border-white/10 flex flex-col items-center justify-center text-center col-span-2">
                  <p className="font-display text-2xl font-bold text-white mb-3">Fiduciary Standards</p>
                  <p className="text-xs uppercase tracking-widest text-white/50 font-bold">Ethical Governance First</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════ LEADERSHIP ═══════════════════════ */}
      <section className="py-28 px-6 bg-surface-lowest">
        <div className="max-w-7xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
            <motion.p variants={fadeInUp} className="text-secondary text-sm font-semibold uppercase tracking-widest mb-4">Leadership</motion.p>
            <motion.h2 variants={fadeInUp} className="font-display text-4xl md:text-6xl font-bold tracking-tight text-primary mb-16 leading-tight">
              The Minds Behind<br/>the Ocean
            </motion.h2>
            <motion.div variants={staggerContainer} className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: 'Siddharth Varma, FCA',
                  role: 'Founding Partner',
                  desc: 'Equity markets expert with deep expertise in forensic valuation and strategic capital allocation.',
                  initials: 'SV'
                },
                {
                  name: 'Core Promoter, ACA',
                  role: 'Investment Analyst',
                  desc: 'Specialist in fiscal policy and regulatory compliance, ensuring every move meets the highest governance standards.',
                  initials: 'CP'
                },
                {
                  name: 'Founding Member, CA',
                  role: 'Chartered Accountant',
                  desc: 'Focused on energy sector analysis and portfolio diversification across financial and non-financial asset classes.',
                  initials: 'FM'
                },
              ].map((person) => (
                <motion.div key={person.name} variants={fadeInUp} className="p-8 bg-surface rounded-3xl group hover:-translate-y-2 transition-transform duration-500">
                  <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center mb-6 group-hover:bg-secondary transition-colors duration-500">
                    <span className="text-white font-display text-xl font-bold">{person.initials}</span>
                  </div>
                  <h3 className="font-display text-xl font-bold text-primary mb-1">{person.name}</h3>
                  <p className="text-secondary text-sm font-semibold mb-4">{person.role}</p>
                  <p className="text-on-surface-variant leading-relaxed">{person.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════ THE PILLARS ═══════════════════════ */}
      <section className="py-28 bg-primary text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
            <motion.p variants={fadeInUp} className="text-secondary-fixed-dim text-sm font-semibold uppercase tracking-widest mb-4">Our Values</motion.p>
            <motion.h2 variants={fadeInUp} className="font-display text-4xl md:text-6xl font-bold tracking-tight mb-16 leading-tight">
              The Pillars
            </motion.h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: ShieldCheck, title: 'Unwavering Ethics', desc: 'We adhere to the highest global ethical standards. Integrity is not negotiable — it is our foundation.' },
                { icon: Eye, title: 'Radical Transparency', desc: 'Promoters have 24/7 visibility into capital movement. No hidden allocations, no opaque strategies.' },
                { icon: TrendingUp, title: 'Disciplined Growth', desc: 'We focus on long-term compound returns over speculative peaks. Patience is our competitive advantage.' },
              ].map((pillar) => (
                <motion.div key={pillar.title} variants={fadeInUp} className="p-8 rounded-3xl border border-white/10 group hover:bg-white/5 transition-colors duration-300">
                  <pillar.icon className="w-10 h-10 text-secondary-fixed-dim mb-6" strokeWidth={1.5} />
                  <h3 className="font-display text-2xl font-bold mb-4">{pillar.title}</h3>
                  <p className="text-white/60 text-lg leading-relaxed">{pillar.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

