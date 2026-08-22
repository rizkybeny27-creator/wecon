# Audit SEO & GEO Website PT. WECON (weconsultant.id)

**Tanggal Audit:** 22 Agustus 2026  
**URL Website:** [https://weconsultant.id/](https://weconsultant.id/)  
**Target Keywords:**
1. **Perijinan Pengalihan Sungai** (Regulasi: Permen PUPR No. 4/2024)
2. **Perijinan Pengambilan Sungai** (Pengusahaan Air Permukaan / SIP SDA)
3. **Perijinan Pembangunan Bendungan** (Sertifikasi Desain, Izin Konstruksi & Impounding - Permen PUPR No. 27/2015)
4. **Sippa** (Sistem Informasi Perizinan Sumber Daya Air / Surat Izin Pengusahaan Air)

---

## 1. Analisis Performa Google Search Console (GSC)

Berdasarkan data kueri teratas GSC yang dilampirkan:

| Kueri Teratas | Klik | Tayangan | CTR | Posisi Rata-Rata | Catatan Evaluation |
|---|---|---|---|---|---|
| **water engineering consultant** | 3 | 7 | 42.86% | 7.14 | *Branded / Broad Industry (Peringkat 10 besar)* |
| **pt wecon** | 1 | 6 | 16.67% | 4.5 | *Brand Query* |
| **wecon** | 0 | 2 | 0.00% | 38.5 | *Brand Query (Halaman dalam/sampingan)* |
| **pt wecon indonesia** | 0 | 1 | 0.00% | 4.0 | *Brand Query* |
| **bendungan semantok** | 0 | 1 | 0.00% | 72.0 | *Project Portfolio Keyword* |
| **hydropower indonesia** | 0 | 1 | 0.00% | 92.0 | *General Industry Keyword* |

### Temuan Utama dari Data GSC:
1. **Zero Visibility pada Target Keyword Utama**: Ke-4 keyword target (*Perijinan Pengalihan Sungai*, *Perijinan Pengambilan Sungai*, *Perijinan Pembangunan Bendungan*, *Sippa*) **belum muncul sama sekali** (0 tayangan, 0 klik) di Search Console.
2. **Ketergantungan pada Brand Query**: Trafik yang ada saat ini 100% didominasi oleh pencarian merek (`PT WECON`, `water engineering consultant`).
3. **Peluang Komersial & Transaksional yang Belum Tergarap**: Kata kunci target memiliki *commercial & transactional intent* yang sangat tinggi dari klien B2B (kontraktor, pengembang PLTA, pengelola bendungan, BUMN/BUMD).

---

## 2. SEO & GEO Scorecard

| Kategori Audit | Skor (1-5) | Status | Ringkasan Masalah / Potensi |
|---|---|---|---|
| **On-Page SEO (Keywords & Headings)** | 2.0 / 5.0 | 🔴 Perlu Perbaikan | Belum ada landing page dedicated untuk masing-masing perizinan. Keyword belum ada di Meta Title/H1. |
| **Content Depth & Topical Authority** | 2.5 / 5.0 | 🟡 Cukup | Konten blog baru menyentuh 1 topik secara umum, belum detail menyebut Permen PUPR No. 4/2024 atau regulasi SIP SDA. |
| **GEO (AI Citation Readiness)** | 2.0 / 5.0 | 🔴 Perlu Perbaikan | Format artikel belum menggunakan *direct answer block* (inverted pyramid), tabel komparasi/syarat, atau Schema FAQ. |
| **Technical SEO & Metadata i18n** | 3.0 / 5.0 | 🟡 Cukup | Next.js i18n sudah ada (`/id`, `/en`, `/zh`), namun Metadata di `layout.tsx` masih statis & `generateMetadata` belum dinamis per locale. |
| **E-E-A-T & Credibility Signals** | 3.5 / 5.0 | 🟢 Baik | PT WECON punya track record 33+ tahun & proyek nasional (Semantok, Merangin), namun perlu dihubungkan secara teknis ke halaman izin. |

---

## 3. Temuan Detail & Audit On-Page per Keyword

### Keyword 1: Perijinan Pengalihan Sungai (dan variasi "Perizinan Pengalihan Alur Sungai")
- **Kondisi Eksisting**: Ada 1 postingan blog (`/id/blog/panduan-perijinan-pengalihan-air-sungai`), namun bersifat general.
- **Kelemahan SEO**:
  - Belum mengutip **Permen PUPR No. 4 Tahun 2024** (aturan terbaru pengalihan alur sungai yang mencabut Permen PUPR 21/2020).
  - Belum ada rincian teknis seperti: simulasi hidrolika HEC-RAS, analisis debit banjir 25/50 tahun, desain *cofferdam*, dan rekomendasi teknis Balai Wilayah Sungai (BWS/BBWS).
- **Potensi Rank #1**: Sangat tinggi jika dibuatkan *Comprehensive Service/Pillar Page* + Panduan Teknis Syarat Pengalihan Alur Sungai.

### Keyword 2: Perijinan Pengambilan Sungai / Air Permukaan
- **Kondisi Eksisting**: **Belum ada halaman/konten sama sekali**.
- **Kelemahan SEO**: Pencari kata kunci ini mencari syarat pengusahaan air permukaan untuk industri/PLTA/irigasi.
- **Potensi**: Perlu dibuatkan landing page jasa konsultasi & artikel panduan prosedur perizinan pengambilan air sungai melalui sistem SIP SDA PUPR.

### Keyword 3: Perijinan Pembangunan Bendungan
- **Kondisi Eksisting**: **Belum ada halaman khusus**. Artikel blog yang ada hanya membahas konstruksi bendungan secara umum (`sustainable-dam-construction`).
- **Kelemahan SEO**: Tidak ada konten yang menjelaskan 3 tahapan krusial izin bendungan:
  1. *Sertifikasi Desain* (Komisi Keamanan Bendungan)
  2. *Izin Pelaksanaan Konstruksi*
  3. *Izin Pengisian Awal Waduk (Impounding)* & *Izin Operasi*
- **Potensi**: Sangat strategis untuk menggaet pengembang bendungan & kontraktor utama.

### Keyword 4: Sippa (Sistem Informasi Perizinan Sumber Daya Air / Surat Izin Pengusahaan Air)
- **Kondisi Eksisting**: **Belum ada halaman/konten sama sekali**.
- **Kelemahan SEO**: Istilah SIPPA/SIP SDA sering dicari oleh perusahaan yang membutuhkan pendampingan pengajuan izin SDA ke Kementerian PUPR.
- **Potensi**: Harus dibuatkan panduan "Cara Mengurus SIPPA / SIP SDA Kementerian PUPR untuk Industri & Rekayasa Air".

---

## 4. Audit Teknis & Structuring Website (Next.js App Router)

1. **Metadata i18n & Dynamic Metadata**:
   - `src/app/[locale]/layout.tsx` menggunakan objek `metadata` statis bahasa Inggris.
   - Perlu implementasi `generateMetadata` di setiap halaman (`page.tsx` & `blog/[slug]/page.tsx`) agar Meta Title dan Meta Description bahasa Indonesia relevan dengan keyword target.
2. **Schema.org Structured Data**:
   - Halaman utama hanya memiliki `ProfessionalService` schema.
   - Perlu penambahan `Service` schema (untuk layanan konsultan perizinan) dan `FAQPage` schema (agar muncul di Google Rich Results & AI Overview).
3. **URL & Silo Architecture**:
   - Saat ini halaman perizinan terselip di `/blog/`.
   - Direkomendasikan membuat kluster layanan/halaman pillar:
     - `/id/layanan/perijinan-pengalihan-sungai`
     - `/id/layanan/perijinan-pengambilan-sungai-sippa`
     - `/id/layanan/perijinan-pembangunan-bendungan`
     - Serta mendukung artikel blog sebagai pendukung (*supporting cluster content*).

---

## 5. Rekomendasi GEO (Generative Engine Optimization)

Agar PT. WECON dikutip oleh ChatGPT, Gemini, Perplexity, & Google AI Overview ketika pengguna bertanya *"Bagaimana cara mengurus izin pengalihan sungai?"* atau *"Apa syarat perizinan pembangunan bendungan di Indonesia?"*:

1. **Inverted Pyramid Content Format**: Letakkan ringkasan jawaban pasti (definisi, dasar hukum Permen PUPR, dan syarat utama) di paragraf pertama tepat di bawah H2.
2. **Structured Tables**: Buat tabel perbandingan alur perizinan, syarat dokumen teknis (kajian hidrologi, AMDAL, desain cofferdam), dan otoritas pemberi izin (BBWS / Direktorat Jenderal SDA PUPR).
3. **Statistik & E-E-A-T Citations**: Cantumkan referensi resmi regulasi pemerintah dan pengalaman PT WECON (33+ tahun, keterlibatan di Bendungan Semantok, PLTA Merangin 350MW).
