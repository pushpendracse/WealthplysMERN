"use client";

import React from "react";
import { motion } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";

const testimonials = [
  {
    name: "Vikram Sethi",
    role: "Tech Entrepreneur",
    text: "WealthPlus transformed my approach to long-term investing. Their Dividend Aristocrat strategy is exactly what I needed for stable, passive income.",
    rating: 5,
  },
  {
    name: "Ananya Rao",
    role: "Senior Consultant",
    text: "The institutional-grade research and conflict-free advice set them apart. I finally feel like my wealth manager is actually on my side.",
    rating: 5,
  },
  {
    name: "Rahul Mehra",
    role: "Private Investor",
    text: "The masterclasses are worth the membership alone. Clear, actionable insights that helped me navigate the recent market volatility with confidence.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Success Stories</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">Hear from our community of investors who are building their future with WealthPlus.</p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <Quote className="absolute top-[-40px] left-[-40px] w-24 h-24 text-secondary opacity-50 -z-10" />

          <Carousel
            opts={{
              align: "center",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {testimonials.map((t, i) => (
                <CarouselItem key={i}>
                  <div className="p-4">
                    <div className="bg-gray-50 rounded-lg p-10 md:p-16 border border-gray-100 relative">
                      <div className="flex justify-center gap-1 mb-8">
                        {[...Array(t.rating)].map((_, j) => (
                          <Star key={j} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                        ))}
                      </div>

                      <p className="text-2xl md:text-3xl font-medium text-gray-900 mb-10 leading-relaxed italic">
                        "{t.text}"
                      </p>

                      <div>
                        <h4 className="text-xl font-bold text-primary">{t.name}</h4>
                        <p className="text-gray-500 font-medium">{t.role}</p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center gap-4 mt-12">
              <CarouselPrevious className="static translate-y-0 rounded-lg w-14 h-14 border-gray-200 text-gray-500 hover:bg-primary hover:text-white transition-all" />
              <CarouselNext className="static translate-y-0 rounded-lg w-14 h-14 border-gray-200 text-gray-500 hover:bg-primary hover:text-white transition-all" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
