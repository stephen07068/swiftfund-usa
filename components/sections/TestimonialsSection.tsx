'use client';

import { useState } from 'react';
import SectionWrapper from '../SectionWrapper';
import TestimonialCard from '../TestimonialCard';

export default function TestimonialsSection() {
  const [showAll, setShowAll] = useState(false);
  
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
    { quote: 'No hassle, no stress. Just a straightforward loan process that actually works.', name: 'Richard N.', location: 'Wisconsin', avatar: 'https://randomuser.me/api/portraits/men/19.jpg' },
    { quote: 'The transparency is refreshing. You know exactly what you\'re getting into from day one.', name: 'Elizabeth O.', location: 'Minnesota', avatar: 'https://randomuser.me/api/portraits/women/20.jpg' },
    { quote: 'Got a personal loan for medical expenses. The team was understanding and processed everything quickly.', name: 'Joseph V.', location: 'South Carolina', avatar: 'https://randomuser.me/api/portraits/men/21.jpg' },
    { quote: 'SwiftFund\'s rates beat every other lender I checked. Plus, the service was top-notch.', name: 'Susan Q.', location: 'Alabama', avatar: 'https://randomuser.me/api/portraits/women/22.jpg' },
    { quote: 'I needed funds urgently and SwiftFund came through. Can\'t thank them enough!', name: 'Charles X.', location: 'Louisiana', avatar: 'https://randomuser.me/api/portraits/men/23.jpg' },
    { quote: 'The mobile app makes managing my loan so convenient. Everything is at my fingertips.', name: 'Jessica Y.', location: 'Kentucky', avatar: 'https://randomuser.me/api/portraits/women/24.jpg' },
    { quote: 'Fair terms, quick approval, and excellent communication throughout. Five stars!', name: 'Matthew Z.', location: 'Connecticut', avatar: 'https://randomuser.me/api/portraits/men/25.jpg' },
    { quote: 'SwiftFund helped me start my food truck business. Now I\'m my own boss thanks to them!', name: 'Ashley I.', location: 'Iowa', avatar: 'https://randomuser.me/api/portraits/women/26.jpg' },
    { quote: 'The security measures they have in place made me feel safe sharing my information.', name: 'Andrew U.', location: 'Arkansas', avatar: 'https://randomuser.me/api/portraits/men/27.jpg' },
    { quote: 'I compared multiple lenders and SwiftFund had the best combination of rates and service.', name: 'Stephanie J.', location: 'Mississippi', avatar: 'https://randomuser.me/api/portraits/women/28.jpg' },
    { quote: 'Got approved even with less-than-perfect credit. They look at the whole picture, not just a score.', name: 'Brian K.', location: 'Kansas', avatar: 'https://randomuser.me/api/portraits/men/29.jpg' },
    { quote: 'The repayment schedule is flexible and works with my income. No stress about making payments.', name: 'Rebecca L.', location: 'New Mexico', avatar: 'https://randomuser.me/api/portraits/women/30.jpg' },
    { quote: 'SwiftFund USA is the real deal. Professional, fast, and trustworthy.', name: 'Jason M.', location: 'Nebraska', avatar: 'https://randomuser.me/api/portraits/men/31.jpg' },
    { quote: 'Used the loan to pay off high-interest credit cards. Best financial decision I\'ve made.', name: 'Laura N.', location: 'West Virginia', avatar: 'https://randomuser.me/api/portraits/women/32.jpg' },
    { quote: 'The customer support team is amazing. They answered my calls promptly and were very helpful.', name: 'Ryan O.', location: 'Idaho', avatar: 'https://randomuser.me/api/portraits/men/33.jpg' },
    { quote: 'I was worried about the process being complicated, but it was surprisingly simple and quick.', name: 'Kimberly P.', location: 'Hawaii', avatar: 'https://randomuser.me/api/portraits/women/34.jpg' },
    { quote: 'SwiftFund gave me a second chance when other lenders turned me down. Forever thankful!', name: 'Eric Q.', location: 'New Hampshire', avatar: 'https://randomuser.me/api/portraits/men/35.jpg' },
    { quote: 'The interest rate was lower than I expected. Great value for the service provided.', name: 'Melissa R.', location: 'Maine', avatar: 'https://randomuser.me/api/portraits/women/36.jpg' },
    { quote: 'Fast funding helped me take advantage of a business opportunity. Couldn\'t have done it without SwiftFund.', name: 'Brandon S.', location: 'Rhode Island', avatar: 'https://randomuser.me/api/portraits/men/37.jpg' },
    { quote: 'Everything was explained clearly. No confusing jargon or fine print tricks.', name: 'Nicole T.', location: 'Montana', avatar: 'https://randomuser.me/api/portraits/women/38.jpg' },
    { quote: 'The digital process saved me so much time. No need to visit a bank branch or mail documents.', name: 'Justin U.', location: 'Delaware', avatar: 'https://randomuser.me/api/portraits/men/39.jpg' },
    { quote: 'SwiftFund USA exceeded my expectations in every way. Highly professional service.', name: 'Heather V.', location: 'South Dakota', avatar: 'https://randomuser.me/api/portraits/women/40.jpg' },
    { quote: 'Got the funds I needed for my daughter\'s college tuition. Thank you SwiftFund!', name: 'Gregory W.', location: 'North Dakota', avatar: 'https://randomuser.me/api/portraits/men/41.jpg' },
    { quote: 'The approval was instant and the money arrived faster than promised. Impressive!', name: 'Rachel X.', location: 'Alaska', avatar: 'https://randomuser.me/api/portraits/women/42.jpg' },
    { quote: 'I appreciate how they worked with my schedule and made everything convenient for me.', name: 'Tyler Y.', location: 'Vermont', avatar: 'https://randomuser.me/api/portraits/men/43.jpg' },
    { quote: 'SwiftFund is changing the lending industry for the better. Modern, efficient, and customer-focused.', name: 'Samantha Z.', location: 'Wyoming', avatar: 'https://randomuser.me/api/portraits/women/44.jpg' },
    { quote: 'The peace of mind knowing I have a reliable financial partner is priceless.', name: 'Aaron A.', location: 'Oklahoma', avatar: 'https://randomuser.me/api/portraits/men/45.jpg' },
    { quote: 'From application to funding, everything was seamless. This is how lending should be done.', name: 'Christina B.', location: 'Utah', avatar: 'https://randomuser.me/api/portraits/women/46.jpg' },
    { quote: 'SwiftFund helped me through a tough time. The team was compassionate and professional.', name: 'Marcus C.', location: 'Pennsylvania', avatar: 'https://randomuser.me/api/portraits/men/47.jpg' },
    { quote: 'I\'ve used other lenders before, but SwiftFund is by far the best. Will definitely use them again.', name: 'Tiffany D.', location: 'Maryland', avatar: 'https://randomuser.me/api/portraits/women/48.jpg' },
    { quote: 'The entire experience was positive from start to finish. Can\'t recommend them enough!', name: 'Derek E.', location: 'North Carolina', avatar: 'https://randomuser.me/api/portraits/men/49.jpg' },
    { quote: 'SwiftFund USA made getting a loan easy and stress-free. Thank you for the excellent service!', name: 'Vanessa F.', location: 'New Jersey', avatar: 'https://randomuser.me/api/portraits/women/50.jpg' },
    { quote: 'Quick approval and funding when I needed it most. SwiftFund is a lifesaver!', name: 'William G.', location: 'Alabama', avatar: 'https://randomuser.me/api/portraits/men/51.jpg' },
    { quote: 'The loan helped me upgrade my equipment and grow my business. Excellent rates!', name: 'Emma H.', location: 'Louisiana', avatar: 'https://randomuser.me/api/portraits/women/52.jpg' },
    { quote: 'SwiftFund\'s team made me feel valued as a customer. Great experience overall.', name: 'Oliver I.', location: 'Mississippi', avatar: 'https://randomuser.me/api/portraits/men/53.jpg' },
    { quote: 'I got approved within hours and the funds were in my account the next day. Amazing!', name: 'Sophia J.', location: 'Arkansas', avatar: 'https://randomuser.me/api/portraits/women/54.jpg' },
    { quote: 'The application process was straightforward and the terms were crystal clear.', name: 'Ethan K.', location: 'Kansas', avatar: 'https://randomuser.me/api/portraits/men/55.jpg' },
    { quote: 'SwiftFund helped me consolidate multiple loans into one manageable payment. Life-changing!', name: 'Ava L.', location: 'Nebraska', avatar: 'https://randomuser.me/api/portraits/women/56.jpg' },
    { quote: 'Professional service from start to finish. I felt supported throughout the entire process.', name: 'Noah M.', location: 'Iowa', avatar: 'https://randomuser.me/api/portraits/men/57.jpg' },
    { quote: 'The rates are competitive and the customer service is outstanding. Highly recommend!', name: 'Isabella N.', location: 'Missouri', avatar: 'https://randomuser.me/api/portraits/women/58.jpg' },
    { quote: 'SwiftFund made it possible for me to pursue my education. Forever grateful!', name: 'Liam O.', location: 'Wisconsin', avatar: 'https://randomuser.me/api/portraits/men/59.jpg' },
    { quote: 'Fast, reliable, and trustworthy. Everything you need in a lending partner.', name: 'Mia P.', location: 'Minnesota', avatar: 'https://randomuser.me/api/portraits/women/60.jpg' },
    { quote: 'The online platform is user-friendly and makes managing my loan incredibly easy.', name: 'James Q.', location: 'Illinois', avatar: 'https://randomuser.me/api/portraits/men/61.jpg' },
    { quote: 'SwiftFund approved my loan when my bank said no. They really came through for me!', name: 'Charlotte R.', location: 'Indiana', avatar: 'https://randomuser.me/api/portraits/women/62.jpg' },
  ];

  const displayedTestimonials = showAll ? testimonials : testimonials.slice(0, 6);

  return (
    <SectionWrapper id="testimonials" background="gray">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          What Our Clients Say
        </h2>
        <p className="text-lg text-gray-600">
          Join thousands of satisfied customers across America
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {displayedTestimonials.map((testimonial, index) => (
          <TestimonialCard key={index} {...testimonial} />
        ))}
      </div>

      {!showAll && (
        <div className="text-center">
          <button
            onClick={() => setShowAll(true)}
            className="px-8 py-3 bg-green-600 text-white font-semibold rounded-full hover:bg-green-700 transition-all shadow-md"
          >
            See More Reviews ({testimonials.length - 6} more)
          </button>
        </div>
      )}
    </SectionWrapper>
  );
}
