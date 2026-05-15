import React from 'react';

export const HeroSection: React.FC = () => {
  return (
    <section style={{ minHeight: '80vh', display: 'flex', alignItems: 'center' }}>
      <div className="container grid-2">
        <div style={{ animation: 'popIn 1s ease-out' }}>
          <h1 style={{ fontSize: '4rem', lineHeight: '1.1', marginBottom: '1.5rem', color: 'black' }}>
            Turn Every <span style={{ color: 'red' }}>Order</span> <br /> Into Commission
          </h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', marginBottom: '2rem' }}>
            The ultimate visual simulator for modern Cash-on-Delivery affiliate workflows. Watch how sharing a simple code transforms into tangible revenue.
          </p>
          <a href="#register" className="btn-primary pulsing">Start Affiliate Flow</a>
        </div>
        <div className="floating" style={{ position: 'relative', height: '400px' }}>
          {/* Abstract geometric illustration */}
          <div style={{ position: 'absolute', top: '10%', right: '10%', width: '300px', height: '300px', background: 'var(--gradient)', borderRadius: '50%', filter: 'blur(80px)', opacity: 0.5 }}></div>
          <div className="glass-card" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '80%' }}>
            <h3 style={{ marginBottom: '1rem' }}>Live Statistics (mock data)</h3>
            <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--card-border)', paddingBottom: '0.5rem' }}><span>Active Affiliates</span> <span style={{ color: 'var(--primary)' }}>+12,402</span></div>
            <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: '0.5rem' }}><span>Commissions Paid</span> <span style={{ color: 'var(--success)' }}>$2.4M</span></div>
          </div>
        </div>
      </div>
    </section>
  );
};