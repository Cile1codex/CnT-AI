import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Logo } from '../components/Logo';

export const TermsOfService: React.FC = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="min-h-screen bg-blue-50 w-full overflow-x-hidden">
      {/* Floating Particles */}
      <div className="floating-particle"></div>
      <div className="floating-particle"></div>

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
              to="/"
              className="flex items-center text-slate-600 hover:text-sky-600 transition-colors duration-200"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Link>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="premium-card rounded-2xl shadow-lg border border-slate-200 p-8 md:p-12">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-800 mb-8">Terms of Service</h1>
          
          <div className="prose prose-slate max-w-none">
            <p className="text-slate-600 mb-8">
              <strong>Effective Date:</strong> January 1, 2025
            </p>
            
            <p className="text-slate-700 leading-relaxed mb-8">
              These Terms of Service ("Terms") govern your use of our website and services. By using our site, you agree to these Terms and our Privacy Policy.
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-800 mb-4">1. Acceptance</h2>
              <p className="text-slate-700 leading-relaxed">
                Use of this website indicates acceptance of these Terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-800 mb-4">2. Services Offered</h2>
              <p className="text-slate-700 leading-relaxed">
                CnT AI provides AI automation, chatbots, automated websites, backend integrations, and related services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-800 mb-4">3. User Responsibilities</h2>
              <p className="text-slate-700 leading-relaxed">
                You agree not to engage in unlawful behavior, misuse our systems, or submit false information.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-800 mb-4">4. Intellectual Property</h2>
              <p className="text-slate-700 leading-relaxed">
                All site content is owned by CnT AI. Reproduction or unauthorized reuse is prohibited.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-800 mb-4">5. Disclaimers & Limitations</h2>
              <p className="text-slate-700 leading-relaxed">
                Service is provided "as is." We are not responsible for damages, losses, or downtime. Maximum liability is limited to service fees paid in the last 6 months, if any.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-800 mb-4">6. Termination</h2>
              <p className="text-slate-700 leading-relaxed">
                We may restrict access or terminate accounts that violate our terms or misuse the service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-800 mb-4">7. Governing Law</h2>
              <p className="text-slate-700 leading-relaxed">
                These Terms are governed by the laws of the United States.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-800 mb-4">8. Changes to Terms</h2>
              <p className="text-slate-700 leading-relaxed">
                We may modify these Terms at any time. Continued use indicates acceptance.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-800 mb-4">9. Contact</h2>
              <div className="text-slate-700 leading-relaxed">
                <p><strong>Email:</strong> cntautomations@gmail.com</p>
                <p><strong>Website:</strong> https://cnt-ai.com</p>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};