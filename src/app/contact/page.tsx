"use client";

import React from 'react';
import { motion, useScroll, useTransform, Variants } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Clock } from 'lucide-react';
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

export default function Contact() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -180]);
  const opacity = useTransform(scrollYProgress, [0, 0.18], [1, 0.4]);

  return (
    <div className="min-h-screen bg-surface selection:bg-secondary/20 font-sans relative">
      <nav className="fixed w-full z-50 top-0 px-4 py-2 sm:px-6 sm:py-3 mix-blend-difference text-white pointer-events-none">
        <div className="max-w-7xl mx-auto flex flex-col gap-2 md:flex-row md:justify-between md:items-center pointer-events-auto">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="flex items-center">
            <Link href="/">
              <img src="/Logo.png" alt="Logo" className="h-10 sm:h-12 w-auto object-contain" />
            </Link>
          </motion.div>
          <div className="flex gap-5 sm:gap-8 md:gap-12 font-medium text-xs sm:text-sm tracking-wide overflow-x-auto whitespace-nowrap pb-1 md:pb-0 max-w-full">
             <Link href="/" className="opacity-60 hover:opacity-100 transition-opacity">Home</Link>
             <Link href="/about" className="opacity-60 hover:opacity-100 transition-opacity">About</Link>
             <Link href="/strategy" className="opacity-60 hover:opacity-100 transition-opacity">Strategy</Link>
             <Link href="/portfolio" className="opacity-60 hover:opacity-100 transition-opacity">Portfolio</Link>
             <Link href="/contact" className="opacity-100 border-b border-white pb-1">Contact</Link>
          </div>
          <motion.a 
            href="https://www.nepalstock.com/" 
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ delay: 0.7 }} 
            className="hidden md:inline-flex px-6 py-2.5 rounded-full border border-white/20 hover:bg-white hover:text-black transition-all pointer-events-auto"
          >
            NEPAL STOCK
          </motion.a>
        </div>
      </nav>

      {/* Hero Content */}
      <section className="w-full bg-primary flex flex-col justify-center px-4 sm:px-6 relative overflow-hidden text-white pt-28 md:pt-20 pb-12">
        <motion.div
          style={{ y, opacity }}
          className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-primary-container/45 via-primary to-primary pointer-events-none"
        />
        <div className="max-w-7xl mx-auto w-full relative z-10">
           <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="grid md:grid-cols-2 gap-16 items-start">
             
             {/* Left: Info */}
             <motion.div variants={fadeInUp} className="flex flex-col">
               <motion.div variants={fadeInUp} className="mb-8 overflow-hidden">
                 <span className="inline-block px-4 py-2 rounded-full border border-white/20 text-xs font-semibold uppercase tracking-widest backdrop-blur-md">
                   Get in Touch
                 </span>
               </motion.div>
               <motion.h1 variants={fadeInUp} className="font-display text-5xl sm:text-7xl md:text-[5rem] font-bold tracking-tighter leading-[0.9] text-white mb-6">
                 Connect with <br/>
                 <span className="text-secondary-fixed-dim">Clarity.</span>
               </motion.h1>
               <motion.p variants={fadeInUp} className="text-primary-fixed-dim text-lg max-w-md font-light leading-relaxed mb-12">
                 Whether you&apos;re a seasoned investor or just starting your journey, our team is ready to guide you through every step.
               </motion.p>

               <motion.div variants={staggerContainer} className="space-y-6">
                 <motion.div variants={fadeInUp} className="flex items-center gap-5">
                   <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10 shrink-0">
                     <Mail className="w-5 h-5 text-secondary-fixed-dim" />
                   </div>
                   <div>
                     <p className="text-sm text-primary-fixed-dim uppercase tracking-wider mb-0.5 font-semibold">Email</p>
                     <p className="text-lg">info@blueocean.com.np</p>
                   </div>
                 </motion.div>

                 <motion.div variants={fadeInUp} className="flex items-center gap-5">
                   <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10 shrink-0">
                     <Phone className="w-5 h-5 text-secondary-fixed-dim" />
                   </div>
                   <div>
                     <p className="text-sm text-primary-fixed-dim uppercase tracking-wider mb-0.5 font-semibold">Phone</p>
                     <p className="text-lg">+977 (1) 2345 678</p>
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
                    <select className="w-full bg-surface border border-outline-variant/30 rounded-xl px-5 py-3.5 outline-none focus:border-secondary transition-colors text-primary">
                      <option>General Inquiry</option>
                      <option>Investment Opportunity</option>
                      <option>Regulatory</option>
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
      <section className="py-28 px-4 sm:px-6 bg-surface">
        <div className="max-w-7xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={staggerContainer} className="text-center mb-16">
            <p className="text-secondary text-sm font-semibold uppercase tracking-widest mb-4">The Pathway</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-primary">Onboarding Process</h2>
          </motion.div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { title: 'Inquiry', desc: 'Reach out via the form or phone for an initial consultation.' },
              { title: 'Strategy Alignment', desc: 'Discussing your risk profile and growth objectives.' },
              { title: 'Due Diligence', desc: 'Full KYC and regulatory compliance checks by our CAs.' },
              { title: 'Activation', desc: 'Seamless capital deployment into your chosen vehicle.' },
            ].map((step, i) => (
              <motion.div key={step.title} variants={fadeInUp} className="relative p-8 bg-surface-lowest rounded-3xl border border-outline-variant/10">
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
      <section className="py-28 px-4 sm:px-6 bg-surface-lowest">
        <div className="max-w-3xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={staggerContainer} className="mb-16">
            <p className="text-secondary text-sm font-semibold uppercase tracking-widest mb-4">Clarifications</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-primary mb-8">Frequently Asked <br/>Questions</h2>
          </motion.div>

          <div className="space-y-6">
            {[
              { q: 'Who can become a promoter at Blue Ocean Inco?', a: 'We welcome both institutional and high-net-worth individual investors who align with our long-term vision and radical transparency ethics.' },
              { q: 'Is there a minimum investment threshold?', a: 'Yes, because of the forensic rigor and bespoke nature of our strategies, we maintain a minimum allocation threshold. Please contact us for details.' },
              { q: 'How often is performance reported?', a: 'While the digital portal provides 24/7 visibility, we issue formal audited quarterly performance reports to all promoters.' },
              { q: 'What is the lock-in period for alternative assets?', a: 'Lock-in periods vary depending on the liquidity tier of the asset class (e.g., real estate has a different horizon than equity funds).' },
            ].map((faq) => (
              <motion.div key={faq.q} variants={fadeInUp} className="p-8 bg-surface rounded-3xl border border-outline-variant/10 group">
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

