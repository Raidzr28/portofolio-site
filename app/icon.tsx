import { readFileSync } from "node:fs";
import { join } from "node:path";
import { ImageResponse } from "next/og";

/**
 * The tab mark is the same monogram the header renders: white RA on primary,
 * 9px radius. Generated rather than shipped as an .ico so it stays in Archivo
 * and cannot drift from the header lockup.
 */
export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0F766E",
          borderRadius: 7,
          color: "#fff",
          fontFamily: "Archivo",
          fontSize: 15,
          letterSpacing: "0.01em",
        }}
      >
        RA
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
