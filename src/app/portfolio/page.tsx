"use client";

import React from 'react';
import { motion, useScroll, useTransform, Variants } from 'framer-motion';
import { Building2, Landmark, Leaf, TrendingUp, BarChart3, ShieldCheck } from 'lucide-react';
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

export default function Portfolio() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -180]);

  return (
    <div className="min-h-screen bg-surface-lowest selection:bg-secondary/20 font-sans relative">
      <section className="min-h-[45vh] w-full bg-primary flex flex-col justify-end px-4 sm:px-6 pb-10 relative overflow-hidden text-white pt-32">
        <motion.div
          style={{ y }}
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-primary-container/40 via-primary to-primary pointer-events-none"
        />
        <div className="max-w-7xl mx-auto w-full relative z-10">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="flex flex-col">
            <motion.div variants={fadeInUp} className="mb-4">
              <span className="inline-block px-4 py-2 rounded-full border border-white/20 text-xs font-semibold uppercase tracking-widest backdrop-blur-md">
                Portfolio Overview
              </span>
            </motion.div>
            <motion.h1 variants={fadeInUp} className="font-display text-5xl sm:text-7xl md:text-[6rem] font-black tracking-tighter leading-[0.85] text-white mb-4">
              Precision Allocation. <br/>
              <span className="text-secondary-fixed-dim italic font-light">Institutional Growth.</span>
            </motion.h1>
            <motion.div variants={fadeInUp} className="flex flex-wrap gap-4 mt-4">
              <div className="px-5 py-3 rounded-full border border-white/20 backdrop-blur-md">
                <span className="text-white/70 text-sm">AUM Guidance:</span>
                <span className="text-white font-display font-bold ml-2">NPR 4.2B+</span>
              </div>
              <div className="px-5 py-3 rounded-full border border-white/20 backdrop-blur-md">
                <span className="text-white/70 text-sm">Compliance:</span>
                <span className="text-white font-display font-bold ml-2">100% CA-Led</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════ FINANCIAL SECURITIES ═══════════════════════ */}
      <section className="py-28 px-6 bg-surface-lowest relative z-20">
        <div className="max-w-7xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={staggerContainer}>
            <motion.p variants={fadeInUp} className="text-secondary text-sm font-semibold uppercase tracking-widest mb-4">Financial Securities</motion.p>
            <motion.h2 variants={fadeInUp} className="font-display text-4xl md:text-6xl font-bold tracking-tight text-primary mb-16 leading-tight">
              Public Equities & <br/>Listed Growth
            </motion.h2>
          </motion.div>

          {/* Featured Fund */}
          <motion.div initial={{ opacity: 0, y: 40, scale: 0.98 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} className="p-10 bg-primary rounded-3xl text-white mb-12">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
              <div>
                <p className="text-secondary-fixed-dim text-sm font-semibold uppercase tracking-widest mb-2">Featured Fund</p>
                <h3 className="font-display text-3xl md:text-4xl font-bold mb-4">Blue Ocean Core Equity</h3>
                <p className="text-white/60 text-lg max-w-xl leading-relaxed">Our anchor equity strategy focuses on Category-1 and Category-2 listed companies with forensic-verified balance sheets and sustainable dividends.</p>
              </div>
              <div className="flex flex-wrap gap-6 shrink-0">
                <div className="text-center">
                  <p className="text-secondary-fixed-dim text-sm font-semibold mb-1">Yield Target</p>
                  <p className="font-display text-3xl font-bold">14.2%</p>
                  <p className="text-white/50 text-xs">Per Annum</p>
                </div>
                <div className="text-center">
                  <p className="text-secondary-fixed-dim text-sm font-semibold mb-1">Risk</p>
                  <p className="font-display text-3xl font-bold">Moderate</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Other Instruments */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={staggerContainer} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: BarChart3, name: 'Corporate Debentures', detail: 'Portfolio Weight: 22%' },
              { icon: Landmark, name: 'Government Bonds', detail: 'Liquid & Stable' },
              { icon: TrendingUp, name: 'Mutual Fund Units', detail: 'Diversified Growth' },
              { icon: ShieldCheck, name: 'IPOs', detail: 'Early-Stage Access' },
            ].map((item) => (
              <motion.div key={item.name} variants={fadeInUp} className="p-8 bg-surface rounded-2xl border border-outline-variant/10 group hover:-translate-y-1 transition-transform duration-300">
                <item.icon className="w-8 h-8 text-secondary mb-4 group-hover:text-primary transition-colors" strokeWidth={1.5} />
                <h3 className="font-display text-lg font-bold text-primary mb-2">{item.name}</h3>
                <p className="text-on-surface-variant text-sm">{item.detail}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════ YIELD SPECTRUM ═══════════════════════ */}
      <section className="py-28 px-6 bg-surface-lowest">
        <div className="max-w-5xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="text-center mb-16">
            <p className="text-secondary text-sm font-semibold uppercase tracking-widest mb-4">Return Benchmarks</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-primary">Alpha Horizons</h2>
          </motion.div>
          
          <div className="space-y-8">
            {[
              { label: 'Fixed Income (Bonds/Debentures)', yield: '9-11%', risk: 'Low', percent: 35, color: 'bg-primary-container' },
              { label: 'Strategic Equities (Blue Chip)', yield: '12-18%', risk: 'Moderate', percent: 65, color: 'bg-secondary' },
              { label: 'Alternative Assets (Real Estate/Agro)', yield: '20%+', risk: 'High', percent: 100, color: 'bg-primary' },
            ].map((item) => (
              <motion.div key={item.label} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="group">
                <div className="flex justify-between items-end mb-2">
                  <span className="font-display font-bold text-primary">{item.label}</span>
                  <span className="text-secondary font-bold">{item.yield} <span className="text-xs text-on-surface-variant font-medium">Target</span></span>
                </div>
                <div className="h-4 bg-surface rounded-full overflow-hidden border border-outline-variant/10">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: `${item.percent}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                    className={`h-full ${item.color}`}
                  ></motion.div>
                </div>
                <p className="text-xs text-on-surface-variant mt-2 font-medium uppercase tracking-widest">Risk Level: {item.risk}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════ PROMOTER BENEFITS ═══════════════════════ */}
      <section className="py-28 px-6 bg-primary text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <p className="text-secondary-fixed-dim text-sm font-semibold uppercase tracking-widest mb-4">Promoter Access</p>
                <h2 className="font-display text-4xl md:text-6xl font-bold mb-8 leading-tight">Institutional <br/>Engagement.</h2>
                <p className="text-white/70 text-lg leading-relaxed mb-8">
                  Participation in Blue Ocean Inco isn&apos;t just passive capital; it&apos;s an alignment with a professional investment engine governed by 100% CA-led leadership.
                </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                  <h4 className="font-display font-semibold mb-2">24/7 Portal Access</h4>
                  <p className="text-sm text-white/50">Real-time audit-trailing of all your capital movements.</p>
                </div>
                <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                  <h4 className="font-display font-semibold mb-2">Priority Re-investment</h4>
                  <p className="text-sm text-white/50">First right of refusal on high-alpha alternative opportunities.</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="p-12 bg-white/5 backdrop-blur-xl rounded-[40px] border border-white/10">
                <blockquote className="space-y-6">
                  <p className="text-2xl font-light italic leading-relaxed text-white/90">
                    &quot;Our commitment to radical transparency isn&apos;t just a value; it&apos;s encoded in our reporting architecture. Every promoter sees what we see.&quot;
                  </p>
                  <footer className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-secondary"></div>
                    <div>
                      <p className="font-display font-bold">Siddharth Varma, FCA</p>
                      <p className="text-sm text-white/50 uppercase tracking-widest">Founding Partner</p>
                    </div>
                  </footer>
                </blockquote>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════ NON-FINANCIAL ASSETS ═══════════════════════ */}
      <section className="py-28 px-6 bg-surface">
        <div className="max-w-7xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
            <motion.p variants={fadeInUp} className="text-secondary text-sm font-semibold uppercase tracking-widest mb-4">Non-Financial Assets</motion.p>
            <motion.h2 variants={fadeInUp} className="font-display text-4xl md:text-6xl font-bold tracking-tight text-primary mb-6 leading-tight">
              Real Estate & <br/>Strategic Assets
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-on-surface-variant text-xl leading-relaxed max-w-2xl mb-16 opacity-70">
              Allocating toward the permanence of the ground. Our real estate portfolio focuses on high-yield commercial assets and strategic land banking in growth corridors.
            </motion.p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid md:grid-cols-2 gap-8">
            <motion.div variants={fadeInUp} className="p-10 bg-surface-lowest rounded-3xl border border-outline-variant/10 group hover:-translate-y-2 transition-transform duration-500">
              <Building2 className="w-10 h-10 text-secondary mb-6" strokeWidth={1.5} />
              <h3 className="font-display text-2xl font-bold text-primary mb-4">Core Commercial Assets</h3>
              <p className="text-on-surface-variant text-lg leading-relaxed mb-6">Flagship acquisition in central Kathmandu. High-demand commercial floor space with professional anchor tenants and CA-managed yields.</p>
              <div className="flex flex-wrap gap-4">
                <span className="px-4 py-2 rounded-full bg-surface text-sm font-bold text-secondary uppercase tracking-widest text-[10px]">Prime Hub</span>
                <span className="px-4 py-2 rounded-full bg-surface text-sm font-bold text-primary uppercase tracking-widest text-[10px]">Exit Target: 2028</span>
              </div>
            </motion.div>
            <motion.div variants={fadeInUp} className="p-10 bg-surface-lowest rounded-3xl border border-outline-variant/10 group hover:-translate-y-2 transition-transform duration-500">
              <Leaf className="w-10 h-10 text-secondary mb-6" strokeWidth={1.5} />
              <h3 className="font-display text-2xl font-bold text-primary mb-4">Agro-Estate Development</h3>
              <p className="text-on-surface-variant text-lg leading-relaxed mb-6">Sustainable land development in the eastern hills focused on premium export commodities and eco-tourism infrastructure.</p>
              <div className="flex flex-wrap gap-4">
                <span className="px-4 py-2 rounded-full bg-surface text-sm font-medium text-primary">Agro-Industrial</span>
                <span className="px-4 py-2 rounded-full bg-surface text-sm font-medium text-primary">Sustainable</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Sector Tags */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="mt-16 flex flex-wrap gap-4 justify-center">
            {['Real Estate', 'Hospitality Infrastructure', 'Agro-Industrial Land'].map((sector) => (
              <span key={sector} className="px-6 py-3 rounded-full border border-outline-variant/20 text-primary font-medium">
                {sector}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
