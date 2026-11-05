"use client";
import { useState } from "react";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SHOP } from "@/lib/data";
export function ContactForm() {
  const [sent, setSent] = useState(false);
  function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const msg = `Hello ${SHOP.name}, I am ${f.get("name")} (${f.get("phone")}). ${f.get("msg")}`;
    window.open(`https://wa.me/${SHOP.wa}?text=${encodeURIComponent(msg)}`, "_blank");
    setSent(true);
  }
  return (
    <form onSubmit={submit} className="space-y-4">
      <Input name="name" placeholder="Your name" required />
      <Input name="phone" placeholder="Phone number" type="tel" required />
      <textarea name="msg" required rows={4} placeholder="What do you want to print? Size and quantity help." className="w-full rounded-xl border-2 border-ink/20 bg-white p-4 outline-none focus:border-magenta" />
      <Button type="submit" size="lg" className="w-full"><Send size={18} />Send on WhatsApp</Button>
      {sent && <p className="font-semibold text-green-700">WhatsApp opened. Send the message to finish.</p>}
    </form>
  );
}
