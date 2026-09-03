import type { Metadata } from "next";
import { hotel } from "@/config/hotel";

export const metadata: Metadata = {
  title: `Políticas — ${hotel.name}`,
  description: "Políticas de reserva, cancelación y estadía.",
};

const policies = [
  {
    title: "Check-in / Check-out",
    text: "Check-in a partir de las 3:00 pm. Check-out hasta las 12:00 pm.",
  },
  {
    title: "Cancelaciones",
    text: "Cancelación gratuita hasta 48 horas antes de la fecha de llegada.",
  },
  {
    title: "Niños",
    text: "Los niños son bienvenidos. Consulta tarifas especiales al confirmar tu reserva.",
  },
  {
    title: "Mascotas",
    text: "No se permite el ingreso de mascotas, salvo animales de asistencia.",
  },
  {
    title: "Métodos de confirmación",
    text: "Todas las reservas solicitadas por este sitio se confirman manualmente por nuestro equipo vía email o WhatsApp.",
  },
];

export default function PoliticasPage() {
  return (
    <main className="pt-24">
      <div className="px-6 pt-8 text-center">
        <span className="text-xs uppercase tracking-[0.3em] text-gold">ALVÉRA</span>
        <h1 className="mt-3 font-serif text-5xl text-ink">Políticas</h1>
      </div>

      <div className="mx-auto max-w-3xl space-y-8 px-6 py-16">
        {policies.map((p) => (
          <div key={p.title} className="border-b border-ink/10 pb-6">
            <h2 className="font-serif text-xl text-ink">{p.title}</h2>
            <p className="mt-2 text-sm font-light text-ink/70">{p.text}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
