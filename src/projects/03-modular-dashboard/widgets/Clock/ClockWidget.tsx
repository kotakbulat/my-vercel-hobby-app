import React, { useEffect, useState } from 'react';
import { useDashboardStore } from '../../store/useDashboardStore';

export const ClockWidget: React.FC<{ id: string; config?: any }> = ({ id, config }) => {
  const [time, setTime] = useState(new Date());
  const updateConfig = useDashboardStore((state) => state.updateWidgetConfig);
  const is24h = config?.is24h || false;

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  },[]);

  return (
    <div className="clock-widget">
      <div className="clock-time">
        {time.toLocaleTimeString([], { hour12: !is24h })}
      </div>
      <button 
        className="widget-btn" 
        onClick={() => updateConfig(id, { is24h: !is24h })}
      >
        Toggle {is24h ? '12h' : '24h'}
      </button>
    </div>
  );
};