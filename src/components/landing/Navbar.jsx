import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const NAV_ITEMS = [
  { label: 'Services', href: '#services' },
  { label: 'Rates', href: '#pricing' },
  { label: 'Branches', href: '#branches' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm border-b border-border">
      <div className="flex items-center justify-between px-6 md:px-12 h-14">
        <a href="#" className="font-heading font-700 text-foreground text-lg tracking-tight">
          BEEFIT<span className="text-primary">.</span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-mono text-xs tracking-[0.15em] text-muted-foreground hover:text-primary transition-colors uppercase"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className="font-mono text-xs tracking-[0.15em] bg-primary text-primary-foreground px-4 py-2 hover:bg-primary/90 transition-colors uppercase"
          >
            Book My Visit
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-foreground p-2 min-w-[44px] min-h-[44px] flex items-center justify-center"
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-t border-border overflow-hidden bg-background"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="font-mono text-sm tracking-[0.15em] text-muted-foreground hover:text-primary transition-colors uppercase py-2"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="font-mono text-sm tracking-[0.15em] bg-primary text-primary-foreground px-4 py-3 text-center hover:bg-primary/90 transition-colors uppercase mt-2"
              >
                Book My Visit
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}