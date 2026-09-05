/**
 * Single source of content. Copy is final per the handoff; the only edits made
 * were em-dash to colon/hyphen, so the page carries no em-dash typography.
 */

export type Link = { label: string; href: string };

export type Project = {
  slug: string;
  num: string;
  title: string;
  year: string;
  kind: string;
  /** Alt text and placeholder caption for the screenshot slot. */
  shot: string;
  /** Path under /public once a real screenshot exists. null = slot is empty. */
  image: string | null;
  /** Optional phone screenshots, shown as a scrollable strip when present. */
  mobileShots?: { src: string; alt: string }[];
  /** Optional extra desktop screenshots, stacked full-width below the hero. */
  gallery?: { src: string; alt: string; ratio: string }[];
  blurb: string;
  stack: string[];
  links: Link[];
  meta: { k: string; v: string }[];
  sections: { h: string; p: string }[];
};

const GITHUB = "https://github.com/Raidzr28";
const repo = (name: string) => `${GITHUB}/${name}`;

export const projects: Project[] = [
  {
    slug: "shannamakeup-booking-platform",
    num: "01",
    title: "ShannaMakeup Booking Platform",
    year: "2025",
    kind: "Full-stack web app",
    shot: "Beranda ShannaMakeup: tombol pemesanan dan ringkasan statistik pelanggan",
    image: "/proyek/shannamakeup.png",
    mobileShots: [
      { src: "/proyek/shannamakeup-mobile.jpeg", alt: "Beranda mobile ShannaMakeup" },
      { src: "/proyek/shannamakeup/01-pilih-paket.jpeg", alt: "Pilih paket booking" },
      { src: "/proyek/shannamakeup/02-tanggal-lokasi.jpeg", alt: "Pilih tanggal, jam, dan lokasi" },
      { src: "/proyek/shannamakeup/03-tambahan.jpeg", alt: "Pilih layanan tambahan" },
      { src: "/proyek/shannamakeup/04-detail-kontak.jpeg", alt: "Formulir detail kontak" },
      { src: "/proyek/shannamakeup/05-konfirmasi.jpeg", alt: "Ringkasan pesanan sebelum dikirim" },
      { src: "/proyek/shannamakeup/06-status-pesanan.jpeg", alt: "Status pesanan setelah dikirim" },
      { src: "/proyek/shannamakeup/07-looks.jpeg", alt: "Feed Looks dari studio dan klien" },
      { src: "/proyek/shannamakeup/08-asisten-ai.jpeg", alt: "Asisten AI menjawab pertanyaan booking" },
    ],
    blurb:
      "Sistem pemesanan penuh untuk usaha jasa makeup: login Google, pengelolaan jadwal, dan panel admin.",
    stack: ["Next.js", "Prisma", "Neon DB", "Google OAuth", "Vercel"],
    links: [
      { label: "Demo", href: "https://shannamakeup-raidzr.vercel.app" },
      { label: "Repo", href: repo("shannamakeup-web-ver") },
    ],
    meta: [
      { k: "Peran", v: "Full-stack developer" },
      { k: "Tahun", v: "2025" },
      { k: "Stack", v: "Next.js, Prisma, Neon DB" },
      { k: "Deployment", v: "Vercel" },
    ],
    sections: [
      {
        h: "Latar belakang",
        p: "Pemesanan sebelumnya berjalan lewat percakapan satu per satu, sehingga jadwal mudah bertabrakan dan riwayat pesanan sulit dilacak.",
      },
      {
        h: "Yang saya kerjakan",
        p: "Merancang skema basis data di Prisma pada Neon DB, membangun alur pemesanan beserta halaman admin, dan menghubungkan autentikasi Google OAuth. Rilis berjalan dari repositori ke Vercel.",
      },
      {
        h: "Hasil",
        p: "Jadwal tersimpan pada satu sumber data, konfirmasi pesanan tidak lagi manual, dan riwayat transaksi dapat ditinjau kapan saja.",
      },
    ],
  },
  {
    slug: "sentifood-analisis-sentimen",
    num: "02",
    title: "SentiFood: Analisis Sentimen Ulasan GoFood",
    year: "2025",
    kind: "Machine learning",
    shot: "Tabel hasil klasifikasi sentimen",
    image: "/proyek/sentifood.png",
    gallery: [
      {
        src: "/proyek/sentifood/dataset.jpeg",
        alt: "Tabel dataset ulasan GoFood dengan rating dan label kelas",
        ratio: "1234 / 1223",
      },
      {
        src: "/proyek/sentifood/distribusi-rating.jpeg",
        alt: "Distribusi rating bintang sebagai sumber label sentimen",
        ratio: "1349 / 395",
      },
      {
        src: "/proyek/sentifood/prediksi-teks.jpeg",
        alt: "Prediksi satu teks ulasan dengan rincian log-probabilitas per kata",
        ratio: "1234 / 1075",
      },
      {
        src: "/proyek/sentifood/prediksi-terakhir.png",
        alt: "Daftar prediksi terakhir dengan skor positif, netral, dan negatif",
        ratio: "1359 / 477",
      },
      {
        src: "/proyek/sentifood/evaluasi-model.jpeg",
        alt: "Evaluasi model: akurasi 62,89% dan metrik precision, recall, F1 per kelas",
        ratio: "1350 / 1116",
      },
      {
        src: "/proyek/sentifood/historis.jpeg",
        alt: "Halaman historis prediksi yang tersimpan",
        ratio: "1350 / 497",
      },
    ],
    blurb:
      "Pengklasifikasi sentimen Multinomial Naive Bayes yang dibangun dari nol di PHP, dengan pra-pemrosesan teks bahasa Indonesia.",
    stack: ["PHP native", "Naive Bayes", "MySQL"],
    links: [
      { label: "Demo", href: "https://analysis-sentiment-gofood.vercel.app" },
      { label: "Repo", href: repo("sentiment-analysis-on-Gofood-using-naive-bayes") },
    ],
    meta: [
      { k: "Peran", v: "Developer" },
      { k: "Metode", v: "Multinomial Naive Bayes (from scratch)" },
      { k: "Bahasa", v: "PHP native" },
      { k: "Evaluasi", v: "Precision, recall, F1" },
    ],
    sections: [
      {
        h: "Ruang lingkup",
        p: "Mengelompokkan ulasan pelanggan menjadi sentimen positif dan negatif agar keluhan yang paling sering muncul dapat terlihat.",
      },
      {
        h: "Implementasi",
        p: "Tokenisasi, penghapusan stopword bahasa Indonesia, dan perhitungan probabilitas Naive Bayes ditulis manual di PHP tanpa pustaka eksternal.",
      },
      {
        h: "Evaluasi",
        p: "Model diukur dengan precision, recall, dan F1-score, termasuk penanganan kata yang tidak muncul pada data latih.",
      },
    ],
  },
  {
    slug: "klasifikasi-penyakit-daun-singkong",
    num: "03",
    title: "Klasifikasi Penyakit Daun Singkong",
    year: "2025",
    kind: "Computer vision",
    shot: "Antarmuka Flask menampilkan hasil prediksi",
    image: "/proyek/cassava-scan.png",
    gallery: [
      {
        src: "/proyek/cassava/diagnosis.jpeg",
        alt: "Hasil diagnosis satu daun: kelas Healthy dengan keyakinan 72,75%, nilai fitur GLCM dan HSV, serta sebaran probabilitas lima kelas",
        ratio: "1400 / 1656",
      },
      {
        src: "/proyek/cassava/metode.jpeg",
        alt: "Halaman Metode: tiga tahap pra-pemrosesan, ekstraksi GLCM, dan klasifikasi SVM beserta karakteristik tiap kelas",
        ratio: "1400 / 1655",
      },
      {
        src: "/proyek/cassava/evaluasi.jpeg",
        alt: "Halaman pelatihan: akurasi 70,5%, precision 67,3%, recall 70,5%, F1 67,54%, dan confusion matrix lima kelas",
        ratio: "1400 / 1193",
      },
    ],
    blurb:
      "Aplikasi web klasifikasi citra berbasis SVM dengan 65 fitur rekayasa (GLCM, HSV, LBP), akurasi 70,5% setelah grid search.",
    stack: ["Python", "scikit-learn", "SVM", "Flask"],
    links: [
      { label: "Demo", href: "https://web-production-d3bbc.up.railway.app/" },
      { label: "Repo", href: repo("disease-recognition-for-cassava-leaves-using-SVM") },
    ],
    meta: [
      { k: "Peran", v: "ML engineer" },
      { k: "Model", v: "Support Vector Machine" },
      { k: "Fitur", v: "65 fitur: GLCM, HSV, LBP" },
      { k: "Akurasi", v: "70,5% (grid search)" },
    ],
    sections: [
      {
        h: "Konteks",
        p: "Gejala penyakit pada daun perlu diidentifikasi cepat sebelum petani menentukan penanganan.",
      },
      {
        h: "Proses",
        p: "Ekstraksi 65 fitur tekstur dan warna (GLCM, HSV, LBP) dilakukan sebelum pelatihan SVM di scikit-learn, lalu hyperparameter disetel lewat grid search hingga akurasi 70,5%.",
      },
      {
        h: "Penyajian",
        p: "Model dibungkus dalam aplikasi Flask sederhana: pengguna mengunggah foto daun dan menerima hasil klasifikasinya.",
      },
    ],
  },
  {
    slug: "segmentasi-pelanggan-marketplace",
    num: "04",
    title: "Segmentasi Pelanggan Facebook Marketplace",
    year: "2024",
    kind: "Data / clustering",
    shot: "Dashboard Streamlit hasil segmentasi",
    image: "/proyek/customer-segmentation.png",
    blurb:
      "Alat clustering yang mengelompokkan pelanggan berdasarkan perilaku transaksi untuk penargetan promosi.",
    stack: ["Python", "Streamlit", "K-Means"],
    links: [{ label: "Repo", href: repo("customer_segmentation_for_facebook_marketplace_using_py_and-Streamlit") }],
    meta: [
      { k: "Peran", v: "Developer & analis" },
      { k: "Metode", v: "K-Means clustering" },
      { k: "Antarmuka", v: "Streamlit" },
      { k: "Kaitan", v: "Topik skripsi" },
    ],
    sections: [
      {
        h: "Tujuan",
        p: "Membantu penjual melihat kelompok pelanggan yang berbeda perilakunya, sehingga promosi tidak dikirim seragam ke semua orang.",
      },
      {
        h: "Pendekatan",
        p: "Data transaksi dibersihkan dan dinormalisasi, jumlah klaster ditentukan lewat metode elbow, lalu hasil K-Means divisualisasikan pada dasbor Streamlit.",
      },
      {
        h: "Kaitan riset",
        p: "Pendekatan yang sama saya kembangkan pada skripsi mengenai segmentasi pelanggan untuk strategi pemasaran pada marketplace daring.",
      },
    ],
  },
  {
    slug: "scanbook",
    num: "05",
    title: "ScanBook, pemindai dokumen berbasis YOLOv8-seg",
    year: "2024",
    kind: "Computer vision",
    shot: "Beranda ScanBook: alur foto buku menjadi hasil pindai yang rata",
    image: "/proyek/scanbook.png",
    gallery: [
      {
        src: "/proyek/scanbook/proses.png",
        alt: "Langkah unggah foto halaman buku",
        ratio: "1359 / 623",
      },
      {
        src: "/proyek/scanbook/deteksi-sudut.jpeg",
        alt: "Deteksi keempat sudut halaman dengan titik yang bisa digeser sebelum koreksi",
        ratio: "1234 / 1980",
      },
      {
        src: "/proyek/scanbook/hasil-scan.jpeg",
        alt: "Hasil pindai setelah koreksi perspektif dan pengaturan warna hitam-putih",
        ratio: "1234 / 1544",
      },
      {
        src: "/proyek/scanbook/riwayat.jpeg",
        alt: "Riwayat pindai dengan opsi unduh ulang dan hapus",
        ratio: "1234 / 614",
      },
    ],
    blurb:
      "Alat computer vision untuk deteksi tepi dokumen otomatis dan pemotongan hasil pindai.",
    stack: ["Python", "Flask", "OpenCV", "YOLOv8n-seg"],
    links: [
      { label: "Demo", href: "https://scanner-berbasis-yolo-production.up.railway.app/" },
      { label: "Repo", href: repo("Scanner-Berbasis-Yolo") },
    ],
    meta: [
      { k: "Peran", v: "ML engineer" },
      { k: "Model", v: "YOLOv8n-seg" },
      { k: "Pustaka", v: "OpenCV" },
      { k: "Keluaran", v: "Citra terpotong otomatis" },
    ],
    sections: [
      {
        h: "Masalah",
        p: "Memotong hasil foto dokumen satu per satu memakan waktu, terutama ketika halaman difoto miring.",
      },
      {
        h: "Pendekatan",
        p: "Segmentasi YOLOv8n-seg menandai area halaman, kemudian OpenCV mencari tepinya dan melakukan transformasi perspektif agar hasil potong tegak.",
      },
      {
        h: "Catatan",
        p: "Pengujian difokuskan pada halaman miring dan pencahayaan rendah, dua kondisi yang paling menurunkan akurasi deteksi tepi.",
      },
    ],
  },
];

/** Filter labels for /proyek, derived so the pills can never drift from data. */
export const kinds = ["Semua", ...new Set(projects.map((p) => p.kind))];

export const facts = [
  { k: "Lokasi", v: "Bogor Regency, Indonesia" },
  { k: "Pendidikan", v: "S1 Teknik Informatika, Unindra" },
  { k: "Bahasa", v: "Indonesia, Inggris (professional)" },
  { k: "Fokus", v: "Laravel, Next.js, scikit-learn" },
  { k: "Skripsi", v: "K-Means untuk segmentasi pelanggan" },
];


export const skills = [
  {
    label: "Teknologi",
    items: [
      "PHP (Native & Laravel)",
      "Python",
      "Kotlin",
      "TypeScript/JavaScript",
      "Tailwind CSS",
      "MySQL",
      "Prisma",
      "Git/GitHub",
      "Vercel",
    ],
  },
  {
    label: "AI & data",
    items: [
      "OpenCV",
      "YOLOv8",
      "scikit-learn (SVM, K-Means)",
      "Naive Bayes",
      "Streamlit",
      "Gemini API",
      "WhatsApp API (WAHA)",
    ],
  },
  {
    label: "Mata kuliah relevan",
    items: [
      "Struktur Data & Algoritma",
      "Sistem Basis Data",
      "Pemrograman Web",
      "Sistem Pendukung Keputusan",
      "Sistem Pakar",
      "Pengolahan Citra Digital",
      "Jaringan Saraf Tiruan",
    ],
  },
  {
    label: "Bahasa",
    items: ["Indonesia (native)", "Inggris (professional working proficiency)"],
  },
];

export const experience = [
  {
    period: "Okt - Nov 2025",
    role: "Project-Based Intern",
    org: "MTs Alawwabin, Bogor",
    detail:
      "Membangun Learning Management System dengan Laravel dan Tailwind CSS, termasuk akses berbasis peran untuk guru dan siswa.",
  },
  {
    period: "2025",
    role: "Volunteer Web Developer & Certificate Designer",
    org: "Unindra MKWK 2025 Committee, Jakarta",
    detail:
      "Membangun situs pembelajaran berbasis JavaScript dan merancang sertifikat peserta untuk kegiatan tingkat universitas.",
  },
  {
    period: "Agu - Nov 2021",
    role: "Intern",
    org: "PT Karya Data Infotama, Jakarta",
    detail:
      "Membangun landing page berbasis web serta mendukung dokumentasi sistem (user manual) dan entri data untuk sistem informasi internal.",
  },
];

export const education = [
  {
    period: "AGU 2022 - 2026",
    degree: "Bachelor of Engineering, Teknik Informatika",
    school: "Universitas Indraprasta PGRI (Unindra), Jakarta",
    note: "Skripsi: Customer Segmentation Using K-Means Clustering for Marketing Strategy in Online Marketplace Transactions. A Case Study of a Thai Marketplace.",
  },
  {
    period: "2019 - 2022",
    degree: "Rekayasa Perangkat Lunak (SMK)",
    school: "SMKN 1 Cibinong, Bogor",
    note: "Dasar pemrograman, basis data, dan pengembangan web.",
  },
];

export const EMAIL = "rizkyardiansyah282004@gmail.com";

export const contactLinks = [
  { label: "Email", value: EMAIL, href: `mailto:${EMAIL}`, external: false },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/rizky-ardiansyah-833a31354",
    href: "https://www.linkedin.com/in/rizky-ardiansyah-833a31354/",
    external: true,
  },
  { label: "GitHub", value: "github.com/Raidzr28", href: GITHUB, external: true },
];

/**
 * The public repositories that do not have a case study yet. Real names, real
 * links, no invented previews. Titles are the repository names translated and
 * shortened, nothing more. Verified against the GitHub API on 2026-08-23.
 */
export type OtherRepo = { title: string; repo: string; lang: string; year: string };

export const otherRepos: OtherRepo[] = [
  { title: "Administrasi MTs Alawwabin (Laravel)", repo: "alawwabin", lang: "Blade", year: "2025" },
  { title: "Sistem diagnosa kerusakan mobil", repo: "Sistem-diagnosa-kerusakan-mobil-py-only", lang: "Python", year: "2025" },
  { title: "Landing page homestay", repo: "homestay_landingpage_usinghtml_php_js_tailwind", lang: "HTML", year: "2025" },
  { title: "ShannaMakeup, repositori Kotlin", repo: "shannamakeup", lang: "Kotlin", year: "2026" },
  { title: "Program kasir", repo: "complete-cashier-program", lang: "Kotlin", year: "2026" },
  { title: "Wheel spin dengan fitur tersembunyi", repo: "Wheels-spin-with-hidden-feature", lang: "Kotlin", year: "2026" },
  { title: "Deteksi tinggal kelas dengan decision tree", repo: "A-decision-tree-system-for-detecting-student-grade-retention.", lang: "PHP", year: "2026" },
  { title: "Sistem pakar kesehatan mental remaja (forward chaining)", repo: "expert-system-to-determined-metal-issue-for-under-age-person-using-forward-chaining-method", lang: "PHP", year: "2026" },
  { title: "Sistem pakar pemilihan ekstrakurikuler (forward chaining)", repo: "Expert-System-For-extracullicular-with-forward-chaining", lang: "PHP", year: "2026" },
  { title: "SPK perkembangan anak (forward chaining)", repo: "decision-support-system-for-determine-childhood-development-using-forward-chaining", lang: "PHP", year: "2026" },
  { title: "SPK pemilihan laptop (AHP)", repo: "decision-support-system-for-finding-the-best-laptop-with-case-variables-using-AHP", lang: "PHP", year: "2026" },
  { title: "SPK prioritas perbaikan jalan (AHP)", repo: "Decision-Support-System-Road-fixing-priority-with-AHP-method-in-PHP", lang: "PHP", year: "2026" },
  { title: "SPK pemilihan parfum (MAUT)", repo: "decision-supprt-system-to-find-the-most-suitable-parfume-using-MAUT-method", lang: "PHP", year: "2026" },
  { title: "SPK bunga artifisial (SMART)", repo: "decision-support-system-best-artificial-flower-using-SMART-method", lang: "PHP", year: "2026" },
  { title: "SPK produk kopi (Weighted Product)", repo: "decision-support-system-to-find-the-best-coffe-product-using-weighted-product-method", lang: "PHP", year: "2026" },
  { title: "SPK kualitas kayu (Weighted Product)", repo: "decision-support-system-for-best-wood-by-quality-using-weighted-product", lang: "PHP", year: "2026" },
  { title: "SPK kayu untuk furnitur (Weighted Product)", repo: "decision-support-system-best-woods-for-furniture-using-weighting-product-method", lang: "PHP", year: "2026" },
  { title: "SPK produk terbaik PT Rojofox", repo: "decision-support-system-for-best-product-in-pt-Rojofox", lang: "PHP", year: "2026" },
  { title: "SPK prioritas masalah RW 06 Jatisari", repo: "decision-support-system-to-determine-problem-priority-in-RW-06-jatisari", lang: "PHP", year: "2026" },
  { title: "SPK pemilihan kader PKK", repo: "decision-support-system-for-selecting-the-best-PKK-cadres", lang: "PHP", year: "2026" },
  // Empty repository (0 KB), superseded by disease-recognition-for-cassava-leaves-using-SVM.
  { title: "cassava-svm", repo: "cassava-svm", lang: "", year: "2026" },
];

export const repoUrl = (name: string) => repo(name);

export const totalRepos = projects.length + otherRepos.length;

export const CV_PATH = "/cv-rizky-ardiansyah-en.pdf";

export const stats = [
  { value: String(totalRepos), suffix: "", label: "Repositori GitHub" },
  { value: String(projects.length), suffix: "", label: "Sudah didokumentasikan" },
  { value: "3", suffix: "", label: "Magang & kepanitiaan" },
  { value: "12", suffix: "+", label: "Teknologi dipakai" },
];
