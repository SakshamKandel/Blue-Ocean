"use client";

import React from 'react';
import { motion, useScroll, useTransform, Variants } from 'framer-motion';
import { Shield, Activity, FileCheck, Gauge, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import Footer from '@/components/Footer';
import { computePortfolioAnalytics, formatNprCompact } from '@/lib/portfolioAnalytics';

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
};

const allocationFields: Array<{
  key: 'equities' | 'fixedIncome' | 'realAssets' | 'cash';
  label: string;
}> = [
  { key: 'equities', label: 'Equities %' },
  { key: 'fixedIncome', label: 'Fixed Income %' },
  { key: 'realAssets', label: 'Real Assets %' },
  { key: 'cash', label: 'Cash %' },
];

export default function Strategy() {
  const [auditState, setAuditState] = React.useState<'idle' | 'processing' | 'result'>('idle');
  const [formData, setFormData] = React.useState({
    aum: '',
    risk: 'moderate' as 'low' | 'moderate' | 'high',
    equities: 40,
    fixedIncome: 30,
    realAssets: 20,
    cash: 10,
    monthlyContribution: 250000,
    horizonYears: 5,
  });

  const normalizeWeights = () => {
    const total = formData.equities + formData.fixedIncome + formData.realAssets + formData.cash;
    if (total === 0) return;
    const factor = 100 / total;
    setFormData({
      ...formData,
      equities: Math.round(formData.equities * factor),
      fixedIncome: Math.round(formData.fixedIncome * factor),
      realAssets: Math.round(formData.realAssets * factor),
      cash: Math.round(formData.cash * factor),
    });
  };
  const [auditResult, setAuditResult] = React.useState('');
  const [auditScore, setAuditScore] = React.useState(0);
  const [validationError, setValidationError] = React.useState('');
  const [computedMetrics, setComputedMetrics] = React.useState<null | ReturnType<typeof computePortfolioAnalytics>>(null);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const liveAnalytics = computePortfolioAnalytics(formData);

  const handleAudit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate AUM
    if (!formData.aum.trim() || !/[0-9]/.test(formData.aum)) {
      setValidationError('Please enter a real financial value (e.g. 50M or 1Cr)');
      return;
    }
    
    if (liveAnalytics.allocationTotal <= 0) {
      setValidationError('Enter an allocation mix greater than zero');
      return;
    }

    setValidationError('');
    setAuditState('processing');
    setAuditResult('');
    setAuditScore(0);
    setComputedMetrics(null);
    
    try {
      const res = await fetch('/api/portfolio-analytics', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error('Audit failed');
      const data = await res.json();
      setComputedMetrics(data.analytics);
      setAuditScore(data.analytics?.efficiencyScore ?? 0);
      setAuditResult(data.commentary ?? '');
      setAuditState('result');
    } catch (err) {
      console.error(err);
      setAuditState('idle');
    }
  };
  
  return (
    <div className="min-h-screen bg-surface-lowest selection:bg-secondary/20 font-sans relative">
      <section className="min-h-[60vh] w-full bg-primary flex flex-col justify-end px-4 sm:px-6 pb-12 relative overflow-hidden text-white pt-32">
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
             <motion.h1 variants={fadeInUp} className="font-display text-4xl sm:text-6xl md:text-[6rem] font-black tracking-tighter leading-[0.95] sm:leading-[0.9] md:leading-[0.85] text-white mb-4">
                The Blue Ocean <br/>
                <span className="text-secondary-fixed-dim italic font-light">Strategy.</span>
              </motion.h1>
              <motion.p variants={fadeInUp} className="max-w-3xl text-xl text-primary-fixed-dim font-light leading-relaxed mb-8">
                Uncontested Market Space. Forensic Precision. We don&apos;t follow the herd; we look through it. Our strategy is built on the convergence of Forensic Accounting and Strategic Growth.
              </motion.p>
              <motion.div variants={fadeInUp} className="flex flex-wrap items-center gap-4 mt-4">
                <div className="px-5 py-3 rounded-full border border-white/20 backdrop-blur-md">
                  <span className="text-secondary-fixed-dim font-semibold text-xs tracking-widest uppercase">Target Horizon:</span>
                  <span className="text-white font-display font-bold text-lg ml-3 italic">Alpha + Capital Preservation</span>
                </div>
              </motion.div>
              <motion.div variants={fadeInUp} className="mt-12 flex gap-4 flex-wrap w-full">
                <Link href="/portfolio" className="inline-flex w-full sm:w-auto justify-center items-center gap-3 bg-secondary-fixed text-primary px-10 py-5 rounded-full font-bold hover:bg-white transition-all group shadow-2xl shadow-black/20">
                  Explore Portfolio <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform"/>
                </Link>
                <Link href="/contact" className="inline-flex w-full sm:w-auto justify-center items-center gap-3 border border-white/20 text-white px-10 py-5 rounded-full font-bold hover:bg-white/10 transition-colors">
                  Book a Consultation
                </Link>
              </motion.div>
           </motion.div>
        </div>
      </section>

      {/* ═══════════════════════ THE ECOSYSTEM ═══════════════════════ */}
      <section className="py-20 md:py-28 px-4 sm:px-6 bg-surface-lowest relative z-20 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="mb-16 md:mb-24">
            <motion.p variants={fadeInUp} className="text-secondary text-[10px] font-bold uppercase tracking-[0.5em] mb-6">Strategic Foundation</motion.p>
            <motion.h2 variants={fadeInUp} className="font-display text-4xl sm:text-5xl md:text-8xl font-black tracking-tighter text-primary mb-10 leading-[0.9] md:leading-[0.85]">
              The How.
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-on-surface-variant text-xl leading-relaxed max-w-3xl font-light opacity-70">
              Every position in our portfolio is the result of a rigorous three-pillar framework designed to eliminate guesswork and institutionalize alpha.
            </motion.p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid lg:grid-cols-3 gap-8">
            <motion.div variants={fadeInUp} className="p-6 sm:p-10 lg:p-12 bg-white rounded-[2rem] md:rounded-[3rem] border border-outline-variant/10 shadow-xl shadow-black/[0.02] flex flex-col h-full group hover:border-primary/20 transition-all duration-500">
              <div className="w-16 h-16 rounded-2xl bg-primary/5 flex items-center justify-center text-primary mb-10 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                <FileCheck className="w-8 h-8" />
              </div>
              <h3 className="font-display text-3xl font-black text-primary mb-6 tracking-tight">Forensic Underwriting</h3>
              <p className="text-on-surface-variant text-lg leading-relaxed opacity-70 flex-grow">
                Using the CA toolkit (audit and fiscal analysis) for deep asset-level scrutiny. We don&apos;t just read reports; we verify the numbers behind them.
              </p>
              <div className="mt-10 h-1 bg-primary/5 w-full rounded-full overflow-hidden">
                <div className="h-full bg-primary w-1/3" />
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="p-6 sm:p-10 lg:p-12 bg-white rounded-[2rem] md:rounded-[3rem] border border-outline-variant/10 shadow-xl shadow-black/[0.02] flex flex-col h-full group hover:border-primary/20 transition-all duration-500">
              <div className="w-16 h-16 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary mb-10 group-hover:bg-secondary group-hover:text-white transition-all duration-500">
                <Activity className="w-8 h-8" />
              </div>
              <h3 className="font-display text-3xl font-black text-primary mb-6 tracking-tight">Strategic Patience</h3>
              <p className="text-on-surface-variant text-lg leading-relaxed opacity-70 flex-grow">
                Focus on long-term compounding by ignoring short-term market noise. We invest built on fundamentals that sustain through cycles.
              </p>
              <div className="mt-10 h-1 bg-secondary/10 w-full rounded-full overflow-hidden">
                <div className="h-full bg-secondary w-2/3" />
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="p-6 sm:p-10 lg:p-12 bg-white rounded-[2rem] md:rounded-[3rem] border border-outline-variant/10 shadow-xl shadow-black/[0.02] flex flex-col h-full group hover:border-primary/20 transition-all duration-500">
              <div className="w-16 h-16 rounded-2xl bg-primary/5 flex items-center justify-center text-primary mb-10 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                <Shield className="w-8 h-8" />
              </div>
              <h3 className="font-display text-3xl font-black text-primary mb-6 tracking-tight">Active Stewardship</h3>
              <p className="text-on-surface-variant text-lg leading-relaxed opacity-70 flex-grow">
                Working directly with promoters to enhance corporate governance and unlock value. We are partners, not just observers.
              </p>
              <div className="mt-10 h-1 bg-primary/5 w-full rounded-full overflow-hidden">
                <div className="h-full bg-primary w-full" />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════ ASSET ALLOCATION ═══════════════════════ */}
      <section className="py-20 md:py-28 px-4 sm:px-6 bg-surface">
        <div className="max-w-5xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="text-center mb-16">
            <motion.p variants={fadeInUp} className="text-secondary text-sm font-semibold uppercase tracking-widest mb-4">Allocation</motion.p>
            <motion.h2 variants={fadeInUp} className="font-display text-4xl md:text-5xl font-bold tracking-tight text-primary">Asset Allocation Mix</motion.h2>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid md:grid-cols-3 gap-8">
            {[
              { label: 'Public Equities', pct: '50%', color: 'bg-primary' },
              { label: 'Private Equity', pct: '30%', color: 'bg-secondary' },
              { label: 'Real Estate', pct: '20%', color: 'bg-primary-container' },
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
      <section className="py-20 md:py-28 px-4 sm:px-6 bg-surface">
        <div className="max-w-7xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div variants={fadeInUp}>
              <p className="text-secondary text-sm font-semibold uppercase tracking-widest mb-4">Proprietary Models</p>
              <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-primary mb-8 leading-tight">
                Alpha Discovery <br/>Through Forensic Scrutiny.
              </h2>
              <p className="text-on-surface-variant text-lg leading-relaxed mb-8">
                We combine proprietary technical models with CA-led fundamental analysis. By scanning for market efficiencies while verifying asset-level integrity, we achieve a &quot;Quantamental&quot; edge that compounds through cycles.
              </p>
              <div className="space-y-4">
                <div className="p-6 bg-surface-lowest rounded-2xl border border-outline-variant/10">
                  <h4 className="font-display font-bold text-primary mb-2">Forensic Allocation Engine</h4>
                  <p className="text-sm text-on-surface-variant">Real-time monitoring of balance sheet health and intrinsic value spreads across our coverage universe.</p>
                </div>
                <div className="p-6 bg-surface-lowest rounded-2xl border border-outline-variant/10">
                  <h4 className="font-display font-bold text-primary mb-2">Cycle Correlation Layer</h4>
                  <p className="text-sm text-on-surface-variant">Correlating macro-economic signals in Nepal with sector-specific liquidity to predict defensive shifts.</p>
                </div>
              </div>
            </motion.div>
            <motion.div variants={fadeInUp} className="relative group h-full">
              <div className="h-full bg-surface-lowest rounded-[32px] md:rounded-[48px] overflow-hidden flex flex-col justify-start p-6 md:p-10 text-left border border-outline-variant/10 relative shadow-2xl shadow-primary/5">
                
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
                        placeholder="AUM (e.g. 50M, 1Cr, 7500000)" 
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
                        <motion.p initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} className="text-[11px] text-red-500 font-bold ml-2 -mt-2">
                          ! {validationError}
                        </motion.p>
                      )}
                      
                      <div className="relative group">
                        <select 
                          className="w-full bg-surface p-4 rounded-2xl border border-outline-variant/20 focus:border-secondary outline-none transition-colors text-primary appearance-none cursor-pointer font-medium"
                          value={formData.risk}
                          onChange={(e) => setFormData({...formData, risk: e.target.value as 'low' | 'moderate' | 'high'})}
                        >
                          <option value="low">Low Risk Tolerance</option>
                          <option value="moderate">Moderate Growth Profile</option>
                          <option value="high">High Alpha Pursuit</option>
                        </select>
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none opacity-40">
                          <Activity className="w-4 h-4 text-primary" />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {allocationFields.map((field) => (
                          <div key={field.key} className="space-y-3">
                            <div className="flex justify-between items-center px-1">
                              <span className="text-[10px] uppercase font-bold tracking-widest text-on-surface-variant/70">{field.label}</span>
                              <span className="text-xs font-display font-bold text-primary">{formData[field.key]}%</span>
                            </div>
                            <input
                              type="range"
                              min="0"
                              max="100"
                              step="1"
                              className="w-full h-1.5 bg-surface rounded-lg appearance-none cursor-pointer accent-secondary border border-outline-variant/10"
                              value={formData[field.key]}
                              onChange={(e) => setFormData({
                                ...formData,
                                [field.key]: Number(e.target.value || 0),
                              })}
                            />
                          </div>
                        ))}
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <label className="space-y-2">
                          <span className="text-[11px] uppercase tracking-widest text-on-surface-variant">Monthly Additions</span>
                          <input
                            type="number"
                            min="0"
                            className="w-full bg-surface p-3 rounded-2xl border border-outline-variant/20 focus:border-secondary outline-none transition-colors text-primary"
                            value={formData.monthlyContribution}
                            onChange={(e) => setFormData({...formData, monthlyContribution: Number(e.target.value || 0)})}
                          />
                        </label>
                        <label className="space-y-2">
                          <span className="text-[11px] uppercase tracking-widest text-on-surface-variant">Horizon Years</span>
                          <input
                            type="number"
                            min="1"
                            max="30"
                            className="w-full bg-surface p-3 rounded-2xl border border-outline-variant/20 focus:border-secondary outline-none transition-colors text-primary"
                            value={formData.horizonYears}
                            onChange={(e) => setFormData({...formData, horizonYears: Number(e.target.value || 1)})}
                          />
                        </label>
                      </div>
                      <div className="rounded-2xl border border-secondary/15 bg-secondary/5 p-4 space-y-3">
                        <div className="flex items-center justify-between text-sm">
                          <div className="flex items-center gap-2">
                            <span className="text-on-surface-variant font-medium">Allocation Total</span>
                            {liveAnalytics.allocationTotal !== 100 && (
                              <motion.button 
                                initial={{ opacity: 0, scale: 0.9 }} 
                                animate={{ opacity: 1, scale: 1 }}
                                type="button"
                                onClick={normalizeWeights}
                                className="px-2 py-0.5 rounded-full bg-secondary/10 text-[10px] font-bold text-secondary border border-secondary/20 hover:bg-secondary hover:text-white transition-colors"
                              >
                                Fix Mix
                              </motion.button>
                            )}
                          </div>
                          <span className={`font-bold transition-colors ${liveAnalytics.allocationTotal === 100 ? 'text-primary' : 'text-secondary animate-pulse'}`}>
                            {liveAnalytics.allocationTotal}%
                          </span>
                        </div>
                        <div className="grid grid-cols-2 gap-3 text-sm">
                          <div>
                            <p className="text-on-surface-variant">Expected Return</p>
                            <p className="font-display text-primary font-bold">{(liveAnalytics.expectedAnnualReturn * 100).toFixed(1)}%</p>
                          </div>
                          <div>
                            <p className="text-on-surface-variant">Volatility</p>
                            <p className="font-display text-primary font-bold">{(liveAnalytics.expectedAnnualVolatility * 100).toFixed(1)}%</p>
                          </div>
                          <div>
                            <p className="text-on-surface-variant">Projected Value</p>
                            <p className="font-display text-primary font-bold">{formatNprCompact(liveAnalytics.projectedValue)}</p>
                          </div>
                          <div>
                            <p className="text-on-surface-variant">Live Score</p>
                            <p className="font-display text-primary font-bold">{liveAnalytics.efficiencyScore}/100</p>
                          </div>
                        </div>
                        <p className="text-[11px] leading-relaxed text-on-surface-variant">
                          Metrics update from the entered portfolio mix in real time. If the allocation does not total 100%, the engine normalizes the weights before running the model.
                        </p>
                      </div>
                    </div>
                      <button 
                        type="submit"
                        className="w-full bg-primary text-white p-5 rounded-2xl font-bold hover:bg-secondary transition-colors"
                      >
                        Run AI Portfolio Audit
                      </button>
                  </motion.form>
                )}

                {auditState === 'processing' && (
                  <div className="relative z-10 flex flex-col items-center justify-center text-center h-full py-12 space-y-8">
                    {/* Radar Scan Effect */}
                    <div className="absolute inset-0 pointer-events-none flex items-center justify-center overflow-hidden">
                      <motion.div 
                        animate={{ rotate: 360 }}
                        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                        className="w-[200%] h-[200%] bg-[conic-gradient(from_0deg,transparent_0deg,rgba(0,18,63,0.03)_360deg)]"
                      />
                    </div>
                    
                    <div className="relative w-32 h-32">
                      <motion.div 
                        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute inset-0 rounded-full bg-secondary/20"
                      />
                      <div className="absolute inset-4 rounded-full border-2 border-secondary/30 flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-secondary animate-ping"></div>
                      </div>
                    </div>
                    
                    <div className="relative z-10">
                      <p className="font-display text-2xl font-bold text-primary mb-2">Analyzing Horizons...</p>
                      <p className="text-on-surface-variant text-sm max-w-xs mx-auto leading-relaxed">Running live portfolio math and generating advisor-style commentary from the computed analytics.</p>
                    </div>
                  </div>
                )}

                {auditState === 'result' && (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }} 
                    animate={{ opacity: 1, scale: 1 }}
                    className="relative z-10 flex flex-col h-full space-y-6 w-full"
                  >
                    <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar">
                      <div className="p-6 bg-secondary/5 rounded-3xl border border-secondary/10 space-y-6">
                        <div className="flex justify-between items-center bg-white/50 p-4 rounded-2xl border border-secondary/5">
                          <div className="space-y-1">
                            <p className="text-secondary text-[10px] font-bold uppercase tracking-widest">Efficiency Score</p>
                            <p className="font-display text-2xl font-bold text-primary">{auditScore || '...'}/100</p>
                          </div>
                          <div className="w-12 h-12 rounded-full border-4 border-secondary/10 flex items-center justify-center relative">
                            <motion.div 
                              initial={{ rotate: -90, pathLength: 0 }}
                              animate={{ pathLength: (auditScore || 0) / 100 }}
                              className="absolute inset-0"
                            />
                            <Activity className="w-5 h-5 text-secondary" />
                          </div>
                        </div>

                        {computedMetrics && (
                          <div className="grid grid-cols-2 gap-3 text-sm">
                            <div className="rounded-2xl bg-white/50 p-3 border border-outline-variant/10">
                              <p className="text-[10px] uppercase font-bold text-on-surface-variant/70 mb-1">Expected Return</p>
                              <p className="font-display font-bold text-primary">{(computedMetrics.expectedAnnualReturn * 100).toFixed(1)}%</p>
                            </div>
                            <div className="rounded-2xl bg-white/50 p-3 border border-outline-variant/10">
                              <p className="text-[10px] uppercase font-bold text-on-surface-variant/70 mb-1">Volatility</p>
                              <p className="font-display font-bold text-primary">{(computedMetrics.expectedAnnualVolatility * 100).toFixed(1)}%</p>
                            </div>
                            <div className="rounded-2xl bg-white/50 p-3 border border-outline-variant/10">
                              <p className="text-[10px] uppercase font-bold text-on-surface-variant/70 mb-1">Resilience</p>
                              <p className="font-display font-bold text-primary">{computedMetrics.resilienceScore}/100</p>
                            </div>
                            <div className="rounded-2xl bg-white/50 p-3 border border-outline-variant/10">
                              <p className="text-[10px] uppercase font-bold text-on-surface-variant/70 mb-1">Portfolio Value</p>
                              <p className="font-display font-bold text-primary">{formatNprCompact(computedMetrics.projectedValue)}</p>
                            </div>
                          </div>
                        )}

                        <div className="text-sm text-on-surface-variant leading-relaxed whitespace-pre-line bg-white/30 p-4 rounded-2xl border border-white/50">
                          {auditResult || 'Synthesizing portfolio guidance...'}
                        </div>
                      </div>
                    </div>
                    <button 
                      onClick={() => setAuditState('idle')}
                      className="w-full bg-primary text-white p-5 rounded-2xl font-bold hover:bg-secondary transition-all text-sm shadow-xl shadow-primary/10"
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
            <motion.p variants={fadeInUp} className="text-secondary-fixed-dim text-sm font-semibold uppercase tracking-widest mb-4">Risk Management</motion.p>
            <motion.h2 variants={fadeInUp} className="font-display text-4xl md:text-6xl font-bold tracking-tight mb-16 leading-tight">
              Protecting the Downside
            </motion.h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
              {[
                { icon: Shield, title: 'Multi-Layer Risk', desc: 'Rigorous risk frameworks engineered to protect you in every market.' },
                { icon: Activity, title: 'Asset Sizing', desc: 'Strict concentration limits to ensure portfolio diversity.' },
                { icon: FileCheck, title: 'CA Oversight', desc: 'Every position is audited for structural integrity before entry.' },
                { icon: Gauge, title: 'Stress Testing', desc: 'Simulating adverse cycle scenarios to ensure liquidity readiness.' },
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
                  'Forensic Asset Validation',
                  'Dynamic Cycle Rebalancing',
                  'Multi-Tier Liquidity Sizing',
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
