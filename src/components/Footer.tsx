"use client";

import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-surface-lowest pt-12 pb-12 px-4 sm:px-6 border-t border-outline-variant/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-left text-on-surface-variant text-sm">
          <div>
            <Link href="/" className="inline-block mb-6">
              <div className="h-14 w-auto relative">
                <img src="/Logo.png" alt="Blue Ocean Inco Logo" className="h-full w-auto object-contain" />
              </div>
            </Link>
            <p className="leading-relaxed font-medium text-primary mb-2">Blue Ocean Inco Pvt. Ltd.</p>
            <p className="leading-relaxed opacity-70 italic">Forensic precision. Sustainable alpha.</p>
          </div>
          <div>
            <p className="font-semibold uppercase tracking-wider text-xs text-on-surface mb-4">Company</p>
            <div className="space-y-3">
              <Link href="/about" className="block hover:text-primary transition-colors">About Us</Link>
              <Link href="/portfolio" className="block hover:text-primary transition-colors">Portfolio</Link>
              <Link href="/strategy" className="block hover:text-primary transition-colors">Our Strategy</Link>
              <Link href="/careers" className="block hover:text-primary transition-colors">Careers</Link>
            </div>
          </div>
          <div>
            <p className="font-semibold uppercase tracking-wider text-xs text-on-surface mb-4">Resources</p>
            <div className="space-y-3">
              <Link href="/insights" className="block hover:text-primary transition-colors">Insights</Link>
              <Link href="/privacy" className="block hover:text-primary transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="block hover:text-primary transition-colors">Terms of Service</Link>
              <Link href="/disclosures" className="block hover:text-primary transition-colors">Regulatory Disclosures</Link>
            </div>
          </div>
          <div>
            <p className="font-semibold uppercase tracking-wider text-xs text-on-surface mb-4">Headquarters</p>
            <p className="leading-relaxed">Boudha, Kathmandu, Nepal.<br />+977 9802320122</p>
            <p className="mt-2 text-xs truncate">hello@blueoceaninco.com</p>
            <Link href="/contact" className="inline-block mt-4 text-secondary hover:text-primary transition-colors font-medium">Get in Touch →</Link>
          </div>
        </div>

        {/* RISK DISCLAIMER */}
        <div className="mt-16 p-6 rounded-2xl bg-primary/5 border border-primary/10 text-center">
          <p className="text-[10px] sm:text-xs leading-relaxed text-on-surface-variant italic font-medium">
            &quot;Investments are subject to market risk. Please read all scheme-related documents carefully.&quot;
          </p>
        </div>

        <div className="w-full border-t border-outline-variant/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-on-surface-variant/60 text-xs text-center md:text-left">
          <div className="flex flex-col items-center md:items-start gap-1">
            <p>© 2026 Blue Ocean Inco Pvt. Ltd. All rights reserved.</p>
            <a
              href="https://kurlybrains.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[10px] text-on-surface-variant/35 hover:text-on-surface-variant/55 transition-colors"
            >
              Designed by kurlybrains.com
            </a>
          </div>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            <Link href="/privacy" className="hover:text-primary transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-primary transition-colors">Terms</Link>
            <Link href="/disclosures" className="hover:text-primary transition-colors">Regulatory</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}


