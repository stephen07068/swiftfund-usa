'use client';

import { SelectHTMLAttributes, forwardRef } from 'react';
import { ChevronDown } from 'lucide-react';

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  options: { value: string; label: string }[];
}

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, error, options, className = '', ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label className="block text-[11px] font-semibold text-zinc-500 uppercase tracking-wider mb-1.5">
            {label}
            {props.required && <span className="text-red-400 ml-1">*</span>}
          </label>
        )}
        <div className="relative">
          <select
            ref={ref}
            className={`w-full px-3.5 py-2.5 text-[14px] text-zinc-900 bg-white border rounded-lg appearance-none pr-9 focus:outline-none focus:ring-2 focus:ring-zinc-900/10 focus:border-zinc-400 transition-all duration-150 ${
              error ? 'border-red-400 focus:ring-red-400/20 focus:border-red-400' : 'border-zinc-200 hover:border-zinc-300'
            } ${className}`}
            {...props}
          >
            {options.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
          <ChevronDown
            size={14}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 pointer-events-none"
          />
        </div>
        {error && (
          <p className="mt-1.5 text-[11.5px] text-red-500 font-medium">{error}</p>
        )}
      </div>
    );
  }
);

Select.displayName = 'Select';

export default Select;
