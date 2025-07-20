"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";

// Add interface for the API response
interface APODData {
  title: string;
  url: string;
  explanation: string;
  date: string;
  media_type: string;
}

export default function PictureOfTheDay() {
  // Add state for storing API data
  const [apodData, setApodData] = useState<APODData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch data when component mounts
  useEffect(() => {
    fetchAPOD();
  }, []);

  // API fetch function
  const fetchAPOD = async () => {
    try {
      setLoading(true);
      const response = await fetch('https://api.nasa.gov/planetary/apod?api_key=jwGg2gdXVKUNjV25b3pqzm24rSkmZvsjujJwTfvS');
     
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
     
      const data = await response.json();
      setApodData(data);
    } catch (err) {
      setError('Failed to fetch astronomy data');
      console.error('Error fetching APOD:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <main className="bg-gray-900">
        <h1 className="text-3xl font-bold mb-6 text-center lg:text-left pt-20">
          Astronomy Picture of the Day
        </h1>
       
        <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden">
          {loading ? (
            <div className="p-8 text-center">
              <p className="text-gray-300">Loading...</p>
            </div>
          ) : error ? (
            <div className="p-8 text-center">
              <p className="text-red-400">{error}</p>
            </div>
          ) : apodData ? (
            <>
              <img
                src={apodData.url}
                alt={apodData.title}
                className="w-full h-auto object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-2">
                  {apodData.title}
                </h2>
                <p className="text-gray-400 text-sm mb-4">
                  {apodData.date}
                </p>
                <p className="text-gray-300 leading-relaxed">
                  {apodData.explanation}
                </p>
              </div>
            </>
          ) : null}
        </div>
      </main>
    </>
  );
}