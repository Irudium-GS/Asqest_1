
import React, { useState } from 'react';
import { Search, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface NavItem {
  title: string;
  href: string;
  children?: NavItem[];
}

const navigationItems: NavItem[] = [
  { title: 'Home', href: '/' },
  { 
    title: 'Our Services', 
    href: '/services',
    children: [
      { title: 'Structure Cabling', href: '/services/structure-cabling' },
      { title: 'Network Consulting', href: '/services/network-consulting' },
      { title: 'CCTV / WIFI Access', href: '/services/cctv-wifi' },
      { title: 'Annual Maintenance', href: '/services/annual-maintenance' },
    ] 
  },
  { 
    title: 'Maintenance Services', 
    href: '/maintenance',
    children: [
      { title: 'AC Maintenance', href: '/maintenance/ac-maintenance' },
      { title: 'Electrical Maintenance', href: '/maintenance/electrical' },
      { title: 'Commercial Building Maintenance', href: '/maintenance/building' },
      { title: 'Painting and Decorating Service', href: '/maintenance/painting' },
      { title: 'Plumbing Service', href: '/maintenance/plumbing' },
    ]
  },
  { 
    title: 'Digital Marketing', 
    href: '/digital-marketing',
    children: [
      { title: 'Create Your Website', href: '/digital-marketing/website' },
    ]
  },
  { title: 'About Us', href: '/about' },
  { title: 'Contact Us', href: '/contact' },
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleDropdown = (title: string) => {
    setActiveDropdown(activeDropdown === title ? null : title);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
    setSearchOpen(false);
    // Here you would implement actual search functionality
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="text-primary font-bold text-xl">
                NetworkHub
              </Link>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            {navigationItems.map((item) => (
              <div key={item.title} className="relative group">
                <button
                  onClick={() => item.children && toggleDropdown(item.title)}
                  className="px-3 py-2 text-secondary hover:text-primary flex items-center"
                >
                  {item.title}
                  {item.children && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className={`h-4 w-4 ml-1 transition-transform ${
                        activeDropdown === item.title ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </button>
                {item.children && (
                  <div
                    className={cn(
                      "absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 transition-all origin-top-right",
                      activeDropdown === item.title ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
                    )}
                  >
                    <div className="py-1">
                      {item.children.map((child) => (
                        <Link
                          key={child.title}
                          to={child.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary hover:text-white"
                          onClick={() => setActiveDropdown(null)}
                        >
                          {child.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
            
            {/* Search icon */}
            <button 
              onClick={() => setSearchOpen(!searchOpen)}
              className="p-2 rounded-full text-secondary hover:text-primary focus:outline-none"
            >
              <Search size={20} />
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-secondary hover:text-primary focus:outline-none"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${mobileMenuOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navigationItems.map((item) => (
            <div key={item.title}>
              <button
                onClick={() => item.children && toggleDropdown(item.title)}
                className="w-full text-left px-3 py-2 text-secondary hover:text-primary flex justify-between items-center"
              >
                {item.title}
                {item.children && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-4 w-4 transition-transform ${
                      activeDropdown === item.title ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                )}
              </button>
              {item.children && activeDropdown === item.title && (
                <div className="pl-4 py-2 space-y-1">
                  {item.children.map((child) => (
                    <Link
                      key={child.title}
                      to={child.href}
                      className="block px-3 py-2 text-sm text-gray-600 hover:text-primary"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {child.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div className="px-3 py-2">
            <button 
              onClick={() => setSearchOpen(!searchOpen)} 
              className="flex items-center text-secondary hover:text-primary"
            >
              <Search size={18} className="mr-2" />
              Search
            </button>
          </div>
        </div>
      </div>

      {/* Search overlay */}
      {searchOpen && (
        <div className="absolute inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
          <div className="w-full max-w-2xl bg-white p-4 rounded-lg mx-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-medium">Search</h3>
              <button onClick={() => setSearchOpen(false)} className="text-gray-500 hover:text-gray-700">
                <X size={20} />
              </button>
            </div>
            <form onSubmit={handleSearchSubmit}>
              <div className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search..."
                  className="w-full border border-gray-300 rounded-md py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              </div>
              <div className="flex justify-end mt-4">
                <button
                  type="submit"
                  className="bg-primary text-white px-4 py-2 rounded-md hover:bg-opacity-90 transition-colors"
                >
                  Search
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
