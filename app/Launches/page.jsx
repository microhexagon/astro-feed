"use client";

import React, { useState, useEffect, useMemo } from "react";
import { AlertCircle, ImageIcon } from "lucide-react";
import { format, isToday, isTomorrow, parseISO } from 'date-fns';

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
      // Fetch a bit more data to ensure we have enough for "Later" even if some are filtered out
      const res = await fetch("https://ll.thespacedevs.com/2.2.0/launch/upcoming/?limit=20"); // Increased limit
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
    const laterCandidates = []; // Collect all later launches first

    launches.forEach((launch) => {
      const launchDate = parseISO(launch.window_start);

      if (isNaN(launchDate.getTime())) {
        console.warn("Invalid launch date received:", launch.window_start, launch.name);
        return;
      }

      // Filter only future launches relative to now
      if (launchDate > new Date()) {
          if (isToday(launchDate)) {
            today.push(launch);
          } else if (isTomorrow(launchDate)) {
            tomorrow.push(launch);
          } else {
            laterCandidates.push(launch);
          }
      }
    });

    // Sort by date/time
    today.sort((a, b) => parseISO(a.window_start).getTime() - parseISO(b.window_start).getTime());
    tomorrow.sort((a, b) => parseISO(a.window_start).getTime() - parseISO(b.window_start).getTime());
    laterCandidates.sort((a, b) => parseISO(a.window_start).getTime() - parseISO(b.window_start).getTime());

    const later = laterCandidates.slice(0, 2);

    return { today, tomorrow, later };
  }, [launches]);

  const renderLaunchCard = (launch, isLaterSection = false) => {
    const imageUrl = getImageUrl(launch);
    const launchDateTime = parseISO(launch.window_start);

    const dateTimeFormat = isLaterSection ? 'MMMM do, yyyy, p' : 'PPP, p';

    return (
      <div
        key={launch.id}
        className="bg-slate-800 rounded-lg overflow-hidden shadow-sm flex flex-col md:flex-row mb-4"
      >
        <div className="flex-1 p-4 md:p-6">
          <p className="text-gray-400 text-sm mb-1">
            {format(launchDateTime, dateTimeFormat)}
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
                <ImageIcon className="text-slate-500" size={32} />
              </div>
            </div>
          ) : (
            <div className="h-full w-full bg-slate-700 flex items-center justify-center">
              <ImageIcon className="text-slate-500" size={32} />
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
            {/* Today Section */}
            {groupedLaunches.today.length > 0 && (
              <section>
                <h2 className="text-xl font-semibold text-white mb-4">Today</h2>
                {groupedLaunches.today.map((launch) => renderLaunchCard(launch, false))}
              </section>
            )}

            {/* Tomorrow Section */}
            {groupedLaunches.tomorrow.length > 0 && (
              <section>
                <h2 className="text-xl font-semibold text-white mb-4">Tomorrow</h2>
                {groupedLaunches.tomorrow.map((launch) => renderLaunchCard(launch, false))}
              </section>
            )}

            {/* Later Section */}
            {groupedLaunches.later.length > 0 && (
              <section>
                <h2 className="text-xl font-semibold text-white mb-4">Later</h2>
                {/* Ensure only the first two are mapped */}
                {groupedLaunches.later.map((launch) => renderLaunchCard(launch, true))}
              </section>
            )}

            {/* If no launches are found across all categories */}
            {groupedLaunches.today.length === 0 &&
             groupedLaunches.tomorrow.length === 0 &&
             groupedLaunches.later.length === 0 && !loading && !error && (
              <div className="bg-slate-800 rounded-lg p-8 text-center text-gray-300">
                No upcoming launches found at this time. Check back later!
              </div>
            )}
          </div>
        )}
      </main>
    </div>
  );
}