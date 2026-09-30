import React from 'react';

export type CardVariant = 'default' | 'editorial' | 'featured' | 'notice';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: CardVariant;
  hoverable?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  variant = 'default',
  hoverable = false,
  className = '',
  ...props
}) => {
  const baseStyles = 'rounded-2xl transition-all';

  const variantStyles: Record<CardVariant, string> = {
    default: 'bg-white border border-surface-border shadow-subtle',
    editorial: 'bg-white border border-surface-border border-t-4 border-t-brand-navy shadow-subtle',
    featured: 'bg-white border border-brand-red/30 border-t-4 border-t-brand-red shadow-card',
    notice: 'bg-surface-canvas border border-surface-border shadow-xs',
  };

  const hoverStyles = hoverable ? 'hover:shadow-hover hover:-translate-y-0.5' : '';

  return (
    <div
      className={`${baseStyles} ${variantStyles[variant]} ${hoverStyles} ${className}`.trim()}
      {...props}
    >
      {children}
    </div>
  );
};

export const CardHeader: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  children,
  className = '',
  ...props
}) => (
  <div className={`p-6 sm:p-8 border-b border-slate-100 ${className}`.trim()} {...props}>
    {children}
  </div>
);

export const CardContent: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  children,
  className = '',
  ...props
}) => (
  <div className={`p-6 sm:p-8 space-y-4 ${className}`.trim()} {...props}>
    {children}
  </div>
);

export const CardFooter: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  children,
  className = '',
  ...props
}) => (
  <div className={`p-6 sm:p-8 bg-slate-50/50 border-t border-slate-100 rounded-b-2xl ${className}`.trim()} {...props}>
    {children}
  </div>
);
