import Link from "next/link";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import ScrollRevealText from "@/components/ScrollRevealText";
import HeroReveal from "@/components/HeroReveal";
import ProcessSection from "@/components/ProcessSection";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* 1. Navigation */}
      <Navbar />

      {/* 2. Hero Section */}
      <section className="relative h-screen min-h-[700px] flex items-center pt-20">
        <div className="absolute inset-0 z-0">
          <Image src="/hero-bg.jpg" alt="Construction Worker" fill className="object-cover" priority sizes="100vw" quality={80} />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-wecon-dark"></div>
        </div>
        
        <HeroReveal />
      </section>

      {/* 3. About Section */}
      <section id="about" className="bg-wecon-light text-wecon-dark py-16 md:py-24">
        <div className="container mx-auto px-6 md:px-12 max-w-[1440px]">
          <ScrollRevealText 
            text="PT. WECON is an engineering consulting firm operating in the civil construction sector, specializing in water resources engineering. Founded by Rudolf Frits Charles Ratulangi in 1973, and led since 2014 by Ir. Hadi Santoso, MT as President Director. Over more than 33 years of active operation, PT. WECON has delivered dam design, irrigation, hydropower, geology, and construction supervision projects across multiple provinces in Indonesia — including two national projects personally inaugurated by the President of the Republic of Indonesia."
            className="text-[24px] md:text-[32px] lg:text-[36px] font-sans font-medium leading-[1.4] tracking-tight max-w-[1300px]"
          />
          <div className="mt-12">
            <Link href="/about" className="inline-block bg-[#e5e5e5] border border-black/5 px-5 py-2.5 rounded-md text-[10px] font-mono font-bold tracking-widest uppercase hover:bg-black/10 transition-colors text-black/80">
              LEARN OUR STORY
            </Link>
          </div>
        </div>
      </section>

      {/* 4. Featured Projects Section */}
      <section className="bg-wecon-light py-24 md:py-40 overflow-hidden">
        <div className="container mx-auto px-6 md:px-12 max-w-[1440px]">
          <div className="flex flex-col lg:flex-row justify-between items-start gap-8 mb-20">
            <div>
              <div className="inline-flex items-center gap-2.5 bg-[#e4e4e4] px-4 py-2 rounded-full mb-10">
                <div className="w-1.5 h-1.5 rounded-full bg-black/60"></div>
                <span className="text-[10px] font-mono tracking-widest uppercase text-black/70">Projects</span>
              </div>
              <h2 className="text-[44px] md:text-[56px] font-heading leading-[1.05] tracking-tight text-[#222222]">Our Featured Projects</h2>
            </div>
            <p className="text-black/60 max-w-[420px] text-lg leading-[1.6] pt-3">
              Explore projects where precise engineering meets reliable execution — each one built to withstand real-world demands.
            </p>
          </div>
        </div>

        {/* Ticker Animation Container */}
        <div className="relative w-full flex pb-12 overflow-hidden -mx-2">
          <div className="flex w-max animate-ticker hover:animate-pause">
            {[1, 2, 3, 4].map((set) => (
              <div key={set} className="flex gap-4 pr-4 w-max">
                {/* Project Card 1 */}
                <Link href="/projects/semantok-dam" className="w-[85vw] md:w-[520px] aspect-[4/3] relative rounded-xl overflow-hidden group border border-black/5 block">
                  <Image src="/semantok.jpg" alt="Semantok Dam" fill className="object-cover transition-transform duration-1000 group-hover:scale-[1.03]" sizes="(max-width: 768px) 85vw, 520px" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                  <div className="absolute top-5 right-5">
                    <span className="bg-white/95 backdrop-blur text-[#222] text-[9px] font-mono px-2.5 py-1.5 rounded-[4px] uppercase tracking-widest font-bold">DAM / WATER INFRASTRUCTURE</span>
                  </div>
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <h3 className="text-[20px] md:text-[22px] font-heading mb-1.5 tracking-tight">Semantok Dam</h3>
                    <p className="text-white/70 font-sans text-[12px] md:text-[13px]">Nganjuk, East Java, Indonesia</p>
                  </div>
                </Link>
                {/* Project Card 2 */}
                <Link href="/projects/merangin" className="w-[85vw] md:w-[520px] aspect-[4/3] relative rounded-xl overflow-hidden group border border-black/5 block">
                  <Image src="/merangin.jpg" alt="Merangin Power Plant" fill className="object-cover transition-transform duration-1000 group-hover:scale-[1.03]" sizes="(max-width: 768px) 85vw, 520px" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                  <div className="absolute top-5 right-5">
                    <span className="bg-white/95 backdrop-blur text-[#222] text-[9px] font-mono px-2.5 py-1.5 rounded-[4px] uppercase tracking-widest font-bold">HYDROPOWER</span>
                  </div>
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <h3 className="text-[20px] md:text-[22px] font-heading mb-1.5 tracking-tight">Merangin Hydroelectric Power Plant 350 MW</h3>
                    <p className="text-white/70 font-sans text-[12px] md:text-[13px]">Kerinci, Jambi, Indonesia</p>
                  </div>
                </Link>
                {/* Project Card 3 */}
                <Link href="/projects/ladongi" className="w-[85vw] md:w-[520px] aspect-[4/3] relative rounded-xl overflow-hidden group border border-black/5 block">
                  <Image src="/ladongi.jpg" alt="Ladongi Dam" fill className="object-cover transition-transform duration-1000 group-hover:scale-[1.03]" sizes="(max-width: 768px) 85vw, 520px" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                  <div className="absolute top-5 right-5">
                    <span className="bg-white/95 backdrop-blur text-[#222] text-[9px] font-mono px-2.5 py-1.5 rounded-[4px] uppercase tracking-widest font-bold">DAM / WATER INFRASTRUCTURE</span>
                  </div>
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <h3 className="text-[20px] md:text-[22px] font-heading mb-1.5 tracking-tight">Ladongi Dam</h3>
                    <p className="text-white/70 font-sans text-[12px] md:text-[13px]">East Kolaka, Southeast Sulawesi, Indonesia</p>
                  </div>
                </Link>
                {/* Project Card 4 */}
                <Link href="/projects/jlantah-dam" className="w-[85vw] md:w-[520px] aspect-[4/3] relative rounded-xl overflow-hidden group border border-black/5 block">
                  <Image src="/dam_sustainable.png" alt="Jlantah Dam" fill className="object-cover transition-transform duration-1000 group-hover:scale-[1.03]" sizes="(max-width: 768px) 85vw, 520px" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                  <div className="absolute top-5 right-5">
                    <span className="bg-white/95 backdrop-blur text-[#222] text-[9px] font-mono px-2.5 py-1.5 rounded-[4px] uppercase tracking-widest font-bold">DAM INFRASTRUCTURE</span>
                  </div>
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <h3 className="text-[20px] md:text-[22px] font-heading mb-1.5 tracking-tight">Jlantah Dam</h3>
                    <p className="text-white/70 font-sans text-[12px] md:text-[13px]">Indonesia</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4.5 10 Years Experience Section */}
      <section className="bg-wecon-light pb-24 md:pb-40 text-wecon-dark">
        <div className="container mx-auto px-6 md:px-12 max-w-[1440px] border-t border-black/10 pt-24">
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
      </section>

      {/* 5. Partners Section */}
      <section className="hidden bg-wecon-light pb-24 md:pb-32 text-center">
        <div className="container mx-auto px-6 md:px-12 max-w-[1440px]">
          <div className="inline-flex items-center gap-2.5 bg-[#e4e4e4] px-4 py-2 rounded-full mb-10">
            <div className="w-1.5 h-1.5 rounded-full bg-black/60"></div>
            <span className="text-[10px] font-mono tracking-widest uppercase text-black/70">Our Partners</span>
          </div>
          <h2 className="text-[44px] md:text-[56px] font-heading leading-[1.05] tracking-tight text-[#222222] max-w-[700px] mx-auto mb-20">
            Building lasting relationships with every project
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 border border-[#e0e0e0] bg-white w-full">
            {[1,2,3,4,5,6,7,8].map(i => (
              <div key={i} className="aspect-[2/1] flex items-center justify-center border-[0.5px] border-[#e0e0e0] p-8">
                <div className="font-heading text-xl text-black/20 font-bold">Logoipsum</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Testimonial CTA Section */}
      <section className="p-4 md:p-8 bg-wecon-light pb-24 md:pb-40">
         <div className="container mx-auto max-w-[1440px] h-[700px] relative rounded-[20px] overflow-hidden flex items-end p-10 md:p-20">
            <Image src="/testimonial_bg.png" alt="Testimonial Background" fill className="object-cover" sizes="100vw" quality={70} />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
            
            <div className="relative z-10 max-w-[800px]">
              <div className="flex -space-x-4 mb-10">
                <div className="w-[52px] h-[52px] rounded-full border-[3px] border-wecon-dark bg-gray-300 overflow-hidden relative">
                  <Image src="/avatar.png" alt="Avatar" fill className="object-cover" sizes="60px" />
                </div>
                <div className="w-[52px] h-[52px] rounded-full border-[3px] border-wecon-dark bg-[#3d63d2] flex items-center justify-center text-white text-2xl">
                  ❋
                </div>
              </div>
              <h3 className="text-[28px] md:text-[36px] lg:text-[42px] font-heading text-white leading-[1.2] mb-12 tracking-tight">
                PT. WECON&apos;s supervision team was thorough and technically sharp. Their input during construction gave us confidence the dam would meet every safety requirement
              </h3>
              <div>
                <p className="font-sans font-bold text-white text-[15px]">Priya Verma</p>
                <p className="text-white/70 text-[13px] mt-0.5">Real Estate Developer</p>
              </div>
            </div>
            
            <div className="absolute bottom-16 right-16 hidden lg:block">
              <Link href="#contact" className="bg-white text-black px-6 py-3 rounded text-[11px] font-bold tracking-widest hover:bg-white/90 transition-colors">
                CONTACT US
              </Link>
            </div>
         </div>
      </section>

      {/* 7. Services Section */}
      <section id="expertise" className="bg-wecon-light text-wecon-dark pb-24 md:pb-40">
        <div className="container mx-auto px-6 md:px-12 max-w-[1440px]">
          <div className="grid grid-cols-1 xl:grid-cols-12 gap-16 xl:gap-24">
            <div className="xl:col-span-4 xl:sticky xl:top-32 self-start mb-8 xl:mb-0">
              <div className="inline-flex items-center gap-2.5 bg-[#e4e4e4] px-4 py-2 rounded-full mb-10">
                <div className="w-1.5 h-1.5 rounded-full bg-black/60"></div>
                <span className="text-[10px] font-mono tracking-widest uppercase text-black/70">Services We Provide</span>
              </div>
              <h2 className="text-[44px] md:text-[56px] font-heading leading-[1.05] tracking-tight text-[#222222]">Deep expertise across the sectors that matter</h2>
            </div>
            
            <div className="xl:col-span-8 flex flex-col gap-6">
              {[
                { title: "Technical Survey & Investigation", desc: "Comprehensive field data collection that forms the technical foundation for every design and permitting decision.", tags: ["TOPOGRAPHIC & TERRESTRIAL MAPPING", "HYDROGRAPHIC & BATHYMETRIC SURVEY", "HYDROLOGICAL & HYDROGEOLOGICAL SURVEY", "GEOTECHNICAL INVESTIGATION & LAB TESTING"], image: "/service_survey.png" },
                { title: "Engineering Design", desc: "Detailed engineering design and architectural planning for water and civil infrastructure, from concept through construction-ready drawings.", tags: ["DETAILED ENGINEERING DESIGN", "RIVER, SWAMP & COASTAL AREA DESIGN", "CIVIL & ARCHITECTURAL DESIGN", "LANDSCAPE & INTERIOR DESIGN"], image: "/service_design.png" },
                { title: "Construction Supervision & Project Management", desc: "Full-phase oversight to ensure projects are delivered safely, on schedule, and to certified engineering standards.", tags: ["DAM & RESERVOIR CONSTRUCTION SUPERVISION", "ROAD, BRIDGE & BUILDING SUPERVISION", "PROJECT SUPERVISION AND CONTROL", "CONSTRUCTION MANAGEMENT & HR PROVISION"], image: "/construction_supervision.png" },
                { title: "Geology, Mining & Digital Solutions", desc: "Specialized geological investigation paired with digital tools that support data-driven decision-making.", tags: ["MINERAL & GEOTHERMAL EXPLORATION", "GEOLOGICAL & MINING DATA COMPILATION", "GIS DEVELOPMENT & SPATIAL DATA PROCESSING", "APPLICATION & SOFTWARE DEVELOPMENT"], image: "/service_geology.png" }
              ].map((service, idx) => (
                <div key={idx} className="bg-white rounded-[24px] p-6 lg:p-12 flex flex-col lg:grid lg:grid-cols-12 gap-6 lg:gap-10 items-start">
                  <div className="lg:col-span-4 aspect-[4/3] w-full rounded-[16px] overflow-hidden bg-gray-100 relative">
                    <Image src={service.image} alt={service.title} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 33vw" />
                  </div>
                  <div className="lg:col-span-8 w-full">
                    <h3 className="text-[22px] md:text-[26px] font-heading mb-3 md:mb-4 tracking-tight text-[#222]">{service.title}</h3>
                    <p className="text-black/60 mb-6 md:mb-10 leading-[1.6] text-[14px] md:text-[15px]">{service.desc}</p>
                    <div className="flex flex-wrap gap-2.5">
                      {service.tags.map(tag => (
                        <span key={tag} className="bg-[#f2f2f2] text-[9.5px] font-mono px-3 py-2 rounded uppercase tracking-[0.08em] text-black/60 font-medium">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 8. Process Section */}
      <section className="bg-wecon-dark py-24 md:py-40">
        <div className="container mx-auto px-6 md:px-12 max-w-[1440px]">
          <div className="flex flex-col lg:flex-row justify-between items-start gap-8 mb-24">
            <div>
              <div className="inline-flex items-center gap-2.5 bg-[#252525] px-4 py-2 rounded-full mb-8">
                <div className="w-1.5 h-1.5 rounded-full bg-[#999999]"></div>
                <span className="text-[10px] font-mono tracking-widest uppercase text-[#cccccc]">Our Process</span>
              </div>
              <h2 className="text-[40px] md:text-[56px] font-heading leading-[1.1] tracking-tight text-white max-w-[500px]">How we deliver every project</h2>
            </div>
            <p className="text-white/60 max-w-[420px] text-lg leading-[1.6] pt-3">
              A proven four-phase methodology built for complex builds — from first brief to final handover, nothing is left to chance.
            </p>
          </div>

          <ProcessSection />
        </div>
      </section>

      {/* 9. Stats Section (NEW) */}
      <section className="bg-wecon-dark pb-24 md:pb-40 pt-10 border-t border-white/5">
        <div className="container mx-auto px-6 md:px-12 max-w-[1440px]">
          <div className="flex flex-col lg:flex-row justify-between items-start gap-8 mb-24">
            <div>
              <div className="inline-flex items-center gap-2.5 bg-[#252525] px-4 py-2 rounded-full mb-8">
                <div className="w-1.5 h-1.5 rounded-full bg-[#999999]"></div>
                <span className="text-[10px] font-mono tracking-widest uppercase text-[#cccccc]">Impact</span>
              </div>
              <h2 className="text-[40px] md:text-[56px] font-heading leading-[1.1] tracking-tight text-white max-w-[500px]">Numbers speak for themselves</h2>
            </div>
            <p className="text-white/60 max-w-[420px] text-lg leading-[1.6] pt-3">
              Built on decades of proven expertise, delivering precision engineering for Indonesia&apos;s most critical infrastructure projects.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#1c1b1a] rounded-[32px] p-12 border border-white/[0.03] flex flex-col justify-between aspect-square md:aspect-auto md:h-[400px]">
               <h3 className="text-[80px] md:text-[100px] font-heading text-white leading-none tracking-tight">50+</h3>
               <div>
                  <p className="text-white font-medium mb-2">Water Infrastructure</p>
                  <p className="text-white/50 text-sm">Successfully designed and supervised across multiple regions.</p>
               </div>
            </div>
            <div className="bg-[#1c1b1a] rounded-[32px] p-12 border border-white/[0.03] flex flex-col justify-between aspect-square md:aspect-auto md:h-[400px]">
               <h3 className="text-[80px] md:text-[100px] font-heading text-white leading-none tracking-tight">2</h3>
               <div>
                  <p className="text-white font-medium mb-2">National Strategic Projects</p>
                  <p className="text-white/50 text-sm">Directly inaugurated by the President of the Republic of Indonesia.</p>
               </div>
            </div>
            <div className="bg-[#1c1b1a] rounded-[32px] p-12 border border-white/[0.03] flex flex-col justify-between aspect-square md:aspect-auto md:h-[400px]">
               <h3 className="text-[80px] md:text-[100px] font-heading text-white leading-none tracking-tight">7</h3>
               <div>
                  <p className="text-white font-medium mb-2">Provinces</p>
                  <p className="text-white/50 text-sm">Operating actively across 7 provinces in Indonesia.</p>
               </div>
            </div>
            <div className="bg-[#1c1b1a] rounded-[32px] p-12 border border-white/[0.03] flex flex-col justify-between aspect-square md:aspect-auto md:h-[400px]">
               <h3 className="text-[80px] md:text-[100px] font-heading text-white leading-none tracking-tight">10+</h3>
               <div>
                  <p className="text-white font-medium mb-2">Awards & Certifications</p>
                  <p className="text-white/50 text-sm">Recognized for engineering excellence and quality standards.</p>
               </div>
            </div>
          </div>
        </div>
      </section>


      {/* 11. Blog Section (NEW) */}
      <section className="bg-wecon-light py-24 md:py-40">
        <div className="container mx-auto px-6 md:px-12 max-w-[1440px]">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 mb-16">
            <div>
              <div className="inline-flex items-center gap-2.5 bg-[#e4e4e4] px-4 py-2 rounded-full mb-10">
                <div className="w-1.5 h-1.5 rounded-full bg-black/60"></div>
                <span className="text-[10px] font-mono tracking-widest uppercase text-black/70">Newsroom</span>
              </div>
              <h2 className="text-[44px] md:text-[56px] font-heading leading-[1.05] tracking-tight text-[#222222]">Insights & Industry Updates</h2>
            </div>
            <Link href="/blog" className="px-6 py-4 bg-white border border-black/10 rounded-full text-xs font-bold tracking-widest uppercase hover:bg-gray-50 transition-colors text-black">
               View All News
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
             <Link href="/blog/panduan-perijinan-pengalihan-air-sungai" className="group flex flex-col bg-white rounded-[24px] border border-black/5 p-3 transition-shadow hover:shadow-lg">
                <div className="aspect-[4/3] relative overflow-hidden bg-gray-100 rounded-[20px] mb-6">
                   <Image src="/dam_sustainable.png" alt="Blog" fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="(max-width: 768px) 100vw, 50vw" />
                   <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1.5 rounded uppercase text-[10px] font-mono tracking-widest text-black">
                      Engineering
                   </div>
                </div>
                <div className="px-3 pb-3 flex flex-col flex-grow">
                   <h3 className="text-2xl font-heading mb-6 group-hover:text-blue-600 transition-colors text-black">Panduan Lengkap Perijinan Pengalihan Air Sungai di Indonesia</h3>
                   <p className="text-black/60 text-sm mt-auto">August 05, 2026 • 5 min read</p>
                </div>
             </Link>
             <Link href="/blog/panduan-perijinan-pengalihan-air-sungai" className="group flex flex-col bg-white rounded-[24px] border border-black/5 p-3 transition-shadow hover:shadow-lg">
                <div className="aspect-[4/3] relative overflow-hidden bg-gray-100 rounded-[20px] mb-6">
                   <Image src="/hydropower_turbine.png" alt="Blog" fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="(max-width: 768px) 100vw, 50vw" />
                   <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1.5 rounded uppercase text-[10px] font-mono tracking-widest text-black">
                      Projects
                   </div>
                </div>
                <div className="px-3 pb-3 flex flex-col flex-grow">
                   <h3 className="text-2xl font-heading mb-6 group-hover:text-blue-600 transition-colors text-black">Pentingnya Survey Topografi Sebelum Konstruksi Bendungan</h3>
                   <p className="text-black/60 text-sm mt-auto">July 12, 2026 • 4 min read</p>
                </div>
             </Link>
          </div>
        </div>
      </section>

      {/* 12. Contact Form Section (NEW) */}
      <section className="bg-wecon-light pb-24 md:pb-40">
        <div className="container mx-auto px-6 md:px-12 max-w-[1200px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            
            {/* Left Column */}
            <div className="lg:pr-8">
              <div className="inline-flex items-center gap-2 bg-[#e4e4e4] px-3 py-1.5 rounded-full mb-8">
                <div className="w-1.5 h-1.5 rounded-full bg-black/60"></div>
                <span className="text-[10px] font-mono tracking-[0.2em] uppercase font-bold text-black/70">Get In Touch</span>
              </div>
              <h2 className="text-[44px] md:text-[56px] font-heading leading-[1.05] tracking-tight text-[#1a1a1a] mb-6">
                 Ready to build<br/>something<br/>that lasts?
              </h2>
              <p className="text-black/70 text-[15px] leading-[1.6] max-w-[380px]">
                 Whether it&apos;s a residential project, commercial space, or renovation, we&apos;re here to bring your vision to life—with quality, clarity, and on-time delivery.
              </p>
            </div>
            
            {/* Right Column (Form Card) */}
            <div className="bg-white rounded-[16px] p-8 md:p-12 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-black/5">
               <h3 className="text-2xl font-bold font-sans text-black mb-2">Let&apos;s talk about your goals</h3>
               <p className="text-black/60 text-[13px] mb-8 leading-[1.6]">
                  Fill out the form below and our nearest regional office will get back to you within 24 hours.
               </p>
               
               <form className="flex flex-col gap-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                     <div className="flex flex-col gap-2">
                        <label className="text-[9px] font-mono font-bold uppercase tracking-[0.15em] text-[#888888]">Name</label>
                        <input type="text" className="bg-[#f5f5f5] rounded-[6px] px-4 py-3.5 w-full outline-none focus:ring-2 focus:ring-black/10 text-[13px]" placeholder="Jane Smith" />
                     </div>
                     <div className="flex flex-col gap-2">
                        <label className="text-[9px] font-mono font-bold uppercase tracking-[0.15em] text-[#888888]">Email</label>
                        <input type="email" className="bg-[#f5f5f5] rounded-[6px] px-4 py-3.5 w-full outline-none focus:ring-2 focus:ring-black/10 text-[13px]" placeholder="jane@framer.com" />
                     </div>
                  </div>
                  <div className="flex flex-col gap-2">
                     <label className="text-[9px] font-mono font-bold uppercase tracking-[0.15em] text-[#888888]">Address</label>
                     <input type="text" className="bg-[#f5f5f5] rounded-[6px] px-4 py-3.5 w-full outline-none focus:ring-2 focus:ring-black/10 text-[13px]" placeholder="Jane Smith" />
                  </div>
                  <div className="flex flex-col gap-2">
                     <label className="text-[9px] font-mono font-bold uppercase tracking-[0.15em] text-[#888888]">You are interested in</label>
                     <div className="relative">
                        <select defaultValue="" className="appearance-none bg-[#f5f5f5] rounded-[6px] px-4 py-3.5 w-full outline-none focus:ring-2 focus:ring-black/10 text-[13px] text-[#888888] cursor-pointer">
                           <option value="" disabled>Select a service...</option>
                           <option value="survey">Topographic Survey</option>
                           <option value="design">Engineering Design</option>
                           <option value="supervision">Construction Supervision</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-[#888888]">
                           <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                           </svg>
                        </div>
                     </div>
                  </div>
                  <div className="flex flex-col gap-2">
                     <label className="text-[9px] font-mono font-bold uppercase tracking-[0.15em] text-[#888888]">Message</label>
                     <textarea rows={4} className="bg-[#f5f5f5] rounded-[6px] px-4 py-3.5 w-full outline-none focus:ring-2 focus:ring-black/10 resize-none text-[13px]" placeholder="Write your message..." />
                  </div>
                  
                  <div className="flex items-start gap-3 mt-2">
                     <input type="checkbox" className="mt-0.5 w-4 h-4 rounded-[4px] border-[#dddddd] bg-[#f5f5f5] checked:bg-black checked:border-black cursor-pointer appearance-none relative checked:after:content-['✓'] checked:after:text-white checked:after:text-[10px] checked:after:font-bold checked:after:absolute checked:after:inset-0 checked:after:flex checked:after:items-center checked:after:justify-center" />
                     <p className="text-[#888888] text-[11px] leading-[1.6]">
                        Yes, I&apos;d like to receive product updates and insights from Wecon. Unsubscribe anytime.
                     </p>
                  </div>
                  
                  <button type="submit" className="bg-[#151515] text-white w-full py-4 rounded-[6px] font-mono font-bold text-[10px] tracking-[0.15em] uppercase hover:bg-black/80 transition-colors mt-2">
                     Send Enquiry
                  </button>
               </form>
            </div>
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
