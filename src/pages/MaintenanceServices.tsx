
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

const serviceCards = [
  {
    title: 'AC Maintenance',
    description: 'Keep your air conditioning systems running efficiently with our comprehensive maintenance services.',
    image: 'https://images.unsplash.com/photo-1581275870229-439530649573?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    link: '/maintenance/ac-maintenance'
  },
  {
    title: 'Electrical Maintenance',
    description: 'Ensure the safety and efficiency of your electrical systems with our professional maintenance services.',
    image: 'https://images.unsplash.com/photo-1555963966-b7ae5404b6ed?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    link: '/maintenance/electrical'
  },
  {
    title: 'Commercial Building Maintenance',
    description: 'Comprehensive maintenance solutions for all aspects of your commercial building.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    link: '/maintenance/building'
  },
  {
    title: 'Painting and Decorating Service',
    description: 'Professional painting and decorating services to refresh and enhance your property.',
    image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    link: '/maintenance/painting'
  },
  {
    title: 'Plumbing Service',
    description: 'Expert plumbing services to address all your residential and commercial plumbing needs.',
    image: 'https://images.unsplash.com/photo-1542013936693-884638332954?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    link: '/maintenance/plumbing'
  }
];

const MaintenanceServices = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Maintenance Banner */}
        <div className="bg-primary py-16 px-4">
          <div className="container mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Maintenance Services</h1>
            <div className="flex items-center text-white">
              <Link to="/" className="hover:underline">Home</Link>
              <span className="mx-2">/</span>
              <span>Maintenance Services</span>
            </div>
          </div>
        </div>

        {/* Maintenance Services Intro */}
        <div className="py-16 px-4 bg-light-gray">
          <div className="container mx-auto">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-primary mb-6">All Maintenance Services</h2>
              <p className="text-lg text-gray-700">
                <span className="font-semibold">Your one-stop solution for all maintenance needs:</span> From minor repairs to major overhauls, we provide a wide array of maintenance services to keep your property running smoothly and efficiently, saving you time and hassle.
              </p>
            </div>
          </div>
        </div>

        {/* Maintenance Service Cards */}
        <div className="py-16 px-4">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {serviceCards.map((service, index) => (
                <Card key={index} className="overflow-hidden transition-transform hover:-translate-y-1 hover:shadow-xl">
                  <div className="h-48 w-full overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-primary">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base text-gray-700">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                  <CardFooter>
                    <Button asChild variant="outline" className="w-full">
                      <Link to={service.link} className="inline-flex items-center justify-center">
                        Learn More <ArrowRight size={16} className="ml-2" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MaintenanceServices;
