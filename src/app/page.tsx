"use client";

import React, { useState } from "react";
import LottiePreloader from "@/components/LottiePreloader";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ApproachCardsSection from "@/components/ApproachCardsSection";
import AboutSection from "@/components/AboutSection";
import WhatWeDoSection from "@/components/WhatWeDoSection";
import OurApproachSection from "@/components/OurApproachSection";
import VisionMissionValuesSection from "@/components/VisionMissionValuesSection";
import ResponsibleInvestmentSection from "@/components/ResponsibleInvestmentSection";
import InvestmentRequestSection from "@/components/InvestmentRequestSection";
import OurPeopleSection from "@/components/OurPeopleSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  const [isProposalModalOpen, setIsProposalModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 flex flex-col justify-between selection:bg-blue-600/20 selection:text-blue-900 relative">
      {/* 1. Lottie Loading Screen */}
      <LottiePreloader />

      {/* 2. Top Info Bar */}
      <TopBar />

      {/* 3. Sticky Navigation */}
      <Navbar onOpenProposalModal={() => setIsProposalModalOpen(true)} />

      {/* Main Single-Page Narrative Flow */}
      <main className="flex-1 w-full">
        {/* Slide 1: Hero Section */}
        <HeroSection onDiscoverClick={() => {}} />

        {/* Slide 2: Approach & 3 Distinct Styled Cards */}
        <ApproachCardsSection />

        {/* Slide 3: Who We Are / About Blue Ocean */}
        <AboutSection />

        {/* Slide 4: What We Do (Strategic Capital, Strong Partnerships, Sustainable Value) */}
        <WhatWeDoSection />

        {/* Slide 5: Our Approach (8 Investment Evaluation Dimensions) */}
        <OurApproachSection />

        {/* Slide 6: Vision, Mission & 5 Core Values */}
        <VisionMissionValuesSection />

        {/* Slide 7: Responsible Investment & Why Blue Ocean */}
        <ResponsibleInvestmentSection />

        {/* Slide 8: Investment Request (Direct Deal Flow Intake) */}
        <InvestmentRequestSection
          isModalOpen={isProposalModalOpen}
          onOpenModal={() => setIsProposalModalOpen(true)}
          onCloseModal={() => setIsProposalModalOpen(false)}
        />

        {/* Slide 9: Our People (Experience, Perspective, and Ambition) 
        <OurPeopleSection />
        */}

        {/* Slide 10: Contact Us, Office Operating Hours & Email Directory */}
        <ContactSection />
      </main>

      {/* Slide 11: Corporate Multi-Column Footer */}
      <Footer />
    </div>
  );
}
