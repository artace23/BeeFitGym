
import React from 'react';
import Navbar from '../components/landing/Navbar';
import HeroSection from '../components/landing/HeroSection';
import ServicesSection from '../components/landing/ServicesSection';
import PricingSection from '../components/landing/PricingSection';
import BranchesSection from '../components/landing/BranchesSection';
import ReviewsSection from '../components/landing/ReviewsSection';
import ProcessSection from '../components/landing/ProcessSection';
import AboutSection from '../components/landing/AboutSection';
import ContactSection from '../components/landing/ContactSection';
import Footer from '../components/landing/Footer';

const HERO_IMAGE = 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=2070';
const SERVICE_IMAGES = [
  'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=2070',
  'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=2070',
  'https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&q=80&w=2070',
];
const ABOUT_IMAGE = 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&q=80&w=2070';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection heroImage={HERO_IMAGE} />
        <ServicesSection images={SERVICE_IMAGES} />
        <PricingSection />
        <BranchesSection />
        <ReviewsSection />
        <ProcessSection />
        <AboutSection aboutImage={ABOUT_IMAGE} />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}