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
    <div className="min-h-screen bg-surface font-sans">
      <nav className="fixed w-full z-50 top-0 px-4 py-2 sm:px-6 sm:py-3 mix-blend-difference text-white pointer-events-none">
        <div className="max-w-7xl mx-auto flex flex-col gap-2 md:flex-row md:justify-between md:items-center pointer-events-auto">
          <Link href="/">
            <img src="/Logo.png" alt="Logo" className="h-10 sm:h-12 w-auto object-contain" />
          </Link>
          <div className="flex gap-5 sm:gap-8 md:gap-12 font-medium text-xs sm:text-sm tracking-wide overflow-x-auto whitespace-nowrap pb-1 md:pb-0 max-w-full">
            <Link href="/" className="opacity-60 hover:opacity-100 transition-opacity">Home</Link>
            <Link href="/about" className="opacity-60 hover:opacity-100 transition-opacity">About</Link>
            <Link href="/strategy" className="hover:text-white transition-opacity opacity-60">Strategy</Link>
            <Link href="/portfolio" className="hover:text-white transition-opacity opacity-60">Portfolio</Link>
            <Link href="/contact" className="hover:text-white transition-opacity opacity-60">Contact</Link>
          </div>
          <Link href="/contact" className="hidden md:inline-flex px-6 py-2.5 rounded-full border border-white/20 hover:bg-white hover:text-black transition-all pointer-events-auto">
            JOIN US
          </Link>
        </div>
      </nav>

      <div className="pt-20 pb-12 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
            <p className="text-secondary text-sm font-semibold uppercase tracking-widest mb-4">Join Us</p>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-primary tracking-tight mb-6">Careers at Blue Ocean</h1>
            <p className="text-on-surface-variant text-lg max-w-2xl leading-relaxed mb-16">We&apos;re building the future of CA-led investment management. If you thrive at the intersection of finance, technology, and integrity — we want to hear from you.</p>
          </motion.div>

          <motion.div initial="hidden" animate="visible" variants={fadeInUp} className="space-y-6">
            {[
              { title: 'Senior Financial Analyst', type: 'Full-time', location: 'Kathmandu', desc: 'Lead forensic analysis on potential investments and build financial models for portfolio evaluation.' },
              { title: 'Portfolio Risk Manager', type: 'Full-time', location: 'Kathmandu', desc: 'Design and implement hedging strategies to protect downside while maintaining growth exposure.' },
              { title: 'Frontend Engineer', type: 'Full-time', location: 'Remote', desc: 'Build premium client-facing dashboards and real-time portfolio tracking interfaces.' },
              { title: 'Compliance Officer', type: 'Full-time', location: 'Kathmandu', desc: 'Ensure regulatory compliance across all jurisdictions and maintain our ethical governance framework.' },
            ].map((role) => (
              <div key={role.title} className="p-8 bg-surface-lowest rounded-2xl hover:shadow-lg transition-shadow duration-300 group cursor-pointer">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <h3 className="font-display text-xl font-bold text-primary group-hover:text-secondary transition-colors">{role.title}</h3>
                    <div className="flex gap-4 mt-2 text-sm text-on-surface-variant">
                      <span>{role.type}</span>
                      <span>•</span>
                      <span>{role.location}</span>
                    </div>
                    <p className="mt-3 text-on-surface-variant leading-relaxed">{role.desc}</p>
                  </div>
                  <Link href="/contact" className="shrink-0 px-6 py-3 bg-primary text-white rounded-full text-sm font-semibold hover:bg-secondary transition-colors">
                    Apply Now
                  </Link>
                </div>
              </div>
            ))}
          </motion.div>

          <motion.div initial="hidden" animate="visible" variants={fadeInUp} className="mt-16 p-10 bg-primary rounded-3xl text-center">
            <h3 className="font-display text-2xl font-bold text-white mb-4">Don&apos;t see your role?</h3>
            <p className="text-white/70 mb-6 max-w-md mx-auto">We&apos;re always looking for exceptional talent. Send your resume and a brief note about what excites you about Blue Ocean Inco.</p>
            <Link href="/contact" className="inline-block px-8 py-3 bg-white text-primary rounded-full font-semibold hover:bg-secondary-fixed transition-colors">
              Get in Touch
            </Link>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
