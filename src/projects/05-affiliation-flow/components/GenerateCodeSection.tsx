import React, { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export const GenerateCodeSection: React.FC = () => {
  const [code, setCode] = useState('');
  const ref = useScrollReveal();

  const generateCode = () => {
    const newCode = 'AFF-' + Math.random().toString(36).substring(2, 8).toUpperCase();
    setCode(newCode);
  };

  return (
    <section className="reveal" ref={ref}>
      <div className="container">
        <h2 className="section-title">2. Generate Affiliate Code</h2>
        <p className="section-subtitle">Create a unique COD tracking code to share with your audience.(mock data)</p>
        
        <div className="glass-card" style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
          {!code ? (
            <button onClick={generateCode} className="btn-primary pulsing">Generate My Code</button>
          ) : (
            <div style={{ animation: 'popIn 0.5s ease' }}>
              <p style={{ color: 'var(--text-muted)', marginBottom: '1rem' }}>Your Unique Referral Code:</p>
              <div style={{ background: 'rgba(0, 240, 255, 0.1)', border: '2px dashed var(--primary)', padding: '1.5rem', borderRadius: '12px', fontSize: '2rem', letterSpacing: '4px', fontWeight: 'bold', marginBottom: '1.5rem', color: 'var(--primary)' }}>
                {code}
              </div>
              <button onClick={() => alert('Code Copied!')} className="btn-primary">Copy Code</button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};