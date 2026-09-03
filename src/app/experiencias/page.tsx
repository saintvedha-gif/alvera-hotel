import type { Metadata } from "next";
import { hotel } from "@/config/hotel";
import ExperiencesSection from "@/components/hotel/ExperiencesSection";

export const metadata: Metadata = {
  title: `Experiencias — ${hotel.name}`,
  description: "Spa, piscina, rooftop y wellness en ALVÉRA.",
};

export default function ExperienciasPage() {
  return (
    <main className="pt-24">
      <div className="px-6 pt-8 text-center">
        <span className="text-xs uppercase tracking-[0.3em] text-gold">ALVÉRA</span>
        <h1 className="mt-3 font-serif text-5xl text-ink">Experiencias</h1>
      </div>
      <ExperiencesSection />
    </main>
  );
}
