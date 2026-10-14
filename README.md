# Ujian Tengah Semester: ReactJS Fundamentals

## Skenario Ujian
Anda diberikan sebuah kerangka proyek (scaffolding) website Prodi Informatika. Tugas Anda adalah melengkapi bagian kode yang hilang agar website dapat berjalan dan bernavigasi dengan baik tanpa *reload*. 

## Alur Pengerjaan UTS
- **Buka browser :**  https://github.com/ariebhewhe/webprogramming2627/tree/uts-131026 
- **Fork Repositori:** Tekan tombol Fork di pojok kanan atas halaman repositori soal ini untuk menyalinnya menjadi repositori milik akun GitHub Anda sendiri.
- **Clone Repositori:** Salin (clone) repositori hasil fork Anda ke laptop/komputer masing-masing. Pastikan Anda berada di branch uts-131026. Setelah di-clone, buka folder soal_uts di teks editor Anda sebelum menjalankan npm install
- **Kerjakan Tugas:** Selesaikan daftar tugas (To-Do List) yang ada pada kode proyek.
- **Commit & Push:** Simpan dan unggah perubahan kode Anda ke repositori GitHub milik Anda sendiri secara berkala setiap kali selesai mengerjakan satu TODO (sesuai instruksi pada file). Pastikan sistem otomatis (GitHub Actions) pada tab "Actions" di repositori Anda menunjukkan status Centang Hijau (Success).
- **Pull Request (PR):** Buat Pull Request dari repositori Anda kembali ke repositori utama dosen sebagai tanda pengumpulan tugas. Pastikan base branch tujuan Pull Request mengarah ke uts-131026, BUKAN main atau master atau Develop.

## 📤 Cara Pengumpulan Tugas (Pull Request)
Setelah Anda selesai mengerjakan dan memastikan aplikasi berjalan tanpa *error*:

1. Pastikan semua perubahan sudah di-*commit*.
2. Lakukan *push* ke repositori GitHub hasil *fork* Anda:
   `git push origin main` *(atau `Soal_UTS` tergantung nama branch Anda)*
3. Buka halaman repositori Anda di *browser* (GitHub).
4. Klik tab **Pull requests**, lalu klik tombol hijau **New pull request**.
5. Pastikan Anda mengarahkan PR dari repositori Anda ke repositori utama milik Dosen.
6. **FORMAT JUDUL PR WAJIB:** `UTS - Nama Lengkap - NIM` 
   *(Contoh: UTS - Budi Santoso - 20230001)*
7. Klik **Create pull request**. Pastikan statusnya berubah menjadi *Open*.


## 📋 To-Do List Mahasiswa (Yang Harus Dikerjakan)

Cari komentar `// TODO:` di dalam file proyek dan selesaikan instruksinya:

- [ ] **TODO 1, 2 (di App.jsx):** Lakukan *import* untuk semua komponen Layout (Header, SideBar, Footer), komponen Pages (Beranda, Profil,dll dan NotFound,Berita), dan modul dari `react-router-dom`.
- [ ] **TODO 3, 4, 5 (di App.jsx):** Tempatkan tag komponen `<Header />`, `<SideBar />`, dan `<Footer />` pada posisi struktur HTML yang tepat.
- [ ] **TODO 6, 7 (di App.jsx):** Buat konfigurasi Routing menggunakan `<Routes>` dan `<Route>` agar setiap menu menampilkan komponen *Pages* yang sesuai di area konten utama dan lakukan commit dan push.
- [ ] **TODO 8 (di main.jsx):** Aktifkan import komponen App dan nyalakan tag <App/> di dalam <BrowserRouter/> dengan menghapus tanda komentarnya.
- [ ] **TODO 9 Khusus (di Header.jsx ):** Bangun struktur komponen Header dari awal sesuai petunjuk teks, termasuk melakukan import gambar dan menggunakan <NavLink> dari react-router-dom.
- [ ] **TODO 10-16 :** Ikuti dan kerjakan instruksi pembuatan/perbaikan komponen sesuai dengan petunjuk teks di masing-masing file.
- [ ] **TODO 17 (Pembuatan Berkas):** Buat file Berita.jsx dan NotFound.jsx di dalam folder src/pages/ dan lengkapi dengan struktur standar komponen React

## ⚠️ Peraturan Ketat 
1. **Dilarang keras** menginstal *library* CSS tambahan (seperti Bootstrap, Tailwind, dll).
2. **Dilarang keras** menghapus, memindahkan lokasi, atau memodifikasi file inti seperti package.json dan src/assets/style.css.
3. **Dilarang keras** mengubah nama struktur fungsi komponen bawaan (misalnya mengubah baris export default function Beranda).
4. **Sistem Penilaian Otomatis (Autograding):** Saat Anda melakukan Push atau membuat Pull Request, sistem GitHub Actions akan memindai kelengkapan direktori file, struktur kode wajib, dan riwayat commit Anda secara langsung. Jika terdeteksi adanya pelanggaran instruksi atau penghapusan kode yang dilindungi, status repositori Anda akan otomatis menjadi GAGAL (Silang Merah).
5. **Dilarang keras** menggunakan AI Assistant (GitHub Copilot, ChatGPT, dll). Dosen akan melakukan audit riwayat waktu commit (timestamp). Penyelesaian banyak TODO kompleks dalam waktu yang tidak masuk akal (indikasi copy-paste dari AI) akan ditandai sebagai indikasi kecurangan dan berisiko pembatalan nilai.

Selamat mengerjakan dan semoga sukses!

