
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the form data to your backend
    
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
    
    alert("Thank you for your message! We'll get back to you soon.");
  };

  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary mb-4">Contact Us</h2>
          <p className="text-secondary max-w-2xl mx-auto">
            Have questions about our services? Ready to boost your network infrastructure?
            Get in touch with our team today.
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="flex items-start">
              <div className="bg-light-gray p-3 rounded-full mr-4">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-medium text-primary mb-1">Phone</h3>
                <p className="text-secondary">624-646-464</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-light-gray p-3 rounded-full mr-4">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-medium text-primary mb-1">Email</h3>
                <p className="text-secondary">For Business: jasda@gmail.com</p>
                <p className="text-secondary">For Sales: dkjbd@gmail.com</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-light-gray p-3 rounded-full mr-4">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-medium text-primary mb-1">Office</h3>
                <p className="text-secondary">123 Network Street, Tech City</p>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-light-gray p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-primary mb-6">Send us a message</h3>
            
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-secondary mb-1">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-secondary mb-1">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>
              </div>
              
              <div className="mt-6">
                <label htmlFor="phone" className="block text-secondary mb-1">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              
              <div className="mt-6">
                <label htmlFor="message" className="block text-secondary mb-1">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="mt-6 bg-primary text-white px-6 py-3 rounded flex items-center justify-center hover:bg-opacity-90 transition-colors"
              >
                Send Message <Send size={16} className="ml-2" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
