export type Room = {
  slug: string;
  name: string;
  description: string;
  longDescription: string;
  capacity: number;
  bed: string;
  size: string;
  price: number;
  amenities: string[];
  image: string;
  gallery: string[];
};

export const rooms: Room[] = [
  {
    slug: "suite-deluxe",
    name: "Suite Deluxe",
    description: "Elegancia íntima con vista parcial al mar.",
    longDescription:
      "Un espacio pensado para el descanso, con acabados en madera cálida, luz natural abundante y un balcón privado desde donde se asoma el Caribe entre los tejados de Bocagrande.",
    capacity: 2,
    bed: "1 cama king",
    size: "38 m²",
    price: 420000,
    amenities: ["Aire acondicionado", "Minibar", "Balcón privado", "Wifi de alta velocidad"],
    image:
      "https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=1600",
    gallery: [
      "https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=1600",
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1600",
      "https://images.unsplash.com/photo-1592229505726-ca121723b8ef?q=80&w=1600",
    ],
  },
  {
    slug: "panoramic-suite",
    name: "Panoramic Suite",
    description: "Vista panorámica al mar desde una terraza propia.",
    longDescription:
      "Ubicada en los pisos superiores, esta suite ofrece ventanales de piso a techo y una terraza privada con vista abierta al mar, ideal para atardeceres sin interrupciones.",
    capacity: 3,
    bed: "1 cama king + sofá cama",
    size: "52 m²",
    price: 620000,
    amenities: ["Terraza privada", "Bañera de hidromasaje", "Minibar premium", "Servicio a la habitación 24h"],
    image:
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=1600",
    gallery: [
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=1600",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=1600",
      "https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=1600",
    ],
  },
  {
    slug: "presidential-suite",
    name: "Presidential Suite",
    description: "La experiencia más exclusiva de ALVÉRA.",
    longDescription:
      "El espacio insignia del hotel: sala independiente, comedor privado, jacuzzi con vista al mar y mayordomo personal disponible durante toda la estancia.",
    capacity: 4,
    bed: "2 camas king",
    size: "95 m²",
    price: 1250000,
    amenities: ["Mayordomo personal", "Jacuzzi privado", "Sala y comedor independientes", "Acceso VIP a spa"],
    image:
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1600",
    gallery: [
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1600",
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=1600",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=1600",
    ],
  },
];
