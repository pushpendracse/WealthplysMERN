"use client";

import React from 'react';
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const DashboardPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <main className="flex-grow pt-24 pb-12 px-5 md:px-8 max-w-7xl mx-auto w-full">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Dashboard Overview</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map(i => (
            <div key={i} className="h-40 bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <div className="h-4 w-24 bg-gray-100 rounded mb-4"></div>
              <div className="h-8 w-32 bg-primary/10 rounded mb-2"></div>
            </div>
          ))}
        </div>
        <div className="mt-8 h-80 bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="h-6 w-48 bg-gray-100 rounded mb-6"></div>
          <div className="h-full w-full bg-gray-50 rounded"></div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DashboardPage;
