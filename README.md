# Telegram Drive Website

Website Telegram Drive sudah dipasang di folder `app/` agar sesuai dengan struktur project/deploy Vercel Anda.

## Menjalankan dari root repo

```bash
npm run dev
```

Perintah root akan meneruskan eksekusi ke `app/`.

## Build dari root repo

```bash
npm run build
```

Output statis akan dibuat di `app/dist/`.

## Deploy ke Vercel

Repo ini mendukung dua konfigurasi Vercel:

- Jika Vercel memakai root repo sebagai Root Directory, `vercel.json` root akan menjalankan `npm run build` dan membaca output dari `app/dist`.
- Jika Vercel Anda disetel ke Root Directory `app`, konfigurasi `app/vercel.json` akan menjalankan build di dalam `app` dan membaca output dari `dist`.

Dengan begitu, Anda bisa langsung push repo ini tanpa memindahkan file manual.
