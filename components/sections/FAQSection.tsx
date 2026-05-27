'use client';

import SectionWrapper from '../SectionWrapper';
import FAQAccordion from '../FAQAccordion';

const faqs = [
  {
    question: 'How quickly can I get approved?',
    answer: 'Most applications receive a decision within minutes. Our advanced scoring engine processes your information instantly, and you\'ll receive immediate feedback on your eligibility.',
  },
  {
    question: 'What are the eligibility requirements?',
    answer: 'You must be a U.S. citizen or permanent resident, at least 18 years old, have a valid bank account, and demonstrate a stable source of income. Specific requirements may vary based on loan amount and type.',
  },
  {
    question: 'Will checking my eligibility affect my credit score?',
    answer: 'No. Our initial eligibility check uses a soft credit inquiry that does not impact your credit score. Only if you proceed with a full application will a hard inquiry be performed.',
  },
  {
    question: 'What can I use the loan for?',
    answer: 'Our loans can be used for various purposes including personal expenses, business expansion, debt consolidation, home improvements, and more. We offer flexible terms to match your specific needs.',
  },
  {
    question: 'How is my data protected?',
    answer: 'We use bank-grade 256-bit SSL encryption to protect all your personal and financial information. Our systems are regularly audited and comply with all federal data protection regulations.',
  },
  {
    question: 'What are the repayment terms?',
    answer: 'We offer flexible repayment schedules ranging from 6 to 60 months, depending on your loan amount and financial situation. You can customize your monthly payment to fit your budget.',
  },
];

export default function FAQSection() {
  return (
    <SectionWrapper id="faq" background="white">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-[10px] font-semibold text-zinc-400 uppercase tracking-[0.18em] mb-3">
            FAQ
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 tracking-tight mb-3">
            Frequently asked questions
          </h2>
          <p className="text-[15px] text-zinc-500">
            Everything you need to know about SwiftFund USA
          </p>
        </div>

        <div className="bg-white rounded-2xl border border-zinc-100 px-6 shadow-[0_2px_16px_-4px_rgba(0,0,0,0.06)]">
          <FAQAccordion items={faqs} />
        </div>
      </div>
    </SectionWrapper>
  );
}
