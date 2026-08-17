"use client";

import React from 'react';
import { motion, Variants } from 'framer-motion';
import Footer from '@/components/Footer';

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
};

export default function Disclosures() {
  return (
    <div className="min-h-screen bg-surface-lowest font-sans pt-32">

      <div className="pt-12 md:pt-20 pb-12 px-4 sm:px-6 overflow-hidden">
        <div className="max-w-3xl mx-auto">
          <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
            <p className="text-secondary text-sm font-semibold uppercase tracking-widest mb-4">Compliance</p>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-primary tracking-tight mb-6">Regulatory Disclosures</h1>
            <p className="text-on-surface-variant mb-12">Last updated: March 2026</p>
          </motion.div>

          <motion.div initial="hidden" animate="visible" variants={fadeInUp} className="prose prose-lg max-w-none text-on-surface-variant space-y-8">
            <section>
              <h2 className="font-display text-2xl font-bold text-primary mb-4">Firm Registration</h2>
              <p className="leading-relaxed">Blue Ocean Inco Pvt Ltd is a registered private limited company under the laws of Nepal. The firm is led by qualified Chartered Accountants and adheres to all applicable regulatory requirements governing investment management activities in its operating jurisdictions.</p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-primary mb-4">Investment Risks</h2>
              <p className="leading-relaxed">All investments carry risk, including the potential loss of principal. The value of investments may fluctuate and past performance does not guarantee future results. Projected or hypothetical performance data is not indicative of actual returns. Investors should carefully consider their investment objectives, risk tolerance, and financial circumstances before committing capital.</p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-primary mb-4">Conflicts of Interest</h2>
              <p className="leading-relaxed">Blue Ocean Inco maintains robust policies and procedures to identify, manage, and mitigate conflicts of interest. Our Chartered Accountant leadership ensures fiduciary standards are maintained at all times. A detailed conflicts of interest policy is available upon request.</p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-primary mb-4">Fee Structure</h2>
              <p className="leading-relaxed">Our fee structure varies depending on the investment product and service level. All fees are fully disclosed to clients prior to engagement. We do not receive undisclosed commissions or compensation from third parties for recommending specific investment products.</p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-primary mb-4">Client Fund Safeguarding</h2>
              <p className="leading-relaxed">Client funds are held in segregated accounts with regulated custodian banks. Blue Ocean Inco does not commingle client assets with firm assets. All capital movements are fully auditable and transparent to promoters in accordance with our Radical Transparency pillar.</p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-primary mb-4">Complaint Handling</h2>
              <p className="leading-relaxed">We have established a formal complaint resolution process. Complaints may be directed to Blueocean1169@gmail.com. We aim to acknowledge all complaints within 2 business days and provide a substantive response within 14 business days.</p>
            </section>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
