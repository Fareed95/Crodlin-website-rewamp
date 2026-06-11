import React from 'react';

export default function ProcessSection() {
  const steps = [
    {
      num: '01',
      title: 'Fill the form',
      desc: 'Tell us about your project — takes 2 minutes.',
    },
    {
      num: '02',
      title: 'Discovery call',
      desc: 'We align on scope, timeline, and realistic budget.',
    },
    {
      num: '03',
      title: 'Proposal sent',
      desc: 'A detailed plan with fixed pricing. No surprises.',
    },
    {
      num: '04',
      title: 'We build',
      desc: 'Weekly demos, Slack updates, and you\'re always in the loop.',
    },
  ];

  return (
    <section className="bg-[#0D0D0D] py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        <div className="text-center mb-24">
          <span className="text-xs uppercase tracking-widest font-medium text-[#D85A30] mb-4 block">
            HOW IT WORKS
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-white leading-tight">
            Simple process,<br />
            <span className="text-[#D85A30]">serious results</span>
          </h2>
        </div>

        <div className="relative">
          {/* Desktop Timeline Line */}
          <div className="hidden md:block absolute top-6 left-0 right-0 h-px bg-[#2A2A2A] z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-6 relative z-10">
            {steps.map((step, idx) => (
              <div key={idx} className="flex flex-col items-center md:items-start text-center md:text-left">
                <div className="w-12 h-12 rounded-full border-2 border-[#D85A30] bg-[#0D0D0D] flex items-center justify-center mb-6 shrink-0 relative z-10">
                  <span className="text-[#D85A30] font-bold font-mono text-sm">{step.num}</span>
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">{step.title}</h3>
                <p className="text-[#666] text-sm leading-relaxed max-w-[240px]">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 text-center">
          <p className="text-[#D85A30] text-sm font-medium">
            Most projects start within 7 days of signing.
          </p>
        </div>

      </div>
    </section>
  );
}
