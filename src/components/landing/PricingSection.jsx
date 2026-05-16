import React from 'react';
import { motion } from 'framer-motion';
import SectionLabel from './SectionLabel';

const PRICING = [
  {
    service: 'Gym',
    plans: [
      { label: 'Session', price: '250' },
      { label: 'Monthly', price: '1,200' },
    ],
    branches: 'All Branches',
  },
  {
    service: 'Zumba',
    plans: [
      { label: 'Monthly', price: '1,200' },
    ],
    branches: 'Matina, Duterte, Bajada',
  },
  {
    service: 'Zumba & Gym',
    plans: [
      { label: 'Monthly', price: '2,000' },
    ],
    branches: 'All Branches',
  },
  {
    service: 'Boxing',
    plans: [
      { label: 'Monthly', price: '1,500' },
    ],
    branches: 'Lanang',
  },
  {
    service: 'Boxing & Gym',
    plans: [
      { label: 'Monthly', price: '2,300' },
    ],
    branches: 'Lanang',
  },
];

export default function PricingSection() {
  return (
    <section id="pricing" className="px-6 md:px-12 py-16 md:py-24 border-t border-border">
      <SectionLabel number="03" label="Rates" />

      <div className="mb-8">
        <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground">
          Upfront pricing. No hidden fees.
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
        {PRICING.map((item, i) => (
          <motion.div
            key={item.service}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="bg-background p-6 md:p-8 group hover:bg-card transition-colors"
          >
            <span className="font-mono text-[10px] tracking-[0.25em] text-primary uppercase block mb-3">
              [{String(i + 1).padStart(2, '0')}]
            </span>
            <h3 className="font-heading font-bold text-xl text-foreground mb-4">{item.service}</h3>

            {/* Prices */}
            <div className="space-y-3 mb-5">
              {item.plans.map((plan) => (
                <div key={plan.label} className="flex items-end justify-between border-b border-border pb-3">
                  <span className="font-mono text-xs text-muted-foreground uppercase tracking-[0.1em]">
                    {plan.label}
                  </span>
                  <span className="font-mono text-2xl font-bold text-primary leading-none">
                    ₱{plan.price}
                  </span>
                </div>
              ))}
            </div>

            {/* Branches */}
            <div className="flex items-center gap-2">
              <span className="font-mono text-[10px] tracking-[0.15em] text-muted-foreground uppercase">
                Available at:
              </span>
              <span className="font-mono text-[10px] tracking-[0.1em] text-foreground">
                {item.branches}
              </span>
            </div>
          </motion.div>
        ))}

        {/* CTA card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: PRICING.length * 0.08 }}
          className="bg-primary p-6 md:p-8 flex flex-col justify-between"
        >
          <div>
            <span className="font-mono text-[10px] tracking-[0.25em] text-primary-foreground/60 uppercase block mb-3">
              [READY]
            </span>
            <h3 className="font-heading font-bold text-xl text-primary-foreground mb-3">
              Pick your plan today.
            </h3>
            <p className="font-body text-primary-foreground/70 text-sm leading-relaxed">
              Walk in during operating hours or send us a message. No contracts, no pressure.
            </p>
          </div>
          <a
            href="#contact"
            className="mt-6 inline-flex items-center justify-center bg-primary-foreground text-primary font-mono text-xs tracking-[0.15em] uppercase px-5 py-3 min-h-[44px] hover:bg-primary-foreground/90 transition-colors"
          >
            Book My Visit
          </a>
        </motion.div>
      </div>
    </section>
  );
}