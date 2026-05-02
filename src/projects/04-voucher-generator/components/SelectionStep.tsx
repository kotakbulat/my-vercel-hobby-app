import React from 'react';
import { formatIDR } from '../utils';

interface Props {
  amount: number;
  setAmount: (amt: number) => void;
  isLocked: boolean;
}

const PREDEFINED_AMOUNTS = [250001, 500001, 1000001, 2000001];

export const SelectionStep: React.FC<Props> = ({ amount, setAmount, isLocked }) => {
  const isCustom = amount > 0 && !PREDEFINED_AMOUNTS.includes(amount);

  return (
    <div className={`gv-card ${isLocked ? 'gv-locked' : ''}`}>
      <h2 className="gv-title">1. Select Voucher Amount</h2>
      
      <div className="gv-amount-grid">
        {PREDEFINED_AMOUNTS.map((amt) => (
          <button
            key={amt}
            className={`gv-amount-btn ${amount === amt ? 'gv-active' : ''}`}
            onClick={() => setAmount(amt)}
            disabled={isLocked}
          >
            {formatIDR(amt)}
          </button>
        ))}
      </div>

      <div className="gv-custom-amount">
        <label>Custom Amount</label>
        <div className="gv-input-wrapper">
          <span className="gv-currency-prefix">Rp</span>
          <input
            type="number"
            min="0"
            step="10000"
            value={isCustom ? amount : ''}
            onChange={(e) => setAmount(Number(e.target.value))}
            placeholder="Enter amount..."
            className="gv-custom-input"
            disabled={isLocked}
          />
        </div>
      </div>
    </div>
  );
};