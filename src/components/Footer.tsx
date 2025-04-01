
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-secondary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <Link to="/" className="text-2xl font-bold mb-4 inline-block">NetworkHub</Link>
            <p className="text-gray-300 mt-2 mb-4">
              Providing top-quality network infrastructure solutions and services to businesses of all sizes.
              Our expertise ensures reliable, secure, and high-performance networks.
            </p>
          </div>

          {/* Our Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">Our Services</h3>
            <ul className="space-y-2">
              <li><Link to="/services/structure-cabling" className="text-gray-300 hover:text-white">Structure Cabling</Link></li>
              <li><Link to="/services/network-consulting" className="text-gray-300 hover:text-white">Network Consulting</Link></li>
              <li><Link to="/services/cctv-wifi" className="text-gray-300 hover:text-white">CCTV / WIFI Access</Link></li>
              <li><Link to="/services/annual-maintenance" className="text-gray-300 hover:text-white">Annual Maintenance</Link></li>
              <li><Link to="/maintenance/ac-maintenance" className="text-gray-300 hover:text-white">AC Maintenance</Link></li>
              <li><Link to="/maintenance/electrical" className="text-gray-300 hover:text-white">Electrical Maintenance</Link></li>
            </ul>
          </div>

          {/* Enquiry Now */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">Enquiry Now</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone className="mr-2 h-5 w-5 text-gray-300 mt-0.5" />
                <div>
                  <p className="font-medium">Chat</p>
                  <p className="text-gray-300">624-646-464</p>
                </div>
              </li>
              <li className="flex items-start">
                <Mail className="mr-2 h-5 w-5 text-gray-300 mt-0.5" />
                <div>
                  <p className="font-medium">For Business</p>
                  <a href="mailto:jasda@gmail.com" className="text-gray-300 hover:text-white">jasda@gmail.com</a>
                </div>
              </li>
              <li className="flex items-start">
                <Mail className="mr-2 h-5 w-5 text-gray-300 mt-0.5" />
                <div>
                  <p className="font-medium">For Sales</p>
                  <a href="mailto:dkjbd@gmail.com" className="text-gray-300 hover:text-white">dkjbd@gmail.com</a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-4 border-t border-gray-700 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} NetworkHub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
