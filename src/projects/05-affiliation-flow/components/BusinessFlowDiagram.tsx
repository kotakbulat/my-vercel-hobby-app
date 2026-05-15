import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export const BusinessFlowDiagram: React.FC = () => {
  const ref = useScrollReveal();
  const flow = ["Affiliator", "Generate Code", "Share Code", "Customer Orders", "Order Success", "Commission Earned"];

  return (
    <section className="reveal" ref={ref}>
      <div className="container">
        <h2 className="section-title">The Complete Workflow</h2>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', marginTop: '3rem' }}>
          {flow.map((step, i) => (
            <React.Fragment key={i}>
              <div className="glass-card" style={{ width: '300px', textAlign: 'center', padding: '1rem', borderColor: i === 5 ? 'red' : 'grey' }}>
                <h4 style={{ color: i === 5 ? 'red' : 'black' }}>{step}</h4>
              </div>
              {i !== flow.length - 1 && (
                <div style={{ fontSize: '1.5rem', color: 'black', animation: 'float 2s infinite' }}>↓</div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};