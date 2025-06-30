import React, { useEffect, useState } from 'react';
import { ArrowRight, Quote, CheckCircle } from 'lucide-react';

export const CaseStudies: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('case-studies');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const caseStudies = [
    {
      id: 'ecommerce-case-study',
      title: 'Automated Customer Support',
      client: 'RetailFlow',
      industry: 'E-Commerce & Retail',
      challenge: 'RetailFlow struggled with an overwhelming volume of customer inquiries — order tracking, return policies, and FAQs were handled manually, taking up hours of staff time daily. The team was stretched thin, and customers experienced delayed responses.',
      solution: [
        'Handle 80% of common queries instantly',
        'Trigger tickets for complex requests',
        'Capture lead data from abandoned carts'
      ],
      results: [
        '70% reduction in support load',
        '24/7 availability without hiring more reps',
        '95% customer satisfaction rating maintained',
        'Saved over 30 hours of manual labor per week'
      ],
      testimonial: {
        quote: 'This bot doesn\'t sleep. It solved our support bottleneck without hiring. Customers get answers in seconds, and we focus on growth.',
        author: 'Maria J.',
        title: 'Customer Experience Manager'
      },
      color: 'from-sky-500 to-blue-600'
    },
    {
      id: 'services-case-study',
      title: 'Lead Qualification & Booking',
      client: 'ServiceNow Co.',
      industry: 'Professional Services',
      challenge: 'The team at ServiceNow was manually following up with leads through email. Appointment scheduling was slow and inconsistent, and unqualified leads were wasting time.',
      solution: [
        'Interactive forms to qualify prospects in real-time',
        'Automated booking calendar integration',
        'Email reminders + follow-up sequences'
      ],
      results: [
        '50% increase in qualified leads',
        '90% improvement in response time',
        'Zero missed discovery calls in first month',
        '2x increase in booked meetings'
      ],
      testimonial: {
        quote: 'No more chasing leads. CnT AI built a system that fills our calendar with real prospects — and filters out the rest.',
        author: 'James D.',
        title: 'Managing Partner'
      },
      color: 'from-emerald-500 to-teal-600'
    },
    {
      id: 'agency-case-study',
      title: 'Client Onboarding Automation',
      client: 'BrightScale Agency',
      industry: 'Marketing Firm',
      challenge: 'Onboarding new clients was painfully manual — contracts, invoices, project forms, and kickoff meetings involved multiple emails and delays. Clients were frustrated, and ops were inefficient.',
      solution: [
        'Custom intake flows for contracts & payments',
        'Triggered onboarding emails and task sequences',
        'Dashboard updates synced with their project manager tool'
      ],
      results: [
        '5x faster onboarding process',
        'Consistent client experience every time',
        '80% less manual follow-up',
        'More time for strategy, less admin'
      ],
      testimonial: {
        quote: 'It\'s like having a second operations manager. Clients feel taken care of, and our team saves hours on each onboarding.',
        author: 'Lina B.',
        title: 'COO'
      },
      color: 'from-purple-500 to-indigo-600'
    },
    {
      id: 'saas-case-study',
      title: 'User Activation Flows',
      client: 'Launchware',
      industry: 'SaaS Startup',
      challenge: 'Launchware had thousands of signups but low activation rates. Users dropped off before completing onboarding or engaging with the product.',
      solution: [
        'Personalized flows based on user goals and profile',
        'In-app messages and triggered emails',
        'Engagement scoring to trigger sales team outreach'
      ],
      results: [
        '60% improvement in user activation',
        '40% reduction in churn within 90 days',
        'Improved product feedback collection',
        'Scalable onboarding without increasing support tickets'
      ],
      testimonial: {
        quote: 'We went from users ghosting to users converting. The system shows them exactly what to do next — and when.',
        author: 'Andre V.',
        title: 'Product Lead'
      },
      color: 'from-orange-500 to-red-600'
    }
  ];

  return (
    <section id="case-studies" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Detailed <span className="bg-gradient-to-r from-sky-400 to-emerald-400 bg-clip-text text-transparent">Case Studies</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Deep dive into how we've transformed businesses across different industries with our AI automation solutions.
          </p>
        </div>

        <div className="space-y-16">
          {caseStudies.map((study, index) => (
            <div
              key={study.id}
              id={study.id}
              className={`transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="bg-slate-800 rounded-3xl p-8 md:p-12 border border-slate-700 shadow-2xl">
                {/* Header */}
                <div className="flex items-start justify-between mb-8">
                  <div>
                    <div className="flex items-center mb-4">
                      <CheckCircle className="h-6 w-6 text-emerald-400 mr-3" />
                      <span className="text-emerald-400 font-semibold text-lg">Case Study</span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">{study.title}</h3>
                    <div className="text-gray-300">
                      <span className="font-semibold">Client:</span> {study.client} 
                      <span className="text-gray-400 mx-2">•</span>
                      <span className="text-sky-400">{study.industry}</span>
                    </div>
                  </div>
                  <div className={`w-16 h-16 bg-gradient-to-r ${study.color} rounded-2xl flex items-center justify-center flex-shrink-0`}>
                    <CheckCircle className="h-8 w-8 text-white" />
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  {/* Left Column */}
                  <div className="space-y-8">
                    {/* Challenge */}
                    <div>
                      <h4 className="text-xl font-bold text-red-400 mb-4 flex items-center">
                        <span className="text-2xl mr-2">❌</span>
                        The Challenge
                      </h4>
                      <p className="text-gray-300 leading-relaxed">{study.challenge}</p>
                    </div>

                    {/* Solution */}
                    <div>
                      <h4 className="text-xl font-bold text-sky-400 mb-4 flex items-center">
                        <span className="text-2xl mr-2">🔧</span>
                        Our Solution
                      </h4>
                      <p className="text-gray-300 mb-4">CnT AI deployed a custom solution that integrated seamlessly with their existing systems:</p>
                      <ul className="space-y-3">
                        {study.solution.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start">
                            <div className="w-2 h-2 bg-sky-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span className="text-gray-300">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Right Column */}
                  <div className="space-y-8">
                    {/* Results */}
                    <div>
                      <h4 className="text-xl font-bold text-emerald-400 mb-4 flex items-center">
                        <span className="text-2xl mr-2">✅</span>
                        Results Achieved
                      </h4>
                      <div className="grid grid-cols-1 gap-4">
                        {study.results.map((result, resultIndex) => (
                          <div key={resultIndex} className="bg-slate-700/50 rounded-lg p-4 border border-emerald-500/20">
                            <div className="flex items-center">
                              <CheckCircle className="h-5 w-5 text-emerald-400 mr-3 flex-shrink-0" />
                              <span className="text-white font-medium">{result}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Testimonial */}
                    <div className="bg-gradient-to-r from-slate-700/50 to-slate-600/50 rounded-2xl p-6 border border-slate-600">
                      <Quote className="h-8 w-8 text-sky-400 mb-4" />
                      <blockquote className="text-gray-200 italic text-lg leading-relaxed mb-4">
                        "{study.testimonial.quote}"
                      </blockquote>
                      <div className="flex items-center">
                        <div>
                          <div className="text-white font-semibold">{study.testimonial.author}</div>
                          <div className="text-gray-400 text-sm">{study.testimonial.title}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className={`mt-20 text-center transition-all duration-1000 delay-800 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="bg-gradient-to-r from-sky-500 to-emerald-500 rounded-2xl p-8 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to Write Your Success Story?</h3>
            <p className="text-sky-100 mb-8 max-w-2xl mx-auto text-lg">
              Every business has unique challenges. Let us show you how AI automation can solve yours with a personalized strategy session.
            </p>
            <button 
              onClick={scrollToContact}
              className="bg-white text-sky-600 font-semibold px-8 py-4 rounded-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 inline-flex items-center"
            >
              Schedule Your Strategy Call
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};