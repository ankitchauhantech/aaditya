"use client";

import Link from "next/link";
import { ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";

export function WhyChooseUs() {
  const steps = [
    {
      id: "01",
      title: "Connect Your Store",
      subtitle:
        "Connect your shop, send your banner dimensions, or share your custom design file directly on WhatsApp.",
      glowColor: "group-hover:shadow-amber-500/20 group-hover:border-amber-300",
      accentBg: "bg-amber-50 text-amber-600 border-amber-200",
      iconSvg: (
        <svg viewBox="0 0 72 72" className="w-14 h-14 drop-shadow-md">
          <defs>
            <linearGradient id="puzzleGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fbbf24" />
              <stop offset="100%" stopColor="#f59e0b" />
            </linearGradient>
            <linearGradient id="puzzleGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f43f5e" />
              <stop offset="100%" stopColor="#e11d48" />
            </linearGradient>
            <linearGradient id="puzzleGrad3" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#38bdf8" />
              <stop offset="100%" stopColor="#0284c7" />
            </linearGradient>
            <linearGradient id="puzzleGrad4" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#34d399" />
              <stop offset="100%" stopColor="#059669" />
            </linearGradient>
            <filter id="shadow3d" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="4" stdDeviation="3" floodOpacity="0.18" />
            </filter>
          </defs>
          <g filter="url(#shadow3d)">
            {/* Top-Left Piece */}
            <path
              d="M18 16 C18 12 24 12 24 16 L32 16 C34 16 36 18 36 20 L36 26 C39 26 39 32 36 32 L36 36 L22 36 C20 36 18 34 18 32 L18 26 C14 26 14 20 18 20 Z"
              fill="url(#puzzleGrad1)"
            />
            {/* Top-Right Piece */}
            <path
              d="M36 20 C36 18 38 16 40 16 L48 16 C52 16 52 20 48 20 L48 26 C52 26 52 32 48 32 L48 36 L40 36 C38 36 36 34 36 32 L36 26 C33 26 33 20 36 20 Z"
              fill="url(#puzzleGrad2)"
            />
            {/* Bottom-Left Piece */}
            <path
              d="M18 36 C18 34 20 36 22 36 L36 36 L36 44 C36 47 33 47 33 50 L33 52 C33 54 31 56 29 56 L20 56 C16 56 16 52 20 52 L20 44 C16 44 16 38 20 38 L18 38 Z"
              fill="url(#puzzleGrad3)"
            />
            {/* Bottom-Right Piece */}
            <path
              d="M36 36 L48 36 C50 36 52 38 52 40 L52 48 C52 52 48 52 48 56 L40 56 C38 56 36 54 36 52 Z"
              fill="url(#puzzleGrad4)"
            />
            {/* Central Glossy Checkmark Badge */}
            <circle cx="36" cy="36" r="11" fill="#ffffff" />
            <circle cx="36" cy="36" r="9" fill="#10b981" />
            <path
              d="M32 36 L35 39 L41 33"
              stroke="#ffffff"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
          </g>
        </svg>
      ),
    },
    {
      id: "02",
      title: "Customer Places Order",
      subtitle:
        "Choose materials, approve digital CMYK proof sample, and get guaranteed best wholesale pricing.",
      glowColor: "group-hover:shadow-blue-500/20 group-hover:border-blue-300",
      accentBg: "bg-blue-50 text-blue-600 border-blue-200",
      iconSvg: (
        <svg viewBox="0 0 72 72" className="w-14 h-14 drop-shadow-md">
          <defs>
            <linearGradient id="wheelCyan" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#38bdf8" />
              <stop offset="100%" stopColor="#0284c7" />
            </linearGradient>
            <linearGradient id="wheelMagenta" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f43f5e" />
              <stop offset="100%" stopColor="#be123c" />
            </linearGradient>
            <linearGradient id="wheelYellow" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#facc15" />
              <stop offset="100%" stopColor="#eab308" />
            </linearGradient>
            <linearGradient id="wheelGreen" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#34d399" />
              <stop offset="100%" stopColor="#059669" />
            </linearGradient>
          </defs>
          <g filter="url(#shadow3d)">
            {/* Color Palette Ring */}
            <circle cx="34" cy="36" r="22" fill="#ffffff" />
            <path d="M34 16 A20 20 0 0 1 54 36 L34 36 Z" fill="url(#wheelCyan)" />
            <path d="M54 36 A20 20 0 0 1 34 56 L34 36 Z" fill="url(#wheelMagenta)" />
            <path d="M34 56 A20 20 0 0 1 14 36 L34 36 Z" fill="url(#wheelYellow)" />
            <path d="M14 36 A20 20 0 0 1 34 16 L34 36 Z" fill="url(#wheelGreen)" />
            <circle cx="34" cy="36" r="9" fill="#ffffff" />
            <circle cx="34" cy="36" r="5" fill="#1e293b" />
            {/* 3D Stylus Pen angled across */}
            <g transform="translate(26, 12) rotate(42)">
              <rect x="0" y="0" width="8" height="26" rx="3" fill="#334155" />
              <rect x="1" y="2" width="6" height="6" rx="1.5" fill="#f59e0b" />
              <polygon points="0,26 8,26 4,34" fill="#fbbf24" />
              <circle cx="4" cy="34" r="1.5" fill="#0f172a" />
            </g>
          </g>
        </svg>
      ),
    },
    {
      id: "03",
      title: "Printnow Fulfills Order",
      subtitle:
        "High-speed Star Flex or precision offset machines print your job with vibrant 1440 DPI fidelity.",
      glowColor: "group-hover:shadow-amber-500/20 group-hover:border-amber-300",
      accentBg: "bg-amber-50 text-amber-600 border-amber-200",
      iconSvg: (
        <svg viewBox="0 0 72 72" className="w-14 h-14 drop-shadow-md">
          <defs>
            <linearGradient id="boxGradFront" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f59e0b" />
              <stop offset="100%" stopColor="#d97706" />
            </linearGradient>
            <linearGradient id="boxGradTop" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fbbf24" />
              <stop offset="100%" stopColor="#f59e0b" />
            </linearGradient>
            <linearGradient id="boxGradSide" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#b45309" />
              <stop offset="100%" stopColor="#92400e" />
            </linearGradient>
          </defs>
          <g filter="url(#shadow3d)">
            {/* 3D Isometric Cardboard Box */}
            {/* Top Face */}
            <polygon points="36,16 54,25 36,34 18,25" fill="url(#boxGradTop)" />
            {/* Left Face */}
            <polygon points="18,25 36,34 36,54 18,45" fill="url(#boxGradFront)" />
            {/* Right Face */}
            <polygon points="36,34 54,25 54,45 36,54" fill="url(#boxGradSide)" />
            {/* Packaging Tape */}
            <polygon points="33,18 39,21 39,48 33,45" fill="#fde68a" opacity="0.85" />
            {/* Green Seal / Checkmark Badge */}
            <circle cx="50" cy="22" r="9" fill="#10b981" />
            <path
              d="M47 22 L49 24 L53 20"
              stroke="#ffffff"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
          </g>
        </svg>
      ),
    },
    {
      id: "04",
      title: "Order Ships To You",
      subtitle:
        "Safely packed in weather-proof rolls with lightning fast courier delivery or instant shop pickup.",
      glowColor: "group-hover:shadow-emerald-500/20 group-hover:border-emerald-300",
      accentBg: "bg-emerald-50 text-emerald-600 border-emerald-200",
      iconSvg: (
        <svg viewBox="0 0 72 72" className="w-14 h-14 drop-shadow-md">
          <defs>
            <linearGradient id="handGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#38bdf8" />
              <stop offset="100%" stopColor="#0284c7" />
            </linearGradient>
            <linearGradient id="giftGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#10b981" />
              <stop offset="100%" stopColor="#059669" />
            </linearGradient>
          </defs>
          <g filter="url(#shadow3d)">
            {/* Green Parcel Box */}
            <rect x="24" y="20" width="24" height="24" rx="4" fill="url(#giftGrad)" />
            {/* White Ribbon */}
            <rect x="33" y="20" width="6" height="24" fill="#ffffff" opacity="0.9" />
            <rect x="24" y="29" width="24" height="6" fill="#ffffff" opacity="0.9" />
            {/* Ribbon Bow on top */}
            <ellipse cx="33" cy="18" rx="4" ry="2.5" fill="#facc15" />
            <ellipse cx="39" cy="18" rx="4" ry="2.5" fill="#facc15" />
            {/* Supporting Hands under the box */}
            <path
              d="M14 44 C14 38 20 38 28 42 L36 44 L44 42 C52 38 58 38 58 44 C58 50 50 56 36 56 C22 56 14 50 14 44 Z"
              fill="url(#handGrad)"
            />
          </g>
        </svg>
      ),
    },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#fbfaff] via-[#f6f4fe] to-[#edf2fb] py-20 px-5 sm:px-10 lg:px-16 border-t border-purple-100/60">
      {/* Decorative ambient background glows */}
      <div className="absolute top-12 right-1/4 w-[480px] h-[480px] rounded-full bg-gradient-to-tr from-purple-300/30 via-indigo-200/25 to-pink-300/30 blur-3xl pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-16 left-12 w-[420px] h-[420px] rounded-full bg-gradient-to-tr from-blue-300/25 to-teal-200/25 blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl relative z-10">
        {/* Top Split Layout: Heading & Description (Left) + Ultra HD Studio Visual (Right) */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Heading, Subtitle & Interactive Action */}
          <div className="lg:col-span-6 space-y-6 text-left">
            {/* Top Pill Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-100/90 border border-purple-200 text-[#9333ea] font-black text-xs uppercase tracking-wider shadow-xs">
              <Sparkles size={14} className="text-purple-600 animate-spin-slow" />
              <span>LET&apos;S GET PRINTING</span>
            </div>

            {/* Main Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-black text-gray-950 tracking-tight leading-[1.15]">
              Reasons To Get Printing Started With Us
            </h2>

            {/* Explanatory Paragraph */}
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed font-normal">
              Whether you need massive outdoor highway hoardings, star flex banners, customized
              wedding stationery, or retail stickers — our advanced high-speed printers deliver
              unbeatable sharpness, vivid colors, and lightning-fast same day delivery.
            </p>

            {/* Feature Check List */}
            <div className="grid sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2.5 text-sm font-semibold text-gray-800 bg-white/70 backdrop-blur-xs px-3.5 py-2.5 rounded-xl border border-purple-100/80 shadow-2xs">
                <CheckCircle2 size={18} className="text-emerald-500 shrink-0" />
                <span>1440 DPI Ultra HD Inks</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm font-semibold text-gray-800 bg-white/70 backdrop-blur-xs px-3.5 py-2.5 rounded-xl border border-purple-100/80 shadow-2xs">
                <CheckCircle2 size={18} className="text-emerald-500 shrink-0" />
                <span>Heavy GSM All-Weather Flex</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm font-semibold text-gray-800 bg-white/70 backdrop-blur-xs px-3.5 py-2.5 rounded-xl border border-purple-100/80 shadow-2xs">
                <CheckCircle2 size={18} className="text-emerald-500 shrink-0" />
                <span>Iron Frame & Installation</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm font-semibold text-gray-800 bg-white/70 backdrop-blur-xs px-3.5 py-2.5 rounded-xl border border-purple-100/80 shadow-2xs">
                <CheckCircle2 size={18} className="text-emerald-500 shrink-0" />
                <span>Fast WhatsApp Approval</span>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-2 flex items-center gap-4">
              <Link
                href="/calculator"
                className="inline-flex items-center gap-2.5 bg-gradient-to-r from-[#7c3aed] to-[#9333ea] hover:from-[#6d28d9] hover:to-[#7e22ce] text-white font-extrabold text-sm px-6 py-3.5 rounded-xl shadow-lg shadow-purple-500/25 transition-all hover:scale-105 active:scale-95 group"
              >
                <span>CALCULATE YOUR PRINT PRICE</span>
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
            </div>
          </div>

          {/* Right Column: Ultra HD Animated Printing Press Studio Visual */}
          <div className="lg:col-span-6 relative flex items-center justify-center">
            <div className="relative w-full max-w-xl group">
              {/* Animated Rotating Gradient Aura */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-purple-300/40 via-sky-200/40 to-pink-300/40 blur-2xl -z-10 animate-pulse-glow" />

              {/* Floating Badge 1 (Top-Left): Color Accuracy */}
              <div className="absolute -top-3 left-4 z-20 bg-white/90 backdrop-blur-md px-3.5 py-2 rounded-2xl shadow-xl border border-purple-100 flex items-center gap-2.5 animate-float-slow">
                <div className="w-7 h-7 rounded-full bg-gradient-to-r from-amber-400 to-pink-500 flex items-center justify-center text-white text-xs font-black shadow-xs">
                  ⚡
                </div>
                <div>
                  <div className="text-[11px] font-black text-gray-950 leading-tight">
                    1440 DPI Precision
                  </div>
                  <div className="text-[9px] font-bold text-gray-600">
                    100% CMYK Color Match
                  </div>
                </div>
              </div>

              {/* Floating Badge 2 (Bottom-Right): Fast Dispatch */}
              <div className="absolute -bottom-4 right-4 z-20 bg-white/90 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-xl border border-emerald-100 flex items-center gap-2.5 animate-float-reverse">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
                <div>
                  <div className="text-[11px] font-black text-gray-950 leading-tight">
                    Same-Day Rush Dispatch
                  </div>
                  <div className="text-[9px] font-bold text-emerald-600">
                    Noorpur & Bijnor Express
                  </div>
                </div>
              </div>

              {/* Main HD Studio Illustration Container */}
              <div className="relative rounded-3xl overflow-hidden bg-gradient-to-b from-white/95 via-purple-50/50 to-blue-50/50 p-4 sm:p-6 border border-white/90 shadow-2xl backdrop-blur-sm">
                {/* DEDICATED HEAVY INDUSTRIAL PRINTER ACTIVELY PRINTING WITH LIVE ANIMATION */}
                <svg
                  viewBox="0 0 620 420"
                  className="w-full h-auto drop-shadow-lg transition-transform duration-500 group-hover:scale-[1.01]"
                >
                  <defs>
                    <linearGradient id="whyChassisGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#1e293b" />
                      <stop offset="35%" stopColor="#0f172a" />
                      <stop offset="100%" stopColor="#020617" />
                    </linearGradient>

                    <linearGradient id="whyRailGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#64748b" />
                      <stop offset="50%" stopColor="#f8fafc" />
                      <stop offset="100%" stopColor="#475569" />
                    </linearGradient>

                    <linearGradient id="whyBannerFlow" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#06b6d4" />
                      <stop offset="20%" stopColor="#3b82f6" />
                      <stop offset="45%" stopColor="#8b5cf6" />
                      <stop offset="70%" stopColor="#ec4899" />
                      <stop offset="100%" stopColor="#f59e0b" />
                    </linearGradient>

                    <linearGradient id="whyLaserBeam" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#38bdf8" stopOpacity="0" />
                      <stop offset="25%" stopColor="#00f5ff" stopOpacity="0.9" />
                      <stop offset="50%" stopColor="#ffffff" stopOpacity="1" />
                      <stop offset="75%" stopColor="#00f5ff" stopOpacity="0.9" />
                      <stop offset="100%" stopColor="#38bdf8" stopOpacity="0" />
                    </linearGradient>

                    <filter id="whyGlowFilter" x="-10%" y="-10%" width="120%" height="120%">
                      <feDropShadow dx="0" dy="8" stdDeviation="8" floodColor="#7c3aed" floodOpacity="0.18" />
                    </filter>
                  </defs>

                  {/* 1. Heavy Base Legs & Machine Foundation */}
                  <g id="why-stand">
                    {/* Left Heavy Support Column */}
                    <rect x="65" y="240" width="32" height="135" rx="5" fill="#1e293b" />
                    <rect x="74" y="240" width="14" height="135" fill="#334155" />
                    {/* Left Base Foot with Leveling Wheels */}
                    <polygon points="40,375 120,375 112,365 48,365" fill="#0f172a" />
                    <circle cx="52" cy="384" r="7" fill="#475569" />
                    <circle cx="108" cy="384" r="7" fill="#475569" />

                    {/* Right Heavy Support Column */}
                    <rect x="523" y="240" width="32" height="135" rx="5" fill="#1e293b" />
                    <rect x="532" y="240" width="14" height="135" fill="#334155" />
                    {/* Right Base Foot with Leveling Wheels */}
                    <polygon points="498,375 578,375 570,365 506,365" fill="#0f172a" />
                    <circle cx="510" cy="384" r="7" fill="#475569" />
                    <circle cx="566" cy="384" r="7" fill="#475569" />

                    {/* Lower Reinforcement Strut */}
                    <rect x="97" y="320" width="426" height="14" fill="#334155" />
                    <rect x="97" y="324" width="426" height="4" fill="#64748b" />

                    {/* Lower Motorized Take-up Reel Bar */}
                    <rect x="110" y="342" width="400" height="14" rx="7" fill="url(#whyRailGrad)" />
                    <circle cx="110" cy="349" r="16" fill="#1e293b" stroke="#64748b" strokeWidth="2" />
                    <circle cx="510" cy="349" r="16" fill="#1e293b" stroke="#64748b" strokeWidth="2" />
                  </g>

                  {/* 2. Top Unprinted Media Roll */}
                  <g id="why-top-roll">
                    <rect x="115" y="45" width="390" height="30" rx="8" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="2" />
                    <circle cx="115" cy="60" r="18" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="2" />
                    <circle cx="505" cy="60" r="18" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="2" />

                    {/* CMYK Bulk Ink Cartridge Slots on Top Right */}
                    <rect x="420" y="20" width="16" height="25" rx="2" fill="#0284c7" />
                    <rect x="440" y="20" width="16" height="25" rx="2" fill="#be123c" />
                    <rect x="460" y="20" width="16" height="25" rx="2" fill="#eab308" />
                    <rect x="480" y="20" width="16" height="25" rx="2" fill="#0f172a" />
                  </g>

                  {/* 3. Main Bulky Printer Chassis */}
                  <g id="why-body" filter="url(#whyGlowFilter)">
                    {/* Heavy Steel Main Enclosure */}
                    <rect x="45" y="70" width="530" height="150" rx="14" fill="url(#whyChassisGrad)" stroke="#475569" strokeWidth="3" />

                    {/* Left Heavy Motor Cover with Blue Accent */}
                    <rect x="50" y="74" width="60" height="142" rx="10" fill="#1e293b" />
                    <rect x="58" y="105" width="44" height="6" rx="3" fill="#3b82f6" />
                    <circle cx="80" cy="160" r="12" fill="#0f172a" stroke="#3b82f6" strokeWidth="2" />
                    <circle cx="80" cy="160" r="5" fill="#38bdf8" />

                    {/* Right Control Pod with Digital Interface */}
                    <rect x="510" y="74" width="60" height="142" rx="10" fill="#1e293b" />
                    <rect x="518" y="88" width="44" height="38" rx="4" fill="#0284c7" stroke="#38bdf8" strokeWidth="1.5" />
                    <text x="540" y="102" fill="#ffffff" fontSize="8" fontWeight="bold" textAnchor="middle">PRINTING</text>
                    <text x="540" y="112" fill="#fef08a" fontSize="7" fontWeight="bold" textAnchor="middle">1440 DPI</text>
                    <text x="540" y="121" fill="#a7f3d0" fontSize="7" fontWeight="bold" textAnchor="middle">ACTIVE</text>
                    
                    <circle cx="528" cy="145" r="5" fill="#ef4444" stroke="#ffffff" strokeWidth="1" />
                    <circle cx="544" cy="145" r="4" fill="#22c55e" className="animate-ping" />
                    <circle cx="556" cy="145" r="3" fill="#facc15" />

                    {/* Wide Center Viewing Bay */}
                    <rect x="110" y="82" width="400" height="85" rx="6" fill="#0b1120" stroke="#334155" strokeWidth="2" />
                    
                    {/* Chrome Dual Printhead Guide Rails */}
                    <rect x="114" y="102" width="392" height="8" rx="3" fill="url(#whyRailGrad)" />
                    <rect x="114" y="122" width="392" height="8" rx="3" fill="url(#whyRailGrad)" />

                    {/* Platen Printing Bed */}
                    <rect x="110" y="165" width="400" height="35" fill="#1e293b" />
                    <line x1="110" y1="172" x2="510" y2="172" stroke="#475569" strokeWidth="1" strokeDasharray="6 4" />
                    <line x1="110" y1="184" x2="510" y2="184" stroke="#475569" strokeWidth="1" strokeDasharray="6 4" />
                  </g>

                  {/* 4. LIVE PRINTING ACTION: Banner Rolling Out & Printhead Sweeping */}
                  <g id="why-live-action">
                    {/* Continuous Printed Wide Banner Rolling Down */}
                    <path
                      d="M130 195 C130 240 138 280 150 325 C160 360 460 360 470 325 C482 280 490 240 490 195 Z"
                      fill="url(#whyBannerFlow)"
                      stroke="#cbd5e1"
                      strokeWidth="1.5"
                    />

                    {/* Printed Graphics on Banner: Shop Banner Visuals */}
                    <g opacity="0.95">
                      <circle cx="310" cy="275" r="26" fill="#ffffff" opacity="0.85" />
                      <circle cx="310" cy="275" r="20" fill="#fde047" />
                      {/* Banner Wave Lines */}
                      <path d="M150 305 Q230 265 310 305 T470 305" stroke="#ffffff" strokeWidth="4" fill="none" opacity="0.9" />
                      <path d="M160 322 Q240 285 310 322 T460 322" stroke="#38bdf8" strokeWidth="5" fill="none" />
                      {/* Text Mockup lines */}
                      <rect x="210" y="245" width="200" height="12" rx="3" fill="#ffffff" opacity="0.9" />
                      <rect x="240" y="261" width="140" height="7" rx="2" fill="#ffffff" opacity="0.7" />
                    </g>

                    {/* Animated UV Laser Line across the active printhead area */}
                    <g className="animate-scanline">
                      <rect x="130" y="196" width="360" height="5" fill="url(#whyLaserBeam)" />
                    </g>

                    {/* ACTIVE PRINTHEAD CARRIAGE (Sweeping back and forth across guide rails) */}
                    <g className="animate-printhead">
                      {/* Printhead Box */}
                      <rect x="190" y="96" width="75" height="50" rx="5" fill="#f8fafc" stroke="#2563eb" strokeWidth="2.5" />
                      <rect x="196" y="102" width="63" height="14" rx="2" fill="#1e293b" />
                      {/* UV Curing Lamps on flanks */}
                      <rect x="186" y="106" width="6" height="28" rx="2" fill="#00f5ff" />
                      <rect x="263" y="106" width="6" height="28" rx="2" fill="#00f5ff" />
                      {/* Status LEDs on head */}
                      <circle cx="210" cy="130" r="3" fill="#22c55e" />
                      <circle cx="220" cy="130" r="3" fill="#38bdf8" />
                      <circle cx="230" cy="130" r="3" fill="#f43f5e" />
                      <circle cx="240" cy="130" r="3" fill="#eab308" />
                      {/* Laser Spray Downward Cone */}
                      <polygon points="210,146 240,146 250,195 200,195" fill="#00f5ff" opacity="0.25" />
                    </g>
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Process Steps Row (1 Row of 4 Cards - Exact match to image with Ultra HD 3D styling) */}
        <div className="mt-20 pt-14 border-t border-purple-200/50 relative">
          {/* Subtle Desktop Connecting Dashed Track */}
          <div className="hidden lg:block absolute top-[102px] left-[12%] right-[12%] h-[2px] border-t-2 border-dashed border-purple-300/60 z-0 pointer-events-none" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 relative z-10 text-center">
            {steps.map((step) => (
              <div
                key={step.id}
                className="group flex flex-col items-center bg-white/80 hover:bg-white backdrop-blur-md p-6 rounded-3xl border border-white hover:border-purple-200 shadow-xl shadow-purple-900/5 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                {/* Top Step Number Badge */}
                <div className="mb-4">
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-xs font-black tracking-wider border ${step.accentBg}`}
                  >
                    STEP {step.id}
                  </span>
                </div>

                {/* Circular 3D Icon Badge with Glow & Hover Animation */}
                <div
                  className={`w-20 h-20 rounded-full bg-white shadow-xl flex items-center justify-center p-3 border-2 border-gray-100 transition-all duration-300 transform group-hover:scale-110 group-hover:rotate-3 ${step.glowColor}`}
                >
                  {step.iconSvg}
                </div>

                {/* Step Title */}
                <h3 className="text-base sm:text-lg font-black text-gray-950 tracking-tight mt-5 group-hover:text-[#7c3aed] transition-colors">
                  {step.title}
                </h3>

                {/* Step Subtitle / Description */}
                <p className="text-xs sm:text-[13px] text-gray-600 leading-relaxed font-normal mt-2 max-w-xs">
                  {step.subtitle}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
