import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Star, Sparkles, TrendingUp, Award, BarChart3, Target } from 'lucide-react';
import { Logo } from '../components/Logo';
import { Button } from '../components/ui/Button';

export const ReviewBoost: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const scrollToContact = () => {
    navigate('/#contact');
    setTimeout(() => {
      const element = document.getElementById('contact');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <div className="min-h-screen bg-blue-50 w-full overflow-x-hidden">
      {/* Floating Particles */}
      <div className="floating-particle"></div>
      <div className="floating-particle"></div>
      <div className="floating-particle"></div>

      {/* Header */}
      <header className="bg-white shadow-sm border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center group">
              <Logo size="md" className="mr-3 group-hover:scale-110 transition-transform duration-300" />
              <span className="text-xl font-bold bg-gradient-to-r from-sky-600 to-emerald-600 bg-clip-text text-transparent">
                CnT AI
              </span>
            </Link>
            <Link
              to="/#services"
              className="flex items-center text-slate-600 hover:text-sky-600 transition-colors duration-200"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Services
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 animated-gradient relative overflow-hidden">
        <div className="floating-particle"></div>
        <div className="floating-particle"></div>

        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-20 h-20 bg-gradient-to-r from-yellow-500 to-amber-600 rounded-3xl flex items-center justify-center mx-auto mb-8 hover-scale will-change-transform">
            <Star className="h-10 w-10 text-white" />
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight text-glow">
            Dominate Google With
            <span className="block bg-gradient-to-r from-yellow-400 to-amber-400 bg-clip-text text-transparent text-glow-emerald">
              275+ 5-Star Reviews in Months
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            We send personalized AI messages at precisely the right moment to get customers leaving glowing reviews. Automated. Authentic. Proven to work.
          </p>

          <Button size="lg" onClick={scrollToContact} icon={ArrowRight} className="premium-button">
            Become #1 in Your Market
          </Button>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="premium-card rounded-2xl p-8">
              <div className="text-5xl font-bold bg-gradient-to-r from-yellow-500 to-amber-600 bg-clip-text text-transparent mb-2">
                275+
              </div>
              <div className="text-slate-600 font-medium">Reviews in 5 Months</div>
              <div className="text-sm text-slate-500 mt-2">For One Client</div>
            </div>
            <div className="premium-card rounded-2xl p-8">
              <div className="text-5xl font-bold bg-gradient-to-r from-emerald-500 to-teal-600 bg-clip-text text-transparent mb-2">
                #1
              </div>
              <div className="text-slate-600 font-medium">Google Ranking</div>
              <div className="text-sm text-slate-500 mt-2">For Local Reviews</div>
            </div>
            <div className="premium-card rounded-2xl p-8">
              <div className="text-5xl font-bold bg-gradient-to-r from-sky-500 to-blue-600 bg-clip-text text-transparent mb-2">
                85%+
              </div>
              <div className="text-slate-600 font-medium">Response Rate</div>
              <div className="text-sm text-slate-500 mt-2">Happy Customers</div>
            </div>
          </div>
        </div>
      </section>

      {/* What You Get Section */}
      <section className="py-20 bg-gradient-to-b from-blue-50 to-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
              How We Get You More 5-Star Reviews
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Our proven system gets customers excited to leave reviews, not annoyed by them.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center premium-card rounded-2xl p-8 hover-scale will-change-transform">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-amber-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Sparkles className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">Perfect Timing AI</h3>
              <p className="text-slate-600 leading-relaxed">
                Messages sent when customers are most satisfied—right after a great experience or successful outcome. Not before, not too late.
              </p>
            </div>

            <div className="text-center premium-card rounded-2xl p-8 hover-scale will-change-transform">
              <div className="w-16 h-16 bg-gradient-to-r from-sky-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">Personalized Messages</h3>
              <p className="text-slate-600 leading-relaxed">
                Every message is unique, personalized with customer details, purchase history, and interaction data. Never generic, always genuine.
              </p>
            </div>

            <div className="text-center premium-card rounded-2xl p-8 hover-scale will-change-transform">
              <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <BarChart3 className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">Smart Follow-Ups</h3>
              <p className="text-slate-600 leading-relaxed">
                Automated gentle reminders to customers who haven't responded yet. Never pushy, always polite. Maximize review completion rates.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The System Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
              The System That Works
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="premium-card rounded-2xl p-8 shadow-lg border border-slate-200">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-amber-600 rounded-xl flex items-center justify-center mr-4">
                  <span className="text-white font-bold text-lg">1</span>
                </div>
                <h3 className="text-xl font-bold text-slate-800">Happy Customer Detection</h3>
              </div>
              <p className="text-slate-600 leading-relaxed mb-4">
                Our AI analyzes customer interactions, purchase history, support tickets, and engagement metrics to identify the exact moment they're most satisfied.
              </p>
              <div className="space-y-2">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></div>
                  <span className="text-slate-600 text-sm">Tracks positive interactions</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></div>
                  <span className="text-slate-600 text-sm">Monitors satisfaction signals</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></div>
                  <span className="text-slate-600 text-sm">Identifies perfect timing</span>
                </div>
              </div>
            </div>

            <div className="premium-card rounded-2xl p-8 shadow-lg border border-slate-200">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-sky-500 to-blue-600 rounded-xl flex items-center justify-center mr-4">
                  <span className="text-white font-bold text-lg">2</span>
                </div>
                <h3 className="text-xl font-bold text-slate-800">Personalized Outreach</h3>
              </div>
              <p className="text-slate-600 leading-relaxed mb-4">
                Each message is uniquely crafted with customer's name, specific product/service details, and references to their positive experience. Feels human, not robotic.
              </p>
              <div className="space-y-2">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-sky-500 rounded-full mr-3"></div>
                  <span className="text-slate-600 text-sm">Custom message per customer</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-sky-500 rounded-full mr-3"></div>
                  <span className="text-slate-600 text-sm">Brand voice matching</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-sky-500 rounded-full mr-3"></div>
                  <span className="text-slate-600 text-sm">Multi-channel delivery</span>
                </div>
              </div>
            </div>

            <div className="premium-card rounded-2xl p-8 shadow-lg border border-slate-200">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center mr-4">
                  <span className="text-white font-bold text-lg">3</span>
                </div>
                <h3 className="text-xl font-bold text-slate-800">One-Click Review Process</h3>
              </div>
              <p className="text-slate-600 leading-relaxed mb-4">
                Direct links to your Google, Yelp, or Trustpilot profiles. Customers can leave a review in under 30 seconds. No friction, no confusion.
              </p>
              <div className="space-y-2">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></div>
                  <span className="text-slate-600 text-sm">Platform-specific links</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></div>
                  <span className="text-slate-600 text-sm">Mobile-optimized flow</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></div>
                  <span className="text-slate-600 text-sm">Pre-filled information</span>
                </div>
              </div>
            </div>

            <div className="premium-card rounded-2xl p-8 shadow-lg border border-slate-200">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mr-4">
                  <span className="text-white font-bold text-lg">4</span>
                </div>
                <h3 className="text-xl font-bold text-slate-800">Smart Follow-Up Sequence</h3>
              </div>
              <p className="text-slate-600 leading-relaxed mb-4">
                Gentle reminders sent to non-responders after strategic intervals. A/B tested timing ensures maximum response without annoying customers.
              </p>
              <div className="space-y-2">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                  <span className="text-slate-600 text-sm">Strategic timing intervals</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                  <span className="text-slate-600 text-sm">Polite, non-pushy tone</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                  <span className="text-slate-600 text-sm">Automatic stop on response</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 bg-gradient-to-b from-slate-100 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="premium-card rounded-3xl p-12 shadow-xl border border-slate-200">
            <div className="text-center mb-12">
              <Award className="h-16 w-16 text-yellow-500 mx-auto mb-4" />
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
                Real Results: Client Case Study
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-slate-800 mb-4">
                  From Hidden to #1 on Google
                </h3>
                <p className="text-slate-600 leading-relaxed mb-6">
                  A local service business was buried on page 3 of Google with only 12 reviews. After implementing our automated review system:
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Star className="h-6 w-6 text-yellow-500 mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-semibold text-slate-800">275 New 5-Star Reviews</div>
                      <div className="text-slate-600 text-sm">In just 5 months, fully automated</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <TrendingUp className="h-6 w-6 text-emerald-500 mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-semibold text-slate-800">Rank #1 on Google Maps</div>
                      <div className="text-slate-600 text-sm">For all major local search terms</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <BarChart3 className="h-6 w-6 text-sky-500 mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-semibold text-slate-800">312% Increase in Leads</div>
                      <div className="text-slate-600 text-sm">Directly from organic search traffic</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-yellow-50 to-amber-50 rounded-2xl p-8 border border-yellow-200">
                <div className="text-6xl font-bold text-yellow-500 mb-4">85%</div>
                <div className="text-slate-700 text-lg font-semibold mb-2">
                  Customer Response Rate
                </div>
                <p className="text-slate-600">
                  Most customers happily left reviews when asked at the right time with a personalized message. No incentives. No pressure. Just perfect timing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 animated-gradient relative overflow-hidden">
        <div className="floating-particle"></div>
        <div className="floating-particle"></div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 text-glow">
            Ready to Dominate Google Reviews?
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Let's build your automated review generation system and get you to #1 in your market.
          </p>
          <Button size="lg" onClick={scrollToContact} icon={ArrowRight} className="premium-button">
            Get Your Review System Built
          </Button>
        </div>
      </section>
    </div>
  );
};
