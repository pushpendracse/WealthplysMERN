"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";
import { ArrowRight, CheckCircle2, TrendingUp, Shield, BarChart2, PieChart } from "lucide-react";

const directPlans = [
  {
    title: "Dividend Aristocrats",
    returns: "22.4%",
    type: "Low Risk",
    desc: "Companies with a track record of increasing dividends for 25+ consecutive years.",
    icon: <Shield className="w-10 h-10 text-primary" />,
    color: "bg-secondary",
    features: ["Stable Returns", "Quarterly Payouts", "Blue-chip Stocks"],
  },
  {
    title: "Growth Opportunities",
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

const advisoryPlans = [
  {
    title: "MODEL 1: Fixed Fee – Goal-Based Advisory",
    returns: "₹12,000 per year",
    type: "Simple & Scalable",
    desc: "Goal-based planning for salaried professionals and disciplined wealth builders.",
    icon: <Shield className="w-10 h-10 text-primary" />,
    color: "bg-blue-50/40",
    features: [
      "Risk profiling",
      "Goal calculation (retirement, child, house)",
      "Asset allocation",
      "Direct mutual fund/stocks portfolio",
      "Review and rebalancing support",
    ],
  },
  {
    title: "MODEL 2: Tiered Subscription",
    returns: "₹3,999 - ₹18,000 per year",
    type: "Basic • Standard • Premium",
    desc: "Flexible advisory tiers to suit growing wealth and changing portfolio needs.",
    icon: <TrendingUp className="w-10 h-10 text-primary" />,
    color: "bg-secondary",
    features: [
      "Basic advisory support",
      "Standard portfolio guidance",
      "Premium wealth planning",
      "Tiered service and pricing",
      "Quarterly reviews",
    ],
  },
  {
    title: "Wealth Advisory",
    returns: "₹25,000 per year",
    type: "Comprehensive",
    desc: "Full-service advisory for higher-net-worth clients with active portfolio oversight.",
    icon: <BarChart2 className="w-10 h-10 text-primary" />,
    color: "bg-blue-50/40",
    features: [
      "Risk profiling",
      "Comprehensive financial plan",
      "Asset allocation strategy",
      "Direct mutual fund selection",
      "Direct stock advisory",
      "Tax optimization",
      "Rebalancing support",
    ],
  },
  {
    title: "Elite Wealth Plan",
    returns: "₹50,000 per year",
    type: "Premium",
    desc: "Executive advisory for large portfolios, estate planning, and debt structuring.",
    icon: <PieChart className="w-10 h-10 text-primary" />,
    color: "bg-secondary",
    features: [
      "Risk profiling",
      "Retirement modelling",
      "Comprehensive financial plan",
      "Asset allocation strategy",
      "Estate planning coordination",
      "Tax strategy discussion",
      "Debt restructuring advice",
      "Rebalancing support",
    ],
  },
];

const InvestmentPlans = () => {
  const [activeTab, setActiveTab] = useState<"direct" | "advisory">("direct");
  const plans = activeTab === "direct" ? directPlans : advisoryPlans;

  return (
    <section id="plans" className="py-32 bg-[#f8fbff] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex  md:flex-row md:items-end justify-between gap-8 mb-21">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-3xl font-bold text-dark mb-1 leading-tight">
              Institutional Investment Strategies <br />
              <span className="text-primary">Tailored for You.</span>
            </h2>
            <p className="text-xl text-gray-400 leading">
              Choose from our professionally curated strategies designed to maximize returns while managing risk effectively.
            </p>
          </div>

          <div className="flex gap-4">
            <button
              type="button"
              onClick={() => setActiveTab("direct")}
              className={`rounded-lg px-8 py-6 h-auto font-bold transition-all ${
                activeTab === "direct"
                  ? "bg-primary text-white"
                  : "border border-primary/10 text-primary bg-white/90 hover:bg-secondary"
              }`}
            >
              Direct Plans
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("advisory")}
              className={`rounded-lg px-8 py-6 h-auto font-bold transition-all ${
                activeTab === "advisory"
                  ? "bg-primary text-white"
                  : "border border-primary/10 text-primary bg-white/90 hover:bg-secondary"
              }`}
            >
              Advisory
            </button>
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
                  <div className="p-10 rounded-lg h-full border border-sky-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col bg-white">
                    <div className="mb-8 flex justify-between items-start">
                      <div className="p-4 bg-white rounded-lg shadow-sm">
                        {plan.icon}
                      </div>
                      <div className="px-3 py-1 bg-white/50 backdrop-blur rounded-lg text-[10px] font-bold uppercase tracking-widest text-gray-600 border border-white/40">
                        {plan.type}
                      </div>
                    </div>

                    <h3 className="text-3xl font-bold text-gray-900 mb-2">{plan.title}</h3>
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
