import React from 'react';

export const Navbar: React.FC = () => (
  <nav style={{ padding: '1.5rem 0', borderBottom: '1px solid var(--card-border)', position: 'sticky', top: 0, background: 'rgba(6, 11, 25, 0.8)', backdropFilter: 'blur(10px)', zIndex: 100 }}>
    <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <h2 style={{ color: 'white', letterSpacing: '1px' }}><span style={{ color: 'var(--primary)' }}>Affil</span>Flow</h2>
      <button className="btn-primary" style={{ padding: '8px 16px', fontSize: '0.9rem' }}>Login</button>
    </div>
  </nav>
);