import React from 'react';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import SectionLabel from './SectionLabel';

const BRANCHES = [
  {
    name: 'MATINA',
    address: '3rd Floor MGR Building, Matina Crossing, Davao City',
    schedule: [
      { service: 'Gym', time: 'Open Daily' },
      { service: 'Zumba', time: '8AM & 6PM' },
    ],
  },
  {
    name: 'LANANG',
    address: 'Top Floor SPK Building, Lanang, Davao City',
    schedule: [
      { service: 'Boxing & Gym', time: 'Open Daily' },
      { service: 'Zumba', time: '6:30AM' },
    ],
  },
  {
    name: 'DUTERTE',
    address: '2nd Floor Times Square Tionko Bldg., Gov. Duterte Street, Davao City',
    schedule: [
      { service: 'Gym', time: 'Open Daily' },
      { service: 'Zumba', time: '8AM & 6PM' },
    ],
  },
  {
    name: 'BAJADA',
    address: 'Former M-M Marble Bldg., J.P. Laurel Ave., Davao City',
    schedule: [
      { service: 'Gym', time: 'Open Daily' },
      { service: 'Zumba', time: '8AM & 6PM' },
    ],
  },
];

export default function BranchesSection() {
  return (
    <section id="branches" className="px-6 md:px-12 py-16 md:py-24 border-t border-border">
      <SectionLabel number="07" label="Our Locations" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
        {BRANCHES.map((branch, i) => (
          <motion.div
            key={branch.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="bg-background p-6 md:p-8 group hover:bg-card transition-colors"
          >
            {/* Branch name */}
            <div className="border border-primary/30 group-hover:border-primary transition-colors mb-5 px-4 py-3 inline-block">
              <span className="font-heading font-bold text-xl text-primary tracking-widest">
                {branch.name}
              </span>
            </div>

            {/* Address */}
            <div className="flex gap-2 mb-5">
              <MapPin className="w-4 h-4 text-muted-foreground flex-shrink-0 mt-0.5" />
              <p className="font-body text-muted-foreground text-sm leading-relaxed">{branch.address}</p>
            </div>

            {/* Schedule */}
            <div className="border-t border-border pt-4">
              <span className="font-mono text-[10px] tracking-[0.2em] text-muted-foreground uppercase block mb-3">
                Schedule
              </span>
              <div className="space-y-1.5">
                {branch.schedule.map((s) => (
                  <div key={s.service} className="flex items-center justify-between">
                    <span className="font-mono text-xs text-foreground">{s.service}</span>
                    <span className="font-mono text-xs text-primary">{s.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}