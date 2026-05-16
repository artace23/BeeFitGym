import React from 'react';
import { motion } from 'framer-motion';

export default function ServiceCard({ number, title, problem, agitate, solution, cta, image, imageAlt, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="group border border-border hover:border-primary/40 transition-colors"
    >
      <div className="grid md:grid-cols-2">
        {/* Image */}
        <div className="relative aspect-[4/3] md:aspect-auto overflow-hidden">
          <img
            src={image}
            alt={imageAlt}
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
            loading="lazy"
          />
          <div className="absolute top-0 right-0 p-4">
            <span className="font-mono text-3xl font-bold text-primary">{number}</span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 md:p-8 lg:p-10 flex flex-col justify-center">
          <h3 className="font-heading font-bold text-2xl md:text-3xl text-foreground mb-6">{title}</h3>
          
          <div className="space-y-4 mb-8">
            <div>
              <span className="font-mono text-[10px] tracking-[0.2em] text-primary uppercase block mb-1">Problem</span>
              <p className="font-body text-muted-foreground text-base leading-relaxed">{problem}</p>
            </div>
            <div>
              <span className="font-mono text-[10px] tracking-[0.2em] text-primary uppercase block mb-1">Agitate</span>
              <p className="font-body text-muted-foreground text-base leading-relaxed">{agitate}</p>
            </div>
            <div>
              <span className="font-mono text-[10px] tracking-[0.2em] text-primary uppercase block mb-1">Solution</span>
              <p className="font-body text-foreground text-base leading-relaxed">{solution}</p>
            </div>
          </div>

          <a
            href="#contact"
            className="inline-flex items-center font-mono text-xs tracking-[0.15em] text-primary uppercase group/cta min-h-[44px]"
          >
            <span className="border-b-[3px] border-primary pb-1 group-hover/cta:pb-2 transition-all">
              {cta}
            </span>
          </a>
        </div>
      </div>
    </motion.div>
  );
}