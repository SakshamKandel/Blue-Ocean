"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Phone, MapPin, CheckCircle2 } from "lucide-react";

export default function ContactSection() {
  const [msgSent, setMsgSent] = useState(false);
  const [agreed, setAgreed] = useState(true);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setMsgSent(true);
    setTimeout(() => setMsgSent(false), 5000);
  };

  return (
    <section id="contact" className="py-10 lg:py-14 bg-[#fdfdfd] text-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
        
        {/* 2-COLUMN CONTACT LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* LEFT COLUMN */}
          <div className="lg:col-span-6 flex flex-col items-start">
            
            {/* Tag */}
            <div className="flex items-center gap-1.5 text-xs font-black text-[#001035] uppercase tracking-wider mb-2">
              <span className="text-[#2563eb] text-base leading-none">✴</span>
              <span>CONTACT US</span>
            </div>

            {/* Headline */}
            <h2 className="text-2xl sm:text-3xl lg:text-[2.65rem] font-extrabold text-[#001035] tracking-tight leading-[1.12] mb-6">
              Reach Us Whenever <br />
              You want
            </h2>

            {/* TWO INFO BLOCKS: OPENING HOURS & VISIT LOCATION */}
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-5 w-full mb-8">
              
              {/* OPENING HOUR CARD (Boxy rounded-xl) */}
              <div className="sm:col-span-6 p-5 rounded-xl bg-white border border-sky-200/90 shadow-xs relative overflow-hidden flex flex-col justify-between">
                <div className="w-8 h-1 bg-[#2563eb] rounded-full mb-2.5" />
                <h3 className="text-xs sm:text-sm font-extrabold text-[#001035] mb-3">
                  Opening Hour
                </h3>
                
                <div className="space-y-2 text-xs">
                  <div className="flex justify-between items-center text-slate-700">
                    <span className="font-semibold text-slate-900">Sun &ndash; Thu</span>
                    <span className="text-[#2563eb] font-bold">10am &ndash; 5pm</span>
                  </div>
                  <div className="flex justify-between items-center text-slate-700">
                    <span className="font-semibold text-slate-900">Friday</span>
                    <span className="text-[#2563eb] font-bold">10am &ndash; 3pm</span>
                  </div>
                  <div className="flex justify-between items-center text-slate-500">
                    <span className="font-semibold">Saturday</span>
                    <span className="text-rose-500 font-bold">Closed</span>
                  </div>
                </div>
              </div>

              {/* VISIT LOCATION & DIRECT CALL */}
              <div className="sm:col-span-6 flex flex-col justify-center space-y-4">
                <h3 className="text-xs sm:text-sm font-extrabold text-[#2563eb]">
                  Visit Our Location
                </h3>

                {/* Phone Line */}
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-700 shrink-0">
                    <Phone className="w-4 h-4 text-[#2563eb]" />
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-500 font-medium">Looking For Consultation</p>
                    <a href="tel:+9779802320122" className="text-xs sm:text-sm font-bold text-[#001035] hover:text-[#2563eb] transition-colors">
                      +977 9802320122
                    </a>
                  </div>
                </div>

                {/* Physical Address */}
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-700 shrink-0">
                    <MapPin className="w-4 h-4 text-[#2563eb]" />
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-500 font-medium">Registered Headquarters</p>
                    <p className="text-xs sm:text-sm font-bold text-[#001035] leading-tight">
                      Bouddha 6, Kathmandu, Nepal
                    </p>
                  </div>
                </div>
              </div>

            </div>

            {/* BOTTOM SOCIAL PROOF */}
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2 overflow-hidden">
                <div className="inline-block h-7 w-7 rounded-full ring-2 ring-white overflow-hidden relative bg-slate-200">
                  <Image src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80" alt="Partner" fill className="object-cover" />
                </div>
                <div className="inline-block h-7 w-7 rounded-full ring-2 ring-white overflow-hidden relative bg-slate-200">
                  <Image src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80" alt="Partner" fill className="object-cover" />
                </div>
                <div className="inline-block h-7 w-7 rounded-full ring-2 ring-white overflow-hidden relative bg-slate-200">
                  <Image src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=120&q=80" alt="Partner" fill className="object-cover" />
                </div>
                <div className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#001035] ring-2 ring-white text-white text-[10px] font-bold">
                  +12
                </div>
              </div>
              <p className="text-xs text-slate-600 font-medium">
                We collaborate with <strong className="text-slate-900 font-bold">150+</strong> companies &amp; partners
              </p>
            </div>

          </div>

          {/* RIGHT COLUMN: "MAKE APPOINTMENT" FORM CARD (Boxy rounded-xl) */}
          <div className="lg:col-span-6">
            <div className="p-6 sm:p-8 rounded-xl bg-[#f0f9ff] border border-sky-100 shadow-xs">
              
              <h3 className="text-xl font-black text-[#001035] tracking-tight mb-5">
                Make Appointment
              </h3>

              {msgSent ? (
                <div className="p-6 rounded-lg bg-white text-center border border-green-200 shadow-xs">
                  <CheckCircle2 className="w-10 h-10 text-green-600 mx-auto mb-2" />
                  <h4 className="text-base font-bold text-slate-900 mb-1">
                    Appointment Requested
                  </h4>
                  <p className="text-xs text-slate-600">
                    Thank you! Our investment relations team will confirm your consultation slot shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-3.5">
                  
                  {/* 2x2 Boxy Input Fields */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <input
                        type="text"
                        required
                        placeholder="Your Name"
                        className="w-full px-4 py-2.5 rounded-lg bg-white border border-slate-200/80 text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-hidden focus:ring-2 focus:ring-[#2563eb]"
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        required
                        placeholder="Your Email"
                        className="w-full px-4 py-2.5 rounded-lg bg-white border border-slate-200/80 text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-hidden focus:ring-2 focus:ring-[#2563eb]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <input
                        type="tel"
                        placeholder="Phone No"
                        className="w-full px-4 py-2.5 rounded-lg bg-white border border-slate-200/80 text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-hidden focus:ring-2 focus:ring-[#2563eb]"
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        placeholder="Subject"
                        className="w-full px-4 py-2.5 rounded-lg bg-white border border-slate-200/80 text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-hidden focus:ring-2 focus:ring-[#2563eb]"
                      />
                    </div>
                  </div>

                  {/* Textarea */}
                  <div>
                    <textarea
                      rows={3}
                      required
                      placeholder="Text here"
                      className="w-full px-4 py-2.5 rounded-lg bg-white border border-slate-200/80 text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-hidden focus:ring-2 focus:ring-[#2563eb]"
                    />
                  </div>

                  {/* Agreement Checkbox */}
                  <div className="flex items-center gap-2 pt-0.5">
                    <input
                      type="checkbox"
                      id="terms-check"
                      checked={agreed}
                      onChange={(e) => setAgreed(e.target.checked)}
                      className="w-4 h-4 rounded text-[#2563eb] focus:ring-[#2563eb] border-slate-300"
                    />
                    <label htmlFor="terms-check" className="text-xs text-slate-500 select-none">
                      I agree to the terms &amp; conditions of service.
                    </label>
                  </div>

                  {/* Submit Button (Boxy CTA) */}
                  <button
                    type="submit"
                    className="w-full py-3 px-6 rounded-lg bg-[#2563eb] hover:bg-blue-700 text-white font-bold text-xs sm:text-sm shadow-xs hover:shadow-md transition-all"
                  >
                    Get A Quote
                  </button>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
