import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MarketStats from "@/components/MarketStats";
import InvestmentPlans from "@/components/InvestmentPlans";
import BooksAndFeatures from "@/components/BooksAndFeatures";
import Philosophy from "@/components/Philosophy";
import Masterclass from "@/components/Masterclass";
import KnowledgeCenter from "@/components/KnowledgeCenter";
import SecuritySection from "@/components/SecuritySection";
import BlogSection from "@/components/BlogSection";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <MarketStats />
      <InvestmentPlans />
      <BooksAndFeatures />
      <Philosophy />
      <Masterclass />
      <KnowledgeCenter />
      <SecuritySection />
      <BlogSection />
      <Testimonials />
      <Footer />
    </main>
  );
}
