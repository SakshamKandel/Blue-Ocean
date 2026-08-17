"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  CheckCircle2,
  ChevronRight,
  X,
  Send,
} from "lucide-react";

interface InvestmentRequestSectionProps {
  isModalOpen?: boolean;
  onCloseModal?: () => void;
}

export default function InvestmentRequestSection({
  isModalOpen,
  onCloseModal,
}: InvestmentRequestSectionProps) {
  const [internalModalOpen, setInternalModalOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const activeModal = isModalOpen !== undefined ? isModalOpen : internalModalOpen;
  const handleClose = () => {
    if (onCloseModal) onCloseModal();
    setInternalModalOpen(false);
    setSubmitted(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="investment-request" className="py-10 lg:py-14 bg-white text-slate-900 border-b border-slate-200/80 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
        
        {/* MAIN SECTION GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* LEFT COLUMN */}
          <div className="lg:col-span-6 flex flex-col items-start relative">
            
            {/* Tag */}
            <div className="flex items-center gap-1.5 text-xs font-black text-[#001035] uppercase tracking-wider mb-2">
              <span className="text-[#2563eb] text-base leading-none">✴</span>
              <span>INVESTMENT REQUEST</span>
            </div>

            {/* Headline */}
            <h2 className="text-2xl sm:text-3xl lg:text-[2.35rem] font-extrabold text-[#001035] tracking-tight leading-[1.15] mb-4">
              Looking for an Investment Partner? <br />
              <span className="text-[#2563eb]">Unlock Long-Term Potential.</span>
            </h2>

            {/* Paragraph */}
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-5">
              Blue Ocean welcomes investment proposals from businesses and entrepreneurs with clear potential, strong fundamentals, capable leadership, and a compelling long-term vision.
            </p>

            {/* Clean Proposal Checklist (Simple, Clean, No Generic AI Squircle Box) */}
            <div className="p-4 rounded-lg bg-slate-50 border border-slate-200/80 mb-6 w-full">
              <h3 className="text-xs sm:text-sm font-extrabold text-[#001035] mb-1.5 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2563eb]" />
                Recommended Proposal Submission Checklist
              </h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                When submitting an opportunity, please include your <strong>company overview, revenue model, market sizing, historical financials, capital requirement, and management team</strong>.
              </p>
            </div>

            {/* Primary Action Button */}
            <div className="flex items-center gap-4">
              <button
                type="button"
                onClick={() => setInternalModalOpen(true)}
                className="inline-flex items-center gap-2 bg-[#2563eb] hover:bg-blue-700 text-white text-xs sm:text-sm font-bold py-3 px-6 rounded-lg shadow-xs hover:shadow-md transition-all"
              >
                <span>Submit an Investment Request</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

          </div>

          {/* RIGHT COLUMN: SPLIT DUAL-PANEL PHOTO & CLEAN STAT BADGE */}
          <div className="lg:col-span-6 relative">
            
            {/* FLOATING STAT BADGE (Clean, Minimal, No Nested Squircle Icon) */}
            <div className="absolute -top-3 left-4 sm:left-6 z-20 p-3 px-5 rounded-lg bg-white shadow-md border border-slate-200/90 flex flex-col">
              <div className="text-xl sm:text-2xl font-black text-[#2563eb] leading-none mb-0.5">
                100%
              </div>
              <div className="text-[10px] font-extrabold text-[#001035] uppercase tracking-wider">
                CA-Led Underwriting
              </div>
            </div>

            {/* DUAL VERTICAL SPLIT PANELS */}
            <div className="grid grid-cols-2 gap-3 pt-4">
              <div className="relative h-72 sm:h-80 rounded-xl overflow-hidden shadow-xs border border-slate-200 group">
                <Image
                  src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1000&q=80"
                  alt="Investment Advisory Board Discussion"
                  fill
                  className="object-cover object-left group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 1024px) 50vw, 300px"
                />
              </div>

              <div className="relative h-72 sm:h-80 rounded-xl overflow-hidden shadow-xs border border-slate-200 group">
                <Image
                  src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1000&q=80"
                  alt="Strategic Deal Structuring"
                  fill
                  className="object-cover object-right group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 1024px) 50vw, 300px"
                />
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* INTERACTIVE PROPOSAL SUBMISSION MODAL */}
      <AnimatePresence>
        {activeModal && (
          <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 bg-slate-950/70 backdrop-blur-xs overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 15 }}
              transition={{ duration: 0.25 }}
              className="relative w-full max-w-2xl bg-white rounded-xl shadow-2xl border border-slate-200 overflow-hidden my-6"
            >
              {/* Modal Header */}
              <div className="p-5 sm:p-6 bg-[#04152d] text-white flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-bold text-[#38bdf8] uppercase tracking-widest block mb-1">
                    Direct Deal Flow Intake
                  </span>
                  <h3 className="text-lg sm:text-xl font-black text-white">
                    Submit Investment Proposal
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={handleClose}
                  className="p-1.5 rounded-md bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition-colors"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-5 sm:p-6">
                {submitted ? (
                  <div className="text-center py-8">
                    <div className="w-14 h-14 rounded-lg bg-green-100 text-green-600 flex items-center justify-center mx-auto mb-3">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h4 className="text-xl font-extrabold text-slate-900 mb-1">
                      Proposal Received
                    </h4>
                    <p className="text-xs text-slate-600 max-w-md mx-auto mb-5">
                      Thank you for submitting your investment opportunity. Our Chartered Accountant–led evaluation committee will review the details and reach out within 2–3 business days.
                    </p>
                    <button
                      type="button"
                      onClick={handleClose}
                      className="py-2 px-5 rounded-lg bg-[#2563eb] text-white text-xs font-bold hover:bg-blue-700"
                    >
                      Close Window
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-3.5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      <div>
                        <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                          Company / Venture Name *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Acme Industries"
                          className="w-full px-3.5 py-2 rounded-lg border border-slate-200 text-xs sm:text-sm focus:outline-hidden focus:ring-2 focus:ring-blue-600"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                          Industry / Sector *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. FinTech, Energy, Real Estate"
                          className="w-full px-3.5 py-2 rounded-lg border border-slate-200 text-xs sm:text-sm focus:outline-hidden focus:ring-2 focus:ring-blue-600"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      <div>
                        <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                          Contact Person *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="Full Name & Title"
                          className="w-full px-3.5 py-2 rounded-lg border border-slate-200 text-xs sm:text-sm focus:outline-hidden focus:ring-2 focus:ring-blue-600"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="name@company.com"
                          className="w-full px-3.5 py-2 rounded-lg border border-slate-200 text-xs sm:text-sm focus:outline-hidden focus:ring-2 focus:ring-blue-600"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      <div>
                        <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                          Phone / WhatsApp *
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="+977 98XXXXXXXX"
                          className="w-full px-3.5 py-2 rounded-lg border border-slate-200 text-xs sm:text-sm focus:outline-hidden focus:ring-2 focus:ring-blue-600"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                          Target Capital (NPR / USD)
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. NPR 25M – 50M"
                          className="w-full px-3.5 py-2 rounded-lg border border-slate-200 text-xs sm:text-sm focus:outline-hidden focus:ring-2 focus:ring-blue-600"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Executive Summary &amp; Proposed Use of Capital *
                      </label>
                      <textarea
                        required
                        rows={3}
                        placeholder="Provide a brief overview of your business model, current traction, and intended use of Blue Ocean capital..."
                        className="w-full px-3.5 py-2 rounded-lg border border-slate-200 text-xs sm:text-sm focus:outline-hidden focus:ring-2 focus:ring-blue-600"
                      />
                    </div>

                    <div className="pt-2 flex items-center justify-end gap-3">
                      <button
                        type="button"
                        onClick={handleClose}
                        className="px-4 py-2 rounded-lg text-xs font-bold text-slate-600 hover:bg-slate-100"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="inline-flex items-center gap-1.5 px-5 py-2 rounded-lg bg-[#2563eb] hover:bg-blue-700 text-white text-xs font-bold shadow-xs"
                      >
                        <span>Submit Proposal</span>
                        <Send className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
