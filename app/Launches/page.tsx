'use client';

import React from 'react';
import { useLaunchSchedule } from "@/data/UseLaunch"; 
import Section from '@/components/Launches/section'; 
import Loading from '@/components/Launches/Loading'; 
import ErrorDisplay from '@/components/Launches/error'; 

export default function Launches() {
  const { loading, error, groupedLaunches, refetch } = useLaunchSchedule(); 
  
  return (
    <div className="min-h-screen bg-slate-950 font-sans">
      <div className="max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        
        <h1 className="text-4xl font-extrabold text-white mb-8 text-left">
          Upcoming Launches
        </h1>
        
        {loading ? (
          <Loading />
        ) : error ? (
          <ErrorDisplay error={error} onRetry={refetch} />
        ) : (
          <div className="space-y-4">
            
            {groupedLaunches.today.length > 0 && (
              <Section 
                launches={groupedLaunches.today} 
                title="Today" 
                isLaterSection={false}
              /> 
            )}
            
            {groupedLaunches.tomorrow.length > 0 && (
              <Section 
                launches={groupedLaunches.tomorrow} 
                title="Tomorrow"
                isLaterSection={false}
              />
            )}
            
            {groupedLaunches.later.length > 0 && (
              <Section 
                launches={groupedLaunches.later.slice(0, 10)} 
                title="Later"
                isLaterSection={true}
              />
            )}
            
            {groupedLaunches.today.length === 0 && 
             groupedLaunches.tomorrow.length === 0 && 
             groupedLaunches.later.length === 0 && (
                <p className="text-center text-gray-400 mt-10">
                    Is waqt koi upcoming launch nahi mila.
                </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}