"use client";

import { useState } from "react";
import { ImageIcon } from "lucide-react";
import { GALLERY } from "@/lib/data";
import { cn } from "@/lib/utils";

const cats = ["All", ...Array.from(new Set(GALLERY.map((g) => g[0])))];
const tints = ["bg-cyan", "bg-magenta", "bg-sun", "bg-ink"];

export function GalleryGrid() {
  const [cat, setCat] = useState("All");
  const items = GALLERY.filter((g) => cat === "All" || g[0] === cat);

  return (
    <>
      <div className="mb-8 flex flex-wrap gap-2">
        {cats.map((c) => (
          <button
            key={c}
            onClick={() => setCat(c)}
            className={cn(
              "rounded-full border-2 border-ink px-4 py-2 font-semibold transition",
              cat === c ? "bg-ink text-white" : "hover:bg-sun"
            )}
          >
            {c}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
        {items.map(([c, t], i) => (
          <div
            key={t}
            className={cn(
              "relative grid aspect-square place-items-center overflow-hidden rounded-3xl border-2 border-ink text-white hover:-translate-y-2 transition-all duration-300 shadow-md",
              tints[i % 4],
              i % 4 === 2 && "text-ink"
            )}
          >
            <ImageIcon size={48} className="opacity-60" />
            <div className="absolute inset-x-0 bottom-0 bg-ink/80 p-3 text-sm text-white">
              <b>{t}</b>
              <br />
              {c}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
