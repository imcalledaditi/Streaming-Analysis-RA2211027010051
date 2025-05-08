
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import GlowingBorder from '../common/GlowingBorder';

const data = [
  { time: '12:00', viewers: 1500, chatActivity: 45, streamQuality: 95 },
  { time: '12:30', viewers: 2200, chatActivity: 78, streamQuality: 93 },
  { time: '13:00', viewers: 3400, chatActivity: 112, streamQuality: 95 },
  { time: '13:30', viewers: 4100, chatActivity: 145, streamQuality: 92 },
  { time: '14:00', viewers: 3800, chatActivity: 135, streamQuality: 87 },
  { time: '14:30', viewers: 3200, chatActivity: 98, streamQuality: 89 },
  { time: '15:00', viewers: 2900, chatActivity: 85, streamQuality: 91 },
];

const EngagementChart: React.FC = () => {
  return (
    <GlowingBorder className="p-5" intensity="low">
      <div className="mb-4 flex justify-between items-center">
        <h2 className="text-lg font-bold text-white">Viewer Engagement & Quality Correlation</h2>
      </div>
      
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
            <XAxis dataKey="time" tick={{ fontSize: 10, fill: '#9CA3AF' }} />
            <YAxis tick={{ fontSize: 10, fill: '#9CA3AF' }} />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: 'rgba(17, 24, 39, 0.9)', 
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '8px',
                fontSize: '12px',
              }} 
            />
            <Legend 
              wrapperStyle={{ fontSize: '12px' }}
              formatter={(value) => <span className="text-gray-300">{value}</span>}
            />
            <Line 
              type="monotone" 
              dataKey="viewers" 
              stroke="#9b87f5" 
              strokeWidth={2}
              dot={{ r: 3, strokeWidth: 1 }}
              activeDot={{ r: 5, strokeWidth: 0 }} 
            />
            <Line 
              type="monotone" 
              dataKey="chatActivity" 
              stroke="#4ADE80" 
              strokeWidth={2}
              dot={{ r: 3, strokeWidth: 1 }}
              activeDot={{ r: 5, strokeWidth: 0 }} 
            />
            <Line 
              type="monotone" 
              dataKey="streamQuality" 
              stroke="#60A5FA" 
              strokeWidth={2}
              dot={{ r: 3, strokeWidth: 1 }}
              activeDot={{ r: 5, strokeWidth: 0 }} 
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </GlowingBorder>
  );
};

export default EngagementChart;
