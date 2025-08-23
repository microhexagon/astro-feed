"use client";

import React from "react";

export default function Loading() {
  return (
    <div className="bg-slate-800 rounded-lg p-8 text-center">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-400 mx-auto mb-4"></div>
      <p className="text-gray-300">Loading...</p>
    </div>
  );
}
