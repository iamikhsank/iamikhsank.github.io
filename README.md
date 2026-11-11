# Ikhsan Kamal — Portfolio

Website profesional untuk layanan analisis data, Business Intelligence, Machine Learning, otomasi, dan aplikasi web berbasis data.

**Website:** https://iamikhsank.github.io/

## Struktur repo

| Lokasi | Isi |
| --- | --- |
| `src/App.tsx` | Halaman, navigasi, dan interaksi React |
| `src/components/` | Komponen antarmuka yang digunakan ulang |
| `src/data/articles.ts` | Daftar artikel dan publikasi |
| `src/data/portfolio.ts` | Daftar proyek dan studi kasus website publik |
| `src/types/content.ts` | Tipe data artikel, proyek, dan studi kasus |
| `src/translations.ts` | Teks terjemahan |
| `src/index.css` | Gaya global dan komponen |
| `public/` | Gambar, favicon, verifikasi Google, robots.txt, dan sitemap |
| `gas-src/` | Backend Apps Script dan inisialisasi Sheets |
| `scripts/` | Build halaman statis, pengalihan URL lama, dan ekspor GAS |
| `docs/` | Persyaratan dan panduan dokumentasi |
| `docs/archive/` | Catatan dan snapshot historis |
| `.github/workflows/deploy.yml` | Deployment GitHub Pages otomatis |

## Pengembangan lokal

Gunakan Node.js 20 atau lebih baru.

```bash
git clone https://github.com/iamikhsank/iamikhsank.github.io.git
cd iamikhsank.github.io
npm ci
npm run dev
```

Buka http://localhost:3000. Gunakan `.env.example` sebagai referensi konfigurasi lokal; file `.env` tidak disimpan ke Git.

## Memperbarui konten

- **Proyek:** edit `src/data/portfolio.ts`. Gunakan ID unik dan simpan gambar lokal di `public/assets/prj_img/`. Path pada data dapat menggunakan `./assets/prj_img/nama-file.webp`.
- **Artikel:** edit `src/data/articles.ts`, termasuk judul, ringkasan, URL, gambar, tanggal, dan platform.
- **SEO beranda:** edit `index.html`. Metadata halaman layanan diatur melalui `scripts/prerender.js` dan pengaturan judul di `src/App.tsx`.
- **Sitemap dan robots:** edit hanya file di `public/`. Vite menyalinnya ke hasil build.
- **Apps Script:** sumber berada di `gas-src/`. Data Sheets yang dipakai di GAS dikelola terpisah dari daftar statis website publik.

## Pemeriksaan dan build

```bash
npm run lint
npm run build
npm run preview
```

Build menghasilkan:

- `dist/`: website siap deploy beserta halaman layanan, aset, sitemap, dan pengalihan dari `/Web-Profile-iamikhsank/`.
- `exports/`: `Dashboard-for-Spreadsheet.html`, salinan `.txt`, serta `code.gs` dan `setup.gs` untuk distribusi GAS. Nama HTML tetap sesuai dengan `HtmlService.createTemplateFromFile("Dashboard-for-Spreadsheet")`.

Salinan HTML dan TXT juga tersedia di root hasil deploy dengan nama yang sama. File hasil build tidak disimpan ke Git. Jalankan `npm run clean` untuk membersihkan `dist/` dan `exports/`.

## Deployment

Push ke `main` menjalankan GitHub Actions untuk memasang dependensi, build, dan menerbitkan `dist/` ke GitHub Pages.

`npm run deploy` tetap tersedia untuk deployment manual melalui branch `gh-pages`; alur utama repo menggunakan GitHub Actions.

## Dokumentasi

Lihat [indeks dokumentasi](docs/README.md). Catatan di `docs/archive/` dipertahankan untuk referensi historis dan dapat menyebut struktur atau konten versi lama.

© 2026 Ikhsan Kamal. All rights reserved.
