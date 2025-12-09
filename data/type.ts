// data/type.ts
export interface Launch {
  id: string;
  name: string; 
  net: string; 
  url?: string;
  slug?: string;
  
  image?: string | null;
  
  rocket?: {
    id?: number;
    configuration?: {
      id?: number;
      name?: string;
      family?: string;
      full_name?: string;
      url?: string;
      image_url?: string;
    };
  } | null;
  
  pad?: {
    id?: number;
    name?: string;
    url?: string;
    agency_id?: number;
    map_url?: string;
    latitude?: string;
    longitude?: string;
    location?: {
      id?: number;
      name?: string;
      country_code?: string;
      map_image?: string;
      total_launch_count?: number;
      total_landing_count?: number;
    };
  } | null;
  
  mission?: {
    id?: number;
    name?: string;
    description?: string;
    type?: string;
    orbit?: {
      id?: number;
      name?: string;
      abbrev?: string;
    };
  } | null;
  
  status?: {
    id?: number;
    name?: string;
    abbrev?: string;
    description?: string;
  };
  
  window_start?: string;
  window_end?: string;
  probability?: number;
  holdreason?: string;
  failreason?: string;
  hashtag?: string;
  
  launch_service_provider?: {
    id?: number;
    name?: string;
    type?: string;
  };
  
  webcast_live?: boolean;
  last_updated?: string;
}

export interface LaunchResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Launch[];
}

export interface GroupedLaunches {
  today: Launch[];
  tomorrow: Launch[];
  later: Launch[];
}