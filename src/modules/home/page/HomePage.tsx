"use client";

import dynamic from "next/dynamic";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/modules/home/components/Hero";
import MarketStats from "@/modules/home/components/MarketStats";

// Dynamically import components below the fold for better performance
const EconomyIndicator = dynamic(() => import("@/modules/home/components/EconomyIndicator"), { ssr: true });
const InvestmentPlans = dynamic(() => import("@/modules/home/components/InvestmentPlans"), { ssr: true });
const BooksAndFeatures = dynamic(() => import("@/modules/home/components/BooksAndFeatures"), { ssr: true });
const Philosophy = dynamic(() => import("@/modules/home/components/Philosophy"), { ssr: true });
const Footer = dynamic(() => import("@/components/layout/Footer"), { ssr: true });

const HomePage = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <MarketStats />
      <EconomyIndicator />
      <InvestmentPlans />
      <BooksAndFeatures />
      <Philosophy />
      <Footer />
    </main>
  );
};

export default HomePage;
