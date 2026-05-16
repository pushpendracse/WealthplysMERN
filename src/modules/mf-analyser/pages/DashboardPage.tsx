"use client";

import React from 'react';
import ReportLayout from "../components/ReportLayout";
import { 
  FileText, 
  TrendingUp, 
  Activity, 
  Download,
  AlertCircle,
  Lightbulb,
  CheckCircle2,
  Info
} from "lucide-react";
import { m } from "framer-motion";
import { Button } from "@/components/ui/button";

const DashboardPage = () => {
  const holdings = [
    { name: "Nippon India ELSS Tax Saver Fund -", type: "Equity", value: "₹7.77 L", percentage: "15.7%", change: "+29.6%", color: "bg-red-500" },
    { name: "Quant Small Cap Fund -", type: "Equity", value: "₹6.17 L", percentage: "12.5%", change: "+24.9%", color: "bg-red-500" },
    { name: "Kotak Emerging Equity Fund -", type: "Equity", value: "₹4.73 L", percentage: "9.5%", change: "+21.4%", color: "bg-red-500" },
    { name: "DSP Nifty 50 Index Fund -", type: "Equity", value: "₹4.37 L", percentage: "8.8%", change: "+12.9%", color: "bg-red-500" },
    { name: "HDFC Short Term Debt Fund -", type: "Debt", value: "₹4.34 L", percentage: "8.8%", change: "+27.7%", color: "bg-blue-500" },
    { name: "ICICI Prudential Balanced Advantage Fund -", type: "Hybrid", value: "₹4.18 L", percentage: "8.4%", change: "+26.8%", color: "bg-green-500" },
    { name: "Aditya Birla Sun Life Liquid Fund -", type: "Debt", value: "₹3.97 L", percentage: "8.0%", change: "+19.2%", color: "bg-blue-500" },
    { name: "Parag Parikh Flexi Cap Fund -", type: "Equity", value: "₹3.38 L", percentage: "6.8%", change: "+37.2%", color: "bg-red-500" },
  ];

  const insights = [
    { 
      title: "1 Fund Need Immediate Attention", 
      desc: "1 fund is significantly underperforming and should be considered for exit or switching.", 
      type: "critical", 
      icon: AlertCircle,
      bgColor: "bg-red-50",
      iconColor: "text-red-500",
      borderColor: "border-red-100"
    },
    { 
      title: "Switch to Direct Plans", 
      desc: "1 fund is in Regular plan. Switching to Direct could save ~₹3K annually in expense ratios.", 
      type: "action", 
      icon: Lightbulb,
      bgColor: "bg-green-50",
      iconColor: "text-green-500",
      borderColor: "border-green-100"
    },
    { 
      title: "Top Performers Identified", 
      desc: "7 funds are delivering excellent risk-adjusted returns. Consider increasing SIP allocation to these funds.", 
      type: "positive", 
      icon: Lightbulb,
      bgColor: "bg-green-50",
      iconColor: "text-green-500",
      borderColor: "border-green-100"
    },
    { 
      title: "Portfolio Summary", 
      desc: "Your portfolio has 12 funds across 11 AMCs. Asset mix: 75% Equity, 17% Debt, 8% Others.", 
      type: "info", 
      icon: Info,
      bgColor: "bg-blue-50",
      iconColor: "text-blue-500",
      borderColor: "border-blue-100"
    }
  ];

  return (
    <ReportLayout>
      <main className="p-8 space-y-8">
        {/* Header Section */}
        <div className="flex justify-between items-end">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
            <p className="text-sm text-gray-500 mt-1 uppercase tracking-wider font-medium font-sans">12 Funds • 11 AMCs • 12 Folios</p>
          </div>
          <div className="flex items-center gap-6">
            <div className="text-sm font-bold text-gray-700">Risk: 6.4/10</div>
            <Button variant="outline" className="gap-2 border-gray-200 rounded-lg h-10 px-4">
              <Download className="w-4 h-4" /> PDF Report
            </Button>
          </div>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {[
            { label: "Total Invested", value: "₹39.50 L", icon: FileText, color: "red" },
            { label: "Current Value", value: "₹49.52 L", icon: TrendingUp, color: "green" },
            { label: "Total Returns", value: "₹10.02 L", sub: "+25.37%", icon: Activity, color: "green" },
            { label: "XIRR", value: "20.94%", icon: TrendingUp, color: "green" },
          ].map((card, i) => (
            <m.div 
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-5 lg:p-6 rounded-2xl shadow-sm border border-white"
            >
              <div className="flex justify-between items-start mb-4">
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.15em]">{card.label}</span>
                <div className={`p-1.5 rounded-lg bg-${card.color}-50`}>
                  <card.icon className={`w-3.5 h-3.5 text-${card.color}-500`} />
                </div>
              </div>
              <div className="text-xl lg:text-2xl font-black text-gray-900 font-sans tracking-tight">{card.value}</div>
              {card.sub && <div className="text-[11px] font-bold text-green-500 mt-1">{card.sub}</div>}
            </m.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Main Left Section */}
          <div className="lg:col-span-8 space-y-6">
            {/* Asset Breakdown Chart Card */}
            <div className="bg-white rounded-3xl p-6 lg:p-8 shadow-sm border border-gray-100">
               <h3 className="flex items-center gap-2 text-sm font-bold text-gray-800 mb-6 lg:mb-8 uppercase tracking-wider">
                 <Activity className="w-4 h-4 text-red-500" /> Asset Category Breakdown
               </h3>
               
               <div className="flex flex-col items-center justify-center py-4 lg:py-8">
                  {/* Custom Donut Chart SVG */}
                  <div className="relative w-40 h-40 lg:w-52 lg:h-52">
                    <svg viewBox="0 0 100 100" className="w-full h-full transform -rotate-90">
                      {/* Hybrid (Green) - 8% */}
                      <circle cx="50" cy="50" r="40" fill="transparent" stroke="#22c55e" strokeWidth="15" strokeDasharray="5 246.3" strokeDashoffset="0" />
                      {/* Debt (Blue) - 17% */}
                      <circle cx="50" cy="50" r="40" fill="transparent" stroke="#3b82f6" strokeWidth="15" strokeDasharray="42.7 208.6" strokeDashoffset="-5" />
                      {/* Equity (Indigo) - 75% */}
                      <circle cx="50" cy="50" r="40" fill="transparent" stroke="#6366f1" strokeWidth="15" strokeDasharray="188.4 62.9" strokeDashoffset="-47.7" />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center flex-col">
                       <span className="text-2xl lg:text-3xl font-black text-gray-900 font-sans">75%</span>
                       <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Equity</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap justify-center gap-4 lg:gap-6 mt-8 lg:mt-12">
                    <div className="flex items-center gap-2">
                       <div className="w-3 h-3 rounded bg-indigo-500" />
                       <span className="text-xs font-bold text-gray-600">Equity</span>
                    </div>
                    <div className="flex items-center gap-2">
                       <div className="w-3 h-3 rounded bg-blue-500" />
                       <span className="text-xs font-bold text-gray-600">Debt</span>
                    </div>
                    <div className="flex items-center gap-2">
                       <div className="w-3 h-3 rounded bg-green-500" />
                       <span className="text-xs font-bold text-gray-600">Hybrid</span>
                    </div>
                  </div>
               </div>
            </div>

            {/* Top Holdings Section */}
            <div className="bg-white rounded-3xl p-6 lg:p-8 shadow-sm border border-gray-100">
               <h3 className="flex items-center gap-2 text-sm font-bold text-gray-800 mb-6 lg:mb-8 uppercase tracking-wider">
                 <FileText className="w-4 h-4 text-red-500" /> Top Holdings by Value
               </h3>
               
               <div className="space-y-6">
                 {holdings.map((fund, i) => (
                   <div key={i} className="space-y-2">
                      <div className="flex justify-between items-end gap-4">
                        <div className="min-w-0 flex-1">
                          <h4 className="text-sm font-bold text-gray-900 truncate">{fund.name}</h4>
                          <div className="flex gap-2 items-center mt-1">
                             <span className="px-1.5 py-0.5 bg-gray-100 rounded text-[9px] font-bold text-gray-500">{fund.type}</span>
                             <span className="text-[11px] font-bold text-gray-400 font-sans">{fund.value}</span>
                          </div>
                        </div>
                        <div className="text-right shrink-0">
                           <div className="text-sm font-black text-gray-900 font-sans">{fund.percentage}</div>
                           <div className="text-[10px] font-bold text-green-500 font-sans">{fund.change}</div>
                        </div>
                      </div>
                      <div className="h-1.5 w-full bg-gray-50 rounded-full overflow-hidden">
                        <m.div 
                          initial={{ width: 0 }}
                          animate={{ width: fund.percentage }}
                          transition={{ duration: 1, delay: i * 0.1 }}
                          className={`h-full ${fund.color}`}
                        />
                      </div>
                   </div>
                 ))}
               </div>
            </div>
          </div>

          {/* Right Sidebar Section (Insights) */}
          <div className="lg:col-span-4 space-y-4 lg:sticky lg:top-24 h-fit">
             <div className="flex justify-between items-center mb-6 px-2">
                <h3 className="flex items-center gap-2 text-sm font-bold text-gray-900">
                  <Sparkles className="w-4 h-4 text-red-500" /> Portfolio Insights
                </h3>
                <span className="w-5 h-5 bg-gray-100 rounded-lg flex items-center justify-center text-[10px] font-bold text-gray-500">4</span>
             </div>

             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
               {insights.map((insight, i) => (
                 <m.div 
                   key={i}
                   initial={{ opacity: 0, x: 20 }}
                   animate={{ opacity: 1, x: 0 }}
                   transition={{ delay: i * 0.1 }}
                   className={`${insight.bgColor} ${insight.borderColor} border rounded-2xl p-5 space-y-3 relative overflow-hidden h-full flex flex-col justify-between`}
                 >
                   <div>
                     <div className="flex items-center gap-2 mb-2">
                        <insight.icon className={`w-4 h-4 ${insight.iconColor}`} />
                        <h4 className="text-[13px] font-bold text-gray-900">{insight.title}</h4>
                     </div>
                     <p className="text-[11px] text-gray-600 font-medium leading-relaxed">
                       {insight.desc}
                     </p>
                   </div>
                   {insight.type !== 'info' && (
                     <button className="w-fit text-[10px] font-black text-gray-800 uppercase tracking-widest border border-gray-200 bg-white rounded px-3 py-1 hover:bg-gray-50 mt-2">
                       Actionable
                     </button>
                   )}
                 </m.div>
               ))}
             </div>
          </div>
        </div>
      </main>
    </ReportLayout>
  );
};

const Sparkles = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/><path d="M5 3v4"/><path d="M19 17v4"/><path d="M3 5h4"/><path d="M17 19h4"/></svg>
);

export default DashboardPage;
