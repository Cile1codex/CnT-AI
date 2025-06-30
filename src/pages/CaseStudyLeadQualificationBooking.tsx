import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle } from 'lucide-react';
import { Logo } from '../components/Logo';

export const CaseStudyLeadQualificationBooking: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center group">
              <Logo size="md" className="mr-3 group-hover:scale-110 transition-transform duration-300" />
              <span className="text-xl font-bold bg-gradient-to-r from-sky-600 to-emerald-600 bg-clip-text text-transparent">
                CnT AI
              </span>
            </Link>
            <Link
              to="/#use-cases"
              className="flex items-center text-slate-600 hover:text-sky-600 transition-colors duration-200"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Success Stories
            </Link>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-8 md:p-12">
          {/* Header */}
          <div className="flex items-start justify-between mb-8">
            <div>
              <div className="flex items-center mb-4">
                <CheckCircle className="h-6 w-6 text-emerald-500 mr-3" />
                <span className="text-emerald-600 font-semibold text-lg">Case Study</span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
                Lead Qualification & Booking
              </h1>
              <div className="text-slate-600 text-lg">
                <span className="font-semibold">Client:</span> ServiceNow Co. 
                <span className="text-slate-400 mx-2">•</span>
                <span className="text-emerald-600">Professional Services</span>
              </div>
            </div>
            <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center flex-shrink-0">
              <CheckCircle className="h-8 w-8 text-white" />
            </div>
          </div>

          <div className="prose prose-slate max-w-none">
            {/* Challenge */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center">
                <span className="text-3xl mr-3">❌</span>
                The Challenge
              </h2>
              <p className="text-slate-700 leading-relaxed text-lg">
                The team at ServiceNow was manually following up with leads through email. Appointment scheduling was slow and inconsistent, and unqualified leads were wasting time.
              </p>
            </section>

            {/* Solution */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center">
                <span className="text-3xl mr-3">🔧</span>
                Our Solution
              </h2>
              <p className="text-slate-700 leading-relaxed text-lg mb-6">
                CnT AI designed a smart lead capture flow with:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-3 h-3 bg-emerald-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <span className="text-slate-700 text-lg">Interactive forms to qualify prospects in real-time</span>
                </li>
                <li className="flex items-start">
                  <div className="w-3 h-3 bg-emerald-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <span className="text-slate-700 text-lg">Automated booking calendar integration</span>
                </li>
                <li className="flex items-start">
                  <div className="w-3 h-3 bg-emerald-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <span className="text-slate-700 text-lg">Email reminders + follow-up sequences</span>
                </li>
              </ul>
            </section>

            {/* Results */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center">
                <span className="text-3xl mr-3">✅</span>
                Results Achieved
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4">
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-emerald-600 mr-3 flex-shrink-0" />
                    <span className="text-slate-800 font-medium">50% increase in qualified leads</span>
                  </div>
                </div>
                <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4">
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-emerald-600 mr-3 flex-shrink-0" />
                    <span className="text-slate-800 font-medium">90% improvement in response time</span>
                  </div>
                </div>
                <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4">
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-emerald-600 mr-3 flex-shrink-0" />
                    <span className="text-slate-800 font-medium">Zero missed discovery calls in first month</span>
                  </div>
                </div>
                <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4">
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-emerald-600 mr-3 flex-shrink-0" />
                    <span className="text-slate-800 font-medium">2x increase in booked meetings</span>
                  </div>
                </div>
              </div>
            </section>

            {/* CTA */}
            <section className="text-center">
              <div className="bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Ready to Fill Your Calendar with Qualified Leads?</h3>
                <p className="text-emerald-100 mb-6 max-w-2xl mx-auto">
                  Let's build an intelligent lead qualification system that automatically books meetings with your ideal prospects while filtering out time-wasters.
                </p>
                <Link
                  to="/#contact"
                  className="inline-flex items-center bg-white text-emerald-600 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105"
                >
                  Book Your Free Consultation
                </Link>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};