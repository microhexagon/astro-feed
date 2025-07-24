"use client";

import React, { useState, useEffect, useMemo } from "react";
import { AlertCircle, Image } from "lucide-react";

// Simple date utilities since date-fns is not available
const formatDate = (date, isLaterSection = false) => {
  if (isLaterSection) {
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  }
  return date.toLocaleDateString('en-US', { 
    weekday: 'long',
    year: 'numeric', 
    month: 'long', 
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
};

const isToday = (date) => {
  const today = new Date();
  return date.toDateString() === today.toDateString();
};

const isTomorrow = (date) => {
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  return date.toDateString() === tomorrow.toDateString();
};

export default function Launches() {
  const [launches, setLaunches] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchLaunches();
  }, []);

  const fetchLaunches = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const res = await fetch("https://ll.thespacedevs.com/2.2.0/launch/upcoming/?limit=20"); 
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      const data = await res.json();
      setLaunches(data.results || []);
    } catch (err) {
      setError("Failed to fetch launch data. Please try again later.");
      console.error("Error fetching launches:", err);
    } finally {
      setLoading(false);
    }
  };

  const getImageUrl = (launch) => {
    if (launch.image) return launch.image;
    if (launch.rocket?.configuration?.image_url) return launch.rocket.configuration.image_url;
    return null;
  };

  const groupedLaunches = useMemo(() => {
    const today = [];
    const tomorrow = [];
    const laterCandidates = []; // Temporary array for sorting

    launches.forEach((launch) => {
      const launchDate = new Date(launch.window_start);

      if (isNaN(launchDate.getTime())) {
        console.warn("Invalid launch date received:", launch.window_start, launch.name);
        return;
      }

      
      if (launchDate > new Date()) {
          if (isToday(launchDate)) {
            today.push(launch);
          } else if (isTomorrow(launchDate)) {
            tomorrow.push(launch);
          } else {
            laterCandidates.push(launch); // Push to temporary array
          }
      }
    });

    // Sort by date/time
    today.sort((a, b) => new Date(a.window_start).getTime() - new Date(b.window_start).getTime());
    tomorrow.sort((a, b) => new Date(a.window_start).getTime() - new Date(b.window_start).getTime());
    laterCandidates.sort((a, b) => new Date(a.window_start).getTime() - new Date(b.window_start).getTime());

    // Only show first 2 launches in Later section and first 1 in Tomorrow
    const later = laterCandidates.slice(0, 2);
    const tomorrowLimited = tomorrow.slice(0, 1);

    return { today, tomorrow: tomorrowLimited, later };
  }, [launches]);

  const renderLaunchCard = (launch, isLaterSection = false) => {
    const imageUrl = getImageUrl(launch);
    const launchDateTime = new Date(launch.window_start);

    return (
      <div
        key={launch.id}
        className="bg-slate-800 rounded-lg overflow-hidden shadow-sm flex flex-col md:flex-row mb-4"
      >
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
                  e.currentTarget.style.display = 'none';
                  if (e.currentTarget.nextElementSibling) {
                    e.currentTarget.nextElementSibling.style.display = 'flex';
                  }
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-l from-transparent to-slate-800/20"></div>
              <div
                className="absolute inset-0 bg-slate-700 flex items-center justify-center"
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

  return (
    <div className="min-h-screen w-screen bg-slate-900 font-sans">

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-white mb-8 text-left">
          Upcoming Launches
        </h1>

        {loading ? (
          <div className="bg-slate-800 rounded-lg p-8 text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-400 mx-auto mb-4"></div>
            <p className="text-gray-300">Loading upcoming launches...</p>
          </div>
        ) : error ? (
          <div className="bg-red-900/20 border border-red-500 rounded-lg p-8 text-center">
            <AlertCircle className="mx-auto mb-4 text-red-400" size={32} />
            <p className="text-red-400">{error}</p>
            <button
              onClick={fetchLaunches}
              className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors"
            >
              Try Again
            </button>
          </div>
        ) : (
          <div className="space-y-8">
            {/* Today Section - Always show */}
            <section>
              <h2 className="text-xl font-semibold text-white mb-4">Today</h2>
              {groupedLaunches.today.length > 0 ? (
                groupedLaunches.today.map((launch) => renderLaunchCard(launch, false))
              ) : (
                <div className="bg-slate-800 rounded-lg p-6 text-center text-gray-400">
                  No launches scheduled for today
                </div>
              )}
            </section>

            {/* Tomorrow Section - Always show */}
            <section>
              <h2 className="text-xl font-semibold text-white mb-4">Tomorrow</h2>
              {groupedLaunches.tomorrow.length > 0 ? (
                groupedLaunches.tomorrow.map((launch) => renderLaunchCard(launch, false))
              ) : (
                <div className="bg-slate-800 rounded-lg p-6 text-center text-gray-400">
                  No launches scheduled for tomorrow
                </div>
              )}
            </section>

            {/* Later Section  */}
            <section>
              <h2 className="text-xl font-semibold text-white mb-4">Later</h2>
              {groupedLaunches.later.length > 0 ? (
                groupedLaunches.later.map((launch) => renderLaunchCard(launch, true))
              ) : (
                <div className="bg-slate-800 rounded-lg p-6 text-center text-gray-400">
                  No future launches scheduled
                </div>
              )}
            </section>
          </div>
        )}
      </main>
    </div>
  );
}