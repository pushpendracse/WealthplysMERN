"use client";

import React from 'react';
import ReportLayout from "../components/ReportLayout";
import { 
  TrendingUp, 
  Activity,
  FileText,
  ShieldCheck,
  ShieldAlert,
  BarChart2,
  ScatterChart,
  ArrowRight
} from "lucide-react";
import { m } from "framer-motion";
import { ReportHeader, KPICard, AnalysisSection } from "../components/shared/ReportComponents";

const RiskMetricsPage = () => {
  const kpis = [
    { label: "Risk Score", value: "6.4/10", icon: ShieldAlert, color: "red" },
    { label: "Diversification", value: "85/100", icon: ShieldCheck, color: "green" },
    { label: "Portfolio Beta", value: "0.92", icon: Activity, color: "green" },
    { label: "Sharpe Ratio", value: "1.24", icon: TrendingUp, color: "green" },
  ];

  const fundMetrics = [
    { name: "HDFC Mid-Cap", xirr: 24.5, risk: "Moderate", sharpe: 1.2 },
    { name: "Mirae Asset Large Cap", xirr: 18.2, risk: "Low", sharpe: 0.9 },
    { name: "Quant Small Cap", xirr: 32.4, risk: "High", sharpe: 1.8 },
    { name: "Parag Parikh Flexi", xirr: 22.1, risk: "Low", sharpe: 1.5 },
    { name: "SBI Small Cap", xirr: 28.6, risk: "Moderate", sharpe: 1.4 },
  ];

  return (
    <ReportLayout>
      <main className="p-8 space-y-10 bg-[#f8fafc] min-h-screen">
        <ReportHeader 
          title="Risk & Metrics" 
          subtitle="Deep-dive into risk-adjusted performance indicators" 
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {kpis.map((kpi, i) => (
            <KPICard key={i} {...kpi} delay={i * 0.1} />
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
           <AnalysisSection title="Risk Profile Radar" icon={Activity}>
              <div className="h-[300px] flex items-center justify-center relative">
                 {/* Simplified Radar Graphic */}
                 <svg viewBox="0 0 100 100" className="w-full h-full max-w-[250px]">
                    <circle cx="50" cy="50" r="45" fill="none" stroke="#f1f5f9" strokeWidth="0.5" />
                    <circle cx="50" cy="50" r="30" fill="none" stroke="#f1f5f9" strokeWidth="0.5" />
                    <circle cx="50" cy="50" r="15" fill="none" stroke="#f1f5f9" strokeWidth="0.5" />
                    <m.path 
                       initial={{ opacity: 0, scale: 0.8 }}
                       animate={{ opacity: 0.3, scale: 1 }}
                       d="M50 10 L85 30 L80 70 L50 90 L20 70 L15 30 Z" 
                       fill="url(#radarGrad)"
                    />
                    <defs>
                       <linearGradient id="radarGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#22d3ee" />
                          <stop offset="100%" stopColor="#1d4ed8" />
                       </linearGradient>
                    </defs>
                 </svg>
                 <div className="absolute top-0 text-[9px] font-black uppercase text-gray-400">Returns</div>
                 <div className="absolute bottom-0 text-[9px] font-black uppercase text-gray-400">Risk</div>
                 <div className="absolute right-0 text-[9px] font-black uppercase text-gray-400">Stability</div>
                 <div className="absolute left-0 text-[9px] font-black uppercase text-gray-400">Quality</div>
              </div>
           </AnalysisSection>

           <AnalysisSection title="Fund Risk/Return Scatter" icon={ScatterChart}>
              <div className="space-y-6">
                 {fundMetrics.map((fund, i) => (
                   <div key={i} className="flex items-center justify-between group">
                      <div>
                         <div className="text-sm font-black text-gray-900 mb-0.5">{fund.name}</div>
                         <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Sharpe: {fund.sharpe}</div>
                      </div>
                      <div className="flex items-center gap-4">
                         <div className="text-right">
                            <div className="text-sm font-black text-primary font-sans">{fund.xirr}%</div>
                            <div className={`text-[9px] font-black uppercase tracking-widest ${fund.risk === 'High' ? 'text-red-500' : fund.risk === 'Moderate' ? 'text-orange-500' : 'text-green-500'}`}>{fund.risk} Risk</div>
                         </div>
                         <div className="w-1.5 h-1.5 rounded-full bg-primary/20 group-hover:scale-150 transition-transform" />
                      </div>
                   </div>
                 ))}
              </div>
           </AnalysisSection>
        </div>
      </main>
    </ReportLayout>
  );
};

export default RiskMetricsPage;
