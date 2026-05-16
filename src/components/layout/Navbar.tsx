"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Menu, X } from "lucide-react";

interface NavbarProps {
  onToggleSidebar?: () => void;
  isSidebarOpen?: boolean;
}

const Navbar = ({ onToggleSidebar, isSidebarOpen }: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Investment Plans", href: "/#plans" },
    { name: "Expertise", href: "/#expertise" },
    { name: "Knowledge Center", href: "/#knowledge" },
    { name: "Masterclass", href: "/#masterclass" },
    { name: "MF Analyser", href: "/mf-analyser" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-[100] bg-white backdrop-blur-md border-b border-gray-100 py-2 md:py-2 shadow-sm transition-all duration-300`}
    >
      <div className="max-w-[1600px] mx-auto px-5 md:px-8 lg:px-10">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-4">
            {/* Sidebar Toggle for Dashboard - Visible only if prop is passed */}
            {onToggleSidebar && (
              <button 
                onClick={onToggleSidebar}
                className="lg:hidden p-2 -ml-2 text-gray-900 hover:bg-gray-50 rounded-xl transition-all"
              >
                {isSidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            )}
            
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/wealthlogo.webp"
                alt="WealthPlus Logo"
                width={160}
                height={40}
                className="h-10 w-auto object-contain"
                priority
              />
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-[12px] font-black uppercase tracking-widest transition-colors text-gray-500 hover:text-primary"
              >
                {link.name}
              </Link>
            ))}
            <div className="h-6 w-px bg-gray-100 mx-2" />
            <Button className="bg-primary hover:bg-primary/90 text-white rounded-xl px-6 font-black uppercase tracking-widest text-[10px] h-11 shadow-lg shadow-primary/25">
              Start Investing
            </Button>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-900"
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 py-6 px-6 space-y-6 shadow-2xl absolute top-full left-0 w-full animate-in slide-in-from-top-5 duration-300">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="block text-gray-600 font-black uppercase tracking-widest text-xs hover:text-primary"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Button className="w-full bg-primary hover:bg-primary/90 text-white rounded-xl h-12 font-black uppercase tracking-widest text-xs">
            Start Investing
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
