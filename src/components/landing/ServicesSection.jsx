import React from 'react';
import SectionLabel from './SectionLabel';
import ServiceCard from './ServiceCard';

const SERVICES = [
  {
    number: '01',
    title: 'Heavy Strength Training',
    problem: 'Most commercial gyms have rules against heavy lifting and noise.',
    agitate: 'It is hard to progress when you are worried about dropping weights or taking up space.',
    solution: 'We provide the iron plates and the concrete floors you need to lift heavy without distraction.',
    cta: 'See My Equipment',
  },
  {
    number: '02',
    title: 'Cardio and Conditioning',
    problem: 'You need a place to get your heart rate up without waiting for a machine.',
    agitate: 'Spending twenty minutes of your hour-long workout standing around is a waste of time.',
    solution: 'Our layout includes dedicated cardio zones and functional equipment to keep your heart rate high.',
    cta: 'Book My Tour',
  },
  {
    number: '03',
    title: 'In-House Nutrition Shop',
    problem: 'Forgetting your post-workout drink can stall your progress for the day.',
    agitate: 'Finding a shop after a late-night session is nearly impossible in some parts of the city.',
    solution: 'We sell water and protein shakes at the front desk so you can refuel before you leave.',
    cta: 'Check My Flavors',
  },
];

export default function ServicesSection({ images }) {
  const imageAlts = [
    'Close-up of a barbell with iron plates gripped by chalked hands in a Davao City gym',
    'Athlete on rowing machine mid-pull with sweat visible in high contrast lighting',
    'Protein shake and water bottle on a black metal counter with hard directional lighting',
  ];

  return (
    <section id="services" className="px-6 md:px-12 py-16 md:py-24">
      <SectionLabel number="02" label="Services" />
      <div className="space-y-px">
        {SERVICES.map((service, i) => (
          <ServiceCard
            key={service.number}
            {...service}
            image={images[i]}
            imageAlt={imageAlts[i]}
            index={i}
          />
        ))}
      </div>
    </section>
  );
}