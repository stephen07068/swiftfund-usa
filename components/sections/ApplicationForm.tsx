'use client';

import { useState, FormEvent } from 'react';
import { Lock, CheckCircle } from 'lucide-react';
import SectionWrapper from '../SectionWrapper';
import Input from '../Input';
import Select from '../Select';
import Textarea from '../Textarea';
import Button from '../Button';

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

export default function ApplicationForm() {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    phone: '',
    whatsappNumber: '',
    state: '',
    employmentStatus: '',
    monthlyIncome: '',
    loanAmount: '',
    loanPurpose: '',
    additionalNotes: '',
    honeypot: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const stateOptions = [
    { value: '', label: 'Select State' },
    { value: 'AL', label: 'Alabama' },
    { value: 'AK', label: 'Alaska' },
    { value: 'AZ', label: 'Arizona' },
    { value: 'AR', label: 'Arkansas' },
    { value: 'CA', label: 'California' },
    { value: 'CO', label: 'Colorado' },
    { value: 'CT', label: 'Connecticut' },
    { value: 'DE', label: 'Delaware' },
    { value: 'FL', label: 'Florida' },
    { value: 'GA', label: 'Georgia' },
    { value: 'HI', label: 'Hawaii' },
    { value: 'ID', label: 'Idaho' },
    { value: 'IL', label: 'Illinois' },
    { value: 'IN', label: 'Indiana' },
    { value: 'IA', label: 'Iowa' },
    { value: 'KS', label: 'Kansas' },
    { value: 'KY', label: 'Kentucky' },
    { value: 'LA', label: 'Louisiana' },
    { value: 'ME', label: 'Maine' },
    { value: 'MD', label: 'Maryland' },
    { value: 'MA', label: 'Massachusetts' },
    { value: 'MI', label: 'Michigan' },
    { value: 'MN', label: 'Minnesota' },
    { value: 'MS', label: 'Mississippi' },
    { value: 'MO', label: 'Missouri' },
    { value: 'MT', label: 'Montana' },
    { value: 'NE', label: 'Nebraska' },
    { value: 'NV', label: 'Nevada' },
    { value: 'NH', label: 'New Hampshire' },
    { value: 'NJ', label: 'New Jersey' },
    { value: 'NM', label: 'New Mexico' },
    { value: 'NY', label: 'New York' },
    { value: 'NC', label: 'North Carolina' },
    { value: 'ND', label: 'North Dakota' },
    { value: 'OH', label: 'Ohio' },
    { value: 'OK', label: 'Oklahoma' },
    { value: 'OR', label: 'Oregon' },
    { value: 'PA', label: 'Pennsylvania' },
    { value: 'RI', label: 'Rhode Island' },
    { value: 'SC', label: 'South Carolina' },
    { value: 'SD', label: 'South Dakota' },
    { value: 'TN', label: 'Tennessee' },
    { value: 'TX', label: 'Texas' },
    { value: 'UT', label: 'Utah' },
    { value: 'VT', label: 'Vermont' },
    { value: 'VA', label: 'Virginia' },
    { value: 'WA', label: 'Washington' },
    { value: 'WV', label: 'West Virginia' },
    { value: 'WI', label: 'Wisconsin' },
    { value: 'WY', label: 'Wyoming' },
  ];

  const employmentOptions = [
    { value: '', label: 'Select Employment Status' },
    { value: 'full-time', label: 'Full-time' },
    { value: 'part-time', label: 'Part-time' },
    { value: 'self-employed', label: 'Self-employed' },
    { value: 'retired', label: 'Retired' },
  ];

  const loanPurposeOptions = [
    { value: '', label: 'Select Loan Purpose' },
    { value: 'personal', label: 'Personal Expense' },
    { value: 'business', label: 'Business Expansion' },
    { value: 'consolidation', label: 'Debt Consolidation' },
    { value: 'home', label: 'Home Improvement' },
  ];

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.fullName.trim() || formData.fullName.length < 2) {
      newErrors.fullName = 'Please enter your full name';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    const phoneRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    if (!phoneRegex.test(formData.whatsappNumber)) {
      newErrors.whatsappNumber = 'Please enter a valid WhatsApp number';
    }

    if (!formData.state) {
      newErrors.state = 'Please select your state';
    }

    if (!formData.employmentStatus) {
      newErrors.employmentStatus = 'Please select your employment status';
    }

    const income = parseFloat(formData.monthlyIncome);
    if (isNaN(income) || income <= 0) {
      newErrors.monthlyIncome = 'Please enter a valid monthly income';
    }

    const loanAmount = parseFloat(formData.loanAmount);
    if (isNaN(loanAmount) || loanAmount <= 0) {
      newErrors.loanAmount = 'Please enter a valid loan amount';
    }

    if (!formData.loanPurpose) {
      newErrors.loanPurpose = 'Please select a loan purpose';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (formData.honeypot) {
      return;
    }

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/submit-application', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Submission failed');
      }

      setIsSuccess(true);

      setTimeout(() => {
        const message = encodeURIComponent('Hello, I just submitted my loan application for SwiftFund USA.');
        window.location.href = `https://wa.me/15855149783?text=${message}`;
      }, 2000);
    } catch (error) {
      setErrors({ submit: 'Failed to submit application. Please try again.' });
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  if (isSuccess) {
    return (
      <SectionWrapper id="apply" background="blue">
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-white rounded-xl shadow-2xl p-12">
            <CheckCircle className="text-green-500 mx-auto mb-6" size={64} />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Application Submitted Successfully!
            </h2>
            <p className="text-lg text-gray-600 mb-4">
              Thank you for choosing SwiftFund USA. We've received your application.
            </p>
            <p className="text-gray-600">
              Redirecting you to WhatsApp...
            </p>
          </div>
        </div>
      </SectionWrapper>
    );
  }

  return (
    <SectionWrapper id="apply" background="blue">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Start Your Application
          </h2>
          <p className="text-gray-700">
            Secure form. Will not affect your credit score.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-2xl p-8 md:p-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            <input
              type="text"
              name="honeypot"
              value={formData.honeypot}
              onChange={handleChange}
              style={{ display: 'none' }}
              tabIndex={-1}
              autoComplete="off"
            />

            <Input
              label="Full Name"
              name="fullName"
              type="text"
              required
              value={formData.fullName}
              onChange={handleChange}
              error={errors.fullName}
              placeholder="John Doe"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input
                label="Email Address"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                error={errors.email}
                placeholder="john@example.com"
              />

              <Input
                label="Phone Number"
                name="phone"
                type="tel"
                required
                value={formData.phone}
                onChange={handleChange}
                error={errors.phone}
                placeholder="(555) 123-4567"
              />
            </div>

            <Input
              label="WhatsApp Number"
              name="whatsappNumber"
              type="tel"
              required
              value={formData.whatsappNumber}
              onChange={handleChange}
              error={errors.whatsappNumber}
              placeholder="(555) 123-4567"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Select
                label="State"
                name="state"
                required
                value={formData.state}
                onChange={handleChange}
                error={errors.state}
                options={stateOptions}
              />

              <Select
                label="Employment Status"
                name="employmentStatus"
                required
                value={formData.employmentStatus}
                onChange={handleChange}
                error={errors.employmentStatus}
                options={employmentOptions}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input
                label="Monthly Income"
                name="monthlyIncome"
                type="number"
                required
                value={formData.monthlyIncome}
                onChange={handleChange}
                error={errors.monthlyIncome}
                placeholder="5000"
                min="0"
                step="100"
              />

              <Input
                label="Loan Amount"
                name="loanAmount"
                type="number"
                required
                value={formData.loanAmount}
                onChange={handleChange}
                error={errors.loanAmount}
                placeholder="10000"
                min="0"
                step="500"
              />
            </div>

            <Select
              label="Loan Purpose"
              name="loanPurpose"
              required
              value={formData.loanPurpose}
              onChange={handleChange}
              error={errors.loanPurpose}
              options={loanPurposeOptions}
            />

            <Textarea
              label="Additional Notes"
              name="additionalNotes"
              value={formData.additionalNotes}
              onChange={handleChange}
              placeholder="Tell us more about your loan needs..."
              rows={4}
            />

            {errors.submit && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
                {errors.submit}
              </div>
            )}

            <Button
              type="submit"
              size="lg"
              className="w-full"
              isLoading={isSubmitting}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Submitting Application...' : 'Submit Application'}
            </Button>

            <div className="flex items-center justify-center text-sm text-gray-600">
              <Lock size={16} className="mr-2" />
              Your data is protected by 256-bit SSL encryption
            </div>
          </form>
        </div>
      </div>
    </SectionWrapper>
  );
}
