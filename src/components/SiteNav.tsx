"use client";

import { motion } from "framer-motion";
import Link from "next/link";

type SiteNavProps = {
  current: "home" | "about" | "strategy" | "portfolio" | "contact";
};

const links = [
  { key: "home", href: "/", label: "Home" },
  { key: "about", href: "/about", label: "About" },
  { key: "strategy", href: "/strategy", label: "Strategy" },
  { key: "portfolio", href: "/portfolio", label: "Portfolio" },
  { key: "contact", href: "/contact", label: "Contact" },
] as const;

export default function SiteNav({ current }: SiteNavProps) {
  return (
    <nav className="fixed top-0 z-50 w-full px-6 py-6 text-white mix-blend-difference pointer-events-none">
      <div className="max-w-7xl mx-auto flex items-center justify-between pointer-events-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="font-display font-bold text-xl tracking-tight flex items-center gap-3"
        >
          <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
            <span className="text-black text-sm font-bold">B</span>
          </div>
          Blue Ocean Inco
        </motion.div>

        <div className="hidden lg:flex gap-10 font-medium text-sm tracking-wide">
          {links.map((link) => {
            const active = link.key === current;
            return (
              <Link
                key={link.key}
                href={link.href}
                className={
                  active
                    ? "opacity-100 border-b border-white pb-1"
                    : "opacity-60 hover:opacity-100 transition-opacity"
                }
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <Link
            href="/contact"
            className="px-6 py-2.5 rounded-full border border-white/20 hover:bg-white hover:text-black transition-all"
          >
            Connect
          </Link>
        </motion.div>
      </div>
    </nav>
  );
}
