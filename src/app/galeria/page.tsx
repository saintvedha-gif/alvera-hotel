import type { Metadata } from "next";
import { hotel } from "@/config/hotel";
import GallerySection from "@/components/hotel/GallerySection";

export const metadata: Metadata = {
  title: `Galería — ${hotel.name}`,
  description: "Fotografías de habitaciones, piscina y experiencias en ALVÉRA.",
};

export default function GaleriaPage() {
  return (
    <main className="pt-24">
      <div className="px-6 pt-8 text-center">
        <span className="text-xs uppercase tracking-[0.3em] text-gold">ALVÉRA</span>
        <h1 className="mt-3 font-serif text-5xl text-ink">Galería</h1>
      </div>
      <GallerySection />
    </main>
  );
}
