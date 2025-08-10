export interface Launch {
    id: string;
    name: string;
    window_start: string;
    image?: string;
    rocket?: {
      configuration?: {
        image_url?: string;
      };
    };
    pad?: {
      location?: {
        name?: string;
      };
    };
    mission?: {
      description?: string;
    };
  }
  
  export interface LaunchResponse {
    results: Launch[];
  }
  
  export interface GroupedLaunches {
    today: Launch[];
    tomorrow: Launch[];
    later: Launch[];
  }