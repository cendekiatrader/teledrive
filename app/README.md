# Telegram Drive Website App

Landing page statis berbahasa Indonesia untuk memperkenalkan Telegram Drive, proyek open-source yang mengubah akun Telegram menjadi cloud drive lokal.

## Fitur halaman

- Hero section dengan CTA menuju rilis dan repositori GitHub.
- Ringkasan fitur Telegram Drive seperti folder berbasis channel, streaming media, preview PDF, share link, dan dukungan proxy.
- Alur kerja tiga langkah untuk menyiapkan API Telegram dan menjalankan aplikasi.
- Instruksi instalasi dari source.
- FAQ singkat dan interaksi accordion ringan.

## Menjalankan lokal

```bash
npm run dev
```

Buka `http://localhost:5173`.

## Build

```bash
npm run build
```

Output statis akan dibuat di folder `dist/`.

## Deploy ke Vercel

Jika project Vercel Anda memakai Root Directory `app`, Vercel akan memakai konfigurasi `app/vercel.json`:

- Vercel menjalankan `npm run build`.
- Output statis dibaca dari folder `dist/`.
- Tidak ada dependency npm yang perlu diunduh, jadi deploy tetap ringan.
