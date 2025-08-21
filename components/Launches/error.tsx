"use client";

import React from "react";
import { AlertCircle } from "lucide-react";

interface ErrorDisplayProps {
  error: string;
  onRetry: () => void;
}

export default function ErrorDisplay({ error, onRetry }: ErrorDisplayProps) {
  return (
    <div className="bg-red-900/20 border border-red-500 rounded-lg p-8 text-center">
      <AlertCircle className="mx-auto mb-4 text-red-400" size={32} />
      <p className="text-red-400">{error}</p>
      <button
        onClick={onRetry}
        className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors"
      >
        Try Again
      </button>
    </div>
  );
}
