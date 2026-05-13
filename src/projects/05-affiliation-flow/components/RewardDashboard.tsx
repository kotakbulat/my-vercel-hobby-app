import React, { useState, useEffect } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export const RewardDashboard: React.FC = () => {
  const ref = useScrollReveal();
  const [earnings, setEarnings] = useState(0);

  useEffect(() => {
    let current = 0;
    const target = 125.50;
    const increment = target / 50;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setEarnings(target);
        clearInterval(timer);
      } else {
        setEarnings(current);
      }
    }, 40);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="reveal" ref={ref}>
      <div className="container">
        <h2 className="section-title">6. Earnings Dashboard</h2>
        <p className="section-subtitle">Real-time statistics of your affiliate business.</p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
          <div className="glass-card" style={{ textAlign: 'center' }}>
            <h4 style={{ color: 'var(--text-muted)', marginBottom: '1rem' }}>Total Commission</h4>
            <div style={{ fontSize: '3.5rem', fontWeight: 'bold', color: 'var(--success)' }}>
              ${earnings.toFixed(2)}
            </div>
          </div>
          
          <div className="glass-card">
            <h4 style={{ color: 'var(--text-muted)', marginBottom: '1.5rem' }}>Performance</h4>
            <div style={{ marginBottom: '1rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}>
                <span>Conversion Rate</span> <span>12%</span>
              </div>
              <div style={{ width: '100%', height: '8px', background: 'var(--card-border)', borderRadius: '4px' }}>
                <div style={{ width: '12%', height: '100%', background: 'var(--primary)', borderRadius: '4px' }}></div>
              </div>
            </div>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}>
                <span>Successful Orders</span> <span>10</span>
              </div>
              <div style={{ width: '100%', height: '8px', background: 'var(--card-border)', borderRadius: '4px' }}>
                <div style={{ width: '45%', height: '100%', background: 'var(--secondary)', borderRadius: '4px' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};