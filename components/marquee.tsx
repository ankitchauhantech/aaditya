export function Marquee({ items }: { items: readonly (readonly [string, string])[] }) {
  const row = [...items, ...items];
  return (
    <div className="overflow-hidden border-y-2 border-ink bg-sun py-4">
      <div className="flex w-max animate-marquee gap-10 font-display text-2xl font-bold">
        {row.map(([t], i) => <span key={i} className="flex items-center gap-10">{t}<span className="h-3 w-3 rounded-full bg-magenta" /></span>)}
      </div>
    </div>
  );
}
