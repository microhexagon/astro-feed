import React from 'react';
import { Launch } from './types';
import LaunchCard from './LaunchCard';

interface LaunchSectionProps {
  title: string;
  launches: Launch[];
  isLaterSection?: boolean;
  emptyMessage: string;
}

const LaunchSection: React.FC<LaunchSectionProps> = ({ 
  title, 
  launches, 
  isLaterSection = false, 
  emptyMessage 
}) => (
  <section>
    <h2 className="text-xl font-semibold text-white mb-4">{title}</h2>
    {launches.length > 0 ? (
      launches.map((launch) => (
        <LaunchCard 
          key={launch.id} 
          launch={launch} 
          isLaterSection={isLaterSection} 
        />
      ))
    ) : (
      <div className="bg-slate-800 rounded-lg p-6 text-center text-gray-400">
        {emptyMessage}
      </div>
    )}
  </section>
);

export default LaunchSection;