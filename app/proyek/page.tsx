import type { Metadata } from "next";
import Link from "next/link";
import Shot from "@/components/shot";
import { kinds, otherRepos, projects, repoUrl } from "@/lib/data";

export const metadata: Metadata = {
  title: "Indeks proyek",
  description:
    "Lima proyek terdokumentasi: satu platform pemesanan penuh, dua model computer vision, satu klasifikasi teks, satu clustering pelanggan.",
};

/** Filtering lives in the URL, so a filtered view is shareable and needs no JS. */
export default async function Proyek({
  searchParams,
}: {
  searchParams: Promise<{ kind?: string }>;
}) {
  const { kind } = await searchParams;
  const active = kind && kinds.includes(kind) ? kind : "Semua";
  const list =
    active === "Semua" ? projects : projects.filter((p) => p.kind === active);

  return (
    <>
      <section>
        <h1 className="h1 rise">Indeks proyek</h1>
        <p className="mt-3 max-w-[60ch] text-secondary">
          Lima proyek: satu platform pemesanan penuh, dua model computer vision,
          satu klasifikasi teks, satu clustering pelanggan.
        </p>

        <nav
          aria-label="Saring menurut jenis"
          className="mt-[22px] -mx-1 overflow-x-auto px-1"
          style={{ scrollbarWidth: "none" }}
        >
          <ul
            className="flex w-max max-w-full flex-wrap gap-1.5 rounded-[12px] p-[5px]"
            style={{
              background: "var(--muted)",
              border: "1px solid var(--border)",
            }}
          >
            {kinds.map((k) => {
              const on = k === active;
              return (
                <li key={k}>
                  <Link
                    href={k === "Semua" ? "/proyek" : `/proyek?kind=${encodeURIComponent(k)}`}
                    aria-current={on ? "true" : undefined}
                    className="inline-flex min-h-9 items-center whitespace-nowrap rounded-[9px] px-3 text-[13px] transition-colors duration-200"
                    style={
                      on
                        ? {
                            background: "var(--card)",
                            color: "var(--fg)",
                            fontWeight: 500,
                            boxShadow: "var(--shadow)",
                          }
                        : { color: "var(--fg-secondary)" }
                    }
                  >
                    {k}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </section>

      <section className="mt-[26px] grid" style={{ gap: "var(--gap)" }}>
        {list.length === 0 && (
          <p className="card p-[22px] text-secondary">
            Belum ada proyek terdokumentasi pada jenis ini.{" "}
            <Link href="/proyek" style={{ color: "var(--primary)" }}>
              Tampilkan semua
            </Link>
          </p>
        )}

        {list.map((p, i) => (
          <article
            key={p.slug}
            className="card card-hi rise grid items-center p-5"
            style={{
              gridTemplateColumns: "var(--cols-row)",
              gap: "var(--gap)",
            }}
          >
            <div
              className="overflow-hidden rounded-[10px]"
              style={{ border: "1px solid var(--border)" }}
            >
              <Shot
                src={p.image}
                alt={p.shot}
                sizes="(max-width: 767px) 100vw, 300px"
                priority={i === 0}
              />
            </div>
            <div className="min-w-0">
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="label">{p.kind}</span>
                <span className="meta">
                  {p.num} · {p.year}
                </span>
              </div>
              <h2 className="h3 mt-3">{p.title}</h2>
              <p className="mt-2 max-w-[60ch] text-secondary">{p.blurb}</p>
              <div className="mt-4 flex flex-wrap gap-2">
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
      </section>

      <section className="section">
        <div className="flex flex-wrap items-end justify-between gap-3.5">
          <div>
            <h2 className="h2">Repositori lain</h2>
            <p className="mt-2 max-w-[56ch] text-tertiary">
              {otherRepos.length} repositori publik lain belum punya studi kasus.
              Kodenya tetap bisa dibaca langsung di GitHub.
            </p>
          </div>
          <a
            href="https://github.com/Raidzr28"
            target="_blank"
            rel="noopener"
            className="btn btn-outline btn-sm"
            style={{ minHeight: 44 }}
          >
            Lihat GitHub ↗
          </a>
        </div>
        <ul
          className="mt-[22px] grid"
          style={{
            gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
            gap: "var(--gap)",
          }}
        >
          {otherRepos.map((r) => (
            <li key={r.repo}>
              {/* Dashed border marks these as documented-in-code only, not as
                  case studies. The content is real; only the write-up is missing. */}
              <a
                href={repoUrl(r.repo)}
                target="_blank"
                rel="noopener"
                className="repo-slot flex h-full min-h-[132px] flex-col justify-between gap-3 rounded-[14px] p-4"
                style={{
                  border: "1px dashed var(--border-strong)",
                  background: "var(--muted)",
                  color: "var(--fg)",
                }}
              >
                <span className="text-[14px] font-medium leading-snug">
                  {r.title}
                </span>
                <span className="meta">
                  {r.lang ? `${r.lang} · ` : ""}
                  {r.year} ↗
                </span>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
