"use client";

import React from 'react';
import { m } from "framer-motion";
import { LucideIcon, TrendingUp, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

/**
 * Standardized Report Header
 */
export const ReportHeader = ({ title, subtitle, riskScore = "6.4/10" }: { title: string; subtitle: string; riskScore?: string }) => (
  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-8">
    <div>
      <m.h1 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="text-3xl font-black text-gray-900 tracking-tight"
      >
        {title}
      </m.h1>
      <m.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-xs text-gray-400 mt-1.5 uppercase tracking-[0.2em] font-bold font-sans"
      >
        {subtitle}
      </m.p>
    </div>
    <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto mt-4 sm:mt-0">
      <div className="bg-white/80 backdrop-blur-sm px-4 py-2.5 rounded-2xl border border-primary/10 text-[10px] sm:text-[11px] font-black text-primary shadow-sm flex items-center justify-center gap-2 uppercase tracking-widest flex-1 sm:flex-none min-w-[120px]">
        <m.span 
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" 
        />
        <span className="truncate">Risk: {riskScore}</span>
      </div>
      <Button variant="outline" className="h-11 px-4 sm:px-5 rounded-2xl border-gray-200 bg-white shadow-sm hover:bg-gray-50 transition-all font-bold text-[10px] sm:text-xs uppercase tracking-widest gap-2 flex-1 sm:flex-none min-w-[120px]">
        <Download className="w-3.5 h-3.5 flex-shrink-0" /> <span className="truncate">PDF Report</span>
      </Button>
    </div>
  </div>
);

/**
 * Consistent KPI Card
 */
export const KPICard = ({ label, value, sub, icon: Icon, color, delay = 0 }: { label: string; value: string; sub?: string; icon: LucideIcon; color: string; delay?: number }) => (
  <m.div 
    initial={{ opacity: 0, y: 15 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.4 }}
    className="bg-white p-6 rounded-[2rem] shadow-sm border border-white hover:shadow-md transition-shadow group"
  >
    <div className="flex justify-between items-start mb-5">
      <span className="text-[10px] font-black text-gray-400 uppercase tracking-[0.15em]">{label}</span>
      <div className={`p-2 rounded-xl transition-colors ${color === 'red' ? 'bg-red-50 group-hover:bg-red-100' : 'bg-green-50 group-hover:bg-green-100'}`}>
        <Icon className={`w-4 h-4 ${color === 'red' ? 'text-red-500' : 'text-green-500'}`} />
      </div>
    </div>
    <div className="text-2xl font-black text-gray-900 font-sans tracking-tight leading-none">{value}</div>
    {sub && (
      <div className="flex items-center gap-1.5 mt-2.5">
        <TrendingUp className="w-3 h-3 text-green-500" />
        <span className="text-[11px] font-bold text-green-500 uppercase tracking-wide">{sub}</span>
      </div>
    )}
  </m.div>
);

/**
 * Section Wrapper with consistent styling
 */
export const AnalysisSection = ({ title, icon: Icon, children, badge, className = "" }: { title: string; icon?: LucideIcon; children: React.ReactNode; badge?: string | number; className?: string }) => (
  <m.section 
    initial={{ opacity: 0, scale: 0.99 }}
    animate={{ opacity: 1, scale: 1 }}
    className={`bg-white rounded-[2.5rem] shadow-sm border border-gray-100 overflow-hidden ${className}`}
  >
    <div className="p-6 px-8 border-b border-gray-50 flex items-center justify-between bg-gray-50/30">
      <div className="flex items-center gap-3">
        {Icon && <Icon className="w-4 h-4 text-primary/70" />}
        <h3 className="text-[11px] font-black text-gray-900 uppercase tracking-[0.2em]">{title}</h3>
      </div>
      {badge !== undefined && (
        <span className="bg-primary/10 text-primary text-[9px] font-black px-2.5 py-1 rounded-lg uppercase tracking-widest">{badge}</span>
      )}
    </div>
    <div className="p-8">
      {children}
    </div>
  </m.section>
);

/**
 * Reusable Insight Box (Alert style)
 */
export const InsightBox = ({ title, desc, type = 'info', actionable = false }: { title: string; desc: string; type?: 'critical' | 'actionable' | 'info' | 'success'; actionable?: boolean }) => {
  const styles = {
    critical: "bg-red-50/50 border-red-100 text-red-900",
    actionable: "bg-amber-50/50 border-amber-100 text-amber-900",
    success: "bg-green-50/50 border-green-100 text-green-900",
    info: "bg-blue-50/50 border-blue-100 text-blue-900",
  };

  return (
    <div className={`p-6 rounded-3xl border ${styles[type]} transition-all hover:shadow-sm`}>
      <div className="flex items-center gap-3 mb-2">
        <h4 className="text-sm font-black uppercase tracking-tight">{title}</h4>
        {actionable && <span className="bg-white/50 px-2 py-0.5 rounded text-[8px] font-black uppercase tracking-widest">Actionable</span>}
      </div>
      <p className="text-xs font-medium opacity-70 leading-relaxed uppercase tracking-tight">{desc}</p>
    </div>
  );
};
