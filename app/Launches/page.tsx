"use client"

import React from "react";
import { LaunchSchedule } from "@/data/UseLaunch"; 
import Section from "@/components/Launches/section"; 
import Loading from "@/components/Launches/Loading"; 
import ErrorDisplay from "@/components/Launches/error"; 

export default function Launches() {
  const { loading, error, groupedLaunches, refetch } = LaunchSchedule();

  return (
    <div className="min-h-screen bg-slate-900 font-sans">
      <div className="max-w-4xl mx-auto py-8 sm:p-4 lg:p-8">
        <h1 className="text-4xl font-bold text-white mb-8 text-left">
          Upcoming Launches
        </h1>

        {loading ? (
          <Loading />
        ) : error ? (
          <ErrorDisplay error={error} onRetry={refetch} />
        ) : (
          <div className="space-y-8">
            <section>
              <h2 className="text-xl font-semibold text-white mb-4">Today</h2>
              <Section launches={groupedLaunches.today}
              title ="today"
              /> 
            </section>
          </div>
        )}
      </div>
    </div>
  );
}