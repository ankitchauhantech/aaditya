import { PageHero } from "@/components/page-hero";
import { GalleryGrid } from "@/components/gallery-grid";
export default function Gallery() {
  return (
    <main>
      <PageHero title="Our work" text="Filter by product. Replace these tiles with photos of your real jobs." />
      <section className="mx-auto max-w-6xl px-5 py-16"><GalleryGrid /></section>
    </main>
  );
}
