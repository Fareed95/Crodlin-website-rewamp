import React from 'react';

interface SectionHeaderProps {
  eyebrow: string;
  headline: string;
  highlightedWord?: string;
  subtitle?: string;
  align?: 'left' | 'center';
}

export default function SectionHeader({
  eyebrow,
  headline,
  highlightedWord,
  subtitle,
  align = 'center',
}: SectionHeaderProps) {
  // If highlightedWord is provided, we split the headline to inject the color.
  // Note: this simple implementation highlights the FIRST occurrence.
  const renderHeadline = () => {
    if (!highlightedWord || !headline.includes(highlightedWord)) {
      return headline;
    }

    const parts = headline.split(highlightedWord);
    return (
      <>
        {parts[0]}
        <span className="text-[#D85A30]">{highlightedWord}</span>
        {parts[1]}
      </>
    );
  };

  return (
    <div className={`flex flex-col ${align === 'center' ? 'items-center text-center' : 'items-start text-left'}`}>
      <span className="text-[10px] md:text-xs uppercase tracking-widest font-medium text-[#D85A30] mb-3">
        {eyebrow}
      </span>
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-[#0D0D0D]">
        {renderHeadline()}
      </h2>
      {subtitle && (
        <p className="text-sm text-[#5A5A5A] leading-relaxed max-w-xl mt-3">
          {subtitle}
        </p>
      )}
    </div>
  );
}
