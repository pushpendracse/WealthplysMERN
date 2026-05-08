"use client";

import React from "react";
import { Book, FileText, Video, Mic, ArrowRight, ChevronRight, Bookmark } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";

const categories = [
  {
    title: "Financial Guides",
    type: "PDFs & Articles",
    icon: <Book className="w-8 h-8 text-primary" />,
    count: "45+ Resources"
  },
  {
    title: "Market Analysis",
    type: "Weekly Reports",
    icon: <FileText className="w-8 h-8 text-primary" />,
    count: "Weekly Updates"
  },
  {
    title: "Video Tutorials",
    type: "Step-by-step",
    icon: <Video className="w-8 h-8 text-primary" />,
    count: "120+ Videos"
  },
  {
    title: "Investment Podcasts",
    type: "Audio Insights",
    icon: <Mic className="w-8 h-8 text-primary" />,
    count: "Daily Episodes"
  },
];

const KnowledgeCenter = () => {
  return (
    <section id="knowledge" className="py-32 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-20">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              Invest in your <span className="text-primary">Mind</span>. <br />
              The Rest will Follow.
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Explore our comprehensive library of resources to build your financial literacy and stay ahead of the markets.
            </p>
          </div>
          <Button variant="outline" className="border-primary/10 text-primary hover:bg-secondary rounded-lg h-12 px-6 font-bold group">
            Browse All Resources <ChevronRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>

        <div className="relative">
          <Carousel
            opts={{
              align: "start",
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-6">
              {categories.map((cat, i) => (
                <CarouselItem key={i} className="pl-6 md:basis-1/2 lg:basis-1/4">
                  <div className="p-10 bg-white rounded-lg border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer h-full flex flex-col">
                    <div className="w-16 h-16 bg-gray-50 rounded-lg flex items-center justify-center mb-8 group-hover:bg-secondary transition-colors relative">
                      {cat.icon}
                      <Bookmark className="absolute top-[-4px] right-[-4px] w-4 h-4 text-primary/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>

                    <h4 className="text-xl font-bold text-gray-900 mb-2">{cat.title}</h4>
                    <p className="text-sm text-gray-500 mb-8 font-medium uppercase tracking-wider">{cat.type}</p>

                    <div className="mt-auto flex items-center justify-between">
                      <span className="text-xs font-bold text-primary bg-secondary px-3 py-1 rounded-full">{cat.count}</span>
                      <ArrowRight className="w-5 h-5 text-gray-300 group-hover:text-primary transition-colors" />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-start gap-3 mt-12">
              <CarouselPrevious className="static translate-y-0 rounded-lg w-12 h-12 border-gray-200 text-gray-500 hover:text-primary hover:border-primary" />
              <CarouselNext className="static translate-y-0 rounded-lg w-12 h-12 border-gray-200 text-gray-500 hover:bg-primary hover:text-white hover:border-primary transition-all" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default KnowledgeCenter;
