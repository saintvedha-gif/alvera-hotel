import type { Metadata } from "next";
import { hotel } from "@/config/hotel";
import { rooms } from "@/data/rooms";
import RoomCard from "@/components/hotel/RoomCard";
import Reveal from "@/components/hotel/Reveal";

export const metadata: Metadata = {
  title: `Habitaciones — ${hotel.name}`,
  description: "Suites y habitaciones de lujo frente al mar en ALVÉRA.",
};

export default function HabitacionesPage() {
  return (
    <main className="pt-24">
      <div className="px-6 pt-8 text-center">
        <span className="text-xs uppercase tracking-[0.3em] text-gold">ALVÉRA</span>
        <h1 className="mt-3 font-serif text-5xl text-ink">Habitaciones y suites</h1>
        <p className="mx-auto mt-4 max-w-xl text-sm font-light text-ink/60">
          Cada espacio está diseñado para que el tiempo se sienta distinto.
        </p>
      </div>

      <div className="mx-auto mt-14 grid max-w-7xl gap-8 px-6 pb-24 md:grid-cols-3">
        {rooms.map((room, i) => (
          <Reveal key={room.slug} delay={i * 0.1}>
            <RoomCard room={room} />
          </Reveal>
        ))}
      </div>
    </main>
  );
}
