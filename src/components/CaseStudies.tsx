import React from 'react';
import { ArrowRight, Users, TrendingUp, Clock, CheckCircle } from 'lucide-react';

const caseStudies = [
  {
    id: 1,
    title: "Automated Customer Support",
    company: "TechFlow Solutions",
    industry: "SaaS",
    challenge: "Overwhelmed support team handling 500+ tickets daily",
    solution: "AI-powered chatbot with intelligent routing and escalation",
    results: [
      "85% reduction in response time",
      "60% decrease in support costs",
      "95% customer satisfaction rate"
    ],
    metrics: {
      responseTime: "2 minutes",
      costSaving: "60%",
      satisfaction: "95%"
    },
    image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600",
    link: "/case-study/automated-customer-support"
  },
  {
    id: 2,
    title: "Lead Qualification & Booking",
    company: "GrowthMax Agency",
    industry: "Marketing",
    challenge: "Manual lead qualification consuming 20+ hours weekly",
    solution: "Intelligent lead scoring with automated booking system",
    results: [
      "300% increase in qualified leads",
      "50% reduction in sales cycle",
      "40% boost in conversion rates"
    ],
    metrics: {
      leadIncrease: "300%",
      cycleReduction: "50%",
      conversionBoost: "40%"
    },
    image: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=600",
    link: "/case-study/lead-qualification-booking"
  },
  {
    id: 3,
    title: "Client Onboarding Automation",
    company: "FinanceFirst",
    industry: "Financial Services",
    challenge: "Complex 2-week onboarding process with high drop-off rates",
    solution: "Streamlined automation with personalized guidance",
    results: [
      "75% faster onboarding",
      "90% completion rate",
      "50% reduction in support queries"
    ],
    metrics: {
      speedIncrease: "75%",
      completionRate: "90%",
      supportReduction: "50%"
    },
    image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600",
    link: "/case-study/client-onboarding-automation"
  }
];

export const CaseStudies: React.FC = () => {
  return (
    <section id="case-studies" className="py-20 bg-gradient-to-br from-slate-50 to-sky-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Success Stories
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            See how businesses like yours have transformed their operations with our AI automation solutions
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {caseStudies.map((study, index) => (
            <div
              key={study.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={study.image}
                  alt={study.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="bg-sky-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {study.industry}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  {study.title}
                </h3>
                <p className="text-sky-600 font-medium mb-4">{study.company}</p>
                
                {/* Challenge */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-slate-700 mb-2">Challenge</h4>
                  <p className="text-slate-600 text-sm">{study.challenge}</p>
                </div>

                {/* Key Metrics */}
                <div className="grid grid-cols-3 gap-2 mb-6">
                  {Object.entries(study.metrics).map(([key, value], idx) => (
                    <div key={idx} className="text-center p-2 bg-slate-50 rounded-lg">
                      <div className="text-lg font-bold text-sky-600">{value}</div>
                      <div className="text-xs text-slate-500 capitalize">
                        {key.replace(/([A-Z])/g, ' $1').trim()}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Results */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-slate-700 mb-3">Key Results</h4>
                  <div className="space-y-2">
                    {study.results.map((result, idx) => (
                      <div key={idx} className="flex items-center text-sm text-slate-600">
                        <CheckCircle className="h-4 w-4 text-emerald-500 mr-2 flex-shrink-0" />
                        {result}
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <a
                  href={study.link}
                  className="inline-flex items-center text-sky-600 hover:text-sky-700 font-medium text-sm group/link"
                >
                  Read Full Case Study
                  <ArrowRight className="h-4 w-4 ml-1 group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              Ready to Write Your Success Story?
            </h3>
            <p className="text-slate-600 mb-6">
              Join hundreds of businesses that have transformed their operations with AI automation
            </p>
            <button
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="bg-gradient-to-r from-sky-500 to-emerald-500 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              Start Your Transformation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};