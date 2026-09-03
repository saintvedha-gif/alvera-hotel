import { Instagram } from "lucide-react";
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
            <li><a href="/habitaciones">Habitaciones</a></li>
            <li><a href="/experiencias">Experiencias</a></li>
            <li><a href="/gastronomia">Gastronomía</a></li>
            <li><a href="/galeria">Galería</a></li>
            <li><a href="/nosotros">Nosotros</a></li>
            <li><a href="/ubicacion">Ubicación</a></li>
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
        © {new Date().getFullYear()} {hotel.name}. Todos los derechos reservados. · <a href="/politicas">Políticas</a>
      </div>
    </footer>
  );
}
