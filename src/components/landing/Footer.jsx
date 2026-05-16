import React from 'react';

const SPEC_ROWS = [
  { label: 'Operational Hours', value: 'Mon-Sat 05:00-00:00', link: null },
  { label: 'Location', value: 'Poblacion District, Davao City 8000', link: 'https://maps.google.com/?cid=11505605199058794383' },
  { label: 'Contact Line', value: '(082) 333 3485', link: 'tel:+63823333485' },
  { label: 'Rating', value: '4.8 / 5.0 (91 Reviews)', link: null },
];

export default function Footer() {
  return (
    <footer className="border-t border-border">
      {/* Technical spec table */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {SPEC_ROWS.map((row, i) => {
          const Tag = row.link ? 'a' : 'div';
          const linkProps = row.link ? { href: row.link, target: row.link.startsWith('tel:') ? undefined : '_blank', rel: 'noopener noreferrer' } : {};
          return (
            <Tag
              key={i}
              {...linkProps}
              className={`px-6 py-5 border-b md:border-b-0 border-border ${
                i < SPEC_ROWS.length - 1 ? 'md:border-r' : ''
              } hover:bg-primary/5 transition-colors group min-h-[44px] flex flex-col justify-center`}
            >
              <span className="font-mono text-[10px] tracking-[0.2em] text-muted-foreground uppercase block mb-1">
                {row.label}
              </span>
              <span className="font-mono text-xs text-foreground group-hover:text-primary transition-colors">
                {row.value}
              </span>
            </Tag>
          );
        })}
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border px-6 md:px-12 py-4 flex flex-col md:flex-row items-center justify-between gap-2">
        <span className="font-mono text-[10px] tracking-[0.15em] text-muted-foreground uppercase">
          Beefit Gym Prime — Davao City, Philippines
        </span>
        <span className="font-mono text-[10px] tracking-[0.15em] text-muted-foreground uppercase">
          [SYS_STATUS: OPERATIONAL]
        </span>
      </div>
    </footer>
  );
}