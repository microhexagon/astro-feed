"use client";

import React from "react";
import { Launch } from "@/data/type";
import LaunchCard from "@/components/Launches/Card";

interface LaunchSectionProps {
  title: string;
  launches: Launch[];
  isLaterSection?: boolean;
  emptyMessage?: string;
}

export default function Section({ 
  title, 
  launches, 
  isLaterSection = false,
  emptyMessage = "No launches scheduled"
}: LaunchSectionProps) {
  return (
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
}