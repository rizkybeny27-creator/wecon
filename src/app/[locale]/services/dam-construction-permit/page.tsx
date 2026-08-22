import { getTranslations } from "next-intl/server";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import type { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;

  let title = "Dam Construction Permitting & Safety Certification Services | PT WECON";
  let description = "Dam construction permitting and safety certification consultancy in Indonesia under Ministry of PUPR Regulation No. 27/2015. Design certification & impounding permits.";

  if (locale === 'id') {
    title = "Perijinan Pembangunan Bendungan & Sertifikasi Keamanan PUPR";
    description = "Konsultan Perijinan Pembangunan Bendungan & Sertifikasi Desain Komisi Keamanan Bendungan (Permen PUPR No. 27/2015). Pengisian awal waduk (impounding) & izin operasi.";
  } else if (locale === 'zh') {
    title = "印尼大坝建设许可与安全认证咨询服务 | PT WECON";
    description = "根据印尼 PUPR 部长 2015年第27号条例提供大坝建设许可和大坝安全委员会 (KKB) 认证咨询。包括设计认证与蓄水许可证。";
  }

  return {
    title: title,
    description: description,
    keywords: [
      "Perijinan Pembangunan Bendungan",
      "Dam Construction Permit Indonesia",
      "Sertifikasi Desain Bendungan",
      "Komisi Keamanan Bendungan KKB",
      "Permen PUPR No 27 Tahun 2015",
      "Dam Impounding Permit",
      "PT WECON"
    ],
    alternates: {
      canonical: `https://weconsultant.id/${locale}/services/dam-construction-permit`,
      languages: {
        'en': 'https://weconsultant.id/en/services/dam-construction-permit',
        'id': 'https://weconsultant.id/id/services/dam-construction-permit',
        'zh': 'https://weconsultant.id/zh/services/dam-construction-permit',
      },
    },
  };
}

export default async function DamConstructionPermitPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations('Footer');

  const content = {
    id: {
      badge: "KONSULTAN INFRASTRUKTUR BENDUNGAN",
      h1: "Perijinan Pembangunan Bendungan & Sertifikasi Komisi Keamanan Bendungan",
      heroDesc: "Pendampingan profesional dalam Sertifikasi Desain, Izin Konstruksi, Izin Impounding (Pengisian Awal Waduk), dan Izin Operasi Bendungan sesuai Permen PUPR No. 27/2015.",
      summaryTitle: "💡 Ringkasan Perijinan Pembangunan Bendungan di Indonesia",
      summaryText: "Perijinan Pembangunan Bendungan adalah serangkaian persetujuan teknis dan legalitas wajib dari Menteri PUPR untuk memastikan keamanan struktur bendungan dari risiko keruntuhan. Diatur dalam Permen PUPR No. 27/PRT/M/2015, proses ini mensyaratkan sidang Pleno Komisi Keamanan Bendungan (KKB) untuk menerbitkan Sertifikasi Desain, Izin Pelaksanaan Konstruksi, Izin Impounding (Pengisian Awal), dan Izin Operasi.",
      sec1Title: "1. Kompleksitas & Tahapan Regulasi Perijinan Bendungan",
      sec1Text: "Bendungan adalah bangunan keairan yang menampung volume air masif dengan tingkat risiko tinggi (High-Hazard Dam). Oleh karena itu, hukum Indonesia mewajibkan pengujian kelayakan geologi teknik, analisis kegagalan bendungan (Dam Break Analysis), simulasi gempa runtuhan, dan pengujian model fisik (Physical Hydraulic Model) sebelum konstruksi fisik dimulai.",
      sec2Title: "2. Matriks 4 Tahap Perizinan Bendungan (Permen PUPR 27/2015)",
      col1: "Tahap Perizinan", col2: "Fokus Dokumen Teknis", col3: "Persetujuan Otoritas",
      t1a: "1. Sertifikasi Desain", t1b: "Detail Engineering Design, Studi Geologi Lanjutan, Dam Break Analysis, Kajian Seismik.", t1c: "Sertifikat Keamanan Desain oleh Komisi Keamanan Bendungan.",
      t2a: "2. Izin Konstruksi", t2b: "Rencana Manajemen Konstruksi, Desain Cofferdam, Rencana K3 Bendungan.", t2c: "Izin Pelaksanaan Konstruksi Bendungan dari Menteri PUPR.",
      t3a: "3. Izin Impounding (Pengisian Awal)", t3b: "Hasil pengujian instrumen piezometer, As-Built Drawing, & Emergency Action Plan.", t3c: "Izin Pengisian Awal Waduk setelah inspeksi teknis tim KKB.",
      t4a: "4. Izin Operasi Bendungan", t4b: "Laporan evaluasi perilaku bendungan selama pengisian awal & Manual O&P.", t4c: "Izin Operasi dan Pemeliharaan Bendungan jangka panjang.",
      faqTitle: "Pertanyaan Sering Diajukan (FAQ Bendungan)",
      q1: "Apakah bendungan kecil / embung juga wajib bersertifikat?",
      a1: "Sesuai aturan PUPR, bendungan dengan tinggi di atas 15 meter (atau tinggi 10-15 meter dengan kapasitas tampungan lebih dari 500.000 m³) wajib mengikuti prosedur sertifikasi penuh Komisi Keamanan Bendungan.",
      sidebarTitle: "Konsultasi Sertifikasi & Perizinan Bendungan",
      sidebarDesc: "Percayakan penyusunan sertifikasi desain bendungan & pendampingan sidang Komisi Keamanan Bendungan kepada tim pakar PT WECON.",
      ctaWa: "💬 Hubungi Tim Ahli Bendungan",
      ctaMail: "✉️ Kirim Email Diskusi DED"
    },
    en: {
      badge: "DAM ENGINEERING CONSULTANT",
      h1: "Dam Construction Permitting & Safety Certification Services",
      heroDesc: "Expert consultation for dam design certification, construction permits, initial impounding clearance, and operation permits in Indonesia.",
      summaryTitle: "💡 Key Takeaways: Dam Construction Permitting in Indonesia",
      summaryText: "Dam construction in Indonesia requires strict multi-stage safety clearances from the Ministry of PUPR Dam Safety Commission (KKB) under Regulation No. 27/2015, spanning Design Certification, Construction Authorization, Impounding Permit, and Operation Permit.",
      sec1Title: "1. Complexity & Regulatory Requirements for Dam Projects",
      sec1Text: "Dams are high-hazard structures impounding massive water volumes. Indonesian law demands thorough engineering geology feasibility, Dam Break Analysis, earthquake simulation, and physical hydraulic modeling before site construction can commence.",
      sec2Title: "2. 4-Stage Dam Permitting Matrix (PUPR Reg. 27/2015)",
      col1: "Permitting Stage", col2: "Technical Documentation Focus", col3: "Authority Approval",
      t1a: "1. Design Certification", t1b: "Detail Engineering Design, Advanced Geology, Dam Break Analysis, Seismic Study.", t1c: "Design Safety Certificate issued by Dam Safety Commission (KKB).",
      t2a: "2. Construction Authorization", t2b: "Construction Management Plan, Cofferdam DED, Dam Safety & K3 Plan.", t2c: "Dam Construction Execution Authorization from Minister of PUPR.",
      t3a: "3. Impounding Permit", t3b: "Piezometer instrument test data, As-Built Drawings, Emergency Action Plan (EAP).", t3c: "Initial Reservoir Impounding Clearance following KKB technical inspection.",
      t4a: "4. Dam Operation Permit", t4b: "Dam behavior evaluation report during impounding & O&M Manual.", t4c: "Long-term Dam Operation & Maintenance Clearance.",
      faqTitle: "Frequently Asked Questions (Dam FAQ)",
      q1: "Are small dams or retention basins required to obtain certification?",
      a1: "Under PUPR rules, dams over 15 meters high (or 10-15 meters with capacity exceeding 500,000 m³) must undergo full Dam Safety Commission certification.",
      sidebarTitle: "Dam Certification & Permitting Consultation",
      sidebarDesc: "Entrust dam design certification and Dam Safety Commission defense to PT WECON expert dam engineers.",
      ctaWa: "💬 Contact Dam Engineer Team",
      ctaMail: "✉️ Email DED Project Discussion"
    },
    zh: {
      badge: "大坝工程顾问",
      h1: "印尼大坝建设许可与大坝安全委员会 (KKB) 认证服务",
      heroDesc: "根据 PUPR 2015年第27号条例，为印尼大坝设计认证、施工许可、水库初始蓄水许可及运行许可提供专业技术咨询。",
      summaryTitle: "💡 印尼大坝建设许可要点",
      summaryText: "在印尼建造大坝必须严格遵守公共工程部 2015年第27号条例，经由大坝安全委员会 (KKB) 审核并依次取得：1) 设计安全认证、2) 施工许可、3) 初始蓄水许可 (Impounding) 及 4) 运行维护许可。",
      sec1Title: "1. 大坝许可流程的复杂性与法规要求",
      sec1Text: "大坝属于蓄水量巨大的高风险工程。印尼法律规定，在开始主体工程前，必须完成详细工程地质勘察、溃坝分析 (Dam Break Analysis)、抗震模拟和物理水力模型试验。",
      sec2Title: "2. 大坝许可 4 阶段矩阵 (PUPR 2015年第27号条例)",
      col1: "许可阶段", col2: "技术文件重点", col3: "官方批准",
      t1a: "1. 设计安全认证", t1b: "详细工程设计 (DED)、进阶地质研究、溃坝分析及抗震评估。", t1c: "由大坝安全委员会 (KKB) 颁发设计安全证书。",
      t2a: "2. 施工许可证", t2b: "施工管理计划、围堰 DED 及大坝安全 K3 方案。", t2c: "PUPR 部长颁发的大坝主体施工许可证。",
      t3a: "3. 蓄水许可证 (Impounding)", t3b: "渗流测压计数据、竣工图及应急预案 (EAP)。", t3c: "KKB 专家组现场验收后颁发初始蓄水许可。",
      t4a: "4. 大坝运行许可证", t4b: "蓄水期间大坝形变评估报告及运行维护 (O&M) 手册。", t4c: "长期大坝运行与维护许可证。",
      faqTitle: "常见问题解答 (大坝 FAQ)",
      q1: "小型大坝或水库是否也必须进行安全认证？",
      a1: "根据 PUPR 规定，坝高超过 15 米（或坝高 10-15 米且库容超过 50 万立方米）的大坝必须进行大坝安全委员会全套认证。",
      sidebarTitle: "大坝认证与许可办理咨询",
      sidebarDesc: "将大坝设计认证和大坝安全委员会评审交由 PT WECON 资深大坝工程师团队完成。",
      ctaWa: "💬 联系大坝专家团队",
      ctaMail: "✉️ 发送邮件讨论 DED 设计"
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
          <Image src="/dam_sustainable.png" alt="Dam Construction Permit" fill className="object-cover" priority />
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

              {/* Dam Licensing Stages Table */}
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
