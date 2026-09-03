import type { Metadata } from "next";
import { MapPin } from "lucide-react";
import { hotel } from "@/config/hotel";

export const metadata: Metadata = {
  title: `Ubicación — ${hotel.name}`,
  description: `Cómo llegar a ${hotel.name} en ${hotel.city}.`,
};

const nearby = [
  { name: "Ciudad Amurallada", distance: "1.8 km" },
  { name: "Aeropuerto Rafael Núñez", distance: "3.2 km" },
  { name: "Playa de Bocagrande", distance: "300 m" },
  { name: "Centro de convenciones", distance: "1.2 km" },
];

export default function UbicacionPage() {
  return (
    <main className="pt-24">
      <div className="px-6 pt-8 text-center">
        <span className="text-xs uppercase tracking-[0.3em] text-gold">ALVÉRA</span>
        <h1 className="mt-3 font-serif text-5xl text-ink">Ubicación</h1>
      </div>

      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-2">
        <div className="flex h-80 items-center justify-center bg-ink/5 text-ink/40">
          <MapPin size={36} />
          <span className="ml-2 text-sm">Mapa — {hotel.address}</span>
        </div>

        <div>
          <p className="text-sm font-light text-ink/70">{hotel.address}</p>
          <div className="mt-8 space-y-4">
            {nearby.map((p) => (
              <div
                key={p.name}
                className="flex justify-between border-b border-ink/10 pb-3 text-sm text-ink/70"
              >
                <span>{p.name}</span>
                <span className="text-ink/50">{p.distance}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
