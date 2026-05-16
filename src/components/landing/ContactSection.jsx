import React from 'react';
import { motion } from 'framer-motion';
import { Phone, MessageSquare, MapPin } from 'lucide-react';
import SectionLabel from './SectionLabel';

const CONTACT_CHANNELS = [
  {
    icon: MessageSquare,
    label: 'Messenger',
    value: 'BeeFit Gym Prime',
    href: 'https://www.facebook.com/messages/t/beefitgymdvo/',
    description: 'Chat with us on Facebook',
    featured: true
  },
  {
    icon: Phone,
    label: 'Call Us',
    value: '(082) 333 3485',
    href: 'tel:+63823333485',
    description: 'Speak with our team'
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Get Directions',
    href: 'https://www.google.com/maps/search/?api=1&query=BeeFit+Gym+Prime+Time+Square+Tionko+Building+Davao',
    description: 'Visit our Davao facility'
  }
];

export default function ContactSection() {
  return (
    <section id="contact" className="px-6 md:px-12 py-16 md:py-24 border-t border-border">
      <SectionLabel number="08" label="Contact" />

      <div className="grid md:grid-cols-2 gap-px bg-border">
        {/* NAP Block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-background p-6 md:p-10 lg:p-14"
        >
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-8">
            BeeFit Gym Prime
          </h2>
          <div className="space-y-4 mb-10">
            <p className="font-body text-muted-foreground text-base leading-relaxed">
              2nd Floor, Time Square Tionko Building, Gov Duterte St, Poblacion District, Davao City, 8000 Davao del Sur, Philippines
            </p>
          </div>

          <div className="border-t border-border pt-6">
            <span className="font-mono text-[10px] tracking-[0.2em] text-muted-foreground uppercase block mb-3">
              Operating Hours
            </span>
            <div className="grid grid-cols-2 gap-2">
              <span className="font-mono text-xs text-foreground">Mon - Sat</span>
              <span className="font-mono text-xs text-muted-foreground">5:00 AM - 12:00 AM</span>
              <span className="font-mono text-xs text-foreground">Sunday</span>
              <span className="font-mono text-xs text-muted-foreground">Closed</span>
            </div>
          </div>
        </motion.div>

        {/* Contact Grid */}
        <div className="bg-border grid grid-cols-1 sm:grid-cols-2 gap-px">
          {CONTACT_CHANNELS.map((channel, i) => (
            <motion.a
              key={channel.label}
              href={channel.href}
              target={channel.href.startsWith('http') ? '_blank' : undefined}
              rel={channel.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`bg-background p-8 flex flex-col justify-between hover:bg-card transition-all group border border-transparent hover:border-primary/20 ${
                channel.featured ? 'sm:col-span-2' : ''
              }`}
            >
              <div>
                <div className="w-10 h-10 border border-border flex items-center justify-center mb-6 group-hover:border-primary/50 group-hover:bg-primary/5 transition-colors">
                  <channel.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-mono text-[10px] tracking-[0.2em] text-muted-foreground uppercase mb-2">
                  {channel.label}
                </h3>
                <p className={`font-heading font-bold text-foreground mb-1 ${
                  channel.featured ? 'text-2xl' : 'text-lg'
                }`}>
                  {channel.value}
                </p>
              </div>
              <p className="font-body text-xs text-muted-foreground mt-4 group-hover:text-primary/80 transition-colors">
                {channel.description} →
              </p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}