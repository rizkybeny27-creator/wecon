import { Link } from '@/i18n/routing';
import Image from 'next/image';
import { getAllPosts } from '@/lib/markdown';
import Navbar from '@/components/Navbar';
import type { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;

  const META: Record<string, Metadata> = {
    en: {
      title: 'Water Engineering & Licensing Insights',
      description: 'Latest news, insights, and engineering updates on dam construction, river diversion & water intake permits (SIPPA) from PT. WECON.',
    },
    id: {
      title: 'Wawasan Perizinan & Rekayasa Sumber Daya Air',
      description: 'Panduan, berita, dan wawasan terbaru tentang perizinan pengalihan sungai, pengambilan air (SIPPA), pembangunan bendungan, dan rekayasa air dari PT. WECON.',
    },
    zh: {
      title: '印尼水利工程与许可资讯',
      description: '来自 PT WECON 的最新见解 — 大坝建设、河流改道、取水许可 (SIPPA) 及水资源工程指南与行业新闻。',
    },
  };

  return META[locale] || META.en;
}

export default async function BlogList({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const posts = getAllPosts('blog', locale);

  return (
    <main className="min-h-screen bg-wecon-light pt-32 pb-24 text-wecon-dark">
      <Navbar theme="light" />
      <div className="container mx-auto px-6 md:px-12 max-w-[1440px]">
        <div className="mb-16">
          <div className="inline-flex items-center gap-2.5 bg-[#e4e4e4] px-4 py-2 rounded-full mb-8">
            <div className="w-1.5 h-1.5 rounded-full bg-black/60"></div>
            <span className="text-[10px] font-mono tracking-widest uppercase text-black/70">Newsroom</span>
          </div>
          <h1 className="text-[44px] md:text-[56px] font-heading leading-[1.05] tracking-tight">Our Latest Insights</h1>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Link href={`/blog/${post.slug}`} key={post.slug} className="group">
              <div className="bg-white rounded-[24px] border border-black/5 overflow-hidden transition-shadow hover:shadow-lg">
                <div className="aspect-[3/2] relative overflow-hidden bg-gray-100">
                  <Image src={post.image || '/hydropower_turbine.png'} alt={post.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="p-8">
                  <p className="text-[12px] font-mono text-black/50 mb-3">{post.date}</p>
                  <h2 className="text-[22px] font-heading mb-4 tracking-tight group-hover:text-blue-600 transition-colors">{post.title}</h2>
                  <p className="text-[15px] text-black/60 leading-relaxed line-clamp-3">{post.excerpt}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
