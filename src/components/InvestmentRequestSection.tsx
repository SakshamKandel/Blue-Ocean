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
  onOpenModal?: () => void;
}

export default function InvestmentRequestSection({
  isModalOpen = false,
  onCloseModal,
  onOpenModal,
}: InvestmentRequestSectionProps) {
  const [internalModalOpen, setInternalModalOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const activeModal = isModalOpen || internalModalOpen;

  const handleOpen = () => {
    setInternalModalOpen(true);
    if (onOpenModal) onOpenModal();
  };

  const handleClose = () => {
    setInternalModalOpen(false);
    setSubmitted(false);
    if (onCloseModal) onCloseModal();
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
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">
              Blue Ocean welcomes investment proposals from businesses and entrepreneurs with clear potential, strong fundamentals, capable leadership, and a compelling long-term vision.
            </p>

            {/* Primary Action Button */}
            <div className="flex items-center gap-4">
              <button
                type="button"
                onClick={handleOpen}
                className="inline-flex items-center gap-2 bg-[#2563eb] hover:bg-blue-700 active:bg-blue-800 text-white text-xs sm:text-sm font-bold py-3 px-6 rounded-md shadow-xs hover:shadow-md transition-all cursor-pointer"
              >
                <span>Submit an Investment Request</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

          </div>

          {/* RIGHT COLUMN: SPLIT DUAL-PANEL PHOTO */}
          <div className="lg:col-span-6 relative">
            <div className="grid grid-cols-2 gap-3">
              <div className="relative h-72 sm:h-80 rounded-md overflow-hidden shadow-xs border border-slate-200 group">
                <Image
                  src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1000&q=80"
                  alt="Investment Advisory Board Discussion"
                  fill
                  className="object-cover object-left group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 1024px) 50vw, 300px"
                />
              </div>

              <div className="relative h-72 sm:h-80 rounded-md overflow-hidden shadow-xs border border-slate-200 group">
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

      {/* CLEAN, SIMPLE, RECTANGULAR PROPOSAL MODAL */}
      <AnimatePresence>
        {activeModal && (
          <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-xs overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.98, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98, y: 10 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-2xl bg-white border border-slate-300 shadow-2xl overflow-hidden my-6 z-[10000] rounded-none sm:rounded-sm"
            >
              {/* Clean White Modal Header */}
              <div className="p-6 pb-4 border-b border-slate-200 flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold text-[#001035] tracking-tight">
                    Submit Investment Proposal
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Direct proposal submission to Blue Ocean Inco investment committee
                  </p>
                </div>
                <button
                  type="button"
                  onClick={handleClose}
                  className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-sm transition-colors cursor-pointer"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-6">
                {submitted ? (
                  <div className="text-center py-10">
                    <div className="w-12 h-12 text-emerald-600 mx-auto mb-3 flex items-center justify-center">
                      <CheckCircle2 className="w-12 h-12 stroke-[1.5]" />
                    </div>
                    <h4 className="text-xl font-bold text-slate-900 mb-1.5">
                      Proposal Received
                    </h4>
                    <p className="text-xs text-slate-600 max-w-md mx-auto mb-6 leading-relaxed">
                      Thank you for submitting your investment opportunity. Our team will review the details and reach out within 2–3 business days.
                    </p>
                    <button
                      type="button"
                      onClick={handleClose}
                      className="py-2.5 px-6 bg-[#2563eb] text-white text-xs font-bold hover:bg-blue-700 rounded-sm cursor-pointer"
                    >
                      Close Window
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          Company / Venture Name *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Acme Industries"
                          className="w-full px-3.5 py-2.5 rounded-sm border border-slate-300 text-xs sm:text-sm text-slate-900 focus:outline-hidden focus:border-[#2563eb] focus:ring-1 focus:ring-[#2563eb]"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          Industry / Sector *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Technology, Real Estate, Energy"
                          className="w-full px-3.5 py-2.5 rounded-sm border border-slate-300 text-xs sm:text-sm text-slate-900 focus:outline-hidden focus:border-[#2563eb] focus:ring-1 focus:ring-[#2563eb]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          Contact Person *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="Full Name & Title"
                          className="w-full px-3.5 py-2.5 rounded-sm border border-slate-300 text-xs sm:text-sm text-slate-900 focus:outline-hidden focus:border-[#2563eb] focus:ring-1 focus:ring-[#2563eb]"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="name@company.com"
                          className="w-full px-3.5 py-2.5 rounded-sm border border-slate-300 text-xs sm:text-sm text-slate-900 focus:outline-hidden focus:border-[#2563eb] focus:ring-1 focus:ring-[#2563eb]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          Phone / WhatsApp *
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="+977 98XXXXXXXX"
                          className="w-full px-3.5 py-2.5 rounded-sm border border-slate-300 text-xs sm:text-sm text-slate-900 focus:outline-hidden focus:border-[#2563eb] focus:ring-1 focus:ring-[#2563eb]"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          Target Capital (NPR / USD)
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. NPR 25M – 50M"
                          className="w-full px-3.5 py-2.5 rounded-sm border border-slate-300 text-xs sm:text-sm text-slate-900 focus:outline-hidden focus:border-[#2563eb] focus:ring-1 focus:ring-[#2563eb]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Executive Summary &amp; Capital Use *
                      </label>
                      <textarea
                        required
                        rows={3}
                        placeholder="Brief overview of business model, current traction, and intended use of capital..."
                        className="w-full px-3.5 py-2.5 rounded-sm border border-slate-300 text-xs sm:text-sm text-slate-900 focus:outline-hidden focus:border-[#2563eb] focus:ring-1 focus:ring-[#2563eb]"
                      />
                    </div>

                    <div className="pt-2 flex items-center justify-end gap-3 border-t border-slate-100">
                      <button
                        type="button"
                        onClick={handleClose}
                        className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900 cursor-pointer"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="inline-flex items-center gap-1.5 px-6 py-2.5 bg-[#2563eb] hover:bg-blue-700 text-white text-xs font-bold rounded-sm shadow-xs cursor-pointer"
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
