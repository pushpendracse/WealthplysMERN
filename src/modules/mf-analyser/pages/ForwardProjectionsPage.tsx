"use client";

import React, { useState } from 'react';
import ReportLayout from "../components/ReportLayout";
import { 
  TrendingUp, 
  Download,
  Activity,
  FileText,
  ShieldCheck,
  ChevronRight,
  TrendingDown,
  LineChart as LineChartIcon,
  Zap,
  Info
} from "lucide-react";
import { m } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const ForwardProjectionsPage = () => {
  const [activeTab, setActiveTab] = useState("monte-carlo");

  const kpis = [
    { label: "Total Invested", value: "₹39.50 L", icon: FileText, color: "red" },
    { label: "Current Value", value: "₹49.52 L", icon: TrendingUp, color: "green" },
    { label: "Total Returns", value: "₹10.02 L", sub: "+25.37%", icon: Activity, color: "green" },
    { label: "XIRR", value: "20.94%", icon: ShieldCheck, color: "green" },
  ];

  const projectionParams = [
    { label: "Expected Return", value: "15.3%", desc: "Weighted portfolio return", icon: LineChartIcon, color: "text-blue-500", bg: "bg-blue-50" },
    { label: "Portfolio Volatility", value: "14.3%", desc: "Annualized std deviation", icon: Activity, color: "text-orange-500", bg: "bg-orange-50" },
    { label: "Current Value", value: "₹49.52 L", desc: "Starting point for projections", icon: Zap, color: "text-green-500", bg: "bg-green-50" },
  ];

  const projections = [
    {
      title: "1-Year Projection",
      data: [
        { label: "Best Case (95th)", val: "₹72.36 L", perc: "+46.1%", trend: "up" },
        { label: "Optimistic (75th)", val: "₹62.95 L", perc: "+27.1%", trend: "up" },
        { label: "Expected (50th)", val: "₹57.84 L", perc: "+16.8%", trend: "up" },
        { label: "Conservative (25th)", val: "₹52.87 L", perc: "+6.8%", trend: "up" },
        { label: "Worst Case (5th)", val: "₹45.48 L", perc: "-8.2%", trend: "down" },
      ]
    },
    {
      title: "3-Year Projection",
      data: [
        { label: "Best Case (95th)", val: "₹1.13 Cr", perc: "+128.5%", trend: "up" },
        { label: "Optimistic (75th)", val: "₹88.31 L", perc: "+78.3%", trend: "up" },
        { label: "Expected (50th)", val: "₹75.02 L", perc: "+51.5%", trend: "up" },
        { label: "Conservative (25th)", val: "₹64.05 L", perc: "+29.3%", trend: "up" },
        { label: "Worst Case (5th)", val: "₹50.15 L", perc: "+1.3%", trend: "up" },
      ]
    },
    {
      title: "5-Year Projection",
      data: [
        { label: "Best Case (95th)", val: "₹1.71 Cr", perc: "+245.0%", trend: "up" },
        { label: "Optimistic (75th)", val: "₹1.24 Cr", perc: "+150.8%", trend: "up" },
        { label: "Expected (50th)", val: "₹1.03 Cr", perc: "+108.7%", trend: "up" },
        { label: "Conservative (25th)", val: "₹83.78 L", perc: "+69.2%", trend: "up" },
        { label: "Worst Case (5th)", val: "₹60.51 L", perc: "+22.2%", trend: "up" },
      ]
    },
    {
      title: "10-Year Projection",
      data: [
        { label: "Best Case (95th)", val: "₹4.24 Cr", perc: "+756.3%", trend: "up" },
        { label: "Optimistic (75th)", val: "₹2.86 Cr", perc: "+478.0%", trend: "up" },
        { label: "Expected (50th)", val: "₹2.10 Cr", perc: "+323.3%", trend: "up" },
        { label: "Conservative (25th)", val: "₹1.56 Cr", perc: "+214.9%", trend: "up" },
        { label: "Worst Case (5th)", val: "₹1.02 Cr", perc: "+105.0%", trend: "up" },
      ]
    }
  ];

  return (
    <ReportLayout>
      <main className="p-8 space-y-8 bg-[#f1f3f6] min-h-screen">
        {/* Header */}
        <div className="flex justify-between items-end">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Forward Projections</h1>
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

        {/* Projection Params */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
           {projectionParams.map((param, i) => (
             <m.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + (i * 0.1) }}
                className="bg-white p-6 rounded-2xl shadow-sm border border-white flex items-center gap-5"
             >
                <div className={`w-12 h-12 rounded-2xl ${param.bg} flex items-center justify-center`}>
                   <param.icon className={`w-6 h-6 ${param.color}`} />
                </div>
                <div>
                   <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{param.label}</div>
                   <div className="text-xl font-black text-gray-900 font-sans">{param.value}</div>
                   <p className="text-[10px] font-bold text-gray-400 mt-0.5">{param.desc}</p>
                </div>
             </m.div>
           ))}
        </div>

        {/* Tabs and Chart Area */}
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
           <div className="bg-gray-50/50 p-1">
             <Tabs defaultValue="monte-carlo" className="w-full">
               <TabsList className="bg-transparent border-none p-2 gap-2">
                 <TabsTrigger value="monte-carlo" className="rounded-xl px-6 py-2.5 font-bold text-xs uppercase tracking-wider data-[state=active]:bg-white data-[state=active]:shadow-sm">Monte Carlo</TabsTrigger>
                 <TabsTrigger value="scenarios" className="rounded-xl px-6 py-2.5 font-bold text-xs uppercase tracking-wider data-[state=active]:bg-white data-[state=active]:shadow-sm">Scenarios</TabsTrigger>
                 <TabsTrigger value="rolling" className="rounded-xl px-6 py-2.5 font-bold text-xs uppercase tracking-wider data-[state=active]:bg-white data-[state=active]:shadow-sm">Rolling Projections</TabsTrigger>
               </TabsList>
             </Tabs>
           </div>

           <div className="p-8">
              <div className="flex items-center gap-2 mb-8 text-sm font-bold text-gray-800 uppercase tracking-wider">
                 <Zap className="w-4 h-4 text-red-500" /> Monte Carlo Return Distribution (1000 simulations)
              </div>
              
              <div className="relative h-[350px] border-l border-b border-gray-200 ml-12 mb-12">
                 {/* Legend */}
                 <div className="absolute top-0 right-0 flex gap-6 text-[10px] font-bold text-gray-500 uppercase tracking-widest">
                    <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-green-500" /> 95th %ile</div>
                    <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-emerald-400" /> 75th %ile</div>
                    <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-orange-400" /> 25th %ile</div>
                    <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-red-500" /> 5th %ile</div>
                 </div>

                 {/* SVG Chart */}
                 <svg viewBox="0 0 1000 350" className="w-full h-full preserve-3d">
                    {/* Grid lines */}
                    <line x1="0" y1="175" x2="1000" y2="175" stroke="#f1f3f6" strokeWidth="1" strokeDasharray="5,5" />
                    <line x1="0" y1="87" x2="1000" y2="87" stroke="#f1f3f6" strokeWidth="1" strokeDasharray="5,5" />
                    <line x1="0" y1="262" x2="1000" y2="262" stroke="#f1f3f6" strokeWidth="1" strokeDasharray="5,5" />

                    {/* 95th Percentile Line */}
                    <m.path 
                       initial={{ pathLength: 0 }}
                       animate={{ pathLength: 1 }}
                       transition={{ duration: 2, ease: "easeInOut" }}
                       d="M 0 320 Q 250 280, 500 150 T 1000 20" 
                       fill="none" stroke="#22c55e" strokeWidth="2" 
                    />
                    {/* 75th Percentile Line */}
                    <m.path 
                       initial={{ pathLength: 0 }}
                       animate={{ pathLength: 1 }}
                       transition={{ duration: 2, delay: 0.2, ease: "easeInOut" }}
                       d="M 0 320 Q 250 290, 500 200 T 1000 80" 
                       fill="none" stroke="#34d399" strokeWidth="2" 
                    />
                    {/* 25th Percentile Line */}
                    <m.path 
                       initial={{ pathLength: 0 }}
                       animate={{ pathLength: 1 }}
                       transition={{ duration: 2, delay: 0.4, ease: "easeInOut" }}
                       d="M 0 320 Q 250 310, 500 280 T 1000 220" 
                       fill="none" stroke="#fb923c" strokeWidth="2" 
                    />
                    {/* 5th Percentile Line */}
                    <m.path 
                       initial={{ pathLength: 0 }}
                       animate={{ pathLength: 1 }}
                       transition={{ duration: 2, delay: 0.6, ease: "easeInOut" }}
                       d="M 0 320 Q 250 330, 500 320 T 1000 300" 
                       fill="none" stroke="#ef4444" strokeWidth="2" 
                    />

                    {/* Points at 3Y mark (x=300) */}
                    <circle cx="300" cy="270" r="4" fill="#22c55e" />
                    <circle cx="300" cy="285" r="4" fill="#34d399" />
                    <circle cx="300" cy="305" r="4" fill="#fb923c" />
                    <circle cx="300" cy="325" r="4" fill="#ef4444" />
                 </svg>

                 {/* Tooltip mock */}
                 <div className="absolute top-24 left-32 bg-gray-50/90 backdrop-blur border border-gray-200 rounded-xl p-4 shadow-xl z-10 w-48">
                    <div className="text-[10px] font-black text-gray-900 mb-2 uppercase tracking-widest border-b border-gray-100 pb-1">3Y Projection</div>
                    <div className="space-y-1.5">
                       <div className="flex justify-between items-center"><span className="text-[9px] text-gray-500 font-bold uppercase">95th %ile:</span> <span className="text-[10px] font-black text-gray-900">₹1.13 Cr</span></div>
                       <div className="flex justify-between items-center"><span className="text-[9px] text-gray-500 font-bold uppercase">75th %ile:</span> <span className="text-[10px] font-black text-gray-900">₹88.31 L</span></div>
                       <div className="flex justify-between items-center"><span className="text-[9px] text-gray-500 font-bold uppercase">25th %ile:</span> <span className="text-[10px] font-black text-gray-900">₹64.05 L</span></div>
                       <div className="flex justify-between items-center"><span className="text-[9px] text-gray-500 font-bold uppercase">5th %ile:</span> <span className="text-[10px] font-black text-gray-900">₹50.15 L</span></div>
                    </div>
                 </div>

                 {/* Axis labels */}
                 <div className="absolute -bottom-8 left-0 text-[10px] font-bold text-gray-400">Now</div>
                 <div className="absolute -bottom-8 left-1/4 text-[10px] font-bold text-gray-400">1Y</div>
                 <div className="absolute -bottom-8 left-2/4 text-[10px] font-bold text-gray-400">3Y</div>
                 <div className="absolute -bottom-8 left-3/4 text-[10px] font-bold text-gray-400">5Y</div>
                 <div className="absolute -bottom-8 left-[98%] text-[10px] font-bold text-gray-400">10Y</div>

                 <div className="absolute top-0 -left-10 text-[10px] font-bold text-gray-400">₹4.5Cr</div>
                 <div className="absolute top-1/2 -left-10 text-[10px] font-bold text-gray-400">₹2.2Cr</div>
                 <div className="absolute bottom-0 -left-10 text-[10px] font-bold text-gray-400">₹39L</div>
              </div>
           </div>
        </div>

        {/* Projection Result Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
           {projections.map((proj, idx) => (
             <m.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 + (idx * 0.1) }}
                className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden"
             >
                <div className="p-6 border-b border-gray-50">
                   <h3 className="text-sm font-bold text-gray-900 uppercase tracking-widest flex items-center gap-2">
                     <div className="w-1.5 h-6 bg-red-500 rounded-full" /> {proj.title}
                   </h3>
                </div>
                <div className="p-6">
                   <div className="space-y-1">
                      {proj.data.map((row, rIdx) => (
                        <div key={rIdx} className="flex items-center justify-between py-3 px-2 rounded-xl hover:bg-gray-50 transition-colors group">
                           <div className="text-[11px] font-bold text-gray-500 group-hover:text-gray-900 transition-colors">{row.label}</div>
                           <div className="flex items-center gap-6">
                              <div className="text-sm font-black text-gray-900 font-sans">{row.val}</div>
                              <div className={`w-16 text-right text-[10px] font-black ${row.trend === 'up' ? 'text-green-500' : 'text-red-500'} flex items-center justify-end gap-1`}>
                                 {row.trend === 'up' ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                                 {row.perc}
                              </div>
                           </div>
                        </div>
                      ))}
                   </div>
                </div>
             </m.div>
           ))}
        </div>

        {/* Info Box */}
        <m.div 
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           className="bg-blue-50 border border-blue-100 rounded-2xl p-6 flex gap-4"
        >
           <Info className="w-5 h-5 text-blue-500 flex-shrink-0" />
           <p className="text-[11px] font-bold text-blue-700 leading-relaxed uppercase tracking-wide">
             Calculations are based on 1000 Monte Carlo simulations using current portfolio volatility (14.3%) and expected weighted return (15.3%). Past performance does not guarantee future results.
           </p>
        </m.div>
      </main>
    </ReportLayout>
  );
};

export default ForwardProjectionsPage;
