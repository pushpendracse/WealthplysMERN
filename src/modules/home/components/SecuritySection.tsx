"use client";

import React from "react";
import { ShieldCheck, Lock, CreditCard, ChevronRight, Fingerprint, RefreshCcw } from "lucide-react";
import { Button } from "@/components/ui/button";

const securityFeatures = [
  {
    title: "No Hidden Fees",
    desc: "Complete transparency in our pricing model. No surprises, ever.",
    icon: <CreditCard className="w-8 h-8" />
  },
  {
    title: "Bank Grade Security",
    desc: "Your data and assets are protected with AES-256 encryption.",
    icon: <Lock className="w-8 h-8" />
  },
  {
    title: "Identity Protection",
    desc: "Biometric authentication and multi-factor security layers.",
    icon: <Fingerprint className="w-8 h-8" />
  },
  {
    title: "Instant Liquidity",
    desc: "Withdraw your funds anytime with our seamless processing.",
    icon: <RefreshCcw className="w-8 h-8" />
  },
];

const SecuritySection = () => {
  return (
    <section className="py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-secondary text-primary rounded-lg text-xs font-bold uppercase tracking-widest mb-6">
          <ShieldCheck className="w-4 h-4" /> Trusted & Secure
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 leading-tight">
          Your Security is Our <span className="text-primary">Top Priority</span>.
        </h2>
        <p className="text-xl text-gray-600 mb-20 max-w-2xl mx-auto">
          We use institutional-grade security protocols to ensure your wealth and data remain safe at all times.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {securityFeatures.map((feature, i) => (
            <div key={i} className="group relative">
              <div className="p-10 bg-white rounded-lg border-2 border-gray-50 flex flex-col items-center text-center gap-8 hover:border-primary/10 hover:shadow-xl transition-all duration-300 h-full">
                <div className="w-20 h-20 bg-secondary rounded-lg flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  {feature.icon}
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h4>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
                <div className="mt-auto">
                  <Button variant="ghost" className="text-primary font-bold hover:bg-secondary gap-2">
                    Learn More <ChevronRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 p-12 bg-[#0a192f] rounded-lg text-white flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 pointer-events-none" />
          <div className="relative z-10 text-center md:text-left">
            <h3 className="text-3xl font-bold mb-4">Start your investment journey today.</h3>
            <p className="text-white/70">Institutional grade wealth management, now accessible to everyone.</p>
          </div>
          <Button className="relative z-10 bg-primary text-white hover:bg-primary/90 rounded-lg h-14 px-10 font-bold text-lg border-none">
            Create Free Account
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SecuritySection;
