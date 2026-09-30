import React from 'react';

export interface SectionHeaderProps {
  eyebrow?: string;
  eyebrowIcon?: React.ReactNode;
  eyebrowColor?: 'red' | 'navy' | 'blue' | 'gold';
  title: string;
  chineseTitle?: string;
  description?: string;
  align?: 'left' | 'center';
  action?: React.ReactNode;
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  eyebrow,
  eyebrowIcon,
  eyebrowColor = 'red',
  title,
  chineseTitle,
  description,
  align = 'left',
  action,
  className = '',
}) => {
  const eyebrowColors: Record<string, string> = {
    red: 'bg-red-50 text-brand-red border-red-200/80',
    navy: 'bg-brand-navy/5 text-brand-navy border-brand-navy/15',
    blue: 'bg-sky-50 text-brand-blue border-sky-200',
    gold: 'bg-amber-50 text-amber-800 border-amber-200',
  };

  const isCenter = align === 'center';

  return (
    <div
      className={`space-y-3 ${
        isCenter ? 'text-center max-w-3xl mx-auto' : 'flex flex-col md:flex-row md:items-end md:justify-between'
      } ${className}`.trim()}
    >
      <div className={`space-y-3 ${isCenter ? '' : 'max-w-2xl'}`}>
        {eyebrow && (
          <div
            className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border ${
              eyebrowColors[eyebrowColor]
            }`}
          >
            {eyebrowIcon && <span className="shrink-0">{eyebrowIcon}</span>}
            <span>{eyebrow}</span>
          </div>
        )}

        <div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy tracking-tight">
            {title}
          </h2>
          {chineseTitle && (
            <p className="text-lg sm:text-xl font-semibold text-brand-red font-chinese mt-0.5">
              {chineseTitle}
            </p>
          )}
        </div>

        {description && (
          <p className="text-base sm:text-lg text-ink-secondary leading-relaxed">
            {description}
          </p>
        )}
      </div>

      {!isCenter && action && <div className="shrink-0 pt-2 md:pt-0">{action}</div>}
    </div>
  );
};
