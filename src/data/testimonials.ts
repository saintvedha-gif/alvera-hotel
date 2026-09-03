export type Testimonial = {
  name: string;
  country: string;
  context: string;
  quote: string;
};

export const testimonials: Testimonial[] = [
  {
    name: "Laura M.",
    country: "México",
    context: "Aniversario de bodas",
    quote:
      "Cada detalle en ALVÉRA parecía pensado para nosotros. El atardecer desde la suite fue el regalo más grande de nuestro aniversario.",
  },
  {
    name: "James T.",
    country: "Estados Unidos",
    context: "Viaje de negocios extendido",
    quote:
      "Llegué por trabajo y terminé extendiendo mi estadía dos noches más. El servicio y la tranquilidad del lugar son excepcionales.",
  },
  {
    name: "Camila R.",
    country: "Colombia",
    context: "Escapada en pareja",
    quote:
      "La Panoramic Suite superó cualquier expectativa. Volveremos, sin duda, para celebrar cada ocasión especial.",
  },
];
