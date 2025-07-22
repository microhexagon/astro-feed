"use client";

import React, { useState, useEffect } from "react";
import {
  Rocket,
  Calendar,
  Clock,
  Building2,
  Globe,
  AlertCircle,
} from "lucide-react"

export default function Launches() {
 

  return (
    <div className="min-h-screen w-screen bg-slate-900">
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-white mb-8 text-left">
          Upcoming Space Launches
        </h1>

        {loading ? (
          <div className="bg-slate-800 rounded-lg p-8 text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-400 mx-auto mb-4"></div>
            <p className="text-gray-300">Loading...</p>
          </div>
        ) : error ? (
          <div className="bg-red-900/20 border border-red-500 rounded-lg p-8 text-center">
            <AlertCircle className="mx-auto mb-4 text-red-400" size={32} />
            <p className="text-red-400">{error}</p>
            <button
              onClick={fetchLaunches}
              className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors"
            >
              Try Again
            </button>
          </div>
        ) : (
          <div className="space-y-6">
            {launches.map((launch) => (
              <div
                key={launch.id}
                className="bg-slate-800 rounded-lg p-6 shadow-2xl"
              >
                <h2 className="text-xl font-bold text-white flex items-center mb-2">
                  <Rocket className="mr-2 text-blue-400" />
                  {launch.name}
                </h2>
                <p className="text-gray-300 text-sm flex items-center mb-1">
                  <Calendar className="mr-2 text-blue-300" size={18} />
                  {new Date(launch.window_start).toLocaleDateString()}
                </p>
                <p className="text-gray-300 text-sm flex items-center mb-1">
                  <Clock className="mr-2 text-blue-300" size={18} />
                  {new Date(launch.window_start).toLocaleTimeString()}
                </p>
                <p className="text-gray-300 text-sm flex items-center mb-1">
                  <Building2 className="mr-2 text-blue-300" size={18} />
                  {launch.pad?.location?.name || "Unknown Location"}
                </p>
                <p className="text-gray-300 text-sm flex items-center">
                  <Globe className="mr-2 text-blue-300" size={18} />
                  {launch.pad?.name || "Unknown Pad"}
                </p>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
