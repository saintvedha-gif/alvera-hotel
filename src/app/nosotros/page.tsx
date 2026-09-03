import type { Metadata } from "next";
import { hotel } from "@/config/hotel";

export const metadata: Metadata = {
  title: `Nosotros — ${hotel.name}`,
  description: "La historia y filosofía detrás de ALVÉRA.",
};

export default function NosotrosPage() {
  return (
    <main className="pt-24">
      <div className="relative h-[55vh] w-full overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1600"
          alt="Arquitectura ALVÉRA"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-ink/40" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-cream">
          <span className="text-xs uppercase tracking-[0.3em] text-gold">Nuestra historia</span>
          <h1 className="mt-3 font-serif text-5xl">{hotel.name}</h1>
        </div>
      </div>

      <div className="mx-auto max-w-3xl space-y-8 px-6 py-20 text-center">
        <p className="text-base font-light leading-relaxed text-ink/80">
          ALVÉRA nació de una idea simple: la hospitalidad de lujo no debe sentirse
          impostada, debe sentirse propia del lugar. Diseñado por arquitectos locales
          y decorado con piezas de artesanos de la región, cada rincón del hotel dialoga
          con el mar Caribe que lo rodea.
        </p>
        <p className="text-base font-light leading-relaxed text-ink/80">
          Nuestra filosofía se resume en tres palabras: calma, autenticidad y detalle.
          Creemos que el verdadero lujo está en la atención genuina — recordar cómo
          te gusta el café, anticipar lo que necesitas antes de que lo pidas.
        </p>
        <p className="text-base font-light leading-relaxed text-ink/80">
          Hoy, ALVÉRA es un refugio para quienes buscan desconectarse sin renunciar
          a la excelencia, en el corazón de Cartagena.
        </p>
      </div>
    </main>
  );
}
