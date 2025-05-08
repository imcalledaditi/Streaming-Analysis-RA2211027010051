
import React from 'react';
import Navbar from '@/components/Navbar';
import StreamStats from '@/components/Dashboard/StreamStats';
import QualityMonitor from '@/components/Dashboard/QualityMonitor';
import SentimentAnalysis from '@/components/Dashboard/SentimentAnalysis';
import EngagementChart from '@/components/Dashboard/EngagementChart';
import StreamHealth from '@/components/Dashboard/StreamHealth';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-stream-dark to-black">
      <Navbar />
      
      <div className="pl-20 pr-4 py-6">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-gradient-purple">
            Stream<span className="text-white">Sense</span> AI
          </h1>
          <p className="text-gray-400 max-w-2xl">
            Real-time QoS optimization platform using AI-driven analytics to enhance streaming quality 
            and viewer engagement.
          </p>
        </header>
        
        <StreamStats />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          <div className="lg:col-span-2">
            <QualityMonitor />
          </div>
          <div>
            <SentimentAnalysis />
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <EngagementChart />
          </div>
          <div>
            <StreamHealth />
          </div>
        </div>
        
        <footer className="mt-8 text-center text-xs text-gray-500">
          <p>© 2025 StreamSense AI | AI-Powered QoS Optimization Platform</p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
