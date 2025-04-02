
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { MessageSquare } from 'lucide-react';

const DigitalMarketing = () => {
  const marketingImages = [
    'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60',
    'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60',
    'https://images.unsplash.com/photo-1533750516457-a7f992034fec?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60',
    'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60',
    'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60',
    'https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60',
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Digital Marketing Banner */}
        <div className="bg-primary py-16 px-4">
          <div className="container mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Digital Marketing</h1>
            <div className="flex items-center text-white">
              <Link to="/" className="hover:underline">Home</Link>
              <span className="mx-2">/</span>
              <span>Digital Marketing</span>
            </div>
          </div>
        </div>

        {/* Welcome Section */}
        <div className="py-16 px-4">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-primary mb-6">
                Welcome to Ali Saleh Al Qahthani, Your Partner in Digital Success!
              </h2>
              <p className="text-lg text-gray-700 mb-0">
                We're here to help your business thrive online. Whether you need to boost your visibility, 
                engage with your audience, or improve your website, we've got you covered. Our team is 
                dedicated to your success. Let's work together to make your digital dreams a reality!
              </p>
            </div>
          </div>
        </div>

        {/* About Our Digital Expertise */}
        <div className="py-16 px-4 bg-light-gray">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-gray-700 text-center">
                At Ali Saleh Al Qahthani, we're digital wizards dedicated to making your online presence shine. 
                With years of expertise and a knack for innovation, we craft tailored solutions to boost your digital success. 
                From SEO to social media and beyond, we're your go-to partner for digital excellence.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="py-16 px-4">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-lg text-gray-700 mb-8">
                Ready to take your online presence to the next level? Dive into our services and discover how 
                we can elevate your digital success. Whether you're curious about SEO, social media, or website design, 
                we're here to help. Contact us today to learn more and embark on your digital journey with Ali Saleh Al Qahthani!
              </p>
              
              <Button size="lg" className="mb-16">
                <MessageSquare className="mr-2" />
                Let's Chat With Us
              </Button>

              {/* Digital Marketing Images Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {marketingImages.map((image, index) => (
                  <div key={index} className="overflow-hidden rounded-lg shadow-lg transition-transform hover:scale-105">
                    <img
                      src={image}
                      alt={`Digital Marketing ${index + 1}`}
                      className="w-full h-64 object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DigitalMarketing;
