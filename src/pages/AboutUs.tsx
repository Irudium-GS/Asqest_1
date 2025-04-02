
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Check } from 'lucide-react';

const AboutUs = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* About Us Banner */}
        <div className="bg-primary py-16 px-4">
          <div className="container mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">About Us</h1>
            <div className="flex items-center text-white">
              <Link to="/" className="hover:underline">Home</Link>
              <span className="mx-2">/</span>
              <span>About Us</span>
            </div>
          </div>
        </div>

        {/* About Brand Section */}
        <div className="py-16 px-4">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-primary mb-8 text-center">About Our Brand</h2>
              <div className="space-y-6 text-gray-700">
                <p>
                  At Ali Saleh Al-Qahthani Trading Est., we pride ourselves on delivering comprehensive network infrastructure solutions that empower businesses across Saudi Arabia. With our headquarters in Dhahran and branches in Riyadh, Dammam, Khobar, and Jeddah, we maintain a strong presence throughout the Kingdom.
                </p>
                <p>
                  Established with a vision to bridge the gap in professional networking services, we've grown into a trusted partner for organizations seeking reliable, high-performance network solutions. Our team consists of certified professionals who bring expertise and dedication to every project we undertake.
                </p>
                <p>
                  We believe that a robust network infrastructure is the backbone of modern business operations. That's why we invest in continuous learning and state-of-the-art technologies to ensure that our clients receive solutions that not only meet today's needs but are also prepared for tomorrow's challenges.
                </p>
                <p>
                  Our commitment to excellence, integrity, and customer satisfaction has earned us the trust of numerous clients across various industries. We approach each project with meticulous attention to detail, ensuring that every solution we deliver is tailored to the specific needs and goals of our clients.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="py-16 px-4 bg-light-gray">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              {/* Right side - Image */}
              <div className="order-2 md:order-1">
                <img
                  src="https://images.unsplash.com/photo-1573164574572-cb89e39749b4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
                  alt="Network Infrastructure"
                  className="rounded-lg shadow-lg w-full h-auto"
                />
              </div>
              
              {/* Left side - Content */}
              <div className="order-1 md:order-2">
                <h2 className="text-3xl font-bold text-primary mb-6">Why Choose Us</h2>
                <p className="text-gray-700 mb-8">
                  We combine technical expertise with a customer-centric approach to deliver networking solutions that drive business efficiency and growth. Our team of certified professionals ensures that every project is executed to the highest standards.
                </p>
                
                <h3 className="text-xl font-semibold text-secondary mb-3">Structured Cabling Services</h3>
                <p className="text-gray-700 mb-6">
                  Our structured cabling solutions provide the foundation for your network infrastructure. We design and implement organized, efficient, and scalable cabling systems that support current needs while accommodating future growth and technological advancements.
                </p>
                
                <h3 className="text-xl font-semibold text-secondary mb-3">Network Consulting</h3>
                <p className="text-gray-700">
                  Our network consulting services offer expert guidance on network design, optimization, and security. We analyze your current infrastructure, identify areas for improvement, and develop strategies to enhance performance, reliability, and security.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Team Certification Section */}
        <div className="py-16 px-4">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-primary mb-8 text-center">Own Team for Execution</h2>
              <h3 className="text-xl font-semibold text-center mb-6">All of them are Certified Members of Cisco</h3>
              
              <div className="bg-white rounded-lg shadow-lg p-8">
                <div className="space-y-6">
                  <div className="flex items-start">
                    <Check className="h-6 w-6 text-green-500 mr-4 mt-1 flex-shrink-0" />
                    <p className="text-gray-700">
                      Having Good Knowledge and skills in handling Switching, Routing, Firewall & Access System
                    </p>
                  </div>
                  
                  <div className="flex items-start">
                    <Check className="h-6 w-6 text-green-500 mr-4 mt-1 flex-shrink-0" />
                    <p className="text-gray-700">24/7 support</p>
                  </div>
                  
                  <div className="flex items-start">
                    <Check className="h-6 w-6 text-green-500 mr-4 mt-1 flex-shrink-0" />
                    <p className="text-gray-700">
                      Strong Relationship with Cisco sales and support team. Certified engineers
                    </p>
                  </div>
                </div>
                
                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-light-gray p-4 rounded-lg">
                    <p className="font-semibold">CCNA – SIX</p>
                  </div>
                  <div className="bg-light-gray p-4 rounded-lg">
                    <p className="font-semibold">CCDA – FOUR</p>
                  </div>
                  <div className="bg-light-gray p-4 rounded-lg">
                    <p className="font-semibold">CCNP Routing & Switching – FOUR</p>
                  </div>
                  <div className="bg-light-gray p-4 rounded-lg">
                    <p className="font-semibold">CCNP Firewall & Security – FOUR</p>
                  </div>
                  <div className="bg-light-gray p-4 rounded-lg">
                    <p className="font-semibold">CCSP – TWO</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AboutUs;
