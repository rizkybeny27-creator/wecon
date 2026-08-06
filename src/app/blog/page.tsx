import Link from 'next/link';
import Image from 'next/image';
import { getAllPosts } from '@/lib/markdown';
import Navbar from '@/components/Navbar';

export const metadata = {
  title: 'Newsroom - PT. WECON',
  description: 'Latest news, insights, and engineering updates from PT. WECON.',
};

export default function BlogList() {
  const posts = getAllPosts('blog');

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
