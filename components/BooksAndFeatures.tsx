"use client";

import React from "react";
import { m } from "framer-motion";
import { Button } from "@/components/ui/button";
import { BookOpen, CheckCircle2, Star, ShieldCheck, Zap, Briefcase } from "lucide-react";

const whyChooseUs = [
  {
    title: "Expertise that Matters",
    desc: "Led by industry veterans with decades of experience in institutional wealth management.",
    icon: <Star className="w-6 h-6 text-primary" />,
  },
  {
    title: "Zero Conflict of Interest",
    desc: "We don't accept commissions from asset managers. Our loyalty is only to you.",
    icon: <ShieldCheck className="w-6 h-6 text-primary" />,
  },
  {
    title: "Cutting-edge Technology",
    desc: "Advanced algorithms and real-time data to optimize your portfolio performance.",
    icon: <Zap className="w-6 h-6 text-primary" />,
  },
  {
    title: "Personalized Strategy",
    desc: "Tailored investment plans that align with your specific financial goals and risk profile.",
    icon: <Briefcase className="w-6 h-6 text-primary" />,
  },
];

const BooksAndFeatures = () => {
  return (
    <section id="expertise" className="py-10 md:py-16 bg-[#f8fbff] overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Book Section */}
          <m.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row items-center gap-8"
          >
            <div className="relative w-full max-w-[320px] aspect-[3/4] bg-gradient-to-br from-[#eff6ff] to-[#dbeafe] rounded-r-lg rounded-l-sm shadow-[0_35px_60px_-35px_rgba(15,23,42,0.25)] overflow-hidden border border-sky-200 transform -rotate-3 hover:rotate-0 transition-transform duration-500 flex flex-col items-center justify-center p-8 text-center">
              <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
              <BookOpen className="w-16 h-16 text-primary mb-6 relative z-10" />
              <h3 className="text-2xl font-bold text-white mb-2 relative z-10 leading-tight">PAUSE TO RETHINK</h3>
              <p className="text-primary/70 text-sm font-medium relative z-10 uppercase tracking-widest">Investment Wisdom</p>
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-primary rounded-full" />
            </div>

            <div className="flex-1 text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-secondary text-primary rounded-lg text-xs font-bold uppercase tracking-wider mb-6">
                Must Read
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6 leading-tight">
                Our Investment Philosophy in a Book.
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Discover the core principles that drive our strategies. "Pause to Rethink" is your guide to navigating modern markets with clarity and discipline.
              </p>
              <Button className="bg-primary hover:bg-primary/90 text-white rounded-lg h-12 px-8 font-bold">
                Download PDF
              </Button>
            </div>
          </m.div>

          {/* Right: Features Grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {whyChooseUs.map((feature, i) => (
              <m.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-5 bg-white rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow group"
              >
                <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h4 className="text-base font-bold text-gray-900 mb-2">{feature.title}</h4>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {feature.desc}
                </p>
              </m.div>
            ))}

            {/* CTA Card */}
            <m.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="sm:col-span-2 p-6 bg-primary rounded-lg text-white flex flex-col md:flex-row items-center justify-between gap-4 shadow-xl shadow-primary/20"
            >
              <div className="text-center md:text-left">
                <h4 className="text-xl font-bold mb-2">Ready to secure your future?</h4>
                <p className="text-white/70 text-sm">Join over 10,000+ happy investors today.</p>
              </div>
              <Button className="bg-white text-primary hover:bg-white/90 rounded-lg h-12 px-8 font-bold shrink-0">
                Get Started Now
              </Button>
            </m.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BooksAndFeatures;
