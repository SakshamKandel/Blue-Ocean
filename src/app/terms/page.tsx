"use client";

import React from 'react';
import { motion, Variants } from 'framer-motion';
import Footer from '@/components/Footer';

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
};

export default function Terms() {
  return (
    <div className="min-h-screen bg-surface-lowest font-sans pt-32">

      <div className="pt-12 md:pt-20 pb-12 px-4 sm:px-6 overflow-hidden">
        <div className="max-w-3xl mx-auto">
          <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
            <p className="text-secondary text-[10px] font-bold uppercase tracking-[0.5em] mb-4">Firm Governance</p>
            <h1 className="font-display text-4xl sm:text-5xl md:text-7xl font-black text-primary tracking-tighter mb-8 leading-[0.9] md:leading-[0.85]">
              Terms of <br/>
              <span className="text-secondary italic font-light">Service.</span>
            </h1>
            <p className="text-on-surface-variant text-xl mb-20 font-light opacity-70">Last updated: April 2026</p>
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
              <p className="leading-relaxed">For questions about these terms, contact us at <span className="font-bold text-primary">info@blueocean.com.np</span> or write to Blue Ocean Inco Pvt. Ltd., Kathmandu, Nepal.</p>
            </section>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
