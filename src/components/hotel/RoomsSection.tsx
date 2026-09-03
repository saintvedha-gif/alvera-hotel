import { rooms } from "@/data/rooms";
import RoomCard from "./RoomCard";
import Reveal from "./Reveal";

export default function RoomsSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <Reveal className="mx-auto max-w-xl text-center">
        <span className="text-xs uppercase tracking-[0.3em] text-gold">Alojamiento</span>
        <h2 className="mt-3 font-serif text-4xl text-ink">Habitaciones y suites</h2>
        <p className="mt-4 text-sm font-light text-ink/60">
          Cada espacio en ALVÉRA está diseñado para que el tiempo se sienta distinto.
        </p>
      </Reveal>

      <div className="mt-14 grid gap-8 md:grid-cols-3">
        {rooms.map((room, i) => (
          <Reveal key={room.slug} delay={i * 0.1}>
            <RoomCard room={room} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
