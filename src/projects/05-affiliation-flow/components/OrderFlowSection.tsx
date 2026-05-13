import React, { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export const OrderFlowSection: React.FC = () => {
  const [orderStatus, setOrderStatus] = useState<'idle'|'success'>('idle');
  const ref = useScrollReveal();

  const handleOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setOrderStatus('success');
  };

  return (
    <section className="reveal" ref={ref}>
      <div className="container grid-2">
        <div>
          <h2 className="section-title" style={{ textAlign: 'left' }}>4. Customer Orders</h2>
          <p className="section-subtitle" style={{ textAlign: 'left' }}>A customer uses your code at checkout, choosing Cash-on-Delivery.</p>
        </div>

        <div className="glass-card">
          {orderStatus === 'success' ? (
             <div style={{ textAlign: 'center', animation: 'popIn 0.5s ease' }}>
                <div style={{ fontSize: '3rem', color: 'var(--success)', marginBottom: '1rem' }}>✓</div>
                <h3>Order Placed Successfully!</h3>
                <p style={{ color: 'var(--text-muted)', marginTop: '0.5rem' }}>Affiliate code applied. Awaiting fulfillment.</p>
             </div>
          ) : (
            <form onSubmit={handleOrder}>
              <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
                <div style={{ width: '80px', height: '80px', background: 'var(--card-border)', borderRadius: '8px' }}></div>
                <div>
                  <h4>Premium Wireless Earbuds</h4>
                  <p style={{ color: 'var(--primary)' }}>$49.99</p>
                </div>
              </div>
              <input type="text" placeholder="Enter Affiliate Code (e.g. AFF-X7K29P)" required className="input-field" />
              <div style={{ background: 'rgba(255,255,255,0.05)', padding: '1rem', borderRadius: '8px', marginBottom: '1rem' }}>
                <label style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }}>
                  <input type="radio" checked readOnly /> Cash on Delivery (COD)
                </label>
              </div>
              <button type="submit" className="btn-primary" style={{ width: '100%' }}>Place Order</button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};