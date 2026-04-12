"use client";

import React from 'react';
import { motion, useScroll, useTransform, Variants } from 'framer-motion';
import { ShieldCheck, Eye, TrendingUp } from 'lucide-react';
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
    <div className="min-h-screen bg-surface-lowest selection:bg-secondary/20 font-sans relative">
      <section className="min-h-[50vh] w-full bg-primary flex flex-col justify-end px-4 sm:px-6 pb-12 relative overflow-hidden text-white pt-32">
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
               <motion.h1 variants={fadeInUp} className="font-display text-4xl sm:text-6xl md:text-[6rem] font-bold tracking-tighter leading-[0.95] sm:leading-[0.9] text-white mb-4">
                The Union of <br/>
                <span className="text-secondary-fixed-dim">Precision and Vision.</span>
              </motion.h1>
              <motion.p variants={fadeInUp} className="max-w-3xl text-xl text-primary-fixed-dim font-light leading-relaxed">
                Founded in Kathmandu with a conviction that Nepal&apos;s investors deserve institutional-grade research without institutional-grade opacity.
              </motion.p>
           </motion.div>
        </div>
      </section>

      {/* ═══════════════════════ OUR GENESIS ═══════════════════════ */}
      <section className="py-20 md:py-28 px-4 sm:px-6 bg-surface-lowest relative z-20 overflow-hidden">
        <div className="max-w-5xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
            <motion.p variants={fadeInUp} className="text-secondary text-sm font-semibold uppercase tracking-widest mb-4">Our Genesis</motion.p>
            <motion.h2 variants={fadeInUp} className="font-display text-4xl md:text-6xl font-black tracking-tighter text-primary mb-10 md:mb-12 leading-[0.9] md:leading-[0.85]">
              Rigor of the <br/><span className="italic text-secondary font-light">Audit Room.</span>
            </motion.h2>
            <motion.div variants={fadeInUp} className="p-6 sm:p-10 bg-surface rounded-[2rem] md:rounded-[2.5rem] border border-outline-variant/10 shadow-xl shadow-black/5">
              <p className="text-on-surface-variant text-lg leading-relaxed mb-6">
                Blue Ocean Inco Pvt. Ltd. was founded in Kathmandu with a conviction that Nepal&apos;s investors deserve institutional-grade research without institutional-grade opacity. Built from the ground up by Chartered Accountants, we bring the rigor of audit-room analysis into every investment decision.
              </p>
              <p className="text-on-surface-variant text-lg leading-relaxed">
                What began as a shared vision between classmates has evolved into a structured investment management firm guided by the highest standards of financial governance. We move beyond established boundaries to identify uncontested alpha.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════ MISSION & VISION ═══════════════════════ */}
      <section className="py-20 md:py-28 px-4 sm:px-6 bg-surface">
        <div className="max-w-7xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid md:grid-cols-2 gap-12">
            <motion.div variants={fadeInUp} className="p-6 sm:p-10 md:p-12 bg-primary rounded-[2rem] md:rounded-[3rem] text-white shadow-2xl">
              <p className="text-secondary-fixed-dim text-[10px] font-bold uppercase tracking-[0.4em] mb-6">Our Mission</p>
              <h3 className="font-display text-4xl font-bold mb-8 tracking-tight">Preserve and Enhance Capital.</h3>
              <p className="text-white/70 text-xl leading-relaxed font-light italic">
                &quot;To safeguard our clients&apos; capital and grow it sustainably — by identifying the opportunities others overlook and the risks others ignore.&quot;
              </p>
            </motion.div>
            <motion.div variants={fadeInUp} className="p-6 sm:p-10 md:p-12 bg-surface-lowest rounded-[2rem] md:rounded-[3rem] border border-outline-variant/10 shadow-xl">
              <p className="text-secondary text-[10px] font-bold uppercase tracking-[0.4em] mb-6">Our Vision</p>
              <h3 className="font-display text-4xl font-bold text-primary mb-8 tracking-tight">Nepal&apos;s Most Trusted Investment House.</h3>
              <p className="text-on-surface-variant text-lg leading-relaxed opacity-80">
                To expand from public and private equities today into real estate and alternative assets tomorrow — always led by the discipline of Chartered Accountants.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════ OUR JOURNEY (TIMELINE) ═══════════════════════ */}
      <section className="py-20 md:py-28 px-4 sm:px-6 bg-surface">
        <div className="max-w-5xl mx-auto" ref={containerRef}>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="mb-16 md:mb-24 text-center">
            <motion.p variants={fadeInUp} className="text-secondary text-[10px] font-bold uppercase tracking-[0.4em] mb-4">The Horizontal</motion.p>
            <motion.h2 variants={fadeInUp} className="font-display text-4xl sm:text-5xl md:text-7xl font-black tracking-tighter text-primary">Our Journey</motion.h2>
          </motion.div>

          <div className="relative md:ml-32 space-y-16">
            <div className="absolute left-0 top-0 bottom-0 w-[1.5px] bg-primary/5">
              <motion.div 
                style={{ scaleY: scrollYProgress, originY: 0 }}
                className="w-full h-full bg-primary"
              />
              <motion.div 
                style={{ top: useTransform(scrollYProgress, [0, 1], ["0%", "100%"]) }}
                className="absolute left-1/2 -track-x-1/2 w-4 h-4 bg-primary rounded-full z-20 border-4 border-surface"
              />
            </div>
            
            {[
              { title: 'Founding', desc: 'Blue Ocean Inco is established in Boudha, Kathmandu, with a 100% CA-led team.' },
              { title: 'Phase 1 — Public Equity', desc: 'Active coverage of listed Nepali companies begins with forensic rigor.' },
              { title: 'Phase 2 — Private Placements', desc: 'Expansion into private share investments and pre-IPO promoter equity.' },
              { title: 'Today', desc: 'Building a research-first portfolio for long-term institutional and private clients.' },
              { title: 'Next Horizon — Real Estate', desc: 'Bringing forensic underwriting and CA-led discipline to tangible property assets.' },
            ].map((milestone, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.8, delay: i * 0.1, ease: "circOut" }}
                className="relative pl-16 md:pl-24"
              >
                <div className="absolute left-0 top-6 w-12 md:w-20 h-[1.5px] bg-primary/10"></div>
                <div className="max-w-2xl">
                  <div className="p-6 sm:p-10 rounded-[2rem] md:rounded-[2.5rem] bg-surface-lowest border border-outline-variant/10 hover:border-primary/20 transition-all duration-500 group">
                    <h3 className="font-display text-2xl md:text-3xl font-black text-primary mb-4 group-hover:text-secondary transition-colors">{milestone.title}</h3>
                    <p className="text-on-surface-variant leading-relaxed text-lg opacity-70">{milestone.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════ LEADERSHIP PILLAR ═══════════════════════ */}
      <section className="py-20 md:py-28 px-4 sm:px-6 bg-surface-lowest overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="p-6 sm:p-12 md:p-24 bg-primary rounded-[2rem] md:rounded-[3rem] text-white overflow-hidden relative shadow-2xl">
            <div className="absolute top-0 right-0 w-[50%] h-full bg-secondary/5 -skew-x-12 translate-x-1/3" />
            <div className="relative z-10 max-w-4xl">
              <p className="text-secondary-fixed-dim text-[10px] font-bold uppercase tracking-[0.5em] mb-10">Leadership Standard</p>
              <h2 className="font-display text-4xl sm:text-5xl md:text-8xl font-black mb-10 md:mb-12 tracking-tighter leading-[0.9] md:leading-[0.85]">Every decision is made by a <span className="text-secondary-fixed-dim italic font-light">Chartered Accountant.</span></h2>
              <p className="text-white/60 text-xl leading-relaxed font-light mb-12">
                Not &quot;advised by.&quot; Not &quot;reviewed by.&quot; <span className="text-white font-bold italic">Made by.</span> That single standard is the foundation of everything we do.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                {[
                  { value: '100%', label: 'CA-Led' },
                  { value: 'Nepal', label: 'Boudha HQ' },
                  { value: 'Direct', label: 'Fixed Fiduciary' },
                  { value: 'Alpha', label: 'Research Goal' },
                ].map((stat, i) => (
                  <div key={i} className="space-y-2">
                    <p className="text-4xl font-display font-black text-secondary-fixed-dim tracking-tighter">{stat.value}</p>
                    <p className="text-[10px] font-bold tracking-widest uppercase text-white/40">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════ THE PILLARS ═══════════════════════ */}
      <section className="py-20 md:py-28 px-4 sm:px-6 bg-surface-lowest">
        <div className="max-w-7xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
            <p className="text-secondary text-[10px] font-bold uppercase tracking-[0.4em] mb-6">Core Values</p>
            <h2 className="font-display text-4xl sm:text-5xl md:text-7xl font-black tracking-tighter text-primary mb-12 md:mb-20 leading-tight">
              The Institutional<br/>Pillars.
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: ShieldCheck, title: 'Integrity', desc: 'Your capital is treated as our own. Absolute transparency in every transaction.' },
                { icon: Eye, title: 'Precision', desc: 'Every number is verified, every thesis is stress-tested. Forensic accuracy is our default.' },
                { icon: ShieldCheck, title: 'Stewardship', desc: 'We invest for decades, not quarters. Patient capital for long-term growth.' },
                { icon: TrendingUp, title: 'Alpha', desc: 'Outperformance earned through research, not risk-taking. Sustainable strategies only.' },
              ].map((pillar) => (
                <motion.div key={pillar.title} variants={fadeInUp} className="p-6 sm:p-10 rounded-[2rem] md:rounded-[2.5rem] bg-surface hover:bg-white border border-outline-variant/10 group transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5">
                  <div className="w-14 h-14 rounded-2xl bg-primary/5 flex items-center justify-center text-primary mb-8 group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-sm">
                    <pillar.icon className="w-6 h-6" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-display text-2xl font-bold mb-4 text-primary tracking-tight">{pillar.title}</h3>
                  <p className="text-on-surface-variant text-base leading-relaxed opacity-70">{pillar.desc}</p>
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

