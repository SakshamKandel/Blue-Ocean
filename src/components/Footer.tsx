"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const navLinks = [
    { label: "About Us", href: "#about" },
    { label: "What We Do", href: "#what-we-do" },
    { label: "Our Approach", href: "#approach" },
    { label: "Why Choose Us", href: "#values" },
    { label: "Meet Our Team", href: "#people" },
    { label: "Contact Us", href: "#contact" },
  ];

  return (
    <footer className="bg-[#04152d] text-slate-300 py-10 border-t border-blue-950/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 flex flex-col items-center text-center">
        
        {/* BRAND LOGO (Boxy rounded-lg) */}
        <Link href="/" className="inline-block p-1.5 px-3 rounded-lg bg-white/95 backdrop-blur-sm shadow-xs mb-4 hover:scale-105 transition-transform">
          <Image
            src="/Logo.png"
            alt="Blue Ocean Inco Logo"
            width={160}
            height={45}
            className="h-7 sm:h-8 w-auto object-contain"
          />
        </Link>

        {/* TAGLINE */}
        <p className="text-xs text-slate-300 max-w-md leading-relaxed mb-5 font-normal">
          Creating long-term value through strategic investment, trusted partnerships, and responsible growth.
        </p>

        {/* SIMPLE HORIZONTAL NAVIGATION LINKS */}
        <nav className="flex flex-wrap justify-center items-center gap-5 sm:gap-7 text-xs font-semibold text-slate-200 mb-6 pb-6 border-b border-white/10 w-full max-w-2xl">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-[#38bdf8] transition-colors uppercase tracking-wider text-[11px]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CONTACT & LOCATION SUMMARY */}
        <p className="text-xs text-slate-400 mb-2 flex flex-wrap items-center justify-center gap-2">
          <span>Bouddha 6, Kathmandu, Nepal</span>
          <span className="hidden sm:inline">&middot;</span>
          <a href="tel:+9779802320122" className="hover:text-white transition-colors">
            +977 9802320122
          </a>
          <span className="hidden sm:inline">&middot;</span>
          <a href="mailto:Blueocean1169@gmail.com" className="hover:text-white transition-colors">
            Blueocean1169@gmail.com
          </a>
        </p>

        {/* COPYRIGHT */}
        <p className="text-[10px] text-slate-400">
          &copy; 2026 Blue Ocean Inco Pvt. Ltd. All rights reserved.
        </p>

      </div>
    </footer>
  );
}
