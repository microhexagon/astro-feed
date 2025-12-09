'use client'; 
import { useState, useEffect, useCallback } from 'react';
import { isToday, isTomorrow, parseISO } from 'date-fns'; 
import { Launch, GroupedLaunches } from './type';

const LAUNCH_API_URL = 'https://ll.thespacedevs.com/2.2.0/launch/upcoming/';

export function useLaunchSchedule() {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [groupedLaunches, setGroupedLaunches] = useState<GroupedLaunches>({
    today: [],
    tomorrow: [],
    later: [],
  });

  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(LAUNCH_API_URL);
      if (!response.ok) {
        throw new Error(`API error: ${response.statusText}`);
      }
      const data = await response.json();
      
      const launches: Launch[] = data.results || [];
      
      const groups: GroupedLaunches = { today: [], tomorrow: [], later: [] };
      
      launches.forEach((launch: Launch) => {
        const launchDate = parseISO(launch.net);
        
        if (isToday(launchDate)) {
          groups.today.push(launch);
        } else if (isTomorrow(launchDate)) {
          groups.tomorrow.push(launch);
        } else {
          groups.later.push(launch);
        }
      });
      
      setGroupedLaunches(groups);
    } catch (err) {
      const error = err as Error;
      setError(error.message || 'Failed to fetch launch data.');
      setGroupedLaunches({ today: [], tomorrow: [], later: [] });
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { loading, error, groupedLaunches, refetch: fetchData };
}