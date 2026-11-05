import { MapPin, Phone } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { ContactForm } from "@/components/contact-form";
import { Button } from "@/components/ui/button";
import { SHOP } from "@/lib/data";
export default function Contact() {
  return (
    <main>
      <PageHero title="Contact us" text="Call, WhatsApp or visit the shop. We are happy to quote on the phone." />
      <section className="mx-auto grid max-w-6xl gap-12 px-5 py-16 md:grid-cols-2">
        <Reveal x={-50}>
          <div className="space-y-5 text-lg">
            <p className="flex gap-3"><MapPin className="shrink-0 text-magenta" />{SHOP.address}</p>
            <p className="flex gap-3"><Phone className="shrink-0 text-magenta" /><a href={`tel:${SHOP.phone}`}>{SHOP.phone}</a></p>
            <Button asChild variant="outline"><a href={SHOP.justdial} target="_blank">View on Justdial</a></Button>
          </div>
        </Reveal>
        <Reveal x={50}><ContactForm /></Reveal>
      </section>
    </main>
  );
}
