import React, { useState } from 'react';
import { motion } from 'framer-motion';

import { Phone } from 'lucide-react';
import SectionLabel from './SectionLabel';

const INQUIRY_TYPES = ['Membership', 'Day Pass', 'Personal Training'];

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', inquiry_type: '', message: '' });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    // Mock API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log('Form submitted:', form);
    setSubmitting(false);
    setSubmitted(true);
  };

  return (
    <section id="contact" className="px-6 md:px-12 py-16 md:py-24 border-t border-border">
      <SectionLabel number="06" label="Contact" />

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
            Beefit Gym Prime
          </h2>
          <div className="space-y-4 mb-10">
            <p className="font-body text-muted-foreground text-base leading-relaxed">
              2nd Floor, Time Square Tionko Building, Gov Duterte St, Poblacion District, Davao City, 8000 Davao del Sur, Philippines
            </p>
            <a
              href="tel:+63823333485"
              className="inline-flex items-center gap-2 font-mono text-sm text-primary hover:text-primary/80 transition-colors min-h-[44px]"
            >
              <Phone className="w-4 h-4" />
              (082) 333 3485
            </a>
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

          <div className="mt-10">
            <a
              href="#contact"
              className="group inline-flex items-center font-mono text-sm tracking-[0.1em] text-primary uppercase min-h-[44px]"
            >
              <span className="border-b-[3px] border-primary pb-1 group-hover:pb-2 transition-all">
                Book My Visit
              </span>
            </a>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-background p-6 md:p-10 lg:p-14"
        >
          {submitted ? (
            <div className="flex flex-col items-center justify-center h-full text-center py-16">
              <span className="font-mono text-primary text-5xl font-bold mb-4">OK</span>
              <p className="font-body text-foreground text-lg mb-2">Message received.</p>
              <p className="font-body text-muted-foreground text-base">We will get back to you within 24 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="font-mono text-[10px] tracking-[0.2em] text-muted-foreground uppercase block mb-2">
                  Name *
                </label>
                <input
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={handleChange}
                  className="w-full bg-transparent border-0 border-b border-border focus:border-primary outline-none font-body text-foreground text-base py-3 transition-colors placeholder:text-muted-foreground/50"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label className="font-mono text-[10px] tracking-[0.2em] text-muted-foreground uppercase block mb-2">
                  Email *
                </label>
                <input
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  className="w-full bg-transparent border-0 border-b border-border focus:border-primary outline-none font-body text-foreground text-base py-3 transition-colors placeholder:text-muted-foreground/50"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="font-mono text-[10px] tracking-[0.2em] text-muted-foreground uppercase block mb-2">
                  Phone *
                </label>
                <input
                  name="phone"
                  type="tel"
                  required
                  value={form.phone}
                  onChange={handleChange}
                  className="w-full bg-transparent border-0 border-b border-border focus:border-primary outline-none font-body text-foreground text-base py-3 transition-colors placeholder:text-muted-foreground/50"
                  placeholder="+63 XXX XXX XXXX"
                />
              </div>
              <div>
                <label className="font-mono text-[10px] tracking-[0.2em] text-muted-foreground uppercase block mb-2">
                  What You Need *
                </label>
                <select
                  name="inquiry_type"
                  required
                  value={form.inquiry_type}
                  onChange={handleChange}
                  className="w-full bg-transparent border-0 border-b border-border focus:border-primary outline-none font-body text-foreground text-base py-3 transition-colors appearance-none cursor-pointer"
                >
                  <option value="" className="bg-background text-muted-foreground">Select an option</option>
                  {INQUIRY_TYPES.map((type) => (
                    <option key={type} value={type} className="bg-background text-foreground">{type}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="font-mono text-[10px] tracking-[0.2em] text-muted-foreground uppercase block mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={3}
                  className="w-full bg-transparent border-0 border-b border-border focus:border-primary outline-none font-body text-foreground text-base py-3 transition-colors resize-none placeholder:text-muted-foreground/50"
                  placeholder="Anything else we should know"
                />
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="w-full bg-primary text-primary-foreground font-mono text-sm tracking-[0.15em] uppercase py-4 min-h-[44px] hover:bg-primary/90 transition-colors disabled:opacity-50"
              >
                {submitting ? 'Sending...' : 'Book My Visit'}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}