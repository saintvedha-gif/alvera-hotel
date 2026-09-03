export type Experience = {
  slug: string;
  name: string;
  description: string;
  image: string;
};

export const experiences: Experience[] = [
  {
    slug: "spa",
    name: "Spa ALVÉRA",
    description:
      "Rituales de bienestar inspirados en la brisa del Caribe, con terapeutas dedicados y aromas locales.",
    image:
      "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=1600",
  },
  {
    slug: "piscina-infinita",
    name: "Piscina infinita",
    description:
      "Suspendida frente al mar, la piscina de ALVÉRA es el lugar donde el horizonte desaparece.",
    image:
      "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?q=80&w=1600",
  },
  {
    slug: "rooftop",
    name: "Rooftop & Bar",
    description:
      "Cócteles de autor al atardecer, con la ciudad amurallada dibujada en el horizonte.",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1600",
  },
  {
    slug: "wellness",
    name: "Wellness & Yoga",
    description:
      "Sesiones de yoga al amanecer frente al mar, guiadas por instructores certificados.",
    image:
      "https://images.unsplash.com/photo-1600334129128-685c5582fd35?q=80&w=1600",
  },
];
