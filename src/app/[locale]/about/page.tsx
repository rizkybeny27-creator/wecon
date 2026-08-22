import { getTranslations } from "next-intl/server";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import type { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  
  let title = "About PT. WECON - Water Engineering Consultant";
  let description = "Profile of PT WECON, Indonesia's trusted water engineering consultant since 1973. Specializing in dam certification, river diversion permitting, and hydropower engineering.";
  
  if (locale === 'id') {
    title = "Tentang PT. WECON - Konsultan Rekayasa Sumber Daya Air";
    description = "Profil PT WECON, konsultan teknik pengairan dan sumber daya air terpercaya di Indonesia sejak 1973. Pengalaman 33+ tahun dalam sertifikasi bendungan dan perizinan pengalihan sungai.";
  } else if (locale === 'zh') {
    title = "关于 PT. WECON - 印尼水利工程顾问公司";
    description = "PT WECON 公司简介，自1973年以来印尼值得信赖的水利工程顾问公司。拥有超过33年的大坝认证、河流改道许可和水电工程经验。";
  }

  return {
    title: title,
    description: description,
    alternates: {
      canonical: `https://weconsultant.id/${locale}/about`,
      languages: {
        'en': 'https://weconsultant.id/en/about',
        'id': 'https://weconsultant.id/id/about',
        'zh': 'https://weconsultant.id/zh/about',
      },
    },
  };
}

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const tHome = await getTranslations('HomePage');
  const t = await getTranslations('Footer');

  const content = {
    id: {
      badge: "TENTANG PT WECON",
      title: "Konsultan Teknik Sumber Daya Air Terkemuka di Indonesia",
      subtitle: "Berpengalaman lebih dari 33 tahun mendampingi instansi pemerintah, BUMN, dan pengembang swasta dalam studi kelayakan, perizinan SDA (Permen PUPR), sertifikasi keamanan bendungan, hingga pengawasan konstruksi.",
      heading2: "Rekam Jejak & Dedikasi Teknik Bersertifikat",
      p2: "Sebagai mitra strategis di sektor keairan, PT. WECON menyediakan pendampingan teknis dan legalitas menyeluruh termasuk Perijinan Pengalihan Sungai (Permen PUPR No. 4/2024), Perijinan Pengambilan Air Permukaan (SIPPA / SIP SDA), serta Sertifikasi Keamanan dan Desain Bendungan (Komisi Keamanan Bendungan).",
      semantokTitle: "Bendungan Semantok — Nganjuk",
      semantokDesc: "Salah satu bendungan terpanjang di Asia Tenggara diresmikan oleh Presiden RI.",
      stat1Title: "Pengalaman Industri",
      stat1Desc: "Telah melayani berbagai proyek keairan nasional sejak 1973.",
      stat2Title: "Proyek Bendungan & PLTA",
      stat2Desc: "Perencanaan, studi hidrologi, dan supervisi lapangan di 7 provinsi.",
      stat3Title: "Kepatuhan Regulasi PUPR",
      stat3Desc: "Memenuhi standar Komisi Keamanan Bendungan & SIP SDA Kementerian PUPR."
    },
    en: {
      badge: "ABOUT PT WECON",
      title: "Indonesia's Leading Water Resources Engineering Consultant",
      subtitle: "With over 33 years of experience assisting government agencies, state enterprises, and private developers in water resources engineering, licensing, dam safety certification, and construction supervision.",
      heading2: "Track Record & Technical Excellence",
      p2: "As a strategic partner in the water sector, PT. WECON provides full technical support including River Diversion Permitting (PUPR Reg. No. 4/2024), Surface Water Intake Permits (SIPPA), and Dam Safety & Design Certification (Dam Safety Commission).",
      semantokTitle: "Semantok Dam — Nganjuk",
      semantokDesc: "One of the longest dams in Southeast Asia inaugurated by the President of Indonesia.",
      stat1Title: "Industry Experience",
      stat1Desc: "Serving national water infrastructure projects since 1973.",
      stat2Title: "Dam & Hydropower Projects",
      stat2Desc: "Planning, hydrological modeling, and construction supervision across 7 provinces.",
      stat3Title: "PUPR Compliance",
      stat3Desc: "Fully compliant with Ministry of PUPR & Dam Safety Commission standards."
    },
    zh: {
      badge: "关于 PT WECON",
      title: "印度尼西亚领先的水资源工程顾问公司",
      subtitle: "拥有超过33年的经验，协助政府机构、国有企业和私人开发商提供水资源工程、许可证办理、大坝安全认证和施工监理。",
      heading2: "出色的业绩记录与专业工程品质",
      p2: "作为水利领域的战略合作伙伴，PT. WECON 提供全面的技术支持，包括河流改道许可（PUPR 部长条例 2024年第4号）、地表水取水许可 (SIPPA) 以及大坝安全与设计认证（大坝安全委员会）。",
      semantokTitle: "Semantok 大坝 — 恩甘朱克",
      semantokDesc: "东南亚最长的大坝之一，由印尼总统亲自主持揭幕。",
      stat1Title: "行业经验",
      stat1Desc: "自1973年以来服务于国家水利基础设施项目。",
      stat2Title: "大坝与水电项目",
      stat2Desc: "在7个省份开展规划、水文建模和现场施工监理。",
      stat3Title: "PUPR 法规合规",
      stat3Desc: "完全符合公共工程与公共住房部 (PUPR) 及大坝安全委员会的标准。"
    }
  };

  const curr = content[locale as keyof typeof content] || content.en;

  return (
    <main className="flex flex-col min-h-screen bg-wecon-light text-wecon-dark">
      <Navbar />

      {/* Hero Header */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-wecon-dark text-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-30">
          <Image src="/hero-bg.jpg" alt="PT Wecon Heritage" fill className="object-cover" priority />
        </div>
        <div className="container mx-auto px-6 md:px-12 max-w-[1440px] relative z-10">
          <div className="inline-flex items-center gap-2.5 bg-[#252525] px-4 py-2 rounded-full mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
            <span className="text-[10px] font-mono tracking-widest uppercase text-gray-300">
              {curr.badge}
            </span>
          </div>
          <h1 className="text-[40px] md:text-[64px] font-heading font-medium leading-[1.1] tracking-tight max-w-[900px] mb-6">
            {curr.title}
          </h1>
          <p className="text-white/70 text-lg md:text-xl max-w-[750px] leading-relaxed">
            {curr.subtitle}
          </p>
        </div>
      </section>

      {/* Main Profile Story */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-6 md:px-12 max-w-[1440px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            <div className="lg:col-span-6 space-y-6 text-lg text-black/80 leading-relaxed">
              <h2 className="text-[32px] md:text-[42px] font-heading leading-tight text-black">
                {curr.heading2}
              </h2>
              <p>
                {tHome('About.text')}
              </p>
              <p>
                {curr.p2}
              </p>
            </div>
            
            <div className="lg:col-span-6">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-black/10">
                <Image src="/semantok.jpg" alt="Semantok Dam Project" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="bg-blue-600 text-white text-[9px] font-mono font-bold px-3 py-1 rounded uppercase tracking-wider mb-2 inline-block">Proyek Strategis Nasional</span>
                  <h3 className="text-xl font-heading font-medium">{curr.semantokTitle}</h3>
                  <p className="text-sm text-white/80">{curr.semantokDesc}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Credentials Grid */}
      <section className="bg-white py-20 border-y border-black/5">
        <div className="container mx-auto px-6 md:px-12 max-w-[1440px]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-wecon-light border border-black/5">
              <div className="text-4xl font-heading font-bold text-black mb-3">33+ {locale === 'zh' ? "年" : "Years"}</div>
              <h3 className="text-lg font-bold mb-2">{curr.stat1Title}</h3>
              <p className="text-sm text-black/70">{curr.stat1Desc}</p>
            </div>
            <div className="p-8 rounded-2xl bg-wecon-light border border-black/5">
              <div className="text-4xl font-heading font-bold text-black mb-3">50+</div>
              <h3 className="text-lg font-bold">{curr.stat2Title}</h3>
              <p className="text-sm text-black/70 mt-2">{curr.stat2Desc}</p>
            </div>
            <div className="p-8 rounded-2xl bg-wecon-light border border-black/5">
              <div className="text-4xl font-heading font-bold text-black mb-3">100%</div>
              <h3 className="text-lg font-bold">{curr.stat3Title}</h3>
              <p className="text-sm text-black/70 mt-2">{curr.stat3Desc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Footer */}
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
