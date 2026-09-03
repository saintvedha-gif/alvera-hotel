import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Users, BedDouble, Maximize, Check } from "lucide-react";
import { rooms } from "@/data/rooms";

export function generateStaticParams() {
  return rooms.map((r) => ({ slug: r.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const room = rooms.find((r) => r.slug === params.slug);
  return {
    title: room ? `${room.name} — ALVÉRA` : "Habitación — ALVÉRA",
    description: room?.description ?? "Habitaciones de lujo en ALVÉRA.",
  };
}

export default function RoomPage({ params }: { params: { slug: string } }) {
  const room = rooms.find((r) => r.slug === params.slug);
  if (!room) return notFound();

  return (
    <main className="pt-24">
      <div className="relative h-[60vh] w-full overflow-hidden">
        <img src={room.image} alt={room.name} className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/70 to-transparent" />
        <div className="absolute bottom-8 left-6 md:left-12">
          <h1 className="font-serif text-4xl text-cream md:text-6xl">{room.name}</h1>
        </div>
      </div>

      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 md:grid-cols-3">
        <div className="md:col-span-2">
          <p className="text-base font-light leading-relaxed text-ink/80">
            {room.longDescription}
          </p>

          <div className="mt-8 grid grid-cols-1 gap-4 border-y border-ink/10 py-6 text-sm text-ink/70 sm:grid-cols-3">
            <span className="flex flex-col items-center gap-1 text-center">
              <Users size={18} /> {room.capacity} huéspedes
            </span>
            <span className="flex flex-col items-center gap-1 text-center">
              <BedDouble size={18} /> {room.bed}
            </span>
            <span className="flex flex-col items-center gap-1 text-center">
              <Maximize size={18} /> {room.size}
            </span>
          </div>

          <div className="mt-8">
            <h2 className="font-serif text-xl text-ink">Amenidades</h2>
            <ul className="mt-4 grid grid-cols-2 gap-3 text-sm text-ink/70">
              {room.amenities.map((a) => (
                <li key={a} className="flex items-center gap-2">
                  <Check size={14} className="text-gold" /> {a}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3">
            {room.gallery.map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`${room.name} ${i + 1}`}
                className="h-32 w-full object-cover sm:h-40"
              />
            ))}
          </div>
        </div>

        <aside className="h-fit border border-ink/10 p-6">
          <p className="text-sm text-ink/60">Desde</p>
          <p className="font-serif text-3xl text-ink">
            ${room.price.toLocaleString("es-CO")}
            <span className="text-sm font-sans font-light text-ink/50"> / noche</span>
          </p>
          <a
            href={`/reservar?habitacion=${room.slug}`}
            className="mt-6 block bg-ink py-3 text-center text-xs uppercase tracking-widest text-cream transition hover:bg-gold hover:text-ink"
          >
            Solicitar reserva
          </a>
        </aside>
      </div>
    </main>
  );
}
