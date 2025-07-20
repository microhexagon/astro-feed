'use client'

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { format, isToday, isTomorrow, parseISO } from 'date-fns';

// Interface for launch  information
interface LaunchStatus {
    id: number;
    name: string;
    abbrev: string;
    description: string;
  }
  // Interface for organization
  interface LaunchServiceProvider {
    id: number;
    name: string;
    type: string;
  }
  // Interface for geographical location 
interface Location {
  id: number;
  name: string;
  country_code: string;
} 
// Interface for rocket  details
interface RocketConfiguration {
  id: number;
  name: string;
  full_name: string;
}
// Interface for rocket information
interface Rocket {
  id: number;
  configuration: RocketConfiguration;
}

// Interface for mission details
interface Mission {
  id: number;
  name: string;
  description: string;
  type: string;
}
//  interface for launch data structure
interface Launch {
  id: string;
  name: string;
  net: string; 
  image: string;
  status: LaunchStatus;
  launch_service_provider: LaunchServiceProvider;
  pad: Pad;
  rocket: Rocket;
  mission: Mission;
}
// Interface for API response structure
interface ApiResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Launch[];
}
// Main React component for displaying launch schedules
const LaunchesPage = () => {
  // State management using React hooks
  const [launches, setLaunches] = useState<Launch[]>([]); 
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState<string | null>(null); 
// useEffect hook to fetch launches
useEffect(() => {
  fetchLaunches();
}, []); 
 // fetch launch data from the API
 const fetchLaunches = async () => {
  try {
    // Set loading to true and clear any previous errors
    setLoading(true);
    setError(null);
    // Make API request to SpaceDevs Launch Library
    const response = await fetch(
      'https://ll.thespacedevs.com/2.2.0/launch/upcoming/?limit=20&format=json'
    );
    
    // Check if the response was successful
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
     // Parse JSON response and update state
     const data: ApiResponse = await response.json();
     setLaunches(data.results || []); // Set launches or empty array if results is null
   } catch (err) {
     // Handle errors and update error state
     setError(err instanceof Error ? err.message : 'An error occurred');
     console.error('Error fetching launches:', err);
   } finally {
     // Always set loading to false when done (success or error)
     setLoading(false);
   }
 };