import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MarketStats from "@/components/MarketStats";

// Dynamically import components below the fold for better performance
const EconomyIndicator = dynamic(() => import("@/components/EconomyIndicator"), { ssr: true });
const InvestmentPlans = dynamic(() => import("@/components/InvestmentPlans"), { ssr: true });
const BooksAndFeatures = dynamic(() => import("@/components/BooksAndFeatures"), { ssr: true });
const Philosophy = dynamic(() => import("@/components/Philosophy"), { ssr: true });
const Footer = dynamic(() => import("@/components/Footer"), { ssr: true });

export default function Home() {
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
}
