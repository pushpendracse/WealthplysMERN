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
  ArrowRight,
  Zap,
  Briefcase,
  User,
  AlertCircle,
  Coins,
  ChevronDown
} from "lucide-react";
import { m } from "framer-motion";
import { Button } from "@/components/ui/button";

const GoalsCostsPage = () => {
  const kpis = [
    { label: "Total Invested", value: "₹39.50 L", icon: FileText, color: "red" },
    { label: "Current Value", value: "₹49.52 L", icon: TrendingUp, color: "green" },
    { label: "Total Returns", value: "₹10.02 L", sub: "+25.37%", icon: Activity, color: "green" },
    { label: "XIRR", value: "20.94%", icon: ShieldCheck, color: "green" },
  ];

  const params = [
    { label: "Portfolio Age", value: "2.7 years", icon: Briefcase, color: "text-orange-500", bg: "bg-orange-50" },
    { label: "Monthly SIP", value: "₹1.2L", icon: Coins, color: "text-red-500", bg: "bg-red-50" },
    { label: "Risk Tolerance", value: "Moderately Aggressive", icon: User, color: "text-blue-500", bg: "bg-blue-50" },
    { label: "Allocation Drift", value: "4.8%", icon: Target, color: "text-rose-500", bg: "bg-rose-50" },
  ];

  const goals = [
    { name: "Retirement Corpus", target: "₹4.87 Cr", current: "₹32.36 L", progress: 15, status: "Very Likely" },
    { name: "Wealth Creation (5Y)", target: "₹50.00 L", current: "₹1.82 L", progress: 4, status: "Well Study" },
    { name: "Child Education", target: "₹3.95 Cr", current: "₹8.77 L", progress: 2, status: "Very Likely" },
    { name: "Emergency Fund", target: "₹19.75 L", current: "₹69.99 L", progress: 100, status: "Well Study" },
    { name: "Home Down Payment", target: "₹1.97 Cr", current: "₹2.63 L", progress: 1, status: "Well Study" },
  ];

  const taxBreakdown = [
    { fund: "HDFC Mid-Cap Opportunities", gain: "₹1.17 L", type: "LTCG", estTax: "₹13,378", expense: "0.5%", net: "₹1.04 L" },
    { fund: "Parag Parikh Flexi Cap", gain: "₹91,592", type: "LTCG", estTax: "₹10,147", expense: "0.58%", net: "₹81,445" },
    { fund: "Axis Bluechip", gain: "₹31,571", type: "LTCG", estTax: "₹2,644", expense: "0.4%", net: "₹28,926" },
    { fund: "SBI Small Cap", gain: "₹22,883", type: "LTCG", estTax: "₹1,319", expense: "2%", net: "₹19,564" },
    { fund: "HDFC Short Term Debt", gain: "₹34,281", type: "STCG", estTax: "₹8,250", expense: "0.5%", net: "₹25,041" },
  ];

  return (
    <ReportLayout>
      <main className="p-8 space-y-8 bg-[#f1f3f6] min-h-screen">
        {/* Header */}
        <div className="flex justify-between items-end">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Goals & Costs</h1>
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

        {/* Health Score Bar */}
        <div className="bg-white p-4 rounded-3xl shadow-sm border border-gray-100 flex items-center justify-between px-8">
           <div className="flex items-center gap-6">
              <div className="w-12 h-12 rounded-2xl bg-green-50 text-green-600 flex items-center justify-center text-xl font-black">78</div>
              <div>
                 <div className="text-sm font-bold text-gray-900">Portfolio Health Score</div>
                 <div className="text-[11px] font-medium text-gray-500">Your portfolio is performing well overall.</div>
              </div>
           </div>
           <span className="px-4 py-1.5 rounded-full bg-red-500 text-white text-[10px] font-black uppercase tracking-widest shadow-lg shadow-red-100">Healthy</span>
        </div>

        {/* Parameters Row */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
           {params.map((p, i) => (
             <m.div 
                key={i}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 + (i * 0.1) }}
                className="bg-white p-5 rounded-2xl shadow-sm border border-white flex items-center gap-4"
             >
                <div className={`w-10 h-10 rounded-xl ${p.bg} flex items-center justify-center`}>
                   <p.icon className={`w-5 h-5 ${p.color}`} />
                </div>
                <div>
                   <div className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">{p.label}</div>
                   <div className="text-sm font-black text-gray-900 font-sans">{p.value}</div>
                </div>
             </m.div>
           ))}
        </div>

        {/* Goal Achievement Tracker */}
        <section className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
           <div className="p-6 border-b border-gray-50 flex items-center justify-between">
              <div className="flex items-center gap-2">
                 <Target className="w-4 h-4 text-red-500" />
                 <h3 className="text-sm font-bold text-gray-900 uppercase tracking-widest">Goal Achievement Tracker</h3>
              </div>
           </div>
           <div className="p-6 bg-green-50/50 border-b border-green-50 flex items-center gap-3">
              <ShieldCheck className="w-4 h-4 text-green-500" />
              <span className="text-[11px] font-bold text-green-700 uppercase tracking-wide">All your financial goals are currently on track!</span>
           </div>
           <div className="p-8 space-y-10">
              {goals.map((goal, i) => (
                <div key={i} className="space-y-4">
                   <div className="flex justify-between items-end">
                      <div>
                         <div className="flex items-center gap-3 mb-1">
                            <span className="text-sm font-black text-gray-900">{goal.name}</span>
                            <span className="px-2 py-0.5 rounded bg-red-500 text-white text-[8px] font-black uppercase">{goal.status}</span>
                         </div>
                         <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Build 25x annual expenses</div>
                      </div>
                      <div className="text-right">
                         <div className="text-sm font-black text-gray-900 font-sans">{goal.current}</div>
                         <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Target: {goal.target}</div>
                      </div>
                   </div>
                   <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                      <m.div 
                        initial={{ width: 0 }}
                        animate={{ width: `${goal.progress}%` }}
                        transition={{ duration: 1.5, delay: 0.5 + (i * 0.1) }}
                        className="h-full bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.3)]"
                      />
                   </div>
                </div>
              ))}
           </div>
        </section>

        {/* Allocation Alignment Row */}
        <section className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8">
           <div className="flex items-center gap-2 mb-8 text-[11px] font-bold text-gray-400 uppercase tracking-widest">
              <Zap className="w-4 h-4 text-red-500" /> Allocation Alignment
           </div>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {[
                { label: "Current Equity", val: "74.8%", color: "bg-red-500" },
                { label: "Suggested Equity", val: "70%", color: "bg-red-500" },
              ].map((a, i) => (
                <div key={i} className="space-y-3">
                   <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{a.label}</div>
                   <div className="text-3xl font-black text-gray-900 font-sans">{a.val}</div>
                   <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
                      <div className={`h-full ${a.color}`} style={{ width: a.val }} />
                   </div>
                </div>
              ))}
           </div>
        </section>

        {/* Tax & Cost Impact Analysis */}
        <section className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
           <div className="p-6 border-b border-gray-50 flex items-center gap-2">
              <FileText className="w-4 h-4 text-red-500" />
              <h3 className="text-sm font-bold text-gray-900 uppercase tracking-widest">Tax & Cost Impact Analysis</h3>
           </div>
           
           <div className="p-8 overflow-x-auto">
              <table className="w-full text-left">
                 <thead>
                    <tr className="text-[10px] font-bold text-gray-400 uppercase tracking-widest border-b border-gray-50">
                       <th className="pb-4 px-2">Fund</th>
                       <th className="pb-4 px-2">Gain</th>
                       <th className="pb-4 px-2 text-center">Tax Type</th>
                       <th className="pb-4 px-2 text-right">Est. Tax</th>
                       <th className="pb-4 px-2 text-right">Expense</th>
                       <th className="pb-4 px-2 text-right">Net</th>
                    </tr>
                 </thead>
                 <tbody className="text-sm font-medium">
                    {taxBreakdown.map((row, i) => (
                      <tr key={i} className="border-b border-gray-50 last:border-0 hover:bg-gray-50/50 transition-colors">
                         <td className="py-4 px-2 font-bold text-gray-900">{row.fund}</td>
                         <td className="py-4 px-2 font-sans text-green-600 font-bold">{row.gain}</td>
                         <td className="py-4 px-2 text-center">
                            <span className={`px-2 py-0.5 rounded text-[8px] font-black uppercase ${row.type === 'LTCG' ? 'bg-gray-100 text-gray-500' : 'bg-red-500 text-white'}`}>{row.type}</span>
                         </td>
                         <td className="py-4 px-2 text-right font-sans text-red-500">{row.estTax}</td>
                         <td className="py-4 px-2 text-right font-sans text-gray-500">{row.expense}</td>
                         <td className="py-4 px-2 text-right font-sans font-black text-gray-900">{row.net}</td>
                      </tr>
                    ))}
                 </tbody>
              </table>
           </div>
        </section>

        {/* SIP vs Lumpsum Analysis */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
           <div className="bg-blue-50 border border-blue-100 rounded-3xl p-8 relative overflow-hidden">
              <div className="relative z-10">
                 <div className="text-[10px] font-bold text-blue-600 uppercase tracking-widest mb-2">SIP Investments</div>
                 <div className="text-3xl font-black text-blue-900">₹37.52 L</div>
                 <div className="text-[10px] font-bold text-blue-400 uppercase tracking-widest mt-1">288 transactions • 95%</div>
              </div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100 rounded-full -mr-16 -mt-16 blur-2xl"></div>
           </div>
           <div className="bg-green-50 border border-green-100 rounded-3xl p-8 relative overflow-hidden">
              <div className="relative z-10">
                 <div className="text-[10px] font-bold text-green-600 uppercase tracking-widest mb-2">Lumpsum Investments</div>
                 <div className="text-3xl font-black text-green-900">₹1.98 L</div>
                 <div className="text-[10px] font-bold text-green-400 uppercase tracking-widest mt-1">4 transactions • 5%</div>
              </div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-green-100 rounded-full -mr-16 -mt-16 blur-2xl"></div>
           </div>
        </section>

        {/* Life Stage Advice */}
        <m.div 
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           className="bg-amber-50 border border-amber-100 rounded-2xl p-6 flex gap-4"
        >
           <AlertCircle className="w-5 h-5 text-amber-500 flex-shrink-0" />
           <p className="text-[11px] font-bold text-amber-700 leading-relaxed uppercase tracking-wide">
             Balanced approach with a mix of growth and stability. Review allocation annually and rebalance if equity drift exceeds 10% from target.
           </p>
        </m.div>
      </main>
    </ReportLayout>
  );
};

export default GoalsCostsPage;
