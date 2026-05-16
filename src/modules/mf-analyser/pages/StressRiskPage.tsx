"use client";

import React from 'react';
import ReportLayout from "../components/ReportLayout";
import { 
  TrendingUp, 
  Download,
  Activity,
  FileText,
  ShieldCheck,
  AlertTriangle,
  Zap,
  ArrowDownCircle,
  Percent,
  Layers,
  ChevronRight
} from "lucide-react";
import { m } from "framer-motion";
import { Button } from "@/components/ui/button";

const StressRiskPage = () => {
  const kpis = [
    { label: "Total Invested", value: "₹39.50 L", icon: FileText, color: "red" },
    { label: "Current Value", value: "₹49.52 L", icon: TrendingUp, color: "green" },
    { label: "Total Returns", value: "₹10.02 L", sub: "+25.37%", icon: Activity, color: "green" },
    { label: "XIRR", value: "20.94%", icon: ShieldCheck, color: "green" },
  ];

  const riskKpis = [
    { label: "Daily VaR (95%)", value: "₹70K", icon: Zap, color: "text-orange-500", bg: "bg-orange-50" },
    { label: "Monthly VaR (95%)", value: "₹2.7L", icon: AlertTriangle, color: "text-amber-500", bg: "bg-amber-50" },
    { label: "Annual VaR (95%)", value: "₹4.0L", icon: ShieldCheck, color: "text-red-500", bg: "bg-red-50" },
    { label: "Max Drawdown Est.", value: "-24.85%", icon: ArrowDownCircle, color: "text-rose-500", bg: "bg-rose-50" },
  ];

  const varSummary = [
    { label: "Daily VaR (95%)", desc: "Max expected 1-day loss", value: "₹70K" },
    { label: "Daily VaR (99%)", desc: "Extreme 1-day loss", value: "₹1.0L" },
    { label: "Daily ES (95%)", desc: "Expected Shortfall (avg loss beyond VaR)", value: "₹89K" },
    { label: "Monthly VaR (95%)", desc: "Max expected 1-month loss", value: "₹2.7L" },
    { label: "Monthly VaR (99%)", desc: "Extreme 1-month loss", value: "₹4.1L" },
    { label: "Monthly ES (95%)", desc: "Expected Shortfall monthly", value: "₹3.6L" },
    { label: "Annual VaR (95%)", desc: "Max expected Annual loss", value: "₹4.0L" },
    { label: "Annual VaR (99%)", desc: "Extreme annual loss", value: "₹8.9L" },
  ];

  const stressScenarios = [
    { label: "Interest Rate Hike (200bps)", desc: "RBI raises repo rate by 200 basis points", impact: "-7.24%", val: "-₹3.58 L", status: "low" },
    { label: "Currency Depreciation (10%)", desc: "INR depreciates 10% against USD", impact: "-4.37%", val: "-₹2.16 L", status: "low" },
    { label: "Global Recession", desc: "Major global economic slowdown", impact: "-20.92%", val: "-₹10.36 L", status: "high" },
    { label: "Credit Event", desc: "Major corporate default affecting credit markets", impact: "-9.48%", val: "-₹4.69 L", status: "medium" },
    { label: "FII Outflow (Large)", desc: "Significant foreign institutional investor selling", impact: "-13.02%", val: "-₹6.45 L", status: "medium" },
    { label: "Oil Price Shock (+50%)", desc: "Crude oil prices surge by 50%", impact: "-10.43%", val: "-₹5.16 L", status: "medium" },
  ];

  const overlaps = [
    { label: "Mid Cap", perc: 58, funds: "HDFC Mid-Cap Opportunities Fund • Kotak Emerging Equity Fund", count: 2 },
    { label: "Large Cap", perc: 70, funds: "Axis Bluechip Fund • Mirae Asset Large Cap Fund", count: 2 },
    { label: "Small Cap", perc: 30, funds: "SBI Small Cap Fund • Quant Small Cap Fund", count: 2 },
  ];

  return (
    <ReportLayout>
      <main className="p-8 space-y-8 bg-[#f1f3f6] min-h-screen">
        {/* Header */}
        <div className="flex justify-between items-end">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Stress & Risk</h1>
            <p className="text-sm text-gray-500 mt-1 uppercase tracking-wider font-medium font-sans">12 Funds • 11 AMCs • 12 Folios</p>
          </div>
          <div className="flex items-center gap-4">
             <div className="bg-white px-4 py-2 rounded-xl border border-gray-200 text-sm font-bold text-gray-700 shadow-sm flex items-center gap-2">
               Risk: 6.4/10
            </div>
            <Button variant="outline" className="gap-2 border-gray-200 rounded-xl bg-white h-10 px-4 shadow-sm hover:bg-gray-50 transition-all">
              <Download className="w-4 h-4" /> PDF Report
            </Button>
          </div>
        </div>

        {/* Primary KPI Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {kpis.map((kpi, i) => (
            <m.div 
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-6 rounded-2xl shadow-sm border border-white"
            >
              <div className="flex justify-between items-start mb-4">
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{kpi.label}</span>
                <div className={`p-1.5 rounded-lg ${kpi.color === 'red' ? 'bg-red-50' : 'bg-green-50'}`}>
                  <kpi.icon className={`w-3.5 h-3.5 ${kpi.color === 'red' ? 'text-red-500' : 'text-green-500'}`} />
                </div>
              </div>
              <div className="text-2xl font-black text-gray-900 font-sans tracking-tight">{kpi.value}</div>
              {kpi.sub && <div className="text-[11px] font-bold text-green-500 mt-1">{kpi.sub}</div>}
            </m.div>
          ))}
        </div>

        {/* Risk Metrics Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
           {riskKpis.map((kpi, i) => (
             <m.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + (i * 0.1) }}
                className="bg-white p-6 rounded-2xl shadow-sm border border-white"
             >
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-2">
                     <div className={`w-1.5 h-1.5 rounded-full ${kpi.bg.replace('bg-', 'bg-').replace('-50', '-400')}`} />
                     <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{kpi.label}</span>
                  </div>
                </div>
                <div className={`text-2xl font-black font-sans ${kpi.color}`}>{kpi.value}</div>
             </m.div>
           ))}
        </div>

        {/* VaR Summary and Risk Profile Row */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
           <m.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="lg:col-span-3 bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden"
           >
              <div className="p-6 border-b border-gray-50 flex items-center gap-2">
                 <ShieldCheck className="w-4 h-4 text-red-500" />
                 <h3 className="text-sm font-bold text-gray-900 uppercase tracking-widest">Value at Risk Summary</h3>
              </div>
              <div className="p-8 space-y-4">
                 {varSummary.map((item, i) => (
                   <div key={i} className="flex items-center justify-between group py-1">
                      <div>
                         <div className="text-[11px] font-bold text-gray-900">{item.label}</div>
                         <div className="text-[9px] font-bold text-gray-400 uppercase tracking-wide">{item.desc}</div>
                      </div>
                      <div className="text-sm font-black text-red-500 font-sans group-hover:scale-110 transition-transform">{item.value}</div>
                   </div>
                 ))}
              </div>
           </m.div>

           <m.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="lg:col-span-2 bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden"
           >
              <div className="p-6 border-b border-gray-50 flex items-center gap-2">
                 <Activity className="w-4 h-4 text-red-500" />
                 <h3 className="text-sm font-bold text-gray-900 uppercase tracking-widest">Portfolio Risk Profile</h3>
              </div>
              <div className="p-8 space-y-8">
                 {[
                   { label: "Portfolio Volatility", val: "14.28%", status: "medium" },
                   { label: "Max Drawdown Est.", val: "-24.85%", status: "medium" },
                   { label: "Risk Score", val: "6.4/10", status: "medium" },
                   { label: "Diversification", val: "6.5/10", status: "medium" },
                 ].map((stat, i) => (
                   <div key={i} className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                         <div className="text-[11px] font-bold text-gray-500 uppercase tracking-wider">{stat.label}</div>
                         <span className="px-2 py-0.5 rounded bg-red-500 text-white text-[9px] font-black uppercase">{stat.status}</span>
                      </div>
                      <div className="text-base font-black text-gray-900 font-sans">{stat.val}</div>
                   </div>
                 ))}
              </div>
           </m.div>
        </div>

        {/* Stress Test Results */}
        <section className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
           <div className="p-6 border-b border-gray-50 flex items-center gap-2">
              <Zap className="w-4 h-4 text-red-500" />
              <h3 className="text-sm font-bold text-gray-900 uppercase tracking-widest">Stress Test Results</h3>
           </div>
           <div className="p-8">
              {/* Simplified Dot Chart Area */}
              <div className="relative h-24 border-l border-b border-gray-200 mb-12 ml-10 mr-4">
                 <div className="absolute -left-10 top-1/2 -translate-y-1/2 text-[9px] font-bold text-gray-400 uppercase -rotate-90">Impact</div>
                 <div className="flex justify-between h-full items-end px-10">
                    {[20, 10, 5, 2, 0].map(p => (
                      <div key={p} className="absolute left-0 w-full h-px bg-gray-50" style={{ bottom: `${p * 4}px` }} />
                    ))}
                    {stressScenarios.map((s, i) => (
                      <m.div 
                        key={i}
                        initial={{ height: 0 }}
                        animate={{ height: `${Math.abs(parseFloat(s.impact)) * 4}px` }}
                        className={`w-2 rounded-full ${s.status === 'high' ? 'bg-red-500' : 'bg-orange-400'}`}
                      />
                    ))}
                 </div>
              </div>

              <div className="space-y-4">
                 {stressScenarios.map((scenario, i) => (
                   <m.div 
                     key={i}
                     initial={{ opacity: 0, y: 10 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ delay: 0.1 * i }}
                     className={`p-4 rounded-2xl flex items-center justify-between group ${scenario.status === 'high' ? 'bg-red-50/50 border border-red-50' : scenario.status === 'medium' ? 'bg-orange-50/50 border border-orange-50' : 'bg-green-50/50 border border-green-50'}`}
                   >
                      <div>
                         <div className="flex items-center gap-2">
                            <span className="text-sm font-bold text-gray-900">{scenario.label}</span>
                            <span className={`px-2 py-0.5 rounded text-[8px] font-black uppercase ${scenario.status === 'high' ? 'bg-red-500 text-white' : scenario.status === 'medium' ? 'bg-orange-500 text-white' : 'bg-green-500 text-white'}`}>{scenario.status}</span>
                         </div>
                         <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-1">{scenario.desc}</p>
                      </div>
                      <div className="text-right">
                         <div className={`text-sm font-black font-sans ${scenario.status === 'high' ? 'text-red-500' : scenario.status === 'medium' ? 'text-orange-500' : 'text-green-600'}`}>{scenario.impact}</div>
                         <div className="text-[10px] font-bold text-gray-400 font-sans">{scenario.val}</div>
                      </div>
                   </m.div>
                 ))}
              </div>
           </div>
        </section>

        {/* Portfolio Overlap Analysis */}
        <section className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
           <div className="p-6 border-b border-gray-50 flex items-center justify-between">
              <div className="flex items-center gap-2">
                 <Layers className="w-4 h-4 text-red-500" />
                 <h3 className="text-sm font-bold text-gray-900 uppercase tracking-widest">Portfolio Overlap Analysis</h3>
              </div>
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Overall: Moderate</span>
           </div>
           <div className="p-8 space-y-8">
              {overlaps.map((overlap, i) => (
                <div key={i} className="space-y-3">
                   <div className="flex justify-between items-end">
                      <div className="flex items-center gap-3">
                         <div className="text-xs font-bold text-gray-900">{overlap.label}</div>
                         <span className="px-2 py-0.5 rounded bg-red-500 text-white text-[9px] font-black uppercase">{overlap.perc}% overlap</span>
                      </div>
                      <div className="text-[10px] font-bold text-gray-400">{overlap.count} funds</div>
                   </div>
                   <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
                      <m.div 
                        initial={{ width: 0 }}
                        animate={{ width: `${overlap.perc}%` }}
                        className="h-full bg-red-500"
                      />
                   </div>
                   <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wide italic">{overlap.funds}</div>
                </div>
              ))}

              <div className="mt-8 bg-amber-50 p-4 rounded-xl border border-amber-100">
                 <p className="text-[10px] font-bold text-amber-700 uppercase tracking-wide flex items-center gap-2">
                    <AlertTriangle className="w-3.5 h-3.5" /> 1 category group have high overlap - consider consolidating to reduce redundancy.
                 </p>
              </div>
           </div>
        </section>
      </main>
    </ReportLayout>
  );
};

export default StressRiskPage;
