import Link from "next/link";
import { notFound } from "next/navigation";
import { ALL_SERVICES, findServiceBySlug } from "@/lib/services-data";
import { SHOP } from "@/lib/data";
import {
  CheckCircle2,
  Clock,
  Tag,
  ArrowLeft,
  MessageSquare,
  Sparkles,
  HelpCircle,
  Calculator,
} from "lucide-react";

interface Props {
  params: {
    slug: string;
  };
}

export default function ServiceDetailPage({ params }: Props) {
  const service = findServiceBySlug(params.slug);

  if (!service) {
    notFound();
  }

  const whatsappMessage = encodeURIComponent(
    `Hello Suman Flex Printers! I am interested in *${service.title}* (${service.startingPrice}). Please share more details and samples.`
  );

  const relatedServices = ALL_SERVICES.filter((s) => s.slug !== service.slug).slice(0, 4);

  return (
    <main className="min-h-screen bg-gray-50/50 pb-20">
      {/* 1. TOP BREADCRUMB BAR */}
      <div className="bg-white border-b border-gray-100 py-3.5 px-4 sm:px-8">
        <div className="mx-auto max-w-7xl flex items-center gap-2 text-xs font-semibold text-gray-500">
          <Link href="/" className="hover:text-gray-900 transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link href="/services" className="hover:text-gray-900 transition-colors">
            Services
          </Link>
          <span>/</span>
          <span className="text-[#ec008c] font-bold">{service.title}</span>
        </div>
      </div>

      {/* 2. HERO SECTION */}
      <section className="bg-white border-b border-gray-100 py-12 sm:py-16 px-4 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <Link
            href="/services"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-gray-500 hover:text-gray-900 transition-colors mb-6 group"
          >
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
            <span>Back to All Services</span>
          </Link>

          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex flex-wrap items-center gap-3">
                <span className="px-3.5 py-1.5 rounded-full bg-pink-50 border border-pink-200 text-[#ec008c] font-black text-xs uppercase tracking-wider">
                  {service.badge}
                </span>
                <span className="flex items-center gap-1.5 text-xs font-bold text-gray-700 bg-gray-100 px-3 py-1.5 rounded-full">
                  <Clock size={13} className="text-[#7c3aed]" />
                  <span>Turnaround: {service.turnaround}</span>
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-950 tracking-tight leading-[1.15]">
                {service.title}
              </h1>

              <p className="text-lg font-bold text-[#7c3aed]">
                {service.tagline}
              </p>

              <p className="text-base text-gray-700 leading-relaxed">
                {service.description}
              </p>

              {/* Price Banner Box */}
              <div className="bg-[#f8f7fd] border border-[#e2d9f8] p-4 sm:p-5 rounded-2xl flex flex-wrap items-center justify-between gap-4">
                <div>
                  <span className="text-xs font-bold text-gray-500 uppercase tracking-wider block">
                    Estimated Pricing
                  </span>
                  <p className="text-2xl font-black text-gray-950 mt-0.5">
                    {service.startingPrice}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <a
                    href={`https://wa.me/${SHOP.wa}?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-sm px-5 py-3 rounded-xl shadow-md transition-all hover:scale-105"
                  >
                    <MessageSquare size={16} />
                    <span>Order On WhatsApp</span>
                  </a>
                  <Link
                    href="/calculator"
                    className="inline-flex items-center gap-2 bg-white hover:bg-gray-50 border border-gray-200 text-gray-900 font-bold text-sm px-4 py-3 rounded-xl shadow-xs transition-colors"
                  >
                    <Calculator size={16} />
                    <span>Calculator</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Right Image Mockup Frame */}
            <div className="lg:col-span-5 relative flex items-center justify-center">
              <div className="relative w-full max-w-md">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-purple-400/20 via-pink-400/20 to-blue-400/20 blur-2xl -z-10" />
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white group">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-84 sm:h-96 object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent p-5 text-white">
                    <span className="text-xs font-bold text-yellow-300 uppercase tracking-wider">
                      Suman Flex Noorpur
                    </span>
                    <p className="text-lg font-black mt-0.5">{service.title}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FEATURES & SPECIFICATIONS */}
      <section className="py-16 px-4 sm:px-8 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-10">
          
          {/* Key Features */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-100 space-y-6">
            <div className="flex items-center gap-2.5 border-b border-gray-100 pb-4">
              <Sparkles size={20} className="text-[#ec008c]" />
              <h2 className="text-xl sm:text-2xl font-black text-gray-950">
                Key Features &amp; Quality Guarantee
              </h2>
            </div>

            <div className="space-y-3.5">
              {service.features.map((feat) => (
                <div
                  key={feat}
                  className="flex items-start gap-3 p-3.5 rounded-xl bg-gray-50 border border-gray-100 hover:border-gray-200 transition-colors"
                >
                  <CheckCircle2 size={18} className="text-green-600 shrink-0 mt-0.5" />
                  <span className="text-sm font-semibold text-gray-800 leading-snug">
                    {feat}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Specifications */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-100 space-y-6">
            <div className="flex items-center gap-2.5 border-b border-gray-100 pb-4">
              <Tag size={20} className="text-[#7c3aed]" />
              <h2 className="text-xl sm:text-2xl font-black text-gray-950">
                Technical Specifications
              </h2>
            </div>

            <div className="space-y-3">
              {service.specs.map((sp) => (
                <div
                  key={sp.label}
                  className="p-3 rounded-xl bg-[#f8f7fd] border border-[#ded5f8] flex flex-col justify-between"
                >
                  <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                    {sp.label}
                  </span>
                  <span className="text-sm font-extrabold text-gray-900 mt-0.5">
                    {sp.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 4. FAQS SECTION */}
      {service.faqs.length > 0 && (
        <section className="py-8 px-4 sm:px-8 max-w-7xl mx-auto">
          <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-100 space-y-6">
            <div className="flex items-center gap-2.5 border-b border-gray-100 pb-4">
              <HelpCircle size={20} className="text-[#ec008c]" />
              <h2 className="text-xl sm:text-2xl font-black text-gray-950">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {service.faqs.map((faq) => (
                <div key={faq.q} className="p-4 rounded-2xl bg-gray-50 border border-gray-100 space-y-1.5">
                  <p className="text-sm font-bold text-gray-900">{faq.q}</p>
                  <p className="text-xs text-gray-600 leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 5. EXPLORE OTHER SERVICES */}
      <section className="py-12 px-4 sm:px-8 max-w-7xl mx-auto">
        <h3 className="text-xl font-black text-gray-950 mb-6">
          Explore Other Printing Services
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {relatedServices.map((rel) => (
            <Link
              key={rel.slug}
              href={`/services/${rel.slug}`}
              className="bg-white p-4 rounded-2xl border border-gray-100 shadow-xs hover:shadow-md transition-all hover:-translate-y-1 group"
            >
              <div className="w-full h-36 rounded-xl overflow-hidden mb-3 bg-gray-100">
                <img
                  src={rel.image}
                  alt={rel.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <p className="font-extrabold text-sm text-gray-900 group-hover:text-[#ec008c] transition-colors">
                {rel.title}
              </p>
              <p className="text-xs text-gray-500 font-semibold mt-1">
                {rel.startingPrice}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}

