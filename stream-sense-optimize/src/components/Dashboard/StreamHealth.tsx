
import React from 'react';
import { CheckCircle, AlertCircle, XCircle } from 'lucide-react';
import GlowingBorder from '../common/GlowingBorder';

interface StreamHealthItemProps {
  name: string;
  status: 'good' | 'warning' | 'error';
  value: string;
  info?: string;
}

const StreamHealthItem: React.FC<StreamHealthItemProps> = ({ name, status, value, info }) => {
  const getStatusIcon = () => {
    switch (status) {
      case 'good':
        return <CheckCircle className="text-green-400" size={16} />;
      case 'warning':
        return <AlertCircle className="text-yellow-400" size={16} />;
      case 'error':
        return <XCircle className="text-red-400" size={16} />;
    }
  };

  return (
    <div className="flex items-center justify-between p-3 border-b border-white/10">
      <div className="flex items-center gap-3">
        {getStatusIcon()}
        <span className="text-sm text-gray-300">{name}</span>
      </div>
      <div className="flex flex-col items-end">
        <span className="text-sm font-medium text-white">{value}</span>
        {info && <span className="text-xs text-gray-400">{info}</span>}
      </div>
    </div>
  );
};

const StreamHealth: React.FC = () => {
  return (
    <GlowingBorder className="p-5">
      <h2 className="text-lg font-bold text-white mb-4">Stream Health</h2>
      
      <div className="divide-y divide-white/10">
        <StreamHealthItem
          name="Network Latency"
          status="good"
          value="120ms"
          info="< 150ms is optimal"
        />
        <StreamHealthItem
          name="Video Bitrate"
          status="good"
          value="5.2 Mbps"
          info="Recommended: 4-6 Mbps"
        />
        <StreamHealthItem
          name="Frame Rate"
          status="warning"
          value="52 fps"
          info="Target: 60 fps"
        />
        <StreamHealthItem
          name="Resolution"
          status="good"
          value="1080p"
          info="Native resolution"
        />
        <StreamHealthItem
          name="Audio Quality"
          status="good"
          value="320 kbps"
          info="Stereo, 48kHz"
        />
        <StreamHealthItem
          name="Packet Loss"
          status="error"
          value="2.8%"
          info="< 1% is optimal"
        />
      </div>
      
      <div className="mt-4 p-3 bg-stream-purple/20 rounded-lg border border-stream-purple/30">
        <div className="flex items-center gap-2">
          <AlertCircle size={16} className="text-stream-purple" />
          <span className="text-xs font-medium text-white">DNN Quality Prediction</span>
        </div>
        <p className="text-xs text-gray-300 mt-1">
          AI model predicts 87% probability of QoS issues in next 5 minutes. Recommend reducing bitrate to 4.5 Mbps.
        </p>
      </div>
    </GlowingBorder>
  );
};

export default StreamHealth;
