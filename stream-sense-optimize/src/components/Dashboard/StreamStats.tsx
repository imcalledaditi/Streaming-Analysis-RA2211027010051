
import React from 'react';
import { Activity, Users, Zap, Clock } from 'lucide-react';
import StatsCard from '../common/StatsCard';

const StreamStats: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      <StatsCard 
        title="Active Streams" 
        value="3,421" 
        change="+5.3%" 
        trend="up" 
        icon={<Activity size={18} />} 
      />
      <StatsCard 
        title="Total Viewers" 
        value="124,582" 
        change="+12.7%" 
        trend="up" 
        icon={<Users size={18} />} 
      />
      <StatsCard 
        title="Average Bitrate" 
        value="4.2 Mbps" 
        change="-0.8%" 
        trend="down" 
        icon={<Zap size={18} />} 
      />
      <StatsCard 
        title="Avg. Watch Time" 
        value="38 min" 
        change="+2.1%" 
        trend="up" 
        icon={<Clock size={18} />} 
      />
    </div>
  );
};

export default StreamStats;
