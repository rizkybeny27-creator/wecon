import { getTranslations } from "next-intl/server";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import type { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;

  let title = "River Diversion Permitting Services Indonesia | PT WECON";
  let description = "Expert river diversion permitting consultation in Indonesia per PUPR Regulation No. 4/2024. Hydrological analysis, hydraulic modeling, and BWS recommendation.";

  if (locale === 'id') {
    title = "Perijinan Pengalihan Sungai: Syarat & Panduan Permen PUPR 4/2024";
    description = "Konsultan perijinan pengalihan sungai & alur air sesuai Permen PUPR No. 4 Tahun 2024. Melayani penyusunan kajian hidrologi, pemodelan HEC-RAS, AMDAL, & rekomtek BWS/BBWS.";
  } else if (locale === 'zh') {
    title = "印尼河流改道许可与导流工程咨询服务 | PT WECON";
    description = "根据印尼公共工程部 (PUPR) 2024年第4号条例提供专业河流改道许可咨询。包括水文分析、HEC-RAS水力建模和 BWS 推荐信。";
  }

  return {
    title: title,
    description: description,
    keywords: [
      "Perijinan Pengalihan Sungai",
      "River Diversion Permit Indonesia",
      "Permen PUPR No 4 Tahun 2024",
      "HEC-RAS Hydraulic Modeling",
      "BWS Technical Recommendation",
      "Cofferdam Design",
      "PT WECON"
    ],
    alternates: {
      canonical: `https://weconsultant.id/${locale}/services/river-diversion-permit`,
      languages: {
        'en': 'https://weconsultant.id/en/services/river-diversion-permit',
        'id': 'https://weconsultant.id/id/services/river-diversion-permit',
        'zh': 'https://weconsultant.id/zh/services/river-diversion-permit',
      },
    },
  };
}

export default async function RiverDiversionPermitPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations('Footer');

  const content = {
    id: {
      badge: "KONSULTASI PERIZINAN SUMBER DAYA AIR",
      h1: "Perijinan Pengalihan Sungai & Pengelak Alur Air (Permen PUPR No. 4/2024)",
      heroDesc: "Layanan pendampingan teknis dan pengurusan Perijinan Pengalihan Alur Sungai untuk proyek bendungan, jembatan, pertambangan, dan infrastruktur keairan sesuai standar regulasi Kementerian PUPR.",
      summaryTitle: "💡 Ringkasan Ketentuan Perijinan Pengalihan Sungai di Indonesia",
      summaryText: "Perijinan Pengalihan Sungai (atau river diversion permit) adalah persetujuan resmi wajib dari Menteri Pekerjaan Umum dan Perumahan Rakyat (PUPR) melalui Balai Besar Wilayah Sungai (BBWS/BWS) sebelum pengembang memindahkan atau membelokkan aliran sungai alami. Berdasarkan Permen PUPR No. 4 Tahun 2024, setiap pemrakarsa wajib menyerahkan kajian hidrologi/hidrolika, desain pengelak (cofferdam/saluran), serta dokumen lingkungan AMDAL sebelum pekerjaan fisik pengeringan area tapak konstruksi dapat dilaksanakan secara legal.",
      sec1Title: "1. Mengapa Perijinan Pengalihan Sungai Wajib Dimiliki?",
      sec1Text: "Pengalihan alur sungai merupakan intervensi rekayasa berskala besar yang berpotensi memicu risiko banjir bandang di hilir, longsor tebing sungai, maupun degradasi ekosistem perairan. Tanpa perizinan dan persetujuan teknis dari Balai Wilayah Sungai (BWS/BBWS), kegiatan konstruksi di dalam badan sungai dianggap pelanggaran hukum sesuai UU No. 17 Tahun 2019.",
      sec2Title: "2. Matriks Persyaratan Dokumen Teknis (Permen PUPR 4/2024)",
      col1: "Kategori Dokumen", col2: "Persyaratan Rinci", col3: "Output Teknis PT WECON",
      t1a: "Studi Hidrologi & Hidrolika", t1b: "Analisis debit banjir rancangan periode ulang 25, 50, hingga 100 tahun.", t1c: "Pemodelan simulasi aliran air HEC-RAS 1D/2D & profil muka air banjir.",
      t2a: "Desain Konstruksi Pengelak", t2b: "Gambar teknis cofferdam, terowongan pengelak, atau saluran terbuka.", t2c: "Detail Engineering Design (DED) lengkap dengan analisis stabilitas lereng.",
      t3a: "Dokumen Lingkungan", t3b: "AMDAL / UKL-UPL, penanganan sedimentasi, & pemeliharaan air hilir.", t3c: "Laporan mitigasi sedimentasi & pemeliharaan irigasi masyarakat.",
      sec3Title: "3. Tahapan Alur Pengurusan Izin Pengalihan Alur Sungai",
      steps: [
        "Survei Topografi & Geoteknik Lapangan: Pengukuran bathimetri alur sungai lama dan calon alur baru.",
        "Simulasi Dinamika Fluida & Hidrolika: Pemodelan perilaku debit air saat penutupan sungai (river closure).",
        "Pengajuan Permohonan Rekomtek ke BWS/BBWS: Paparan teknis di depan tim ahli Balai Wilayah Sungai Kementerian PUPR.",
        "Penerbitan Surat Rekomendasi Teknis: Landasan penerbitan Izin Pengalihan Alur Sungai resmi."
      ],
      faqTitle: "Pertanyaan Sering Diajukan (FAQ)",
      q1: "Berapa lama proses evaluasi perijinan pengalihan sungai?",
      a1: "Proses penyusunan kajian teknis hingga penerbitan Rekomtek BWS umumnya membutuhkan waktu 1 hingga 3 bulan tergantung kompleksitas debit sungai.",
      q2: "Apakah proyek swasta non-pemerintah wajib mengurus izin ini?",
      a2: "Ya, setiap kegiatan yang mengubah alur sungai alami wajib memiliki izin pengalihan sungai resmi.",
      sidebarTitle: "Butuh Konsultasi Perijinan Pengalihan Sungai?",
      sidebarDesc: "Tim insinyur keairan PT WECON bersertifikat siap membantu studi teknis, pemodelan HEC-RAS, dan pengajuan rekomendasi teknis ke BBWS/BWS setempat.",
      ctaWa: "💬 WhatsApp Konsultan Keairan",
      ctaMail: "✉️ Kirim Email Diskusi Proyek"
    },
    en: {
      badge: "WATER RESOURCES PERMITTING CONSULTANT",
      h1: "River Diversion Permitting & Channel Redirection Services (PUPR Reg. 4/2024)",
      heroDesc: "Comprehensive technical consultancy and licensing support for river diversion projects under Indonesian Ministry of Public Works regulations.",
      summaryTitle: "💡 Key Takeaways: River Diversion Permits in Indonesia",
      summaryText: "A River Diversion Permit is a mandatory authorization issued by the Ministry of PUPR via Regional River Basin Authorities (BBWS/BWS). Under PUPR Ministerial Regulation No. 4/2024, proponents must submit comprehensive hydrological modeling, cofferdam/diversion designs, and AMDAL environmental approvals before diverting natural river flows.",
      sec1Title: "1. Why River Diversion Permits Are Mandatory",
      sec1Text: "Redirecting natural river channels is a major engineering intervention that risks downstream flooding, bank erosion, and aquatic ecosystem disruption. Operating without technical approval from the River Basin Authority (BBWS/BWS) violates Indonesian Law No. 17/2019 on Water Resources.",
      sec2Title: "2. Technical Document Matrix (PUPR Reg. 4/2024)",
      col1: "Document Category", col2: "Detailed Requirement", col3: "PT WECON Deliverables",
      t1a: "Hydrology & Hydraulics", t1b: "Flood discharge analysis for 25, 50, and 100-year return periods.", t1c: "HEC-RAS 1D/2D hydraulic flow modeling & flood water profile.",
      t2a: "Diversion Structure Design", t2b: "Technical drawings for cofferdams, diversion tunnels, or channels.", t2c: "Detail Engineering Design (DED) with slope stability analysis.",
      t3a: "Environmental Documents", t3b: "AMDAL/UKL-UPL, sedimentation mitigation & downstream water flow.", t3c: "Sediment control plan & community irrigation maintenance strategy.",
      sec3Title: "3. Workflow Steps for River Diversion Permits",
      steps: [
        "Field Topographic & Geotechnical Survey: Bathymetric survey of old and new channel paths.",
        "Fluid Dynamics & Hydraulic Simulation: Modeling flow behavior during river closure.",
        "Technical Recommendation Application to BWS/BBWS: Technical presentation before Ministry experts.",
        "Issuance of Official Technical Recommendation (Rekomtek): Basis for official river diversion license."
      ],
      faqTitle: "Frequently Asked Questions (FAQ)",
      q1: "How long does the river diversion permit evaluation take?",
      a1: "Technical study preparation and BWS Rekomtek approval typically take 1 to 3 months depending on river complexity.",
      q2: "Are private non-government projects required to obtain this permit?",
      a2: "Yes, any activity modifying a natural river channel requires an official diversion permit.",
      sidebarTitle: "Need River Diversion Permitting Support?",
      sidebarDesc: "PT WECON certified water engineering team is ready to assist with technical studies, HEC-RAS modeling, and BWS recommendation submissions.",
      ctaWa: "💬 WhatsApp Water Engineer",
      ctaMail: "✉️ Email Project Inquiries"
    },
    zh: {
      badge: "水资源许可工程顾问",
      h1: "印尼河流改道许可与导流工程咨询 (PUPR 2024年第4号条例)",
      heroDesc: "根据印尼公共工程部 (PUPR) 法规，为大坝、桥梁、矿业和水利基础设施项目提供全面的河流改道技术及许可办理支持。",
      summaryTitle: "💡 印尼河流改道许可要点须知",
      summaryText: "河流改道许可 (River Diversion Permit) 是由印尼公共工程与公共住房部 (PUPR) 通过流域管理机构 (BBWS/BWS) 颁发的强制性官方批准。根据 PUPR 部长 2024年第4号条例，开发商在开始施工排水前，必须提交水文水力学研究、围堰/导流渠设计以及 AMDAL 环境影响评估文件。",
      sec1Title: "1. 为什么河流改道许可不可或缺？",
      sec1Text: "改变天然河道属于重大工程干预，可能引发下游洪水、河岸坍塌和水生生态破坏。未经流域管理机构 (BBWS/BWS) 的技术批准在河道内施工属于违法行为（符合印尼 2019年第17号水资源法）。",
      sec2Title: "2. 技术文件矩阵 (PUPR 2024年第4号条例)",
      col1: "文件类别", col2: "具体要求", col3: "PT WECON 技术成果",
      t1a: "水文与水力学研究", t1b: "重现期为25年、50年及100年的设计洪水流量分析。", t1c: "HEC-RAS 1D/2D 水流模拟与洪水位剖面图。",
      t2a: "导流结构设计", t2b: "围堰 (Cofferdam)、导流隧洞或明渠的技术施工图。", t2c: "包含边坡稳定分析的详细工程设计 (DED)。",
      t3a: "环境与减缓文件", t3b: "AMDAL/UKL-UPL、泥沙控制与下游灌溉保障。", t3c: "泥沙减缓报告及下游农田灌溉维持方案。",
      sec3Title: "3. 河流改道许可办理流程",
      steps: [
        "现场地形与地质勘测：测量旧河道与新导流河道的水深及地形。",
        "流体力学与水力模拟：模拟截流 (River Closure) 期间的水流行为。",
        "向 BWS/BBWS 提交技术推荐信申请：在 PUPR 部专家组前进行技术汇报。",
        "颁发官方技术推荐信 (Rekomtek)：作为正式获批河流改道许可证的依据。"
      ],
      faqTitle: "常见问题解答 (FAQ)",
      q1: "河流改道许可评估需要多长时间？",
      a1: "根据河流复杂程度，技术研究准备至 BWS Rekomtek 获批通常需要 1 到 3 个月。",
      q2: "非政府私营项目是否也必须办理此许可证？",
      a2: "是的，任何改变天然河道的活动都必须依法取得官方河流改道许可证。",
      sidebarTitle: "需要河流改道许可咨询？",
      sidebarDesc: "PT WECON 认证水利工程师团队随时为您提供技术研究、HEC-RAS 建模和 BWS 推荐信申请支持。",
      ctaWa: "💬 WhatsApp 咨询水利工程师",
      ctaMail: "✉️ 发送电子邮件探讨项目"
    }
  };

  const curr = content[locale as keyof typeof content] || content.en;

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": curr.q1,
        "acceptedAnswer": { "@type": "Answer", "text": curr.a1 }
      },
      {
        "@type": "Question",
        "name": curr.q2,
        "acceptedAnswer": { "@type": "Answer", "text": curr.a2 }
      }
    ]
  };

  return (
    <main className="flex flex-col min-h-screen bg-wecon-light text-wecon-dark">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Navbar />

      {/* Hero Header */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-wecon-dark text-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-30">
          <Image src="/river_diversion.png" alt="River Diversion Permit" fill className="object-cover" priority />
        </div>
        <div className="container mx-auto px-6 md:px-12 max-w-[1440px] relative z-10">
          <div className="inline-flex items-center gap-2.5 bg-blue-900/60 border border-blue-400/30 px-4 py-2 rounded-full mb-6">
            <span className="text-[10px] font-mono tracking-widest uppercase text-blue-300">
              {curr.badge}
            </span>
          </div>
          <h1 className="text-[36px] md:text-[56px] font-heading font-medium leading-[1.1] tracking-tight max-w-[1000px] mb-6">
            {curr.h1}
          </h1>
          <p className="text-white/80 text-lg md:text-xl max-w-[800px] leading-relaxed">
            {curr.heroDesc}
          </p>
        </div>
      </section>

      {/* GEO Inverted Pyramid Summary Block */}
      <section className="py-12 bg-blue-950 text-white border-b border-blue-900">
        <div className="container mx-auto px-6 md:px-12 max-w-[1440px]">
          <div className="bg-white/5 border border-white/10 p-8 rounded-2xl">
            <h2 className="text-xl font-heading font-bold mb-3 text-blue-300">
              {curr.summaryTitle}
            </h2>
            <p className="text-white/90 leading-relaxed font-sans text-base md:text-lg">
              {curr.summaryText}
            </p>
          </div>
        </div>
      </section>

      {/* Detailed Technical Guidance & Requirements */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6 md:px-12 max-w-[1440px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Main Content */}
            <div className="lg:col-span-8 space-y-12 text-black/80 leading-relaxed text-base md:text-lg">
              
              <div>
                <h2 className="text-[28px] md:text-[36px] font-heading text-black font-medium mb-4">
                  {curr.sec1Title}
                </h2>
                <p className="mb-4">
                  {curr.sec1Text}
                </p>
              </div>

              {/* Requirement Table */}
              <div>
                <h2 className="text-[28px] md:text-[36px] font-heading text-black font-medium mb-6">
                  {curr.sec2Title}
                </h2>
                <div className="overflow-x-auto border border-black/10 rounded-xl bg-white shadow-sm">
                  <table className="w-full text-left text-sm text-black">
                    <thead className="bg-gray-100 border-b border-black/10 font-heading text-black font-bold">
                      <tr>
                        <th className="p-4">{curr.col1}</th>
                        <th className="p-4">{curr.col2}</th>
                        <th className="p-4">{curr.col3}</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      <tr>
                        <td className="p-4 font-bold">{curr.t1a}</td>
                        <td className="p-4">{curr.t1b}</td>
                        <td className="p-4">{curr.t1c}</td>
                      </tr>
                      <tr>
                        <td className="p-4 font-bold">{curr.t2a}</td>
                        <td className="p-4">{curr.t2b}</td>
                        <td className="p-4">{curr.t2c}</td>
                      </tr>
                      <tr>
                        <td className="p-4 font-bold">{curr.t3a}</td>
                        <td className="p-4">{curr.t3b}</td>
                        <td className="p-4">{curr.t3c}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div>
                <h2 className="text-[28px] md:text-[36px] font-heading text-black font-medium mb-4">
                  {curr.sec3Title}
                </h2>
                <ol className="list-decimal pl-6 space-y-4">
                  {curr.steps.map((step, idx) => (
                    <li key={idx}>{step}</li>
                  ))}
                </ol>
              </div>

              {/* FAQ Section */}
              <div className="bg-white p-8 rounded-2xl border border-black/10 space-y-6">
                <h2 className="text-2xl font-heading text-black font-bold mb-4">{curr.faqTitle}</h2>
                <div>
                  <h3 className="font-bold text-lg text-black mb-1">{curr.q1}</h3>
                  <p className="text-sm">{curr.a1}</p>
                </div>
                <hr className="border-gray-200" />
                <div>
                  <h3 className="font-bold text-lg text-black mb-1">{curr.q2}</h3>
                  <p className="text-sm">{curr.a2}</p>
                </div>
              </div>

            </div>

            {/* Sidebar CTA */}
            <div className="lg:col-span-4">
              <div className="bg-white p-8 rounded-2xl border border-black/10 sticky top-28 shadow-lg">
                <h3 className="text-2xl font-heading text-black mb-3">{curr.sidebarTitle}</h3>
                <p className="text-sm text-black/70 mb-6 leading-relaxed">
                  {curr.sidebarDesc}
                </p>
                <div className="space-y-3">
                  <Link href="https://wa.me/6281234878660" className="block text-center bg-green-600 text-white font-mono font-bold text-xs py-4 rounded-md uppercase tracking-wider hover:bg-green-700 transition-colors">
                    {curr.ctaWa}
                  </Link>
                  <Link href="mailto:hello@wecon.com" className="block text-center bg-black text-white font-mono font-bold text-xs py-4 rounded-md uppercase tracking-wider hover:bg-gray-800 transition-colors">
                    {curr.ctaMail}
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#151515] text-white py-16">
        <div className="container mx-auto px-6 md:px-12 max-w-[1440px] text-center">
          <h2 className="text-3xl md:text-4xl font-heading mb-6">{t('cta_title')}</h2>
          <Link href="https://wa.me/6281234878660" className="inline-block bg-white text-black px-8 py-4 rounded-md font-mono font-bold text-xs uppercase tracking-widest hover:bg-gray-200 transition-colors">
            {t('contact_us')}
          </Link>
        </div>
      </footer>
    </main>
  );
}
