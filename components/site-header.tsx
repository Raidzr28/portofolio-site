"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { projects } from "@/lib/data";

const tabs = [
  { label: "Beranda", href: "/" },
  { label: "Proyek", href: "/proyek" },
  { label: "Studi kasus", href: `/proyek/${projects[0].slug}` },
  { label: "Tentang", href: "/tentang" },
  { label: "Kontak", href: "/kontak" },
];

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  if (href === "/proyek") return pathname === "/proyek";
  if (href.startsWith("/proyek/")) return pathname.startsWith("/proyek/");
  return pathname === href;
}

function ThemeToggle() {
  // null until mounted so the button never renders a label that contradicts
  // the theme the inline script already applied.
  const [dark, setDark] = useState<boolean | null>(null);

  useEffect(() => {
    setDark(document.documentElement.dataset.theme === "dark");
  }, []);

  function toggle() {
    const next = !dark;
    setDark(next);
    document.documentElement.dataset.theme = next ? "dark" : "light";
    localStorage.setItem("theme", next ? "dark" : "light");
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-pressed={dark ?? false}
      aria-label={dark ? "Ganti ke mode terang" : "Ganti ke mode gelap"}
      className="btn btn-outline btn-sm"
      style={{ minHeight: 40 }}
    >
      <span aria-hidden="true" style={{ minWidth: "5ch" }}>
        {dark === null ? "" : dark ? "Gelap" : "Terang"}
      </span>
    </button>
  );
}

export default function SiteHeader() {
  const pathname = usePathname();

  return (
    <>
      <div
        className="scroll-progress"
        aria-hidden="true"
        style={{
          position: "fixed",
          insetInline: 0,
          top: 0,
          height: 2,
          background: "var(--primary)",
          transformOrigin: "0 50%",
          transform: "scaleX(0)",
          zIndex: 120,
        }}
      />
      <header
        className="site-header"
        style={{
          position: "sticky",
          top: 0,
          zIndex: 100,
          background: "var(--bg-trans)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          borderBottom: "1px solid var(--border)",
        }}
      >
        <div className="shell flex flex-wrap items-center justify-between gap-x-5 gap-y-2.5 py-2.5">
          <Link
            href="/"
            className="flex min-h-11 shrink-0 items-center gap-2.5"
            aria-label="Rizky Ardiansyah, ke beranda"
          >
            <span
              aria-hidden="true"
              className="inline-flex size-[30px] items-center justify-center rounded-[9px] text-[12px] font-bold tracking-[0.02em] text-white"
              style={{ background: "var(--primary)" }}
            >
              RA
            </span>
            <span className="grid text-left">
              <span className="text-[14px] font-semibold tracking-[-0.01em]">
                Rizky Ardiansyah
              </span>
              <span className="text-[12px] text-tertiary">Full-stack &amp; ML</span>
            </span>
          </Link>

          <nav
            aria-label="Navigasi utama"
            className="order-3 -mx-1 w-full overflow-x-auto px-1 md:order-none md:mx-0 md:w-auto md:overflow-visible md:px-0"
            style={{ scrollbarWidth: "none" }}
          >
            <ul
              className="flex w-max items-center gap-1 rounded-[12px] p-1 md:w-auto"
              style={{
                background: "var(--muted)",
                border: "1px solid var(--border)",
              }}
            >
              {tabs.map((tab) => {
                const active = isActive(pathname, tab.href);
                return (
                  <li key={tab.label}>
                    <Link
                      href={tab.href}
                      aria-current={active ? "page" : undefined}
                      className="inline-flex min-h-9 items-center whitespace-nowrap rounded-[9px] px-3.5 text-[13px] font-medium transition-colors duration-200"
                      style={
                        active
                          ? {
                              background: "var(--card)",
                              color: "var(--fg)",
                              boxShadow: "var(--shadow)",
                            }
                          : { color: "var(--fg-tertiary)" }
                      }
                    >
                      {tab.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <ThemeToggle />
        </div>
      </header>
    </>
  );
}
