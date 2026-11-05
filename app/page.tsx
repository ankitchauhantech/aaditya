import { Hero } from "@/components/hero";
import { Marquee } from "@/components/marquee";
import { ServicesGrid } from "@/components/services-grid";
import { WhyChooseUs } from "@/components/why-choose-us";
import { ProduceDigitalPrinting } from "@/components/produce-digital-printing";
import { SERVICES } from "@/lib/data";

export default function Home() {
  return (
    <main>
      <Hero />
      <Marquee items={SERVICES} />
      {/* 8-Card Services Grid - 1 row me 4 cards (Exact match to screenshot) */}
      <ServicesGrid />

      {/* Reasons To Get Printing Started With Us Section (Exact match to user screenshot) */}
      <WhyChooseUs />

      {/* Produce Digital Printing With Business Growing (With Badi Bulky Animated Printer Machine) */}
      <ProduceDigitalPrinting />
    </main>
  );
}
