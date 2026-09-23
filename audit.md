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

| Kategori Audit | Skor Awal (1-5) | Skor Revisi (23 Sep 2026) | Status | Ringkasan Masalah / Potensi |
|---|---|---|---|---|
| **On-Page SEO (Keywords & Headings)** | 2.0 / 5.0 | 4.0 / 5.0 | 🟢 Diperbaiki | Landing page dedicated untuk 3 perizinan sudah dibuat di `/id/services/*` + hub `/id/services`. Keyword target ada di Meta Title & H1 id tiap halaman. |
| **Content Depth & Topical Authority** | 2.5 / 5.0 | 4.0 / 5.0 | 🟢 Diperbaiki | Blog id 3 postingan diperluas (±1000 kata): Permen PUPR 4/2024, 27/2015, SIPPA, biaya/durasi, sanksi. Halaman layanan ditambah seksi durasi/biaya/kriteria konsultan. |
| **GEO (AI Citation Readiness)** | 2.0 / 5.0 | 4.5 / 5.0 | 🟢 Diperbaiki | Inverted pyramid block + tabel matriks + Schema `Service`, `FAQPage`, `BreadcrumbList`, `BlogPosting`, `ProfessionalService`. Siap Rich Results & AI Overview. |
| **Technical SEO & Metadata i18n** | 3.0 / 5.0 | 4.5 / 5.0 | 🟢 Diperbaiki | `generateMetadata` dinamis 3 bahasa (id/en/zh) di layout + semua halaman. Canonical pakai `siteUrl`, alternates + `x-default`, OG/Twitter absolut, dedupe judul brand, sitemap 54 URL, robots clean. |
| **E-E-A-T & Credibility Signals** | 3.5 / 5.0 | 4.0 / 5.0 | 🟢 Diperbaiki | Author dikonsistensikan ke **Gani Abdurrahman** (proyek + blog permit). Referensi Bendungan Semantok & Ladongi ditautkan ke halaman izin & blog. |

### Log Implementasi & Status (diperbarui 23 September 2026)

| # | Perubahan | File Utama | Status | Verifikasi |
|---|---|---|---|---|
| 1 | Buat hub `/services` (3 bahasa) + metadata + JSON-LD Service/BreadcrumbList | `src/app/[locale]/services/page.tsx` | ✅ Selesai | Build pass, render 200 |
| 2 | Buat 3 halaman pillar perizinan (konten id/en/zh, tabel, FAQ, sidebar related, footer links) | `services/{river-diversion-permit,water-intake-permit-sippa,dam-construction-permit}/page.tsx` | ✅ Selesai | Runtime curl 200 id/en/zh |
| 3 | Interlink silo: hub↔pillar↔blog (guide link), related servicing sidebar, footer | 3 halaman layanan + `page.tsx` hub | ✅ Selesai | `href` terlocalisasi terverifikasi |
| 4 | Perluas konten id: durasi/biaya/kriteria konsultan di 3 halaman layanan | halaman layanan | ✅ Selesai | — |
| 5 | Perluas 3 blog id permit (±1000 kata) + rename author → Gani Abdurrahman (9 file) | `content/{id,en,zh}/blog/*permit*.md` | ✅ Selesai | Frontmatter terverifikasi |
| 6 | Metadata dinamis 3 bahasa + canonical `siteUrl` + OG/Twitter absolut + JSON-LD lokal | `src/app/[locale]/layout.tsx` | ✅ Selesai | Title/brand single, og:title sesuai keyword |
| 7 | Dedupe judul brand + localize metadata listing (blog, projects) + schema BlogPosting | `blog/[slug]`, `blog/page`, `projects/[slug]`, `projects/page` | ✅ Selesai | BlogPosting author = Gani Abdurrahman |
| 8 | Perluas FAQ bendungan 3 Q&A + Service/BreadcrumbList schema di 3 halaman layanan | `services/*` | ✅ Selesai | JSON-LD array lengkap di HTML |
| 9 | H1 homepage + navbar "Permits"/"Perizinan" + footer links + cards permits | `page.tsx`, `Navbar.tsx`, `messages/*.json` | ✅ Selesai | Render terverifikasi |
| 10 | Sitemap (54 URL, priority, x-default) + robots dedupe | `src/app/sitemap.ts`, `src/app/robots.ts` | ✅ Selesai | 54 `<url>`, robots 1 rule |
| 11 | Konsistensi `siteUrl` di canonical all pages + OG/twitter halaman layanan + author schema | 3 halaman layanan, `about/page.tsx`, `blog/[slug]`, `projects/[slug]` | ✅ Selesai | 23 Sep 2026, diff direview |
| — | Lint & Build (`npm run lint && npm run build`) | — | ✅ Selesai | Pass |

### Belum Dilakukan (Perlu Tindakan Pemilik Website)

| # | Tindakan | Prioritas | Catatan |
|---|---|---|---|
| 1 | GSC: request indexing `/id/services/*` + resubmit `/sitemap.xml` | 🔴 Kritis | Prasyarat agar halaman terindeks & bisa diranking |
| 2 | Cek indexation via `site:weconsultant.id/id/services` | 🔴 Kritis | Baseline saat ini 0 hasil |
| 3 | Bangun 1+ backlink dofollow ke `/id/services` (dari kontraktor utama / asosiasi BHMMA-INTAKIN / direktori industri) | 🟠 Penting | Akselerasi otoritas; domain belum punya data backlink |
| 4 | Validasi Schema di Google Rich Results Test | 🟢 Standard | FAQ/Service/Breadcrumb/BlogPosting |
| 5 | Pantau 4-8 minggu: impressions GSC → optimasi query long-tail | 🟢 Standard | Roadmap hasil: indexing 2-3 minggu, trafik nyata 4-8 bulan |

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
