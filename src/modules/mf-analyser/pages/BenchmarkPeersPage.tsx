"use client";

import React from 'react';
import ReportLayout from "../components/ReportLayout";
import { 
  TrendingUp, 
  Download,
  Activity,
  FileText,
  ShieldCheck,
  Target,
  BarChart3,
  LineChart as LineChartIcon,
  ArrowUpRight,
  Zap,
  Star
} from "lucide-react";
import { m } from "framer-motion";
import { Button } from "@/components/ui/button";

const BenchmarkPeersPage = () => {
  const kpis = [
    { label: "Total Invested", value: "₹39.50 L", icon: FileText, color: "red" },
    { label: "Current Value", value: "₹49.52 L", icon: TrendingUp, color: "green" },
    { label: "Total Returns", value: "₹10.02 L", sub: "+25.37%", icon: Activity, color: "green" },
    { label: "XIRR", value: "20.94%", icon: ShieldCheck, color: "green" },
  ];

  const benchmarkKpis = [
    { label: "Portfolio XIRR", value: "20.94%", color: "text-red-500", bg: "bg-red-50" },
    { label: "Nifty 50 TRI", value: "15.82%", color: "text-gray-500", bg: "bg-gray-50" },
    { label: "Nifty 500 TRI", value: "17.45%", color: "text-gray-500", bg: "bg-gray-50" },
    { label: "Alpha Generated", value: "+3.49%", color: "text-green-600", bg: "bg-green-50" },
  ];

  const peerComparison = [
    { category: "Large Cap", portfolio: 18.2, peer: 15.4, color: "bg-blue-500" },
    { category: "Mid Cap", portfolio: 24.5, peer: 21.2, color: "bg-orange-500" },
    { category: "Small Cap", portfolio: 28.4, peer: 25.8, color: "bg-red-500" },
  ];

  const fundAlpha = [
    { fund: "HDFC Mid-Cap Opportunities", alpha: "+4.2%", beta: "0.85", sharpe: "1.2", status: "Outperforming" },
    { fund: "Mirae Asset Large Cap", alpha: "+1.8%", beta: "0.95", sharpe: "0.9", status: "Outperforming" },
    { fund: "Parag Parikh Flexi Cap", alpha: "+5.1%", beta: "0.78", sharpe: "1.5", status: "Exceptional" },
    { fund: "Quant Small Cap", alpha: "+6.4%", beta: "1.12", sharpe: "1.8", status: "Exceptional" },
    { fund: "Nippon India ELSS Tax Saver", alpha: "+2.1%", beta: "1.05", sharpe: "1.1", status: "Outperforming" },
  ];

  return (
    <ReportLayout>
      <main className="p-8 space-y-8 bg-[#f1f3f6] min-h-screen">
        {/* Header */}
        <div className="flex justify-between items-end">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Benchmark & Peers</h1>
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

        {/* Benchmark KPIs Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
           {benchmarkKpis.map((kpi, i) => (
             <m.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + (i * 0.1) }}
                className="bg-white p-6 rounded-2xl shadow-sm border border-white"
             >
                <div className="flex items-center gap-2 mb-3">
                   <div className={`w-1.5 h-1.5 rounded-full ${kpi.bg.replace('bg-', 'bg-').replace('-50', '-400')}`} />
                   <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{kpi.label}</span>
                </div>
                <div className={`text-2xl font-black font-sans ${kpi.color}`}>{kpi.value}</div>
             </m.div>
           ))}
        </div>

        {/* Cumulative Returns Chart Area */}
        <section className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
           <div className="p-6 border-b border-gray-50 flex items-center justify-between">
              <div className="flex items-center gap-2">
                 <LineChartIcon className="w-4 h-4 text-red-500" />
                 <h3 className="text-sm font-bold text-gray-900 uppercase tracking-widest">Portfolio vs Benchmark (Cumulative Returns)</h3>
              </div>
              <div className="flex gap-4">
                 <div className="flex items-center gap-2 text-[10px] font-bold text-gray-400 uppercase"><div className="w-2 h-2 rounded-full bg-red-500" /> Portfolio</div>
                 <div className="flex items-center gap-2 text-[10px] font-bold text-gray-400 uppercase"><div className="w-2 h-2 rounded-full bg-gray-300" /> Nifty 50</div>
                 <div className="flex items-center gap-2 text-[10px] font-bold text-gray-400 uppercase"><div className="w-2 h-2 rounded-full bg-gray-200" /> Nifty 500</div>
              </div>
           </div>
           <div className="p-10">
              <div className="relative h-[300px] border-l border-b border-gray-200 ml-10 mb-8">
                 <svg viewBox="0 0 1000 300" className="w-full h-full preserve-3d">
                    {/* Portfolio Line */}
                    <m.path 
                       initial={{ pathLength: 0 }}
                       animate={{ pathLength: 1 }}
                       transition={{ duration: 2, ease: "easeInOut" }}
                       d="M 0 280 L 100 250 L 200 260 L 300 200 L 400 180 L 500 120 L 600 140 L 700 80 L 800 60 L 900 40 L 1000 20" 
                       fill="none" stroke="#ef4444" strokeWidth="3" 
                    />
                    {/* Benchmark Line 1 */}
                    <m.path 
                       initial={{ pathLength: 0 }}
                       animate={{ pathLength: 1 }}
                       transition={{ duration: 2, delay: 0.3, ease: "easeInOut" }}
                       d="M 0 280 L 100 265 L 200 270 L 300 240 L 400 230 L 500 200 L 600 210 L 700 180 L 800 170 L 900 160 L 1000 150" 
                       fill="none" stroke="#d1d5db" strokeWidth="2" strokeDasharray="5,5"
                    />
                 </svg>
                 <div className="absolute top-0 -left-10 text-[10px] font-bold text-gray-400">100%</div>
                 <div className="absolute top-1/2 -left-10 text-[10px] font-bold text-gray-400">50%</div>
                 <div className="absolute bottom-0 -left-10 text-[10px] font-bold text-gray-400">0%</div>
                 
                 <div className="absolute -bottom-8 left-0 text-[10px] font-bold text-gray-400 uppercase">May 24</div>
                 <div className="absolute -bottom-8 left-1/4 text-[10px] font-bold text-gray-400 uppercase">Nov 24</div>
                 <div className="absolute -bottom-8 left-2/4 text-[10px] font-bold text-gray-400 uppercase">May 25</div>
                 <div className="absolute -bottom-8 left-3/4 text-[10px] font-bold text-gray-400 uppercase">Nov 25</div>
                 <div className="absolute -bottom-8 left-[98%] text-[10px] font-bold text-gray-400 uppercase">May 26</div>
              </div>
           </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
           {/* Peer Comparison Area */}
           <m.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden"
           >
              <div className="p-6 border-b border-gray-50 flex items-center gap-2">
                 <BarChart3 className="w-4 h-4 text-red-500" />
                 <h3 className="text-sm font-bold text-gray-900 uppercase tracking-widest">Peer Comparison (Category Wise)</h3>
              </div>
              <div className="p-8 space-y-10">
                 {peerComparison.map((item, i) => (
                   <div key={i} className="space-y-4">
                      <div className="flex justify-between items-end">
                         <span className="text-xs font-bold text-gray-900">{item.category}</span>
                         <div className="flex gap-4">
                            <span className="text-[10px] font-black text-red-500 uppercase">Portfolio: {item.portfolio}%</span>
                            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-tight">Peer Avg: {item.peer}%</span>
                         </div>
                      </div>
                      <div className="relative h-2 bg-gray-100 rounded-full overflow-hidden">
                         <m.div 
                            initial={{ width: 0 }}
                            animate={{ width: `${(item.peer / item.portfolio) * 100}%` }}
                            className="absolute inset-0 bg-gray-200"
                         />
                         <m.div 
                            initial={{ width: 0 }}
                            animate={{ width: '100%' }}
                            className={`absolute inset-0 ${item.color} opacity-80`}
                            style={{ maxWidth: '100%' }}
                         />
                      </div>
                   </div>
                 ))}
              </div>
           </m.div>

           {/* Alpha Table Area */}
           <m.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden"
           >
              <div className="p-6 border-b border-gray-50 flex items-center gap-2">
                 <Star className="w-4 h-4 text-red-500" />
                 <h3 className="text-sm font-bold text-gray-900 uppercase tracking-widest">Fund Level Alpha Analysis</h3>
              </div>
              <div className="p-6 overflow-x-auto">
                 <table className="w-full text-left">
                    <thead>
                       <tr className="text-[10px] font-bold text-gray-400 uppercase tracking-widest border-b border-gray-50">
                          <th className="pb-4 px-2">Fund</th>
                          <th className="pb-4 px-2">Alpha</th>
                          <th className="pb-4 px-2">Beta</th>
                          <th className="pb-4 px-2">Sharpe</th>
                       </tr>
                    </thead>
                    <tbody className="text-sm font-medium">
                       {fundAlpha.map((row, i) => (
                         <tr key={i} className="border-b border-gray-50 last:border-0 group hover:bg-gray-50 transition-colors">
                            <td className="py-4 px-2">
                               <div className="text-[11px] font-bold text-gray-900">{row.fund}</div>
                               <div className="text-[9px] font-black text-green-500 uppercase mt-0.5">{row.status}</div>
                            </td>
                            <td className="py-4 px-2 font-black text-green-600 font-sans">{row.alpha}</td>
                            <td className="py-4 px-2 font-sans text-gray-500">{row.beta}</td>
                            <td className="py-4 px-2 font-sans text-gray-900">{row.sharpe}</td>
                         </tr>
                       ))}
                    </tbody>
                 </table>
              </div>
           </m.div>
        </div>

        {/* Insight Box */}
        <m.div 
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           className="bg-green-50 border border-green-100 rounded-2xl p-6 flex gap-4"
        >
           <Zap className="w-5 h-5 text-green-500 flex-shrink-0" />
           <p className="text-[11px] font-bold text-green-700 leading-relaxed uppercase tracking-wide">
             Portfolio Alpha of +3.49% indicates superior stock selection and risk-adjusted management compared to Nifty 500 benchmark. Parag Parikh and Quant Small Cap are primary alpha contributors.
           </p>
        </m.div>
      </main>
    </ReportLayout>
  );
};

export default BenchmarkPeersPage;
