
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ServicesSection from '@/components/ServicesSection';

const OurServices = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Services Banner */}
        <div className="bg-primary py-16 px-4">
          <div className="container mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Services</h1>
            <div className="flex items-center text-white">
              <Link to="/" className="hover:underline">Home</Link>
              <span className="mx-2">/</span>
              <span>Our Services</span>
            </div>
          </div>
        </div>

        {/* Import Services Section from Home */}
        <ServicesSection />
      </main>
      <Footer />
    </div>
  );
};

export default OurServices;
