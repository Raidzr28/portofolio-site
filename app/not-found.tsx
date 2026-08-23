import Link from "next/link";

export default function NotFound() {
  return (
    <section className="card rise" style={{ padding: "var(--card-pad)" }}>
      <p className="label">404</p>
      <h1 className="h1 mt-5 max-w-[20ch]">Halaman ini tidak ada.</h1>
      <p className="mt-[18px] max-w-[52ch] text-secondary">
        Tautannya mungkin salah ketik, atau proyek yang dimaksud belum
        didokumentasikan di sini.
      </p>
      <div className="mt-[26px] flex flex-wrap gap-2.5">
        <Link href="/proyek" className="btn btn-primary">
          Lihat 5 proyek
        </Link>
        <Link href="/" className="btn btn-outline">
          Beranda
        </Link>
      </div>
    </section>
  );
}
