import { getPostData, getAllPosts } from '@/lib/markdown';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Navbar from '@/components/Navbar';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  try {
    const post = await getPostData('blog', slug);
    return {
      title: `${post.title} - PT. WECON`,
      description: post.excerpt,
    };
  } catch (e) {
    return { title: 'Not Found' };
  }
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  let post;
  try {
    post = await getPostData('blog', slug);
  } catch (e) {
    notFound();
  }
  
  const relatedPosts = getAllPosts('blog').filter(p => p.slug !== slug).slice(0, 3);

  return (
    <main className="min-h-screen bg-white font-sans antialiased text-black">
      <Navbar theme="light" />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 md:px-12 max-w-[1440px] mx-auto">
        <h1 className="text-[36px] md:text-[52px] lg:text-[64px] font-heading font-medium leading-[1.05] tracking-tight max-w-[850px] mb-8">
          {post.title}
        </h1>
        {post.excerpt && (
          <p className="text-black/60 text-[16px] md:text-[18px] max-w-[700px] leading-relaxed mb-16">
            {post.excerpt}
          </p>
        )}
        
        {post.image && (
          <div className="w-full aspect-[21/9] bg-gray-100 rounded-none overflow-hidden relative">
            <Image src={post.image} alt={post.title} fill className="object-cover" priority />
          </div>
        )}
      </section>

      {/* Content Section */}
      <section className="px-6 md:px-12 max-w-[1440px] mx-auto pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Meta */}
          <div className="lg:col-span-3">
             <div className="text-[12px] uppercase tracking-wider font-mono text-black/40 mb-1">Written by</div>
             <div className="text-[14px] font-medium">{post.author || 'Wecon Team'}</div>
          </div>
          
          {/* Right Column: Markdown Content */}
          <div className="lg:col-span-8">
            <div 
              className="markdown-content max-w-none text-black/70 leading-[1.8] text-justify"
              dangerouslySetInnerHTML={{ __html: post.contentHtml || "" }}
            />
          </div>
        </div>
      </section>

      {/* You also might like */}
      <section className="px-6 md:px-12 max-w-[1440px] mx-auto pb-32">
        <h2 className="text-3xl md:text-4xl font-heading font-medium tracking-tight mb-12">You also might like</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {relatedPosts.map((related) => (
             <Link key={related.slug} href={`/blog/${related.slug}`} className="block border border-black/10 rounded-[20px] overflow-hidden hover:shadow-lg transition-all group flex flex-col bg-white">
                <div className="aspect-[3/2] w-full bg-gray-100 relative overflow-hidden">
                   <Image src={related.image || '/hydropower_turbine.png'} alt={related.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="p-6 md:p-8 flex flex-col justify-between flex-grow">
                   <div>
                       <div className="text-[10px] font-mono uppercase tracking-widest text-black/50 mb-4">
                          {related.category || 'Blog'}
                       </div>
                       <h3 className="text-[20px] font-heading font-medium tracking-tight leading-snug mb-6 group-hover:text-blue-600 transition-colors">
                          {related.title}
                       </h3>
                   </div>
                   <div className="flex justify-between items-end text-[12px] font-medium text-black/50 border-t border-black/5 pt-5 mt-auto">
                       <div>By {related.author || 'Wecon Team'}</div>
                       <div>{related.date}</div>
                   </div>
                </div>
             </Link>
          ))}
        </div>
      </section>

      {/* 13. Footer CTA & Footer */}
      <footer className="relative bg-[#151515] text-white">
         {/* CTA Section */}
         <div className="relative h-[550px] flex flex-col justify-center items-center text-center p-6 overflow-hidden">
            <Image src="/cta-bg.jpg" alt="Construction Footer Background" fill className="object-cover" />
            <div className="absolute inset-0 bg-black/30"></div>
            
            <div 
               className="absolute inset-x-0 bottom-0 h-[250px] backdrop-blur-[12px] bg-black/10"
               style={{ 
                  WebkitMaskImage: 'linear-gradient(to top, black 20%, transparent 100%)',
                  maskImage: 'linear-gradient(to top, black 20%, transparent 100%)'
               }}
            ></div>
            
            <div className="relative z-10 mt-8">
               <h2 className="text-[36px] md:text-[46px] lg:text-[54px] font-heading font-medium leading-[1.1] tracking-tight text-white mb-8">
                  Explore how Wecon can bring your<br className="hidden md:block" /> next development to life.
               </h2>
               <Link href="#contact" className="inline-flex items-center gap-2 bg-white text-black px-6 py-4 rounded-[6px] text-[10px] font-mono font-bold tracking-[0.15em] uppercase hover:bg-white/90 transition-colors">
                  CONTACT US <span className="font-sans text-[14px] leading-none -mt-0.5">↗</span>
               </Link>
            </div>
         </div>
         
         {/* Footer Section */}
         <div className="bg-[#151515] pb-24 pt-20 px-8 md:px-12">
            <div className="container mx-auto max-w-[1440px] grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-6">
               <div className="md:col-span-5 lg:col-span-4">
                  <div className="mb-6">
                     <Image src="/logo-white.png" alt="PT Wecon" width={110} height={22} className="h-[22px] w-auto object-contain" />
                  </div>
                  <p className="text-[#888888] text-[13px] leading-[1.6] max-w-[280px] mb-8">
                     Partner with us to turn strategic ambition into measurable business results.
                  </p>
                  <Link href="#contact" className="inline-flex items-center gap-2 bg-white text-black px-5 py-3.5 rounded-md text-[10px] font-bold tracking-widest uppercase hover:bg-white/90 transition-colors">
                     CONTACT US <span className="font-sans text-[14px] leading-none -mt-0.5">↗</span>
                  </Link>
               </div>
               
               <div className="md:col-span-3 md:col-start-8 lg:col-span-2 lg:col-start-9">
                  <h4 className="text-[10px] font-mono tracking-[0.15em] uppercase text-[#ffffff] mb-6 font-semibold">MAIN PAGES</h4>
                  <ul className="flex flex-col gap-4 text-[13px] text-[#888888]">
                     <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                     <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
                     <li><Link href="/projects" className="hover:text-white transition-colors">Projects</Link></li>
                     <li><Link href="/blog" className="hover:text-white transition-colors">Blogs</Link></li>
                     <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                  </ul>
               </div>
               
               <div className="md:col-span-4 md:col-start-11 lg:col-span-2 lg:col-start-11">
                  <h4 className="text-[10px] font-mono tracking-[0.15em] uppercase text-[#ffffff] mb-6 font-semibold">CONTACT</h4>
                  <ul className="flex flex-col gap-4 text-[13px] text-[#888888]">
                     <li><a href="mailto:hello@wecon.com" className="hover:text-white transition-colors">hello@wecon.com</a></li>
                     <li><a href="tel:+6281234878660" className="hover:text-white transition-colors">+62 812-3487-8660</a></li>
                     <li className="leading-[1.6] max-w-[180px]">Sidoarjo, East Java - Indonesia</li>
                  </ul>
               </div>
            </div>
         </div>
      </footer>
    </main>
  );
}
