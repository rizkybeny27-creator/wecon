import { getTranslations } from "next-intl/server";
import Navbar from "@/components/Navbar";
import { Link } from "@/i18n/routing";
import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://weconsultant.id';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;

  let title = "Water Licensing & Permitting Services in Indonesia";
  let description = "PT WECON permits & consultancy services for river diversion, surface water intake (SIPPA), and dam construction in Indonesia. Regulatory support per PUPR regulations.";

  if (locale === 'id') {
    title = "Jasa Konsultan Perizinan SDA: Pengalihan Sungai, SIPPA & Bendungan";
    description = "Layanan konsultan Perijinan Pengalihan Sungai (Permen PUPR 4/2024), Perijinan Pengambilan Sungai & SIPPA, dan Perijinan Pembangunan Bendungan (Permen PUPR 27/2015). Pendampingan rekomtek BWS/BBWS.";
  } else if (locale === 'zh') {
    title = "印尼水资源许可与合规咨询服务";
    description = "PT WECON 提供河流改道、地表水取水 (SIPPA) 和大坝建设许可的一站式咨询与合规服务，依据 PUPR 法规提供 BWS/BBWS 推荐信申请协助。";
  }

  return {
    title,
    description,
    keywords: [
      "Konsultan Perizinan Sumber Daya Air",
      "Perijinan Pengalihan Sungai",
      "Perijinan Pengambilan Sungai",
      "SIPPA PUPR",
      "Perijinan Pembangunan Bendungan",
      "Konsultan Izin Air Indonesia",
      "PT WECON"
    ],
    alternates: {
      canonical: `${siteUrl}/${locale}/services`,
      languages: {
        en: `${siteUrl}/en/services`,
        id: `${siteUrl}/id/services`,
        zh: `${siteUrl}/zh/services`,
      },
    },
    openGraph: {
      title,
      description,
      url: `${siteUrl}/${locale}/services`,
      siteName: 'PT. WECON',
      type: 'website',
    },
  };
}

export default async function ServicesHubPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations('Footer');

  const content = {
    id: {
      badge: "LAYANAN KONSULTAN PERIZINAN SDA",
      h1: "Jasa Konsultan Perizinan Sumber Daya Air & Pendampingan Regulasi PUPR",
      heroDesc: "PT WECON membantu pengembang bendungan, industri, PLTA, jembatan, dan infrastruktur keairan dalam menyusun kajian teknis serta mengurus perizinan sumber daya air di Kementerian PUPR — dari rekomendasi teknis BWS/BBWS hingga sertifikasi desain dan izin operasi.",
      servicesTitle: "Layanan Perizinan Unggulan Kami",
      servicesDesc: "Tiga klaster layanan pillar yang mengikuti regulasi terbaru Kementerian PUPR, masing-masing didukung artikel panduan teknis dan pengalaman lapangan 30+ tahun.",
      p1Title: "Perijinan Pengalihan Sungai",
      p1Desc: "Izin & persetujuan pengalihan alur sungai untuk kegiatan usaha berbasis Permen PUPR No. 4/2024 — kajian hidrologi, pemodelan HEC-RAS, desain cofferdam, dan rekomtek BWS/BBWS.",
      p1_cta: "Syarat & Tahapan Pengalihan Sungai",
      p2Title: "Perijinan Pengambilan Sungai & SIPPA",
      p2Desc: "Izin Pengusahaan Air Permukaan dan pendampingan SIPPA / SIP SDA untuk industri, pabrik, pertambangan, dan PLTA — neraca air, desain intake, hingga sidang rekomtek BWS.",
      p2_cta: "Cara Mengurus SIPPA & Izin Air Permukaan",
      p3Title: "Perijinan Pembangunan Bendungan",
      p3Desc: "Sertifikasi Desain, Izin Konstruksi, Izin Impounding (pengisian awal waduk), dan Izin Operasi Bendungan sesuai Permen PUPR No. 27/2015 dengan sidang Komisi Keamanan Bendungan (KKB).",
      p3_cta: "Tahapan Izin Pembangunan Bendungan",
      blogsTitle: "Panduan Teknis Pendukung",
      blogsDesc: "Baca artikel panduan lengkap yang menjabarkan dasar hukum, persyaratan dokumen, dan alur prosedur di tiap jenis izin.",
      blog1: "Panduan Perijinan Pengalihan Air Sungai (Permen PUPR 4/2024)",
      blog2: "Panduan Pengambilan Sungai via SIPPA PUPR",
      blog3: "Syarat & 4 Tahapan Perijinan Pembangunan Bendungan",
      ctaTitle: "Konsultasikan Kebutuhan Perizinan SDA Anda",
      ctaDesc: "Tim insinyur keairan PT WECON siap mendampingi persiapan dokumen teknis dan presentasi rekomendasi teknis di Balai Wilayah Sungai.",
      ctaWa: "💬 Konsultasi via WhatsApp",
      ctaMail: "✉️ Kirim Email Proposal"
    },
    en: {
      badge: "WATER RESOURCES PERMITTING SERVICES",
      h1: "Water Resources Licensing & Regulatory Permitting Consultancy",
      heroDesc: "PT WECON assists dam developers, industry, hydropower, and water infrastructure projects in preparing technical studies and securing Ministry of PUPR approvals — from BWS/BBWS technical recommendations to design certification and operation permits.",
      servicesTitle: "Our Core Permitting Services",
      servicesDesc: "Three pillar service clusters aligned with the latest Ministry of PUPR regulations, each supported by technical guides and 30+ years of field experience.",
      p1Title: "River Diversion Permit",
      p1Desc: "River diversion licensing for business activities under PUPR Regulation No. 4/2024 — hydrology studies, HEC-RAS modeling, cofferdam design, and BWS/BBWS recommendations.",
      p1_cta: "River Diversion Requirements & Steps",
      p2Title: "Water Intake Permit & SIPPA",
      p2Desc: "Surface Water Usage Permit (SIPPA / SIP SDA) assistance for industry, plants, mining, and hydropower — water balance study, intake design, and BWS recommendation hearings.",
      p2_cta: "How to Apply for SIPPA & Water Intake Permit",
      p3Title: "Dam Construction Permit",
      p3Desc: "Design Certification, Construction Permit, Impounding Permit, and Dam Operation Permit under PUPR Regulation No. 27/2015 with the Dam Safety Commission (KKB) hearings.",
      p3_cta: "Dam Permitting Stages & Requirements",
      blogsTitle: "Supporting Technical Guides",
      blogsDesc: "Read our complete guides covering the legal basis, required documents, and procedures for each type of permit.",
      blog1: "Complete Guide to River Diversion Permitting (PUPR Reg. 4/2024)",
      blog2: "Guide to Surface Water Intake Permitting & SIPPA PUPR",
      blog3: "4 Stages of Dam Construction Permitting (PUPR Reg. 27/2015)",
      ctaTitle: "Discuss Your Water Permitting Needs",
      ctaDesc: "Our certified water engineers are ready to help you prepare technical documents and defend the technical recommendation before the River Basin Authority.",
      ctaWa: "💬 Consult via WhatsApp",
      ctaMail: "✉️ Request a Proposal"
    },
    zh: {
      badge: "印尼水资源许可咨询服务",
      h1: "水资源许可与 PUPR 法规合规咨询服务",
      heroDesc: "PT WECON 协助大坝开发商、工业、水电及水利基础设施项目准备技术研究并取得公共工程部 (PUPR) 的审批 — 从流域管理机构 (BWS/BBWS) 技术推荐信到设计认证和运行许可。",
      servicesTitle: "核心许可服务",
      servicesDesc: "三个支柱性服务集群严格对应 PUPR 部最新法规，并由 30 余年现场经验和配套技术指南提供支撑。",
      p1Title: "河流改道许可",
      p1Desc: "依据 PUPR 2024年第4号条例为企业活动办理河流改道许可 — 水文研究、HEC-RAS 建模、围堰设计和 BWS/BBWS 推荐信。",
      p1_cta: "河流改道许可条件与流程",
      p2Title: "取水许可与 SIPPA",
      p2Desc: "为工业、工厂、矿业和水电站办理地表水取水许可证 (SIPPA / SIP SDA) — 水资源平衡研究、取水结构设计及 BWS 技术评审答辩。",
      p2_cta: "如何办理 SIPPA 与取水许可",
      p3Title: "大坝建设许可",
      p3Desc: "依据 PUPR 2015年第27号条例办理设计安全认证、施工许可、蓄水许可和大坝运行许可，并配合大坝安全委员会 (KKB) 评审。",
      p3_cta: "大坝许可阶段与条件",
      blogsTitle: "配套技术指南",
      blogsDesc: "查阅我们关于各类许可的法律依据、文件要求和办理流程的完整指南。",
      blog1: "印尼河流改道许可全指南 (PUPR 2024年第4号条例)",
      blog2: "印尼河流取水许可与 PUPR SIPPA 许可证办理指南",
      blog3: "印尼大坝建设许可的 4 个阶段 (PUPR 2015年第27号条例)",
      ctaTitle: "咨询您的印尼水资源许可需求",
      ctaDesc: "我们经认证的水利工程师团队随时为您准备技术文件，并在流域管理机构进行技术推荐信答辩。",
      ctaWa: "💬 WhatsApp 咨询",
      ctaMail: "✉️ 索取方案"
    }
  };

  const curr = content[locale as keyof typeof content] || content.en;

  const servicePages = [
    {
      href: "/services/river-diversion-permit" as const,
      title: curr.p1Title,
      desc: curr.p1Desc,
      cta: curr.p1_cta,
      decor: "↗"
    },
    {
      href: "/services/water-intake-permit-sippa" as const,
      title: curr.p2Title,
      desc: curr.p2Desc,
      cta: curr.p2_cta,
      decor: "↗"
    },
    {
      href: "/services/dam-construction-permit" as const,
      title: curr.p3Title,
      desc: curr.p3Desc,
      cta: curr.p3_cta,
      decor: "↗"
    }
  ];

  const blogLinks = [
    { href: "/blog/panduan-perijinan-pengalihan-air-sungai" as const, title: curr.blog1 },
    { href: "/blog/panduan-perijinan-pengambilan-air-sungai-sippa" as const, title: curr.blog2 },
    { href: "/blog/syarat-dan-tahapan-perijinan-pembangunan-bendungan" as const, title: curr.blog3 }
  ];

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
      "url": `${siteUrl}/${locale}/services`,
      "description": curr.heroDesc,
      "provider": { "@type": "ProfessionalService", "name": "PT. WECON", "url": siteUrl },
      "areaServed": { "@type": "Country", "name": "Indonesia" },
      "serviceType": "Perizinan Sumber Daya Air",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Perizinan Sumber Daya Air",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": { "@type": "Service", "name": curr.p1Title, "url": `${siteUrl}/${locale}/services/river-diversion-permit` }
          },
          {
            "@type": "Offer",
            "itemOffered": { "@type": "Service", "name": curr.p2Title, "url": `${siteUrl}/${locale}/services/water-intake-permit-sippa` }
          },
          {
            "@type": "Offer",
            "itemOffered": { "@type": "Service", "name": curr.p3Title, "url": `${siteUrl}/${locale}/services/dam-construction-permit` }
          }
        ]
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": crumbs.home, "item": `${siteUrl}/${locale}` },
        { "@type": "ListItem", "position": 2, "name": curr.h1, "item": `${siteUrl}/${locale}/services` }
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

      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-wecon-dark text-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20 bg-gradient-to-br from-blue-950 via-wecon-dark to-black"></div>
        <div className="container mx-auto px-6 md:px-12 max-w-[1440px] relative z-10">
          <div className="inline-flex items-center gap-2.5 bg-blue-900/60 border border-blue-400/30 px-4 py-2 rounded-full mb-6">
            <span className="text-[10px] font-mono tracking-widest uppercase text-blue-300">{curr.badge}</span>
          </div>
          <h1 className="text-[36px] md:text-[52px] font-heading font-medium leading-[1.1] tracking-tight max-w-[1100px] mb-6">
            {curr.h1}
          </h1>
          <p className="text-white/80 text-lg md:text-xl max-w-[900px] leading-relaxed">{curr.heroDesc}</p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6 md:px-12 max-w-[1440px]">
          <div className="mb-14 max-w-[760px]">
            <h2 className="text-[32px] md:text-[44px] font-heading tracking-tight text-[#222] mb-4">{curr.servicesTitle}</h2>
            <p className="text-black/60 leading-relaxed text-base md:text-lg">{curr.servicesDesc}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {servicePages.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="group bg-white rounded-[24px] border border-black/5 p-8 flex flex-col transition-shadow hover:shadow-lg"
              >
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-[22px] md:text-[24px] font-heading tracking-tight text-[#222] group-hover:text-blue-600 transition-colors">{s.title}</h3>
                  <span className="text-2xl text-black/30 group-hover:text-blue-600 transition-colors">{s.decor}</span>
                </div>
                <p className="text-[15px] text-black/60 leading-relaxed flex-grow">{s.desc}</p>
                <span className="mt-8 inline-flex items-center gap-2 text-[11px] font-mono font-bold tracking-widest uppercase text-blue-700 group-hover:text-blue-600">
                  {s.cta}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Supporting Guides */}
      <section className="pb-20 md:pb-28">
        <div className="container mx-auto px-6 md:px-12 max-w-[1440px]">
          <div className="mb-10">
            <h2 className="text-[28px] md:text-[36px] font-heading tracking-tight text-[#222] mb-3">{curr.blogsTitle}</h2>
            <p className="text-black/60 leading-relaxed">{curr.blogsDesc}</p>
          </div>
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {blogLinks.map((b) => (
              <li key={b.href}>
                <Link
                  href={b.href}
                  className="group block bg-white rounded-2xl border border-black/5 p-6 h-full hover:shadow-md transition-shadow"
                >
                  <span className="block text-[15px] font-medium text-black/80 group-hover:text-blue-600 transition-colors">{b.title}</span>
                  <span className="mt-4 block text-[11px] font-mono tracking-widest uppercase text-black/40">Read Guide ↗</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-20 md:pb-28">
        <div className="container mx-auto px-6 md:px-12 max-w-[1440px]">
          <div className="bg-wecon-dark text-white rounded-[24px] p-10 md:p-16 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div className="max-w-[720px]">
              <h2 className="text-[28px] md:text-[36px] font-heading tracking-tight mb-4">{curr.ctaTitle}</h2>
              <p className="text-white/70 leading-relaxed">{curr.ctaDesc}</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 shrink-0">
              <Link href="https://wa.me/6281234878660" className="inline-flex items-center justify-center gap-2 bg-green-600 text-white px-6 py-4 rounded-md text-[11px] font-mono font-bold uppercase tracking-widest hover:bg-green-700 transition-colors">
                {curr.ctaWa}
              </Link>
              <Link href="mailto:hello@wecon.com" className="inline-flex items-center justify-center gap-2 bg-white text-black px-6 py-4 rounded-md text-[11px] font-mono font-bold uppercase tracking-widest hover:bg-gray-200 transition-colors">
                {curr.ctaMail}
              </Link>
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