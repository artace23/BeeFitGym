import React from 'react';
import { motion } from 'framer-motion';
import SectionLabel from './SectionLabel';

const STEPS = [
  {
    number: '01',
    title: 'Show Up',
    desc: 'Visit us at the Time Square Tionko Building during our 19 hours of operation.',
  },
  {
    number: '02',
    title: 'Pick My Plan',
    desc: 'Choose between a daily pass or a monthly membership with no hidden fees.',
  },
  {
    number: '03',
    title: 'Start My Lift',
    desc: 'Get immediate access to the floor and all the equipment you need.',
  },
];

export default function ProcessSection() {
  return (
    <section id="process" className="px-6 md:px-12 py-16 md:py-24 border-t border-border">
      <SectionLabel number="04" label="The Start" />

      <div className="grid md:grid-cols-3 gap-px bg-border">
        {STEPS.map((step, i) => (
          <motion.div
            key={step.number}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            className="bg-background p-6 md:p-10 relative group"
          >
            {/* Oversized number */}
            <span className="font-mono text-[6rem] md:text-[8rem] font-bold text-foreground/[0.04] absolute top-2 right-4 leading-none select-none pointer-events-none">
              {step.number}
            </span>

            <div className="relative">
              <span className="font-mono text-primary text-sm tracking-[0.1em] block mb-3">{step.number}</span>
              <h3 className="font-heading font-bold text-xl md:text-2xl text-foreground mb-3">{step.title}</h3>
              <p className="font-body text-muted-foreground text-base leading-relaxed">{step.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}