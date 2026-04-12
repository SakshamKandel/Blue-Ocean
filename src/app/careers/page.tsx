"use client";

import React from 'react';
import { motion, Variants } from 'framer-motion';
import Link from 'next/link';
import Footer from '@/components/Footer';

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
};

export default function Careers() {
  return (
    <div className="min-h-screen bg-surface-lowest font-sans pt-32">

      <div className="pt-12 md:pt-20 pb-12 px-4 sm:px-6 overflow-hidden">
        <div className="max-w-4xl mx-auto">
          <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
            <p className="text-secondary text-[10px] font-bold uppercase tracking-[0.5em] mb-4">Talent Acquisition</p>
            <h1 className="font-display text-4xl sm:text-5xl md:text-7xl font-black text-primary tracking-tighter mb-8 leading-[0.9] md:leading-[0.85]">
              Build the Future of <br/>
              <span className="text-secondary italic font-light">Institutional Finance.</span>
            </h1>
            <p className="text-on-surface-variant text-xl max-w-2xl leading-relaxed mb-20 font-light opacity-70">
              We are building the future of CA-led investment management. If you thrive at the intersection of forensic precision, capital architecture, and institutional integrity — join our mission.
            </p>
          </motion.div>

          <motion.div initial="hidden" animate="visible" variants={fadeInUp} className="space-y-6">
            {[
              { title: 'Investment Research Analyst', type: 'Full-time', location: 'Kathmandu HQ', desc: 'Execute bottom-up forensic research on listed equities and private placement opportunities.' },
              { title: 'Forensic Audit Associate', type: 'Full-time', location: 'Kathmandu HQ', desc: 'Maintain structural integrity across our portfolio through rigorous balance sheet and compliance monitoring.' },
              { title: 'Real Estate Operations Lead', type: 'Full-time', location: 'Kathmandu / Site', desc: 'Oversee the development and management of our strategic commercial real estate assets.' },
              { title: 'Strategic Partnership Manager', type: 'Full-time', location: 'Hybrid', desc: 'Manage institutional relationships and facilitate capital alignment with our high-alpha objectives.' },
            ].map((role) => (
              <div key={role.title} className="p-5 sm:p-8 bg-surface-lowest rounded-2xl hover:shadow-lg transition-shadow duration-300 group cursor-pointer">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <h3 className="font-display text-xl font-bold text-primary group-hover:text-secondary transition-colors">{role.title}</h3>
                    <div className="flex flex-wrap gap-x-4 gap-y-1 mt-2 text-sm text-on-surface-variant">
                      <span>{role.type}</span>
                      <span>•</span>
                      <span>{role.location}</span>
                    </div>
                    <p className="mt-3 text-on-surface-variant leading-relaxed">{role.desc}</p>
                  </div>
                  <Link href="/contact" className="w-full shrink-0 px-6 py-3 bg-primary text-white rounded-full text-sm font-semibold hover:bg-secondary transition-colors text-center md:w-auto">
                    Apply Now
                  </Link>
                </div>
              </div>
            ))}
          </motion.div>

          <motion.div initial="hidden" animate="visible" variants={fadeInUp} className="mt-16 md:mt-20 p-6 sm:p-10 md:p-12 bg-primary rounded-[2rem] md:rounded-[3rem] text-center border border-white/10 shadow-2xl">
            <h3 className="font-display text-3xl font-black text-white mb-6">The Future is Bespoke.</h3>
            <p className="text-white/60 mb-10 max-w-xl mx-auto font-light leading-relaxed">We&apos;re always looking for exceptional talent from fiscal backgrounds. If you believe your expertise aligns with our forensic-first approach, we want to hear from you.</p>
            <Link href="/contact" className="inline-flex w-full justify-center px-8 sm:w-auto sm:px-12 py-5 bg-secondary text-primary rounded-full font-bold hover:bg-white transition-all shadow-xl">
              Submit Your Thesis
            </Link>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
