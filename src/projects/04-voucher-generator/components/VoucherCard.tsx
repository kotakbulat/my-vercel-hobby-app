import React, { forwardRef } from 'react';
import { formatIDR, formatVoucherCode } from '../utils';

export type Theme = 'basic' | 'birthday' | 'wedding';

interface Props {
  theme: Theme;
  data: {
    amount: number;
    code: string;
    serial: string;
    expiry: string;
  };
}

export const VoucherCard = forwardRef<HTMLDivElement, Props>(({ theme, data }, ref) => {
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    e.currentTarget.style.display = 'none'; // Fallback to CSS gradient if image missing
  };

  return (
    <div className={`gv-voucher-wrapper gv-theme-${theme}`} ref={ref}>
      <img src={`/${theme}.png`} alt={`${theme} theme`} className="gv-voucher-bg" onError={handleImageError} />
      
      <div className="gv-overlay gv-v-amount">{formatIDR(data.amount)}</div>
      <div className="gv-overlay gv-v-code">{formatVoucherCode(data.code)}</div>
      
      <div className="gv-overlay gv-v-footer">
        <div className="gv-v-serial">SN: {data.serial}</div>
        <div className="gv-v-expiry">Valid until: {data.expiry}</div>
      </div>
    </div>
  );
});