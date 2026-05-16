"use client";

import React from 'react';
import { 
  FileText, 
  LayoutDashboard, 
  Activity, 
  PieChart, 
  TrendingUp, 
  ShieldCheck, 
  AlertTriangle, 
  Target, 
  CheckCircle2, 
  Sparkles,
  ChevronRight
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { m, AnimatePresence } from "framer-motion";
import Navbar from "@/components/layout/Navbar";

const ReportLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);

  const sidebarItems = [
    { section: "PORTFOLIO", items: [
      { name: "Summary", icon: FileText, href: "/mf-analyser/report/summary" },
      { name: "Dashboard", icon: LayoutDashboard, href: "/mf-analyser/report/dashboard" },
      { name: "Fund Holdings", icon: Activity, href: "/mf-analyser/report/fund-holdings" },
      { name: "Allocation", icon: PieChart, href: "/mf-analyser/report/allocation" },
    ]},
    { section: "ANALYSIS", items: [
      { name: "Recommendations", icon: TrendingUp, badge: "1", href: "/mf-analyser/report/recommendations" },
      { name: "Risk & Metrics", icon: ShieldCheck, href: "/mf-analyser/report/risk-metrics" },
      { name: "Forward Projections", icon: TrendingUp, href: "/mf-analyser/report/forward-projections" },
      { name: "Stress & Risk", icon: AlertTriangle, href: "/mf-analyser/report/stress-risk" },
      { name: "Benchmark & Peers", icon: Target, href: "/mf-analyser/report/benchmark-peers" },
      { name: "Health Check", icon: CheckCircle2, href: "/mf-analyser/report/health-check" },
    ]},
    { section: "METRICS", items: [
      { name: "Goals & Costs", icon: Target, href: "/mf-analyser/report/goals-costs" },
      { name: "Insights", icon: Sparkles, href: "/mf-analyser/report/insights" },
    ]}
  ];

  return (
    <div className="min-h-screen bg-[#f8fafc] text-gray-900 font-sans selection:bg-primary/20">
      
      {/* Global Unified Navbar */}
      <Navbar 
        onToggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} 
        isSidebarOpen={isSidebarOpen} 
      />

      {/* Main Container - Added pt-[80px] to account for fixed Navbar */}
      <div className="flex pt-[80px] min-h-screen">
        
        {/* Sidebar - Positioned below Navbar */}
        <aside className={`
          fixed lg:sticky top-[80px] h-[calc(100vh-80px)] flex flex-col z-[40] transition-all duration-500 ease-in-out
          bg-white border-r border-gray-100 shadow-[0_0_40px_rgba(0,0,0,0.03)] overflow-hidden
          ${isSidebarOpen ? 'translate-x-0 w-72' : '-translate-x-full w-0 lg:translate-x-0 lg:w-72'}
        `}>
          
          {/* Sidebar Items */}
          <div className="flex-1 overflow-y-auto px-4 py-8 space-y-10 scrollbar-hide">
            {sidebarItems.map((group) => (
              <div key={group.section} className="space-y-3">
                <h5 className="px-4 text-[9px] font-black text-gray-400 uppercase tracking-[0.25em]">
                  {group.section}
                </h5>
                <div className="space-y-1">
                  {group.items.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                      <Link 
                        key={item.name}
                        href={item.href}
                        onClick={() => setIsSidebarOpen(false)}
                        className={`
                          relative group flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-300
                          ${isActive 
                            ? "bg-primary/5 text-primary" 
                            : "text-gray-500 hover:text-primary hover:bg-primary/5"
                          }
                        `}
                      >
                        <div className="flex items-center gap-4">
                          <item.icon className={`w-4 h-4 transition-colors ${isActive ? "text-primary" : "text-gray-400 group-hover:text-primary"}`} />
                          <span className={`text-[12px] font-bold tracking-tight uppercase`}>
                            {item.name}
                          </span>
                        </div>
                        {item.badge && (
                          <span className="bg-primary text-white text-[9px] font-black px-2 py-0.5 rounded-full shadow-md">
                            {item.badge}
                          </span>
                        )}
                      </Link>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* Profile Card at bottom */}
          <div className="p-6">
             <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100 flex items-center gap-3 group cursor-pointer hover:bg-white transition-colors">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-xs font-black text-primary">
                  SJ
                </div>
                <div className="flex flex-col min-w-0">
                   <span className="text-[11px] font-black text-gray-900 truncate uppercase tracking-tighter">Surendra J.</span>
                   <span className="text-[8px] font-bold text-gray-500 uppercase tracking-widest truncate">Verified User</span>
                </div>
                <ChevronRight className="w-4 h-4 text-gray-300 ml-auto group-hover:translate-x-1 transition-transform" />
             </div>
          </div>
        </aside>

        {/* Content Viewport */}
        <div className="flex-1 min-w-0 bg-[#f8fafc] flex flex-col">
           {/* Institutional Badge - Moved to top of content since Header was removed */}
           <div className="px-4 sm:px-6 lg:px-10 py-3 sm:py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 bg-white border-b border-gray-100">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-primary/8 text-primary text-[8px] sm:text-[10px] font-black border border-primary/20 uppercase tracking-widest whitespace-nowrap overflow-hidden max-w-full">
                <m.span
                  className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"
                  animate={{ scale: [1, 1.5, 1], opacity: [1, 0.4, 1] }}
                  transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                />
                <TrendingUp className="w-3 h-3 sm:w-3.5 sm:h-3.5 flex-shrink-0" />
                <span className="truncate">Institutional-Grade Platform</span>
              </div>
              <div className="text-[8px] sm:text-[10px] font-bold text-gray-400 uppercase tracking-widest hidden sm:block">
                MF Analyser Report
              </div>
           </div>

           {/* Main Page Content */}
           <div className="flex-1 overflow-y-auto scroll-smooth">
             {children}
           </div>
        </div>

        {/* Overlay for Mobile Sidebar */}
        <AnimatePresence>
          {isSidebarOpen && (
            <m.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[30] lg:hidden"
              style={{ top: '80px' }}
              onClick={() => setIsSidebarOpen(false)}
            />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ReportLayout;
