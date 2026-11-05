"use client";

import Link from "next/link";

interface LogoProps {
  className?: string;
  variant?: "light" | "dark";
}

export function Logo({ className = "", variant = "dark" }: LogoProps) {
  const isDarkBg = variant === "light";

  return (
    <Link href="/" className={`inline-flex items-center gap-3 group select-none ${className}`}>
      {/* ANIMATED PRINTER MACHINE LOGO ICON */}
      <div className="relative w-11 h-11 shrink-0 flex items-center justify-center">
        {/* Animated Ambient Backlight Glow */}
        <div className="absolute inset-0 rounded-xl bg-gradient-to-tr from-[#00aeef]/40 via-[#ec008c]/40 to-[#ffd400]/40 blur-sm opacity-70 group-hover:opacity-100 transition-opacity" />

        {/* 3D Machine Badge Frame */}
        <svg
          viewBox="0 0 52 52"
          className="w-full h-full relative z-10 drop-shadow-md"
        >
          <defs>
            <linearGradient id="logoChassis" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#1e293b" />
              <stop offset="60%" stopColor="#0f172a" />
              <stop offset="100%" stopColor="#020617" />
            </linearGradient>

            <linearGradient id="logoBanner" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#00aeef" />
              <stop offset="35%" stopColor="#ec008c" />
              <stop offset="70%" stopColor="#ffd400" />
              <stop offset="100%" stopColor="#10b981" />
            </linearGradient>

            <linearGradient id="logoLaserBeam" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#00f5ff" stopOpacity="0" />
              <stop offset="50%" stopColor="#00f5ff" stopOpacity="1" />
              <stop offset="100%" stopColor="#00f5ff" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* Outer Rounded Container with subtle border */}
          <rect
            x="2"
            y="2"
            width="48"
            height="48"
            rx="12"
            fill="url(#logoChassis)"
            stroke="#334155"
            strokeWidth="1.5"
          />

          {/* Top 4 CMYK Mini Ink Tank Dots (Exact match to branding) */}
          <circle cx="15" cy="11" r="2.2" fill="#00aeef" />
          <circle cx="22" cy="11" r="2.2" fill="#ec008c" />
          <circle cx="29" cy="11" r="2.2" fill="#ffd400" />
          <circle cx="36" cy="11" r="2.2" fill="#14213d" stroke="#64748b" strokeWidth="0.8" />

          {/* Machine Body Slot & Printing Bay */}
          <rect x="8" y="17" width="36" height="15" rx="3" fill="#0f172a" stroke="#475569" strokeWidth="1" />
          {/* Chrome Carriage Guide Rail */}
          <line x1="11" y1="21" x2="41" y2="21" stroke="#94a3b8" strokeWidth="1.2" />

          {/* CONTINUOUS PRINTED FLEX BANNER FLOWING OUT */}
          <g>
            <path
              d="M13 25 C13 32 16 38 20 42 C24 45 28 45 32 42 C36 38 39 32 39 25 Z"
              fill="url(#logoBanner)"
              className="transform origin-top group-hover:scale-y-110 transition-transform duration-300"
            />
            {/* Banner Artwork Detail Wave Lines */}
            <path d="M15 34 Q26 29 37 34" stroke="#ffffff" strokeWidth="1.5" fill="none" opacity="0.9" />
            <path d="M17 38 Q26 33 35 38" stroke="#ffffff" strokeWidth="1.2" fill="none" opacity="0.75" />
          </g>

          {/* ANIMATED MOVING PRINTHEAD CARRIAGE */}
          <g className="animate-printhead">
            <rect x="18" y="19" width="8" height="5" rx="1.5" fill="#f8fafc" stroke="#2563eb" strokeWidth="0.8" />
            <circle cx="22" cy="21.5" r="1" fill="#00f5ff" />
          </g>

          {/* ANIMATED LASER SCAN BEAM */}
          <g className="animate-scanline">
            <line x1="13" y1="25" x2="39" y2="25" stroke="url(#logoLaserBeam)" strokeWidth="1.5" />
          </g>

          {/* GREEN GLOWING ACTIVE STATUS INDICATOR DOT (Bottom Right - Matching screenshot) */}
          <g>
            {/* Outer Ring */}
            <circle cx="41" cy="41" r="5" fill="#0f172a" stroke="#10b981" strokeWidth="1.5" />
            {/* Inner Live Green Core */}
            <circle cx="41" cy="41" r="3" fill="#10b981" className="animate-pulse" />
            <circle cx="41" cy="41" r="1.5" fill="#ffffff" />
          </g>
        </svg>
      </div>

      {/* LOGO TEXT (Matching user screenshot: SUMAN FLEX / PRINTERS & GLOW SIGNS) */}
      <div className="flex flex-col text-left">
        <div className="flex items-center gap-1 leading-none">
          <span
            className={`text-xl sm:text-[23px] font-black tracking-tight ${
              isDarkBg ? "text-white" : "text-gray-950"
            }`}
          >
            SUMAN FLEX
          </span>
        </div>
        <span
          className={`text-[9px] sm:text-[10px] uppercase font-extrabold tracking-[0.18em] leading-tight mt-1 ${
            isDarkBg ? "text-white/70" : "text-gray-500"
          }`}
        >
          PRINTERS &amp; GLOW SIGNS
        </span>
      </div>
    </Link>
  );
}

