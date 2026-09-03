import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { hotel } from "@/config/hotel";
import ContactForm from "@/components/hotel/ContactForm";

export const metadata: Metadata = {
  title: `Contacto — ${hotel.name}`,
  description: `Escríbenos o contáctanos por WhatsApp — ${hotel.name}.`,
};

export default function ContactoPage() {
  return (
    <main className="pt-24">
      <div className="px-6 pt-8 text-center">
        <span className="text-xs uppercase tracking-[0.3em] text-gold">ALVÉRA</span>
        <h1 className="mt-3 font-serif text-5xl text-ink">Contacto</h1>
      </div>

      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 md:grid-cols-2">
        <div className="space-y-6">
          <div className="flex items-center gap-3 text-ink/80">
            <Phone size={18} className="text-gold" /> {hotel.phone}
          </div>
          <div className="flex items-center gap-3 text-ink/80">
            <Mail size={18} className="text-gold" /> {hotel.email}
          </div>
          <div className="flex items-center gap-3 text-ink/80">
            <MapPin size={18} className="text-gold" /> {hotel.address}
          </div>
          <div className="flex items-center gap-3 text-ink/80">
            <Clock size={18} className="text-gold" /> Recepción 24 horas
          </div>
        </div>

        <ContactForm />
      </div>
    </main>
  );
}
