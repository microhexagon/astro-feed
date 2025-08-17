// components/LaunchCard.tsx
import React from 'react';
import { Image } from 'lucide-react';
import { Launch } from '@/data/type';
import { formatDate, getImageUrl } from '@/data/utils';

interface LaunchCardProps {
  launch: Launch;
  isLaterSection?: boolean;
}

export const LaunchCard: React.FC<LaunchCardProps> = ({ 
  launch, 
  isLaterSection = false 
}) => {
  const imageUrl = getImageUrl(launch);
  const launchDateTime = new Date(launch.window_start);

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const target = e.currentTarget as HTMLImageElement;
    target.style.display = 'none';
    const fallback = target.nextElementSibling as HTMLElement;
    if (fallback) {
      fallback.style.display = 'flex';
    }
  };

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

      <div className="w-full h-32 md:w-40 md:h-auto flex-shrink-0">
        {imageUrl ? (
          <div className="h-full w-full bg-slate-700 relative">
            <img
              src={imageUrl}
              alt={launch.name || "Rocket launch"}
              className="w-full h-full object-cover"
              onError={handleImageError}
            />
            <div className="absolute inset-0 bg-gradient-to-l from-transparent to-slate-800/20"></div>
            <div
              className="absolute inset-0 bg-slate-800 flex items-center justify-center"
              style={{ display: 'none' }}
            >
              <Image className="text-slate-500" size={32} />
            </div>
          </div>
        ) : (
          <div className="h-full w-full bg-slate-700 flex items-center justify-center">
            <Image className="text-slate-500" size={32} />
          </div>
        )}
      </div>
    </div>
  );
};