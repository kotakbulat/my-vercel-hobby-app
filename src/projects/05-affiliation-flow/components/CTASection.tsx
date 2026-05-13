import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export const CTASection: React.FC = () => {
  const ref = useScrollReveal();
  return (
    <section className="reveal" ref={ref} style={{ textAlign: 'center', paddingBottom: '8rem' }}>
      <div className="container">
        <div className="glass-card" style={{ background: 'var(--gradient)', border: 'none', padding: '4rem 2rem' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Ready to Build Revenue?</h2>
          <p style={{ fontSize: '1.2rem', marginBottom: '2rem', opacity: 0.9 }}>
            Start building your network through affiliate-driven COD sales today.
          </p>
          <button style={{ background: 'white', color: 'var(--bg-color)', padding: '16px 32px', border: 'none', borderRadius: '8px', fontSize: '1.1rem', fontWeight: 'bold', cursor: 'pointer', transition: 'transform 0.3s' }} onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'} onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}>
            Launch Your Affiliate Business
          </button>
        </div>
      </div>
    </section>
  );
};