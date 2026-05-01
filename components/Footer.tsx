"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ShieldCheck, Mail, Phone, MapPin, Globe, Users, ArrowRight, Send, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-600 pt-24 pb-12 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        {/* Top Part: Branding & Newsletter */}
        <div className="grid lg:grid-cols-2 gap-20 mb-24 items-start">
          <div>
            <div className="flex items-center gap-3 mb-8">
              <Image
                src="/wealthlogo.webp"
                alt="WealthPlus Logo"
                width={180}
                height={45}
                className="h-12 w-auto object-contain"
              />
            </div>
            <p className="text-gray-500 text-lg leading-relaxed max-w-md mb-10">
              Institutional-grade wealth management platform designed for the modern investor. Secure, transparent, and expert-led.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="w-12 h-12 rounded-lg bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all">
                <Share2 className="w-5 h-5" />
              </Link>
              <Link href="#" className="w-12 h-12 rounded-lg bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all">
                <Globe className="w-5 h-5" />
              </Link>
              <Link href="#" className="w-12 h-12 rounded-lg bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all">
                <Send className="w-5 h-5" />
              </Link>
              <Link href="#" className="w-12 h-12 rounded-lg bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all">
                <Globe className="w-5 h-5" />
              </Link>
            </div>
          </div>

          <div className="bg-secondary p-10 rounded-lg border border-primary/10">
            <h4 className="text-2xl font-bold mb-4 text-gray-900">Stay ahead of the curve.</h4>
            <p className="text-gray-600 mb-8">Get weekly market insights and strategy updates directly in your inbox.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Input className="bg-white border-gray-200 text-gray-900 h-14 rounded-lg px-6 focus:ring-primary" placeholder="Email address" />
              <Button className="bg-primary hover:bg-primary/90 text-white h-14 px-8 rounded-lg font-bold">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Middle Part: Links */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-24 border-t border-gray-100 pt-24">
          <div>
            <h5 className="text-lg font-bold mb-8 text-gray-900">Strategies</h5>
            <ul className="space-y-4">
              {["Dividend Aristocrats", "Growth Opportunities", "Global Tech", "Balanced Portfolio", "Tax Optimized"].map((item) => (
                <li key={item}><Link href="#" className="text-gray-500 hover:text-primary transition-colors">{item}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h5 className="text-lg font-bold mb-8 text-gray-900">Resources</h5>
            <ul className="space-y-4">
              {["Masterclasses", "Knowledge Center", "Market Analysis", "Research Reports", "FAQ"].map((item) => (
                <li key={item}><Link href="#" className="text-gray-500 hover:text-primary transition-colors">{item}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h5 className="text-lg font-bold mb-8 text-gray-900">Company</h5>
            <ul className="space-y-4">
              {["About Us", "Our Philosophy", "Leadership", "Careers", "Press Kit"].map((item) => (
                <li key={item}><Link href="#" className="text-gray-500 hover:text-primary transition-colors">{item}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h5 className="text-lg font-bold mb-8 text-gray-900">Contact Us</h5>
            <ul className="space-y-6">
              <li className="flex items-start gap-4 text-gray-500">
                <MapPin className="w-6 h-6 text-primary shrink-0" />
                <span>Level 12, Financial District, <br />Mumbai, MH 400001</span>
              </li>
              <li className="flex items-center gap-4 text-gray-500">
                <Phone className="w-6 h-6 text-primary shrink-0" />
                <span>+91 1800 234 5678</span>
              </li>
              <li className="flex items-center gap-4 text-gray-500">
                <Mail className="w-6 h-6 text-primary shrink-0" />
                <span>support@wealthplus.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Part: Credits */}
        <div className="border-t border-gray-100 pt-12 flex flex-col md:flex-row justify-between items-center gap-8 text-gray-400 text-sm font-medium">
          <p>© 2026 WealthPlus Investment Services. All rights reserved.</p>
          <div className="flex gap-8">
            <Link href="#" className="hover:text-primary">Privacy Policy</Link>
            <Link href="#" className="hover:text-primary">Terms of Service</Link>
            <Link href="#" className="hover:text-primary">Disclosure</Link>
            <Link href="#" className="hover:text-primary">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
