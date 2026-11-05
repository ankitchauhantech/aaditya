"use client";

import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import { SHOP } from "@/lib/data";
import { Logo } from "@/components/logo";

export function Footer() {
  return (
    <footer className="w-full mt-16 font-sans">
      {/* ====================================================================
          1. TOP CTA BANNER: "Ready to Create Some Custome Products?"
             WITH LIVE ANIMATED WORKFLOW STORY:
             Customer walks from left -> Sits/talks at counter with staff ->
             Staff walks to printer on right -> Printer starts live printing!
         ==================================================================== */}
      <div className="relative overflow-hidden bg-gradient-to-r from-[#8b5cf6] via-[#3b82f6] to-[#06b6d4] py-12 px-5 sm:px-10 lg:px-14 text-white shadow-xl">
        {/* Decorative Ambient Radial Glows */}
        <div className="absolute -top-20 -left-20 w-96 h-96 rounded-full bg-white/15 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 -right-20 w-96 h-96 rounded-full bg-cyan-300/20 blur-3xl pointer-events-none" />

        <div className="mx-auto max-w-7xl grid lg:grid-cols-12 gap-8 lg:gap-10 items-center relative z-10">
          
          {/* Left Column: Heading, Subtitle & White "CONTACT US" Button (Exact match to screenshot) */}
          <div className="lg:col-span-5 space-y-5 text-left">
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black tracking-tight leading-[1.18] text-white drop-shadow-md">
              Ready to Create Some <br className="hidden sm:inline" />
              Custome Products?
            </h2>

            <p className="text-white/90 text-sm sm:text-base leading-relaxed max-w-md font-normal">
              From large hoardings & flex banners to custom t-shirts, visiting cards, and promotional merchandise — we deliver top quality prints with express turnaround.
            </p>

            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-white hover:bg-gray-100 text-gray-950 font-black text-xs sm:text-sm tracking-wider uppercase px-8 py-3.5 rounded shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
              >
                CONTACT US
              </Link>
            </div>
          </div>

          {/* Right Column: Live Animated Workflow Story (Customer -> Counter -> Printer Action) */}
          <div className="lg:col-span-7 relative flex items-center justify-center">
            <div className="relative w-full max-w-2xl bg-white/10 backdrop-blur-md rounded-2xl p-3 sm:p-5 border border-white/20 shadow-2xl overflow-hidden">
              
              <svg
                viewBox="0 0 740 250"
                className="w-full h-auto drop-shadow-lg"
              >
                <defs>
                  {/* Gradients */}
                  <linearGradient id="footerFloor" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#ffffff" stopOpacity="0.2" />
                    <stop offset="50%" stopColor="#ffffff" stopOpacity="0.45" />
                    <stop offset="100%" stopColor="#ffffff" stopOpacity="0.2" />
                  </linearGradient>

                  <linearGradient id="footerPrinterBody" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#1e293b" />
                    <stop offset="50%" stopColor="#0f172a" />
                    <stop offset="100%" stopColor="#020617" />
                  </linearGradient>

                  <linearGradient id="footerOutputBanner" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#38bdf8" />
                    <stop offset="30%" stopColor="#a855f7" />
                    <stop offset="60%" stopColor="#ec4899" />
                    <stop offset="100%" stopColor="#f59e0b" />
                  </linearGradient>

                  <linearGradient id="footerLaserGlow" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#00f5ff" stopOpacity="0" />
                    <stop offset="50%" stopColor="#00f5ff" stopOpacity="1" />
                    <stop offset="100%" stopColor="#00f5ff" stopOpacity="0" />
                  </linearGradient>

                  <filter id="laserBeamFilter" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="2" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                  </filter>
                </defs>

                {/* Studio Floor Baseline */}
                <rect x="20" y="210" width="700" height="4" rx="2" fill="url(#footerFloor)" />
                <line x1="40" y1="210" x2="700" y2="210" stroke="#ffffff" strokeWidth="1" strokeOpacity="0.6" strokeDasharray="8 6" />

                {/* ==========================================
                    1. CENTER: COUNTER ORDER DESK & CHAIRS
                    ========================================== */}
                <g id="counter-station">
                  {/* Customer Waiting Chair (Left of desk) */}
                  <rect x="220" y="160" width="22" height="26" rx="4" fill="#ffffff" opacity="0.85" />
                  <rect x="228" y="186" width="5" height="24" fill="#cbd5e1" />
                  <rect x="222" y="208" width="18" height="3" rx="1.5" fill="#94a3b8" />

                  {/* Order Counter Reception Desk */}
                  <rect x="260" y="150" width="85" height="60" rx="4" fill="#ffffff" opacity="0.95" />
                  <rect x="260" y="150" width="85" height="10" rx="2" fill="#3b82f6" />
                  <text x="302" y="190" fill="#7c3aed" fontSize="10" fontWeight="900" textAnchor="middle">PRINTX</text>
                  <text x="302" y="202" fill="#64748b" fontSize="7" fontWeight="bold" textAnchor="middle">ORDER DESK</text>

                  {/* Desktop PC Monitor on Desk */}
                  <rect x="280" y="125" width="28" height="22" rx="3" fill="#0284c7" stroke="#ffffff" strokeWidth="1.5" />
                  <line x1="284" y1="133" x2="304" y2="133" stroke="#facc15" strokeWidth="1.5" />
                  <line x1="284" y1="139" x2="300" y2="139" stroke="#38bdf8" strokeWidth="1.5" />
                  <rect x="292" y="147" width="4" height="4" fill="#475569" />
                  <rect x="288" y="149" width="12" height="2" fill="#334155" />

                  {/* Coffee Mug on Desk */}
                  <rect x="330" y="142" width="8" height="8" rx="1.5" fill="#f43f5e" />
                  <ellipse cx="334" cy="142" rx="4" ry="1.5" fill="#ffffff" />

                  {/* Staff Chair (Right of desk) */}
                  <rect x="352" y="158" width="22" height="26" rx="4" fill="#ffffff" opacity="0.85" />
                  <rect x="360" y="184" width="5" height="26" fill="#cbd5e1" />
                </g>

                {/* ==========================================
                    2. RIGHT: HEAVY INDUSTRIAL PLOTTER MACHINE
                    ========================================== */}
                <g id="printer-station">
                  {/* Printer Stand & Legs */}
                  <rect x="495" y="145" width="16" height="65" rx="3" fill="#0f172a" />
                  <rect x="635" y="145" width="16" height="65" rx="3" fill="#0f172a" />
                  <polygon points="485,210 520,210 515,204 490,204" fill="#020617" />
                  <polygon points="625,210 660,210 655,204 630,204" fill="#020617" />
                  <line x1="503" y1="180" x2="643" y2="180" stroke="#334155" strokeWidth="3" />

                  {/* Lower Take-up Roller Bar */}
                  <rect x="515" y="190" width="115" height="8" rx="4" fill="#cbd5e1" />

                  {/* Main Heavy Body Chassis */}
                  <rect x="480" y="85" width="185" height="64" rx="8" fill="url(#footerPrinterBody)" stroke="#475569" strokeWidth="2" />
                  
                  {/* Top White Paper/Vinyl Feed Roll */}
                  <rect x="500" y="68" width="145" height="18" rx="5" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="1" />
                  
                  {/* Center Printing Bay Glass */}
                  <rect x="505" y="93" width="135" height="34" rx="3" fill="#020617" stroke="#334155" strokeWidth="1" />
                  
                  {/* Guide Chrome Rail */}
                  <line x1="508" y1="104" x2="636" y2="104" stroke="#e2e8f0" strokeWidth="2" />

                  {/* Right Control Screen & LEDs */}
                  <rect x="646" y="93" width="14" height="18" rx="2" fill="#0284c7" />
                  <circle cx="653" cy="120" r="2.5" fill="#22c55e" className="animate-ping" />
                  <circle cx="653" cy="128" r="2.5" fill="#facc15" />

                  {/* CONTINUOUS PRINTED VINYL BANNER ROLLING DOWN OUT OF MACHINE */}
                  <g className="anim-printer-banner">
                    <path
                      d="M515 125 C515 155 520 180 528 205 C534 212 612 212 618 205 C626 180 630 155 630 125 Z"
                      fill="url(#footerOutputBanner)"
                      stroke="#ffffff"
                      strokeWidth="1"
                    />
                    <path d="M524 195 Q570 170 620 195" stroke="#ffffff" strokeWidth="2.5" fill="none" opacity="0.9" />
                    <circle cx="572" cy="165" r="12" fill="#fef08a" />
                  </g>

                  {/* ANIMATED HIGH-SPEED PRINTHEAD & LASER SPRINT */}
                  <g className="anim-laser-sprint">
                    <rect x="525" y="97" width="24" height="20" rx="3" fill="#ffffff" stroke="#2563eb" strokeWidth="1.5" />
                    <rect x="522" y="102" width="3" height="12" fill="#00f5ff" />
                    <rect x="549" y="102" width="3" height="12" fill="#00f5ff" />
                    <line x1="510" y1="126" x2="635" y2="126" stroke="url(#footerLaserGlow)" strokeWidth="3" filter="url(#laserBeamFilter)" />
                  </g>

                  {/* Speech Bubble 3: Printer Status Cue */}
                  <g className="anim-bubble-printer">
                    <rect x="525" y="32" width="105" height="26" rx="6" fill="#ffffff" filter="drop-shadow(0 4px 6px rgba(0,0,0,0.15))" />
                    <polygon points="565,58 575,58 570,64" fill="#ffffff" />
                    <text x="577" y="49" fill="#0284c7" fontSize="9" fontWeight="900" textAnchor="middle">
                      ⚡ 1440 DPI Printing!
                    </text>
                  </g>
                </g>

                {/* ========================================================
                    3. CUSTOMER: WALKS IN FROM LEFT -> SITS AT CHAIR
                    ======================================================== */}
                <g className="anim-customer-story">
                  {/* Legs */}
                  <g>
                    <rect x="156" y="165" width="6" height="45" rx="3" fill="#1e293b" />
                    <rect x="166" y="165" width="6" height="45" rx="3" fill="#1e293b" />
                    <rect x="154" y="206" width="12" height="4" rx="2" fill="#0f172a" />
                    <rect x="166" y="206" width="12" height="4" rx="2" fill="#0f172a" />
                  </g>
                  {/* Body / Coat */}
                  <rect x="152" y="125" width="24" height="44" rx="6" fill="#ec4899" />
                  {/* Head */}
                  <circle cx="164" cy="112" r="9" fill="#fed7aa" />
                  <path d="M155 110 C155 102 173 102 173 110 Z" fill="#475569" />
                  {/* Briefcase in Hand */}
                  <rect x="144" y="152" width="12" height="10" rx="2" fill="#f59e0b" />
                  <path d="M147 152 L147 149 L153 149 L153 152" stroke="#d97706" strokeWidth="1" fill="none" />

                  {/* Speech Bubble 1: Customer Order Request */}
                  <g className="anim-bubble-customer">
                    <rect x="110" y="68" width="110" height="26" rx="6" fill="#ffffff" filter="drop-shadow(0 4px 6px rgba(0,0,0,0.15))" />
                    <polygon points="160,94 170,94 165,100" fill="#ffffff" />
                    <text x="165" y="85" fill="#ec4899" fontSize="9" fontWeight="900" textAnchor="middle">
                      Need Flex Banners!
                    </text>
                  </g>
                </g>

                {/* ========================================================
                    4. STAFF MEMBER: SEATED AT DESK -> WALKS TO PRINTER
                    ======================================================== */}
                <g className="anim-staff-story">
                  {/* Legs */}
                  <g>
                    <rect x="354" y="160" width="6" height="48" rx="3" fill="#0284c7" />
                    <rect x="364" y="160" width="6" height="48" rx="3" fill="#0284c7" />
                    <rect x="352" y="205" width="11" height="4" rx="2" fill="#0f172a" />
                    <rect x="364" y="205" width="11" height="4" rx="2" fill="#0f172a" />
                  </g>
                  {/* Staff Shirt */}
                  <rect x="350" y="122" width="24" height="42" rx="6" fill="#f59e0b" />
                  {/* Head */}
                  <circle cx="362" cy="110" r="9" fill="#fed7aa" />
                  <path d="M353 108 C353 100 371 100 371 108 Z" fill="#1e293b" />
                  {/* ID Badge on Shirt */}
                  <rect x="358" y="132" width="5" height="6" rx="1" fill="#ffffff" />

                  {/* Speech Bubble 2: Staff Starts Printing */}
                  <g className="anim-bubble-staff">
                    <rect x="310" y="68" width="115" height="26" rx="6" fill="#ffffff" filter="drop-shadow(0 4px 6px rgba(0,0,0,0.15))" />
                    <polygon points="358,94 368,94 363,100" fill="#ffffff" />
                    <text x="367" y="85" fill="#d97706" fontSize="9" fontWeight="900" textAnchor="middle">
                      Approved! Printing Now
                    </text>
                  </g>
                </g>

              </svg>
            </div>
          </div>

        </div>
      </div>

      {/* ====================================================================
          2. MAIN FOOTER - 4 COLUMNS (EXACT MATCH TO USER SCREENSHOT)
             Column 1: Printnow logo & social icons
             Column 2: Usefull Links
             Column 3: Contact Printnow (Phone, Mail, Location with purple icons)
             Column 4: Our Services
         ==================================================================== */}
      <div className="bg-[#f8f9ff] text-gray-700 pt-16 pb-12 px-5 sm:px-10 lg:px-14 border-t border-gray-100">
        <div className="mx-auto max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          
          {/* Column 1: Suman Flex Logo, Bio & Social Icons */}
          <div className="space-y-5">
            {/* Animated Printing Machine Logo */}
            <Logo />

            {/* Description Text */}
            <p className="text-xs sm:text-[13px] text-gray-600 leading-relaxed font-normal max-w-xs">
              A new way to make the payments easy, reliable and 100% secure. claritatem itamconse quat. Exerci tation ullamcorper.
            </p>

            {/* Social Icons (Facebook, Twitter, Vimeo, Pinterest) */}
            <div className="flex items-center gap-4 pt-2 text-gray-950">
              {/* Facebook */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="hover:text-[#7c3aed] transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.6 5H18V0h-3.8C10.5 0 9 1.5 9 4.333V8z" />
                </svg>
              </a>

              {/* Twitter / X */}
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="hover:text-[#7c3aed] transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>

              {/* Vimeo */}
              <a
                href="https://vimeo.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Vimeo"
                className="hover:text-[#7c3aed] transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M23.977 6.416c-.105 2.338-1.739 5.543-4.894 9.609-3.268 4.247-6.026 6.37-8.29 6.37-1.409 0-2.578-1.294-3.553-3.881l-1.921-7.054c-.718-2.593-1.488-3.89-2.316-3.89-.182 0-.821.385-1.916 1.155L0 7.279c1.233-1.084 2.448-2.164 3.644-3.238 1.654-1.42 2.898-2.17 3.738-2.252 1.977-.184 3.195.969 3.655 3.461.564 3.056 1.01 4.962 1.336 5.719.516 1.341 1.077 2.012 1.686 2.012.476 0 1.18-.752 2.113-2.256.932-1.504 1.439-2.652 1.521-3.444.144-1.345-.378-2.018-1.566-2.018-.553 0-1.144.128-1.774.383 1.143-3.738 3.327-5.556 6.551-5.454 2.392.074 3.518 1.603 3.376 4.584z" />
                </svg>
              </a>

              {/* Pinterest */}
              <a
                href="https://pinterest.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Pinterest"
                className="hover:text-[#7c3aed] transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0a12 12 0 0 0-4.37 23.18c-.07-.98-.13-2.49.03-3.56.14-.98.94-6.49.94-6.49s-.24-.48-.24-1.19c0-1.12.65-1.95 1.46-1.95.69 0 1.02.52 1.02 1.14 0 .69-.44 1.73-.67 2.69-.19.81.41 1.47 1.2 1.47 1.44 0 2.55-1.52 2.55-3.71 0-1.94-1.39-3.3-3.39-3.3-2.31 0-3.66 1.73-3.66 3.52 0 .7.27 1.44.61 1.85.07.08.08.15.06.24-.06.27-.21.84-.24.96-.04.16-.13.19-.3.12-1.13-.53-1.84-2.18-1.84-3.51 0-2.86 2.08-5.48 5.99-5.48 3.14 0 5.59 2.24 5.59 5.23 0 3.12-1.97 5.63-4.7 5.63-1.02 0-1.98-.53-2.31-1.15l-.63 2.4c-.23.88-.85 1.98-1.27 2.65A12.003 12.003 0 1 0 12 0z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Usefull Links (Exact match to screenshot) */}
          <div className="space-y-4">
            <h3 className="text-base font-black text-gray-950 tracking-tight">
              Usefull Links
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-[13px] text-gray-600 font-medium">
              <li>
                <Link href="/about" className="hover:text-[#7c3aed] transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#7c3aed] transition-colors">
                  Faq&apos;s
                </Link>
              </li>
              <li>
                <Link href="/calculator" className="hover:text-[#7c3aed] transition-colors">
                  Pricing Table
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#7c3aed] transition-colors">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#7c3aed] transition-colors">
                  Terms & Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Printnow (Phone, Email, Location with Purple Icon Badges) */}
          <div className="space-y-4">
            <h3 className="text-base font-black text-gray-950 tracking-tight">
              Contact Printnow
            </h3>

            <div className="space-y-3.5 text-xs sm:text-[13px]">
              {/* Call Us */}
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#7c3aed] text-white flex items-center justify-center shrink-0 shadow-sm">
                  <Phone size={14} className="fill-current" />
                </div>
                <div>
                  <p className="text-[11px] text-gray-500 font-medium">Call Us</p>
                  <a
                    href="tel:+29635870088"
                    className="font-bold text-gray-900 hover:text-[#7c3aed] transition-colors"
                  >
                    +296 358 700 88
                  </a>
                </div>
              </div>

              {/* Mail Us */}
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#7c3aed] text-white flex items-center justify-center shrink-0 shadow-sm">
                  <Mail size={14} />
                </div>
                <div>
                  <p className="text-[11px] text-gray-500 font-medium">Mail Us</p>
                  <a
                    href="mailto:contact@example.com"
                    className="font-bold text-gray-900 hover:text-[#7c3aed] transition-colors"
                  >
                    contact@example.com
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#7c3aed] text-white flex items-center justify-center shrink-0 shadow-sm">
                  <MapPin size={14} />
                </div>
                <div>
                  <p className="text-[11px] text-gray-500 font-medium">Location</p>
                  <p className="font-bold text-gray-900">
                    34/8, Dicen Road NY
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Column 4: Our Services (Exact match to screenshot) */}
          <div className="space-y-4">
            <h3 className="text-base font-black text-gray-950 tracking-tight">
              Our Services
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-[13px] text-gray-600 font-medium">
              <li>
                <Link href="/services/business-card-printing" className="hover:text-[#7c3aed] transition-colors">
                  Business Card Printing
                </Link>
              </li>
              <li>
                <Link href="/services/digital-printing" className="hover:text-[#7c3aed] transition-colors">
                  Digital Printing
                </Link>
              </li>
              <li>
                <Link href="/services/offset-printing" className="hover:text-[#7c3aed] transition-colors">
                  Ofset Printing
                </Link>
              </li>
              <li>
                <Link href="/services/logo-design-printing" className="hover:text-[#7c3aed] transition-colors">
                  Logo Design & Printing
                </Link>
              </li>
              <li>
                <Link href="/services/t-shirt-printing" className="hover:text-[#7c3aed] transition-colors">
                  T-Shirt Printing
                </Link>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* 3. SUB-FOOTER: Copyright */}
      <div className="bg-[#f0f2fb] border-t border-gray-200/70 py-4 px-5 text-center text-xs text-gray-500">
        <p>© 2025 Printnow. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
