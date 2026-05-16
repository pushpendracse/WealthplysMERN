"use client";

import React from 'react';
import Link from 'next/link';
import MFNavbar from "../components/MFNavbar";
import { 
  Upload, 
  FileText, 
  Eye, 
  Trash2, 
  Sparkles,
  Info
} from "lucide-react";
import { m } from "framer-motion";
import { Button } from "@/components/ui/button";

const MFAnalyserPage = () => {
  const portfolios = [
    { 
      id: 1, 
      name: "Portfolio Analysis", 
      date: "25 Apr 2026", 
      type: "CAMS",
      icon: "📊"
    },
    { 
      id: 2, 
      name: "Rajesh Kumar", 
      date: "Sample portfolio with pre-seeded data", 
      type: "DEMO",
      icon: "✨",
      isDemo: true
    }
  ];

  return (
    <div className="min-h-screen bg-[#f8f9fb]">
      <MFNavbar />
      
      <main className="max-w-5xl mx-auto px-6 py-12">
        {/* Header Section */}
        <div className="text-center mb-12">
          <m.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 text-red-500 text-xs font-bold uppercase tracking-wider mb-4"
          >
            <Sparkles className="w-3 h-3" />
            Portfolio Intelligence
          </m.div>
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Upload Your Statement</h1>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
            Upload your CAMS, KFintech, or MFU statements to get comprehensive analysis with live NAV data.
          </p>
        </div>

        {/* Upload Zone */}
        <m.div 
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white rounded-3xl border-2 border-dashed border-gray-200 p-16 text-center mb-16 hover:border-primary/30 transition-colors group cursor-pointer"
        >
          <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
            <Upload className="w-8 h-8 text-red-500" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">Drop your statement files here</h3>
          <p className="text-gray-400 text-sm mb-6">
            Supports CAMS CAS, KFintech CAS & MFU Consolidated Statements<br />
            PDF, CSV or TXT format | Multiple files supported
          </p>
          <Button variant="outline" className="rounded-lg px-8 py-6 font-semibold border-gray-200 hover:bg-gray-50">
            Browse Files
          </Button>
        </m.div>

        {/* Portfolios Section */}
        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-6">Your Portfolios</h2>
          <div className="space-y-4">
            {portfolios.map((item) => (
              <m.div 
                key={item.id}
                whileHover={{ x: 4 }}
                className="bg-white p-4 rounded-2xl border border-gray-100 flex items-center justify-between group shadow-sm hover:shadow-md transition-all"
              >
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-xl ${item.isDemo ? 'bg-orange-50' : 'bg-red-50'}`}>
                    {item.isDemo ? <Sparkles className="w-6 h-6 text-orange-400" /> : <FileText className="w-6 h-6 text-red-400" />}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{item.name}</h4>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-xs text-gray-400 flex items-center gap-1">
                        {item.isDemo ? null : <><Info className="w-3 h-3" /> {item.date}</>}
                        {item.isDemo && item.date}
                      </span>
                      {!item.isDemo && (
                        <span className="px-2 py-0.5 rounded bg-gray-100 text-[10px] font-bold text-gray-500 uppercase tracking-tight">
                          {item.type}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  {item.isDemo ? (
                    <Link href="/mf-analyser/report">
                      <Button variant="outline" size="sm" className="rounded-lg gap-2 font-semibold text-gray-600 border-gray-200 hover:bg-gray-50">
                        <Eye className="w-4 h-4" />
                        View Demo
                      </Button>
                    </Link>
                  ) : (
                    <Button variant="outline" size="sm" className="rounded-lg gap-2 font-semibold text-gray-600 border-gray-200 hover:bg-gray-50">
                      <Eye className="w-4 h-4" />
                      View
                    </Button>
                  )}
                  {!item.isDemo && (
                    <Button variant="ghost" size="icon" className="text-gray-300 hover:text-red-500 hover:bg-red-50 rounded-lg">
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  )}
                </div>
              </m.div>
            ))}
          </div>
        </section>

        {/* Footer Disclaimer */}
        <div className="mt-16 text-center">
          <p className="text-xs text-gray-400 leading-loose">
            Your data is processed securely and never shared with third parties.<br />
            We support CAMS CAS, KFintech CAS, and MFU Consolidated Statement formats.
          </p>
        </div>
      </main>
    </div>
  );
};

export default MFAnalyserPage;
