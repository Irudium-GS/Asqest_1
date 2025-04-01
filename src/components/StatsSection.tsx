
import React from 'react';

interface StatItemProps {
  value: string;
  label: string;
}

const StatItem = ({ value, label }: StatItemProps) => {
  return (
    <div className="text-center">
      <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{value}</div>
      <div className="text-secondary">{label}</div>
    </div>
  );
};

const StatsSection = () => {
  return (
    <div className="py-12 bg-light-gray">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <StatItem value="10+" label="Clients" />
          <StatItem value="150+" label="Projects" />
          <StatItem value="3+" label="Years" />
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
