"use client";

import React from 'react';
import ReportLayout from "../components/ReportLayout";
import { 
  TrendingUp, 
  Activity,
  FileText,
  ShieldCheck,
  PieChart,
  LayoutDashboard,
  Zap,
  ArrowRight
} from "lucide-react";
import { m } from "framer-motion";
import { ReportHeader, KPICard, AnalysisSection, InsightBox } from "../components/shared/ReportComponents";

const SummaryPage = () => {
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
          title="Summary" 
          subtitle="Executive overview of your portfolio performance" 
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {kpis.map((kpi, i) => (
            <KPICard key={i} {...kpi} delay={i * 0.1} />
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
           <AnalysisSection title="Portfolio Health" icon={LayoutDashboard} className="lg:col-span-2">
              <div className="grid grid-cols-2 gap-8">
                 {[
                   { label: "Risk Score", val: "6.4/10", desc: "Moderate Risk Profile" },
                   { label: "Diversification", val: "85/100", desc: "Well Diversified" },
                   { label: "Alpha", val: "+3.49%", desc: "Above Benchmark" },
                   { label: "Beta", val: "0.92", desc: "Lower Volatility" },
                 ].map((stat, i) => (
                   <div key={i} className="p-6 rounded-[2rem] bg-gray-50 border border-gray-100 hover:border-primary/20 transition-all group">
                      <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">{stat.label}</div>
                      <div className="text-2xl font-black text-gray-900 mb-1">{stat.val}</div>
                      <div className="text-[9px] font-bold text-primary uppercase tracking-wide">{stat.desc}</div>
                   </div>
                 ))}
              </div>
           </AnalysisSection>

           <div className="space-y-6">
              <AnalysisSection title="Critical Alerts" icon={Zap}>
                 <div className="space-y-4">
                    <InsightBox 
                      title="Portfolio Drift" 
                      desc="Your equity allocation has drifted by 4.8% from your target of 70%." 
                      type="actionable"
                      actionable
                    />
                    <InsightBox 
                      title="Tax Harvesting" 
                      desc="You have ₹85,000 in unused LTCG tax exemptions for this year." 
                      type="info"
                    />
                 </div>
              </AnalysisSection>
              
              <m.div 
                 whileHover={{ scale: 1.02 }}
                 className="bg-primary p-8 rounded-[2.5rem] text-white shadow-xl shadow-primary/20 cursor-pointer flex items-center justify-between group"
              >
                 <div>
                    <h4 className="text-sm font-black uppercase tracking-widest mb-1">Detailed Analysis</h4>
                    <p className="text-[10px] font-bold opacity-80 uppercase tracking-wide">Explore deep metrics</p>
                 </div>
                 <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </m.div>
           </div>
        </div>
      </main>
    </ReportLayout>
  );
};

export default SummaryPage;
