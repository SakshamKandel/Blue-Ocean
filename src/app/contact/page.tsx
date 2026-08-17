"use client";

import React from 'react';
import { motion, useScroll, useTransform, Variants } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Clock } from 'lucide-react';
import Footer from '@/components/Footer';

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
};

export default function Contact() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -180]);
  const opacity = useTransform(scrollYProgress, [0, 0.18], [1, 0.4]);

  return (
    <div className="min-h-screen bg-surface-lowest selection:bg-secondary/20 font-sans relative">
      <section className="w-full bg-primary flex flex-col justify-center px-4 sm:px-6 relative overflow-hidden text-white pt-32 pb-12">
        <motion.div
          style={{ y, opacity }}
          className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-primary-container/45 via-primary to-primary pointer-events-none"
        />
        <div className="max-w-7xl mx-auto w-full relative z-10">
           <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="grid md:grid-cols-2 gap-10 md:gap-16 items-start">
             
             {/* Left: Info */}
             <motion.div variants={fadeInUp} className="flex flex-col">
               <motion.div variants={fadeInUp} className="mb-8 overflow-hidden">
                 <span className="inline-block px-4 py-2 rounded-full border border-white/20 text-xs font-semibold uppercase tracking-widest backdrop-blur-md">
                   Get in Touch
                 </span>
               </motion.div>
                <motion.h1 variants={fadeInUp} className="font-display text-4xl sm:text-6xl md:text-[5rem] font-black tracking-tighter leading-[0.95] sm:leading-[0.9] md:leading-[0.85] text-white mb-6">
                  Institutional <br/>
                  <span className="text-secondary-fixed-dim italic font-light">Inquiries.</span>
                </motion.h1>
                <motion.p variants={fadeInUp} className="text-primary-fixed-dim text-base sm:text-lg max-w-md font-light leading-relaxed mb-10 md:mb-12 opacity-80">
                  Direct channels for Institutional Partners, Real Estate Developers, and Private Share Placements. Our 100% CA-led team ensures professional engagement from the first touchpoint.
                </motion.p>

               <motion.div variants={staggerContainer} className="space-y-6">
                 <motion.div variants={fadeInUp} className="flex items-center gap-5">
                   <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10 shrink-0">
                     <Mail className="w-5 h-5 text-secondary-fixed-dim" />
                   </div>
                   <div>
                     <p className="text-sm text-primary-fixed-dim uppercase tracking-wider mb-0.5 font-semibold">Email</p>
                     <p className="text-lg">Blueocean1169@gmail.com</p>
                   </div>
                 </motion.div>

                 <motion.div variants={fadeInUp} className="flex items-center gap-5">
                   <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10 shrink-0">
                     <Phone className="w-5 h-5 text-secondary-fixed-dim" />
                   </div>
                   <div>
                     <p className="text-sm text-primary-fixed-dim uppercase tracking-wider mb-0.5 font-semibold">Phone</p>
                     <p className="text-lg">+977 9802320122</p>
                   </div>
                 </motion.div>

                 <motion.div variants={fadeInUp} className="flex items-center gap-5">
                   <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10 shrink-0">
                     <MapPin className="w-5 h-5 text-secondary-fixed-dim" />
                   </div>
                   <div>
                     <p className="text-sm text-primary-fixed-dim uppercase tracking-wider mb-0.5 font-semibold">Headquarters</p>
                     <p className="text-lg">Bouddha 6, Kathmandu<br/>Bagmati Province, Nepal</p>
                   </div>
                 </motion.div>

                 <motion.div variants={fadeInUp} className="flex items-center gap-5">
                   <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10 shrink-0">
                     <Clock className="w-5 h-5 text-secondary-fixed-dim" />
                   </div>
                   <div>
                     <p className="text-sm text-primary-fixed-dim uppercase tracking-wider mb-0.5 font-semibold">Office Hours</p>
                     <p className="text-lg">Sun–Thu: 10:00 – 17:00</p>
                     <p className="text-white/50 text-sm">Fri: 10:00 – 15:00 &middot; Sat: Closed</p>
                   </div>
                 </motion.div>
               </motion.div>
             </motion.div>

             {/* Right: Form */}
             <motion.div variants={fadeInUp} className="bg-surface-lowest rounded-[28px] sm:rounded-[32px] p-6 sm:p-8 md:p-10 text-on-surface shadow-2xl mt-4">
                <h3 className="font-display text-3xl text-primary font-bold mb-2">Send a Message</h3>
                <p className="text-on-surface-variant mb-8">We typically respond within one business day.</p>
                <form className="space-y-5 flex flex-col" onSubmit={(e) => e.preventDefault()}>
                  <div>
                    <label className="block text-sm font-semibold uppercase tracking-wider text-on-surface-variant mb-2">Full Name</label>
                    <input type="text" className="w-full bg-surface border border-outline-variant/30 rounded-xl px-5 py-3.5 outline-none focus:border-secondary transition-colors text-primary" placeholder="Your full name" required />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold uppercase tracking-wider text-on-surface-variant mb-2">Email Address</label>
                    <input type="email" className="w-full bg-surface border border-outline-variant/30 rounded-xl px-5 py-3.5 outline-none focus:border-secondary transition-colors text-primary" placeholder="you@company.com" required />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold uppercase tracking-wider text-on-surface-variant mb-2">Subject</label>
                    <select className="w-full bg-surface border border-outline-variant/30 rounded-xl px-5 py-3.5 outline-none focus:border-secondary transition-colors text-primary appearance-none">
                      <option>Institutional Partnership</option>
                      <option>Real Estate Proposal</option>
                      <option>Private Share Placement</option>
                      <option>Careers & Talent</option>
                      <option>General Support</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold uppercase tracking-wider text-on-surface-variant mb-2">Message</label>
                    <textarea rows={4} className="w-full bg-surface border border-outline-variant/30 rounded-xl px-5 py-3.5 outline-none focus:border-secondary transition-colors resize-none text-primary" placeholder="Tell us about your objectives..." required></textarea>
                  </div>
                  <button type="submit" className="mt-4 bg-primary text-white rounded-full py-4 px-8 font-bold flex items-center justify-center gap-2 hover:bg-secondary transition-colors">
                    Send Message <Send className="w-5 h-5" />
                  </button>
                </form>
             </motion.div>
             
           </motion.div>
        </div>
      </section>

      {/* ═══════════════════════ ONBOARDING PROCESS ═══════════════════════ */}
      <section className="py-20 md:py-28 px-4 sm:px-6 bg-surface">
        <div className="max-w-7xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={staggerContainer} className="text-center mb-16">
            <p className="text-secondary text-sm font-semibold uppercase tracking-widest mb-4">The Pathway</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-primary">Onboarding Process</h2>
          </motion.div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { title: 'Forensic Inquiry', desc: 'Direct engagement via our institutional channels for a preliminary thesis review.' },
              { title: 'Strategic Alignment', desc: 'Collaborating to map your capital objectives against our risk horizons.' },
              { title: 'CA Due Diligence', desc: 'Rigorous structural and regulatory audit of the deployment framework.' },
              { title: 'Alpha Activation', desc: 'Seamless placement into forensic-backed asset classes or real estate.' },
            ].map((step, i) => (
              <motion.div key={step.title} variants={fadeInUp} className="relative p-6 sm:p-8 bg-surface-lowest rounded-3xl border border-outline-variant/10">
                <div className="text-secondary font-display text-5xl font-bold mb-4 opacity-20">{i + 1}</div>
                <h3 className="font-display text-xl font-bold text-primary mb-3">{step.title}</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">{step.desc}</p>
                {i < 3 && <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-[1px] bg-outline-variant/30"></div>}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════ FAQ SECTION ═══════════════════════ */}
      <section className="py-20 md:py-28 px-4 sm:px-6 bg-surface-lowest">
        <div className="max-w-3xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={staggerContainer} className="mb-16">
            <p className="text-secondary text-sm font-semibold uppercase tracking-widest mb-4">Clarifications</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-primary mb-8">Frequently Asked <br/>Questions</h2>
          </motion.div>

          <div className="space-y-6">
            {[
              { q: 'Who can partner with Blue Ocean Inco?', a: 'We focus on Institutional Partners and High-Net-Worth individuals who value forensic precision and long-term capital preservation.' },
              { q: 'What is the minimum allocation threshold?', a: 'Due to the institutional rigor of our forensic auditing and bespoke management, we maintain strict minimum entry thresholds per asset class.' },
              { q: 'How is performance transparency handled?', a: 'Our proprietary digital portal provides real-time visibility into your capital deployment, supplemented by audited quarterly reports.' },
              { q: 'What is the horizon for real estate exits?', a: 'Real estate positions are typically held on a 5–7 year horizon to maximize development yields and capital appreciation.' },
            ].map((faq) => (
              <motion.div key={faq.q} variants={fadeInUp} className="p-6 sm:p-8 bg-surface rounded-3xl border border-outline-variant/10 group">
                <h4 className="font-display text-lg font-bold text-primary mb-3 group-hover:text-secondary transition-colors">{faq.q}</h4>
                <p className="text-on-surface-variant leading-relaxed">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

