"use client";

import { useState } from "react";
import { PageHero } from "@/components/page-hero";
import { SHOP } from "@/lib/data";
import { Calculator, Check, MessageSquare, RefreshCw } from "lucide-react";

interface Material {
  id: string;
  name: string;
  rate: number; // rate per sq.ft
  desc: string;
}

const MATERIALS: Material[] = [
  { id: "normal-flex", name: "Normal Frontlit Flex (Regular)", rate: 12, desc: "Best for short term events, birthdays, shop openings" },
  { id: "star-flex", name: "Star Flex (Heavy Duty & Glossy)", rate: 20, desc: "Thicker material, long-lasting colors, tear resistant" },
  { id: "backlit-flex", name: "Backlit Flex (For Light Board)", rate: 35, desc: "Specially coated to glow vibrantly with internal lighting" },
  { id: "vinyl-sunboard", name: "Vinyl Sticker with Sunboard (3mm)", rate: 45, desc: "Rigid board, high definition print for indoor & clinic displays" },
  { id: "oneway-vision", name: "One-Way Vision Film", rate: 50, desc: "Perforated film for glass windows and glass doors" },
];

export default function CalculatorPage() {
  const [width, setWidth] = useState<number>(6);
  const [height, setHeight] = useState<number>(3);
  const [selectedMaterial, setSelectedMaterial] = useState<string>("star-flex");
  const [quantity, setQuantity] = useState<number>(1);
  const [withFrame, setWithFrame] = useState<boolean>(false);

  const currentMaterial = MATERIALS.find((m) => m.id === selectedMaterial) || MATERIALS[0];
  const sqftPerBanner = width > 0 && height > 0 ? width * height : 0;
  const frameRatePerSqFt = withFrame ? 18 : 0;
  const unitPrice = sqftPerBanner * (currentMaterial.rate + frameRatePerSqFt);
  const totalPrice = unitPrice * (quantity > 0 ? quantity : 1);

  const whatsappMessage = encodeURIComponent(
    `Hello Suman Flex Printers! I would like to order:\n` +
      `- Item: ${currentMaterial.name}\n` +
      `- Size: ${width} ft x ${height} ft (${sqftPerBanner} sq.ft each)\n` +
      `- Iron Frame: ${withFrame ? "Yes (Fitted with Iron Frame)" : "No (Print Only)"}\n` +
      `- Quantity: ${quantity}\n` +
      `- Estimated Total: ₹${totalPrice}\n\nPlease let me know the timeframe and design details.`
  );

  return (
    <main className="min-h-screen bg-gray-50/50 pb-20">
      <PageHero
        title="Flex Printing Price Calculator"
        text="Calculate instant cost estimates for Flex Banners, Star Flex, Backlit Boards, and Vinyl."
      />

      <div className="mx-auto max-w-4xl px-4 sm:px-6 pt-10">
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-[#204ecf] via-[#2d63e2] to-[#7c3aed] p-6 text-white flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-white/20 rounded-xl backdrop-blur-sm">
                <Calculator size={24} />
              </div>
              <div>
                <h2 className="text-xl font-bold">Instant Price Estimator</h2>
                <p className="text-xs text-white/80">Enter dimensions in feet to get accurate pricing</p>
              </div>
            </div>
            <button
              onClick={() => {
                setWidth(6);
                setHeight(3);
                setSelectedMaterial("star-flex");
                setQuantity(1);
                setWithFrame(false);
              }}
              className="text-xs bg-white/10 hover:bg-white/20 px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition"
            >
              <RefreshCw size={13} /> Reset
            </button>
          </div>

          <div className="p-6 sm:p-8 grid md:grid-cols-2 gap-8">
            {/* Input Controls */}
            <div className="space-y-6">
              {/* Width & Height */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                    Width (in Feet)
                  </label>
                  <input
                    type="number"
                    min="1"
                    max="100"
                    value={width || ""}
                    onChange={(e) => setWidth(Number(e.target.value))}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#7c3aed] focus:outline-none text-lg font-semibold text-gray-900"
                    placeholder="e.g. 6"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                    Height (in Feet)
                  </label>
                  <input
                    type="number"
                    min="1"
                    max="100"
                    value={height || ""}
                    onChange={(e) => setHeight(Number(e.target.value))}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#7c3aed] focus:outline-none text-lg font-semibold text-gray-900"
                    placeholder="e.g. 3"
                  />
                </div>
              </div>

              {/* Material Selection */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                  Select Print Material
                </label>
                <div className="space-y-2.5">
                  {MATERIALS.map((mat) => {
                    const isSelected = selectedMaterial === mat.id;
                    return (
                      <div
                        key={mat.id}
                        onClick={() => setSelectedMaterial(mat.id)}
                        className={`p-3.5 rounded-xl border cursor-pointer transition flex items-center justify-between ${
                          isSelected
                            ? "border-[#7c3aed] bg-[#f8f7fd] shadow-sm"
                            : "border-gray-200 hover:border-gray-300 bg-white"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div
                            className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 ${
                              isSelected
                                ? "border-[#7c3aed] bg-[#7c3aed] text-white"
                                : "border-gray-400"
                            }`}
                          >
                            {isSelected && <Check size={12} strokeWidth={3} />}
                          </div>
                          <div>
                            <p className="text-sm font-bold text-gray-900">{mat.name}</p>
                            <p className="text-xs text-gray-500">{mat.desc}</p>
                          </div>
                        </div>
                        <span className="text-sm font-extrabold text-[#7c3aed] shrink-0 ml-2">
                          ₹{mat.rate}/sqft
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Iron Frame Option */}
              <div className="flex items-center gap-3 p-3.5 bg-gray-50 rounded-xl border border-gray-200">
                <input
                  type="checkbox"
                  id="frame"
                  checked={withFrame}
                  onChange={(e) => setWithFrame(e.target.checked)}
                  className="w-5 h-5 text-[#7c3aed] rounded focus:ring-[#7c3aed] cursor-pointer"
                />
                <label htmlFor="frame" className="cursor-pointer text-sm text-gray-800">
                  <span className="font-bold">Add Iron Pipe Frame (+₹18/sqft)</span>
                  <p className="text-xs text-gray-500">Ready to install with sturdy welded iron boundary</p>
                </label>
              </div>

              {/* Quantity */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                  Quantity (Pcs)
                </label>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-12 h-12 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold text-xl flex items-center justify-center"
                  >
                    -
                  </button>
                  <input
                    type="number"
                    min="1"
                    value={quantity || 1}
                    onChange={(e) => setQuantity(Math.max(1, Number(e.target.value)))}
                    className="w-24 text-center px-4 py-3 border border-gray-300 rounded-xl font-bold text-lg focus:outline-none"
                  />
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-12 h-12 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold text-xl flex items-center justify-center"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            {/* Price Summary Card */}
            <div className="bg-[#f8f9ff] rounded-2xl p-6 border border-[#e0e7ff] flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-bold text-gray-900 border-b border-gray-200 pb-3">
                  Calculation Summary
                </h3>

                <div className="mt-4 space-y-3 text-sm">
                  <div className="flex justify-between text-gray-600">
                    <span>Dimensions:</span>
                    <span className="font-bold text-gray-900">{width} ft × {height} ft</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Single Banner Area:</span>
                    <span className="font-bold text-gray-900">{sqftPerBanner} sq. ft.</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Print Material:</span>
                    <span className="font-bold text-gray-900 text-right">{currentMaterial.name}</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Rate / sq.ft:</span>
                    <span className="font-bold text-gray-900">₹{currentMaterial.rate}</span>
                  </div>
                  {withFrame && (
                    <div className="flex justify-between text-gray-600">
                      <span>Iron Frame:</span>
                      <span className="font-bold text-green-600">+₹18/sq.ft</span>
                    </div>
                  )}
                  <div className="flex justify-between text-gray-600">
                    <span>Quantity:</span>
                    <span className="font-bold text-gray-900">{quantity}</span>
                  </div>
                </div>

                <div className="mt-6 pt-5 border-t border-gray-200">
                  <div className="flex items-baseline justify-between">
                    <span className="text-base font-bold text-gray-700">Estimated Total:</span>
                    <span className="text-3xl font-extrabold text-[#7c3aed]">₹{totalPrice}</span>
                  </div>
                  <p className="text-[11px] text-gray-500 mt-1">
                    * Final price may vary for urgent rush delivery or custom artwork design.
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 space-y-3">
                <a
                  href={`https://wa.me/${SHOP.wa}?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#25D366] hover:bg-[#20ba5a] text-white py-3.5 px-4 rounded-xl font-bold flex items-center justify-center gap-2 shadow-md transition-all hover:scale-[1.02]"
                >
                  <MessageSquare size={18} />
                  Order On WhatsApp
                </a>

                <a
                  href={`tel:${SHOP.phone}`}
                  className="w-full bg-white hover:bg-gray-50 border border-gray-300 text-gray-800 py-3 px-4 rounded-xl font-semibold flex items-center justify-center gap-2 transition"
                >
                  Call {SHOP.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

