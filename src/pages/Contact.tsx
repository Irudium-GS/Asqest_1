
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Mail, Phone, Clock, MapPin } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Contact Banner */}
        <div className="bg-primary py-16 px-4">
          <div className="container mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Contact Us</h1>
            <div className="flex items-center text-white">
              <Link to="/" className="hover:underline">Home</Link>
              <span className="mx-2">/</span>
              <span>Contact Us</span>
            </div>
          </div>
        </div>

        {/* Contact Info Section */}
        <div className="py-16 px-4">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Left Container - Office Information */}
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-bold text-primary mb-6">Office Address</h2>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <MapPin className="h-6 w-6 text-primary mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-lg">ALI SALEH AL-QAHTHANI TRADING EST.</h3>
                      <p className="text-gray-600">
                        Dhahran - Doha Area - Abdullah Bin Al Abbas St.<br />
                        Near of Al-Gossaibi Mosque - Kingdom of Saudi Arabia.<br />
                        <span className="font-medium">Zip code / postal code</span>
                      </p>
                      <p className="mt-3">
                        <span className="font-medium">Branches:</span> Riyadh | Dammam | Khobar | Jeddah
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Phone className="h-6 w-6 text-primary mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <p className="mb-2">
                        <span className="font-medium">Networking Service:</span> +966 56134 6255
                      </p>
                      <p>
                        <span className="font-medium">Maintenance Service:</span> +966 54375 1576
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Mail className="h-6 w-6 text-primary mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <p className="mb-2">
                        <span className="font-medium">General Inquiries:</span><br />
                        <a href="mailto:alisalehalqathani@gmail.com" className="text-primary hover:underline">
                          alisalehalqathani@gmail.com
                        </a>
                      </p>
                      <p className="mb-2">
                        <span className="font-medium">Business Executive:</span><br />
                        <a href="mailto:jalal@asqest.com" className="text-primary hover:underline">
                          jalal@asqest.com
                        </a>
                      </p>
                      <p>
                        <span className="font-medium">Sales Executive:</span><br />
                        <a href="mailto:ibrahim@asqest.com" className="text-primary hover:underline">
                          ibrahim@asqest.com
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Clock className="h-6 w-6 text-primary mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold mb-2">Business Hours</h3>
                      <p className="mb-1">Monday - Thursday: 8:00 AM - 8:00 PM</p>
                      <p className="mb-1">Saturday: 8:00 AM - 8:00 PM</p>
                      <p>Friday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Container - Contact Form */}
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-bold text-primary mb-6">Send Us a Message</h2>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">Your Name</label>
                      <Input
                        id="name"
                        type="text"
                        placeholder="Enter your name"
                        className="w-full"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">Your Email</label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Enter your email"
                        className="w-full"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                    <Input
                      id="subject"
                      type="text"
                      placeholder="Enter subject"
                      className="w-full"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">Message</label>
                    <Textarea
                      id="message"
                      placeholder="Type your message here..."
                      className="w-full min-h-[150px]"
                    />
                  </div>

                  <Button type="submit" className="w-full md:w-auto">
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
