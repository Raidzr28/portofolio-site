import type { Metadata } from "next";
import Link from "next/link";
import Shot from "@/components/shot";
import { CV_PATH, education, skills } from "@/lib/data";

export const metadata: Metadata = {
  title: "Tentang",
  description:
    "Dari SMK Rekayasa Perangkat Lunak ke Teknik Informatika Unindra. Pengembangan penuh dan machine learning terapan.",
};

export default function Tentang() {
  return (
    <>
      <section
        className="grid items-start"
        style={{ gridTemplateColumns: "var(--cols-21)", gap: "var(--gap)" }}
      >
        <div className="card min-w-0" style={{ padding: "var(--card-pad)" }}>
          <h1 className="h2 rise max-w-[28ch]">
            Dari SMK Rekayasa Perangkat Lunak ke Teknik Informatika Unindra.
          </h1>
          <p className="mt-[18px] max-w-[64ch] text-secondary">
            Fokus saya pada pengembangan penuh: merancang skema data, membangun
            antarmuka, lalu merilisnya, seperti LMS berbasis Laravel dan
            Tailwind yang saya kerjakan di MTs Alawwabin, dan platform pemesanan
            ShannaMakeup di Next.js dengan Prisma serta Neon DB.
          </p>
          <p className="mt-3.5 max-w-[64ch] text-secondary">
            Sisi lain pekerjaan saya ada di data: segmentasi dengan YOLOv8,
            klasifikasi citra memakai SVM dengan 65 fitur GLCM, HSV, dan LBP,
            serta analisis sentimen Naive Bayes yang ditulis dari nol. Skripsi
            saya membahas segmentasi pelanggan dengan K-Means untuk strategi
            pemasaran pada transaksi marketplace daring.
          </p>
          <div className="mt-[26px] flex flex-wrap gap-2.5">
            <a href={CV_PATH} download className="btn btn-primary">
              Unduh CV (PDF)
            </a>
            <Link href="/kontak" className="btn btn-outline">
              Hubungi saya
            </Link>
          </div>
        </div>

        <div className="card p-4">
          <Shot
            src={null}
            alt="Foto profil Rizky Ardiansyah"
            ratio="3 / 4"
            sizes="(max-width: 767px) 100vw, 380px"
            radius={10}
          />
        </div>
      </section>

      <section
        className="grid items-start"
        style={{
          marginTop: "var(--gap)",
          gridTemplateColumns: "var(--cols-12)",
          gap: "var(--gap)",
        }}
      >
        <div className="card p-6">
          <h2 className="h3 mb-[18px]">Pendidikan</h2>
          <ol className="grid gap-[18px]">
            {education.map((e) => (
              <li
                key={e.degree}
                style={{
                  borderLeft: "2px solid var(--primary)",
                  paddingLeft: 14,
                }}
              >
                <p className="meta">{e.period}</p>
                <p className="mt-1.5 font-semibold">{e.degree}</p>
                <p className="mt-0.5 text-[13px] text-secondary">{e.school}</p>
                <p className="mt-2.5 text-[13px] text-tertiary">{e.note}</p>
              </li>
            ))}
          </ol>
        </div>

        <div className="grid min-w-0" style={{ gap: "var(--gap)" }}>
          {skills.map((g) => (
            <div key={g.label} className="card px-[22px] py-5">
              <h2 className="label label-accent">{g.label}</h2>
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
    </>
  );
}
