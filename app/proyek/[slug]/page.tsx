import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Shot from "@/components/shot";
import { projects } from "@/lib/data";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const p = projects.find((x) => x.slug === slug);
  if (!p) return {};
  return {
    title: p.title,
    description: p.blurb,
    openGraph: { title: p.title, description: p.blurb, type: "article" },
  };
}

export default async function StudiKasus({ params }: Params) {
  const { slug } = await params;
  const idx = projects.findIndex((p) => p.slug === slug);
  if (idx === -1) notFound();

  const p = projects[idx];
  const next = projects[(idx + 1) % projects.length];

  return (
    <>
      <nav
        aria-label="Breadcrumb"
        className="flex items-center gap-2 text-[13px] text-tertiary"
      >
        <Link href="/proyek" className="min-h-11 leading-[44px] text-tertiary">
          Proyek
        </Link>
        <span aria-hidden="true">/</span>
        <span style={{ color: "var(--fg)" }}>{p.title}</span>
      </nav>

      <section className="mt-3.5">
        <div className="flex flex-wrap items-center gap-2.5">
          <span className="label">{p.kind}</span>
          <span className="meta">
            {p.num} · {p.year}
          </span>
        </div>
        <h1 className="h1 rise mt-[18px] max-w-[24ch]">{p.title}</h1>
        <p className="lead rise rise-2 mt-4 max-w-[62ch]">{p.blurb}</p>
        <div className="mt-5 flex flex-wrap gap-2">
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
      </section>

      <section
        className="mt-[26px] overflow-hidden rounded-[14px]"
        style={{ border: "1px solid var(--border)" }}
      >
        <Shot
          src={p.image}
          fit="contain"
          alt={p.shot}
          ratio="16 / 9"
          sizes="(max-width: 1279px) 100vw, 1240px"
          priority
        />
      </section>

      {p.gallery && p.gallery.length > 0 && (
        <section className="mt-[18px]">
          <p className="label mb-2.5">Tampilan aplikasi</p>
          <div
            className="flex gap-3 overflow-x-auto pb-1"
            style={{ scrollbarWidth: "thin" }}
          >
            {p.gallery.map((g) => (
              <div
                key={g.src}
                className="h-[300px] shrink-0 overflow-hidden rounded-[12px] sm:h-[380px]"
                style={{ border: "1px solid var(--border)", aspectRatio: g.ratio }}
              >
                <Shot
                  src={g.src}
                  fit="contain"
                  alt={g.alt}
                  ratio={g.ratio}
                  sizes="800px"
                />
              </div>
            ))}
          </div>
        </section>
      )}

      {p.mobileShots && p.mobileShots.length > 0 && (
        <section className="mt-[18px]">
          <p className="label mb-2.5">Tampilan mobile</p>
          <div
            className="flex gap-3 overflow-x-auto pb-1"
            style={{ scrollbarWidth: "thin" }}
          >
            {p.mobileShots.map((shot) => (
              <div
                key={shot.src}
                className="w-[150px] shrink-0 overflow-hidden rounded-[12px]"
                style={{ border: "1px solid var(--border)" }}
              >
                <Shot
                  src={shot.src}
                  fit="contain"
                  alt={shot.alt}
                  ratio="9 / 16"
                  sizes="150px"
                />
              </div>
            ))}
          </div>
        </section>
      )}

      <section
        className="section grid items-start"
        style={{ gridTemplateColumns: "var(--cols-case)", gap: "var(--gap)" }}
      >
        <dl
          className="card grid gap-3.5 p-[22px] md:sticky"
          style={{ top: 96 }}
        >
          {p.meta.map((m) => (
            <div key={m.k} className="grid gap-1">
              <dt className="text-[12px] text-tertiary">{m.k}</dt>
              <dd className="text-[14px] font-medium">{m.v}</dd>
            </div>
          ))}
        </dl>

        <div className="grid min-w-0" style={{ gap: "var(--gap)" }}>
          {p.sections.map((s, i) => (
            <div
              key={s.h}
              className="card rise grid items-start gap-4 p-6"
              style={{ gridTemplateColumns: "auto 1fr" }}
            >
              <span
                aria-hidden="true"
                className="meta inline-flex size-7 items-center justify-center rounded-[9px]"
                style={{
                  background: "var(--primary-soft)",
                  color: "var(--primary-text)",
                }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h2 className="h3 mb-2">{s.h}</h2>
                <p className="max-w-[66ch] text-secondary">{s.p}</p>
              </div>
            </div>
          ))}
        </div>
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
          <p className="text-[12px] text-tertiary">Proyek berikutnya</p>
          <h2 className="h2 mt-1.5 max-w-[24ch]">{next.title}</h2>
        </div>
        <Link href={`/proyek/${next.slug}`} className="btn btn-primary btn-lg">
          Buka →<span className="sr-only"> {next.title}</span>
        </Link>
      </section>
    </>
  );
}
