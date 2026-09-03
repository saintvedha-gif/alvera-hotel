import { Quote } from "lucide-react";
import { testimonials } from "@/data/testimonials";
import Reveal from "./Reveal";

export default function TestimonialsSection() {
  return (
    <section className="bg-ink py-24 text-cream">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="mx-auto max-w-xl text-center">
          <span className="text-xs uppercase tracking-[0.3em] text-gold">
            Voces de ALVÉRA
          </span>
          <h2 className="mt-3 font-serif text-4xl">Lo que dicen nuestros huéspedes</h2>
        </Reveal>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.1} className="border border-cream/10 p-6">
              <Quote size={20} className="text-gold" />
              <p className="mt-4 text-sm font-light leading-relaxed text-cream/80">
                {t.quote}
              </p>
              <div className="mt-6 border-t border-cream/10 pt-4 text-xs text-cream/60">
                <p className="font-serif text-sm text-cream">{t.name}</p>
                <p>{t.country} · {t.context}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
