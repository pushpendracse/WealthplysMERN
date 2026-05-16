"use client";

import React, { useState } from 'react';
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { m } from "framer-motion";
import { Button } from "@/components/ui/button";
import { 
  Mail, 
  Lock, 
  ArrowRight, 
  ShieldCheck, 
  Zap,
  Eye,
  EyeOff,
  Fingerprint
} from "lucide-react";
import Image from "next/image";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-[#010409] selection:bg-primary/30 text-white overflow-hidden relative">
      <Navbar />

      {/* Unique Abstract Background (Different from Landing Page) */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Dynamic Glowing Lines / "Digital Rain" style but subtle */}
        <div className="absolute inset-0 opacity-[0.05]" 
          style={{ 
            backgroundImage: `linear-gradient(rgba(34,211,238,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,0.1) 1px, transparent 1px)`,
            backgroundSize: '40px 40px' 
          }} 
        />
        
        {/* Floating "Luminous" Orbs */}
        <m.div 
          animate={{ 
            y: [0, -40, 0],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px]"
        />
        <m.div 
          animate={{ 
            y: [0, 50, 0],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[140px]"
        />

        {/* Abstract "Growth" Lines */}
        <svg className="absolute inset-0 w-full h-full opacity-20" preserveAspectRatio="none">
           <m.path 
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 3, ease: "easeInOut" }}
              d="M0,1000 C300,800 400,950 1000,700 S1600,800 2000,500" 
              stroke="rgba(34,211,238,0.3)" 
              strokeWidth="1" 
              fill="none" 
           />
        </svg>
      </div>

      <main className="flex-grow flex items-center justify-center py-20 px-4 relative z-10">
        <div className="max-w-[450px] w-full">
          
          {/* Brand Identity / Logo Focus */}
          <m.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center mb-10"
          >
            <div className="w-16 h-16 rounded-[1.5rem] bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center shadow-2xl shadow-primary/40 mb-6 group cursor-pointer">
               <Fingerprint className="w-8 h-8 text-white group-hover:scale-110 transition-transform" />
            </div>
            <h1 className="text-3xl font-black text-white tracking-tight uppercase">Wealth Access</h1>
            <div className="h-0.5 w-12 bg-primary mt-2 rounded-full" />
          </m.div>

          {/* New "Suspended Glass" Card Style */}
          <m.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative"
          >
            {/* Inner glow effect */}
            <div className="absolute -inset-[1px] bg-gradient-to-b from-primary/30 to-transparent rounded-[2.5rem] pointer-events-none" />
            
            <div className="bg-[#0d1117]/60 backdrop-blur-[30px] rounded-[2.5rem] p-10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/5">
               
               <div className="space-y-6">
                  {/* Email Field with Floating Label style */}
                  <div className="space-y-1.5">
                    <div className="relative">
                       <input 
                        type="email" 
                        required
                        className="peer w-full h-14 bg-white/[0.03] border-b border-white/10 rounded-t-xl px-4 pt-4 text-sm font-bold text-white placeholder:text-transparent focus:outline-none focus:border-primary transition-all"
                        placeholder="Email"
                        id="email"
                       />
                       <label 
                        htmlFor="email"
                        className="absolute left-4 top-4 text-[10px] font-black text-gray-500 uppercase tracking-widest transition-all peer-focus:-top-2 peer-focus:text-primary peer-[:not(:placeholder-shown)]:-top-2"
                       >
                         Corporate Email
                       </label>
                    </div>
                  </div>

                  {/* Password Field with unique toggle button */}
                  <div className="space-y-1.5">
                    <div className="relative">
                       <input 
                        type={showPassword ? "text" : "password"} 
                        required
                        className="peer w-full h-14 bg-white/[0.03] border-b border-white/10 rounded-t-xl px-4 pt-4 text-sm font-bold text-white placeholder:text-transparent focus:outline-none focus:border-primary transition-all"
                        placeholder="Password"
                        id="password"
                       />
                       <label 
                        htmlFor="password"
                        className="absolute left-4 top-4 text-[10px] font-black text-gray-500 uppercase tracking-widest transition-all peer-focus:-top-2 peer-focus:text-primary peer-[:not(:placeholder-shown)]:-top-2"
                       >
                         Security Key
                       </label>
                       <button 
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-4 bottom-4 text-gray-500 hover:text-white transition-colors"
                       >
                         {showPassword ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                       </button>
                    </div>
                  </div>

                  <div className="flex justify-between items-center px-1">
                    <div className="flex items-center gap-2">
                       <input type="checkbox" id="remember" className="w-3 h-3 rounded bg-white/5 border-white/10 accent-primary" />
                       <label htmlFor="remember" className="text-[9px] font-black text-gray-500 uppercase tracking-widest cursor-pointer">Stay Logged In</label>
                    </div>
                    <button className="text-[9px] font-black text-primary uppercase tracking-widest hover:text-white transition-colors">Recovery</button>
                  </div>

                  <Button className="w-full h-14 bg-white text-black hover:bg-primary hover:text-white rounded-2xl font-black uppercase tracking-[0.2em] text-[10px] shadow-2xl transition-all active:scale-[0.98] mt-4 flex items-center justify-center gap-3">
                    Unlock Dashboard <ArrowRight className="w-4 h-4" />
                  </Button>

                  <div className="text-center pt-4">
                     <p className="text-[9px] font-black text-gray-600 uppercase tracking-[0.2em] mb-4">Secured by Institutional Encryption</p>
                     <div className="flex justify-center gap-6 opacity-40 grayscale hover:grayscale-0 transition-all">
                        <Zap className="w-4 h-4 text-orange-400" />
                        <ShieldCheck className="w-4 h-4 text-blue-400" />
                        <ArrowRight className="w-4 h-4 text-emerald-400" />
                     </div>
                  </div>
               </div>
            </div>

            {/* Bottom Meta Links */}
            <m.div 
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ delay: 0.5 }}
               className="mt-8 flex justify-center gap-8 text-[9px] font-black text-gray-600 uppercase tracking-[0.15em]"
            >
               <button className="hover:text-primary transition-colors">Compliance</button>
               <button className="hover:text-primary transition-colors">Privacy</button>
               <button className="hover:text-primary transition-colors">Contact Support</button>
            </m.div>
          </m.div>

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default LoginPage;
