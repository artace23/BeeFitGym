import React from 'react';
import { motion } from 'framer-motion';
import SectionLabel from './SectionLabel';

export default function AboutSection({ aboutImage }) {
  return (
    <section id="space" className="px-6 md:px-12 py-16 md:py-24 border-t border-border">
      <SectionLabel number="05" label="Our Space" />

      <div className="grid md:grid-cols-2 gap-px bg-border">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-background"
        >
          <img
            src={aboutImage}
            alt="Front desk area at Beefit Gym Prime with staff member and gym member in conversation"
            className="w-full h-full object-cover aspect-[3/2]"
            loading="lazy"
          />
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-background p-6 md:p-10 lg:p-14 flex flex-col justify-center"
        >
          <p className="font-body text-muted-foreground text-lg leading-relaxed mb-6">
            Beefit Gym Prime is a dedicated strength facility located in the heart of the Poblacion District. We have served the Davao City community for years, providing a raw environment where the focus remains on the weight and the work.
          </p>
          <p className="font-body text-muted-foreground text-lg leading-relaxed mb-8">
            Our facility is located on the 2nd floor and features a concrete-floor layout designed for high-intensity training. We are operated by local fitness experts who understand what it takes to build strength in a no-nonsense environment.
          </p>

          <div className="grid grid-cols-2 gap-px bg-border">
            <div className="bg-background pr-4 py-4">
              <span className="font-mono text-3xl text-primary font-bold">19</span>
              <span className="font-mono text-xs text-muted-foreground block tracking-[0.15em] uppercase mt-1">Hours Daily</span>
            </div>
            <div className="bg-background pl-4 py-4">
              <span className="font-mono text-3xl text-primary font-bold">4.8</span>
              <span className="font-mono text-xs text-muted-foreground block tracking-[0.15em] uppercase mt-1">Star Rating</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}