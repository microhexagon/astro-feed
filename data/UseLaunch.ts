"use client";

import { useState, useEffect, useMemo } from "react";
import { Launch, LaunchResponse, GroupedLaunches } from "@/data/type";
import { isToday, isTomorrow } from "@/data/utilityfunctions";

export const useLaunches = () => {
  const [launches, setLaunches] = useState<Launch[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchLaunches = async (): Promise<void> => {
    try {
      setLoading(true);
      setError(null);
     
      const res = await fetch("https://ll.thespacedevs.com/2.2.0/launch/upcoming/?limit=20");
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      const data: LaunchResponse = await res.json();
      setLaunches(data.results || []);
    } catch (err) {
      setError("Failed to fetch launch data. Please try again later.");
      console.error("Error fetching launches:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLaunches();
  }, []);

  const groupedLaunches: GroupedLaunches = useMemo(() => {
    const today: Launch[] = [];
    const tomorrow: Launch[] = [];
    const laterCandidates: Launch[] = [];

    launches.forEach((launch) => {
      const launchDate = new Date(launch.window_start);

      if (isNaN(launchDate.getTime())) {
        console.warn("Invalid launch date received:", launch.window_start, launch.name);
        return;
      }

      if (isToday(launchDate)) {
        today.push(launch);
      } else if (isTomorrow(launchDate)) {
        tomorrow.push(launch);
      } else if (launchDate > new Date()) {
        laterCandidates.push(launch);
      }
    });

    // Sort by date/time
    today.sort((a, b) => new Date(a.window_start).getTime() - new Date(b.window_start).getTime());
    tomorrow.sort((a, b) => new Date(a.window_start).getTime() - new Date(b.window_start).getTime());
    laterCandidates.sort((a, b) => new Date(a.window_start).getTime() - new Date(b.window_start).getTime());

    const later = laterCandidates.slice(0, 2);
    const tomorrowLimited = tomorrow.slice(0, 1);

    return { today, tomorrow: tomorrowLimited, later };
  }, [launches]);

  return {
    launches,
    loading,
    error,
    groupedLaunches,
    refetch: fetchLaunches
  };
};
