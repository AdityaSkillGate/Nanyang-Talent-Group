import React from 'react';

export type BadgeVariant = 'since' | 'red' | 'navy' | 'blue' | 'gold' | 'neutral' | 'warning';
export type BadgeSize = 'xs' | 'sm' | 'md';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
  size?: BadgeSize;
  dot?: boolean;
  icon?: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'neutral',
  size = 'sm',
  dot = false,
  icon,
  className = '',
  ...props
}) => {
  const baseStyles = 'inline-flex items-center font-medium rounded-full tracking-wide';

  const sizeStyles: Record<BadgeSize, string> = {
    xs: 'text-[10px] px-2 py-0.5 gap-1',
    sm: 'text-xs px-2.5 py-0.5 gap-1.5',
    md: 'text-sm px-3.5 py-1 gap-2',
  };

  const variantStyles: Record<BadgeVariant, string> = {
    since:
      'bg-brand-navy/5 text-brand-navy border border-brand-navy/20 font-semibold',
    red:
      'bg-red-50 text-brand-red border border-red-200/80 font-semibold',
    navy:
      'bg-brand-navy text-white border border-transparent font-medium',
    blue:
      'bg-sky-50 text-brand-blue border border-sky-200 font-semibold',
    gold:
      'bg-amber-50 text-amber-800 border border-amber-200 font-semibold',
    neutral:
      'bg-slate-100 text-slate-700 border border-slate-200 font-medium',
    warning:
      'bg-amber-50 text-amber-900 border border-amber-300 font-semibold',
  };

  const dotColors: Record<BadgeVariant, string> = {
    since: 'bg-brand-red',
    red: 'bg-brand-red',
    navy: 'bg-brand-gold',
    blue: 'bg-brand-blue',
    gold: 'bg-brand-gold',
    neutral: 'bg-slate-400',
    warning: 'bg-amber-500',
  };

  return (
    <span
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`.trim()}
      {...props}
    >
      {dot && (
        <span
          className={`w-1.5 h-1.5 rounded-full ${dotColors[variant]} shrink-0`}
          aria-hidden="true"
        />
      )}
      {icon && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
    </span>
  );
};
