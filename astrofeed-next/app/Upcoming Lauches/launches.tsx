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