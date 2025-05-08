
import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts';
import GlowingBorder from '../common/GlowingBorder';

const data = [
  { name: 'Positive', value: 58 },
  { name: 'Neutral', value: 32 },
  { name: 'Negative', value: 10 },
];

const COLORS = ['#4ADE80', '#94A3B8', '#F87171'];

const SentimentAnalysis: React.FC = () => {
  return (
    <GlowingBorder className="p-5">
      <h2 className="text-lg font-bold text-white mb-4">BERT Sentiment Analysis</h2>
      
      <div className="h-60">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius={80}
              innerRadius={50}
              fill="#8884d8"
              dataKey="value"
              label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index]} />
              ))}
            </Pie>
            <Legend 
              verticalAlign="bottom"
              height={36}
              formatter={(value) => <span className="text-gray-300">{value}</span>}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
      
      <div className="mt-4">
        <div className="glass-morphism p-3">
          <div className="text-xs text-gray-300 mb-1">Dominant Keywords</div>
          <div className="flex flex-wrap gap-2">
            {['gameplay', 'quality', 'resolution', 'audio', 'buffering'].map((keyword) => (
              <span key={keyword} className="py-1 px-3 bg-white/5 rounded-full text-xs text-gray-200">
                {keyword}
              </span>
            ))}
          </div>
        </div>
      </div>
    </GlowingBorder>
  );
};

export default SentimentAnalysis;
