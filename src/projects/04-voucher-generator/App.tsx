import React, { useState } from 'react';
import { SelectionStep } from './components/SelectionStep';
import { PaymentStep } from './components/PaymentStep';
import { ResultStep } from './components/ResultStep';
import { generateVoucherCode, generateSerial, generateExpiry } from './utils';
import './styles.css';

export const GiftVoucherPOC: React.FC = () => {
  const [amount, setAmount] = useState<number>(0);
  const [isPaid, setIsPaid] = useState<boolean>(false);
  const [voucherData, setVoucherData] = useState<any>(null);

  const handlePaymentSuccess = () => {
    setIsPaid(true);
    setVoucherData({
      amount,
      code: generateVoucherCode(),
      serial: generateSerial(),
      expiry: generateExpiry(),
    });
  };

  const handleReset = () => {
    setAmount(0);
    setIsPaid(false);
    setVoucherData(null);
  };

  return (
    <div className='voucher-generator'>
        <div className="gv-module-container">
          <div className="gv-header">
            <h1>VoucherShop</h1>
            <p>Purchase and send gift vouchers instantly.</p>
          </div>
    
          <div className="gv-flow-container">
            <SelectionStep amount={amount} setAmount={setAmount} isLocked={isPaid} />
            
            {amount > 0 && (
              <PaymentStep amount={amount} onSuccess={handlePaymentSuccess} isLocked={isPaid} />
            )}
            
            {isPaid && voucherData && (
              <ResultStep data={voucherData} onReset={handleReset} />
            )}
          </div>
        </div>
    </div>
  );
};

export default GiftVoucherPOC;