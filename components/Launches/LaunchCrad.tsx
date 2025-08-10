import React from 'react';
import { Launchestype } from '@/data/Launchestype';
import { LaunchesUtils } from '@/data/LaunchesUtils';
import LaunchImage from './LaunchImage';

interface LaunchCardProps {
  launch: Launch;
  isLaterSection?: boolean;
}

const LaunchCard: React.FC<LaunchCardProps> = ({ launch, isLaterSection = false }) => {
  const getImageUrl = (launch: Launch): string | null => {
    if (launch.image) return launch.image;
    if (launch.rocket?.configuration?.image_url) return launch.rocket.configuration.image_url;
    return null;
  };

  const imageUrl = getImageUrl(launch);
  const launchDateTime = new Date(launch.window_start);

  return (
    <div className="bg-slate-800 rounded-lg overflow-hidden shadow-sm flex flex-col md:flex-row mb-4">
      <div className="flex-1 p-4 md:p-6">
        <p className="text-gray-400 text-sm mb-1">
          {formatDate(launchDateTime, isLaterSection)}
        </p>
        <h2 className="text-lg font-semibold text-white mb-2">
          {launch.name}
        </h2>
        <p className="text-gray-400 text-sm line-clamp-2">
          Launch Site: {launch.pad?.location?.name || "Unknown Location"}, 
          Mission: {launch.mission?.description || "No mission description available."}
        </p>
      </div>
      <LaunchImage imageUrl={imageUrl} launchName={launch.name} />
    </div>
  );
};

export default LaunchCard;