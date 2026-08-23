import type { Metadata } from "next";
import { Archivo, IBM_Plex_Mono } from "next/font/google";
import Link from "next/link";
import SiteHeader from "@/components/site-header";
import { EMAIL } from "@/lib/data";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-archivo",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://portofolio-raidzr.vercel.app"),
  title: {
    default: "Rizky Ardiansyah, full-stack developer & applied ML",
    template: "%s | Rizky Ardiansyah",
  },
  description:
    "Portofolio Rizky Ardiansyah: lima proyek terdokumentasi dari 21 repositori. Laravel, Next.js, dan machine learning terapan.",
  openGraph: {
    type: "website",
    locale: "id_ID",
    siteName: "Rizky Ardiansyah",
  },
};

// Applied before first paint so the correct theme is never repainted.
const themeScript = `try{var t=localStorage.getItem("theme")||(window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light");document.documentElement.dataset.theme=t}catch(e){}`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id" data-theme="light" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className={`${archivo.variable} ${plexMono.variable}`}>
        <a
          href="#konten"
          className="btn btn-primary btn-sm sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-[130]"
        >
          Lewati ke konten
        </a>
        <SiteHeader />
        <main
          id="konten"
          className="shell"
          style={{ paddingTop: "var(--pad-top)", paddingBottom: 64 }}
        >
          {children}

          <footer
            className="section flex flex-wrap justify-between gap-3.5 pt-6 text-[12px] text-tertiary"
            style={{ borderTop: "1px solid var(--border)" }}
          >
            <span>© {new Date().getFullYear()} Rizky Ardiansyah</span>
            <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
            <Link href="/kontak">Kontak</Link>
          </footer>
        </main>
      </body>
    </html>
  );
}
