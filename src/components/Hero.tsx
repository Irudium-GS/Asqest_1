
import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-primary min-h-[600px] flex flex-col justify-center">
      {/* Neural network animation background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop')] opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-primary animate-neural-flow bg-[length:400%_400%]"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-6 max-w-3xl mx-auto">
          Optimized Network Infrastructure Engineered for High-Speed Performance
        </h1>
        <p className="text-xl md:text-2xl text-light-gray mb-10">
          Boost Your Network
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link 
            to="/contact" 
            className="px-8 py-3 bg-white text-primary font-medium rounded-md shadow-lg hover:bg-light-gray transition-colors"
          >
            Connect with us today!
          </Link>
          <Link 
            to="/services" 
            className="px-8 py-3 bg-transparent border-2 border-white text-white font-medium rounded-md hover:bg-white hover:text-primary transition-colors"
          >
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
