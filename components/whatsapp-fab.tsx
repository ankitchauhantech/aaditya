"use client";

import { MessageCircle } from "lucide-react";
import { SHOP } from "@/lib/data";

export function WhatsAppFab() {
  return (
    <a
      href={`https://wa.me/${SHOP.wa}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp Chat"
      className="fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-green-500 hover:bg-green-600 text-white shadow-xl hover:scale-110 active:scale-95 transition-all duration-300"
    >
      <MessageCircle size={28} />
    </a>
  );
}
