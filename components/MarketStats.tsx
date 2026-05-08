"use client";

import React from "react";
import { motion } from "framer-motion";

const marketData = [
  { symbol: "Nifty 50", price: "22,456.20", change: "+0.45%", isUp: true },
  { symbol: "Sensex", price: "73,876.45", change: "+0.38%", isUp: true },
  { symbol: "Nasdaq 100", price: "18,235.10", change: "-0.12%", isUp: false },
  { symbol: "Gold", price: "72,145", change: "+1.24%", isUp: true },
  { symbol: "Bitcoin", price: "64,231", change: "+2.51%", isUp: true },
  { symbol: "USD/INR", price: "83.42", change: "-0.05%", isUp: false },
  { symbol: "Nifty IT", price: "37,120", change: "+0.82%", isUp: true },
  { symbol: "Nifty Bank", price: "48,320", change: "-0.15%", isUp: false },
];

const MarketStats = () => {
  return (
    <div className="bg-[#000d21] border-y border-white/5 py-4 overflow-hidden">
      <motion.div
        animate={{ x: [0, -1000] }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
        className="flex whitespace-nowrap gap-12"
      >
        {[...marketData, ...marketData].map((item, i) => (
          <div key={i} className="flex items-center gap-3">
            <span className="text-white/60 text-sm font-bold uppercase tracking-wider">
              {item.symbol}
            </span>
            <span className="text-white text-sm font-bold">{item.price}</span>
            <span
              className={`text-sm font-bold ${item.isUp ? "text-green-400" : "text-red-400"
                }`}
            >
              {item.change}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default MarketStats;
