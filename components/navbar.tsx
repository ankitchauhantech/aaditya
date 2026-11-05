"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Phone, Mail, MessageSquare, Menu, X } from "lucide-react";
import { NAV, SHOP } from "@/lib/data";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/logo";

export function Navbar() {
  const path = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm font-sans">
      {/* Top Bar - Pink to Purple Gradient (Exact match to Image 1) */}
      <div className="w-full bg-gradient-to-r from-[#ff2a85] via-[#d92383] to-[#7c3aed] text-white py-2 px-4 sm:px-8 text-xs sm:text-[13px] font-medium tracking-wide">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
          {/* Left info items */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <a
              href={`tel:${SHOP.phone}`}
              className="flex items-center gap-1.5 transition-opacity hover:opacity-90"
            >
              <Phone size={13} className="shrink-0 fill-current" />
              <span>+84 66 - 567 - 8899</span>
            </a>

            <a
              href={`mailto:${SHOP.email}`}
              className="hidden sm:flex items-center gap-1.5 transition-opacity hover:opacity-90"
            >
              <Mail size={13} className="shrink-0 fill-current" />
              <span>{SHOP.email}</span>
            </a>

            <span className="hidden md:inline-block font-normal text-white/95 pl-2 border-l border-white/20">
              {SHOP.promoNotice}
            </span>
          </div>

          {/* Right social media icons */}
          <div className="flex items-center gap-3.5 shrink-0">
            {/* Facebook */}
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="transition-transform hover:scale-110 opacity-95 hover:opacity-100"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.6 5H18V0h-3.8C10.5 0 9 1.5 9 4.333V8z" />
              </svg>
            </a>
            {/* Twitter / X */}
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="transition-transform hover:scale-110 opacity-95 hover:opacity-100"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            {/* Instagram */}
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="transition-transform hover:scale-110 opacity-95 hover:opacity-100"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
            {/* YouTube */}
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="transition-transform hover:scale-110 opacity-95 hover:opacity-100"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-8">
        {/* Animated Printing Machine Logo (SUMAN FLEX / PRINTERS & GLOW SIGNS) */}
        <Logo />

        {/* Center Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8">
          {NAV.map(([label, href]) => {
            const isActive = path === href;
            return (
              <Link
                key={href}
                href={href}
                className={cn(
                  "text-[15px] font-semibold tracking-wide transition-colors duration-150",
                  isActive
                    ? "text-[#ec008c]"
                    : "text-gray-700 hover:text-[#ec008c]"
                )}
              >
                {label}
              </Link>
            );
          })}
        </nav>

        {/* Right CTA Button: Let'S Talk + Circular Chat Icon */}
        <div className="hidden sm:flex items-center gap-3">
          <Link
            href="/contact"
            className="flex items-center gap-2 group cursor-pointer"
          >
            <span className="text-[15px] font-bold text-gray-900 group-hover:text-[#6366f1] transition-colors">
              Let,S Talk
            </span>
            <div className="w-11 h-11 rounded-full bg-[#6366f1] hover:bg-[#5254e2] text-white flex items-center justify-center shadow-sm transition-transform duration-200 group-hover:scale-105">
              <MessageSquare size={18} className="stroke-[2.2]" />
            </div>
          </Link>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          className="lg:hidden p-2 text-gray-700 hover:text-gray-900 focus:outline-none"
          aria-label="Toggle Menu"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {open && (
        <div className="overflow-hidden border-t border-gray-100 bg-white lg:hidden px-6 py-5 shadow-xl transition-all duration-300">
          <nav className="flex flex-col space-y-3">
            {NAV.map(([label, href]) => (
              <Link
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className={cn(
                  "text-base font-semibold py-2 border-b border-gray-50 transition-colors",
                  path === href
                    ? "text-[#ec008c]"
                    : "text-gray-700 hover:text-[#ec008c]"
                )}
              >
                {label}
              </Link>
            ))}

            <div className="pt-4 flex items-center justify-between">
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="flex items-center gap-2.5 text-gray-900 font-bold"
              >
                <span>Let,S Talk</span>
                <div className="w-9 h-9 rounded-full bg-[#6366f1] text-white flex items-center justify-center">
                  <MessageSquare size={16} />
                </div>
              </Link>
              <a
                href={`tel:${SHOP.phone}`}
                className="text-xs text-gray-500 font-medium"
              >
                {SHOP.phone}
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
