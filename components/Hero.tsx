"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Shield, Users, Lock, CheckCircle } from "lucide-react";
import Image from "next/image";

const Hero = () => {
  const badges = [
    { icon: <Shield className="w-5 h-5" />, text: "SEBI Registered" },
    { icon: <Lock className="w-5 h-5" />, text: "Bank Grade Security" },
    { icon: <Users className="w-5 h-5" />, text: "Trusted by 10k+ Investors" },
  ];

  return (
    <div className="relative min-h-screen bg-white overflow-hidden">
      {/* Banner Area Hidden */}
      <div className="mt-20 md:mt-24"></div>

      {/* Decorative Background Elements */}
      <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-primary/5 blur-[120px] rounded-full" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-gray-50 blur-[120px] rounded-full" />

      <section className="relative max-w-7xl mx-auto px-4 pt-20 pb-32 md:pt-32 md:pb-40">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary text-primary text-sm font-bold mb-8 border border-primary/20">
              <TrendingUp className="w-4 h-4" />
              Institutional-Grade Investment Platform
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-8">
              Wealth Today, <br />
              <span className="text-primary">Wealthier</span> Tomorrow.
            </h1>

            <p className="text-xl text-gray-600 mb-10 max-w-xl leading-relaxed">
              We empower individuals with professional-grade wealth management tools, expert-led strategies, and institutional security. Start your journey today.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button className="h-14 px-8 bg-primary hover:bg-primary/90 text-white rounded-lg text-lg font-bold shadow-lg shadow-primary/20">
                Explore Strategies <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="outline" className="h-14 px-8 rounded-lg border-gray-200 text-gray-700 hover:bg-gray-50 text-lg font-bold">
                View Portfolio
              </Button>
            </div>

            <div className="flex flex-wrap gap-6 items-center border-t border-gray-100 pt-10">
              {badges.map((badge, i) => (
                <div key={i} className="flex items-center gap-2 text-gray-500 text-sm font-medium">
                  <div className="text-primary">{badge.icon}</div>
                  {badge.text}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
          >
            <div className="">
              <Image
                src="/hero_bg_desktop.2bdb8cd2.avif"
                alt="WealthPlus Hero"
                width={800}
                height={800}
                className="w-full h-auto object-cover"
                priority
              />
            </div>

            {/* Sublte glow effect behind the image */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-primary/10 blur-[120px] -z-10" />
          </motion.div>
        </div>
      </section>

      {/* Hero Background Image at the Bottom with Gradient Mask */}
      <div className="absolute bottom-0 left-0 w-full h-[400px] pointer-events-none -z-20 opacity-60">
        <Image
          src="/hero_bg_desktop.2bdb8cd2.avif"
          alt="Hero Background"
          fill
          className="object-cover object-bottom"
          style={{ maskImage: 'linear-gradient(to top, black, transparent)' }}
        />
      </div>
    </div>
  );
};

export default Hero;
