"use client";

import { useState } from "react";

type FormState = {
  name: string;
  email: string;
  service: string;
  message: string;
  website: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

const initialState: FormState = {
  name: "",
  email: "",
  service: "",
  message: "",
  website: "",
};

const serviceOptions = [
  "Izrada web stranice",
  "Izrada webshopa",
  "AI integracije",
  "Digitalni marketing",
  "Održavanje i podrška",
  "Web stranica + SEO",
  "Web stranica + oglasi",
  "Webshop + SEO",
  "Webshop + oglasi",
  "Web stranica + održavanje",
  "Webshop + održavanje",
  "AI integracije + automatizacija",
  "SEO + Google Ads + Meta oglasi",
  "Kompletna online prisutnost",
  "Drugo",
] as const;

export function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");

  function updateField(field: keyof FormState, value: string) {
    setForm((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
    if (status !== "idle") {
      setStatus("idle");
      setStatusMessage("");
    }
  }

  function validate(values: FormState) {
    const nextErrors: FormErrors = {};

    if (!values.name.trim()) nextErrors.name = "Upiši ime.";
    if (!values.email.trim()) {
      nextErrors.email = "Upiši email.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      nextErrors.email = "Neispravan email.";
    }
    if (!values.service) nextErrors.service = "Odaberi uslugu.";
    if (!values.message.trim()) nextErrors.message = "Opiši projekt.";

    return nextErrors;
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validate(form);

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }

    setStatus("submitting");
    setStatusMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(data.message || "Došlo je do greške prilikom slanja upita.");
      }

      setForm(initialState);
      setStatus("success");
      setStatusMessage("Upit je poslan. Javljamo se uskoro.");
    } catch (error) {
      setStatus("error");
      setStatusMessage(
        error instanceof Error ? error.message : "Došlo je do greške prilikom slanja upita.",
      );
    }
  }

  const inputClass =
    "h-11 rounded-xl border border-[var(--line)] bg-[var(--bg-card)]/60 px-4 text-sm text-white placeholder:text-[var(--fg-dim)] transition focus:border-[var(--accent)] focus:outline-none";

  return (
    <form className="grid gap-4" onSubmit={handleSubmit} noValidate>
      <input
        type="text"
        name="website"
        value={form.website}
        onChange={(e) => updateField("website", e.target.value)}
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-1.5">
          <span className="text-sm text-[var(--fg-muted)]">Ime i prezime</span>
          <input
            type="text"
            name="name"
            autoComplete="name"
            value={form.name}
            onChange={(e) => updateField("name", e.target.value)}
            className={inputClass}
            placeholder="Tvoje ime"
            aria-invalid={!!errors.name}
          />
          {errors.name ? <span className="text-xs text-red-400">{errors.name}</span> : null}
        </label>

        <label className="grid gap-1.5">
          <span className="text-sm text-[var(--fg-muted)]">Email</span>
          <input
            type="email"
            name="email"
            autoComplete="email"
            value={form.email}
            onChange={(e) => updateField("email", e.target.value)}
            className={inputClass}
            placeholder="ime@tvrtka.hr"
            aria-invalid={!!errors.email}
          />
          {errors.email ? <span className="text-xs text-red-400">{errors.email}</span> : null}
        </label>
      </div>

      <label className="grid gap-1.5">
        <span className="text-sm text-[var(--fg-muted)]">Vrsta usluge</span>
        <select
          name="service"
          value={form.service}
          onChange={(e) => updateField("service", e.target.value)}
          className={inputClass}
          aria-invalid={!!errors.service}
        >
          <option value="">Odaberi</option>
          {serviceOptions.map((o) => (
            <option key={o} value={o}>{o}</option>
          ))}
        </select>
        {errors.service ? <span className="text-xs text-red-400">{errors.service}</span> : null}
      </label>

      <label className="grid gap-1.5">
        <span className="text-sm text-[var(--fg-muted)]">Opis projekta</span>
        <textarea
          name="message"
          rows={4}
          value={form.message}
          onChange={(e) => updateField("message", e.target.value)}
          className="min-h-28 rounded-xl border border-[var(--line)] bg-[var(--bg-card)]/60 px-4 py-3 text-sm text-white placeholder:text-[var(--fg-dim)] transition focus:border-[var(--accent)] focus:outline-none"
          placeholder="Što trebaš i koji je cilj?"
          aria-invalid={!!errors.message}
        />
        {errors.message ? <span className="text-xs text-red-400">{errors.message}</span> : null}
      </label>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="h-11 w-full rounded-xl bg-[var(--accent)] text-sm font-semibold text-[var(--bg)] transition hover:brightness-110 focus-visible:focus-ring"
      >
        {status === "submitting" ? "Šaljem..." : "Pošalji upit"}
      </button>

      {statusMessage ? (
        <p className={`text-sm ${status === "error" ? "text-red-400" : "text-[var(--fg-muted)]"}`}>
          {statusMessage}
        </p>
      ) : null}
    </form>
  );
}