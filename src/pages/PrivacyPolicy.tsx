import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Logo } from '../components/Logo';

export const PrivacyPolicy: React.FC = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

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
        <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-8 md:p-12">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-800 mb-8">Privacy Policy</h1>
          
          <div className="prose prose-slate max-w-none">
            <p className="text-slate-600 mb-8">
              <strong>Effective Date:</strong> January 1, 2025
            </p>
            
            <p className="text-slate-700 leading-relaxed mb-8">
              CnT AI ("we", "us", "our") operates https://cnt-ai.com ("Service"). Your privacy and trust matter deeply to us. This statement explains what data we collect, why we collect it, how we use it, and your rights.
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-800 mb-4">1. Information We Collect</h2>
              <ul className="list-disc pl-6 space-y-2 text-slate-700">
                <li><strong>Personal Data:</strong> Name, email, company name, and inquiry details.</li>
                <li><strong>Technical Data:</strong> IP address, browser/device info, visited pages, referrer URLs.</li>
                <li><strong>Cookies:</strong> We use cookies and tracking technologies for session management, analytics, and user experience.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-800 mb-4">2. How We Use Your Data</h2>
              <ul className="list-disc pl-6 space-y-2 text-slate-700">
                <li>Respond to inquiries</li>
                <li>Improve site performance</li>
                <li>Send communications (if opted-in)</li>
                <li>Ensure legal compliance and secure operations</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-800 mb-4">3. Sharing of Data</h2>
              <p className="text-slate-700 leading-relaxed">
                We do not sell or rent your data. We may share information with trusted service providers (e.g. hosting, CRM) or with authorities when legally required.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-800 mb-4">4. International Data Transfers</h2>
              <p className="text-slate-700 leading-relaxed">
                If applicable, your data may be processed outside your local jurisdiction. We use secure, compliant data practices.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-800 mb-4">5. Security</h2>
              <p className="text-slate-700 leading-relaxed">
                We follow industry best practices, including encryption and secure storage. However, no system is 100% secure.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-800 mb-4">6. Your Rights</h2>
              <p className="text-slate-700 leading-relaxed">
                You may request access to your data, corrections, deletion, or opt out of marketing at any time.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-800 mb-4">7. Cookies</h2>
              <p className="text-slate-700 leading-relaxed">
                We use session, preference, and security cookies. You may disable them in your browser settings.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-800 mb-4">8. Updates to Policy</h2>
              <p className="text-slate-700 leading-relaxed">
                We may revise this policy. Changes take effect when posted.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-800 mb-4">9. Contact</h2>
              <div className="text-slate-700 leading-relaxed">
                <p><strong>Email:</strong> hello@cnt-ai.com</p>
                <p><strong>Website:</strong> https://cnt-ai.com</p>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};