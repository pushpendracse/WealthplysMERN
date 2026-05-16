"use client";

import React from "react";
import { m } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Target, Lightbulb, Users, BarChart, Shield, Zap, Globe, Briefcase, ArrowRight } from "lucide-react";

const items = [
  { title: "Client Centric", icon: <Users className="w-8 h-8" />, desc: "Your goals are our priority." },
  { title: "Disciplined", icon: <Target className="w-8 h-8" />, desc: "Removing emotions from investing." },
  { title: "Transparent", icon: <Shield className="w-8 h-8" />, desc: "Clear communication always." },
  { title: "Innovative", icon: <Lightbulb className="w-8 h-8" />, desc: "Embracing new market realities." },
  { title: "Global Vision", icon: <Globe className="w-8 h-8" />, desc: "Access to world markets." },
  { title: "Data Driven", icon: <BarChart className="w-8 h-8" />, desc: "Powered by deep analytics." },
  { title: "Fast Execution", icon: <Zap className="w-8 h-8" />, desc: "Real-time trade fulfillment." },
  { title: "Professional", icon: <Briefcase className="w-8 h-8" />, desc: "Institutional grade management." },
];

const Philosophy = () => {
  return (
    <section className="py-10 md:py-16 bg-[#f8fbff]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="text-center mb-8 md:mb-12 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-sky-100 text-primary rounded-lg text-xs font-bold uppercase tracking-widest mb-6">
            Our Core Values
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 leading-tight">
            A Simple Philosophy for <span className="text-primary">Complex</span> Markets.
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            We believe in evidence-based investing, risk discipline, and low-cost execution.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map((item, i) => (
            <m.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -8, backgroundColor: "var(--secondary)" }}
              className="p-6 bg-white rounded-lg border border-sky-100 hover:border-primary/10 flex flex-col items-center text-center transition-all duration-300"
            >
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center text-primary shadow-sm mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                {item.icon}
              </div>
              <h4 className="text-base font-bold text-gray-900 mb-2">{item.title}</h4>
              <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
            </m.div>
          ))}
        </div>

        <div className="mt-8 md:mt-12 flex flex-col items-center gap-6 text-center px-4">
          <p className="text-gray-500 font-medium">Want to know more about our journey and leadership?</p>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Button className="flex-1 sm:flex-none bg-primary hover:bg-primary/90 text-white rounded-lg h-12 md:h-14 px-8 md:px-10 font-bold">
              About WealthPlus
            </Button>
            <Button variant="outline" className="flex-1 sm:flex-none border-gray-200 text-gray-700 hover:bg-gray-50 rounded-lg h-12 md:h-14 px-8 md:px-10 font-bold">
              Meet the Team <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
