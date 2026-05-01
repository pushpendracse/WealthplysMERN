"use client";

import React from "react";
import { ArrowRight, Calendar, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";

const blogs = [
  {
    title: "The Future of Digital Investing in 2026",
    date: "May 10, 2026",
    category: "Market Trends",
    desc: "How AI and blockchain are reshaping the wealth management landscape for retail investors."
  },
  {
    title: "Understanding High-Yield Dividend Strategies",
    date: "May 08, 2026",
    category: "Education",
    desc: "Why focus on dividend growth is often better than chasing the highest absolute yield."
  },
  {
    title: "Managing Risk in a Volatile Global Economy",
    date: "May 05, 2026",
    category: "Strategy",
    desc: "Key techniques to protect your capital while maintaining exposure to growth opportunities."
  },
];

const BlogSection = () => {
  return (
    <section className="py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-end justify-between gap-12 mb-20">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              Latest Insights from <br />
              <span className="text-primary">WealthPlus</span> Labs.
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Stay updated with the latest market trends, investment strategies, and financial news.
            </p>
          </div>
          <Button variant="outline" className="border-gray-200 text-gray-700 hover:bg-gray-100 rounded-lg h-12 px-8 font-bold">
            View All Articles
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {blogs.map((blog, i) => (
            <div key={i} className="bg-white rounded-lg overflow-hidden group border border-gray-100 hover:shadow-xl transition-all duration-300">
              {/* Image Placeholder */}
              <div className="aspect-[16/10] bg-primary/5 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                <Tag className="w-12 h-12 text-primary/20" />
              </div>

              <div className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="px-3 py-1 bg-secondary text-primary text-[10px] font-bold uppercase tracking-wider rounded">
                    {blog.category}
                  </div>
                  <div className="flex items-center gap-1 text-[10px] text-gray-400 font-bold uppercase tracking-wider">
                    <Calendar className="w-3 h-3" /> {blog.date}
                  </div>
                </div>

                <h4 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors leading-tight">
                  {blog.title}
                </h4>
                <p className="text-gray-500 text-sm leading-relaxed mb-8 line-clamp-3">
                  {blog.desc}
                </p>

                <Button variant="ghost" className="p-0 text-primary font-bold hover:bg-transparent group-hover:gap-2 transition-all">
                  Read Full Article <ArrowRight className="ml-1 w-4 h-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
