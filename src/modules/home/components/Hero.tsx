"use client";

import { useEffect, useState, useRef } from "react";
import { AnimatePresence, m, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  TrendingUp,
  Shield,
  Users,
  Lock,
  Briefcase,
  BarChart2,
  Eye,
  Settings2,
  Brain,
  MousePointer2,
} from "lucide-react";
import Image from "next/image";

/* ── Exact banner feature data ── */
const FEATURES = [
  { icon: Briefcase, label: "One-Click Portfolio Rebalancing", from: "#1d4ed8", to: "#1e3a8a", ring: "rgba(29,78,216,0.4)" },
  { icon: BarChart2, label: "One-Click Execution via Zerodha", from: "#16a34a", to: "#14532d", ring: "rgba(22,163,74,0.4)" },
  { icon: Eye, label: "Zero Human Error, Full Transparency", from: "#0284c7", to: "#0369a1", ring: "rgba(2,132,199,0.4)" },
  { icon: Settings2, label: "Bridge the Advice Execution Gap Instanly", from: "#ea580c", to: "#9a3412", ring: "rgba(234,88,12,0.4)" },
  { icon: Brain, label: "Sophisticated Insights, Effortless Execution", from: "#0d9488", to: "#0f766e", ring: "rgba(13,148,136,0.4)" },
  { icon: MousePointer2, label: "One-Click Execution for Advisory Recommendations", from: "#78716c", to: "#44403c", ring: "rgba(120,113,108,0.4)" },
];

const START_DEG = 195;
const ICON_HALF = 32;

const tooltipStyle = (deg: number, isMob: boolean): React.CSSProperties => {
  const d = ((deg % 360) + 360) % 360;
  if (isMob) {
    const isRightSide = d < 90 || d > 270;
    if (isRightSide) {
      return { right: "calc(100% + 8px)", top: "50%", transform: "translateY(-50%)" };
    }
    return { left: "calc(100% + 8px)", top: "50%", transform: "translateY(-50%)" };
  }
  if (d >= 315 || d < 45) return { left: "calc(100% + 12px)", top: "50%", transform: "translateY(-50%)" };
  if (d >= 45 && d < 135) return { top: "calc(100% + 12px)", left: "50%", transform: "translateX(-50%)" };
  if (d >= 135 && d < 225) return { right: "calc(100% + 12px)", top: "50%", transform: "translateY(-50%)" };
  return { bottom: "calc(100% + 12px)", left: "50%", transform: "translateX(-50%)" };
};


const Hero = () => {
  const [active, setActive] = useState(0);
  const [mounted, setMounted] = useState(false);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef);

  useEffect(() => { setMounted(true); }, []);
  useEffect(() => {
    if (!isInView) return;
    const id = setInterval(() => setActive((p) => (p + 1) % FEATURES.length), 2800);
    return () => clearInterval(id);
  }, [isInView]);

  /* ── Orbit size ── */
  const isMob = mounted ? window.innerWidth < 768 : false;
  const orbit = isMob ? 80 : 165;
  const cSize = isMob ? 300 : 460;

  const nodes = FEATURES.map((f, i) => {
    const deg = START_DEG + (i / FEATURES.length) * 360;
    const rad = (deg * Math.PI) / 180;
    return { ...f, x: Math.cos(rad) * orbit, y: Math.sin(rad) * orbit, deg };
  });

  return (
    <div
      ref={containerRef}
      className="
relative
min-h-screen
overflow-hidden

bg-[radial-gradient(circle_at_bottom_right,rgba(14,203,241,0.30)_0%,transparent_55%)]
"
    >
      <div className="mt-20 md:mt-24" />
      {/* SEBI Registration Badge - Absolute positioned to top right of the section */}
      <div className="absolute top-6 right-5 sm:right-6 hidden lg:inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-primary/8 text-primary text-sm font-bold border border-primary/20 shadow-sm z-50">
        <m.span
          className="w-2 h-2 rounded-full bg-primary"
          animate={{ scale: [1, 1.5, 1], opacity: [1, 0.4, 1] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        />
        <TrendingUp className="w-4 h-4" />
        SEBI REGI No. INA000021474
      </div>
      {/* Subtle clean radial glows for depth (white-focused) */}
      <div className="absolute -top-48 -right-32 w-[600px] h-[600px] rounded-full pointer-events-none blur-[160px] opacity-20"
        style={{ background: "radial-gradient(circle,rgba(56,189,248,0.08),transparent 70%)" }} />

      <section className="relative max-w-7xl mx-auto px-5 sm:px-6 pt-8 pb-10 md:pt-12 md:pb-16">


        <div className="grid lg:grid-cols-2 gap-10 lg:gap-6 items-center">

          {/* ══ LEFT: Rich headline + content ══ */}
          <m.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: "easeOut" }}
            className="flex flex-col"
          >
            {/* Animated live badge */}
            <div className="inline-flex items-center gap-2.5 self-start px-4 py-2 rounded-full bg-primary/8 text-primary text-sm font-bold mb-6 border border-primary/20 shadow-sm">
              <m.span
                className="w-2 h-2 rounded-full bg-primary"
                animate={{ scale: [1, 1.5, 1], opacity: [1, 0.4, 1] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
              />
              <TrendingUp className="w-4 h-4" />
              Institutional-Grade Investment Platform
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-8">
              Wealth + Advisers, <br />
              <span className="text-primary">Fiduciary </span> Advisor.
            </h1>

            <p className="text-xl text-gray-600 mb-10 max-w-xl leading-relaxed">
              We empower individuals with professional-grade wealth management tools, expert-led strategies, and institutional security. Start your journey today.
            </p>

            {/* <p className="text-lg text-gray-500 mb-8 max-w-lg leading-relaxed px-1">
              We empower individuals with professional-grade wealth management
              tools, expert-led strategies, and institutional-level security.
            </p> */}

            {/* CTA row */}
            {/* <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Button
                className="h-12 md:h-14 px-8 rounded-xl text-base font-bold text-white shadow-lg shadow-primary/25 relative overflow-hidden group border-0"
                style={{ background: "linear-gradient(135deg,#1d4ed8,#0891b2)" }}
              >
                <m.span
                  className="absolute inset-0 bg-white/10"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                />
                Explore Strategies <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                variant="outline"
                className="h-12 md:h-14 px-8 rounded-xl border-gray-200 text-gray-700 hover:bg-gray-50 text-base font-bold"
              >
                View Portfolio
              </Button>
            </div> */}

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button className="h-14 px-8 bg-primary hover:bg-primary/90 text-white rounded-lg text-lg font-bold shadow-lg shadow-primary/20">
                Explore Strategies <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="outline" className="h-14 px-8 rounded-lg border-gray-200 text-gray-700 hover:bg-gray-50 text-lg font-bold">
                View Portfolio
              </Button>
            </div>

            {/* Stats strip */}
            {/* <div className="flex justify-between gap-2 md:gap-6 mb-6 pb-6 border-b border-gray-100">
              {[
                { value: "₹500Cr+", label: "Assets Managed" },
                { value: "10K+", label: "Clients Served" },
                { value: "15+", label: "Years of Trust" },
              ].map((s, i) => (
                <div key={i} className={`flex flex-col ${i > 0 ? "pl-3 md:pl-6 border-l border-gray-100" : ""}`}>
                  <span className="text-xl md:text-2xl font-bold text-gray-900">{s.value}</span>
                  <span className="text-[10px] md:text-xs text-gray-400 font-medium mt-0.5 whitespace-nowrap">{s.label}</span>
                </div>
              ))}
            </div> */}

            {/* Trust badges */}
            <div className="flex flex-wrap gap-x-6 gap-y-3">
              {[
                { icon: <Shield className="w-4 h-4" />, text: "SEBI Registered" },
                { icon: <Lock className="w-4 h-4" />, text: "Bank Grade Security" },
                { icon: <Users className="w-4 h-4" />, text: "10k+ Investors" },
              ].map((b, i) => (
                <div key={i} className="flex items-center gap-2 text-gray-400 text-sm font-medium">
                  <span className="text-primary">{b.icon}</span>
                  {b.text}
                </div>
              ))}
            </div>
          </m.div>

          {/* ══ RIGHT: Compact Orbital + Person ══ */}
          <m.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.85, delay: 0.15, ease: "easeOut" }}
            className="flex items-center justify-center py-12 lg:py-8 relative"
          >
            {/* Dot mesh texture */}
            <div className="absolute inset-y-0 right-0 w-1/2 pointer-events-none overflow-hidden opacity-[0.045]">
              <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="heroMesh" x="0" y="0" width="28" height="28" patternUnits="userSpaceOnUse">
                    <circle cx="2" cy="2" r="1.8" fill="#1d4ed8" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#heroMesh)" />
              </svg>
            </div>

            {/* Cyan curved arrow (banner style) */}
            <svg
              className="absolute pointer-events-none z-10"
              style={{ left: -40, top: "10%", width: 140, height: 320, opacity: 0.55 }}
              viewBox="0 0 140 320"
              fill="none"
            >
              <defs>
                <marker id="cyanArrow" markerWidth="10" markerHeight="10" refX="9" refY="5" orient="auto">
                  <path d="M0 0 L10 5 L0 10 Z" fill="#22d3ee" />
                </marker>
              </defs>
              <m.path
                d="M 20 300 Q 10 160 120 20"
                stroke="#22d3ee"
                strokeWidth="3"
                fill="none"
                markerEnd="url(#cyanArrow)"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1.4, delay: 0.6, ease: "easeOut" }}
              />
            </svg>

            <div
              className="relative flex items-center justify-center"
              style={{ width: cSize || 400, height: cSize || 400 }}
            >
              {/* Orbit rings — cyan tint */}
              <m.div
                className="absolute inset-0 rounded-full"
                style={{ border: "1.5px solid rgba(34,211,238,0.22)" }}
                animate={{ rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              />
              <m.div
                className="absolute rounded-full"
                style={{ inset: "-6%", border: "1px solid rgba(34,211,238,0.06)" }}
                animate={{ rotate: -360 }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
              />
              {/* Dashed orbit ring */}
              <div
                className="absolute rounded-full pointer-events-none"
                style={{
                  width: orbit * 2 + ICON_HALF * 2,
                  height: orbit * 2 + ICON_HALF * 2,
                  border: "1.5px dashed rgba(34,211,238,0.12)",
                }}
              />

              {/* Conic sweep — cyan family */}
              <m.div
                className="absolute inset-0 rounded-full"
                style={{
                  background:
                    "conic-gradient(from 0deg,rgba(34,211,238,0.06),rgba(6,182,212,0.05),rgba(20,184,166,0.04),rgba(34,211,238,0.06))",
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
              />

              {/* Connection lines */}
              <svg className="absolute inset-0 pointer-events-none" width="100%" height="100%">
                <defs>
                  <linearGradient id="heroLG" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="rgba(34,211,238,0.55)" />
                    <stop offset="100%" stopColor="rgba(34,211,238,0)" />
                  </linearGradient>
                </defs>
                {nodes.map((n, i) => {
                  const sz = cSize || 400;
                  const ex = 50 + (n.x / sz) * 100;
                  const ey = 50 + (n.y / sz) * 100;
                  return (
                    <m.line
                      key={i}
                      x1="50%" y1="50%"
                      x2={`${ex}%`} y2={`${ey}%`}
                      stroke="url(#heroLG)"
                      strokeWidth={active === i ? 2 : 1}
                      strokeDasharray="5 4"
                      animate={{ opacity: active === i ? 0.7 : 0.12 }}
                      transition={{ duration: 0.5 }}
                    />
                  );
                })}
              </svg>

              {/* Feature nodes */}
              {nodes.map((n, i) => {
                const Icon = n.icon;
                const isActive = active === i;
                return (
                  <m.div
                    key={i}
                    className="absolute"
                    style={{
                      left: "50%", top: "50%",
                      marginLeft: -ICON_HALF, marginTop: -ICON_HALF,
                      zIndex: isActive ? 50 : 10,
                    }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: isActive ? 1.12 : 1, x: n.x, y: n.y }}
                    transition={{ duration: 0.65, ease: [0.34, 1.26, 0.64, 1] }}
                    onMouseEnter={() => setActive(i)}
                  >
                    {isActive && (
                      <m.div
                        className="absolute inset-0 rounded-full blur-xl"
                        style={{ background: n.ring, scale: 1.5 }}
                        animate={{ opacity: [0.5, 0.9, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      />
                    )}

                    <m.div
                      className="relative w-16 h-16 rounded-full flex items-center justify-center shadow-2xl cursor-pointer"
                      style={{
                        background: `linear-gradient(145deg, ${n.from}, ${n.to})`,
                        boxShadow: isActive
                          ? `0 0 0 3px white, 0 0 0 5px ${n.ring}, 0 6px 28px ${n.ring}`
                          : "0 4px 16px rgba(0,0,0,0.15)",
                      }}
                      animate={isActive ? { scale: [1, 1.06, 1] } : { scale: 1 }}
                      transition={{ duration: 2.2, repeat: isActive ? Infinity : 0, ease: "easeInOut" }}
                    >
                      <Icon className="w-7 h-7 text-white drop-shadow-sm" />
                      {isActive && (
                        <m.span
                          className="absolute inset-0 rounded-full"
                          style={{ background: `linear-gradient(145deg, ${n.from}, ${n.to})` }}
                          animate={{ scale: [1, 2.2], opacity: [0.35, 0] }}
                          transition={{ duration: 1.6, repeat: Infinity, ease: "easeOut" }}
                        />
                      )}
                    </m.div>

                    {/* Label tooltip — LEFT on mobile, position-aware on desktop */}
                    <AnimatePresence>
                      {isActive && (
                        <m.div
                          className="absolute z-[200] pointer-events-none"
                          style={tooltipStyle(n.deg, isMob)}
                          initial={{ opacity: 0, scale: 0.8, y: 4 }}
                          animate={{ opacity: 1, scale: 1, y: 0 }}
                          exit={{ opacity: 0, scale: 0.8, y: 4 }}
                          transition={{ duration: 0.25, ease: "easeOut" }}
                        >
                          <div
                            className="rounded-xl overflow-hidden shadow-2xl"
                            style={{
                              minWidth: isMob ? 110 : 170,
                              maxWidth: isMob ? 140 : 220,
                              background: "rgba(10,30,74,0.92)",
                              border: "1px solid rgba(34,211,238,0.2)",
                              backdropFilter: "blur(12px)",
                            }}
                          >
                            <div className="h-1 w-full" style={{ background: `linear-gradient(90deg, ${n.from}, ${n.to})` }} />
                            <div className="px-3 py-2">
                              <p className="text-[10px] font-bold text-white leading-tight">{n.label}</p>
                            </div>
                          </div>
                        </m.div>
                      )}
                    </AnimatePresence>
                  </m.div>
                );
              })}




              {/* Center person */}
              <m.div
                className="relative z-20 flex items-center justify-center"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.9, ease: [0.34, 1.26, 0.64, 1] }}
              >
                {/* Cyan glow */}
                <m.div
                  className="absolute rounded-full blur-3xl"
                  style={{ width: 180, height: 180, background: "radial-gradient(circle,rgba(34,211,238,0.15),transparent 70%)" }}
                  animate={{ scale: [1, 1.15, 1], opacity: [0.6, 1, 0.6] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                />
                <m.div
                  className="absolute rounded-full"
                  style={{ width: 180, height: 180, border: "2px solid rgba(34,211,238,0.18)" }}
                  animate={{ scale: [1, 1.18, 1], opacity: [0.4, 0, 0.4] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                />
                <div className="absolute rounded-full" style={{ width: 158, height: 158, border: "2px solid rgba(34,211,238,0.10)" }} />

                <div
                  className="relative rounded-full overflow-hidden"
                  style={{
                    width: isMob ? 110 : 150,
                    height: isMob ? 110 : 150,
                    border: "3px solid rgba(34,211,238,0.35)",
                    boxShadow: "0 0 30px rgba(34,211,238,0.15), 0 4px 20px rgba(0,0,0,0.4)",
                  }}
                >
                  <Image
                    src="/centre-person.webp"
                    alt="Wealth Advisor"
                    fill
                    sizes="(max-width: 768px) 110px, 150px"
                    className="object-cover object-top"
                    priority
                  />
                </div>
              </m.div>

              {/* Progress dots — cyan */}
              <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 flex gap-2">
                {FEATURES.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    aria-label={`Feature ${i + 1}`}
                    className="h-1.5 rounded-full transition-all duration-300"
                    style={{
                      width: active === i ? 24 : 8,
                      background: active === i ? "#22d3ee" : "rgba(156,163,175,0.5)",
                    }}
                  />
                ))}
              </div>
            </div>
          </m.div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
