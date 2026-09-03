"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Check } from "lucide-react";
import { rooms } from "@/data/rooms";
import { hotel } from "@/config/hotel";

type FormData = {
  checkIn: string;
  checkOut: string;
  adults: number;
  children: number;
  roomSlug: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  country: string;
  comments: string;
};

const steps = [
  "Fechas",
  "Huéspedes",
  "Habitación",
  "Tus datos",
  "Resumen",
];

export default function BookingForm() {
  const searchParams = useSearchParams();
  const preselected = searchParams.get("habitacion") ?? "";

  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [data, setData] = useState<FormData>({
    checkIn: "",
    checkOut: "",
    adults: 2,
    children: 0,
    roomSlug: preselected,
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    country: "",
    comments: "",
  });

  const selectedRoom = rooms.find((r) => r.slug === data.roomSlug);

  const nights = useMemo(() => {
    if (!data.checkIn || !data.checkOut) return 0;
    const diff =
      (new Date(data.checkOut).getTime() - new Date(data.checkIn).getTime()) /
      (1000 * 60 * 60 * 24);
    return diff > 0 ? diff : 0;
  }, [data.checkIn, data.checkOut]);

  const total = selectedRoom ? selectedRoom.price * nights : 0;

  const canAdvance = () => {
    if (step === 0) return data.checkIn && data.checkOut && nights > 0;
    if (step === 1) return data.adults > 0;
    if (step === 2) return !!data.roomSlug;
    if (step === 3)
      return data.firstName && data.lastName && data.email && data.phone;
    return true;
  };

  if (submitted) {
    return (
      <div className="mx-auto max-w-lg py-24 text-center">
        <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-gold/20 text-gold">
          <Check size={28} />
        </div>
        <h2 className="font-serif text-3xl text-ink">Solicitud enviada</h2>
        <p className="mt-4 text-sm font-light text-ink/70">
          Gracias, {data.firstName}. Hemos recibido tu solicitud de reserva para{" "}
          {selectedRoom?.name}. Nuestro equipo te contactará a {data.email} o{" "}
          {data.phone} para confirmar la disponibilidad.
        </p>
        <a
          href="/"
          className="mt-8 inline-block border border-ink px-8 py-3 text-xs uppercase tracking-widest text-ink hover:bg-ink hover:text-cream"
        >
          Volver al inicio
        </a>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-2xl py-16">
      {/* progreso */}
      <div className="mb-12 flex items-center justify-between gap-1">
        {steps.map((label, i) => (
          <div key={label} className="flex flex-1 flex-col items-center">
            <div
              className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs sm:h-8 sm:w-8 ${
                i <= step ? "bg-ink text-cream" : "bg-ink/10 text-ink/40"
              }`}
            >
              {i + 1}
            </div>
            <span className="mt-2 hidden text-[10px] uppercase tracking-widest text-ink/50 md:block">
              {label}
            </span>
          </div>
        ))}
      </div>

      {/* paso 0: fechas */}
      {step === 0 && (
        <div className="space-y-6">
          <h2 className="font-serif text-2xl text-ink">¿Cuándo nos visitas?</h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <label className="block">
              <span className="text-xs uppercase tracking-widest text-ink/60">
                Entrada
              </span>
              <input
                type="date"
                value={data.checkIn}
                onChange={(e) => setData({ ...data, checkIn: e.target.value })}
                className="mt-2 w-full border border-ink/20 px-4 py-3 text-sm"
              />
            </label>
            <label className="block">
              <span className="text-xs uppercase tracking-widest text-ink/60">
                Salida
              </span>
              <input
                type="date"
                value={data.checkOut}
                onChange={(e) => setData({ ...data, checkOut: e.target.value })}
                className="mt-2 w-full border border-ink/20 px-4 py-3 text-sm"
              />
            </label>
          </div>
          {data.checkIn && data.checkOut && nights <= 0 && (
            <p className="text-xs text-red-600">
              La fecha de salida debe ser posterior a la de entrada.
            </p>
          )}
        </div>
      )}

      {/* paso 1: huéspedes */}
      {step === 1 && (
        <div className="space-y-6">
          <h2 className="font-serif text-2xl text-ink">¿Quiénes viajan?</h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <label className="block">
              <span className="text-xs uppercase tracking-widest text-ink/60">
                Adultos
              </span>
              <input
                type="number"
                min={1}
                value={data.adults}
                onChange={(e) =>
                  setData({ ...data, adults: Number(e.target.value) })
                }
                className="mt-2 w-full border border-ink/20 px-4 py-3 text-sm"
              />
            </label>
            <label className="block">
              <span className="text-xs uppercase tracking-widest text-ink/60">
                Niños
              </span>
              <input
                type="number"
                min={0}
                value={data.children}
                onChange={(e) =>
                  setData({ ...data, children: Number(e.target.value) })
                }
                className="mt-2 w-full border border-ink/20 px-4 py-3 text-sm"
              />
            </label>
          </div>
        </div>
      )}

      {/* paso 2: habitación */}
      {step === 2 && (
        <div className="space-y-6">
          <h2 className="font-serif text-2xl text-ink">Elige tu habitación</h2>
          <div className="space-y-3">
            {rooms.map((room) => (
              <button
                key={room.slug}
                onClick={() => setData({ ...data, roomSlug: room.slug })}
                className={`flex w-full items-center gap-4 border p-3 text-left transition ${
                  data.roomSlug === room.slug
                    ? "border-gold bg-gold/5"
                    : "border-ink/15"
                }`}
              >
                <img
                  src={room.image}
                  alt={room.name}
                  className="h-16 w-20 object-cover"
                />
                <div className="flex-1">
                  <p className="font-serif text-base text-ink">{room.name}</p>
                  <p className="text-xs text-ink/60">
                    ${room.price.toLocaleString("es-CO")} / noche
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* paso 3: datos */}
      {step === 3 && (
        <div className="space-y-4">
          <h2 className="font-serif text-2xl text-ink">Tus datos</h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <input
              placeholder="Nombre"
              value={data.firstName}
              onChange={(e) => setData({ ...data, firstName: e.target.value })}
              className="border border-ink/20 px-4 py-3 text-sm"
            />
            <input
              placeholder="Apellido"
              value={data.lastName}
              onChange={(e) => setData({ ...data, lastName: e.target.value })}
              className="border border-ink/20 px-4 py-3 text-sm"
            />
          </div>
          <input
            placeholder="Email"
            type="email"
            value={data.email}
            onChange={(e) => setData({ ...data, email: e.target.value })}
            className="w-full border border-ink/20 px-4 py-3 text-sm"
          />
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <input
              placeholder="Teléfono"
              value={data.phone}
              onChange={(e) => setData({ ...data, phone: e.target.value })}
              className="border border-ink/20 px-4 py-3 text-sm"
            />
            <input
              placeholder="País"
              value={data.country}
              onChange={(e) => setData({ ...data, country: e.target.value })}
              className="border border-ink/20 px-4 py-3 text-sm"
            />
          </div>
          <textarea
            placeholder="Comentarios (opcional)"
            value={data.comments}
            onChange={(e) => setData({ ...data, comments: e.target.value })}
            className="w-full border border-ink/20 px-4 py-3 text-sm"
            rows={3}
          />
        </div>
      )}

      {/* paso 4: resumen */}
      {step === 4 && (
        <div className="space-y-4">
          <h2 className="font-serif text-2xl text-ink">Resumen de tu solicitud</h2>
          <div className="space-y-2 border border-ink/10 p-6 text-sm text-ink/80">
            <p><strong>Habitación:</strong> {selectedRoom?.name}</p>
            <p><strong>Entrada:</strong> {data.checkIn}</p>
            <p><strong>Salida:</strong> {data.checkOut}</p>
            <p><strong>Noches:</strong> {nights}</p>
            <p><strong>Huéspedes:</strong> {data.adults} adultos, {data.children} niños</p>
            <p><strong>Huésped principal:</strong> {data.firstName} {data.lastName}</p>
            <p><strong>Precio estimado:</strong> ${total.toLocaleString("es-CO")}</p>
            <p className="pt-2 text-xs text-ink/50">
              Este valor es estimado. {hotel.name} confirmará disponibilidad y precio final
              por {data.email} o WhatsApp.
            </p>
          </div>
        </div>
      )}

      {/* navegación */}
      <div className="mt-10 flex justify-between">
        <button
          onClick={() => setStep((s) => Math.max(0, s - 1))}
          className={`text-xs uppercase tracking-widest text-ink/50 ${
            step === 0 ? "invisible" : ""
          }`}
        >
          Atrás
        </button>

        {step < steps.length - 1 ? (
          <button
            disabled={!canAdvance()}
            onClick={() => setStep((s) => s + 1)}
            className="bg-ink px-8 py-3 text-xs uppercase tracking-widest text-cream disabled:opacity-30"
          >
            Continuar
          </button>
        ) : (
          <button
            onClick={() => setSubmitted(true)}
            className="bg-gold px-8 py-3 text-xs uppercase tracking-widest text-ink"
          >
            Solicitar reserva
          </button>
        )}
      </div>
    </div>
  );
}
