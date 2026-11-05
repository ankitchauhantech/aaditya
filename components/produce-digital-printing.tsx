"use client";

import Link from "next/link";
import { ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";

export function ProduceDigitalPrinting() {
  const features = [
    {
      id: 1,
      title: "Soft Clothes & Flex",
      subtitle: "Comfortable breathable cotton wear & heavy GSM Star Flex.",
      icon: (
        <svg viewBox="0 0 54 54" className="w-12 h-12 shrink-0 drop-shadow-sm">
          <defs>
            <linearGradient id="softClothesGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fbbf24" />
              <stop offset="100%" stopColor="#f59e0b" />
            </linearGradient>
            <linearGradient id="pressHeadGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#818cf8" />
              <stop offset="100%" stopColor="#6366f1" />
            </linearGradient>
          </defs>
          {/* Heat Press / Textile Plotter Machine Icon (Matching user screenshot) */}
          <rect x="6" y="24" width="42" height="20" rx="4" fill="url(#softClothesGrad)" stroke="#d97706" strokeWidth="1.5" />
          <rect x="10" y="28" width="34" height="12" rx="2" fill="#ffffff" />
          <line x1="14" y1="34" x2="40" y2="34" stroke="#d97706" strokeWidth="2" strokeDasharray="3 2" />
          {/* Top Press Arm & Handle */}
          <path d="M12 24 L12 14 C12 11 16 9 20 9 L34 9 C38 9 42 11 42 14 L42 24" fill="none" stroke="#6366f1" strokeWidth="3" strokeLinecap="round" />
          <circle cx="27" cy="9" r="4" fill="#a855f7" />
        </svg>
      ),
    },
    {
      id: 2,
      title: "Best Designs",
      subtitle: "Free graphic layout proofing & 100+ creative templates.",
      icon: (
        <svg viewBox="0 0 54 54" className="w-12 h-12 shrink-0 drop-shadow-sm">
          <defs>
            <linearGradient id="designMonGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#38bdf8" />
              <stop offset="100%" stopColor="#0284c7" />
            </linearGradient>
          </defs>
          {/* Desktop Monitor with Vector Graphic Art (Matching user screenshot) */}
          <rect x="8" y="10" width="38" height="28" rx="4" fill="#ffffff" stroke="#0284c7" strokeWidth="2" />
          <rect x="12" y="14" width="30" height="20" rx="2" fill="url(#designMonGrad)" />
          {/* Vector Star & Canvas Tools */}
          <circle cx="22" cy="24" r="5" fill="#facc15" />
          <polygon points="34,16 38,22 30,22" fill="#f43f5e" />
          {/* Stand */}
          <rect x="24" y="38" width="6" height="6" fill="#475569" />
          <rect x="18" y="44" width="18" height="3" rx="1.5" fill="#334155" />
        </svg>
      ),
    },
    {
      id: 3,
      title: "Best Quality Fabric",
      subtitle: "Tear-proof waterproof media with durable color retention.",
      icon: (
        <svg viewBox="0 0 54 54" className="w-12 h-12 shrink-0 drop-shadow-sm">
          <defs>
            <linearGradient id="fabricRollGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#1d4ed8" />
            </linearGradient>
          </defs>
          {/* Roll Plotter with Quality Guarantee Shield (Matching user screenshot) */}
          <rect x="8" y="16" width="38" height="18" rx="4" fill="url(#fabricRollGrad)" />
          <circle cx="15" cy="25" r="4" fill="#60a5fa" />
          <line x1="22" y1="25" x2="40" y2="25" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
          {/* Gold Guarantee Seal on Bottom Left */}
          <circle cx="38" cy="36" r="10" fill="#fbbf24" stroke="#d97706" strokeWidth="1.5" />
          <circle cx="38" cy="36" r="7" fill="#f59e0b" />
          <path d="M35 36 L37 38 L41 34" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        </svg>
      ),
    },
    {
      id: 4,
      title: "Weather Clothing & Flex",
      subtitle: "Sun-resistant UV coating that won't fade or crack in rain.",
      icon: (
        <svg viewBox="0 0 54 54" className="w-12 h-12 shrink-0 drop-shadow-sm">
          <defs>
            <linearGradient id="weatherGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ec4899" />
              <stop offset="100%" stopColor="#be185d" />
            </linearGradient>
          </defs>
          {/* Protective Weather-Shield Media Unit (Matching user screenshot) */}
          <rect x="10" y="12" width="34" height="32" rx="5" fill="#fdf2f8" stroke="#db2777" strokeWidth="2" />
          <rect x="14" y="16" width="26" height="14" rx="2" fill="url(#weatherGrad)" />
          {/* Weather symbols: sun and rain */}
          <circle cx="20" cy="37" r="3" fill="#f59e0b" />
          <path d="M28 35 L28 40 M34 35 L34 40" stroke="#0284c7" strokeWidth="2" strokeLinecap="round" />
        </svg>
      ),
    },
  ];

  return (
    <section className="relative overflow-hidden bg-white py-20 px-5 sm:px-10 lg:px-16 border-t border-purple-100/70">
      {/* Soft Ambient Background Blooms */}
      <div className="absolute top-1/4 left-10 w-96 h-96 rounded-full bg-purple-100/50 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-blue-100/50 blur-2xl pointer-events-none" />

      <div className="mx-auto max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* LEFT COLUMN: BADI BULKY HEAVY INDUSTRIAL PRINTER MACHINE WITH LIVE PRINTING ANIMATION */}
          <div className="lg:col-span-6 relative flex items-center justify-center">
            <div className="relative w-full max-w-xl group">
              
              {/* Outer Glow Halo */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-purple-200/50 via-sky-200/50 to-pink-200/50 blur-2xl -z-10 animate-pulse-glow" />

              {/* Floating Live Status Pill (Top) */}
              <div className="absolute -top-4 left-6 z-20 bg-white/95 backdrop-blur-md px-4 py-2 rounded-2xl shadow-xl border border-purple-200 flex items-center gap-2.5 animate-float-slow">
                <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-ping" />
                <span className="text-xs font-black text-gray-950 uppercase tracking-wider">
                  HIGH-SPEED INDUSTRIAL PLOTTER
                </span>
                <span className="text-[10px] bg-purple-100 text-purple-700 font-bold px-2 py-0.5 rounded-md">
                  120 m²/hr
                </span>
              </div>

              {/* Floating Color Accuracy Badge (Bottom) */}
              <div className="absolute -bottom-4 right-6 z-20 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-xl border border-blue-200 flex items-center gap-2.5 animate-float-reverse">
                <div className="flex -space-x-1">
                  <span className="w-3.5 h-3.5 rounded-full bg-cyan-400 border border-white" />
                  <span className="w-3.5 h-3.5 rounded-full bg-pink-500 border border-white" />
                  <span className="w-3.5 h-3.5 rounded-full bg-yellow-400 border border-white" />
                  <span className="w-3.5 h-3.5 rounded-full bg-gray-950 border border-white" />
                </div>
                <div className="text-left">
                  <div className="text-[11px] font-black text-gray-900 leading-tight">
                    UV & Eco-Solvent Inks
                  </div>
                  <div className="text-[9px] font-bold text-gray-500">
                    True CMYK 1440 DPI Output
                  </div>
                </div>
              </div>

              {/* Main Machine Stage Card */}
              <div className="relative rounded-3xl bg-gradient-to-b from-gray-50/90 via-white to-purple-50/40 p-5 sm:p-7 border border-gray-200/80 shadow-2xl backdrop-blur-sm overflow-hidden">
                
                {/* SVG: BADI BULKY HEAVY INDUSTRIAL WIDE-FORMAT PRINTER */}
                <svg
                  viewBox="0 0 640 450"
                  className="w-full h-auto drop-shadow-lg"
                >
                  <defs>
                    {/* Metallic Machine Gradients */}
                    <linearGradient id="bodyChassis" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#334155" />
                      <stop offset="40%" stopColor="#1e293b" />
                      <stop offset="100%" stopColor="#0f172a" />
                    </linearGradient>

                    <linearGradient id="silverBar" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#94a3b8" />
                      <stop offset="50%" stopColor="#f8fafc" />
                      <stop offset="100%" stopColor="#64748b" />
                    </linearGradient>

                    <linearGradient id="liveFlexBanner" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#06b6d4" />
                      <stop offset="25%" stopColor="#3b82f6" />
                      <stop offset="55%" stopColor="#8b5cf6" />
                      <stop offset="85%" stopColor="#ec4899" />
                      <stop offset="100%" stopColor="#f59e0b" />
                    </linearGradient>

                    <linearGradient id="laserLaser" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#00f5ff" stopOpacity="0" />
                      <stop offset="30%" stopColor="#00f5ff" stopOpacity="0.8" />
                      <stop offset="50%" stopColor="#ffffff" stopOpacity="1" />
                      <stop offset="70%" stopColor="#00f5ff" stopOpacity="0.8" />
                      <stop offset="100%" stopColor="#00f5ff" stopOpacity="0" />
                    </linearGradient>

                    {/* Bulk CMYK Tank Gradients */}
                    <linearGradient id="tankCyan" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#38bdf8" />
                      <stop offset="100%" stopColor="#0284c7" />
                    </linearGradient>
                    <linearGradient id="tankMagenta" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#f43f5e" />
                      <stop offset="100%" stopColor="#be123c" />
                    </linearGradient>
                    <linearGradient id="tankYellow" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#fde047" />
                      <stop offset="100%" stopColor="#eab308" />
                    </linearGradient>
                    <linearGradient id="tankBlack" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#475569" />
                      <stop offset="100%" stopColor="#0f172a" />
                    </linearGradient>

                    <filter id="laserGlow" x="-20%" y="-20%" width="140%" height="140%">
                      <feGaussianBlur stdDeviation="3" result="blur" />
                      <feComposite in="SourceGraphic" in2="blur" operator="over" />
                    </filter>
                  </defs>

                  {/* 1. Heavy Industrial Machine Stand (Badi Bulky Legs) */}
                  <g id="stand">
                    {/* Left Heavy Column */}
                    <rect x="70" y="270" width="34" height="125" rx="4" fill="#1e293b" />
                    <rect x="80" y="270" width="14" height="125" fill="#334155" />
                    {/* Left Base Foot with Leveling Wheels */}
                    <polygon points="45,395 129,395 121,385 53,385" fill="#0f172a" />
                    <circle cx="56" cy="404" r="7" fill="#475569" />
                    <circle cx="118" cy="404" r="7" fill="#475569" />

                    {/* Right Heavy Column */}
                    <rect x="536" y="270" width="34" height="125" rx="4" fill="#1e293b" />
                    <rect x="546" y="270" width="14" height="125" fill="#334155" />
                    {/* Right Base Foot with Leveling Wheels */}
                    <polygon points="511,395 595,395 587,385 519,385" fill="#0f172a" />
                    <circle cx="522" cy="404" r="7" fill="#475569" />
                    <circle cx="584" cy="404" r="7" fill="#475569" />

                    {/* Horizontal Heavy Crossbar Support */}
                    <rect x="104" y="335" width="432" height="16" fill="#334155" />
                    <rect x="104" y="340" width="432" height="6" fill="#64748b" />

                    {/* Lower Motorized Take-up Reel for Printed Flex Roll */}
                    <rect x="130" y="360" width="380" height="14" rx="7" fill="url(#silverBar)" />
                    <circle cx="130" cy="367" r="16" fill="#1e293b" stroke="#64748b" strokeWidth="2" />
                    <circle cx="510" cy="367" r="16" fill="#1e293b" stroke="#64748b" strokeWidth="2" />
                  </g>

                  {/* 2. Top Feed Roll & CMYK Continuous Bulk Ink System */}
                  <g id="top-feed">
                    {/* Raw Flex Roll on Top */}
                    <rect x="130" y="70" width="380" height="30" rx="8" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="2" />
                    <circle cx="130" cy="85" r="20" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="2" />
                    <circle cx="510" cy="85" r="20" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="2" />

                    {/* CMYK 4 Bulk Ink Bottles with Visible Liquid Levels */}
                    {/* Cyan Tank */}
                    <rect x="440" y="25" width="18" height="38" rx="3" fill="#f1f5f9" stroke="#94a3b8" strokeWidth="1.5" />
                    <rect x="442" y="34" width="14" height="27" rx="2" fill="url(#tankCyan)" />
                    <rect x="446" y="18" width="6" height="7" fill="#0284c7" />

                    {/* Magenta Tank */}
                    <rect x="463" y="25" width="18" height="38" rx="3" fill="#f1f5f9" stroke="#94a3b8" strokeWidth="1.5" />
                    <rect x="465" y="31" width="14" height="30" rx="2" fill="url(#tankMagenta)" />
                    <rect x="469" y="18" width="6" height="7" fill="#be123c" />

                    {/* Yellow Tank */}
                    <rect x="486" y="25" width="18" height="38" rx="3" fill="#f1f5f9" stroke="#94a3b8" strokeWidth="1.5" />
                    <rect x="488" y="29" width="14" height="32" rx="2" fill="url(#tankYellow)" />
                    <rect x="492" y="18" width="6" height="7" fill="#eab308" />

                    {/* Black (K) Tank */}
                    <rect x="509" y="25" width="18" height="38" rx="3" fill="#f1f5f9" stroke="#94a3b8" strokeWidth="1.5" />
                    <rect x="511" y="33" width="14" height="28" rx="2" fill="url(#tankBlack)" />
                    <rect x="515" y="18" width="6" height="7" fill="#0f172a" />

                    {/* Flexible Ink Supply Tubes Connecting to Printhead */}
                    <path d="M450 18 C450 6 360 8 320 120" stroke="#38bdf8" strokeWidth="1.5" fill="none" opacity="0.7" />
                    <path d="M473 18 C473 4 370 6 324 120" stroke="#f43f5e" strokeWidth="1.5" fill="none" opacity="0.7" />
                    <path d="M496 18 C496 2 380 4 328 120" stroke="#facc15" strokeWidth="1.5" fill="none" opacity="0.7" />
                  </g>

                  {/* 3. Main Bulky Chassis (Heavy Main Body of Printer) */}
                  <g id="main-body">
                    {/* Main Curved Steel Housing */}
                    <rect x="50" y="100" width="540" height="150" rx="14" fill="url(#bodyChassis)" stroke="#475569" strokeWidth="3" />
                    
                    {/* Front Viewing Window / Tinted Glass Hood */}
                    <rect x="120" y="112" width="400" height="85" rx="6" fill="#0f172a" stroke="#334155" strokeWidth="2" />
                    <line x1="120" y1="125" x2="520" y2="125" stroke="#1e293b" strokeWidth="1.5" />

                    {/* Chrome Dual Carriage Rails across the bay */}
                    <rect x="124" y="132" width="392" height="8" rx="3" fill="url(#silverBar)" />
                    <rect x="124" y="152" width="392" height="8" rx="3" fill="url(#silverBar)" />

                    {/* Platen / Print Bed with Vacuum Holes */}
                    <rect x="120" y="196" width="400" height="30" fill="#1e293b" />
                    <line x1="120" y1="202" x2="520" y2="202" stroke="#475569" strokeWidth="1" strokeDasharray="6 4" />
                    <line x1="120" y1="214" x2="520" y2="214" stroke="#475569" strokeWidth="1" strokeDasharray="6 4" />

                    {/* Left Heavy Motor Cover with Brand Logo Stripe */}
                    <rect x="54" y="104" width="62" height="142" rx="10" fill="#1e293b" />
                    <rect x="62" y="135" width="46" height="6" rx="3" fill="#2563eb" />
                    <circle cx="85" cy="190" r="12" fill="#0f172a" stroke="#3b82f6" strokeWidth="2" />
                    <circle cx="85" cy="190" r="5" fill="#38bdf8" />

                    {/* Right Control Console & Touchscreen Display */}
                    <rect x="524" y="104" width="62" height="142" rx="10" fill="#1e293b" />
                    
                    {/* Full Color LCD Touchscreen */}
                    <rect x="530" y="118" width="50" height="38" rx="4" fill="#0284c7" stroke="#38bdf8" strokeWidth="1.5" />
                    <text x="555" y="132" fill="#ffffff" fontSize="8" fontWeight="bold" textAnchor="middle">PRINTING</text>
                    <text x="555" y="142" fill="#fef08a" fontSize="7" fontWeight="bold" textAnchor="middle">1440 DPI</text>
                    <text x="555" y="151" fill="#a7f3d0" fontSize="7" fontWeight="bold" textAnchor="middle">98% INK</text>
                    
                    {/* Emergency Stop Button & Status LEDs */}
                    <circle cx="542" cy="174" r="6" fill="#ef4444" stroke="#ffffff" strokeWidth="1.5" />
                    <circle cx="560" cy="174" r="4" fill="#22c55e" className="animate-ping" />
                    <circle cx="572" cy="174" r="3" fill="#facc15" />
                  </g>

                  {/* 4. LIVE PRINTING ACTION: Banner Coming Out & Animated Moving Printhead */}
                  <g id="live-print-action">
                    {/* Continuous Printed Wide Banner Rolling Down out of the machine */}
                    <path
                      d="M140 226 C140 270 148 310 160 350 C170 380 470 380 480 350 C492 310 500 270 500 226 Z"
                      fill="url(#liveFlexBanner)"
                      stroke="#cbd5e1"
                      strokeWidth="1.5"
                    />

                    {/* Printed Graphics on the Banner: Shop Branding, Sunset, Waves & Typography */}
                    <g opacity="0.95">
                      {/* Sun Graphic */}
                      <circle cx="320" cy="300" r="28" fill="#ffffff" opacity="0.85" />
                      <circle cx="320" cy="300" r="22" fill="#fde047" />
                      {/* Stylized Waves on Banner */}
                      <path d="M165 330 Q240 290 320 330 T475 330" stroke="#ffffff" strokeWidth="4" fill="none" opacity="0.9" />
                      <path d="M175 348 Q250 310 320 348 T465 348" stroke="#38bdf8" strokeWidth="5" fill="none" />
                      {/* Text simulation on banner */}
                      <rect x="220" y="270" width="200" height="12" rx="3" fill="#ffffff" opacity="0.9" />
                      <rect x="250" y="286" width="140" height="7" rx="2" fill="#ffffff" opacity="0.7" />
                    </g>

                    {/* Animated UV / Laser Light Line across the printing output */}
                    <g className="animate-scanline">
                      <rect x="140" y="228" width="360" height="6" fill="url(#laserLaser)" filter="url(#laserGlow)" />
                    </g>

                    {/* ANIMATED PRINTHEAD CARRIAGE (Moves Left & Right while spraying ink) */}
                    <g className="animate-printhead">
                      {/* The Printhead Block */}
                      <rect x="210" y="126" width="70" height="48" rx="5" fill="#f8fafc" stroke="#2563eb" strokeWidth="2.5" />
                      <rect x="216" y="132" width="58" height="14" rx="2" fill="#1e293b" />
                      {/* Dual UV Curing LED Lamps on sides of Printhead */}
                      <rect x="206" y="136" width="6" height="26" rx="2" fill="#00f5ff" />
                      <rect x="278" y="136" width="6" height="26" rx="2" fill="#00f5ff" />
                      {/* Status indicator on head */}
                      <circle cx="230" cy="158" r="3" fill="#22c55e" />
                      <circle cx="240" cy="158" r="3" fill="#38bdf8" />
                      <circle cx="250" cy="158" r="3" fill="#f43f5e" />
                      <circle cx="260" cy="158" r="3" fill="#eab308" />
                      {/* Laser beam down from nozzle */}
                      <polygon points="230,174 260,174 270,224 220,224" fill="#00f5ff" opacity="0.3" filter="url(#laserGlow)" />
                    </g>
                  </g>
                </svg>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: HEADING, SUBTITLE, 4 FEATURE CARDS & PURPLE BUTTON */}
          <div className="lg:col-span-6 space-y-6 text-left">
            {/* Top Pill Badge (Exact match to screenshot) */}
            <div className="inline-block">
              <span className="px-4 py-1.5 rounded-full bg-pink-100 text-[#d92383] font-black text-xs uppercase tracking-wider border border-pink-200 shadow-2xs">
                WHY CHOOSE US
              </span>
            </div>

            {/* Main Headline (Exact match to screenshot) */}
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-black text-gray-950 tracking-tight leading-[1.18]">
              Produce Digital Printing With Business Growing
            </h2>

            {/* Description Paragraph */}
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed font-normal">
              High-definition digital printing powers modern branding. Whether you need vibrant shop hoardings, promotional custom apparel, event backdrops, or product packaging — our advanced heavy-duty printing infrastructure guarantees crisp detail and speedy turnaround.
            </p>

            {/* 4 Feature Points (2x2 Grid - Exact match to screenshot) */}
            <div className="grid sm:grid-cols-2 gap-5 pt-3">
              {features.map((item) => (
                <div
                  key={item.id}
                  className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-gray-50/70 hover:bg-purple-50/50 border border-gray-100 hover:border-purple-200 transition-all duration-300 group"
                >
                  <div className="transform group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-base font-extrabold text-gray-950 tracking-tight group-hover:text-[#7c3aed] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                      {item.subtitle}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Purple CTA Button: ABOUT US (Exact match to screenshot) */}
            <div className="pt-4">
              <Link
                href="/about"
                className="inline-flex items-center justify-center bg-[#7c3aed] hover:bg-[#6d28d9] text-white font-black text-sm tracking-wider uppercase px-8 py-3.5 rounded shadow-lg shadow-purple-500/25 transition-all hover:scale-105 active:scale-95 cursor-pointer"
              >
                ABOUT US
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

