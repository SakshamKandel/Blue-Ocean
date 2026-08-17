"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="bg-surface-lowest pt-32 pb-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        <Link href="/contact">
          <motion.h2
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="font-display text-5xl md:text-8xl font-bold text-primary tracking-tighter mb-16 hover:text-secondary transition-colors group flex items-center justify-center gap-4"
          >
            Connect with Clarity
            <span className="w-16 h-16 md:w-24 md:h-24 bg-primary group-hover:bg-secondary rounded-full flex items-center justify-center transition-colors">
              <ArrowUpRight className="text-white w-8 h-8 md:w-12 md:h-12 group-hover:rotate-12 transition-transform duration-500" />
            </span>
          </motion.h2>
        </Link>

        <div className="w-full border-t border-outline-variant/20 pt-10 grid md:grid-cols-4 gap-8 text-left text-sm text-on-surface-variant">
          <div>
            <p className="font-display text-primary text-lg font-bold mb-4">
              Blue Ocean Inco
            </p>
            <p className="leading-relaxed">
              A Chartered Accountant led investment house building disciplined
              capital strategies from Kathmandu.
            </p>
          </div>

          <div>
            <p className="font-semibold uppercase tracking-wider text-xs text-on-surface mb-4">
              Navigation
            </p>
            <div className="space-y-3">
              <Link href="/about" className="block hover:text-primary transition-colors">
                About Us
              </Link>
              <Link href="/strategy" className="block hover:text-primary transition-colors">
                Investment Strategy
              </Link>
              <Link href="/portfolio" className="block hover:text-primary transition-colors">
                Portfolio Overview
              </Link>
            </div>
          </div>

          <div>
            <p className="font-semibold uppercase tracking-wider text-xs text-on-surface mb-4">
              Contact
            </p>
            <div className="space-y-3">
              <p>Blueocean1169@gmail.com</p>
              <p>+977 (1) 2345 678</p>
              <p>Sun-Thu: 10:00 - 17:00</p>
            </div>
          </div>

          <div>
            <p className="font-semibold uppercase tracking-wider text-xs text-on-surface mb-4">
              Headquarters
            </p>
            <p className="leading-relaxed">
              Bouddha 6, Kathmandu
              <br />
              Bagmati Province, Nepal
            </p>
          </div>
        </div>

        <div className="w-full border-t border-outline-variant/10 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-on-surface-variant/70">
          <p>© 2026 Blue Ocean Inco Pvt. Ltd.</p>
          <div className="flex gap-6">
            <Link href="/contact" className="hover:text-primary transition-colors">
              Contact
            </Link>
            <Link href="/strategy" className="hover:text-primary transition-colors">
              Whitepaper
            </Link>
            <Link href="/portfolio" className="hover:text-primary transition-colors">
              Disclosures
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
