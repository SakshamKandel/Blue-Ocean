"use client";

import React from 'react';
import { motion, Variants } from 'framer-motion';
import Link from 'next/link';
import Footer from '@/components/Footer';

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
};

export default function Terms() {
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
            <h1 className="font-display text-4xl md:text-5xl font-bold text-primary tracking-tight mb-6">Terms of Service</h1>
            <p className="text-on-surface-variant mb-12">Last updated: March 2024</p>
          </motion.div>

          <motion.div initial="hidden" animate="visible" variants={fadeInUp} className="prose prose-lg max-w-none text-on-surface-variant space-y-8">
            <section>
              <h2 className="font-display text-2xl font-bold text-primary mb-4">1. Acceptance of Terms</h2>
              <p className="leading-relaxed">By accessing and using the Blue Ocean Inco platform, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services. These terms apply to all users, visitors, promoters, and investors.</p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-primary mb-4">2. Investment Services</h2>
              <p className="leading-relaxed">Blue Ocean Inco provides investment management services led by qualified Chartered Accountants. All investments carry inherent risk. Past performance does not guarantee future results. We recommend consulting with independent financial advisors before making investment decisions.</p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-primary mb-4">3. User Responsibilities</h2>
              <p className="leading-relaxed">Users are responsible for maintaining the confidentiality of their account credentials, providing accurate and up-to-date information, complying with all applicable laws and regulations, and reporting any unauthorized access to their accounts immediately.</p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-primary mb-4">4. Intellectual Property</h2>
              <p className="leading-relaxed">All content on this platform, including text, graphics, logos, and proprietary investment models, is the property of Blue Ocean Inco Pvt Ltd. Unauthorized reproduction, distribution, or use of any content is strictly prohibited.</p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-primary mb-4">5. Limitation of Liability</h2>
              <p className="leading-relaxed">Blue Ocean Inco shall not be liable for any indirect, incidental, or consequential damages arising from the use of our services. Our total liability is limited to the amount of fees paid by you in the twelve months preceding any claim.</p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-primary mb-4">6. Governing Law</h2>
              <p className="leading-relaxed">These terms are governed by the laws of Nepal. Any disputes arising from these terms shall be resolved through arbitration in Kathmandu, Nepal, in accordance with applicable arbitration laws.</p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-primary mb-4">7. Contact</h2>
              <p className="leading-relaxed">For questions about these terms, contact us at legal@blueoceaninco.com or write to Blue Ocean Inco Pvt Ltd, Kathmandu, Nepal.</p>
            </section>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
