'use client';

import React from 'react';

export default function CTASection() {
  return (
    <section id="contact" className="bg-[#D85A30] py-24 relative overflow-hidden">
      
      {/* Decorative Floating Elements */}
      <div className="absolute top-16 left-10 md:left-24 bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-medium px-4 py-2 rounded-xl shadow-lg transform -rotate-6 animate-[bounce_4s_infinite_alternate]">
        ✓ Replied in &lt; 2 hours
      </div>
      <div className="absolute bottom-20 left-10 md:left-32 bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-medium px-4 py-2 rounded-xl shadow-lg transform rotate-6 animate-[bounce_5s_infinite_alternate]">
        📅 Free 30-min slot
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        
        {/* Left: Text */}
        <div className="text-left">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight mb-6">
            Ready to build something<br />
            that matters?
          </h2>
          
          <p className="text-white/90 text-lg md:text-xl max-w-lg leading-relaxed font-light mb-8">
            Let's discuss your project. No sales pitch — just an honest conversation with our technical experts.
          </p>

          <p className="text-white/70 text-sm font-medium tracking-wide flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
            Currently accepting new projects
          </p>
        </div>

        {/* Right: Form */}
        <div className="bg-white rounded-[2rem] p-8 md:p-10 shadow-2xl">
          <h3 className="text-2xl font-bold text-[#0D0D0D] mb-6">Get in touch</h3>
          <form className="flex flex-col gap-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="flex flex-col gap-2">
                <label className="text-xs font-semibold text-[#5A5A5A] uppercase tracking-wider">First Name</label>
                <input type="text" placeholder="John" className="bg-[#F5F5F5] border border-[#E5E5E5] px-4 py-3 rounded-xl text-[#0D0D0D] placeholder-[#A0A0A0] focus:outline-none focus:border-[#D85A30] transition-colors" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs font-semibold text-[#5A5A5A] uppercase tracking-wider">Last Name</label>
                <input type="text" placeholder="Doe" className="bg-[#F5F5F5] border border-[#E5E5E5] px-4 py-3 rounded-xl text-[#0D0D0D] placeholder-[#A0A0A0] focus:outline-none focus:border-[#D85A30] transition-colors" />
              </div>
            </div>
            
            <div className="flex flex-col gap-2">
              <label className="text-xs font-semibold text-[#5A5A5A] uppercase tracking-wider">Email Address</label>
              <input type="email" placeholder="john@company.com" className="bg-[#F5F5F5] border border-[#E5E5E5] px-4 py-3 rounded-xl text-[#0D0D0D] placeholder-[#A0A0A0] focus:outline-none focus:border-[#D85A30] transition-colors" />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs font-semibold text-[#5A5A5A] uppercase tracking-wider">Project Details</label>
              <textarea placeholder="Tell us about your goals, timeline, and budget..." rows={4} className="bg-[#F5F5F5] border border-[#E5E5E5] px-4 py-3 rounded-xl text-[#0D0D0D] placeholder-[#A0A0A0] focus:outline-none focus:border-[#D85A30] transition-colors resize-none"></textarea>
            </div>

            <button type="button" className="bg-[#0D0D0D] text-white font-bold py-4 rounded-xl hover:bg-[#2A2A2A] transition-colors mt-2 text-lg">
              Send Message
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}
