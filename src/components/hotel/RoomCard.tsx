import { Users, BedDouble, Maximize } from "lucide-react";
import type { Room } from "@/data/rooms";

export default function RoomCard({ room }: { room: Room }) {
  return (
    <a
      href={`/habitaciones/${room.slug}`}
      className="group block overflow-hidden bg-cream"
    >
      <div className="relative h-72 overflow-hidden">
        <img
          src={room.image}
          alt={room.name}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
        />
      </div>

      <div className="border border-t-0 border-ink/10 p-6">
        <h3 className="font-serif text-2xl text-ink">{room.name}</h3>
        <p className="mt-2 text-sm font-light text-ink/70">{room.description}</p>

        <div className="mt-4 flex gap-5 text-xs text-ink/60">
          <span className="flex items-center gap-1">
            <Users size={14} /> {room.capacity}
          </span>
          <span className="flex items-center gap-1">
            <BedDouble size={14} /> {room.bed}
          </span>
          <span className="flex items-center gap-1">
            <Maximize size={14} /> {room.size}
          </span>
        </div>

        <div className="mt-5 flex items-center justify-between border-t border-ink/10 pt-4">
          <span className="text-sm text-ink/80">
            Desde <strong>${room.price.toLocaleString("es-CO")}</strong> / noche
          </span>
          <span className="text-xs uppercase tracking-widest text-gold group-hover:underline">
            Ver más
          </span>
        </div>
      </div>
    </a>
  );
}
