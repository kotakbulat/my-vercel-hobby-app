import React, { useState, useRef, useEffect } from 'react';
import { toPng } from 'html-to-image';
import { formatVoucherCode } from '../utils';
import { VoucherCard } from './VoucherCard';
import type { Theme } from './VoucherCard';

interface Props {
  data: any;
  onReset: () => void;
}

export const ResultStep: React.FC<Props> = ({ data, onReset }) => {
  const [copied, setCopied] = useState(false);
  const [theme, setTheme] = useState<Theme>('basic');
  const [exporting, setExporting] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const resultRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to result when it appears
  useEffect(() => {
    resultRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText(data.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleExport = async () => {
    if (!cardRef.current) return;
    setExporting(true);
    try {
      const dataUrl = await toPng(cardRef.current, { cacheBust: true, pixelRatio: 2 });
      const link = document.createElement('a');
      link.download = `Voucher-${theme}.png`;
      link.href = dataUrl;
      link.click();
    } catch (err) {
      alert('Failed to export image.');
    } finally {
      setExporting(false);
    }
  };

  return (
    <div className="gv-card gv-fade-in" ref={resultRef}>
      <h2 className="gv-title gv-success-text">🎉 Voucher Generated Successfully!</h2>

      <div className="gv-data-box gv-mt-3">
        <div className="gv-data-row">
          <span className="gv-label">Voucher Code</span>
          <div className="gv-copy-group">
            <span className="gv-code-display">{formatVoucherCode(data.code)}</span>
            <button className="gv-btn gv-small" onClick={handleCopy}>
              {copied ? 'Copied ✓' : 'Copy'}
            </button>
          </div>
        </div>
        <div className="gv-data-row">
          <span className="gv-label">Serial Number</span>
          <span>{data.serial}</span>
        </div>
      </div>

      <div className="gv-export-section gv-mt-3">
        <h3>Gift Card</h3>
        <div className="gv-theme-selector">
          {(['basic', 'birthday', 'wedding'] as Theme[]).map((t) => (
            <button key={t} className={`gv-theme-btn ${theme === t ? 'gv-active' : ''}`} onClick={() => setTheme(t)}>
              {t.charAt(0).toUpperCase() + t.slice(1)}
            </button>
          ))}
        </div>
        
        <div className="gv-card-preview gv-mt-3">
          <VoucherCard ref={cardRef} theme={theme} data={data} />
        </div>

        <button className="gv-btn gv-primary gv-full-width gv-mt-3" onClick={handleExport} disabled={exporting}>
          {exporting ? 'Generating Image...' : 'Download as PNG'}
        </button>
      </div>

      <button className="gv-btn gv-text-only gv-full-width gv-mt-3" onClick={onReset}>
        Share
      </button>

      <button className="gv-btn gv-text-only gv-full-width gv-mt-3" onClick={onReset}>
        Buy Another Voucher
      </button>
    </div>
  );
};