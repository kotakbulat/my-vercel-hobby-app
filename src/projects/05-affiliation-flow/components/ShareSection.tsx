import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export const ShareSection: React.FC = () => {
  const ref = useScrollReveal();
  const socials = ['WhatsApp', 'Instagram', 'TikTok', 'Telegram'];

  return (
    <section className="reveal" ref={ref}>
      <div className="container">
        <h2 className="section-title">3. Share the Code</h2>
        <p className="section-subtitle">Distribute the code across your network.(mock share button)</p>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
          {socials.map((platform, i) => (
            <div key={platform} className="glass-card" style={{ textAlign: 'center', animationDelay: `${i * 0.1}s` }}>
              <div style={{ fontSize: '2rem', marginBottom: '1rem', color: 'var(--primary)' }}>🌐</div>
              <h3 style={{ marginBottom: '1rem' }}>{platform}</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '1rem' }}>Potential Reach: 5k+</p>
              <button className="btn-primary" style={{ padding: '6px 12px', fontSize: '0.8rem' }}>Share Now</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};