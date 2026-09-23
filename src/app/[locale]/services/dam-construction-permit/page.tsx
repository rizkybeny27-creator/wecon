import { getTranslations } from "next-intl/server";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import type { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://weconsultant.id';

  let title = "Dam Construction Permitting & Safety Certification in Indonesia";
  let description = "Dam construction permitting and safety certification consultancy in Indonesia under Ministry of PUPR Regulation No. 27/2015. Design certification & impounding permits.";

  if (locale === 'id') {
    title = "Perijinan Pembangunan Bendungan & Sertifikasi Keamanan PUPR";
    description = "Konsultan Perijinan Pembangunan Bendungan & Sertifikasi Desain Komisi Keamanan Bendungan (Permen PUPR No. 27/2015). Pengisian awal waduk (impounding) & izin operasi.";
  } else if (locale === 'zh') {
    title = "印尼大坝建设许可与安全认证咨询服务";
    description = "根据印尼 PUPR 部长 2015年第27号条例提供大坝建设许可和大坝安全委员会 (KKB) 认证咨询。包括设计认证与蓄水许可证。";
  }

  const canonicalUrl = `${siteUrl}/${locale}/services/dam-construction-permit`;

  return {
    title,
    description,
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
      canonical: canonicalUrl,
      languages: {
        'en': `${siteUrl}/en/services/dam-construction-permit`,
        'id': `${siteUrl}/id/services/dam-construction-permit`,
        'zh': `${siteUrl}/zh/services/dam-construction-permit`,
      },
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: 'PT. WECON',
      type: 'website',
      locale: locale === 'id' ? 'id_ID' : locale === 'zh' ? 'zh_CN' : 'en_US',
      images: [
        {
          url: `${siteUrl}/dam_sustainable.png`,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [`${siteUrl}/dam_sustainable.png`],
    },
  };
}

export default async function DamConstructionPermitPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations('Footer');
  const tPermits = await getTranslations('Permits');

  const permitLinks = [
    { href: '/services/river-diversion-permit', label: tPermits('riverDiversion') },
    { href: '/services/water-intake-permit-sippa', label: tPermits('waterIntake') },
    { href: '/services/dam-construction-permit', label: tPermits('damConstruction') },
  ];
  const currentHref = '/services/dam-construction-permit';

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
      sec3Title: "3. Estimasi Durasi, Biaya & Rekam Jejak Konsultan Bendungan",
      sec3P1: "Sertifikasi desain di Komisi Keamanan Bendungan umumnya memerlukan 3-6 bulan dengan 2-3 kali putaran sidang evaluasi, sedangkan keseluruhan izin dari sertifikasi desain hingga impounding dapat berlangsung 12-24 bulan. Biaya jasa konsultan perijinan bendungan dipengaruhi oleh tinggi & tipe bendungan (urugan/beton), jumlah sampel bor & uji laboratorium geoteknik, kompleksitas Dam Break Analysis, dan kebutuhan fisik model test spillway.",
      sec3P2: "PT WECON berpengalaman dalam pendampingan Proyek Strategis Nasional Bendungan Semantok (Nganjuk) dan Bendungan Ladongi (Kolaka Timur) — menyusun dokumen sertifikasi KKB, mengawal sidang evaluasi, serta mengintegrasikan proses Izin Pengalihan Sungai dan izin pengambilan air di kawasan waduk dalam satu koordinasi kontrak.",
      faqTitle: "Pertanyaan Sering Diajukan (FAQ Bendungan)",
      q1: "Apakah bendungan kecil / embung juga wajib bersertifikat?",
      a1: "Sesuai aturan PUPR, bendungan dengan tinggi di atas 15 meter (atau tinggi 10-15 meter dengan kapasitas tampungan lebih dari 500.000 m³) wajib mengikuti prosedur sertifikasi penuh Komisi Keamanan Bendungan.",
      q2: "Berapa lama proses perizinan dan sertifikasi pembangunan bendungan?",
      a2: "Durasi bervariasi tergantung kompleksitas desain; umumnya sertifikasi desain (tahap KKB) membutuhkan 3-6 bulan, sedangkan keseluruhan proses dari sertifikasi desain hingga izin impounding dapat berjalan 12-24 bulan jika dokumen disusun oleh konsultan berpengalaman.",
      q3: "Apakah pekerjaan pengalihan alur sungai (cofferdam) bendungan memerlukan izin tersendiri?",
      a3: "Ya. Selain izin konstruksi bendungan, pekerjaan pengalihan alur sungai untuk cofferllwork wajib memiliki rekomendasi teknis Perijinan Pengalihan Alur Sungai dari BBWS/BWS sesuai Permen PUPR No. 4 Tahun 2024. PT WECON mengurus keduanya secara terintegrasi.",
      sidebarTitle: "Konsultasi Sertifikasi & Perizinan Bendungan",
      sidebarDesc: "Percayakan penyusunan sertifikasi desain bendungan & pendampingan sidang Komisi Keamanan Bendungan kepada tim pakar PT WECON.",
      ctaWa: "💬 Hubungi Tim Ahli Bendungan",
      ctaMail: "✉️ Kirim Email Diskusi DED",
      guideTitle: "Baca Panduan Lengkap",
      guideLink: "Syarat & 4 Tahapan Perijinan Pembangunan Bendungan (Permen PUPR 27/2015)"
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
      sec3Title: "3. Dam Consulting Duration, Cost & Proven Track Record",
      sec3P1: "Design certification at the Dam Safety Commission typically takes 3-6 months across 2-3 evaluation rounds, while the full pipeline from design certification to impounding ranges from 12-24 months. Consulting fees are driven by dam height and type (embankment/concrete), geotechnical boring and lab testing volume, Dam Break Analysis complexity, and the need for physical spillway model testing.",
      sec3P2: "PT WECON has guided National Strategic Projects Bendungan Semantok (Nganjuk) and Bendungan Ladongi (Kolaka Timur) — preparing KKB certification documents, defending evaluation hearings, and coordinating River Diversion and water-use permits within the reservoir area under a single contract.",
      faqTitle: "Frequently Asked Questions (Dam FAQ)",
      q1: "Are small dams or retention basins required to obtain certification?",
      a1: "Under PUPR rules, dams over 15 meters high (or 10-15 meters with capacity exceeding 500,000 m³) must undergo full Dam Safety Commission certification.",
      q2: "How long does the dam permitting & certification process take?",
      a2: "Duration varies with design complexity; design certification (KKB stage) generally takes 3-6 months, while the full pipeline from design certification through impounding clearance can take 12-24 months when documents are prepared by an experienced consultant.",
      q3: "Does dam river diversion (cofferdam) work require a separate permit?",
      a3: "Yes. Alongside the dam construction permit, river diversion works require a technical recommendation under the River Diversion Permit (Permen PUPR No. 4/2024) from the relevant BBWS/BWS. PT WECON manages both permits in an integrated process.",
      sidebarTitle: "Dam Certification & Permitting Consultation",
      sidebarDesc: "Entrust dam design certification and Dam Safety Commission defense to PT WECON expert dam engineers.",
      ctaWa: "💬 Contact Dam Engineer Team",
      ctaMail: "✉️ Email DED Project Discussion",
      guideTitle: "Read the Complete Guide",
      guideLink: "4 Stages of Dam Construction Permitting (PUPR Reg. 27/2015)"
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
      sec3Title: "3. 大坝咨询时长、费用与成功案例",
      sec3P1: "大坝安全委员会的设计认证通常需要 3-6 个月并经历 2-3 轮评审；从设计认证到初始蓄水的完整许可流程通常为 12-24 个月。咨询费用取决于坝高与坝型（土石坝/混凝土坝）、地质钻探与实验室试验数量、溃坝分析复杂度及溢洪道物理模型试验需求。",
      sec3P2: "PT WECON 曾参与印尼国家战略项目 Semantok 大坝（楠日克县）与 Ladongi 大坝（科拉卡蒂穆尔县）——编制 KKB 认证文件、主导评审答辩，并在单一合同框架下协调库区的河流改道许可与取水许可。",
      faqTitle: "常见问题解答 (大坝 FAQ)",
      q1: "小型大坝或水库是否也必须进行安全认证？",
      a1: "根据 PUPR 规定，坝高超过 15 米（或坝高 10-15 米且库容超过 50 万立方米）的大坝必须进行大坝安全委员会全套认证。",
      q2: "大坝建设许可与认证需要多长时间？",
      a2: "具体时长取决于设计复杂程度。设计认证（KKB 阶段）一般需要 3-6 个月；如果由经验丰富的顾问编制文件，从设计认证到初始蓄水许可的完整流程通常需要 12-24 个月。",
      q3: "大坝施工的河道改道（围堰）工程需要单独办理许可吗？",
      a3: "需要。除大坝施工许可外，河道改道工程还必须依据 PUPR 2024年第4号条例向 BBWS/BWS 取得河道改道技术推荐信。PT WECON 可一体化办理两项许可。",
      sidebarTitle: "大坝认证与许可办理咨询",
      sidebarDesc: "将大坝设计认证和大坝安全委员会评审交由 PT WECON 资深大坝工程师团队完成。",
      ctaWa: "💬 联系大坝专家团队",
      ctaMail: "✉️ 发送邮件讨论 DED 设计",
      guideTitle: "阅读完整指南",
      guideLink: "印尼大坝建设许可的 4 个阶段 (PUPR 2015年第27号条例)"
    }
  };

  const curr = content[locale as keyof typeof content] || content.en;

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://weconsultant.id';

  const crumbLabels: Record<string, { home: string; services: string }> = {
    en: { home: "Home", services: "Services" },
    id: { home: "Beranda", services: "Layanan" },
    zh: { home: "首页", services: "服务" },
  };
  const crumbs = crumbLabels[locale] || crumbLabels.en;

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": curr.h1,
      "url": `${siteUrl}/${locale}/services/dam-construction-permit`,
      "description": curr.heroDesc,
      "provider": { "@type": "ProfessionalService", "name": "PT. WECON", "url": siteUrl },
      "areaServed": { "@type": "Country", "name": "Indonesia" },
      "serviceType": "Perijinan Pembangunan Bendungan",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Perizinan Sumber Daya Air",
        "itemListElement": [
          { "@type": "Service", "name": tPermits("riverDiversion") },
          { "@type": "Service", "name": tPermits("waterIntake") },
          { "@type": "Service", "name": tPermits("damConstruction") }
        ]
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": crumbs.home, "item": `${siteUrl}/${locale}` },
        { "@type": "ListItem", "position": 2, "name": crumbs.services, "item": `${siteUrl}/${locale}/services` },
        { "@type": "ListItem", "position": 3, "name": curr.h1, "item": `${siteUrl}/${locale}/services/dam-construction-permit` }
      ]
    },
    {
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
        },
        {
          "@type": "Question",
          "name": curr.q3,
          "acceptedAnswer": { "@type": "Answer", "text": curr.a3 }
        }
      ]
    }
  ];

  return (
    <main className="flex flex-col min-h-screen bg-wecon-light text-wecon-dark">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
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

              <div>
                <h2 className="text-[28px] md:text-[36px] font-heading text-black font-medium mb-4">
                  {curr.sec3Title}
                </h2>
                <p className="mb-4">
                  {curr.sec3P1}
                </p>
                <p>
                  {curr.sec3P2}
                </p>
              </div>

              {/* FAQ Section */}
              <div className="bg-white p-8 rounded-2xl border border-black/10 space-y-6">
                <h2 className="text-2xl font-heading text-black font-bold mb-4">{curr.faqTitle}</h2>
                <div>
                  <h3 className="font-bold text-lg text-black mb-1">{curr.q1}</h3>
                  <p className="text-sm">{curr.a1}</p>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-black mb-1">{curr.q2}</h3>
                  <p className="text-sm">{curr.a2}</p>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-black mb-1">{curr.q3}</h3>
                  <p className="text-sm">{curr.a3}</p>
                </div>
              </div>

            {/* Related Blog Guide */}
              <div>
                <p className="font-bold text-lg text-black mb-2">{curr.guideTitle}:</p>
                <Link href="/blog/syarat-dan-tahapan-perijinan-pembangunan-bendungan" className="text-blue-700 hover:underline">
                  {curr.guideLink} →
                </Link>
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

              {/* Related Permitting Services */}
              <div className="bg-white p-8 rounded-2xl border border-black/10 mt-6">
                <h3 className="text-lg font-heading text-black font-bold mb-4">{tPermits('relatedTitle')}</h3>
                <ul className="space-y-3">
                  {permitLinks.map((p) =>
                    p.href === currentHref ? (
                      <li key={p.href} className="text-sm font-semibold text-blue-700">{p.label}</li>
                    ) : (
                      <li key={p.href} className="text-sm">
                        <Link href={p.href} className="text-black/70 hover:text-blue-700 transition-colors">{p.label} →</Link>
                      </li>
                    )
                  )}
                </ul>
                <div className="mt-6 pt-5 border-t border-black/10">
                  <Link href="/services" className="text-sm font-medium text-black hover:text-blue-700 transition-colors">
                    {tPermits('allServices')} →
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#151515] text-white py-16">
        <div className="container mx-auto px-6 md:px-12 max-w-[1440px]">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-10">
            <h2 className="text-3xl md:text-4xl font-heading">{t('cta_title')}</h2>
            <Link href="https://wa.me/6281234878660" className="inline-block bg-white text-black px-8 py-4 rounded-md font-mono font-bold text-xs uppercase tracking-widest hover:bg-gray-200 transition-colors">
              {t('contact_us')}
            </Link>
          </div>
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <span className="text-[#888888] text-[11px]">© PT. WECON</span>
            <ul className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 text-[12px] text-[#888888]">
              {permitLinks.map((p) => (
                <li key={p.href}>
                  <Link href={p.href} className="hover:text-white transition-colors">{p.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </footer>
    </main>
  );
}
