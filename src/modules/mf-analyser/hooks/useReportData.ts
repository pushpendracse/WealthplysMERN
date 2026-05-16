"use client";

import { useState, useEffect } from 'react';
import mockData from '../data/mockReportData.json';
import * as Icons from 'lucide-react';

/**
 * Custom Hook to fetch report data.
 * Currently simulates an API call using local JSON.
 * Easily swappable with real fetch/axios call.
 */
export const useReportData = () => {
  const [data, setData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Simulate API delay
    const fetchData = async () => {
      try {
        setIsLoading(true);
        // In reality, this would be: const response = await fetch('/api/mf-analyser');
        // const json = await response.json();
        
        // Simulating delay for realistic UI behavior (Skeletons, etc.)
        await new Promise(resolve => setTimeout(resolve, 800));
        
        // Map string icons to actual Lucide components
        const processedData = JSON.parse(JSON.stringify(mockData));
        
        // Optional: Data transformation logic can go here
        
        setData(processedData);
        setError(null);
      } catch (err) {
        setError("Failed to fetch report data. Please try again.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, isLoading, error };
};

// Helper to get Icon Component from String
export const getIcon = (name: string) => {
  // @ts-ignore
  return Icons[name] || Icons.HelpCircle;
};
