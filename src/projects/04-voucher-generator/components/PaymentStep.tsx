import React, { useState } from 'react';
import { formatIDR } from '../utils';

interface Props {
  amount: number;
  onSuccess: () => void;
  isLocked: boolean;
}

export const PaymentStep: React.FC<Props> = ({ amount, onSuccess, isLocked }) => {
  const [loading, setLoading] = useState(false);
  const [method, setMethod] = useState('Bank Transfer');

  const handlePay = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      onSuccess();
    }, 1500);
  };

  if (amount === 0) return null; // Hide until amount is selected

  return (
    <div className={`gv-card gv-fade-in ${isLocked ? 'gv-locked' : ''}`}>
      <h2 className="gv-title">2. Payment Gateway</h2>
      <p className="gv-subtitle">Total to pay: <strong>{formatIDR(amount)}</strong></p>

      <div className="gv-payment-methods">
        {['Bank Transfer', 'E-Wallet', 'Credit Card'].map((m) => (
          <label key={m} className="gv-payment-option">
            <input 
              type="radio" 
              name="payment" 
              checked={method === m} 
              onChange={() => setMethod(m)} 
              disabled={isLocked || loading}
            />
            <span>{m}</span>
          </label>
        ))}
      </div>

      {!isLocked && (
        <button className="gv-btn gv-primary gv-mt-3 gv-full-width" onClick={handlePay} disabled={loading}>
          {loading ? <div className="gv-spinner"></div> : 'Pay Now (ini hanya Mock Payment)'}
        </button>
      )}
      {isLocked && <div className="gv-success-text gv-mt-3">✓ Payment Completed</div>}
    </div>
  );
};