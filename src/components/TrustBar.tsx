"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const items = [
  "100% CA-Led Leadership",
  "Public & Private Equity",
  "Based in Kathmandu",
  "Forensic Due Diligence"
];

export default function TrustBar() {
  return (
    <div className="w-full bg-surface-lowest border-y border-outline-variant/5 py-4 overflow-hidden relative">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="flex flex-wrap justify-center md:justify-between items-center gap-6 md:gap-8">
          {items.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="flex items-center gap-3 group"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-secondary/40 group-hover:bg-secondary transition-colors" />
              <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-on-surface-variant/60 group-hover:text-primary transition-colors whitespace-nowrap">
                {item}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Decorative gradient Fades for mobile scroll if needed, but here we wrap */}
      <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-surface-lowest to-transparent z-10 md:hidden" />
      <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-surface-lowest to-transparent z-10 md:hidden" />
    </div>
  );
}
