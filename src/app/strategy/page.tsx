"use client";

import React from 'react';
import { motion, useScroll, useTransform, Variants } from 'framer-motion';
import { Shield, Activity, FileCheck, Gauge, ChevronRight } from 'lucide-react';
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

export default function Strategy() {
  const [auditState, setAuditState] = React.useState<'idle' | 'processing' | 'result'>('idle');
  const [formData, setFormData] = React.useState({ aum: '', risk: 'moderate', assets: 'equities' });
  const [auditResult, setAuditResult] = React.useState('');
  const [auditScore, setAuditScore] = React.useState(0);
  const [validationError, setValidationError] = React.useState('');
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -200]);

  const handleAudit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate AUM
    const aumClean = formData.aum.replace(/[^0-9]/g, '');
    if (!formData.aum.trim() || !/[0-9]/.test(formData.aum)) {
      setValidationError('Please enter a real financial value (e.g. 50M or 1Cr)');
      return;
    }
    
    setValidationError('');
    setAuditState('processing');
    setAuditResult('');
    setAuditScore(0);
    
    try {
      const prompt = `As the Blue Ocean Inco AI concierge, provide a professional 'Quantamental Audit' on this specific portfolio:
Scale: NPR ${formData.aum} 
Strategy: ${formData.risk === 'high' ? 'High Alpha Pursuit' : formData.risk === 'moderate' ? 'Moderate Growth' : 'Low Risk Preservation'}
Asset Focus: ${formData.assets}

Your analysis must be tailored specifically to the NEPSE (Nepal Stock Exchange) landscape for an account of this size. 
Format: Exactly 2 natural paragraphs. No markdown.
Important: You MUST provide a numeric efficiency score (1-100) based on your analysis at the very end using this token: [[SCORE:XX]]`;

      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: [{ role: 'user', content: prompt }],
        }),
      });

      if (!res.ok) throw new Error('Audit failed');

      const reader = res.body?.getReader();
      const decoder = new TextDecoder();
      let accumulated = '';
      
      if (reader) {
        setAuditState('result');
        let done = false;
        while (!done) {
          const { value, done: readerDone } = await reader.read();
          done = readerDone;
          if (value) {
            const chunk = decoder.decode(value, { stream: true });
            accumulated += chunk;
            
            // Extraction & Cleanup
            const scoreMatch = accumulated.match(/\[\[SCORE:(\d+)\]\]/);
            if (scoreMatch) {
              setAuditScore(parseInt(scoreMatch[1]));
              // Clean the display text of ALL score tokens globally
              setAuditResult(accumulated.replace(/\[\[SCORE:\d+\]\]/g, '').trim());
            } else {
              setAuditResult(accumulated.trim());
            }
          }
        }
      }
    } catch (err) {
      console.error(err);
      setAuditState('idle');
    }
  };
  
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
             <Link href="/strategy" className="opacity-100 border-b border-white pb-1">Strategy</Link>
             <Link href="/portfolio" className="opacity-60 hover:opacity-100 transition-opacity">Portfolio</Link>
             <Link href="/contact" className="opacity-60 hover:opacity-100 transition-opacity">Contact</Link>
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

      {/* Hero Section */}
      <section className="min-h-[60vh] w-full bg-primary flex flex-col justify-end px-4 sm:px-6 pb-12 relative overflow-hidden text-white pt-28 md:pt-20">
        <motion.div 
          style={{ y }}
          className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-primary-container/40 via-primary to-primary pointer-events-none"
        />
        <div className="max-w-7xl mx-auto w-full relative z-10 flex flex-col">
           <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="flex flex-col">
             <motion.div variants={fadeInUp} className="mb-4 overflow-hidden">
               <span className="inline-block px-4 py-2 rounded-full border border-white/20 text-xs font-semibold uppercase tracking-widest backdrop-blur-md">
                 Investment Strategy
               </span>
             </motion.div>
             <motion.h1 variants={fadeInUp} className="font-display text-5xl sm:text-7xl md:text-[6rem] font-bold tracking-tighter leading-[0.9] text-white mb-4">
               The Immersive <br/>
               <span className="text-secondary-fixed-dim">Investment Horizon.</span>
             </motion.h1>
             <motion.div variants={fadeInUp} className="flex flex-wrap items-center gap-4 mt-4">
               <div className="px-5 py-3 rounded-full border border-white/20 backdrop-blur-md">
                 <span className="text-secondary-fixed-dim font-semibold text-sm">Growth Target:</span>
                 <span className="text-white font-display font-bold text-lg ml-2">12-15% PA</span>
               </div>
             </motion.div>
             <motion.div variants={fadeInUp} className="mt-10 flex gap-4 flex-wrap w-full">
               <Link href="/portfolio" className="inline-flex w-full sm:w-auto justify-center items-center gap-3 bg-secondary-fixed text-primary px-8 py-4 rounded-full font-bold hover:bg-white transition-colors group">
                 Explore Strategy <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform"/>
               </Link>
               <Link href="/contact" className="inline-flex w-full sm:w-auto justify-center items-center gap-3 border border-white/20 text-white px-8 py-4 rounded-full font-bold hover:bg-white/10 transition-colors">
                 Review Whitepaper
               </Link>
             </motion.div>
           </motion.div>
        </div>
      </section>

      {/* ═══════════════════════ THE ECOSYSTEM ═══════════════════════ */}
      <section className="py-28 px-6 bg-surface-lowest relative z-20">
        <div className="max-w-7xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
            <motion.p variants={fadeInUp} className="text-secondary text-sm font-semibold uppercase tracking-widest mb-4">The Ecosystem</motion.p>
            <motion.h2 variants={fadeInUp} className="font-display text-4xl md:text-6xl font-bold tracking-tight text-primary mb-6 leading-tight">
              A Balanced Ecosystem
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-on-surface-variant text-lg leading-relaxed max-w-3xl mb-16">
              Our strategy synthesizes the liquidity of financial securities with the permanence of non-financial assets, creating a resilient portfolio that performs across market cycles.
            </motion.p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid md:grid-cols-2 gap-12">
            <motion.div variants={fadeInUp}>
              <h3 className="font-display text-2xl font-bold text-primary mb-8 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center">
                  <Activity className="w-5 h-5 text-secondary" strokeWidth={1.5} />
                </div>
                Financial Securities
              </h3>
              <div className="space-y-4">
                {[
                  'Blue-chip Growth Funds',
                  'Government Bond Arbitrage',
                  'Quantitative Alpha Strategies',
                ].map((item) => (
                  <div key={item} className="p-6 bg-surface rounded-2xl border border-outline-variant/10 hover:-translate-y-1 transition-transform duration-300">
                    <p className="font-display font-bold text-primary">{item}</p>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <h3 className="font-display text-2xl font-bold text-primary mb-8 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center">
                  <Shield className="w-5 h-5 text-secondary" strokeWidth={1.5} />
                </div>
                Non-Financial Assets
              </h3>
              <div className="space-y-4">
                {[
                  'Prime Commercial Real Estate',
                  'Sustainable Infrastructure Projects',
                  'Strategic Commodities & Land',
                ].map((item) => (
                  <div key={item} className="p-6 bg-surface rounded-2xl border border-outline-variant/10 hover:-translate-y-1 transition-transform duration-300">
                    <p className="font-display font-bold text-primary">{item}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════ ASSET ALLOCATION ═══════════════════════ */}
      <section className="py-28 px-6 bg-surface">
        <div className="max-w-5xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="text-center mb-16">
            <motion.p variants={fadeInUp} className="text-secondary text-sm font-semibold uppercase tracking-widest mb-4">Allocation</motion.p>
            <motion.h2 variants={fadeInUp} className="font-display text-4xl md:text-5xl font-bold tracking-tight text-primary">Asset Allocation Mix</motion.h2>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid md:grid-cols-3 gap-8">
            {[
              { label: 'REITs', pct: '45%', color: 'bg-primary' },
              { label: 'Infrastructure', pct: '35%', color: 'bg-secondary' },
              { label: 'Land', pct: '20%', color: 'bg-primary-container' },
            ].map((asset) => (
              <motion.div key={asset.label} variants={fadeInUp} className="text-center p-10 bg-surface-lowest rounded-3xl border border-outline-variant/10">
                <div className={`w-24 h-24 ${asset.color} rounded-full flex items-center justify-center mx-auto mb-6`}>
                  <span className="text-white font-display text-2xl font-bold">{asset.pct}</span>
                </div>
                <p className="font-display text-xl font-bold text-primary">{asset.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════ ALPHA MODELS ═══════════════════════ */}
      <section className="py-28 px-6 bg-surface">
        <div className="max-w-7xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div variants={fadeInUp}>
              <p className="text-secondary text-sm font-semibold uppercase tracking-widest mb-4">Proprietary Models</p>
              <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-primary mb-8 leading-tight">
                Alpha Generation <br/>Through Data Science.
              </h2>
              <p className="text-on-surface-variant text-lg leading-relaxed mb-8">
                We utilize proprietary quantitative models that scan the domestic and international horizons for technical inefficiencies. By combining these with our CA-led fundamental analysis, we achieve a &quot;Quantamental&quot; edge.
              </p>
              <div className="space-y-4">
                <div className="p-6 bg-surface-lowest rounded-2xl border border-outline-variant/10">
                  <h4 className="font-display font-bold text-primary mb-2">Arbitrage Detection Engine</h4>
                  <p className="text-sm text-on-surface-variant">Real-time monitoring of yield spreads between government bonds and corporate debentures.</p>
                </div>
                <div className="p-6 bg-surface-lowest rounded-2xl border border-outline-variant/10">
                  <h4 className="font-display font-bold text-primary mb-2">Sentiment Correlation Layer</h4>
                  <p className="text-sm text-on-surface-variant">Correlating market news and social sentiment with volume breakouts to predict short-term volatility.</p>
                </div>
              </div>
            </motion.div>
            <motion.div variants={fadeInUp} className="relative group">
              <div className="aspect-square bg-surface-lowest rounded-[48px] overflow-hidden flex flex-col items-center justify-center p-8 md:p-12 text-center border border-outline-variant/10 relative">
                
                {auditState === 'idle' && (
                  <motion.form 
                    initial={{ opacity: 0 }} 
                    animate={{ opacity: 1 }}
                    onSubmit={handleAudit}
                    className="w-full space-y-6 relative z-10"
                  >
                    <div className="space-y-4 text-left">
                      <label className="text-xs font-bold uppercase tracking-widest text-secondary">Asset Portfolio Data</label>
                      <input 
                        type="text" 
                        placeholder="Hypothetical AUM (e.g. 50M NPR)" 
                        className={`w-full bg-surface p-4 rounded-2xl border ${validationError ? 'border-red-500/50' : 'border-outline-variant/20'} focus:border-secondary outline-none transition-all text-primary shadow-sm`}
                        value={formData.aum}
                        onChange={(e) => {
                          setFormData({...formData, aum: e.target.value});
                          if(validationError) setValidationError('');
                        }}
                        onBlur={() => {
                          if (!formData.aum.trim() || !/[0-9]/.test(formData.aum)) {
                            setValidationError('Enter a real value');
                          }
                        }}
                        required
                      />
                      {validationError && (
                        <motion.p initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="text-[11px] text-red-500 font-bold ml-2">
                          ! {validationError}
                        </motion.p>
                      )}
                      <select 
                        className="w-full bg-surface p-4 rounded-2xl border border-outline-variant/20 focus:border-secondary outline-none transition-colors text-primary appearance-none"
                        value={formData.risk}
                        onChange={(e) => setFormData({...formData, risk: e.target.value})}
                      >
                        <option value="low">Low Risk Tolerance</option>
                        <option value="moderate">Moderate Growth</option>
                        <option value="high">High Alpha Pursuit</option>
                      </select>
                    </div>
                      <button 
                        type="submit"
                        className="w-full bg-primary text-white p-5 rounded-2xl font-bold hover:bg-secondary transition-colors"
                      >
                        Initialize Quantamental Audit
                      </button>
                  </motion.form>
                )}

                {auditState === 'processing' && (
                  <div className="relative z-10 space-y-8">
                    {/* Radar Scan Effect */}
                    <div className="absolute inset-0 pointer-events-none -translate-y-20">
                      <motion.div 
                        animate={{ rotate: 360 }}
                        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-[200%] bg-[conic-gradient(from_0deg,transparent_0deg,rgba(0,18,63,0.03)_360deg)]"
                      />
                    </div>
                    
                    <div className="relative w-32 h-32 mx-auto">
                      <motion.div 
                        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute inset-0 rounded-full bg-secondary/20"
                      />
                      <div className="absolute inset-4 rounded-full border-2 border-secondary/30 flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-secondary animate-ping"></div>
                      </div>
                    </div>
                    
                    <div>
                      <p className="font-display text-2xl font-bold text-primary mb-2">Analyzing Horizons...</p>
                      <p className="text-on-surface-variant text-sm max-w-xs mx-auto">Cross-referencing AUM with current market technicals.</p>
                    </div>
                  </div>
                )}

                {auditState === 'result' && (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }} 
                    animate={{ opacity: 1, scale: 1 }}
                    className="relative z-10 text-left space-y-6 w-full"
                  >
                    <div className="p-6 bg-secondary/5 rounded-3xl border border-secondary/10">
                      <p className="text-secondary text-xs font-bold uppercase tracking-widest mb-4">Audit Result</p>
                      <div className="space-y-4">
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium">Efficiency Score</span>
                          <span className="font-display font-bold text-primary">{auditScore || '...'}/100</span>
                        </div>
                        <div className="h-1.5 w-full bg-secondary/10 rounded-full overflow-hidden">
                          <motion.div initial={{ width: 0 }} animate={{ width: `${auditScore || 0}%` }} className="h-full bg-secondary" transition={{ duration: 1 }} />
                        </div>
                        <div className="text-sm text-on-surface-variant leading-relaxed whitespace-pre-line min-h-[100px]">
                          {auditResult || 'Synthesizing technical audit...'}
                        </div>
                      </div>
                    </div>
                    <button 
                      onClick={() => setAuditState('idle')}
                      className="w-full border border-secondary text-secondary p-4 rounded-2xl font-bold hover:bg-secondary hover:text-white transition-all text-sm"
                    >
                      Run New Audit
                    </button>
                  </motion.div>
                )}

              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════ RISK MANAGEMENT ═══════════════════════ */}
      <section className="py-28 bg-primary text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
            <motion.p variants={fadeInUp} className="text-secondary-fixed-dim text-sm font-semibold uppercase tracking-widest mb-4">Risk Management</motion.p>
            <motion.h2 variants={fadeInUp} className="font-display text-4xl md:text-6xl font-bold tracking-tight mb-16 leading-tight">
              Protecting the Downside
            </motion.h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
              {[
                { icon: Shield, title: 'Hedging Logic', desc: 'Systematic hedging across all asset classes.' },
                { icon: Activity, title: 'Beta Neutrality', desc: 'Market-neutral positions to reduce volatility.' },
                { icon: FileCheck, title: 'Compliance First', desc: 'Every decision passes regulatory checkpoints.' },
                { icon: Gauge, title: 'Stress Testing', desc: 'Quarterly stress tests across market scenarios.' },
              ].map((item) => (
                <motion.div key={item.title} variants={fadeInUp} className="p-6 rounded-2xl border border-white/10 hover:bg-white/5 transition-colors">
                  <item.icon className="w-8 h-8 text-secondary-fixed-dim mb-4" strokeWidth={1.5} />
                  <h3 className="font-display text-lg font-bold mb-2">{item.title}</h3>
                  <p className="text-white/60 leading-relaxed text-sm">{item.desc}</p>
                </motion.div>
              ))}
            </div>

            <motion.div variants={fadeInUp}>
              <p className="text-secondary-fixed-dim text-sm font-semibold uppercase tracking-widest mb-8">Preservation Hierarchy</p>
              <div className="flex flex-col md:flex-row gap-4 items-stretch">
                {[
                  'Pre-Audit Asset Validation',
                  'Dynamic Rebalancing',
                  'Liquidity Tiering',
                ].map((step, i) => (
                  <div key={step} className="flex-1 p-6 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-4">
                    <span className="text-secondary-fixed-dim font-display text-3xl font-bold">{String(i + 1).padStart(2, '0')}</span>
                    <p className="font-medium">{step}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
