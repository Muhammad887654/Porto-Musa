# Portofolio Muhamad Saefuloh

Situs portofolio dan blog statis yang dibuat dengan HTML, CSS, dan JavaScript tanpa proses build atau dependensi npm.

## Struktur

- `index.html` — halaman utama portofolio.
- `blog.html` — daftar artikel.
- `article.html` — halaman detail artikel berdasarkan parameter `?post=slug`.
- `style.css` — gaya untuk halaman portofolio dan blog.
- `script.js` — interaksi dan konten cadangan halaman portofolio.
- `data-loader.js` — membaca data dari `site-data.xml`.
- `site-data.xml` — sumber data utama portofolio dan artikel untuk situs lokal.
- `assets/` — gambar profil dan gambar latar.
- `portfolio.xml`, `blog.xml` — data XML terpisah.
- `blogger-template.xml` — template tema Blogger; unggah dari menu **Tema** di Blogger.
- `blogger-posts.xml` — feed Atom contoh artikel. URL `example.com` dan email placeholder perlu diganti; format ini belum tentu bisa langsung diimpor sebagai cadangan Blogger.
- `wordpress.xml` — berkas WXR untuk proses impor WordPress; periksa dan ganti metadata placeholder sebelum impor.

File dipertahankan di root agar tautan relatif situs dan konfigurasi GitHub Pages tetap sederhana.

## Menjalankan secara lokal

Buka `index.html` langsung untuk melihat portofolio. Untuk memastikan pemuatan XML melalui HTTP, jalankan server lokal dari folder ini:

```powershell
py -m http.server 8000
```

Kemudian buka <http://localhost:8000>.

## Publikasi di GitHub Pages

1. Push isi folder ini ke branch `main`.
2. Buka **Settings → Pages** pada repositori.
3. Pilih **Deploy from a branch**, branch `main`, folder `/ (root)`, lalu simpan.
4. Tunggu proses publikasi selesai; alamat situs akan tampil pada halaman Pages.

## Memperbarui konten

Perbarui `site-data.xml` untuk data situs. `script.js` menyediakan konten cadangan jika XML tidak dapat dimuat. Untuk publikasi Blogger dan WordPress, gunakan berkas ekspor terkait dan sesuaikan URL, email, serta metadata dengan situs tujuan.
