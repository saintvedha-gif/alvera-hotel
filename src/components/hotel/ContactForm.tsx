"use client";

import { useState } from "react";
import { Check } from "lucide-react";

type Status = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "El nombre es obligatorio";
    if (!/^\S+@\S+\.\S+$/.test(form.email)) e.email = "Email inválido";
    if (!form.phone.trim()) e.phone = "El teléfono es obligatorio";
    if (!form.message.trim()) e.message = "Escribe tu mensaje";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (ev: React.FormEvent) => {
    ev.preventDefault();
    if (!validate()) return;

    setStatus("loading");
    try {
      // Simulación de envío — reemplazar con llamada real a API/backend
      await new Promise((res) => setTimeout(res, 1200));
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="border border-ink/10 p-10 text-center">
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gold/20 text-gold">
          <Check size={24} />
        </div>
        <h3 className="font-serif text-2xl text-ink">Mensaje enviado</h3>
        <p className="mt-2 text-sm font-light text-ink/60">
          Gracias por escribirnos, {form.name}. Te responderemos pronto.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <input
            placeholder="Nombre"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full border border-ink/20 px-4 py-3 text-sm"
          />
          {errors.name && <p className="mt-1 text-xs text-red-600">{errors.name}</p>}
        </div>
        <div>
          <input
            placeholder="Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full border border-ink/20 px-4 py-3 text-sm"
          />
          {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <input
            placeholder="Teléfono"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            className="w-full border border-ink/20 px-4 py-3 text-sm"
          />
          {errors.phone && <p className="mt-1 text-xs text-red-600">{errors.phone}</p>}
        </div>
        <input
          placeholder="Asunto"
          value={form.subject}
          onChange={(e) => setForm({ ...form, subject: e.target.value })}
          className="w-full border border-ink/20 px-4 py-3 text-sm"
        />
      </div>

      <div>
        <textarea
          placeholder="Mensaje"
          rows={5}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className="w-full border border-ink/20 px-4 py-3 text-sm"
        />
        {errors.message && <p className="mt-1 text-xs text-red-600">{errors.message}</p>}
      </div>

      {status === "error" && (
        <p className="text-xs text-red-600">
          Hubo un error al enviar tu mensaje. Intenta de nuevo.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full bg-ink py-3 text-xs uppercase tracking-widest text-cream transition hover:bg-gold hover:text-ink disabled:opacity-50"
      >
        {status === "loading" ? "Enviando..." : "Enviar mensaje"}
      </button>
    </form>
  );
}
