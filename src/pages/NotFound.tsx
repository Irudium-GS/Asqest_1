
import React, { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow flex items-center justify-center bg-light-gray py-16">
        <div className="text-center px-4">
          <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
          <p className="text-xl text-secondary mb-8">Oops! Page not found</p>
          <Link to="/" className="px-6 py-3 bg-primary text-white rounded-md hover:bg-opacity-90 transition-colors">
            Return to Home
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
