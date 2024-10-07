'use client';

import React, { useState, useEffect } from 'react';
import SleepTracker from '../components/SleepTracker';
import WaterTracker from '../components/WaterTracker';
import CalorieTracker from '../components/CalorieTracker';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export default function Home() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [scores, setScores] = useState({ sleepScore: 0, waterScore: 0, calorieScore: 0 });

  const calculateOverallScore = (sleepScore, waterScore, calorieScore) => {
    return Math.round((sleepScore + waterScore + calorieScore) / 3);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Health and Wealth Assistant</h1>
      
      <div className="mb-4 text-center">
        <h2 className="text-xl font-semibold">Select Date to Log Activities</h2>
        <DatePicker
          selected={selectedDate}
          onChange={(date) => setSelectedDate(date)}
          className="border p-2 rounded"
        />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <SleepTracker selectedDate={selectedDate} setScores={setScores} scores={scores} />
        <WaterTracker selectedDate={selectedDate} setScores={setScores} scores={scores} />
        <CalorieTracker selectedDate={selectedDate} setScores={setScores} scores={scores} />
      </div>
      
      <div className="text-center mt-6">
        <h2 className="text-2xl font-bold">Overall Score</h2>
        <p className="text-lg">{calculateOverallScore(scores.sleepScore, scores.waterScore, scores.calorieScore)}%</p>
      </div>
    </div>
  );
}
