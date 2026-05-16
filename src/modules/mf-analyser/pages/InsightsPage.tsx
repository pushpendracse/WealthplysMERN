"use client";

import React from 'react';
import ReportLayout from "../components/ReportLayout";
import { 
  TrendingUp, 
  Activity,
  FileText,
  ShieldCheck,
  Sparkles,
  Zap,
  Info,
  AlertCircle,
  ArrowRight,
  Lightbulb
} from "lucide-react";
import { m } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ReportHeader, KPICard, InsightBox } from "../components/shared/ReportComponents";

const InsightsPage = () => {
  const kpis = [
    { label: "Total Invested", value: "₹39.50 L", icon: FileText, color: "red" },
    { label: "Current Value", value: "₹49.52 L", icon: TrendingUp, color: "green" },
    { label: "Total Returns", value: "₹10.02 L", sub: "+25.37%", icon: Activity, color: "green" },
    { label: "XIRR", value: "20.94%", icon: ShieldCheck, color: "green" },
  ];

  return (
    <ReportLayout>
      <main className="p-8 space-y-10 bg-[#f8fafc] min-h-screen">
        <ReportHeader 
          title="Insights" 
          subtitle="Intelligent diagnostics and tactical opportunities" 
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {kpis.map((kpi, i) => (
            <KPICard key={i} {...kpi} delay={i * 0.1} />
          ))}
        </div>

        <section className="bg-white rounded-[2.5rem] shadow-sm border border-gray-100 overflow-hidden">
           <div className="p-6 px-8 border-b border-gray-50 flex items-center justify-between bg-gray-50/30">
              <div className="flex items-center gap-3">
                 <Lightbulb className="w-4 h-4 text-primary" />
                 <h3 className="text-[11px] font-black text-gray-900 uppercase tracking-[0.2em]">Priority Insights</h3>
              </div>
              <span className="bg-primary/10 text-primary text-[9px] font-black px-3 py-1 rounded-lg uppercase">4 Alerts</span>
           </div>
           
           <div className="p-10 space-y-6">
              <InsightBox 
                title="Immediate Attention: Fund Underperformance" 
                desc="Axis Bluechip Fund has trailed its benchmark by 4.2% over the last 3 quarters. Consider reallocating to a low-cost Index alternative." 
                type="critical"
                actionable
              />
              <InsightBox 
                title="Cost Optimization: Switch to Direct" 
                desc="Transitioning your regular plan holdings to direct could increase your terminal wealth by ~₹8.4 L over 10 years." 
                type="actionable"
                actionable
              />
              <InsightBox 
                title="Strategic Buy: Large-cap Value" 
                desc="Current market valuations suggest a tactical advantage in Large-cap value funds for the next 12-18 months." 
                type="success"
              />
              <InsightBox 
                title="Portfolio Status: Balanced" 
                desc="Your overall portfolio health remains strong with a diversification score of 85/100." 
                type="info"
              />
           </div>
        </section>

        <m.div 
           initial={{ opacity: 0, scale: 0.98 }}
           animate={{ opacity: 1, scale: 1 }}
           className="bg-gray-900 rounded-[3rem] p-12 text-white relative overflow-hidden"
        >
           <div className="relative z-10 max-w-2xl">
              <div className="flex items-center gap-3 mb-6">
                 <div className="p-2.5 rounded-2xl bg-primary/20 backdrop-blur-xl border border-primary/30">
                    <Sparkles className="w-6 h-6 text-primary" />
                 </div>
                 <h2 className="text-xl font-black uppercase tracking-widest">AI Performance Optimization</h2>
              </div>
              <h3 className="text-4xl font-black mb-6 leading-tight">Projected XIRR improvement of <span className="text-primary">+1.8%</span> available.</h3>
              <p className="text-gray-400 text-xs font-bold uppercase tracking-[0.15em] mb-10 leading-relaxed">
                Our algorithm has identified 3 tactical shifts that can improve your risk-adjusted returns while reducing overall sectoral concentration.
              </p>
              <Button className="h-14 px-10 bg-primary hover:bg-primary/90 text-white rounded-2xl font-black uppercase tracking-widest text-xs gap-3">
                 Review Tactical Plan <ArrowRight className="w-4 h-4" />
              </Button>
           </div>
           <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] -mr-40 -mt-40" />
        </m.div>
      </main>
    </ReportLayout>
  );
};

export default InsightsPage;
