"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { hotel } from "@/config/hotel";

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-ink">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-70"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?q=80&w=2000')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-ink/10" />

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-4 text-xs uppercase tracking-[0.3em] text-gold"
        >
          {hotel.city}
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="font-serif text-4xl text-cream sm:text-5xl md:text-7xl"
        >
          {hotel.name}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-4 max-w-md font-sans text-sm font-light text-cream/80 md:text-base"
        >
          {hotel.slogan}
        </motion.p>

        <motion.a
          href="/habitaciones"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="mt-10 border border-gold px-8 py-3 text-xs uppercase tracking-widest text-cream transition hover:bg-gold hover:text-ink"
        >
          Descubrir habitaciones
        </motion.a>
      </div>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-cream/70"
      >
        <ChevronDown size={22} />
      </motion.div>
    </section>
  );
}
