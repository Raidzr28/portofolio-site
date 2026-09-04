import { readFileSync } from "node:fs";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { projects, totalRepos } from "@/lib/data";

/**
 * The share card is the first thing a recruiter sees when the link is pasted
 * into a feed, so it is drawn from the same data as the page: the counts can
 * never disagree with the homepage headline. Dark because the card is read
 * against the white chrome of a social feed, where the light palette dissolves.
 */
export const alt = `Rizky Ardiansyah, full-stack developer dan applied ML. Portofolio: ${projects.length} proyek dari ${totalRepos} repositori.`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0C0C0D",
          color: "#FAFAFA",
          fontFamily: "Archivo",
          padding: "72px 80px 76px",
          borderTop: "8px solid #0F766E",
        }}
      >
        {/* Identity lockup: the header monogram, at card scale. */}
        <div style={{ display: "flex", alignItems: "center" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 56,
              height: 56,
              borderRadius: 14,
              background: "#0F766E",
              color: "#fff",
              fontSize: 24,
            }}
          >
            RA
          </div>
          <div style={{ display: "flex", flexDirection: "column", marginLeft: 18 }}>
            <div style={{ fontSize: 26, letterSpacing: "-0.01em" }}>
              Rizky Ardiansyah
            </div>
            <div style={{ fontSize: 20, color: "#8B8B93", marginTop: 2 }}>
              Full-stack &amp; ML
            </div>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 74,
              lineHeight: 1.05,
              letterSpacing: "-0.035em",
              maxWidth: 900,
            }}
          >
            {`Portofolio: ${projects.length} proyek dari ${totalRepos} repositori.`}
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginTop: 30,
              fontSize: 24,
              color: "#A1A1AA",
            }}
          >
            Laravel, Next.js, scikit-learn
            <span style={{ color: "#0F766E", margin: "0 12px" }}>·</span>
            Terbuka untuk full-time dan freelance
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Archivo",
          data: readFileSync(join(process.cwd(), "lib/fonts/archivo-600.ttf")),
          weight: 600,
          style: "normal",
        },
      ],
    },
  );
}
