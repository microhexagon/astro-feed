import React from 'react';
import { Image } from "lucide-react";

interface LaunchImageProps {
  imageUrl: string | null;
  launchName: string;
}

const LaunchImage: React.FC<LaunchImageProps> = ({ imageUrl, launchName }) => (
  <div className="w-full h-32 md:w-40 md:h-auto flex-shrink-0">
    {imageUrl ? (
      <div className="h-full w-full bg-slate-700 relative">
        <img
          src={imageUrl}
          alt={launchName || "Rocket launch"}
          className="w-full h-full object-cover"
          onError={(e) => {
            const target = e.currentTarget as HTMLImageElement;
            target.style.display = 'none';
            const fallback = target.nextElementSibling as HTMLElement;
            if (fallback) {
              fallback.style.display = 'flex';
            }
          }}
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
);

export default LaunchImage;