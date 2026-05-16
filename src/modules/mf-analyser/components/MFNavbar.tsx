"use client";

import React from "react";
import Link from "next/link";
import {
  Home,
  Upload,
  Target,
  BookOpen,
  TrendingUp,
  UserCircle,
  LogOut,
  Users
} from "lucide-react";
import Image from "next/image";
import Navbar from "@/components/layout/Navbar";

const MFNavbar = () => {
  const navItems = [
    { name: "Home", href: "/", icon: Home },
    { name: "Upload", href: "/mf-analyser", icon: Upload },
    { name: "Goal Planner", href: "#", icon: Target },
    { name: "Methodology", href: "#", icon: BookOpen },
    { name: "Strategies", href: "#", icon: TrendingUp },
    { name: "Advisors", href: "#", icon: Users },
  ];

  return (
    <Navbar />
    // <nav className="w-full bg-white border-b border-gray-100 py-4 px-6 sticky top-0 z-50">
    //   <div className="max-w-7xl mx-auto flex items-center justify-between">
    //     <div className="flex items-center gap-8">
    //       <Link href="/" className="font-bold text-xl text-primary flex flex-col leading-tight">
    //         <span>AlphaLens</span>
    //         <span className="text-xs text-gray-400">MF</span>
    //       </Link>

    //       <div className="hidden lg:flex items-center gap-6">
    //         {navItems.map((item) => (
    //           <Link 
    //             key={item.name} 
    //             href={item.href}
    //             className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-primary transition-colors"
    //           >
    //             <item.icon className="w-4 h-4" />
    //             {item.name}
    //           </Link>
    //         ))}
    //       </div>
    //     </div>

    //     <div className="flex items-center gap-4">
    //       <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-50 border border-gray-100">
    //         <UserCircle className="w-5 h-5 text-gray-400" />
    //         <span className="text-sm font-medium text-gray-700">surendra.jauhari@gmail.com</span>
    //       </div>
    //       <button className="p-2 text-gray-400 hover:text-red-500 transition-colors">
    //         <LogOut className="w-5 h-5" />
    //       </button>
    //     </div>
    //   </div>
    // </nav>
  );
};

export default MFNavbar;
