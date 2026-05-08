"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const Navbar = () => {
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
    { name: "Investment Plans", href: "#plans" },
    { name: "Expertise", href: "#expertise" },
    { name: "Knowledge Center", href: "#knowledge" },
    { name: "Masterclass", href: "#masterclass" },
  ];

  return (
    <nav
      className="fixed top-0 w-full z-[100] bg-white/95 backdrop-blur-md border-b border-gray-100 py-3 md:py-4 shadow-sm"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-10">
        <div className="flex justify-between items-center h-16">
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

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium transition-colors text-gray-600 hover:text-primary"
              >
                {link.name}
              </Link>
            ))}
            <Button className="bg-primary hover:bg-primary/90 text-white rounded-lg px-6">
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
        <div className="md:hidden bg-white border-b border-gray-100 py-4 px-4 space-y-4 shadow-xl">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="block text-gray-600 font-medium hover:text-primary"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Button className="w-full bg-primary hover:bg-primary/90 text-white rounded-lg">
            Start Investing
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
