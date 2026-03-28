"use client";

import React from 'react';
import { motion, Variants } from 'framer-motion';
import Link from 'next/link';
import Footer from '@/components/Footer';

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
};

export default function Privacy() {
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
            <Link href="/contact" className="hover:text-white transition-opacity opacity-60">Contact</Link>
          </div>
        </div>
      </nav>

      <div className="pt-20 pb-12 px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
            <p className="text-secondary text-sm font-semibold uppercase tracking-widest mb-4">Legal</p>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-primary tracking-tight mb-6">Privacy Policy</h1>
            <p className="text-on-surface-variant mb-12">Last updated: March 2024</p>
          </motion.div>

          <motion.div initial="hidden" animate="visible" variants={fadeInUp} className="prose prose-lg max-w-none text-on-surface-variant space-y-8">
            <section>
              <h2 className="font-display text-2xl font-bold text-primary mb-4">1. Information We Collect</h2>
              <p className="leading-relaxed">Blue Ocean Inco Pvt Ltd (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) collects personal information when you interact with our platform. This includes your name, email address, phone number, financial information relevant to investment services, and any other data you voluntarily provide during registration or communication with our team.</p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-primary mb-4">2. How We Use Your Information</h2>
              <p className="leading-relaxed">We use collected information to provide, maintain, and improve our investment management services, communicate with you regarding your account and investments, comply with legal and regulatory obligations, and protect against fraud and unauthorized access.</p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-primary mb-4">3. Data Protection</h2>
              <p className="leading-relaxed">We implement industry-standard security measures to protect your personal and financial data. All sensitive information is encrypted in transit and at rest. Our systems undergo regular security audits conducted by independent third parties.</p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-primary mb-4">4. Data Sharing</h2>
              <p className="leading-relaxed">We do not sell or rent your personal information to third parties. We may share information with regulatory authorities as required by law, trusted service providers who assist us in operating our platform, and professional advisors including auditors and legal counsel.</p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-primary mb-4">5. Your Rights</h2>
              <p className="leading-relaxed">You have the right to access, correct, or delete your personal data. You may also request a copy of the data we hold about you. To exercise any of these rights, contact us at privacy@blueoceaninco.com.</p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-primary mb-4">6. Contact</h2>
              <p className="leading-relaxed">For questions regarding this privacy policy, please contact our Data Protection Officer at privacy@blueoceaninco.com or write to us at Blue Ocean Inco Pvt Ltd, Kathmandu, Nepal.</p>
            </section>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

