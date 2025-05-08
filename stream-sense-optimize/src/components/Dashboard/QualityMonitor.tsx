
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, TooltipProps } from 'recharts';
import GlowingBorder from '../common/GlowingBorder';

const data = [
  { time: '12:00', quality: 94, latency: 120 },
  { time: '12:10', quality: 96, latency: 105 },
  { time: '12:20', quality: 95, latency: 110 },
  { time: '12:30', quality: 87, latency: 180 },
  { time: '12:40', quality: 75, latency: 210 },
  { time: '12:50', quality: 82, latency: 170 },
  { time: '13:00', quality: 88, latency: 150 },
  { time: '13:10', quality: 90, latency: 130 },
  { time: '13:20', quality: 92, latency: 125 },
];

const CustomTooltip = ({ active, payload, label }: TooltipProps<number, string>) => {
  if (active && payload && payload.length) {
    return (
      <div className="neo-blur p-3 text-xs">
        <p className="font-semibold text-white">{`${label}`}</p>
        <p className="text-stream-purple">{`Quality: ${payload[0].value}%`}</p>
        <p className="text-blue-400">{`Latency: ${payload[1].value}ms`}</p>
      </div>
    );
  }
  return null;
};

const QualityMonitor: React.FC = () => {
  return (
    <GlowingBorder className="p-5" intensity="low">
      <div className="mb-4 flex justify-between items-center">
        <h2 className="text-lg font-bold text-white">Stream Quality Monitor</h2>
        <div className="flex gap-4">
          <span className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-stream-purple"></span>
            <span className="text-xs text-gray-300">Quality</span>
          </span>
          <span className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-blue-400"></span>
            <span className="text-xs text-gray-300">Latency</span>
          </span>
        </div>
      </div>
      
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 10, right: 0, left: 0, bottom: 0 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
            <XAxis dataKey="time" tick={{ fontSize: 10, fill: '#9CA3AF' }} />
            <YAxis yAxisId="quality" orientation="left" tick={{ fontSize: 10, fill: '#9CA3AF' }} />
            <YAxis yAxisId="latency" orientation="right" tick={{ fontSize: 10, fill: '#9CA3AF' }} />
            <Tooltip content={<CustomTooltip />} />
            <Bar yAxisId="quality" dataKey="quality" fill="#9b87f5" radius={[4, 4, 0, 0]} />
            <Bar yAxisId="latency" dataKey="latency" fill="rgba(96, 165, 250, 0.8)" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </GlowingBorder>
  );
};

export default QualityMonitor;
