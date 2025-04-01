
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
}

const ServiceCard = ({ title, description, image, link }: ServiceCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:-translate-y-1 hover:shadow-xl">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-bold text-primary mb-2">{title}</h3>
        <p className="text-secondary mb-4">{description}</p>
        <Link
          to={link}
          className="inline-flex items-center text-primary font-medium hover:underline"
        >
          Read More <ArrowRight size={16} className="ml-1" />
        </Link>
      </div>
    </div>
  );
};

const ServicesSection = () => {
  const services = [
    {
      title: "AMC SERVICE",
      description: "Comprehensive annual maintenance contracts to ensure your network runs smoothly year-round.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      link: "/services/annual-maintenance"
    },
    {
      title: "CCTV/ACCESS/WIFI",
      description: "Secure your premises with advanced CCTV systems and provide seamless WiFi access throughout your facility.",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      link: "/services/cctv-wifi"
    },
    {
      title: "NETWORK CONSULTING",
      description: "Expert advice on network design, optimization, security, and performance improvement.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      link: "/services/network-consulting"
    },
    {
      title: "STRUCTURED CABLING",
      description: "Professional installation of organized, efficient, and scalable network cabling infrastructure.",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      link: "/services/structure-cabling"
    }
  ];

  return (
    <div className="py-16 bg-light-gray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary mb-4">Our Services</h2>
          <p className="text-secondary max-w-2xl mx-auto">
            We offer a comprehensive range of network infrastructure services designed to 
            meet the unique needs of your business. Explore our offerings below:
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              image={service.image}
              link={service.link}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
