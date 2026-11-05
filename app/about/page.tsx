import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { SHOP } from "@/lib/data";
const why = [["Fast delivery", "Most flex and card jobs are ready within a day."], ["True colours", "We check proofs so your brand colour prints as designed."], ["Fair prices", "Local rates with no hidden design or setup fees."]];
export default function About() {
  return (
    <main>
      <PageHero title="About us" text="A Noorpur print shop that has served local businesses, schools and families for years." />
      <section className="mx-auto grid max-w-6xl gap-10 px-5 py-20 md:grid-cols-2">
        <Reveal x={-50}><h2 className="font-display text-4xl font-extrabold">Run by {SHOP.owner}</h2></Reveal>
        <Reveal x={50}><p className="text-lg text-ink/75">{SHOP.name} is on the Bijnor-Moradabad Road near VSM Academy. We print flex banners, visiting cards, wedding cards, vinyl and hoardings, and we help you with the design if you only have an idea.</p></Reveal>
      </section>
      <section className="mx-auto grid max-w-6xl gap-5 px-5 md:grid-cols-3">
        {why.map(([t, d], i) => <Reveal key={t} delay={i * 0.12}><Card className="h-full"><CardTitle>{t}</CardTitle><CardContent>{d}</CardContent></Card></Reveal>)}
      </section>
    </main>
  );
}
