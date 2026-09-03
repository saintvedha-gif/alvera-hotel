"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { gallery } from "@/data/gallery";

export default function GallerySection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="mx-auto max-w-xl text-center">
        <span className="text-xs uppercase tracking-[0.3em] text-gold">Galería</span>
        <h2 className="mt-3 font-serif text-4xl text-ink">Momentos ALVÉRA</h2>
      </div>

      <div className="mt-14 columns-2 gap-4 md:columns-3">
        {gallery.map((img, i) => (
          <motion.button
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
            onClick={() => setOpen(i)}
            className="mb-4 block w-full overflow-hidden"
          >
            <img
              src={img}
              alt={`Galería ${i + 1}`}
              className="w-full object-cover transition duration-500 hover:scale-105"
            />
          </motion.button>
        ))}
      </div>

      {open !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-ink/95 px-4">
          <button
            onClick={() => setOpen(null)}
            className="absolute right-6 top-6 text-cream"
            aria-label="Cerrar"
          >
            <X size={28} />
          </button>
          <button
            onClick={() => setOpen((open + gallery.length - 1) % gallery.length)}
            className="absolute left-4 text-cream md:left-10"
            aria-label="Anterior"
          >
            <ChevronLeft size={32} />
          </button>
          <img
            src={gallery[open]}
            alt={`Galería ${open + 1}`}
            className="max-h-[80vh] max-w-3xl object-contain"
          />
          <button
            onClick={() => setOpen((open + 1) % gallery.length)}
            className="absolute right-4 text-cream md:right-10"
            aria-label="Siguiente"
          >
            <ChevronRight size={32} />
          </button>
        </div>
      )}
    </section>
  );
}
