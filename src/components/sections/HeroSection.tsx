import React from 'react';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="bg-[#0D0D0D] pt-32 pb-0 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-start">
        
        {/* Left Column */}
        <div className="flex flex-col items-start z-10 pt-8 lg:pt-12">
          <div className="inline-block border border-[#D85A30]/50 text-[#D85A30] bg-[#D85A30]/5 backdrop-blur-sm text-[10px] md:text-xs uppercase tracking-widest font-semibold px-4 py-1.5 rounded-full mb-6">
            SOFTWARE · AI · MOBILE
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05] tracking-tight">
            We build software<br />
            that <span className="text-[#D85A30]">scales</span> your<br />
            business.
          </h1>
          
          <p className="text-[#A0A0A0] text-sm md:text-base max-w-md mt-6 leading-relaxed font-light">
            From MVPs to enterprise systems — we design, build, and ship software that moves fast and lasts long.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-6 mt-10 w-full sm:w-auto">
            <Link 
              href="#contact" 
              className="bg-[#D85A30] hover:bg-[#A03D1A] text-white px-6 py-3 md:px-8 md:py-4 rounded-full font-semibold transition-colors w-full sm:w-auto text-center text-sm md:text-base"
            >
              Get a free consultation
            </Link>
            <Link 
              href="#work" 
              className="text-white hover:text-[#D85A30] group flex items-center justify-center gap-2 font-medium transition-colors text-sm md:text-base w-full sm:w-auto"
            >
              See our work 
              <span className="group-hover:translate-y-1 transition-transform">↓</span>
            </Link>
          </div>
        </div>

        {/* Right Column (Video) */}
        <div className="relative w-full aspect-[4/3] lg:aspect-[4/5] xl:aspect-[16/9] rounded-2xl overflow-hidden ring-1 ring-[#D85A30]/30 shadow-2xl shadow-[#D85A30]/5 z-10 self-center lg:mt-8 group">
          <video 
            autoPlay 
            muted 
            loop 
            playsInline 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
          >
            <source src="/Hero_section.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-[#0D0D0D]/20 to-transparent opacity-90 pointer-events-none"></div>
          
          {/* Floating badge over video */}
          <div className="absolute bottom-6 left-6 bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-4 flex items-center gap-4 animate-[bounce_5s_infinite_alternate]">
            <div className="w-10 h-10 rounded-full bg-[#D85A30] flex items-center justify-center text-white font-bold">
              10x
            </div>
            <div>
              <p className="text-white text-sm font-semibold">Faster Delivery</p>
              <p className="text-white/60 text-xs">Than traditional agencies</p>
            </div>
          </div>
        </div>
        
      </div>

      {/* Marquee Ticker */}
      <div className="w-full overflow-hidden bg-[#D85A30] h-[40px] flex items-center mt-24">
        <div className="whitespace-nowrap flex font-mono text-sm text-white animate-marquee">
          <span className="mx-4">NEXT.JS · REACT NATIVE · DJANGO · AI/ML · POSTGRESQL · SUPABASE · TAILWIND · FIGMA · AWS ·</span>
          <span className="mx-4">NEXT.JS · REACT NATIVE · DJANGO · AI/ML · POSTGRESQL · SUPABASE · TAILWIND · FIGMA · AWS ·</span>
          <span className="mx-4">NEXT.JS · REACT NATIVE · DJANGO · AI/ML · POSTGRESQL · SUPABASE · TAILWIND · FIGMA · AWS ·</span>
          <span className="mx-4">NEXT.JS · REACT NATIVE · DJANGO · AI/ML · POSTGRESQL · SUPABASE · TAILWIND · FIGMA · AWS ·</span>
          <span className="mx-4">NEXT.JS · REACT NATIVE · DJANGO · AI/ML · POSTGRESQL · SUPABASE · TAILWIND · FIGMA · AWS ·</span>
        </div>
      </div>
    </section>
  );
}
