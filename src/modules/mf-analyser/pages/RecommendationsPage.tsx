"use client";

import React from 'react';
import ReportLayout from "../components/ReportLayout";
import { 
  TrendingUp, 
  Activity,
  FileText,
  ShieldCheck,
  Zap,
  ArrowRight,
  Sparkles
} from "lucide-react";
import { m } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ReportHeader, KPICard, AnalysisSection, InsightBox } from "../components/shared/ReportComponents";

const RecommendationsPage = () => {
  const kpiData = [
    { label: "Total Invested", value: "₹39.50 L", icon: FileText, color: "red" },
    { label: "Current Value", value: "₹49.52 L", icon: TrendingUp, color: "green" },
    { label: "Total Returns", value: "₹10.02 L", sub: "+25.37%", icon: Activity, color: "green" },
    { label: "XIRR", value: "20.94%", icon: ShieldCheck, color: "green" },
  ];

  const suggestedActions = [
    { type: "BUY", fund: "HDFC Mid-Cap Opportunities Fund", amount: "₹5,000", frequency: "Monthly SIP", reason: "Strategic underweight in Mid-cap" },
    { type: "SWITCH", fund: "Axis Bluechip (Regular) to Direct", amount: "Full Portfolio", frequency: "One-time", reason: "Cost optimization (~0.8% savings)" },
    { type: "REBALANCE", fund: "Parag Parikh Flexi Cap", amount: "₹2.50 L", frequency: "One-time", reason: "LTCG harvesting limit" },
    { type: "SELL", fund: "Quant Small Cap Fund", amount: "20% Holdings", frequency: "One-time", reason: "Profit booking at cycle peak" },
  ];

  return (
    <ReportLayout>
      <main className="p-8 space-y-10 bg-[#f8fafc] min-h-screen">
        <ReportHeader 
          title="Recommendations" 
          subtitle="Data-driven strategies for portfolio optimization" 
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {kpiData.map((kpi, i) => (
            <KPICard key={i} {...kpi} delay={i * 0.1} />
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <AnalysisSection 
            title="Suggested Actions" 
            icon={Zap} 
            badge={suggestedActions.length}
            className="lg:col-span-3"
          >
            <div className="space-y-4">
              {suggestedActions.map((action, i) => (
                <m.div 
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + (i * 0.1) }}
                  className="flex items-center justify-between p-5 rounded-[2rem] border border-gray-50 bg-gray-50/30 hover:bg-white hover:shadow-xl hover:border-primary/5 transition-all group cursor-pointer"
                >
                  <div className="flex items-center gap-5">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center font-black text-[10px] tracking-widest ${
                      action.type === 'BUY' ? 'bg-green-500 text-white' : 
                      action.type === 'SELL' ? 'bg-red-500 text-white' : 
                      'bg-primary text-white'
                    }`}>
                      {action.type}
                    </div>
                    <div>
                      <div className="text-sm font-black text-gray-900 mb-0.5">{action.fund}</div>
                      <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{action.reason}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-black text-gray-900">{action.amount}</div>
                    <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{action.frequency}</div>
                  </div>
                </m.div>
              ))}
            </div>
            <Button className="w-full mt-8 bg-primary hover:bg-primary/90 text-white rounded-[1.5rem] h-14 font-black uppercase tracking-[0.2em] text-[11px] shadow-lg shadow-primary/20 gap-3">
              Execute All Recommendations <ArrowRight className="w-4 h-4" />
            </Button>
          </AnalysisSection>

          <div className="lg:col-span-2 space-y-6">
            <AnalysisSection title="AI Portfolio Insights" icon={Sparkles}>
              <div className="space-y-4">
                <InsightBox 
                  title="Tax Efficiency Alert" 
                  desc="Utilizing your ₹1.25L LTCG tax-free limit could save you ₹12,500 this financial year." 
                  type="actionable"
                  actionable
                />
                <InsightBox 
                  title="Concentration Risk" 
                  desc="Your portfolio has 32% exposure to Financial Services. Diversification is recommended." 
                  type="critical"
                  actionable
                />
                <InsightBox 
                  title="Performance Outlook" 
                  desc="Recent mid-cap rally suggests a tactical shift towards large-cap index for stability." 
                  type="info"
                />
              </div>
            </AnalysisSection>

            <m.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 }}
              className="bg-gray-900 rounded-[2.5rem] p-8 text-white relative overflow-hidden shadow-2xl"
            >
              <div className="relative z-10">
                <h4 className="text-lg font-black uppercase tracking-widest mb-2 flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-primary" /> Fiduciary Protection
                </h4>
                <p className="text-[11px] font-bold text-gray-400 leading-relaxed uppercase tracking-wide">
                  Our recommendations are strictly based on unbiased data algorithms. No hidden commissions, no conflict of interest.
                </p>
              </div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl -mr-16 -mt-16" />
            </m.div>
          </div>
        </div>
      </main>
    </ReportLayout>
  );
};

export default RecommendationsPage;
