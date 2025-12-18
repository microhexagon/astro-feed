"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";

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

  const fetchAPOD = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY" // Apni API key use karein
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data: ApodData = await response.json();
      setApodData(data);
    } catch (err) {
      setError("Failed to fetch astronomy data");
    } finally {
      setLoading(false);
    }
  };

  return (
    // Background ko dark (#0b111e) rakha gaya hai jaisa image mein hai
    <div className="min-h-screen bg-[#0b1421] text-white font-sans">
      <main className="max-w-5xl mx-auto px-6 py-12">
        
        {/* Title: Size aur spacing adjust ki gayi hai */}
        <h1 className="text-4xl font-semibold mb-10 tracking-tight">
          Astronomy Picture of the Day
        </h1>

        {loading ? (
          <div className="flex flex-col items-center justify-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-400 mb-4"></div>
            <p className="text-gray-400">Loading Discovery...</p>
          </div>
        ) : error ? (
          <div className="text-center py-20 border border-red-900/50 rounded-xl bg-red-950/10">
            <p className="text-red-400 mb-4">{error}</p>
            <button onClick={fetchAPOD} className="bg-blue-600 px-6 py-2 rounded-lg">Retry</button>
          </div>
        ) : apodData ? (
          <div className="space-y-8">
            
            {/* Image Container: Rounded corners aur shadow */}
            <div className="relative w-full overflow-hidden rounded-2xl shadow-2xl">
              {apodData.media_type === "image" ? (
                <div className="relative aspect-video lg:aspect-[21/9]">
                  <Image
                    src={apodData.url}
                    alt={apodData.title}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              ) : (
                <div className="aspect-video w-full">
                  <iframe
                    src={apodData.url}
                    className="w-full h-full"
                    allowFullScreen
                    title={apodData.title}
                  />
                </div>
              )}
            </div>

            {/* Text Content: Left aligned jaisa screenshot mein hai */}
            <div className="max-w-4xl">
              <h2 className="text-2xl font-bold mb-2 text-gray-100">
                {apodData.title}
              </h2>
              
              <p className="text-gray-500 text-sm mb-6">
                {apodData.date}
              </p>
              
              <p className="text-gray-300 leading-relaxed text-lg font-light">
                {apodData.explanation}
              </p>
            </div>
          </div>
        ) : null}
      </main>
    </div>
  );
}