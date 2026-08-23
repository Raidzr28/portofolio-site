import type { Metadata } from "next";
import ContactForm from "@/components/contact-form";
import { contactLinks } from "@/lib/data";

export const metadata: Metadata = {
  title: "Kontak",
  description:
    "Untuk posisi full-time, freelance, atau diskusi proyek machine learning.",
};

export default function Kontak() {
  return (
    <section
      className="grid items-start"
      style={{
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        gap: "var(--gap)",
      }}
    >
      <div>
        <h1 className="h1 rise">Mari bekerja bersama.</h1>
        <p className="mt-3.5 max-w-[44ch] text-secondary">
          Untuk posisi full-time, freelance, atau diskusi proyek machine
          learning. Kirim pesan lewat formulir atau tautan di bawah.
        </p>

        <ul className="card mt-6 overflow-hidden">
          {contactLinks.map((l, i) => (
            <li
              key={l.label}
              style={
                i < contactLinks.length - 1
                  ? { borderBottom: "1px solid var(--border)" }
                  : undefined
              }
            >
              <a
                href={l.href}
                {...(l.external
                  ? { target: "_blank", rel: "noopener" }
                  : {})}
                className="flex min-h-14 items-center justify-between gap-3.5 px-5 transition-colors duration-200 hover:bg-muted"
                style={{ color: "var(--fg)" }}
              >
                <span className="text-[13px] text-tertiary">{l.label}</span>
                <span className="text-right text-[14px] font-medium">
                  {l.value} {l.external ? "↗" : "→"}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>

      <ContactForm />
    </section>
  );
}
