// 'use client'

// import { useState, useEffect } from 'react';
// import Image from 'next/image';
// import { format, isToday, isTomorrow, parseISO } from 'date-fns';

// // Interface for launch  information
// interface LaunchStatus {
//     id: number;
//     name: string;
//     abbrev: string;
//     description: string;
//   }
//   // Interface for organization
//   interface LaunchServiceProvider {
//     id: number;
//     name: string;
//     type: string;
//   }
//   // Interface for geographical location
// interface Location {
//   id: number;
//   name: string;
//   country_code: string;
// }
// // Interface for rocket  details
// interface RocketConfiguration {
//   id: number;
//   name: string;
//   full_name: string;
// }
// // Interface for rocket information
// interface Rocket {
//   id: number;
//   configuration: RocketConfiguration;
// }

// // Interface for mission details
// interface Mission {
//   id: number;
//   name: string;
//   description: string;
//   type: string;
// }
// //  interface for launch data structure
// interface Launch {
//   id: string;
//   name: string;
//   net: string;
//   image: string;
//   status: LaunchStatus;
//   launch_service_provider: LaunchServiceProvider;
//   // pad: Pad;
//   rocket: Rocket;
//   mission: Mission;
// }
// // Interface for API response structure
// interface ApiResponse {
//   count: number;
//   next: string | null;
//   previous: string | null;
//   results: Launch[];
// }
// // Main React component for displaying launch schedules
// const LaunchesPage = () => {
//   // State management using React hooks
//   const [launches, setLaunches] = useState<Launch[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);
// // useEffect hook to fetch launches
// useEffect(() => {
//   fetchLaunches();
// }, []);
//  // fetch launch data from the API
//  const fetchLaunches = async () => {
//   try {
//     // Set loading to true and clear any previous errors
//     setLoading(true);
//     setError(null);
//     // Make API request to SpaceDevs Launch Library
//     const response = await fetch(
//       'https://ll.thespacedevs.com/2.2.0/launch/upcoming/?limit=20&format=json'
//     );

//     // Check if the response was successful
//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }
//      // Parse JSON response and update state
//      const data: ApiResponse = await response.json();
//      setLaunches(data.results || []); // Set launches or empty array if results is null
//    } catch (err) {
//      // Handle errors and update error state
//      setError(err instanceof Error ? err.message : 'An error occurred');
//      console.error('Error fetching launches:', err);
//    } finally {
//      // Always set loading to false when done (success or error)
//      setLoading(false);
//    }
//  };
//   // Function to generate colored status badges based on launch status
//   const getStatusBadge = (status: string) => {
//     // Define color mappings for different launch statuses
//     const statusColors: { [key: string]: string } = {
//       'Go': 'bg-green-500',
//       'TBC': 'bg-yellow-500',
//       'TBD': 'bg-gray-500',
//       'Success': 'bg-green-600',
//       'Failure': 'bg-red-500',
//       'Partial Failure': 'bg-orange-500',
//       'In Flight': 'bg-blue-500',
//       'Hold': 'bg-red-400',
//     };
//     // Return JSX element with appropriate styling
//     return (
//       <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium text-white ${
//         statusColors[status] || 'bg-gray-500' // Default to gray if status not found
//       }`}>
//         {status}
//       </span>
//     );
//   };
//    // Function to categorize launches by when they occur
//    const getTimeLabel = (dateString: string): 'Today' | 'Tomorrow' | 'Later' => {
//     const launchDate = parseISO(dateString); // Parse ISO date string

//     // Use date-fns functions to check if launch is today or tomorrow
//     if (isToday(launchDate)) {
//       return 'Today';
//     } else if (isTomorrow(launchDate)) {
//       return 'Tomorrow';
//     } else {
//       return 'Later';
//     }
//   };
//    // Function to format date and time separately for display
//    const formatDateTime = (dateString: string) => {
//     const date = parseISO(dateString); // Parse the date string
//     return {
//       date: format(date, 'MMM dd, yyyy'), // Format: Jan 15, 2024
//       time: format(date, 'hh:mm a')       // Format: 02:30 PM
//     };
//   };

//   // Function to group launches by time categories (Today, Tomorrow, Later)
//   const groupLaunchesByTime = () => {
//     // Initialize object with empty arrays for each category
//     const grouped: { [key: string]: Launch[] } = {
//       Today: [],
//       Tomorrow: [],
//       Later: []
//     };
//     // Loop through each launch and categorize it
//     launches.forEach(launch => {
//       const timeLabel = getTimeLabel(launch.net);
//       grouped[timeLabel].push(launch);
//     });
//     return grouped;
//   };
