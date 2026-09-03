"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { hotel } from "@/config/hotel";

const links = [
  { href: "/habitaciones", label: "Habitaciones" },
  { href: "/experiencias", label: "Experiencias" },
  { href: "/gastronomia", label: "Gastronomía" },
  { href: "/galeria", label: "Galería" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/contacto", label: "Contacto" },
];

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!isHome) return;
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  // Solo el home tiene Hero oscuro debajo del navbar; ahí empieza transparente.
  // En el resto de páginas el navbar siempre va sólido para que se lea bien.
  const solid = !isHome || scrolled;

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-colors duration-500 ${
        solid ? "bg-cream/95 shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <a
          href="/"
          className={`font-serif text-lg tracking-widest ${
            solid ? "text-ink" : "text-cream"
          }`}
        >
          {hotel.name}
        </a>

        <nav className="hidden gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`text-xs uppercase tracking-widest transition hover:text-gold ${
                solid ? "text-ink" : "text-cream"
              }`}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="/reservar"
          className={`hidden border px-5 py-2 text-xs uppercase tracking-widest transition md:block ${
            solid
              ? "border-ink text-ink hover:bg-ink hover:text-cream"
              : "border-cream text-cream hover:bg-cream hover:text-ink"
          }`}
        >
          Reservar
        </a>

        <button
          onClick={() => setOpen(true)}
          className={`md:hidden ${solid ? "text-ink" : "text-cream"}`}
          aria-label="Abrir menú"
        >
          <Menu size={26} />
        </button>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 flex flex-col bg-ink px-6 py-6 text-cream md:hidden">
          <div className="flex items-center justify-between">
            <span className="font-serif text-lg tracking-widest">{hotel.name}</span>
            <button onClick={() => setOpen(false)} aria-label="Cerrar menú">
              <X size={26} />
            </button>
          </div>
          <nav className="mt-16 flex flex-1 flex-col items-center justify-center gap-8">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="font-serif text-2xl"
              >
                {l.label}
              </a>
            ))}
            <a
              href="/reservar"
              onClick={() => setOpen(false)}
              className="mt-6 border border-gold px-8 py-3 text-xs uppercase tracking-widest text-gold"
            >
              Reservar
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
