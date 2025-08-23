"use client";

import React from "react";
import { useLaunches } from "@/data/UseLaunch";
import Section from "@/components/Launches/section";
import  Loading from "@/components/Launches/Loading";
import  ErrorDisplay  from "@/components/Launches/error";

export default function LaunchSchedule() {
  const { loading, error, groupedLaunches, refetch } = useLaunches();

  return (
    <div className="min-h-screen bg-slate-900 font-sans">
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-white mb-8 text-left">
          Upcoming Launches
        </h1>

        {loading ? (
          <Loading />
        ) : error ? (
          <ErrorDisplay error={error} onRetry={refetch} />
        ) : (
          <div className="space-y-8">
            <Section 
              title="Today" 
              launches={groupedLaunches.today}
              emptyMessage="No launches scheduled for today"
            />
            
            <Section 
              title="Tomorrow" 
              launches={groupedLaunches.tomorrow}
              emptyMessage="No launches scheduled for tomorrow"
            />
            
            <Section 
              title="Later" 
              launches={groupedLaunches.later}
              isLaterSection={true}
              emptyMessage="No future launches scheduled"
            />
          </div>
        )}
      </main>
    </div>
  );
}
