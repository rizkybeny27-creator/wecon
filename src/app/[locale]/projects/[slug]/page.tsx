import { getPostData, getAllPosts } from '@/lib/markdown';
import { Link } from '@/i18n/routing';
import { getTranslations } from "next-intl/server";
import { notFound } from 'next/navigation';
import Image from 'next/image';

import Navbar from '@/components/Navbar';

export async function generateMetadata({ params }: { params: Promise<{ slug: string, locale: string }> }) {
  const { slug, locale } = await params;
  try {
    const project = await getPostData('projects', slug, locale);
    return {
      title: `${project.title} - Projects - PT. WECON`,
      description: project.excerpt,
    };
  } catch (e) {
    return { title: 'Not Found' };
  }
}

export default async function ProjectDetail({ params }: { params: Promise<{ slug: string, locale: string }> }) {
  const { slug, locale } = await params;
  const t = await getTranslations('Footer');
  let project;
  try {
    project = await getPostData('projects', slug, locale);
  } catch (e) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#fafafa] font-sans antialiased">
      {/* Navbar Overlay */}
      <Navbar theme="dark" />

      {/* Hero Section */}
      <section className="relative w-full h-[80vh] min-h-[600px] flex flex-col justify-end">
        <div className="absolute inset-0 z-0">
          <Image 
            src={project.image || "/dam_sustainable.png"} 
            alt={project.title} 
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10"></div>
        </div>
        <div className="relative z-10 px-6 md:px-12 pb-16 md:pb-24 max-w-6xl">
          <h1 className="text-white text-5xl md:text-7xl font-semibold tracking-tight leading-[1.1] max-w-4xl">
            {project.title}
          </h1>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="px-6 md:px-12 py-20 max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* Left Sidebar: Property Details */}
          <div className="lg:col-span-4">
            <h3 className="text-lg font-medium text-black mb-6">Property details</h3>
            <div className="flex flex-col border-t border-black/10">
              
              <div className="py-4 border-b border-black/10 flex flex-col sm:flex-row justify-between gap-2">
                <span className="text-sm text-black/50 w-full sm:w-1/3">Location</span>
                <span className="text-sm font-medium text-black/90 w-full sm:w-2/3">{project.location || '-'}</span>
              </div>
              
              <div className="py-4 border-b border-black/10 flex flex-col sm:flex-row justify-between gap-2">
                <span className="text-sm text-black/50 w-full sm:w-1/3">Completed In</span>
                <span className="text-sm font-medium text-black/90 w-full sm:w-2/3">{project.completedIn || '-'}</span>
              </div>
              
              <div className="py-4 border-b border-black/10 flex flex-col sm:flex-row justify-between gap-2">
                <span className="text-sm text-black/50 w-full sm:w-1/3">Services</span>
                <span className="text-sm font-medium text-black/90 w-full sm:w-2/3">{project.services || '-'}</span>
              </div>
              
              <div className="py-4 border-b border-black/10 flex flex-col sm:flex-row justify-between gap-2">
                <span className="text-sm text-black/50 w-full sm:w-1/3">Client</span>
                <span className="text-sm font-medium text-black/90 w-full sm:w-2/3">{project.client || '-'}</span>
              </div>
              
              <div className="py-4 border-b border-black/10 flex flex-col sm:flex-row justify-between gap-2">
                <span className="text-sm text-black/50 w-full sm:w-1/3">Project Structure</span>
                <span className="text-sm font-medium text-black/90 w-full sm:w-2/3">{project.projectStructure || '-'}</span>
              </div>
              
              <div className="py-4 border-b border-black/10 flex flex-col sm:flex-row justify-between gap-2">
                <span className="text-sm text-black/50 w-full sm:w-1/3">Visibility Settings</span>
                <span className="text-sm font-medium text-black/90 w-full sm:w-2/3">{project.visibilitySettings || '-'}</span>
              </div>
              
              <div className="py-4 border-b border-black/10 flex flex-col sm:flex-row justify-between gap-2">
                <span className="text-sm text-black/50 w-full sm:w-1/3">Services Consultant</span>
                <span className="text-sm font-medium text-black/90 w-full sm:w-2/3">{project.servicesConsultant || '-'}</span>
              </div>
              
            </div>
          </div>

          {/* Right Main: Content & Quote */}
          <div className="lg:col-span-8">
            <div 
              className="markdown-content max-w-none text-black/80 leading-relaxed mb-16"
              dangerouslySetInnerHTML={{ __html: project.contentHtml || "" }}
            />

            {/* Blockquote */}
            {project.quote && (
              <div className="bg-[#f0f0f0]/50 rounded-2xl p-8 md:p-12 mt-12 border border-black/5">
                <p className="text-2xl md:text-3xl font-medium italic text-black leading-snug tracking-tight mb-8">
                  "{project.quote.text}"
                </p>
                <div className="flex items-center gap-4">
                  {project.quote.authorAvatar && (
                    <div className="w-[50px] h-[50px] rounded-full border-2 border-[#333] bg-[#222] overflow-hidden flex-shrink-0 relative">
                      <Image 
                        src={project.quote.authorAvatar} 
                        alt={project.quote.author} 
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                  <div>
                    <h4 className="font-medium text-black">{project.quote.author}</h4>
                    <p className="text-sm text-black/60">{project.quote.authorRole}</p>
                  </div>
                </div>
              </div>
            )}
          </div>
          
        </div>

        {/* Gallery Section */}
        {project.gallery && project.gallery.length > 0 && (
          <div className="mt-24">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {project.gallery.slice(0, 8).map((imgUrl: string, idx: number) => (
                  <div key={idx} className="relative aspect-[4/3] rounded-[16px] overflow-hidden border border-black/5 bg-gray-100">
                    <Image src={imgUrl} alt={`Gallery image ${idx + 1}`} fill className="object-cover hover:scale-105 transition-transform duration-500" />
                  </div>
              ))}
            </div>
          </div>
        )}

        {/* Related Projects */}
        <div className="mt-32 mb-16">
          <h2 className="text-3xl font-medium text-black mb-10 tracking-tight">You also might like</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <Link href="/projects/merangin" className="group relative block w-full aspect-[4/3] rounded-2xl overflow-hidden bg-gray-200">
              <Image src="/merangin.jpg" alt="Merangin Power Plant" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
              <div className="absolute top-6 right-6">
                <span className="bg-white/95 backdrop-blur text-black text-[10px] font-mono px-3 py-1.5 rounded uppercase tracking-widest font-bold">HYDROPOWER</span>
              </div>
              <div className="absolute bottom-8 left-8 right-8">
                <h3 className="text-white text-2xl font-medium mb-1 tracking-tight">Merangin Hydroelectric Power Plant 350 MW</h3>
                <p className="text-white/70 text-sm">Kerinci, Jambi, Indonesia</p>
              </div>
            </Link>

            <Link href="/projects/ladongi" className="group relative block w-full aspect-[4/3] rounded-2xl overflow-hidden bg-gray-200">
              <Image src="/ladongi.jpg" alt="Ladongi Dam" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
              <div className="absolute top-6 right-6">
                <span className="bg-white/95 backdrop-blur text-black text-[10px] font-mono px-3 py-1.5 rounded uppercase tracking-widest font-bold">DAM / WATER INFRASTRUCTURE</span>
              </div>
              <div className="absolute bottom-8 left-8 right-8">
                <h3 className="text-white text-2xl font-medium mb-1 tracking-tight">Ladongi Dam</h3>
                <p className="text-white/70 text-sm">East Kolaka, Southeast Sulawesi, Indonesia</p>
              </div>
            </Link>
            
          </div>
        </div>
      </section>

      {/* 13. Footer CTA & Footer */}
      <footer className="relative bg-[#151515] text-white">
         {/* CTA Section */}
         <div className="relative h-[550px] flex flex-col justify-center items-center text-center p-6 overflow-hidden">
            <Image src="/cta-bg.jpg" alt="Construction Footer Background" fill className="object-cover" />
            <div className="absolute inset-0 bg-black/30"></div>
            
            {/* Precise Fading Frosted Glass Effect mimicking the screenshot */}
            <div 
               className="absolute inset-x-0 bottom-0 h-[250px] backdrop-blur-[12px] bg-black/10"
               style={{ 
                  WebkitMaskImage: 'linear-gradient(to top, black 20%, transparent 100%)',
                  maskImage: 'linear-gradient(to top, black 20%, transparent 100%)'
               }}
            ></div>
            
            <div className="relative z-10 mt-8">
               <h2 className="text-[36px] md:text-[46px] lg:text-[54px] font-heading font-medium leading-[1.1] tracking-tight text-white mb-8">
                  {t('cta_title')}
               </h2>
               <Link href="https://wa.me/6281234878660" className="inline-flex items-center gap-2 bg-white text-black px-6 py-4 rounded-[6px] text-[10px] font-mono font-bold tracking-[0.15em] uppercase hover:bg-white/90 transition-colors">
                  {t('contact_us')} <span className="font-sans text-[14px] leading-none -mt-0.5">↗</span>
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
                     {t('partner_text')}
                  </p>
                  <Link href="https://wa.me/6281234878660" className="inline-flex items-center gap-2 bg-white text-black px-5 py-3.5 rounded-md text-[10px] font-bold tracking-widest uppercase hover:bg-white/90 transition-colors">
                     {t('contact_us')} <span className="font-sans text-[14px] leading-none -mt-0.5">↗</span>
                  </Link>
               </div>
               
               <div className="md:col-span-3 md:col-start-8 lg:col-span-2 lg:col-start-9">
                  <h4 className="text-[10px] font-mono tracking-[0.15em] uppercase text-[#ffffff] mb-6 font-semibold">{t('main_pages')}</h4>
                  <ul className="flex flex-col gap-4 text-[13px] text-[#888888]">
                     <li><Link href="/" className="hover:text-white transition-colors">{t('home')}</Link></li>
                     <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
                     <li><Link href="/projects" className="hover:text-white transition-colors">Projects</Link></li>
                     <li><Link href="/blog" className="hover:text-white transition-colors">Blogs</Link></li>
                     <li><Link href="https://wa.me/6281234878660" className="hover:text-white transition-colors">{t('contact')}</Link></li>
                  </ul>
               </div>
               
               <div className="md:col-span-4 md:col-start-11 lg:col-span-2 lg:col-start-11">
                  <h4 className="text-[10px] font-mono tracking-[0.15em] uppercase text-[#ffffff] mb-6 font-semibold">{t('contact')}</h4>
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
