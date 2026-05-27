'use client';

import { useState, FormEvent } from 'react';
import { Lock, CheckCircle, ArrowRight } from 'lucide-react';
import SectionWrapper from '../SectionWrapper';
import Input from '../Input';
import Select from '../Select';
import Textarea from '../Textarea';

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  whatsappNumber: string;
  state: string;
  employmentStatus: string;
  monthlyIncome: string;
  loanAmount: string;
  loanPurpose: string;
  additionalNotes: string;
  honeypot: string;
}

interface FormErrors {
  [key: string]: string;
}

const stateOptions = [
  { value: '', label: 'Select State' },
  { value: 'AL', label: 'Alabama' }, { value: 'AK', label: 'Alaska' },
  { value: 'AZ', label: 'Arizona' }, { value: 'AR', label: 'Arkansas' },
  { value: 'CA', label: 'California' }, { value: 'CO', label: 'Colorado' },
  { value: 'CT', label: 'Connecticut' }, { value: 'DE', label: 'Delaware' },
  { value: 'FL', label: 'Florida' }, { value: 'GA', label: 'Georgia' },
  { value: 'HI', label: 'Hawaii' }, { value: 'ID', label: 'Idaho' },
  { value: 'IL', label: 'Illinois' }, { value: 'IN', label: 'Indiana' },
  { value: 'IA', label: 'Iowa' }, { value: 'KS', label: 'Kansas' },
  { value: 'KY', label: 'Kentucky' }, { value: 'LA', label: 'Louisiana' },
  { value: 'ME', label: 'Maine' }, { value: 'MD', label: 'Maryland' },
  { value: 'MA', label: 'Massachusetts' }, { value: 'MI', label: 'Michigan' },
  { value: 'MN', label: 'Minnesota' }, { value: 'MS', label: 'Mississippi' },
  { value: 'MO', label: 'Missouri' }, { value: 'MT', label: 'Montana' },
  { value: 'NE', label: 'Nebraska' }, { value: 'NV', label: 'Nevada' },
  { value: 'NH', label: 'New Hampshire' }, { value: 'NJ', label: 'New Jersey' },
  { value: 'NM', label: 'New Mexico' }, { value: 'NY', label: 'New York' },
  { value: 'NC', label: 'North Carolina' }, { value: 'ND', label: 'North Dakota' },
  { value: 'OH', label: 'Ohio' }, { value: 'OK', label: 'Oklahoma' },
  { value: 'OR', label: 'Oregon' }, { value: 'PA', label: 'Pennsylvania' },
  { value: 'RI', label: 'Rhode Island' }, { value: 'SC', label: 'South Carolina' },
  { value: 'SD', label: 'South Dakota' }, { value: 'TN', label: 'Tennessee' },
  { value: 'TX', label: 'Texas' }, { value: 'UT', label: 'Utah' },
  { value: 'VT', label: 'Vermont' }, { value: 'VA', label: 'Virginia' },
  { value: 'WA', label: 'Washington' }, { value: 'WV', label: 'West Virginia' },
  { value: 'WI', label: 'Wisconsin' }, { value: 'WY', label: 'Wyoming' },
];

const employmentOptions = [
  { value: '',             label: 'Select Employment Status' },
  { value: 'full-time',    label: 'Full-time'                },
  { value: 'part-time',    label: 'Part-time'                },
  { value: 'self-employed',label: 'Self-employed'            },
  { value: 'retired',      label: 'Retired'                  },
];

const loanPurposeOptions = [
  { value: '',             label: 'Select Loan Purpose'  },
  { value: 'personal',     label: 'Personal Expense'     },
  { value: 'business',     label: 'Business Expansion'   },
  { value: 'consolidation',label: 'Debt Consolidation'   },
  { value: 'home',         label: 'Home Improvement'     },
];

export default function ApplicationForm() {
  const [formData, setFormData] = useState<FormData>({
    fullName: '', email: '', phone: '', whatsappNumber: '',
    state: '', employmentStatus: '', monthlyIncome: '',
    loanAmount: '', loanPurpose: '', additionalNotes: '', honeypot: '',
  });

  const [errors, setErrors]         = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess]   = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.fullName.trim() || formData.fullName.length < 2)
      newErrors.fullName = 'Please enter your full name';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = 'Please enter a valid email address';
    const phoneRx = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if (!phoneRx.test(formData.phone))
      newErrors.phone = 'Please enter a valid phone number';
    if (!phoneRx.test(formData.whatsappNumber))
      newErrors.whatsappNumber = 'Please enter a valid WhatsApp number';
    if (!formData.state)          newErrors.state          = 'Please select your state';
    if (!formData.employmentStatus) newErrors.employmentStatus = 'Please select your employment status';
    if (isNaN(parseFloat(formData.monthlyIncome)) || parseFloat(formData.monthlyIncome) <= 0)
      newErrors.monthlyIncome = 'Please enter a valid monthly income';
    if (isNaN(parseFloat(formData.loanAmount)) || parseFloat(formData.loanAmount) <= 0)
      newErrors.loanAmount = 'Please enter a valid loan amount';
    if (!formData.loanPurpose) newErrors.loanPurpose = 'Please select a loan purpose';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (formData.honeypot) return;
    if (!validateForm()) return;
    setIsSubmitting(true);
    try {
      const res = await fetch('/api/submit-application', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error('Submission failed');
      setIsSuccess(true);
      setTimeout(() => {
        const msg = encodeURIComponent('Hello, I just submitted my loan application for SwiftFund USA.');
        window.location.href = `https://wa.me/15855149783?text=${msg}`;
      }, 2000);
    } catch {
      setErrors({ submit: 'Failed to submit application. Please try again.' });
      setIsSubmitting(false);
    }
  };

  /* ── Success state ── */
  if (isSuccess) {
    return (
      <SectionWrapper id="apply" background="gray">
        <div className="max-w-md mx-auto text-center">
          <div className="bg-white rounded-2xl border border-zinc-100 shadow-[0_8px_40px_-12px_rgba(0,0,0,0.12)] p-12">
            <div className="w-16 h-16 rounded-full bg-green-50 border border-green-100 flex items-center justify-center mx-auto mb-6">
              <CheckCircle size={30} className="text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-zinc-900 tracking-tight mb-3">
              Application Submitted!
            </h2>
            <p className="text-[14px] text-zinc-500 leading-relaxed mb-2">
              Thank you for choosing SwiftFund USA. We&apos;ve received your application.
            </p>
            <p className="text-[13px] text-zinc-400">Redirecting you to WhatsApp…</p>
          </div>
        </div>
      </SectionWrapper>
    );
  }

  /* ── Form ── */
  return (
    <SectionWrapper id="apply" background="gray">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <p className="text-[10px] font-semibold text-zinc-400 uppercase tracking-[0.18em] mb-3">
            Loan Application
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 tracking-tight mb-3">
            Start your application
          </h2>
          <p className="text-[14px] text-zinc-500">
            Secure form &mdash; will not affect your credit score.
          </p>
        </div>

        {/* Card */}
        <div className="bg-white rounded-2xl border border-zinc-100 shadow-[0_4px_32px_-8px_rgba(0,0,0,0.1)] overflow-hidden">
          {/* Top accent stripe */}
          <div className="h-1 w-full bg-gradient-to-r from-zinc-900 via-zinc-700 to-green-600" />

          <form onSubmit={handleSubmit} className="p-8 md:p-10 space-y-6">
            {/* Honeypot */}
            <input type="text" name="honeypot" value={formData.honeypot} onChange={handleChange}
              style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />

            {/* Section: Personal Info */}
            <div>
              <p className="text-[10px] font-semibold text-zinc-400 uppercase tracking-[0.15em] mb-4">
                Personal Information
              </p>
              <div className="space-y-5">
                <Input label="Full Name" name="fullName" type="text" required
                  value={formData.fullName} onChange={handleChange}
                  error={errors.fullName} placeholder="John Doe" />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <Input label="Email Address" name="email" type="email" required
                    value={formData.email} onChange={handleChange}
                    error={errors.email} placeholder="john@example.com" />
                  <Input label="Phone Number" name="phone" type="tel" required
                    value={formData.phone} onChange={handleChange}
                    error={errors.phone} placeholder="(555) 123-4567" />
                </div>

                <Input label="WhatsApp Number" name="whatsappNumber" type="tel" required
                  value={formData.whatsappNumber} onChange={handleChange}
                  error={errors.whatsappNumber} placeholder="(555) 123-4567" />
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-zinc-100" />

            {/* Section: Financial Info */}
            <div>
              <p className="text-[10px] font-semibold text-zinc-400 uppercase tracking-[0.15em] mb-4">
                Financial Details
              </p>
              <div className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <Select label="State" name="state" required
                    value={formData.state} onChange={handleChange}
                    error={errors.state} options={stateOptions} />
                  <Select label="Employment Status" name="employmentStatus" required
                    value={formData.employmentStatus} onChange={handleChange}
                    error={errors.employmentStatus} options={employmentOptions} />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <Input label="Monthly Income ($)" name="monthlyIncome" type="number" required
                    value={formData.monthlyIncome} onChange={handleChange}
                    error={errors.monthlyIncome} placeholder="5,000" min="0" step="100" />
                  <Input label="Loan Amount ($)" name="loanAmount" type="number" required
                    value={formData.loanAmount} onChange={handleChange}
                    error={errors.loanAmount} placeholder="10,000" min="0" step="500" />
                </div>

                <Select label="Loan Purpose" name="loanPurpose" required
                  value={formData.loanPurpose} onChange={handleChange}
                  error={errors.loanPurpose} options={loanPurposeOptions} />

                <Textarea label="Additional Notes (Optional)" name="additionalNotes"
                  value={formData.additionalNotes} onChange={handleChange}
                  placeholder="Tell us more about your loan needs…" rows={4} />
              </div>
            </div>

            {/* Submit error */}
            {errors.submit && (
              <div className="flex items-center gap-2.5 px-4 py-3 bg-red-50 border border-red-100 rounded-lg text-[13px] text-red-600">
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                  <circle cx="7.5" cy="7.5" r="6.5" stroke="#ef4444" strokeWidth="1.5"/>
                  <path d="M7.5 4.5V8M7.5 10.5V11" stroke="#ef4444" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
                {errors.submit}
              </div>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full flex items-center justify-center gap-2 py-3.5 bg-zinc-900 text-white text-[14.5px] font-semibold rounded-lg hover:bg-zinc-800 active:bg-zinc-950 disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-150 shadow-sm"
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
                  </svg>
                  Submitting Application…
                </>
              ) : (
                <>
                  Submit Application
                  <ArrowRight size={16} />
                </>
              )}
            </button>

            {/* Trust note */}
            <div className="flex items-center justify-center gap-2 text-[12px] text-zinc-400">
              <Lock size={12} />
              Your data is protected by 256-bit SSL encryption
            </div>
          </form>
        </div>
      </div>
    </SectionWrapper>
  );
}
