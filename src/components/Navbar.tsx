"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone } from "lucide-react";

interface NavbarProps {
  onBookClick?: () => void;
  onOpenProposalModal?: () => void;
}

export default function Navbar({ onBookClick, onOpenProposalModal }: NavbarProps) {
  const navItems = [
    { label: "Home", href: "#" },
    { label: "About Us", href: "#about" },
    { label: "What We Do", href: "#what-we-do" },
    { label: "Our Approach", href: "#approach" },
    { label: "Why Us", href: "#why-us" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 h-16 sm:h-20 flex items-center justify-between">
        
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-2 group">
          <Image
            src="/Logo.png"
            alt="Blue Ocean Inco Pvt. Ltd."
            width={180}
            height={50}
            priority
            className="h-10 sm:h-12 w-auto object-contain"
          />
        </Link>

        {/* NAVIGATION LINKS */}
        <nav className="hidden lg:flex items-center gap-7">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-xs font-bold text-slate-800 hover:text-[#2563eb] transition-colors tracking-wide uppercase"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* RIGHT CTA BUTTON (Boxy corporate style) */}
        <div className="flex items-center gap-3">
          <a
            href="#about"
            onClick={onBookClick}
            className="group inline-flex items-center rounded-lg bg-[#001c40] hover:bg-[#002657] border border-[#38bdf8]/40 p-1 pl-4 shadow-sm transition-all duration-200"
          >
            <span className="text-xs font-bold text-white pr-3">
              Book Appointment
            </span>
            <div className="w-7 h-7 rounded-md bg-[#38bdf8] text-[#001035] flex items-center justify-center group-hover:scale-105 transition-transform font-black">
              <span className="text-sm font-extrabold leading-none">&raquo;</span>
            </div>
          </a>
        </div>

      </div>
    </header>
  );
}
