import { getTranslations } from "next-intl/server";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import type { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;

  let title = "Surface Water Intake Permitting & SIPPA Services | PT WECON";
  let description = "Surface water intake permitting & SIPPA licensing consultancy in Indonesia. Water availability study, intake design, and PUPR BWS technical approval.";

  if (locale === 'id') {
    title = "Perijinan Pengambilan Sungai & SIPPA: Cara Mengurus Izin Air Permukaan";
    description = "Panduan & jasa konsultan Perijinan Pengambilan Sungai serta SIPPA (Sistem Informasi Perizinan Sumber Daya Air PUPR). Kajian ketersediaan air & rekomtek BWS.";
  } else if (locale === 'zh') {
    title = "印尼河流取水许可与 SIPPA 许可证办理咨询 | PT WECON";
    description = "提供印尼地表水取水许可和 SIPPA 许可证办理专业咨询。包括水资源供需平衡研究、取水结构设计及 PUPR BWS 技术批准。";
  }

  return {
    title: title,
    description: description,
    keywords: [
      "Perijinan Pengambilan Sungai",
      "Sippa",
      "SIPPA PUPR",
      "Surface Water Intake Permit Indonesia",
      "SIP SDA Kementerian PUPR",
      "Water Balance Study",
      "PT WECON"
    ],
    alternates: {
      canonical: `https://weconsultant.id/${locale}/services/water-intake-permit-sippa`,
      languages: {
        'en': 'https://weconsultant.id/en/services/water-intake-permit-sippa',
        'id': 'https://weconsultant.id/id/services/water-intake-permit-sippa',
        'zh': 'https://weconsultant.id/zh/services/water-intake-permit-sippa',
      },
    },
  };
}

export default async function WaterIntakePermitSippaPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations('Footer');

  const content = {
    id: {
      badge: "PERIZINAN AIR PERMUKAAN & SIPPA",
      h1: "Perijinan Pengambilan Sungai & Pendampingan SIPPA Kementerian PUPR",
      heroDesc: "Solusi terpadu pengurusan Izin Pengusahaan Air Permukaan (Pengambilan Air Sungai) bagi industri, proyek PLTA, dan pabrik melalui Sistem Informasi Perizinan Sumber Daya Air (SIPPA / SIP SDA).",
      summaryTitle: "💡 Ringkasan Perijinan Pengambilan Sungai (SIPPA)",
      summaryText: "Perijinan Pengambilan Sungai (atau Izin Pengusahaan Air Permukaan) wajib dimiliki oleh setiap badan usaha yang mengambil air sungai untuk keperluan komersial, pabrik, pertambangan, maupun pembangkit listrik (PLTA/PLTM). Pengajuan dilakukan secara digital melalui portal SIPPA / SIP SDA Kementerian PUPR dengan syarat utama berupa Studi Kelayakan Neraca Air (Water Balance), Rekomendasi Teknis dari Balai Besar Wilayah Sungai (BBWS/BWS), serta desain teknis struktur Intake Air.",
      sec1Title: "1. Mengapa Industri & PLTA Membutuhkan Izin Pengambilan Air Sungai (SIPPA)?",
      sec1Text: "Setiap pengambilan air permukaan dalam volume tertentu untuk kegiatan produksi industri, pendingin mesin, atau pemutaran turbin PLTA berdampak pada ketersediaan alokasi air bagi pengguna lain di Daerah Aliran Sungai (DAS). Pemerintah menetapkan bahwa pengusahaan air tanpa izin resmi dikenakan sanksi administratif hingga penutupan fasilitas intake.",
      sec2Title: "2. Tahapan Pengajuan SIPPA di Kementerian PUPR",
      col1: "Tahap Prosedur", col2: "Aktivitas Utama", col3: "Peran PT WECON",
      t1a: "1. Kajian Hidrologi & Neraca Air", t1b: "Pengukuran debit sungai & perhitungan debit andalan 80%-95%.", t1c: "Penyusunan Laporan Kajian Ketersediaan Air resmi.",
      t2a: "2. Desain Bangunan Intake", t2b: "Perancangan struktur intake, pompa, dan pintu air agar aman dari banjir.", t2c: "Penyusunan Detail Engineering Design (DED) Intake.",
      t3a: "3. Verifikasi Portal SIP SDA", t3b: "Unggah berkas permohonan ke portal SIP SDA (perizinansda.pu.go.id).", t3c: "Pendampingan administrasi & berkas teknis bersertifikat.",
      t4a: "4. Sidang Rekomtek BBWS/BWS", t4b: "Pemeriksaan lapangan & presentasi teknis di depan komisi Balai Wilayah Sungai.", t4c: "Pendampingan paparan teknis insinyur senior keairan PT WECON.",
      faqTitle: "Pertanyaan Sering Diajukan (FAQ SIPPA)",
      q1: "Apa bedanya SIPPA (Air Permukaan) dengan SIPA (Air Tanah)?",
      a1: "SIPPA ditujukan khusus untuk pengambilan air dari sungai/danau/waduk (air permukaan) di bawah Kementerian PUPR/BWS. Sedangkan SIPA difokuskan untuk pengambilan air dari sumur dalam / akuifer (air tanah) di bawah Dinas ESDM.",
      q2: "Berapa masa berlaku izin pengambilan air sungai?",
      a2: "Izin Pengusahaan Air Permukaan umumnya berlaku selama 5 tahun dan wajib diperpanjang dengan evaluasi ulang ketersediaan debit air.",
      sidebarTitle: "Butuh Pendampingan Izin SIPPA / Pengambilan Sungai?",
      sidebarDesc: "Hubungi konsultan keairan PT WECON untuk konsultasi perhitungan neraca air, desain intake, dan pengurusan rekomendasi teknis BWS.",
      ctaWa: "💬 Konsultasi SIPPA via WhatsApp",
      ctaMail: "✉️ Kirim Permohonan Penawaran"
    },
    en: {
      badge: "SURFACE WATER PERMITTING",
      h1: "Surface Water Intake Licensing & SIPPA Permitting Consultancy",
      heroDesc: "End-to-end technical assistance for river water intake permits (SIPPA / SIP SDA) for hydropower plants, industrial complexes, and commercial users.",
      summaryTitle: "💡 Key Takeaways: Water Intake Permits & SIPPA",
      summaryText: "A Surface Water Intake Permit (SIPPA) is mandatory for commercial or industrial water extraction from rivers in Indonesia. Applications require a Water Balance Study, technical intake designs, and approval from the Regional River Basin Authority (BBWS/BWS) via the official Ministry of PUPR portal.",
      sec1Title: "1. Why Industrial Plants & Hydropower Need Surface Water Permits",
      sec1Text: "Extracting river water for manufacturing, cooling, or hydroelectric turbines affects water availability across the river basin. Operating water intake facilities without official PUPR authorization carries severe administrative penalties and intake shutdown risks.",
      sec2Title: "2. SIPPA Application Stages at PUPR Ministry",
      col1: "Stage", col2: "Main Activities", col3: "PT WECON Role",
      t1a: "1. Hydrological & Water Balance Study", t1b: "River discharge measurement & 80%-95% dependable flow calculation.", t1c: "Official Water Balance & Availability Report preparation.",
      t2a: "2. Intake Structure Design", t2b: "Designing flood-resistant intake pumps, gates, and sediment traps.", t2c: "Detail Engineering Design (DED) for water intake.",
      t3a: "3. SIP SDA Portal Verification", t3b: "Uploading documents to official portal (perizinansda.pu.go.id).", t3c: "Certified technical documentation & submission support.",
      t4a: "4. BBWS/BWS Rekomtek Presentation", t4b: "Field inspection & technical defense before river basin authority.", t4c: "Senior water engineer defense & technical recommendation approval.",
      faqTitle: "Frequently Asked Questions (SIPPA FAQ)",
      q1: "What is the difference between SIPPA (Surface Water) and SIPA (Groundwater)?",
      a1: "SIPPA governs surface water extraction (rivers, lakes, reservoirs) under Ministry of PUPR/BWS, whereas SIPA governs deep groundwater/wells under the Energy Ministry (ESDM).",
      q2: "How long is a surface water intake permit valid?",
      a2: "Surface water extraction permits are typically valid for 5 years and renewable subject to water availability re-evaluation.",
      sidebarTitle: "Need SIPPA & Water Intake Licensing Assistance?",
      sidebarDesc: "Contact PT WECON water engineering consultants for water balance calculation, intake DED, and BWS technical recommendation support.",
      ctaWa: "💬 WhatsApp SIPPA Consultation",
      ctaMail: "✉️ Request Quotation"
    },
    zh: {
      badge: "地表水许可证办理",
      h1: "印尼河流取水许可与 SIPPA 许可证办理技术咨询",
      heroDesc: "为水电站、工业园区和商业用户提供地表水取水许可证 (SIPPA / SIP SDA) 办理的全面技术协助。",
      summaryTitle: "💡 印尼地表水取水许可 (SIPPA) 须知",
      summaryText: "从印尼河流中取用商业或工业用水必须办理地表水取水许可证 (SIPPA)。申请需要通过公共工程部 (PUPR) 官方门户提交水资源供需平衡研究、取水结构技术设计，并获得流域管理机构 (BBWS/BWS) 的批准。",
      sec1Title: "1. 为什么工业工厂与水电站必须办理取水许可证？",
      sec1Text: "抽取河水用于工业生产、冷却或水电 turbin 发电会影响整个流域的水资源分配。无证运行取水设施将面临严重的行政处罚甚至关停风险。",
      sec2Title: "2. PUPR 部 SIPPA 许可申请流程",
      col1: "流程阶段", col2: "主要工作", col3: "PT WECON 职责",
      t1a: "1. 水文与水资源平衡研究", t1b: "测量河流量并计算80%-95%保证率流量。", t1c: "编制官方水资源供需平衡报告。",
      t2a: "2. 取水结构设计", t2b: "设计防洪防沙的取水泵房、水闸及沉砂池。", t2c: "编制取水结构详细工程设计 (DED)。",
      t3a: "3. SIP SDA 门户验证", t3b: "在官方门户 (perizinansda.pu.go.id) 提交申请。", t3c: "认证技术文件上传与行政协助。",
      t4a: "4. BBWS/BWS 技术评审会", t4b: "现场核查并在流域机构专家组前进行技术答辩。", t4c: "资深水利工程师现场答辩与技术推荐信获批。",
      faqTitle: "常见问题解答 (SIPPA FAQ)",
      q1: "SIPPA（地表水）与 SIPA（地下水）有何区别？",
      a1: "SIPPA 专门针对 PUPR/BWS 管辖的河流水库等地表水取用；而 SIPA 针对 ESDM 能源部管辖的深井地下水抽取。",
      q2: "河流取水许可证的有效期是多久？",
      a2: "地表水取水许可证有效期通常为 5 年，到期后需经水资源评估重新办理续期。",
      sidebarTitle: "需要 SIPPA 取水许可协助？",
      sidebarDesc: "联系 PT WECON 水利顾问，获取水资源平衡计算、取水设计和 BWS 技术推荐信办理支持。",
      ctaWa: "💬 WhatsApp 咨询 SIPPA",
      ctaMail: "✉️ 索取报价"
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
          <Image src="/service_survey.png" alt="Water Intake Permit SIPPA" fill className="object-cover" priority />
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

      {/* Main Content */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6 md:px-12 max-w-[1440px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            <div className="lg:col-span-8 space-y-12 text-black/80 leading-relaxed text-base md:text-lg">
              
              <div>
                <h2 className="text-[28px] md:text-[36px] font-heading text-black font-medium mb-4">
                  {curr.sec1Title}
                </h2>
                <p className="mb-4">
                  {curr.sec1Text}
                </p>
              </div>

              {/* Steps Table */}
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
                      <tr>
                        <td className="p-4 font-bold">{curr.t4a}</td>
                        <td className="p-4">{curr.t4b}</td>
                        <td className="p-4">{curr.t4c}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
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
