"use client";

import React from "react";
import { Image } from "lucide-react";
import { Launch } from "@/data/type";
import { formatDate } from "@/data/utilityfunctions";

interface LaunchCardProps {
  launch: Launch;
  isLaterSection?: boolean;
}

const getImageUrl = (launch: Launch): string | null => {
  if (launch.image) return launch.image;
  if (launch.rocket?.configuration?.image_url) return launch.rocket.configuration.image_url;
  return null;
};

export default function LaunchCard({ launch, isLaterSection = false }: LaunchCardProps) {
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
          Launch Site: {launch.pad?.location?.name || "Unknown Location"}, Mission: {launch.mission?.description || "No mission description available."}
        </p>
      </div>

      <div className="w-full h-32 md:w-40 md:h-auto flex-shrink-0">
        {imageUrl ? (
          <div className="h-full w-full bg-slate-700 relative">
            <img
              src={imageUrl}
              alt={launch.name || "Rocket launch"}
              className="w-full h-full object-cover"
              onError={(e) => {
                const target = e.currentTarget as HTMLImageElement;
                target.style.display = 'none';
                if (target.parentNode) {
                  const parent = target.parentNode as HTMLElement;
                  parent.innerHTML = '<div class="h-full w-full bg-slate-700 flex items-center justify-center"><svg class="w-8 h-8 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"></path></svg></div>';
                }
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-l from-transparent to-slate-800/20"></div>
          </div>
        ) : (
          <div className="h-full w-full bg-slate-700 flex items-center justify-center">
            <Image className="text-slate-500" size={32} />
          </div>
        )}
      </div>
    </div>
  );
}