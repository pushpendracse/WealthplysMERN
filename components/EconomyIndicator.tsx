"use client";

import React, { useRef } from "react";
import { m, useInView } from "framer-motion";

const marketData = [
  { symbol: "GDP Growth Rate", change: "7.8%" },
  { symbol: "Interest Rate", change: "+0.38%" },
  { symbol: "Inflation Rate", change: "-0.12%" },
  { symbol: "Unemployment Rate", change: "+1.24%" },
  { symbol: "Government Debt to GDP", change: "+2.51%"},
  { symbol: "Balance of Trade", change: "-0.05%" },
  { symbol: "Current Account to GDP", change: "+0.82%" },
  { symbol: "Nifty Bank", change: "-0.15%" },
];

const EconomyIndicator = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <div ref={ref} className="bg-[#000d21] border-y border-white/5 py-4 overflow-hidden">
      <m.div
        animate={isInView ? { x: ["0%", "-50%"] } : { x: "0%" }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
        className="flex whitespace-nowrap gap-12 min-w-max"
      >
        {[...marketData, ...marketData].map((item, i) => (
          <div key={i} className="flex items-center gap-3">
            <span className="text-white/60 text-sm font-bold uppercase tracking-wider">
              {item.symbol}
            </span>
            <span
              className={`text-sm font-bold ${item.change.startsWith("+") ? "text-green-400" : "text-red-400"}`}
            >
              {item.change}
            </span>
          </div>
        ))}
      </m.div>
    </div>
  );
};

export default EconomyIndicator;
