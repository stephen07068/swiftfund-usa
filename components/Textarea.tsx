'use client';

import { TextareaHTMLAttributes, forwardRef } from 'react';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, error, className = '', ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label className="block text-[11px] font-semibold text-zinc-500 uppercase tracking-wider mb-1.5">
            {label}
          </label>
        )}
        <textarea
          ref={ref}
          className={`w-full px-3.5 py-2.5 text-[14px] text-zinc-900 bg-white border rounded-lg placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-900/10 focus:border-zinc-400 transition-all duration-150 resize-none ${
            error
              ? 'border-red-400 focus:ring-red-400/20 focus:border-red-400'
              : 'border-zinc-200 hover:border-zinc-300'
          } ${className}`}
          {...props}
        />
        {error && (
          <p className="mt-1.5 text-[11.5px] text-red-500 font-medium">{error}</p>
        )}
      </div>
    );
  }
);

Textarea.displayName = 'Textarea';

export default Textarea;
