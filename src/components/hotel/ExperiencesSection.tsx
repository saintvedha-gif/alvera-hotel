import { experiences } from "@/data/experiences";
import Reveal from "./Reveal";

export default function ExperiencesSection() {
  return (
    <section className="bg-cream py-24">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="mx-auto max-w-xl text-center">
          <span className="text-xs uppercase tracking-[0.3em] text-gold">
            Vivir ALVÉRA
          </span>
          <h2 className="mt-3 font-serif text-4xl text-ink">Experiencias</h2>
        </Reveal>

        <div className="mt-16 space-y-16">
          {experiences.map((exp, i) => (
            <Reveal
              key={exp.slug}
              className={`flex flex-col items-center gap-8 md:flex-row ${
                i % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className="h-72 w-full overflow-hidden md:w-1/2">
                <img
                  src={exp.image}
                  alt={exp.name}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="w-full md:w-1/2">
                <h3 className="font-serif text-3xl text-ink">{exp.name}</h3>
                <p className="mt-4 max-w-md text-sm font-light leading-relaxed text-ink/70">
                  {exp.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
