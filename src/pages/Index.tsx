
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import StatsSection from '@/components/StatsSection';
import AboutNetworkSection from '@/components/AboutNetworkSection';
import ServicesSection from '@/components/ServicesSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <StatsSection />
        <AboutNetworkSection />
        <ServicesSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
