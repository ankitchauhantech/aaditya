import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { ServicesGrid } from "@/components/services-grid";
import { Button } from "@/components/ui/button";

export default function ServicesPage() {
  return (
    <main>
      <PageHero
        title="Our Printing Services"
        text="From urgent flex banners to luxury visiting cards, book publishing and glow signs — explore our full range of printing services in Noorpur, Bijnor."
      />

      {/* Main 8 Services Visual Grid */}
      <ServicesGrid />

      {/* Calculator Banner */}
      <section className="mx-auto max-w-6xl px-5 pb-20">
        <div className="text-center bg-[#f8f7fd] rounded-3xl p-8 sm:p-12 border border-[#ded5f8] shadow-sm">
          <h3 className="text-2xl sm:text-3xl font-black text-gray-950">
            Need an Instant Cost Estimate?
          </h3>
          <p className="mt-2 text-gray-600 max-w-lg mx-auto">
            Use our interactive Flex &amp; Print Price Calculator to estimate your exact dimensions and order directly on WhatsApp.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-[#7c3aed] hover:bg-[#6d28d9] text-white">
              <Link href="/calculator">Open Price Calculator</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/contact">Contact Our Press</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
