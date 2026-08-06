import Link from 'next/link';
import { getAllPosts } from '@/lib/markdown';

export const metadata = {
  title: 'Projects - PT. WECON',
  description: 'Explore featured water resources engineering projects by PT. WECON.',
};

export default function ProjectsList() {
  const projects = getAllPosts('projects');

  return (
    <main className="min-h-screen bg-wecon-light pt-32 pb-24 text-wecon-dark">
      <div className="container mx-auto px-6 md:px-12 max-w-[1440px]">
        <div className="mb-16">
          <div className="inline-flex items-center gap-2.5 bg-[#e4e4e4] px-4 py-2 rounded-full mb-8">
            <div className="w-1.5 h-1.5 rounded-full bg-black/60"></div>
            <span className="text-[10px] font-mono tracking-widest uppercase text-black/70">Projects</span>
          </div>
          <h1 className="text-[44px] md:text-[56px] font-heading leading-[1.05] tracking-tight">Our Featured Projects</h1>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Link href={`/projects/${project.slug}`} key={project.slug} className="group">
              <div className="w-full aspect-[4/3] relative rounded-[24px] overflow-hidden">
                <img src={project.image || '/dam_sustainable.png'} alt={project.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-[1.03]" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent"></div>
                
                {project.tag && (
                  <div className="absolute top-8 right-8">
                    <span className="bg-white/95 backdrop-blur text-[#222] text-[10px] font-mono px-3 py-2 rounded uppercase tracking-widest font-medium">
                      {project.tag}
                    </span>
                  </div>
                )}
                
                <div className="absolute bottom-10 left-10 right-10 text-white">
                  <h3 className="text-[32px] font-heading mb-2 tracking-tight">{project.title}</h3>
                  {project.location && (
                    <p className="text-white/60 font-sans text-sm">{project.location}</p>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      
      {/* 10 Years Experience Section */}
      <div className="container mx-auto px-6 md:px-12 max-w-[1440px] mt-32 border-t border-black/10 pt-24">
        <div className="mb-16">
          <h2 className="text-[36px] md:text-[48px] font-heading leading-[1.1] tracking-tight">10 Years of Experience</h2>
        </div>
        
        <div className="flex flex-col border-t border-black/10">
          {[
            { category: "PERMIT & PREPARATION", desc: "Preparation and Operation Permit of Way Jepara and Way Rarem dam Lampung Province" },
            { category: "CERTIFICATION", desc: "Final Certification of Cibeet Dam Design Bogor Regency West Java Province" },
            { category: "REVIEW DESIGN", desc: "Review Design of Cijurey Dam Bogor Regency West Java Province" },
            { category: "CERTIFICATION & STUDY", desc: "Certification and Seismic Study of Wairoro Dam North Maluku Province" },
            { category: "DETAILED DESIGN", desc: "Detailed Design of Cidanau Dam Part 2 West Java Province" },
            { category: "CERTIFICATION & STUDY", desc: "Design Certification and Advance Geological Study Surumana Dam, Donggala Regency Central Sulawesi Province" },
            { category: "DETAILED DESIGN", desc: "Detailed Design of Cidanau Dam Part 1 West Java Province" },
            { category: "DETAILED DESIGN", desc: "Detailed Engineering Design of Ngibio Dam North Maluku Province" },
            { category: "ASSESSMENT & PREPARATION", desc: "Performance assessment and Preparation Dam/Reservoir/Other Reservoir Riau Island" },
            { category: "POTENTIAL STUDY", desc: "Potensial Study of Dam in West Sumatera" },
            { category: "FEASIBILITY STUDY", desc: "Feasibility Study Tohaki Reservoir Construction North Maluku Province" },
            { category: "GEOLOGICAL STUDY", desc: "Advance Geological Study of Wuno Dam Sigi Regency Central Sulawesi Province" },
            { category: "REVIEW DESIGN", desc: "Review of Sukodono Reservoir Detailed Design in Gresik Regency Part II East Java Province" },
            { category: "DETAILED DESIGN", desc: "Detailed Engineering Design PLTM Mekarwangi (2x4,000 KW) Garut Regency East Java Province" },
            { category: "DETAILED DESIGN", desc: "Detailed Design of Wuno Dam In Sigi Regency Central Sulawesi Province" }
          ].map((exp, idx) => (
            <div key={idx} className="grid grid-cols-1 md:grid-cols-12 py-8 md:py-10 border-b border-black/10 items-start gap-4 md:gap-12 hover:bg-black/[0.02] transition-colors px-4 -mx-4 md:px-8 md:-mx-8">
              <div className="md:col-span-4 lg:col-span-3">
                <span className="font-mono text-[11px] md:text-[12px] font-bold tracking-[0.15em] uppercase text-black">{exp.category}</span>
              </div>
              <div className="md:col-span-8 lg:col-span-9">
                <p className="font-sans text-[16px] md:text-[18px] text-black/70 leading-relaxed max-w-4xl">{exp.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
