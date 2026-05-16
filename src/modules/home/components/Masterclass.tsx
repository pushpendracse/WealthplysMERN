"use client";

import React from "react";
import { Play, ArrowRight, Clock, User } from "lucide-react";
import { Button } from "@/components/ui/button";

const videos = [
  {
    title: "Wealth+ Masterclass: Introduction to Investing",
    duration: "12:45",
    instructor: "David Miller",
    category: "Basics"
  },
  {
    title: "Understanding Market Cycles & Volatility",
    duration: "18:20",
    instructor: "Sarah Chen",
    category: "Advanced"
  },
  {
    title: "Retirement Planning in Your 30s",
    duration: "15:10",
    instructor: "James Wilson",
    category: "Planning"
  },
];

const Masterclass = () => {
  return (
    <section
      id="masterclass"
      className="py-32 relative overflow-hidden bg-[#000814]"
      style={{
        backgroundImage: `
          radial-gradient(circle at center, rgba(0, 50, 100, 0.15) 0%, rgba(0, 8, 20, 1) 80%),
          linear-gradient(rgba(255, 255, 255, 0.18) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255, 255, 255, 0.18) 1px, transparent 1px)
        `,
        backgroundSize: "100% 100%, 50px 50px, 50px 50px"
      }}
    >
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-end justify-between gap-12 mb-20">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary rounded-lg text-xs font-bold uppercase tracking-widest mb-6 border border-primary/20">
              Knowledge is Wealth
            </div>
            <h2 className="text-white text-3xl md:text-5xl font-bold mb-8 leading-tight">
              Master the Markets with our <br />
              <span className="text-primary">Expert-Led</span> Masterclasses.
            </h2>
            <p className="text-xl text-white/60 leading-relaxed">
              Learn from the best in the industry. Free for all WealthPlus members.
            </p>
          </div>
          <Button className="bg-primary hover:bg-primary/90 text-white rounded-lg h-14 px-10 font-bold hidden md:flex items-center gap-2">
            Watch All Sessions <ArrowRight className="w-5 h-5" />
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {videos.map((video, i) => (
            <div key={i} className="group text-left">
              {/* Video Placeholder */}
              <div className="aspect-video bg-white/5 rounded-lg mb-8 relative overflow-hidden flex items-center justify-center border border-white/10 group-hover:border-primary/50 transition-all duration-300">
                <div className="w-16 h-16 bg-primary/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-primary/50 group-hover:scale-110 group-hover:bg-primary transition-all">
                  <Play className="w-8 h-8 text-white fill-white" />
                </div>

                {/* Overlay with info */}
                <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
                  <div className="px-2 py-1 bg-black/60 backdrop-blur rounded text-[10px] font-bold text-white flex items-center gap-1">
                    <Clock className="w-3 h-3" /> {video.duration}
                  </div>
                  <div className="px-2 py-1 bg-primary rounded text-[10px] font-bold text-white">
                    {video.category}
                  </div>
                </div>
              </div>

              <h4 className="text-white text-xl font-bold mb-4 group-hover:text-primary transition-colors">{video.title}</h4>
              <div className="flex items-center gap-2 text-white/40 text-sm">
                <User className="w-4 h-4" />
                <span>{video.instructor}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 md:hidden">
          <Button className="w-full bg-primary hover:bg-primary/90 text-white rounded-lg h-14 font-bold">
            Watch All Sessions
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Masterclass;
