"use client";

import React, { useState } from 'react';
import ReportLayout from "../components/ReportLayout";
import { 
  Search, 
  ChevronDown, 
  ChevronUp, 
  ArrowUpRight, 
  ArrowDownRight,
  TrendingUp,
  Activity,
  FileText,
  Download,
  Info,
  SlidersHorizontal,
  ChevronRight
} from "lucide-react";
import { m, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const FundHoldingsPage = () => {
  const [expandedId, setExpandedId] = useState<number | null>(0);
  const [searchQuery, setSearchQuery] = useState("");

  const summaryStats = [
    { label: "Total Invested", value: "₹39.50 L", icon: FileText, color: "red" },
    { label: "Current Value", value: "₹49.52 L", icon: TrendingUp, color: "green" },
    { label: "Total Returns", value: "₹10.02 L", sub: "+25.37%", icon: Activity, color: "green" },
    { label: "XIRR", value: "20.94%", icon: TrendingUp, color: "green" },
  ];

  const funds = [
    {
      id: 0,
      name: "Nippon India ELSS Tax Saver Fund -",
      amc: "Nippon India Mutual Fund",
      category: "Equity",
      folio: "2233445566",
      value: "₹7.77 L",
      returns: "+29.59%",
      recommendation: "INCREASE_SIP",
      metrics: {
        invested: "₹6.00 L",
        currentValue: "₹7.77 L",
        pnl: "+₹1.77 L",
        xirr: "21.14%",
        units: "6541.849",
        avgNav: "₹91.69",
        currentNav: "₹118.82",
        cagr: "10.90%"
      },
      analysis: {
        confidence: "78%",
        text: "Strong outperformance with XIRR of 21.14%, 7.1% above Nifty 500 TRI. Excellent risk-adjusted returns (Sharpe: 0.88, Sortino: 1.26). Consistent alpha generation of 7.1%.",
        metrics: [
          { label: "SHARPE", val: "0.88" },
          { label: "ALPHA", val: "+7.14%" },
          { label: "BETA", val: "1.05" },
          { label: "SORTINO", val: "1.26" },
          { label: "STD DEV", val: "16.00%" },
          { label: "MAX DD", val: "-27.00%" },
          { label: "TREYNOR", val: "13.46" },
          { label: "INFO RATIO", val: "0.68" },
          { label: "UP CAPTURE", val: "114%" },
          { label: "DOWN CAPTURE", val: "91%" },
        ],
        consistency: "8/10"
      }
    },
    {
      id: 1,
      name: "Quant Small Cap Fund -",
      amc: "Quant Mutual Fund",
      category: "Equity",
      folio: "8901234567",
      value: "₹6.17 L",
      returns: "+24.93%",
      recommendation: "HOLD"
    },
    {
      id: 2,
      name: "Kotak Emerging Equity Fund -",
      amc: "Kotak Mutual Fund",
      category: "Equity",
      folio: "7890123456",
      value: "₹4.73 L",
      returns: "+21.41%",
      recommendation: "HOLD"
    },
    {
      id: 3,
      name: "DSP Nifty 50 Index Fund -",
      amc: "DSP Mutual Fund",
      category: "Equity",
      folio: "3344556677",
      value: "₹4.37 L",
      returns: "+12.86%",
      recommendation: "HOLD"
    },
    {
      id: 4,
      name: "HDFC Short Term Debt Fund -",
      amc: "HDFC Mutual Fund",
      category: "Debt",
      folio: "9012345678",
      value: "₹4.34 L",
      returns: "+27.71%",
      recommendation: "INCREASE_SIP"
    },
    {
      id: 5,
      name: "ICICI Prudential Balanced Advantage Fund -",
      amc: "ICICI Prudential Mutual Fund",
      category: "Hybrid",
      folio: "5678901234",
      value: "₹4.18 L",
      returns: "+26.83%",
      recommendation: "INCREASE_SIP"
    }
  ];

  const getBadgeColor = (rec: string) => {
    switch (rec) {
      case "INCREASE_SIP": return "bg-red-500 text-white";
      case "HOLD": return "bg-gray-100 text-gray-500";
      case "EXIT": return "bg-red-600 text-white";
      default: return "bg-gray-100 text-gray-500";
    }
  };

  return (
    <ReportLayout>
      <main className="p-4 lg:p-8 space-y-6">
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Fund Holdings</h1>
            <p className="text-sm text-gray-500 mt-1 uppercase tracking-wider font-medium">
              12 Funds • 11 AMCs • 12 Folios
            </p>
          </div>
          <div className="flex items-center gap-4 lg:gap-6 w-full sm:w-auto">
            <div className="text-sm font-bold text-gray-700 bg-white px-3 py-2 rounded-lg border border-gray-100">
              Risk: 6.4/10
            </div>
            <Button variant="outline" className="gap-2 border-gray-200 rounded-lg h-10 px-4 flex-1 sm:flex-none">
              <Download className="w-4 h-4" /> PDF Report
            </Button>
          </div>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {summaryStats.map((card, i) => (
            <m.div 
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-5 rounded-2xl shadow-sm border border-white"
            >
              <div className="flex justify-between items-start mb-4">
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{card.label}</span>
                <div className={`p-1.5 rounded-lg ${card.color === 'red' ? 'bg-red-50' : 'bg-green-50'}`}>
                  <card.icon className={`w-3.5 h-3.5 ${card.color === 'red' ? 'text-red-500' : 'text-green-500'}`} />
                </div>
              </div>
              <div className="text-2xl font-black text-gray-900 font-sans tracking-tight">{card.value}</div>
              {card.sub && <div className="text-[11px] font-bold text-green-500 mt-1">{card.sub}</div>}
            </m.div>
          ))}
        </div>

        {/* Search & Filters */}
        <div className="flex flex-col lg:flex-row gap-4 items-center">
          <div className="relative flex-1 w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <Input 
              placeholder="Search by fund name, AMC, folio, or category..." 
              className="pl-10 h-11 bg-white border-gray-200 rounded-xl"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="flex gap-2 w-full lg:w-auto">
            <div className="flex items-center gap-2 bg-white border border-gray-200 px-3 py-2 rounded-xl text-sm font-medium text-gray-600 min-w-[140px] justify-between cursor-pointer">
              All Categories <ChevronDown className="w-4 h-4 text-gray-400" />
            </div>
            <div className="flex items-center gap-2 bg-white border border-gray-200 px-3 py-2 rounded-xl text-sm font-medium text-gray-600 min-w-[100px] justify-between cursor-pointer">
              Value <ChevronDown className="w-4 h-4 text-gray-400" />
            </div>
            <Button variant="outline" className="h-11 w-11 p-0 rounded-xl border-gray-200">
              <SlidersHorizontal className="w-4 h-4" />
            </Button>
          </div>
        </div>

        <div className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">
          Showing {funds.length} of 12 funds
        </div>

        {/* Fund List */}
        <div className="space-y-3">
          {funds.map((fund) => (
            <div key={fund.id} className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              {/* Main Row */}
              <div 
                className="p-5 flex flex-wrap items-center justify-between cursor-pointer gap-4"
                onClick={() => setExpandedId(expandedId === fund.id ? null : fund.id)}
              >
                <div className="flex-1 min-w-[250px]">
                  <div className="flex items-center gap-3">
                    <h3 className="font-bold text-gray-900">{fund.name}</h3>
                    <span className={`text-[9px] font-black px-2 py-0.5 rounded uppercase tracking-wider ${getBadgeColor(fund.recommendation)}`}>
                      {fund.recommendation}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 mt-1 text-[11px] font-medium text-gray-400">
                    <span>{fund.amc}</span>
                    <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                    <span>{fund.category}</span>
                    <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                    <span>Folio: {fund.folio}</span>
                  </div>
                </div>

                <div className="flex items-center gap-8 text-right">
                  <div>
                    <div className="text-lg font-black text-gray-900 font-sans tracking-tight">{fund.value}</div>
                    <div className="text-[11px] font-bold text-green-500 flex items-center justify-end gap-1">
                      <ArrowUpRight className="w-3 h-3" /> {fund.returns}
                    </div>
                  </div>
                  <div className={`p-1 rounded-lg bg-gray-50 text-gray-400 transition-transform ${expandedId === fund.id ? 'rotate-180' : ''}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </div>
              </div>

              {/* Expanded Section */}
              <AnimatePresence>
                {expandedId === fund.id && (
                  <m.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 pb-6 pt-2 border-t border-gray-50">
                      {fund.metrics ? (
                        <>
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-6">
                            {[
                              { label: "Invested", val: fund.metrics.invested },
                              { label: "Current Value", val: fund.metrics.currentValue },
                              { label: "P&L", val: fund.metrics.pnl, color: "text-green-500" },
                              { label: "XIRR", val: fund.metrics.xirr, color: "text-green-500" },
                              { label: "Units", val: fund.metrics.units },
                              { label: "Avg NAV", val: fund.metrics.avgNav },
                              { label: "Current NAV", val: fund.metrics.currentNav },
                              { label: "CAGR", val: fund.metrics.cagr, color: "text-green-500" },
                            ].map((m, i) => (
                              <div key={i}>
                                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">{m.label}</p>
                                <p className={`text-sm font-black ${m.color || 'text-gray-900'}`}>{m.val}</p>
                              </div>
                            ))}
                          </div>

                          {/* Recommendation Block */}
                          <div className="bg-gray-50/50 rounded-2xl p-5 border border-gray-100">
                            <div className="flex justify-between items-center mb-4">
                              <div className="flex items-center gap-3">
                                <span className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">Recommendation:</span>
                                <span className={`text-[10px] font-black px-2 py-0.5 rounded uppercase tracking-wider ${getBadgeColor(fund.recommendation)}`}>
                                  {fund.recommendation}
                                </span>
                              </div>
                              <span className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">Confidence: {fund.analysis?.confidence}</span>
                            </div>
                            <p className="text-xs text-gray-600 font-medium leading-relaxed mb-6">
                              {fund.analysis?.text}
                            </p>
                            
                            <div className="grid grid-cols-2 sm:grid-cols-5 gap-y-6 gap-x-4">
                              {fund.analysis?.metrics.map((am, i) => (
                                <div key={i} className="text-center sm:text-left">
                                  <p className="text-[9px] font-bold text-gray-400 uppercase tracking-widest mb-1">{am.label}</p>
                                  <p className="text-xs font-black text-gray-800">{am.val}</p>
                                </div>
                              ))}
                            </div>

                            <div className="mt-6 pt-6 border-t border-gray-100 flex items-center gap-3">
                              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">CONSISTENCY</span>
                              <div className="flex gap-1">
                                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(dot => (
                                  <div key={dot} className={`w-1.5 h-3 rounded-full ${dot <= 8 ? 'bg-red-500' : 'bg-gray-200'}`}></div>
                                ))}
                              </div>
                              <span className="text-[10px] font-black text-gray-800 ml-1">{fund.analysis?.consistency}</span>
                            </div>
                          </div>
                        </>
                      ) : (
                        <div className="py-8 text-center text-gray-400 text-sm italic">
                          Detailed analysis pending for this fund...
                        </div>
                      )}
                    </div>
                  </m.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </main>
    </ReportLayout>
  );
};

export default FundHoldingsPage;
