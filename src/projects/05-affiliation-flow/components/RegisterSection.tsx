import React, { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export const RegisterSection: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');
  const ref = useScrollReveal();

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setTimeout(() => setStatus('success'), 1200);
  };

  return (
    <section id="register" className="reveal" ref={ref}>
      <div className="container">
        <h2 className="section-title">1. Join the Platform</h2>
        <p className="section-subtitle">Simulate becoming an affiliator instantly.</p>
        
        <div className="glass-card" style={{ maxWidth: '500px', margin: '0 auto' }}>
          {status === 'success' ? (
            <div style={{ textAlign: 'center', animation: 'popIn 0.5s ease-out' }}>
              <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🎉</div>
              <h3 style={{ color: 'var(--success)', marginBottom: '0.5rem' }}>Account Activated!</h3>
              <p style={{ color: 'var(--text-muted)' }}>You are now an official affiliator.</p>
            </div>
          ) : (
            <form onSubmit={handleRegister}>
              <input type="text" placeholder="Full Name" required className="input-field" />
              <input type="email" placeholder="Email Address" required className="input-field" />
              <button type="submit" className="btn-primary" style={{ width: '100%', marginTop: '1rem' }} disabled={status === 'loading'}>
                {status === 'loading' ? 'Creating Account...' : 'Become Affiliator'}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};