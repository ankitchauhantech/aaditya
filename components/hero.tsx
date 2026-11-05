"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Sparkles, CheckCircle2, ArrowRight } from "lucide-react";

export interface SlideData {
  id: number;
  badge: string;
  title: string;
  subtitle: string;
  highlights: string[];
  btnText: string;
  btnLink: string;
  secondaryBtnText: string;
  secondaryBtnLink: string;
  bgGradient: string;
  image: string;
  imageTag: string;
  imageSubtag: string;
  startingPrice: string;
}

export const SLIDES: SlideData[] = [
  {
    id: 1,
    badge: "Bade Se Bade Flex Printing",
    title: "Bade Se Bade Flex Banner & Hoardings Print Karwayein",
    subtitle:
      "Chhoti dukan ke board se lekar highway hoardings, rally aur election banners tak — kisi bhi lambai aur chaudai ka flex banner high quality aur sabse tezi se print hota hai.",
    highlights: [
      "Any Custom Size (Bade se bada size)",
      "Normal Flex & Heavy Star Flex",
      "Iron Pipe Frame Fitting Available",
      "Same-day rush delivery in Noorpur",
    ],
    btnText: "PRICE CALCULATE KAREIN",
    btnLink: "/calculator",
    secondaryBtnText: "ORDER ON WHATSAPP",
    secondaryBtnLink: "https://wa.me/917947138260",
    bgGradient: "from-[#0f2873] via-[#1d4ed8] to-[#6d28d9]",
    image:
      "https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&w=1200&q=80",
    imageTag: "Large Format Flex Printing",
    imageSubtag: "Shop Boards • Event Banners • Hoardings",
    startingPrice: "₹12 / sq.ft",
  },
  {
    id: 2,
    badge: "Complete Printing Press",
    title: "Printing Press: Visiting Cards, Shaadi Card & Bill Books",
    subtitle:
      "Aapki sabhi printing press requirements ek hi jagah — Visiting Cards, Shaadi Ke Card (Wedding Cards), Bill Books, Pamphlets, Letterhead aur Envelopes ki bulk printing lowest rate par.",
    highlights: [
      "Shaadi Card (100+ Designer Templates)",
      "Visiting Cards (Matte, Gloss & Spot UV)",
      "Pamphlets, Bill Books & Letterhead",
      "Bulk printing at wholesale price",
    ],
    btnText: "PRESS RATE LIST DEKHEIN",
    btnLink: "/services",
    secondaryBtnText: "SAMPLE DESIGNS",
    secondaryBtnLink: "/gallery",
    bgGradient: "from-[#9a3412] via-[#ea580c] to-[#be185d]",
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80",
    imageTag: "Offset & Screen Printing Press",
    imageSubtag: "Visiting Cards • Shaadi Card • Bill Books",
    startingPrice: "₹450 / 1000 Cards",
  },
  {
    id: 3,
    badge: "Advertising & Signage",
    title: "High-Quality Posters, Vinyl & Glow Sign Boards",
    subtitle:
      "Dukan aur business ko door se chamkane ke liye vibrant Advertising Posters, Waterproof Vinyl Stickers, One-Way Vision Glass Film, aur LED Glow Sign Boards.",
    highlights: [
      "Vibrant Multicolor Poster Printing",
      "Waterproof & Scratch-Resistant Vinyl",
      "LED Glow Sign & Acrylic 3D Boards",
      "Weather-resistant outdoor life",
    ],
    btnText: "GET INSTANT QUOTE",
    btnLink: "/contact",
    secondaryBtnText: "PRICE CALCULATOR",
    secondaryBtnLink: "/calculator",
    bgGradient: "from-[#4c1d95] via-[#7c3aed] to-[#db2777]",
    image:
      "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?auto=format&fit=crop&w=1200&q=80",
    imageTag: "Posters, Stickers & 3D Signage",
    imageSubtag: "Glow Sign Boards • Vinyl • Sunboard",
    startingPrice: "Best Local Rates",
  },
];

export function Hero() {
  const [current, setCurrent] = useState<number>(0);
  const total = SLIDES.length;

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev + 1) % total);
  }, [total]);

  const prevSlide = useCallback(() => {
    setCurrent((prev) => (prev - 1 + total) % total);
  }, [total]);

  // Continuous Autoplay
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % total);
    }, 5000);

    return () => clearInterval(timer);
  }, [total]);

  return (
    <section className="relative w-full overflow-hidden select-none bg-gray-950 text-white min-h-[600px] lg:min-h-[660px] isolate">
      {/* SCOPED CUSTOM ANIMATION STYLES */}
      <style dangerouslySetInnerHTML={{ __html: `
        /* Ultra Smooth Track Transition */
        #hero-carousel-track {
          transition: transform 850ms cubic-bezier(0.22, 1, 0.36, 1);
          will-change: transform;
        }

        /* Slide Content Staggered Reveals */
        .slide-item.is-active .anim-badge {
          animation: heroFadeSlideUp 0.65s cubic-bezier(0.16, 1, 0.3, 1) 0.15s both;
        }
        .slide-item.is-active .anim-title {
          animation: heroFadeSlideUp 0.75s cubic-bezier(0.16, 1, 0.3, 1) 0.25s both;
        }
        .slide-item.is-active .anim-subtitle {
          animation: heroFadeSlideUp 0.75s cubic-bezier(0.16, 1, 0.3, 1) 0.35s both;
        }
        .slide-item.is-active .anim-points {
          animation: heroFadeSlideUp 0.75s cubic-bezier(0.16, 1, 0.3, 1) 0.45s both;
        }
        .slide-item.is-active .anim-buttons {
          animation: heroFadeSlideUp 0.75s cubic-bezier(0.16, 1, 0.3, 1) 0.55s both;
        }
        .slide-item.is-active .anim-image {
          animation: heroImagePop 0.95s cubic-bezier(0.16, 1, 0.3, 1) 0.2s both;
        }

        @keyframes heroFadeSlideUp {
          from {
            opacity: 0;
            transform: translate3d(0, 32px, 0);
          }
          to {
            opacity: 1;
            transform: translate3d(0, 0, 0);
          }
        }

        @keyframes heroImagePop {
          from {
            opacity: 0;
            transform: scale(0.9) translate3d(30px, 0, 0);
          }
          to {
            opacity: 1;
            transform: scale(1) translate3d(0, 0, 0);
          }
        }

        /* Ambient Pulsing Aura Behind Image */
        @keyframes auraPulse {
          0%, 100% {
            transform: scale(1);
            opacity: 0.35;
          }
          50% {
            transform: scale(1.18);
            opacity: 0.7;
          }
        }
        .aura-glow {
          animation: auraPulse 6s ease-in-out infinite;
        }

        /* Floating Bob Animation for Mockup Card */
        @keyframes floatBob {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-8px);
          }
        }
        .float-card {
          animation: floatBob 5s ease-in-out infinite;
        }

        /* Button Light Sweep Effect */
        .btn-shine {
          position: relative;
          overflow: hidden;
        }
        .btn-shine::after {
          content: '';
          position: absolute;
          top: -50%;
          left: -60%;
          width: 40%;
          height: 200%;
          background: linear-gradient(
            to right,
            rgba(255, 255, 255, 0) 0%,
            rgba(255, 255, 255, 0.4) 50%,
            rgba(255, 255, 255, 0) 100%
          );
          transform: rotate(25deg);
          animation: buttonSweep 4s infinite ease-in-out;
        }
        @keyframes buttonSweep {
          0%, 65% {
            left: -60%;
          }
          100% {
            left: 140%;
          }
        }
      ` }} />

      {/* REAL HORIZONTAL CAROUSEL TRACK (300% Width) */}
      <div
        id="hero-carousel-track"
        className="flex w-[300%]"
        style={{
          transform: `translate3d(-${(current * 100) / total}%, 0, 0)`,
        }}
      >
        {SLIDES.map((slide, index) => {
          const isActive = index === current;
          return (
            <div
              key={slide.id}
              id={`slide-item-${index}`}
              className={`slide-item ${
                isActive ? "is-active" : ""
              } w-1/3 min-w-[33.333333%] max-w-[33.333333%] shrink-0 relative min-h-[600px] lg:min-h-[660px] flex items-center`}
            >
              {/* Background Gradient with subtle depth layers */}
              <div
                className={`absolute inset-0 bg-gradient-to-r ${slide.bgGradient} transition-colors duration-700`}
              >
                <div className="absolute top-1/4 right-1/4 w-[450px] h-[450px] rounded-full bg-white/15 blur-3xl pointer-events-none" />
                <div className="absolute bottom-10 left-1/3 w-[400px] h-[400px] rounded-full bg-black/30 blur-2xl pointer-events-none" />
                {/* Subtle Geometric Overlay Grid */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
              </div>

              {/* Slide Content */}
              <div className="relative mx-auto max-w-7xl px-8 sm:px-16 lg:px-24 py-16 w-full z-10">
                <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center w-full">
                  
                  {/* Left Column: Heading, Subtitle, Highlights & Buttons */}
                  <div className="lg:col-span-7 space-y-6 text-left">
                    {/* Category Badge */}
                    <div className="anim-badge flex items-center gap-3">
                      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md text-xs font-bold text-white border border-white/25 shadow-xs">
                        <Sparkles size={14} className="text-yellow-300 animate-pulse pointer-events-none" />
                        <span>{slide.badge}</span>
                      </div>
                    </div>

                    {/* Headline */}
                    <div className="anim-title">
                      <h1 className="text-3xl sm:text-4xl lg:text-[48px] font-black tracking-tight leading-[1.14] text-white drop-shadow-lg">
                        {slide.title}
                      </h1>
                    </div>

                    {/* Subtitle */}
                    <div className="anim-subtitle">
                      <p className="text-base sm:text-lg text-white/95 font-normal max-w-xl leading-relaxed">
                        {slide.subtitle}
                      </p>
                    </div>

                    {/* Key Highlights */}
                    <div className="anim-points grid sm:grid-cols-2 gap-3 pt-1">
                      {slide.highlights.map((point) => (
                        <div
                          key={point}
                          className="flex items-center gap-2.5 text-sm font-semibold text-white bg-black/35 backdrop-blur-sm px-4 py-2.5 rounded-xl border border-white/15 shadow-sm hover:border-white/30 transition-colors"
                        >
                          <CheckCircle2 size={17} className="text-green-400 shrink-0 pointer-events-none" />
                          <span>{point}</span>
                        </div>
                      ))}
                    </div>

                    {/* CTA Buttons */}
                    <div className="anim-buttons pt-3 flex flex-wrap items-center gap-4">
                      <Link
                        href={slide.btnLink}
                        className="btn-shine inline-flex items-center gap-2 justify-center bg-white hover:bg-yellow-300 text-gray-950 font-black text-sm tracking-wider uppercase px-8 py-4 rounded-xl shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
                      >
                        <span>{slide.btnText}</span>
                        <ArrowRight size={16} />
                      </Link>

                      {slide.secondaryBtnLink.startsWith("http") ? (
                        <a
                          href={slide.secondaryBtnLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center bg-black/45 hover:bg-black/70 text-white font-bold text-sm tracking-wider uppercase px-7 py-4 rounded-xl border border-white/30 backdrop-blur-md transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer hover:border-white/50 shadow-md"
                        >
                          {slide.secondaryBtnText}
                        </a>
                      ) : (
                        <Link
                          href={slide.secondaryBtnLink}
                          className="inline-flex items-center justify-center bg-black/45 hover:bg-black/70 text-white font-bold text-sm tracking-wider uppercase px-7 py-4 rounded-xl border border-white/30 backdrop-blur-md transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer hover:border-white/50 shadow-md"
                        >
                          {slide.secondaryBtnText}
                        </Link>
                      )}
                    </div>
                  </div>

                  {/* Right Column: Visual Mockup Card with Aura Glow & Float */}
                  <div className="anim-image lg:col-span-5 relative flex items-center justify-center">
                    <div className="relative w-full max-w-md float-card">
                      {/* Ambient Animated Aura Glow */}
                      <div className="aura-glow absolute -inset-4 rounded-3xl bg-gradient-to-tr from-yellow-400/30 via-pink-500/30 to-cyan-400/30 blur-2xl -z-10" />

                      {/* Main Showcase Image Frame */}
                      <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/95 bg-white group transition-transform duration-500 hover:scale-[1.02]">
                        <img
                          src={slide.image}
                          alt={slide.title}
                          className="w-full h-76 sm:h-88 object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                        />

                        {/* Top Highlights Badge */}
                        <div className="absolute top-3.5 right-3.5 bg-white/95 backdrop-blur-md text-gray-950 px-3.5 py-1.5 rounded-lg shadow-lg font-black text-xs border border-white">
                          {slide.startingPrice}
                        </div>

                        {/* Bottom Floating Caption Tag */}
                        <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent p-5 text-white">
                          <span className="text-[11px] font-bold uppercase tracking-wider text-yellow-300 block">
                            {slide.imageTag}
                          </span>
                          <p className="text-base font-extrabold mt-0.5 drop-shadow-md">
                            {slide.imageSubtag}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* LEFT NAVIGATION ARROW (<) */}
      <button
        id="hero-prev-arrow-btn"
        type="button"
        onClick={prevSlide}
        aria-label="Previous Slide"
        className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white/95 hover:bg-white text-gray-950 shadow-2xl border-2 border-white flex items-center justify-center transition-all duration-200 hover:scale-115 active:scale-90 z-20 cursor-pointer"
      >
        <ChevronLeft size={32} className="stroke-[3] pointer-events-none" />
      </button>

      {/* RIGHT NAVIGATION ARROW (>) */}
      <button
        id="hero-next-arrow-btn"
        type="button"
        onClick={nextSlide}
        aria-label="Next Slide"
        className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white/95 hover:bg-white text-gray-950 shadow-2xl border-2 border-white flex items-center justify-center transition-all duration-200 hover:scale-115 active:scale-90 z-20 cursor-pointer"
      >
        <ChevronRight size={32} className="stroke-[3] pointer-events-none" />
      </button>

      {/* BOTTOM SLIDE INDICATORS (3 PILLS) */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3 bg-black/50 backdrop-blur-md px-4 py-2 rounded-full border border-white/15 shadow-xl">
        {SLIDES.map((_, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => setCurrent(idx)}
            aria-label={`Go to Banner ${idx + 1}`}
            className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
              idx === current
                ? "w-8 bg-yellow-400 shadow-lg scale-105"
                : "w-2.5 bg-white/50 hover:bg-white"
            }`}
          />
        ))}
        <span
          className="text-xs font-bold text-white/95 ml-1 tracking-wider"
          suppressHydrationWarning
        >
          {current + 1} / 3
        </span>
      </div>
    </section>
  );
}
