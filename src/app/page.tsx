import Hero from "@/components/hotel/Hero";
import RoomsSection from "@/components/hotel/RoomsSection";
import ExperiencesSection from "@/components/hotel/ExperiencesSection";
import TestimonialsSection from "@/components/hotel/TestimonialsSection";

export default function Home() {
  return (
    <main>
      <Hero />
      <RoomsSection />
      <ExperiencesSection />
      <TestimonialsSection />
    </main>
  );
}
