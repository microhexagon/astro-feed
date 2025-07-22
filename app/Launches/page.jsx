import React, { useState, useEffect } from 'react';
import { Rocket, Calendar, Clock, Building2, Globe, AlertCircle } from 'lucide-react';

const LaunchSchedule = () => {
  const [launches, setLaunches] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLaunches = async () => {
      try {
        setLoading(true);
        // Using Launch Library 2 API to get upcoming launches
        const response = await fetch('https://ll.thespacedevs.com/2.2.0/launch/upcoming/?limit=20&format=json');
        if (!response.ok) {
          throw new Error('Failed to fetch launch data');
        }
        const data = await response.json();
        setLaunches(data.results || []);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchLaunches();
  }, []);

  const getStatusBadge = (status) => {
    const statusColors = {
      'Go for Launch': 'bg-green-100 text-green-800 border-green-200',
      'To Be Confirmed': 'bg-yellow-100 text-yellow-800 border-yellow-200',
      'To Be Determined': 'bg-gray-100 text-gray-800 border-gray-200',
      'Success': 'bg-green-100 text-green-800 border-green-200',
      'Failure': 'bg-red-100 text-red-800 border-red-200',
      'Partial Failure': 'bg-orange-100 text-orange-800 border-orange-200',
      'In Flight': 'bg-blue-100 text-blue-800 border-blue-200'
    };

    const colorClass = statusColors[status] || 'bg-gray-100 text-gray-800 border-gray-200';
    
    return (
      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${colorClass}`}>
        {status}
      </span>
    );
  };

  const formatDateTime = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    const launchDate = new Date(date.getFullYear(), date.getMonth(), date.getDate());

    let dateLabel = '';
    if (launchDate.getTime() === today.getTime()) {
      dateLabel = 'Today';
    } else if (launchDate.getTime() === tomorrow.getTime()) {
      dateLabel = 'Tomorrow';
    } else {
      dateLabel = date.toLocaleDateString('en-US', { 
        month: 'short', 
        day: 'numeric',
        year: date.getFullYear() !== now.getFullYear() ? 'numeric' : undefined
      });
    }

    const time = date.toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit',
      timeZoneName: 'short'
    });

    return { dateLabel, time, isHighlighted: launchDate.getTime() === today.getTime() || launchDate.getTime() === tomorrow.getTime() };
  };

  const groupLaunchesByDate = (launches) => {
    const grouped = {};
    launches.forEach(launch => {
      const { dateLabel } = formatDateTime(launch.window_start);
      if (!grouped[dateLabel]) {
        grouped[dateLabel] = [];
      }
      grouped[dateLabel].push(launch);
    });
    return grouped;
  };

  if (loading) {
    return (
      <div className="max-w-6xl mx-auto p-6">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center justify-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
            <span className="ml-3 text-gray-600">Loading launch schedule...</span>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-6xl mx-auto p-6">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center justify-center text-red-600">
            <AlertCircle className="h-6 w-6 mr-2" />
            <span>Error loading launches: {error}</span>
          </div>
        </div>
      </div>
    );
  }

  const groupedLaunches = groupLaunchesByDate(launches);

  return (
    <div className="max-w-6xl mx-auto p-6 bg-gray-50 min-h-screen">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-2 flex items-center">
          <Rocket className="mr-3 h-10 w-10 text-blue-600" />
          Launch Schedule
        </h1>
        <p className="text-gray-600">Upcoming rocket launches from around the world</p>
      </div>

      {Object.entries(groupedLaunches).map(([dateLabel, dateLaunches]) => {
        const isHighlighted = dateLabel === 'Today' || dateLabel === 'Tomorrow';
        
        return (
          <div key={dateLabel} className="mb-8">
            <div className={`sticky top-0 z-10 py-3 px-4 rounded-lg mb-4 ${
              isHighlighted ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white' : 'bg-white text-gray-900'
            } shadow-md`}>
              <h2 className="text-2xl font-bold flex items-center">
                <Calendar className="mr-2 h-6 w-6" />
                {dateLabel}
                {isHighlighted && (
                  <span className="ml-3 bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm font-medium">
                    Highlighted
                  </span>
                )}
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {dateLaunches.map((launch) => {
                const { time } = formatDateTime(launch.window_start);
                
                return (
                  <div
                    key={launch.id}
                    className={`bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 ${
                      isHighlighted ? 'ring-2 ring-blue-500 ring-opacity-50' : ''
                    }`}
                  >
                    {launch.image && (
                      <div className="h-48 bg-gray-200 overflow-hidden">
                        <img
                          src={launch.image}
                          alt={launch.name}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.target.style.display = 'none';
                          }}
                        />
                      </div>
                    )}
                    
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="text-lg font-bold text-gray-900 line-clamp-2">
                          {launch.name}
                        </h3>
                        {getStatusBadge(launch.status?.name || 'Unknown')}
                      </div>

                      <div className="space-y-2 mb-4">
                        <div className="flex items-center text-gray-600">
                          <Clock className="h-4 w-4 mr-2 flex-shrink-0" />
                          <span className="text-sm">{time}</span>
                        </div>
                        
                        {launch.launch_service_provider && (
                          <div className="flex items-center text-gray-600">
                            <Building2 className="h-4 w-4 mr-2 flex-shrink-0" />
                            <span className="text-sm line-clamp-1">
                              {launch.launch_service_provider.name}
                            </span>
                          </div>
                        )}
                        
                        {launch.pad?.location?.name && (
                          <div className="flex items-center text-gray-600">
                            <Globe className="h-4 w-4 mr-2 flex-shrink-0" />
                            <span className="text-sm line-clamp-1">
                              {launch.pad.location.name}
                            </span>
                          </div>
                        )}
                      </div>

                      {launch.mission?.description && (
                        <div className="border-t pt-4">
                          <p className="text-sm text-gray-700 line-clamp-3">
                            {launch.mission.description}
                          </p>
                        </div>
                      )}
                      
                      {launch.rocket && (
                        <div className="mt-3 pt-3 border-t">
                          <div className="flex items-center text-sm text-gray-600">
                            <Rocket className="h-4 w-4 mr-2" />
                            <span className="font-medium">{launch.rocket.configuration?.name}</span>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}

      {launches.length === 0 && (
        <div className="bg-white rounded-lg shadow-lg p-8 text-center">
          <Rocket className="h-16 w-16 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No upcoming launches found</h3>
          <p className="text-gray-600">Check back later for new launch schedules.</p>
        </div>
      )}
    </div>
  );
};

export default LaunchSchedule;