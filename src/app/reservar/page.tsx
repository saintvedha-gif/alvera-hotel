import type { Metadata } from "next";
import { Suspense } from "react";
import { hotel } from "@/config/hotel";
import BookingForm from "@/components/booking/BookingForm";

export const metadata: Metadata = {
  title: `Reservar — ${hotel.name}`,
  description: "Solicita tu reserva en ALVÉRA, confirmación manual sin pagos en línea.",
};

export default function ReservarPage() {
  return (
    <main className="min-h-screen px-6 pt-24">
      <Suspense fallback={null}>
        <BookingForm />
      </Suspense>
    </main>
  );
}
