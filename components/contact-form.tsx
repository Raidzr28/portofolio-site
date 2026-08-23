"use client";

import { useState } from "react";
import { EMAIL } from "@/lib/data";
import { composeMailto } from "@/lib/mailto";

/**
 * ponytail: the form hands off to the visitor's mail client, so there is no
 * inbox, no queue and no API key to rotate. Swap the submit handler for a
 * Server Action if submissions ever need to land somewhere he can query.
 */
export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    // Only fires once native constraint validation passes.
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    window.location.href = composeMailto({
      to: EMAIL,
      name: String(data.get("nama") ?? ""),
      email: String(data.get("email") ?? ""),
      message: String(data.get("pesan") ?? ""),
    });
    setSent(true);
  }

  if (sent) {
    return (
      <div
        className="card grid gap-3"
        style={{ padding: "var(--card-pad)" }}
        role="status"
      >
        <h2 className="h3">Pesan siap dikirim</h2>
        <p className="text-secondary">
          Aplikasi email Anda terbuka dengan isi pesan tersebut. Kalau tidak
          terbuka, kirim langsung ke alamat di bawah.
        </p>
        <a href={`mailto:${EMAIL}`} className="btn btn-outline justify-self-start">
          {EMAIL}
        </a>
        <button
          type="button"
          onClick={() => setSent(false)}
          className="btn btn-ghost justify-self-start"
        >
          Tulis pesan lain
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="card grid gap-[18px]"
      style={{ padding: "var(--card-pad)" }}
    >
      <label className="grid gap-[7px]">
        <span className="text-[13px] font-medium">Nama</span>
        <input
          name="nama"
          type="text"
          required
          autoComplete="name"
          placeholder="Nama lengkap"
          className="field"
        />
        <span className="field-error">Isi nama Anda.</span>
      </label>

      <label className="grid gap-[7px]">
        <span className="text-[13px] font-medium">Email</span>
        <input
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="nama@perusahaan.com"
          className="field"
        />
        <span className="field-error">Masukkan alamat email yang valid.</span>
      </label>

      <label className="grid gap-[7px]">
        <span className="text-[13px] font-medium">Pesan</span>
        <textarea
          name="pesan"
          required
          rows={5}
          placeholder="Ceritakan kebutuhan proyek Anda"
          className="field"
          style={{ resize: "vertical" }}
        />
        <span className="field-error">Tulis pesan Anda.</span>
      </label>

      <button type="submit" className="btn btn-primary btn-lg justify-self-start">
        Kirim pesan
      </button>
    </form>
  );
}
