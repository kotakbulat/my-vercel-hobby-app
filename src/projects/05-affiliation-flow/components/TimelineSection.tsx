import React, { useState, useEffect } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export const TimelineSection: React.FC = () => {
  const ref = useScrollReveal();
  const [step, setStep] = useState(0);
  const steps = ["Order Created", "Booking Paid", "Itinerary Issued", "Flight Departing", "Commission Released"];

  useEffect(() => {
    const interval = setInterval(() => {
      setStep((prev) => (prev < 4 ? prev + 1 : prev));
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="reveal" ref={ref}>
      <div className="container">
        <h2 className="section-title">5. Order Verification Timeline</h2>
        <p className="section-subtitle">Commission is secured only after a successful COD delivery.</p>
        
        <div className="glass-card" style={{ position: 'relative', padding: '3rem 2rem' }}>
          <div style={{ position: 'absolute', top: '34%', left: '10%', right: '10%', height: '4px', background: 'white', zIndex: 0 }}>
            <div style={{ width: `${(step / 4) * 100}%`, height: '100%', background: 'red', transition: 'width 0.5s ease' }}></div>
          </div>
          
          <div style={{ display: 'flex', justifyContent: 'space-between', position: 'relative', zIndex: 1 }}>
            {steps.map((label, i) => (
              <div key={i} style={{ textAlign: 'center', width: '120px' }}>
                <div style={{ 
                  width: '30px', height: '30px', borderRadius: '50%', margin: '0 auto 10px', 
                  background: i <= step ? 'red' : 'grey', 
                  border: `5px solid ${i <= step ? 'white' : 'white'}`,
                  transition: 'all 0.5s ease',
                  boxShadow: i <= step ? '0 0 10px var(--primary)' : 'none'
                }}></div>
                <span style={{ fontSize: '0.8rem', color: i <= step ? 'black' : 'grey' }}>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};