"use client";

import React from 'react';
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const PortfolioPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <main className="flex-grow pt-24 pb-12 px-5 md:px-8 max-w-7xl mx-auto w-full">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">My Portfolio</h1>
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="p-8 border-b border-gray-50 flex justify-between items-center bg-primary/5">
            <div>
              <p className="text-sm text-gray-500 font-medium mb-1">Total Net Worth</p>
              <h2 className="text-3xl font-bold text-primary">₹1,24,50,000</h2>
            </div>
            <div className="text-right text-green-600">
              <p className="text-sm font-medium mb-1">+12.4% Overall</p>
              <h2 className="text-xl font-bold">+₹14,50,000</h2>
            </div>
          </div>
          <div className="p-8 h-96 flex items-center justify-center">
            <p className="text-gray-400">Portfolio asset allocation details...</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PortfolioPage;
