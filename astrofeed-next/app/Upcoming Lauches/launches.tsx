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
// Main interface for launch data structure
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
