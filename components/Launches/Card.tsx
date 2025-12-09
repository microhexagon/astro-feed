"use client";
import React from "react";
import { Launch } from "@/data/type";

interface LaunchCardProps {
  launch: Launch;
  isLaterSection?: boolean;
}

export default function LaunchCard({ launch, isLaterSection = false }: LaunchCardProps) {
  // Format date and time
  const formatDateTime = (): string => {
    const launchDate = new Date(launch.net);
    const months = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
    const hours = launchDate.getHours();
    const minutes = launchDate.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const formattedHours = hours % 12 || 12;
    const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
    
    // Check if today
    const today = new Date();
    const isToday = launchDate.getDate() === today.getDate() &&
                    launchDate.getMonth() === today.getMonth() &&
                    launchDate.getFullYear() === today.getFullYear();
    
    // Check if tomorrow
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    const isTomorrow = launchDate.getDate() === tomorrow.getDate() &&
                       launchDate.getMonth() === tomorrow.getMonth() &&
                       launchDate.getFullYear() === tomorrow.getFullYear();
    
    if (isToday) {
      return `Today, ${formattedHours}:${formattedMinutes} ${ampm}`;
    } else if (isTomorrow) {
      return `Tomorrow, ${formattedHours}:${formattedMinutes} ${ampm}`;
    } else {
      return `${months[launchDate.getMonth()]} ${launchDate.getDate()}, ${launchDate.getFullYear()} at ${formattedHours}:${formattedMinutes} ${ampm}`;
    }
  };

  return (
    <div className="bg-gradient-to-r from-slate-800/50 to-slate-900/50 rounded-lg overflow-hidden border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 mb-6">
      <div className="flex flex-col md:flex-row">
        {/* Left Side - Content */}
        <div className="flex-1 p-6">
          <div className="text-slate-400 text-sm mb-2">
            {formatDateTime()}
          </div>
          
          <h3 className="text-xl font-bold text-white mb-3">
            {launch.name}
          </h3>
          
          <p className="text-slate-300 text-sm leading-relaxed">
            Launch Site: {launch.pad?.location?.name || 'Unknown'}. 
            Mission: {launch.mission?.description 
              ? launch.mission.description.length > 150 
                ? launch.mission.description.slice(0, 150) + '...' 
                : launch.mission.description
              : 'No description available'}
          </p>
        </div>
        
        {/* Right Side - Image */}
        <div className="md:w-48 h-48 md:h-auto flex-shrink-0">
          <img 
            src={launch.image || 'https://images.unsplash.com/photo-1516849841032-87cbac4d88f7?w=400&h=300&fit=crop'} 
            alt={launch.name}
            className="w-full h-full object-cover"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = 'https://images.unsplash.com/photo-1516849841032-87cbac4d88f7?w=400&h=300&fit=crop';
            }}
          />
        </div>
      </div>
    </div>
  );
}