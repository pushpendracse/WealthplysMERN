"use client";

import React from 'react';
import ReportLayout from "../components/ReportLayout";
import { 
  PieChart,
  Layers,
  ArrowRight,
  AlertCircle
} from "lucide-react";
import { m } from "framer-motion";
import { ReportHeader, KPICard, AnalysisSection } from "../components/shared/ReportComponents";
import { useReportData, getIcon } from "../hooks/useReportData";

const AllocationPage = () => {
  const { data, isLoading, error } = useReportData();

  if (error) {
    return (
      <ReportLayout>
        <div className="min-h-[60vh] flex flex-col items-center justify-center p-8 text-center">
          <AlertCircle className="w-12 h-12 text-red-500 mb-4" />
          <h2 className="text-xl font-black text-gray-900 uppercase tracking-widest mb-2">Sync Error</h2>
          <p className="text-gray-500 text-sm max-w-xs uppercase font-bold tracking-tight">{error}</p>
        </div>
      </ReportLayout>
    );
  }

  return (
    <ReportLayout>
      <main className="p-4 lg:p-8 space-y-10 bg-[#f8fafc] min-h-screen">
        <ReportHeader 
          title="Allocation" 
          subtitle="Strategic distribution across market segments" 
        />

        {/* KPI Row - With Skeleton Loading */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {isLoading ? (
            Array(4).fill(0).map((_, i) => <KPISkeleton key={i} />)
          ) : (
            data?.portfolioSummary?.kpis.map((kpi: any, i: number) => (
              <KPICard 
                key={i} 
                {...kpi} 
                icon={getIcon(kpi.icon)} 
                delay={i * 0.1} 
              />
            ))
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
           {/* Asset Distribution - With Loading State */}
           <AnalysisSection title="Asset Distribution" icon={PieChart}>
              <div className="space-y-6">
                 {isLoading ? (
                    Array(6).fill(0).map((_, i) => <BarSkeleton key={i} />)
                 ) : (
                    data?.portfolioSummary?.allocation.map((cat: any, i: number) => (
                      <div key={i} className="space-y-2">
                          <div className="flex justify-between items-end">
                            <div>
                                <span className="text-xs sm:text-sm font-black text-gray-900">{cat.label}</span>
                                <span className="ml-2 text-[9px] sm:text-[10px] font-bold text-gray-400 uppercase">({cat.funds} Funds)</span>
                            </div>
                            <div className="text-right">
                                <span className="text-xs sm:text-sm font-black text-gray-900">{cat.value}</span>
                                <span className="ml-2 text-[9px] sm:text-[10px] font-bold text-primary">{cat.percentage}%</span>
                            </div>
                          </div>
                          <div className="w-full h-2 bg-gray-50 rounded-full overflow-hidden border border-gray-100">
                            <m.div 
                                initial={{ width: 0 }}
                                animate={{ width: `${cat.percentage}%` }}
                                transition={{ duration: 1, delay: 0.2 + (i * 0.05) }}
                                className={`h-full ${cat.color}`}
                            />
                          </div>
                      </div>
                    ))
                 )}
              </div>
           </AnalysisSection>

           <div className="space-y-8">
              {/* Strategy Card - With Loading State */}
              <AnalysisSection title="Allocation Strategy" icon={Layers}>
                 {isLoading ? (
                   <div className="space-y-4 animate-pulse">
                      <div className="h-4 bg-gray-100 rounded w-full" />
                      <div className="h-4 bg-gray-100 rounded w-3/4" />
                      <div className="mt-8 grid grid-cols-2 gap-4">
                         <div className="h-20 bg-gray-100 rounded-[2rem]" />
                         <div className="h-20 bg-gray-100 rounded-[2rem]" />
                      </div>
                   </div>
                 ) : (
                   <>
                    <p className="text-[11px] sm:text-xs font-medium text-gray-500 leading-relaxed uppercase tracking-tight">
                       {data?.portfolioSummary?.strategy.insight}
                    </p>
                    <div className="mt-8 grid grid-cols-2 gap-4">
                        <div className="p-4 sm:p-5 rounded-[2rem] bg-primary/5 border border-primary/10">
                          <div className="text-[8px] sm:text-[9px] font-black text-primary uppercase mb-1">Equity Mix</div>
                          <div className="text-lg sm:text-xl font-black text-gray-900">{data?.portfolioSummary?.strategy.equityMix}</div>
                        </div>
                        <div className="p-4 sm:p-5 rounded-[2rem] bg-emerald-50 border border-emerald-100">
                          <div className="text-[8px] sm:text-[9px] font-black text-emerald-600 uppercase mb-1">Debt Mix</div>
                          <div className="text-lg sm:text-xl font-black text-gray-900">{data?.portfolioSummary?.strategy.debtMix}</div>
                        </div>
                    </div>
                   </>
                 )}
              </AnalysisSection>

              <m.div 
                 initial={{ opacity: 0, scale: 0.95 }}
                 animate={{ opacity: 1, scale: 1 }}
                 className="bg-primary rounded-[2.5rem] p-6 sm:p-8 text-white shadow-xl shadow-primary/20 flex items-center justify-between group cursor-pointer overflow-hidden relative"
              >
                 <div className="relative z-10">
                    <h4 className="text-xs sm:text-sm font-black uppercase tracking-widest mb-1">Optimize Allocation</h4>
                    <p className="text-[9px] sm:text-[10px] font-bold opacity-80 uppercase tracking-wide">AI suggested adjustments for better alpha</p>
                 </div>
                 <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform relative z-10" />
                 <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -mr-16 -mt-16" />
              </m.div>
           </div>
        </div>
      </main>
    </ReportLayout>
  );
};

/* --- Skeleton Components --- */
const KPISkeleton = () => (
  <div className="bg-white p-6 rounded-[2rem] border border-gray-100 animate-pulse">
    <div className="flex justify-between mb-4">
      <div className="w-20 h-3 bg-gray-100 rounded" />
      <div className="w-8 h-8 bg-gray-100 rounded-xl" />
    </div>
    <div className="w-24 h-6 bg-gray-100 rounded mb-2" />
    <div className="w-12 h-3 bg-gray-100 rounded" />
  </div>
);

const BarSkeleton = () => (
  <div className="space-y-3 animate-pulse">
    <div className="flex justify-between">
      <div className="w-24 h-4 bg-gray-100 rounded" />
      <div className="w-16 h-4 bg-gray-100 rounded" />
    </div>
    <div className="w-full h-2 bg-gray-100 rounded-full" />
  </div>
);

export default AllocationPage;
