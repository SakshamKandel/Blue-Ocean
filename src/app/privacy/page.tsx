"use client";

import React from 'react';
import { motion, Variants } from 'framer-motion';
import Footer from '@/components/Footer';

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
};

export default function Privacy() {
  return (
    <div className="min-h-screen bg-surface-lowest font-sans pt-32">

      <div className="pt-12 md:pt-20 pb-12 px-4 sm:px-6 overflow-hidden">
        <div className="max-w-3xl mx-auto">
          <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
            <p className="text-secondary text-[10px] font-bold uppercase tracking-[0.5em] mb-4">Data Integrity</p>
            <h1 className="font-display text-4xl sm:text-5xl md:text-7xl font-black text-primary tracking-tighter mb-8 leading-[0.9] md:leading-[0.85]">
              Privacy <br/>
              <span className="text-secondary italic font-light">Architecture.</span>
            </h1>
            <p className="text-on-surface-variant text-xl mb-20 font-light opacity-70">Last updated: April 2026</p>
          </motion.div>

          <motion.div initial="hidden" animate="visible" variants={fadeInUp} className="prose prose-lg max-w-none text-on-surface-variant space-y-8">
            <section>
              <h2 className="font-display text-2xl font-bold text-primary mb-4">1. Information We Collect</h2>
              <p className="leading-relaxed">Blue Ocean Inco Pvt. Ltd. (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) collects personal information when you interact with our platform. This includes your name, email address, phone number, financial information relevant to investment services, and any other data you voluntarily provide during registration or communication with our team.</p>
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
              <p className="leading-relaxed">For questions regarding this privacy policy, please contact our Data Protection Officer at <span className="font-bold text-primary">info@blueocean.com.np</span> or write to us at Blue Ocean Inco Pvt. Ltd., Kathmandu, Nepal.</p>
            </section>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

