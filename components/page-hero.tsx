export function PageHero({ title, text }: { title: string; text: string }) {
  return (
    <section className="relative overflow-hidden bg-ink py-20 sm:py-24 text-white">
      <div className="halftone absolute inset-0 text-magenta/30 pointer-events-none" />
      <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-cyan mix-blend-screen opacity-80 pointer-events-none blur-xl" />
      <div className="relative mx-auto max-w-6xl px-5">
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
          {title}
        </h1>
        <p className="mt-4 max-w-xl text-base sm:text-lg text-white/80 leading-relaxed font-normal">
          {text}
        </p>
      </div>
    </section>
  );
}
