"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SERVICES_CATALOG } from "@/lib/services-data";

export function ServicesGrid() {
  return (
    <section className="py-20 px-4 sm:px-8 max-w-7xl mx-auto bg-white">
      {/* Top Header Badge & Section Title */}
      <div className="text-center space-y-3 mb-14">
        <div className="inline-block">
          <span className="px-4 py-1.5 rounded-full bg-pink-50 border border-pink-200/80 text-[#ec008c] font-black text-xs uppercase tracking-widest shadow-xs">
            OUR SERVICES
          </span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-950 tracking-tight">
          Our Printnow Services
        </h2>
        <p className="text-base text-gray-600 max-w-2xl mx-auto font-normal">
          Explore our top 8 professional printing &amp; branding services. Click on any service to view full specifications, rates, and sample designs.
        </p>
      </div>

      {/* 8-Card Grid Layout - EXACT SAME SIZE FOR ALL 8 CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
        {SERVICES_CATALOG.slice(0, 8).map((item) => (
          <Link
            key={item.slug}
            href={`/services/${item.slug}`}
            className="group relative rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-400 hover:-translate-y-2 flex flex-col h-[400px] w-full border border-gray-200/70 select-none bg-white"
          >
            {/* Card Main Area - EXACT SAME FIXED HEIGHT & ASPECT RATIO */}
            <div
              className={`relative w-full h-full ${item.bgColor} flex items-center justify-center p-5 overflow-hidden`}
            >
              {/* Product Mockup Image - Uniform 100% Fill */}
              <div className="w-full h-full rounded-2xl overflow-hidden shadow-md relative bg-white/40">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover transform group-hover:scale-108 transition-transform duration-600 ease-out"
                />
              </div>

              {/* HOVER OVERLAY: Vibrant Purple/Violet Gradient Sweeping Up (Image 1 Match) */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#7928ca] via-[#8b5cf6]/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none" />

              {/* HOVER CENTER ICON: Large White Circle with Purple Arrow (Image 1 Match) */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-16 h-16 rounded-full bg-white text-[#7928ca] shadow-2xl flex items-center justify-center transform scale-0 group-hover:scale-100 transition-all duration-400 ease-out">
                  <ArrowUpRight size={30} className="stroke-[3]" />
                </div>
              </div>

              {/* HOVER RIGHT EDGE DECORATIVE DOT (Image 1 Match) */}
              <div className="absolute right-4 bottom-1/3 w-6 h-6 rounded-full border border-white/60 bg-white/20 backdrop-blur-xs flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none">
                <span className="w-2 h-2 rounded-full bg-white shadow-xs" />
              </div>

              {/* BOTTOM SECTION: Normal White Pill (Image 2) vs Hover White Text (Image 1) */}
              <div className="absolute bottom-6 inset-x-5 flex justify-center items-center z-10 pointer-events-none">
                {/* 1. NORMAL STATE: Floating White Rounded Pill (Image 2) */}
                <div className="w-full max-w-[230px] text-center bg-white text-gray-950 font-black text-sm sm:text-[14px] px-5 py-3.5 rounded-2xl shadow-xl border border-gray-100 transition-all duration-300 tracking-tight opacity-100 group-hover:opacity-0 group-hover:scale-95 group-hover:pointer-events-none truncate">
                  {item.title}
                </div>

                {/* 2. HOVER STATE: Pure White Bold Text directly on gradient (Image 1) */}
                <div className="absolute inset-x-0 bottom-1 text-center opacity-0 group-hover:opacity-100 transition-all duration-400 transform translate-y-2 group-hover:translate-y-0">
                  <span className="text-white font-black text-lg sm:text-[19px] tracking-tight drop-shadow-md block px-2">
                    {item.title}
                  </span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
