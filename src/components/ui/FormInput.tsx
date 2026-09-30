import React from 'react';

export interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  helperText?: string;
  error?: string;
  optional?: boolean;
}

export const FormInput: React.FC<FormInputProps> = ({
  label,
  helperText,
  error,
  optional = false,
  id,
  className = '',
  required,
  ...props
}) => {
  const inputId = id || label.toLowerCase().replace(/\s+/g, '-');

  return (
    <div className="space-y-1.5 text-left">
      <div className="flex items-center justify-between">
        <label htmlFor={inputId} className="text-xs font-semibold text-slate-700 block">
          {label} {required && <span className="text-brand-red">*</span>}
        </label>
        {optional && <span className="text-[11px] text-ink-muted">Optional</span>}
      </div>

      <input
        id={inputId}
        required={required}
        aria-invalid={!!error}
        aria-describedby={error ? `${inputId}-error` : helperText ? `${inputId}-helper` : undefined}
        className={`w-full px-3.5 py-2.5 rounded-lg border text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-brand-navy focus:border-brand-navy bg-white ${
          error ? 'border-red-400 focus:ring-red-400' : 'border-slate-200'
        } ${className}`.trim()}
        {...props}
      />

      {error ? (
        <p id={`${inputId}-error`} className="text-xs text-brand-red mt-1 font-medium">
          {error}
        </p>
      ) : helperText ? (
        <p id={`${inputId}-helper`} className="text-xs text-ink-muted mt-1">
          {helperText}
        </p>
      ) : null}
    </div>
  );
};

export interface FormSelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  options: { label: string; value: string }[];
  helperText?: string;
  error?: string;
}

export const FormSelect: React.FC<FormSelectProps> = ({
  label,
  options,
  helperText,
  error,
  id,
  className = '',
  required,
  ...props
}) => {
  const selectId = id || label.toLowerCase().replace(/\s+/g, '-');

  return (
    <div className="space-y-1.5 text-left">
      <label htmlFor={selectId} className="text-xs font-semibold text-slate-700 block">
        {label} {required && <span className="text-brand-red">*</span>}
      </label>

      <select
        id={selectId}
        required={required}
        aria-invalid={!!error}
        className={`w-full px-3.5 py-2.5 rounded-lg border text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-brand-navy focus:border-brand-navy bg-white ${
          error ? 'border-red-400 focus:ring-red-400' : 'border-slate-200'
        } ${className}`.trim()}
        {...props}
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>

      {error ? (
        <p className="text-xs text-brand-red mt-1 font-medium">{error}</p>
      ) : helperText ? (
        <p className="text-xs text-ink-muted mt-1">{helperText}</p>
      ) : null}
    </div>
  );
};

export interface FormTextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  helperText?: string;
  error?: string;
  optional?: boolean;
}

export const FormTextarea: React.FC<FormTextareaProps> = ({
  label,
  helperText,
  error,
  optional = false,
  id,
  className = '',
  required,
  rows = 4,
  ...props
}) => {
  const areaId = id || label.toLowerCase().replace(/\s+/g, '-');

  return (
    <div className="space-y-1.5 text-left">
      <div className="flex items-center justify-between">
        <label htmlFor={areaId} className="text-xs font-semibold text-slate-700 block">
          {label} {required && <span className="text-brand-red">*</span>}
        </label>
        {optional && <span className="text-[11px] text-ink-muted">Optional</span>}
      </div>

      <textarea
        id={areaId}
        rows={rows}
        required={required}
        aria-invalid={!!error}
        className={`w-full px-3.5 py-2.5 rounded-lg border text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-brand-navy focus:border-brand-navy bg-white ${
          error ? 'border-red-400 focus:ring-red-400' : 'border-slate-200'
        } ${className}`.trim()}
        {...props}
      />

      {error ? (
        <p className="text-xs text-brand-red mt-1 font-medium">{error}</p>
      ) : helperText ? (
        <p className="text-xs text-ink-muted mt-1">{helperText}</p>
      ) : null}
    </div>
  );
};
