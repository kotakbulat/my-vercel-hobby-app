export const generateRandomNumberString = (length: number): string => {
  return Array.from({ length }, () => Math.floor(Math.random() * 10)).join('');
};

export const generateVoucherCode = (): string => generateRandomNumberString(16);
export const generateSerial = (): string => generateRandomNumberString(12);

export const generateExpiry = (): string => {
  const date = new Date();
  date.setFullYear(date.getFullYear() + 1);
  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
};

export const formatIDR = (amount: number): string => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    maximumFractionDigits: 0,
  }).format(amount);
};

export const formatVoucherCode = (code: string): string => {
  return code.replace(/(.{4})/g, '$1 ').trim();
};