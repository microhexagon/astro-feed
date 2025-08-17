"use client";
import React, { useState, useEffect } from "react";

// Define the type for the data expected from the NASA APOD API.
interface ApodData {
  date: string;
  explanation: string;
  media_type: "image" | "video";
  title: string;
  url: string;
}

export default function PictureOfTheDay() {
  const [apodData, setApodData] = useState<ApodData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchAPOD();
  }, []);

  // API fetch function
  const fetchAPOD = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        "https://api.nasa.gov/planetary/apod?api_key=jwGg2gdXVKUNjV25b3pqzm24rSkmZvsjujJwTfvS"
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data: ApodData = await response.json();
      setApodData(data);
    } catch (err) {
      // Handle  errors.
      if (err instanceof Error) {
        setError("Failed to fetch astronomy data");
        console.error("Error fetching APOD:", err.message);
      } else {
        setError("An unknown error occurred");
        console.error("Unknown error:", err);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-screen  ">
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-white mb-8 text-left">
          Astronomy Picture of the Day
        </h1>
        {loading ? (
          // Show  loading 
          <div className="bg-slate-800 rounded-lg p-8 text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-400 mx-auto mb-4"></div>
            <p className="text-gray-300">Loading...</p>
          </div>
        ) : error ? (
          //  retry button.
          <div className="bg-red-900/20 border border-red-500 rounded-lg p-8 text-center">
            <p className="text-red-400">{error}</p>
            <button
              onClick={fetchAPOD}
              className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors"
            >
              Try Again
            </button>
          </div>
        ) : apodData ? (
          // Description
          <div className="bg-slate-800 rounded-lg overflow-hidden shadow-2xl">
            {/* iframe for image*/}
            {apodData.media_type === "image" ? (
              <img
                src={apodData.url}
                alt={apodData.title}
                className="w-full h-80 sm:h-96 object-cover"
              />
            ): ( 
               null )}

            <div className="p-6">
              <h2 className="text-2xl font-bold text-white mb-2">
                {apodData.title}
              </h2>
              <p className="text-gray-400 text-sm mb-4 font-medium">
                {/* Format the date for display. */}
                {new Date(apodData.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
              <p className="text-gray-300 leading-relaxed text-sm">
                {apodData.explanation}
              </p>
            </div>
          </div>
        ) : null}
      </main>
    </div>
  );
}