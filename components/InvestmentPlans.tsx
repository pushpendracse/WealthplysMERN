"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";
import { ArrowRight, CheckCircle2, TrendingUp, Shield, BarChart2, PieChart } from "lucide-react";

const plans = [
  {
    title: "Dividend aristocrats",
    returns: "22.4%",
    type: "Low Risk",
    desc: "Companies with a track record of increasing dividends for 25+ consecutive years.",
    icon: <Shield className="w-10 h-10 text-primary" />,
    color: "bg-secondary",
    features: ["Stable Returns", "Quarterly Payouts", "Blue-chip Stocks"],
  },
  {
    title: "Growth opportunities",
    returns: "28.8%",
    type: "High Risk",
    desc: "High-potential companies in emerging sectors with aggressive expansion plans.",
    icon: <TrendingUp className="w-10 h-10 text-primary" />,
    color: "bg-blue-50/50",
    features: ["Capital Appreciation", "Mid-cap Focus", "Long-term Horizon"],
  },
  {
    title: "Strategic Balanced",
    returns: "18.2%",
    type: "Moderate Risk",
    desc: "A mix of stable dividend payers and growth-oriented assets for balanced wealth.",
    icon: <BarChart2 className="w-10 h-10 text-primary" />,
    color: "bg-secondary",
    features: ["Diversified Portfolio", "Risk Mitigation", "Steady Growth"],
  },
  {
    title: "Global Tech",
    returns: "24.5%",
    type: "High Risk",
    desc: "Exposure to global tech leaders and disruptive innovators across the world.",
    icon: <PieChart className="w-10 h-10 text-primary" />,
    color: "bg-blue-50/50",
    features: ["US Market Exposure", "Tech Giants", "Innovation Focus"],
  },
];

const InvestmentPlans = () => {
  return (
    <section id="plans" className="py-32 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex  md:flex-row md:items-end justify-between gap-8 mb-21">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-8xl font-bold text-dark mb-1 leading-tight hover:scale-500">
              Institutional Investment Strategies <br />
              <span className="text-primary">Tailored for You.</span>
            </h2>
            <p className="text-xl text-gray-400 leading">
              Choose from our professionally curated strategies designed to maximize returns while managing risk effectively.
            </p>
          </div>

          <div className="flex gap-4">
            <Button variant="secondary" className="bg-primary text-white hover:scale-500 rounded-lg px-8 py-6 h-auto font-bold">
              Direct Plans
            </Button>
            <Button variant="outline" className="rounded-lg border-primary/10 text-primary hover:bg-secondary px-8 py-6 h-auto font-bold">
              Advisory
            </Button>
          </div>
        </div>

        <div className="relative">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-6">
              {plans.map((plan, i) => (
                <CarouselItem key={i} className="pl-6 md:basis-1/2 lg:basis-1/3">
                  <div className={`p-10 rounded-lg h-full border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col ${plan.color}`}>
                    <div className="mb-8 flex justify-between items-start">
                      <div className="p-4 bg-white rounded-lg shadow-sm">
                        {plan.icon}
                      </div>
                      <div className="px-3 py-1 bg-white/50 backdrop-blur rounded-lg text-[10px] font-bold uppercase tracking-widest text-gray-600 border border-white/40">
                        {plan.type}
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.title}</h3>
                    <p className="text-gray-600 text-sm mb-8 leading-relaxed line-clamp-2">
                      {plan.desc}
                    </p>

                    <div className="mt-auto">
                      <div className="mb-8">
                        <div className="text-[10px] text-gray-500 font-bold uppercase tracking-wider mb-1">Estimated Annual Returns</div>
                        <div className="text-4xl font-black text-primary tracking-tight">{plan.returns}</div>
                      </div>

                      <div className="space-y-3 mb-10">
                        {plan.features.map((feature, j) => (
                          <div key={j} className="flex items-center gap-2 text-sm font-medium text-gray-700">
                            <CheckCircle2 className="w-4 h-4 text-primary" />
                            {feature}
                          </div>
                        ))}
                      </div>

                      <Button className="w-full bg-primary hover:bg-primary/90 text-white rounded-lg h-12 font-bold group">
                        Learn More <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-end gap-2 mt-12">
              <CarouselPrevious className="static translate-y-0 rounded-lg w-12 h-12 border-primary/10 text-primary hover:bg-secondary" />
              <CarouselNext className="static translate-y-0 rounded-lg w-12 h-12 bg-primary text-white hover:bg-primary/90 border-none" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default InvestmentPlans;
