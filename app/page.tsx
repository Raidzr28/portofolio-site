import Link from "next/link";
import Shot from "@/components/shot";
import {
  CV_PATH,
  EMAIL,
  experience,
  facts,
  projects,
  skills,
  stats,
  totalRepos,
} from "@/lib/data";

export default function Beranda() {
  return (
    <>
      {/* Hero: asymmetric 2fr/1fr split, facts card carries the scannable detail */}
      <section
        className="grid"
        style={{ gridTemplateColumns: "var(--cols-21)", gap: "var(--gap)" }}
      >
        <div className="card rise min-w-0" style={{ padding: "var(--card-pad)" }}>
          <p className="label">Terbuka untuk full-time dan freelance</p>
          <h1 className="h1 mt-5">
            Portofolio: {projects.length} proyek dari {totalRepos} repositori.
          </h1>
          <p className="mt-[18px] max-w-[60ch] text-secondary">
            Mahasiswa tingkat akhir Teknik Informatika Universitas Indraprasta
            PGRI. Saya mengerjakan Laravel dan Next.js untuk sisi produk, serta
            computer vision, klasifikasi citra, dan clustering untuk sisi data.
          </p>
          <div className="mt-[26px] flex flex-wrap gap-2.5">
            <Link href="/proyek" className="btn btn-primary">
              Lihat 5 proyek
            </Link>
            <a href={CV_PATH} download className="btn btn-outline">
              Unduh CV (PDF)
            </a>
            <Link href="/kontak" className="btn btn-ghost">
              Kontak →
            </Link>
          </div>
        </div>

        <div className="rise rise-2 min-w-0">
          <dl className="card grid gap-3 p-[22px]">
            {facts.map((f) => (
              <div key={f.k} className="flex items-baseline justify-between gap-3.5">
                <dt className="text-[13px] text-tertiary">{f.k}</dt>
                <dd className="text-right text-[13px] font-medium">{f.v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Figures. Static by design: no count-up. */}
      <section
        className="grid"
        style={{
          marginTop: "var(--gap)",
          gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
          gap: "var(--gap)",
        }}
        aria-label="Ringkasan angka"
      >
        {stats.map((s) => (
          <div key={s.label} className="card rise px-[22px] py-5">
            <p className="num flex items-baseline gap-px">
              <span className="h2" style={{ lineHeight: 1 }}>
                {s.value}
              </span>
              {s.suffix && (
                <span
                  className="h2"
                  style={{ lineHeight: 1, color: "var(--primary)" }}
                >
                  {s.suffix}
                </span>
              )}
            </p>
            <p className="mt-2 text-[13px] text-tertiary">{s.label}</p>
          </div>
        ))}
      </section>

      <section className="section">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="h2">Proyek terpilih</h2>
            <p className="mt-2 text-tertiary">
              Lima dari {totalRepos} repositori sudah didokumentasikan penuh;
              sisanya menyusul.
            </p>
          </div>
          <Link href="/proyek" className="btn btn-outline btn-sm">
            Semua proyek →
          </Link>
        </div>

        <div
          className="mt-[22px] grid"
          style={{
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "var(--gap)",
          }}
        >
          {projects.map((p, i) => (
            <article
              key={p.slug}
              className="card card-lift rise flex flex-col overflow-hidden"
            >
              <div style={{ borderBottom: "1px solid var(--border)" }}>
                <Shot
                  src={p.image}
                  fit="contain"
                  alt={p.shot}
                  sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 400px"
                  priority={i === 0}
                />
              </div>
              <div className="grid flex-1 gap-3 px-[22px] pb-[22px] pt-5">
                <div className="flex items-baseline justify-between gap-3">
                  <span className="label">{p.kind}</span>
                  <span className="meta">
                    {p.num} · {p.year}
                  </span>
                </div>
                <h3 className="h3">{p.title}</h3>
                <p className="text-secondary">{p.blurb}</p>
                <ul className="flex flex-wrap gap-1.5">
                  {p.stack.map((t) => (
                    <li key={t} className="chip">
                      {t}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto flex flex-wrap items-center gap-2 pt-2">
                  <Link
                    href={`/proyek/${p.slug}`}
                    className="btn btn-primary btn-sm"
                    style={{ minHeight: 44 }}
                  >
                    Studi kasus<span className="sr-only">: {p.title}</span>
                  </Link>
                  {p.links.map((l) => (
                    <a
                      key={l.label}
                      href={l.href}
                      target="_blank"
                      rel="noopener"
                      className="btn btn-outline btn-sm"
                      style={{ minHeight: 44 }}
                    >
                      {l.label} ↗<span className="sr-only"> {p.title}</span>
                    </a>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section
        className="section grid"
        style={{ gridTemplateColumns: "var(--cols-12)", gap: "var(--gap)" }}
      >
        <div className="min-w-0">
          <h2 className="h2">Kemampuan</h2>
          <p className="mt-2.5 max-w-[36ch] text-tertiary">
            Dikelompokkan seperti pada CV, dengan penekanan pada yang
            benar-benar dipakai di proyek.
          </p>
        </div>
        <div className="grid min-w-0" style={{ gap: "var(--gap)" }}>
          {skills.map((g) => (
            <div key={g.label} className="card rise px-[22px] py-5">
              <h3 className="label label-accent">{g.label}</h3>
              <ul className="mt-3 flex flex-wrap gap-1.5">
                {g.items.map((i) => (
                  <li key={i} className="badge">
                    {i}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <h2 className="h2 mb-[22px]">Pengalaman</h2>
        <ol className="grid" style={{ gap: "var(--gap)" }}>
          {experience.map((e) => (
            <li
              key={e.role}
              className="card rise grid p-[22px]"
              style={{
                gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                gap: "16px var(--gap)",
              }}
            >
              <div>
                <span className="pill num">{e.period}</span>
                <h3 className="h3 mt-3">{e.role}</h3>
                <p className="mt-1 text-[13px]" style={{ color: "var(--primary)" }}>
                  {e.org}
                </p>
              </div>
              <p className="min-w-0 text-secondary">{e.detail}</p>
            </li>
          ))}
        </ol>
      </section>

      <section
        className="section flex flex-wrap items-center justify-between gap-5 rounded-[14px]"
        style={{
          border: "1px solid var(--border)",
          background: "var(--surface)",
          padding: "var(--card-pad)",
        }}
      >
        <div>
          <h2 className="h2">Kontak</h2>
          <p className="mt-2 text-secondary">
            {EMAIL} · github.com/Raidzr28
          </p>
        </div>
        <Link href="/kontak" className="btn btn-primary btn-lg">
          Hubungi saya
        </Link>
      </section>
    </>
  );
}
