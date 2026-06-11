'use client';

import React, { useRef, useState, MouseEvent as ReactMouseEvent, TouchEvent as ReactTouchEvent } from 'react';
import { Code, Lightbulb, Bot, Smartphone, ArrowRight } from 'lucide-react';
import SectionHeader from '@/components/common/SectionHeader';
import Link from 'next/link';

const services = [
  {
    num: '01',
    icon: Code,
    title: 'Software Development',
    desc: 'Custom web apps, dashboards, SaaS platforms built to scale.',
    tags: ['Next.js', 'Django', 'PostgreSQL'],
    img: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=600&auto=format&fit=crop',
  },
  {
    num: '02',
    icon: Lightbulb,
    title: 'IT Consultancy',
    desc: 'Tech strategy, architecture decisions, and team augmentation.',
    tags: ['Audits', 'Roadmaps', 'DevOps'],
    img: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=600&auto=format&fit=crop',
  },
  {
    num: '03',
    icon: Bot,
    title: 'AI Solutions',
    desc: 'LLM pipelines, intelligent automation, data extraction systems.',
    tags: ['Python', 'LangChain', 'OpenAI'],
    img: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=600&auto=format&fit=crop',
  },
  {
    num: '04',
    icon: Smartphone,
    title: 'Mobile Apps',
    desc: 'Cross-platform apps that feel truly native on iOS and Android.',
    tags: ['React Native', 'Expo', 'Swift'],
    img: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=600&auto=format&fit=crop',
  },
];

export default function ServicesSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [showHint, setShowHint] = useState(true);

  // Fade out hint after 2 seconds
  React.useEffect(() => {
    const timer = setTimeout(() => setShowHint(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleMouseDown = (e: ReactMouseEvent) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: ReactMouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Scroll-fast multiplier
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchStart = (e: ReactTouchEvent) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    setStartX(e.touches[0].pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleTouchMove = (e: ReactTouchEvent) => {
    if (!isDragging || !scrollRef.current) return;
    const x = e.touches[0].pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  return (
    <section id="services" className="bg-[#F5F5F5] py-24 overflow-hidden relative">
      
      {/* Subtle background visuals */}
      <div className="absolute inset-0 opacity-[0.03] z-0 pointer-events-none" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, #0D0D0D 1px, transparent 0)`,
        backgroundSize: '40px 40px'
      }}></div>
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#D85A30]/5 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/3"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        <SectionHeader 
          eyebrow="WHAT WE DO"
          headline="Services built for real outcomes"
          highlightedWord="real outcomes"
          subtitle="We partner with ambitious teams to build robust digital products."
          align="left"
        />

        <div className="relative mt-16">
          {showHint && (
            <div className="absolute -top-8 right-0 text-sm text-[#5A5A5A] animate-pulse">
              ← drag to explore →
            </div>
          )}

          <div 
            ref={scrollRef}
            className={`flex gap-6 overflow-x-auto no-scrollbar py-4 px-2 -mx-2 select-none ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {services.map((service, idx) => (
              <div 
                key={idx}
                className="group flex-shrink-0 w-[320px] h-[420px] bg-white border border-[#E5E5E5] hover:border-[#D85A30] rounded-2xl p-8 transition-all duration-500 flex flex-col relative overflow-hidden"
              >
                {/* Background Image — visible on hover */}
                <div 
                  className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"
                  style={{ backgroundImage: `url(${service.img})` }}
                ></div>
                {/* Tinted overlay so text stays readable */}
                <div className="absolute inset-0 bg-[#0D0D0D]/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>

                {/* Background Number */}
                <span className="absolute top-6 right-6 text-7xl font-bold text-[#F0F0F0] group-hover:text-[#2A2A2A] transition-colors duration-500 z-10 select-none">
                  {service.num}
                </span>

                <div className="relative z-10 flex flex-col h-full">
                  <service.icon className="w-8 h-8 text-[#D85A30] mb-auto" />
                  
                  <div className="mt-auto">
                    <h3 className="text-xl font-bold text-[#0D0D0D] group-hover:text-white transition-colors duration-500">
                      {service.title}
                    </h3>
                    <p className="text-sm text-[#5A5A5A] group-hover:text-[#A0A0A0] mt-2 mb-6 transition-colors duration-500">
                      {service.desc}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {service.tags.map(tag => (
                        <span key={tag} className="text-xs bg-[#F5F5F5] text-[#5A5A5A] group-hover:bg-[#2A2A2A] group-hover:text-[#D0D0D0] group-hover:border-transparent border border-[#E5E5E5] rounded-full px-3 py-1 transition-colors duration-500">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-2 text-[#D85A30] opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
                      <span className="text-sm font-semibold">Learn more</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex justify-end">
          <Link href="#contact" className="text-[#D85A30] font-semibold flex items-center gap-2 hover:gap-3 transition-all">
            View all services <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}
