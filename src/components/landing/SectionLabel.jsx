import React from 'react';

export default function SectionLabel({ number, label }) {
  return (
    <div className="flex items-center gap-3 mb-8 md:mb-12">
      <span className="font-mono text-primary text-sm tracking-widest">[{number}]</span>
      <div className="h-px bg-border flex-1" />
      <span className="font-mono text-muted-foreground text-xs tracking-[0.2em] uppercase">{label}</span>
    </div>
  );
}