"use client";

import React from 'react';
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const AdminPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Navbar />
      <main className="flex-grow pt-24 pb-12 px-5 md:px-8 max-w-7xl mx-auto w-full">
        <h1 className="text-3xl font-bold text-slate-900 mb-8">Admin Console</h1>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
          {[
            { label: "Total Users", val: "1,250", color: "bg-blue-500" },
            { label: "Active Subs", val: "840", color: "bg-emerald-500" },
            { label: "Revenue", val: "₹12.5L", color: "bg-amber-500" },
            { label: "Pending Tasks", val: "12", color: "bg-rose-500" }
          ].map((s, i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex items-center gap-4">
              <div className={`w-2 h-12 rounded-full ${s.color}`}></div>
              <div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">{s.label}</p>
                <p className="text-2xl font-black text-slate-800">{s.val}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-8">
          <h2 className="text-xl font-bold text-slate-800 mb-6">User Management</h2>
          <div className="space-y-4">
            {[1, 2, 3, 4, 5].map(i => (
              <div key={i} className="h-14 bg-slate-50 rounded-lg border border-slate-100"></div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AdminPage;
