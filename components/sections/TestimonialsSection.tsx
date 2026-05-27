'use client';

import { useState } from 'react';
import SectionWrapper from '../SectionWrapper';
import TestimonialCard from '../TestimonialCard';

const testimonials = [
  { quote: 'SwiftFund USA made my small business expansion possible within a week. The process was flawlessly digital and the support was incredible.', name: 'Michael R.', location: 'Texas', avatar: 'https://randomuser.me/api/portraits/men/1.jpg' },
  { quote: 'I\'ve never had a smoother experience with a financial institution. No paperwork nightmares, just direct communication and fast funding.', name: 'Sarah J.', location: 'California', avatar: 'https://randomuser.me/api/portraits/women/2.jpg' },
  { quote: 'Transparent terms and a user-friendly portal. I knew exactly what I was signing up for. Truly a breath of fresh air in banking.', name: 'David L.', location: 'New York', avatar: 'https://randomuser.me/api/portraits/men/3.jpg' },
  { quote: 'Got approved in less than 24 hours! The team was professional and the rates were better than my bank offered.', name: 'Jennifer M.', location: 'Florida', avatar: 'https://randomuser.me/api/portraits/women/4.jpg' },
  { quote: 'Finally, a lending platform that treats you like a person, not a number. Highly recommend SwiftFund USA!', name: 'Robert K.', location: 'Illinois', avatar: 'https://randomuser.me/api/portraits/men/5.jpg' },
  { quote: 'The application was so easy. I completed it on my phone during lunch break and got approved the same day.', name: 'Amanda T.', location: 'Georgia', avatar: 'https://randomuser.me/api/portraits/women/6.jpg' },
  { quote: 'SwiftFund helped me consolidate my debt with a much lower interest rate. I\'m finally seeing light at the end of the tunnel.', name: 'James P.', location: 'Ohio', avatar: 'https://randomuser.me/api/portraits/men/7.jpg' },
  { quote: 'Best customer service I\'ve experienced. They answered all my questions and made the process stress-free.', name: 'Lisa W.', location: 'Arizona', avatar: 'https://randomuser.me/api/portraits/women/8.jpg' },
  { quote: 'I was skeptical at first, but SwiftFund delivered exactly what they promised. Fast, secure, and reliable.', name: 'Christopher B.', location: 'Washington', avatar: 'https://randomuser.me/api/portraits/men/9.jpg' },
  { quote: 'Used the funds to renovate my home. The flexible repayment terms fit perfectly with my budget.', name: 'Maria G.', location: 'Nevada', avatar: 'https://randomuser.me/api/portraits/women/10.jpg' },
  { quote: 'As a first-time borrower, I appreciated how they explained everything clearly. No hidden fees or surprises.', name: 'Daniel H.', location: 'Colorado', avatar: 'https://randomuser.me/api/portraits/men/11.jpg' },
  { quote: 'The online portal is fantastic. I can track everything and make payments easily from my phone.', name: 'Patricia S.', location: 'Oregon', avatar: 'https://randomuser.me/api/portraits/women/12.jpg' },
  { quote: 'SwiftFund USA saved my business during a cash flow crisis. Forever grateful for their quick response.', name: 'Kevin D.', location: 'Michigan', avatar: 'https://randomuser.me/api/portraits/men/13.jpg' },
  { quote: 'Competitive rates and excellent service. I\'ve already recommended them to three friends.', name: 'Nancy C.', location: 'Virginia', avatar: 'https://randomuser.me/api/portraits/women/14.jpg' },
  { quote: 'The approval process was incredibly fast. Had the money in my account within 48 hours.', name: 'Thomas E.', location: 'Tennessee', avatar: 'https://randomuser.me/api/portraits/men/15.jpg' },
  { quote: 'Professional, courteous, and efficient. Everything you want in a financial partner.', name: 'Barbara F.', location: 'Massachusetts', avatar: 'https://randomuser.me/api/portraits/women/16.jpg' },
  { quote: 'I love that they use modern technology but still provide personal support when you need it.', name: 'Steven A.', location: 'Indiana', avatar: 'https://randomuser.me/api/portraits/men/17.jpg' },
  { quote: 'SwiftFund made my dream wedding possible. Thank you for the quick approval and great rates!', name: 'Michelle L.', location: 'Missouri', avatar: 'https://randomuser.me/api/portraits/women/18.jpg' },
];

export default function TestimonialsSection() {
  const [showAll, setShowAll] = useState(false);
  const displayed = showAll ? testimonials : testimonials.slice(0, 6);

  return (
    <SectionWrapper id="testimonials" background="gray">
      <div className="text-center mb-12">
        <p className="text-[10px] font-semibold text-zinc-400 uppercase tracking-[0.18em] mb-3">
          Client Stories
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 tracking-tight mb-3">
          What our clients say
        </h2>
        <p className="text-[15px] text-zinc-500">
          Join thousands of satisfied customers across America
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        {displayed.map((t, i) => (
          <TestimonialCard key={i} {...t} />
        ))}
      </div>

      {!showAll && (
        <div className="text-center">
          <button
            onClick={() => setShowAll(true)}
            className="px-6 py-2.5 rounded-lg border border-zinc-200 text-[13.5px] font-medium text-zinc-600 hover:border-zinc-300 hover:bg-white hover:text-zinc-900 transition-all duration-150 shadow-sm"
          >
            See more reviews ({testimonials.length - 6} more)
          </button>
        </div>
      )}
    </SectionWrapper>
  );
}
