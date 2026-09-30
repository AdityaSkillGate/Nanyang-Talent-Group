import React from 'react';

export interface BilingualTextProps {
  en: string;
  zh: string;
  mode?: 'stacked' | 'inline' | 'chinese-first';
  className?: string;
  enClassName?: string;
  zhClassName?: string;
}

export const BilingualText: React.FC<BilingualTextProps> = ({
  en,
  zh,
  mode = 'stacked',
  className = '',
  enClassName = '',
  zhClassName = '',
}) => {
  if (mode === 'inline') {
    return (
      <span className={`inline-flex items-baseline gap-2 ${className}`}>
        <span className={`font-sans ${enClassName}`}>{en}</span>
        <span className="text-slate-400 font-normal">·</span>
        <span className={`font-chinese text-brand-red ${zhClassName}`}>{zh}</span>
      </span>
    );
  }

  if (mode === 'chinese-first') {
    return (
      <div className={`space-y-0.5 ${className}`}>
        <div className={`font-chinese text-brand-navy font-bold ${zhClassName}`}>{zh}</div>
        <div className={`text-xs text-ink-muted font-medium ${enClassName}`}>{en}</div>
      </div>
    );
  }

  return (
    <div className={`space-y-0.5 ${className}`}>
      <div className={`font-sans text-brand-navy font-bold ${enClassName}`}>{en}</div>
      <div className={`text-xs text-brand-red font-chinese font-medium ${zhClassName}`}>{zh}</div>
    </div>
  );
};

export interface BilingualBadgeProps {
  en: string;
  zh: string;
  color?: 'red' | 'navy' | 'blue' | 'gold';
  className?: string;
}

export const BilingualBadge: React.FC<BilingualBadgeProps> = ({
  en,
  zh,
  color = 'navy',
  className = '',
}) => {
  const colorMap = {
    red: 'bg-red-50 border-red-200 text-brand-red',
    navy: 'bg-brand-navy/5 border-brand-navy/15 text-brand-navy',
    blue: 'bg-sky-50 border-sky-200 text-brand-blue',
    gold: 'bg-amber-50 border-amber-200 text-amber-800',
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full border text-xs font-semibold ${colorMap[color]} ${className}`}
    >
      <span>{en}</span>
      <span className="opacity-50">/</span>
      <span className="font-chinese font-normal">{zh}</span>
    </span>
  );
};
