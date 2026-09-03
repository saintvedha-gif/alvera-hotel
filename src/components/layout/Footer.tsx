import { Instagram } from "lucide-react";
import Link from "next/link";
import { hotel } from "@/config/hotel";

export default function Footer() {
  return (
    <footer className="bg-ink px-6 py-16 text-cream">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-4">
        <div>
          <p className="font-serif text-lg tracking-widest">{hotel.name}</p>
          <p className="mt-3 text-sm font-light text-cream/70">{hotel.slogan}</p>
        </div>

        <div>
          <p className="mb-3 text-xs uppercase tracking-widest text-gold">Explorar</p>
          <ul className="space-y-2 text-sm text-cream/80">
            <li><Link href="/habitaciones">Habitaciones</Link></li>
            <li><Link href="/experiencias">Experiencias</Link></li>
            <li><Link href="/gastronomia">Gastronomía</Link></li>
            <li><Link href="/galeria">Galería</Link></li>
            <li><Link href="/nosotros">Nosotros</Link></li>
            <li><Link href="/ubicacion">Ubicación</Link></li>
          </ul>
        </div>

        <div>
          <p className="mb-3 text-xs uppercase tracking-widest text-gold">Contacto</p>
          <ul className="space-y-2 text-sm text-cream/80">
            <li>{hotel.address}</li>
            <li>{hotel.phone}</li>
            <li>{hotel.email}</li>
          </ul>
        </div>

        <div>
          <p className="mb-3 text-xs uppercase tracking-widest text-gold">Síguenos</p>
          <a href={hotel.social.instagram} className="inline-block text-cream/80 hover:text-gold">
            <Instagram size={20} />
          </a>
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-7xl border-t border-cream/10 pt-6 text-xs text-cream/50">
        © {new Date().getFullYear()} {hotel.name}. Todos los derechos reservados. · <Link href="/politicas">Políticas</Link>
      </div>
    </footer>
  );
}
