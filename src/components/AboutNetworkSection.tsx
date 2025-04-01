
import React from 'react';

const AboutNetworkSection = () => {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Network Image */}
          <div className="w-full md:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1518770660439-4636190af475?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop"
              alt="Global Network"
              className="rounded-lg shadow-xl w-full h-auto"
            />
          </div>

          {/* Content */}
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-bold text-primary mb-4">Building Powerful Network Solutions</h2>
            <p className="text-secondary leading-relaxed mb-6">
              At NetworkHub, we specialize in designing, implementing, and maintaining robust network 
              infrastructures that power modern businesses. Our team of certified professionals ensures
              that your network is secure, reliable, and optimized for maximum performance.
            </p>
            <p className="text-secondary leading-relaxed">
              Whether you need a completely new network setup, an upgrade to existing infrastructure, 
              or ongoing maintenance and support, our comprehensive services have you covered. We leverage 
              the latest technologies and industry best practices to deliver solutions that grow with your business.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutNetworkSection;
