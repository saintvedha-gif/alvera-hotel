import type { Metadata } from "next";
import { hotel } from "@/config/hotel";

export const metadata: Metadata = {
  title: `Gastronomía — ${hotel.name}`,
  description: "Restaurante Alma, cocina caribeña contemporánea frente al mar.",
};

export default function GastronomiaPage() {
  return (
    <main className="pt-24">
      <div className="relative h-[50vh] w-full overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?q=80&w=1600"
          alt="Restaurante ALVÉRA"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-ink/40" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-cream">
          <span className="text-xs uppercase tracking-[0.3em] text-gold">Sabores del Caribe</span>
          <h1 className="mt-3 font-serif text-5xl">Restaurante Alma</h1>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-6 py-16 text-center">
        <p className="text-base font-light leading-relaxed text-ink/80">
          En Restaurante Alma, la cocina caribeña se reinventa con técnicas contemporáneas.
          Ingredientes locales, pescados del día y un servicio pensado para hacer de cada
          cena una experiencia memorable frente al mar.
        </p>

        <div className="mt-10 grid gap-6 text-sm text-ink/70 md:grid-cols-3">
          <div>
            <p className="font-serif text-lg text-ink">Desayuno</p>
            <p>6:30 am – 10:30 am</p>
          </div>
          <div>
            <p className="font-serif text-lg text-ink">Almuerzo</p>
            <p>12:00 pm – 3:30 pm</p>
          </div>
          <div>
            <p className="font-serif text-lg text-ink">Cena</p>
            <p>6:30 pm – 10:30 pm</p>
          </div>
        </div>

        <a
          href={`https://wa.me/${hotel.whatsapp}?text=${encodeURIComponent(
            "Hola, quisiera reservar una mesa en Restaurante Alma."
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-block border border-ink px-8 py-3 text-xs uppercase tracking-widest text-ink hover:bg-ink hover:text-cream"
        >
          Reservar mesa
        </a>
      </div>
    </main>
  );
}
