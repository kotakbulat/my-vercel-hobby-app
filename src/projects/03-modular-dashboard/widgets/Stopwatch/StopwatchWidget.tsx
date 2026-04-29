import React, { useState, useEffect, useRef } from 'react';

export const StopwatchWidget: React.FC = () => {
  const [time, setTime] = useState(0);
  const[isRunning, setIsRunning] = useState(false);
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    if (isRunning) {
      timerRef.current = window.setInterval(() => {
        setTime((prev) => prev + 10);
      }, 10);
    } else if (!isRunning && timerRef.current) {
      clearInterval(timerRef.current);
    }
    return () => clearInterval(timerRef.current!);
  }, [isRunning]);

  const formatTime = (ms: number) => {
    const minutes = Math.floor(ms / 60000);
    const seconds = Math.floor((ms % 60000) / 1000);
    const milliseconds = Math.floor((ms % 1000) / 10);
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}.${milliseconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="stopwatch-widget">
      <div className="stopwatch-time">{formatTime(time)}</div>
      <div className="stopwatch-controls">
        <button className="widget-btn" onClick={() => setIsRunning(!isRunning)}>
          {isRunning ? 'Pause' : 'Start'}
        </button>
        <button className="widget-btn" onClick={() => { setIsRunning(false); setTime(0); }}>
          Reset
        </button>
      </div>
    </div>
  );
};