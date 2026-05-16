import React from 'react';
import { motion } from 'framer-motion';
import { Star, Clock, DollarSign, MapPin, Dumbbell } from 'lucide-react';

const TRUST_ITEMS = [
  { icon: Star, label: '4.8-STAR', sub: 'Google Rated' },
  { icon: Clock, label: '19 HRS', sub: 'Open Daily' },
  { icon: DollarSign, label: 'UPFRONT', sub: 'Monthly Pricing' },
  { icon: MapPin, label: 'LOCAL', sub: 'Davao Owned' },
  { icon: Dumbbell, label: 'FULL', sub: 'Equipment Access' },
];

export default function HeroSection({ heroImage }) {
  return (
    <section className="relative min-h-screen flex flex-col justify-end pt-14" id="hero">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Interior of Beefit Gym Prime showing rows of heavy dumbbells and rubber mat flooring in Davao City"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/80" />
      </div>

      {/* Oversized numeral */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none">
        <span className="font-mono text-[20rem] md:text-[30rem] font-bold text-foreground/[0.03] leading-none">
          01
        </span>
      </div>

      {/* Content */}
      <div className="relative z-10 flex-1 flex flex-col justify-center items-center text-center px-6 md:px-12 py-20 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl"
        >
          <p className="font-mono text-xs tracking-[0.3em] text-primary mb-6 uppercase">
            [01] Strength Facility
          </p>
          <h1 className="font-heading font-bold text-4xl md:text-6xl lg:text-7xl text-foreground leading-[1.05] mb-6">
            Strength Training Gym in Davao City Open Late
          </h1>
          <p className="font-body text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
            Train on your terms from 5:00 AM to midnight. We offer a high-intensity space on the 2nd floor of the Time Square Tionko Building for people who want to work.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#contact"
              className="group inline-flex items-center font-mono text-sm tracking-[0.1em] uppercase"
            >
              <span className="bg-primary text-primary-foreground px-6 py-3.5 min-h-[44px] flex items-center hover:bg-primary/90 transition-colors">
                Book My Visit
              </span>
            </a>
            <a
              href="#pricing"
              className="font-mono text-sm tracking-[0.1em] text-muted-foreground hover:text-foreground transition-colors underline underline-offset-4 decoration-border hover:decoration-primary py-3.5 min-h-[44px] flex items-center uppercase"
            >
              See My Membership Options
            </a>
          </div>
        </motion.div>
      </div>

      {/* Trust bar */}
      <div className="relative z-10 border-t border-border">
        <div className="grid grid-cols-2 md:grid-cols-5">
          {TRUST_ITEMS.map((item, i) => (
            <div
              key={item.label}
              className={`flex items-center justify-center gap-3 px-4 py-4 md:py-5 ${
                i < TRUST_ITEMS.length - 1 ? 'border-r border-border' : ''
              } ${i >= 2 && i < 4 ? 'max-md:border-t max-md:border-border' : ''} ${i === 4 ? 'max-md:border-t max-md:border-border col-span-2 md:col-span-1' : ''}`}
            >
              <item.icon className="w-4 h-4 text-primary flex-shrink-0" />
              <div>
                <span className="font-mono text-xs tracking-[0.1em] text-foreground block">{item.label}</span>
                <span className="font-mono text-[10px] tracking-[0.1em] text-muted-foreground uppercase">{item.sub}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}