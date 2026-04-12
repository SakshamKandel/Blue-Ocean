"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useScroll, useMotionValueEvent } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

/** 
 * PERMANENT PEARL GLASS NAVBAR
 * A constant, high-contrast interface designed for maximum legibility.
 * Uses persistent glassmorphism (backdrop-blur) and a unified modular layout.
 */

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const { scrollY } = useScroll();
  
  // REMOVED: Scroll hide logic to keep navbar permanent as per request
  const isVisible = true;

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Strategy", href: "/strategy" },
    { name: "Insights", href: "/insights" },
    { name: "Careers", href: "/careers" },
    { name: "Contact", href: "/contact" },
  ];

  // CONSTANT THEME: Permanent Pearl Glass
  const theme = {
    text: "text-on-surface-variant/80 hover:text-primary",
    active: "text-primary",
    bg: "bg-white/80 backdrop-blur-3xl border-white/40 shadow-xl shadow-black/5",
    btn: "bg-primary text-white hover:bg-secondary shadow-lg shadow-primary/20",
    indicator: "bg-secondary"
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.header
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="fixed top-0 left-0 right-0 z-[100] px-4 md:px-8 pt-4 md:pt-6 pointer-events-none"
        >
          <div className="max-w-[1400px] mx-auto flex items-center justify-between">
            
            {/* MODULE 1: LOGO */}
            <div className="pointer-events-auto">
              <Link 
                href="/" 
                className={cn(
                  "flex items-center justify-center h-12 md:h-14 px-4 md:px-6 rounded-2xl transition-all duration-500 border group overflow-hidden shadow-sm",
                  theme.bg
                )}
              >
                <img 
                  src="/Logo.png" 
                  alt="Blue Ocean" 
                  className="h-6 md:h-8 w-auto transition-all"
                />
                <div className="absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
            </div>

            {/* MODULE 2: NAVIGATION STRIP */}
            <nav 
              className={cn(
                "hidden md:flex items-center gap-1 p-1 rounded-2xl border pointer-events-auto transition-all duration-500 shadow-sm overflow-x-auto custom-scrollbar",
                theme.bg
              )}
            >
              {navLinks.map((link, i) => {
                const isActive = pathname === link.href;
                return (
                  <React.Fragment key={link.name}>
                    <Link
                      href={link.href}
                      className={cn(
                        "relative px-3 py-2 text-[9px] font-bold uppercase tracking-[0.2em] transition-all duration-300 rounded-xl whitespace-nowrap",
                        isActive ? theme.active : theme.text
                      )}
                    >
                      {link.name}
                      {isActive && (
                        <motion.div 
                          layoutId="nav-pill"
                          className="absolute inset-0 bg-primary/5 rounded-xl -z-10"
                          transition={{ type: "spring", stiffness: 400, damping: 30 }}
                        />
                      )}
                    </Link>
                    {i < navLinks.length - 1 && (
                      <div className="w-[1px] h-3 bg-primary/10 shrink-0" />
                    )}
                  </React.Fragment>
                );
              })}
            </nav>

            {/* MODULE 3: ACTION PORTAL */}
            <div className="flex items-center gap-3 pointer-events-auto">
               <a
                href="https://www.nepalstock.com/"
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "hidden xl:flex items-center gap-3 px-6 py-3 rounded-2xl text-[10px] font-bold tracking-[0.2em] uppercase transition-all duration-500 border group overflow-hidden shadow-sm",
                  theme.bg,
                  "hover:scale-[1.02] active:scale-95"
                )}
              >
                <span className="relative z-10 flex items-center gap-2">
                  <span className={cn("inline-block w-1.5 h-1.5 rounded-full animate-pulse", theme.indicator)} />
                  Portal
                </span>
                <div className="w-[1px] h-3 bg-primary/10" />
                <span className="opacity-50 group-hover:opacity-100 transition-opacity">NEPSE</span>
              </a>

              <Link 
                href="/contact"
                className={cn(
                  "flex items-center justify-center px-6 py-3 rounded-2xl text-[10px] font-bold tracking-[0.15em] uppercase transition-all duration-500 active:scale-95 text-center leading-tight whitespace-nowrap",
                  theme.btn
                )}
              >
                Book a Consultation
              </Link>

              {/* MOBILE MENU TRIGGER */}
              <button className={cn(
                "md:hidden flex items-center justify-center w-12 h-12 rounded-2xl border transition-all shadow-sm",
                theme.bg,
                theme.text
              )}>
                <svg width="20" height="2" viewBox="0 0 20 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 1H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </button>
            </div>

          </div>
        </motion.header>
      )}
    </AnimatePresence>
  );
}
