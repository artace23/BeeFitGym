import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import SectionLabel from './SectionLabel';

const REVIEWS = [
  {
    text: "Apo view hotel didn't have a gym but this one is in close walking distance. Great gym, no AC but I didn't mind that at all, works up a good sweat. Water and protein shakes for sale at front desk.",
    name: 'Jamaal G',
    tag: 'DAVAO_CITY // VISITOR',
  },
  {
    text: "The gym has all the equipment you need for an effective workout, whether you're lifting or doing cardio. Definitely a great place to get your workouts in. And the staff is always friendly and approachable.",
    name: 'andrew suyom',
    tag: 'DAVAO_CITY // MEMBER',
  },
  {
    text: "Used to be the best gym for me but then they started putting lock on the room where you can do yoga and stretching. Outside of that isn't spacious and a lot are doing their workouts there. I just feel sad about it. Hope they will open it again for others.",
    name: 'Divina Grace Maulit',
    tag: 'DAVAO_CITY // HONEST FEEDBACK',
  },
];

export default function ReviewsSection() {
  return (
    <section id="reviews" className="px-6 md:px-12 py-16 md:py-24 border-t border-border">
      <SectionLabel number="03" label="Reviews" />

      <div className="grid md:grid-cols-3 gap-px bg-border">
        {REVIEWS.map((review, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="bg-background p-6 md:p-8 flex flex-col"
          >
            <div className="flex gap-0.5 mb-4">
              {Array(5).fill(0).map((_, j) => (
                <Star key={j} className={`w-3.5 h-3.5 ${j < (i === 2 ? 3 : 5) ? 'fill-primary text-primary' : 'text-border'}`} />
              ))}
            </div>

            <blockquote className="font-body text-muted-foreground text-base leading-relaxed flex-1 mb-6">
              "{review.text}"
            </blockquote>

            <div className="border-t border-border pt-4">
              <span className="font-mono text-xs tracking-[0.1em] text-foreground block">{review.name}</span>
              <span className="font-mono text-[10px] tracking-[0.2em] text-muted-foreground uppercase">[{review.tag}]</span>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="flex items-center justify-center gap-3 mt-8 pt-8 border-t border-border">
        <div className="flex gap-0.5">
          {Array(5).fill(0).map((_, j) => (
            <Star key={j} className="w-4 h-4 fill-primary text-primary" />
          ))}
        </div>
        <span className="font-mono text-sm text-muted-foreground tracking-[0.05em]">
          4.8 stars from 91 reviews in Davao City
        </span>
      </div>
    </section>
  );
}