"use client";

import React from 'react';
import { motion, Variants } from 'framer-motion';
import Link from 'next/link';
import Footer from '@/components/Footer';
import { BookOpen, Newspaper, FileText } from 'lucide-react';

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
};

export default function Insights() {
  return (
    <div className="min-h-screen bg-surface-lowest font-sans pt-32 selection:bg-secondary/20">
      
      <div className="pt-20 pb-32 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="text-center mb-32">
            <motion.p variants={fadeInUp} className="text-secondary text-[10px] font-bold uppercase tracking-[0.5em] mb-6">The Knowledge Layer</motion.p>
            <motion.h1 variants={fadeInUp} className="font-display text-6xl md:text-9xl font-black text-primary tracking-tighter mb-10 leading-[0.85]">
              Insights & <br/>
              <span className="text-secondary italic font-light">Theses.</span>
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-on-surface-variant text-xl max-w-2xl mx-auto leading-relaxed font-light opacity-70">
              Forensic analysis, market deep-dives, and institutional reports. Our knowledge layer is being architected for maximum clarity and depth.
            </motion.p>
          </motion.div>

          {/* Grid of Placeholders */}
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="grid md:grid-cols-3 gap-8 mb-32">
            {[
              { 
                icon: BookOpen, 
                title: "The Forensic Thesis", 
                category: "Whitepaper", 
                desc: "Our foundational document on using CA-led auditing to identify market efficiencies." 
              },
              { 
                icon: Newspaper, 
                title: "Real Estate Corridors", 
                category: "Macro Report", 
                desc: "An analysis of Kathmandu's commercial expansion and the 2028 growth horizon." 
              },
              { 
                icon: FileText, 
                title: "Quarterly Alpha Review", 
                category: "Performance", 
                desc: "Dissecting the cycles and drivers of our sustainable alpha during Q1 2026." 
              }
            ].map((item, i) => (
              <motion.div 
                key={item.title} 
                variants={fadeInUp}
                className="p-12 bg-white rounded-[3rem] border border-outline-variant/10 shadow-xl shadow-black/[0.02] flex flex-col items-start group hover:border-primary/20 transition-all duration-500"
              >
                <div className="w-16 h-16 rounded-2xl bg-primary/5 flex items-center justify-center text-primary mb-10 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                  <item.icon className="w-8 h-8" strokeWidth={1.5} />
                </div>
                <p className="text-secondary text-[10px] font-bold uppercase tracking-widest mb-4">{item.category}</p>
                <h3 className="font-display text-3xl font-black text-primary mb-6 tracking-tight leading-tight">{item.title}</h3>
                <p className="text-on-surface-variant leading-relaxed opacity-70 mb-10">{item.desc}</p>
                <div className="mt-auto px-6 py-2 rounded-full border border-outline-variant/20 text-[10px] font-bold uppercase tracking-widest text-on-surface-variant group-hover:bg-primary/5 transition-colors">
                  Available Soon
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }} 
            variants={fadeInUp} 
            className="p-20 bg-primary rounded-[4rem] text-center relative overflow-hidden shadow-2xl"
          >
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>

            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="font-display text-4xl md:text-5xl font-black text-white mb-8 tracking-tight">Intelligence on Demand.</h2>
              <p className="text-white/60 text-lg mb-12 font-light leading-relaxed">
                Subscribe to receive our institutional research directly in your inbox. No noise. Just forensic-level insights.
              </p>
              <form className="flex flex-col sm:flex-row gap-4" onSubmit={(e) => e.preventDefault()}>
                <input 
                  type="email" 
                  placeholder="name@institutional.com" 
                  className="flex-1 px-8 py-5 rounded-full bg-white/5 border border-white/10 text-white outline-none focus:border-secondary transition-all"
                />
                <button type="submit" className="px-12 py-5 bg-secondary text-primary rounded-full font-bold hover:bg-white transition-all shadow-xl">
                  Connect
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
