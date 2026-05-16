"use client";

import React from 'react';
import ReportLayout from "../components/ReportLayout";
import { 
  TrendingUp, 
  Activity,
  FileText,
  ShieldCheck,
  HeartPulse,
  PieChart,
  Target,
  Umbrella,
  Wallet,
  Zap,
  ArrowRight
} from "lucide-react";
import { m } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ReportHeader, KPICard, AnalysisSection } from "../components/shared/ReportComponents";

const HealthCheckPage = () => {
  const kpis = [
    { label: "Total Invested", value: "₹39.50 L", icon: FileText, color: "red" },
    { label: "Current Value", value: "₹49.52 L", icon: TrendingUp, color: "green" },
    { label: "Total Returns", value: "₹10.02 L", sub: "+25.37%", icon: Activity, color: "green" },
    { label: "XIRR", value: "20.94%", icon: ShieldCheck, color: "green" },
  ];

  const healthScores = [
    { label: "Diversification", score: 85, status: "Success", color: "bg-primary" },
    { label: "Risk Mgmt", score: 100, status: "Excellent", color: "bg-emerald-500" },
    { label: "Performance", score: 60, status: "Review", color: "bg-amber-500" },
    { label: "Overall Health", score: 84, status: "Strong", color: "bg-primary" },
  ];

  return (
    <ReportLayout>
      <main className="p-8 space-y-10 bg-[#f8fafc] min-h-screen">
        <ReportHeader 
          title="Health Check" 
          subtitle="Holistic diagnosis of your investment ecosystem" 
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {kpis.map((kpi, i) => (
            <KPICard key={i} {...kpi} delay={i * 0.1} />
          ))}
        </div>

        <section className="bg-white rounded-[2.5rem] shadow-sm border border-gray-100 overflow-hidden">
           <div className="p-6 px-8 border-b border-gray-50 flex items-center gap-3 bg-gray-50/30">
              <HeartPulse className="w-4 h-4 text-primary" />
              <h3 className="text-[11px] font-black text-gray-900 uppercase tracking-[0.2em]">Health Diagnostics</h3>
           </div>
           <div className="grid grid-cols-1 md:grid-cols-4 divide-x divide-gray-50">
              {healthScores.map((h, i) => (
                <div key={i} className="p-10 text-center">
                   <div className="text-[9px] font-black text-gray-400 uppercase tracking-widest mb-4">{h.label}</div>
                   <div className="text-4xl font-black text-gray-900 mb-2 font-sans tracking-tight">{h.score}</div>
                   <div className={`text-[8px] font-black uppercase px-3 py-1 rounded-full inline-block ${h.status === 'Review' ? 'bg-amber-50 text-amber-600' : 'bg-primary/5 text-primary'}`}>
                     {h.status}
                   </div>
                   <div className="w-full h-1.5 bg-gray-50 rounded-full mt-8 overflow-hidden">
                      <m.div 
                        initial={{ width: 0 }}
                        animate={{ width: `${h.score}%` }}
                        className={`h-full ${h.color}`}
                      />
                   </div>
                </div>
              ))}
           </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
           <AnalysisSection title="Liquid Reserve Check" icon={Wallet} className="lg:col-span-2">
              <div className="flex items-center justify-between p-8 rounded-[2rem] bg-primary/5 border border-primary/10">
                 <div>
                    <div className="text-[10px] font-black text-primary uppercase tracking-widest mb-1">Emergency Fund</div>
                    <div className="text-3xl font-black text-gray-900 mb-1">₹3.50 L</div>
                    <p className="text-[11px] font-bold text-gray-500 uppercase">6 Months of Coverage</p>
                 </div>
                 <CheckCircle2Icon />
              </div>
           </AnalysisSection>

           <AnalysisSection title="Insurance Gaps" icon={Umbrella}>
              <div className="space-y-4">
                 {[
                   { l: "Term Plan", s: "Adequate", c: "text-emerald-500" },
                   { l: "Health", s: "Review", c: "text-amber-500" },
                   { l: "Critical", s: "Gap", c: "text-red-500" },
                 ].map((i, idx) => (
                   <div key={idx} className="flex justify-between items-center p-4 rounded-2xl bg-gray-50/50">
                      <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest">{i.l}</span>
                      <span className={`text-[10px] font-black uppercase tracking-widest ${i.c}`}>{i.s}</span>
                   </div>
                 ))}
              </div>
           </AnalysisSection>
        </div>

        <m.div 
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           className="bg-gray-900 rounded-[3rem] p-12 text-center text-white relative overflow-hidden"
        >
           <div className="relative z-10">
              <h2 className="text-3xl font-black mb-4">Actionable Health Plan</h2>
              <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-8">Refine your portfolio for maximum stability</p>
              <Button className="h-14 px-10 bg-primary hover:bg-primary/90 text-white rounded-2xl font-black uppercase tracking-widest text-xs gap-3">
                 Generate Optimized Plan <ArrowRight className="w-4 h-4" />
              </Button>
           </div>
           <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -mr-32 -mt-32" />
        </m.div>
      </main>
    </ReportLayout>
  );
};

const CheckCircle2Icon = () => (
  <div className="w-16 h-16 rounded-full bg-emerald-500 flex items-center justify-center shadow-lg shadow-emerald-500/20">
    <ShieldCheck className="w-8 h-8 text-white" />
  </div>
);

export default HealthCheckPage;
