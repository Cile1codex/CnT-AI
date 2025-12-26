import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, RefreshCw, DollarSign, Clock, Zap, Users, TrendingUp } from 'lucide-react';
import { Logo } from '../components/Logo';
import { Button } from '../components/ui/Button';

export const CustomerReactivation: React.FC = () => {
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
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-rose-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-20 h-20 bg-gradient-to-r from-pink-500 to-rose-600 rounded-3xl flex items-center justify-center mx-auto mb-8 hover-scale will-change-transform">
            <RefreshCw className="h-10 w-10 text-white" />
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight text-glow">
            Turn Dead Leads Into
            <span className="block bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent text-glow-emerald">
              $6K/Month in Revenue
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Automated personalized messages to stale leads and past customers with smart timing and exclusive discounts. Wake up sleeping revenue.
          </p>

          <Button size="lg" onClick={scrollToContact} icon={ArrowRight} className="premium-button">
            Reactivate Your Customer Base
          </Button>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="premium-card rounded-2xl p-8">
              <div className="text-5xl font-bold bg-gradient-to-r from-emerald-500 to-teal-600 bg-clip-text text-transparent mb-2">
                $6K+
              </div>
              <div className="text-slate-600 font-medium">Revenue in Month 1</div>
              <div className="text-sm text-slate-500 mt-2">From Returning Customers</div>
            </div>
            <div className="premium-card rounded-2xl p-8">
              <div className="text-5xl font-bold bg-gradient-to-r from-pink-500 to-rose-600 bg-clip-text text-transparent mb-2">
                23%
              </div>
              <div className="text-slate-600 font-medium">Reactivation Rate</div>
              <div className="text-sm text-slate-500 mt-2">Industry Average: 5-8%</div>
            </div>
            <div className="premium-card rounded-2xl p-8">
              <div className="text-5xl font-bold bg-gradient-to-r from-sky-500 to-blue-600 bg-clip-text text-transparent mb-2">
                100%
              </div>
              <div className="text-slate-600 font-medium">Automated</div>
              <div className="text-sm text-slate-500 mt-2">Zero Manual Work</div>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="py-20 bg-gradient-to-b from-blue-50 to-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
              The Hidden Gold Mine in Your Database
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Most businesses sit on thousands of dollars in untapped revenue from past customers and cold leads.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="premium-card rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-slate-800 mb-6">
                Your Sleeping Revenue
              </h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Clock className="h-6 w-6 text-rose-500 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold text-slate-800">Stale Leads</div>
                    <div className="text-slate-600 text-sm">People who inquired but never bought—still interested, just forgot about you</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <Users className="h-6 w-6 text-pink-500 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold text-slate-800">Past Customers</div>
                    <div className="text-slate-600 text-sm">Previous buyers who haven't returned in months—ready to purchase again with the right nudge</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <RefreshCw className="h-6 w-6 text-purple-500 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold text-slate-800">Abandoned Carts</div>
                    <div className="text-slate-600 text-sm">People who started checkout but didn't finish—just need a reminder and incentive</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-2xl p-8 border border-rose-200">
              <div className="text-4xl font-bold text-rose-600 mb-4">5-7x</div>
              <div className="text-slate-700 text-lg font-semibold mb-2">
                Cheaper Than New Customers
              </div>
              <p className="text-slate-600 mb-6">
                Reactivating old customers costs a fraction of acquiring new ones. They already know you, trust you, and have bought from you before.
              </p>
              <div className="bg-white rounded-lg p-4 border border-rose-200">
                <div className="text-slate-700 font-medium mb-2">Most businesses leave this money on the table because:</div>
                <ul className="text-sm text-slate-600 space-y-1">
                  <li>• Manual outreach is too time-consuming</li>
                  <li>• Generic emails get ignored</li>
                  <li>• No system to track who to contact when</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
              How We Bring Them Back
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Personalized, timely outreach that makes customers feel valued—not spammed.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="premium-card rounded-2xl p-8 shadow-lg border border-slate-200">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-rose-600 rounded-xl flex items-center justify-center mr-4">
                  <span className="text-white font-bold text-lg">1</span>
                </div>
                <h3 className="text-xl font-bold text-slate-800">Smart Segmentation</h3>
              </div>
              <p className="text-slate-600 leading-relaxed mb-4">
                Our AI analyzes your customer database and identifies exactly who to contact and when based on purchase history, engagement patterns, and optimal timing windows.
              </p>
              <div className="space-y-2">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-pink-500 rounded-full mr-3"></div>
                  <span className="text-slate-600 text-sm">Stale leads (30-90 days inactive)</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-pink-500 rounded-full mr-3"></div>
                  <span className="text-slate-600 text-sm">Past customers (6+ months since purchase)</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-pink-500 rounded-full mr-3"></div>
                  <span className="text-slate-600 text-sm">Abandoned cart users (24-72 hours)</span>
                </div>
              </div>
            </div>

            <div className="premium-card rounded-2xl p-8 shadow-lg border border-slate-200">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-sky-500 to-blue-600 rounded-xl flex items-center justify-center mr-4">
                  <span className="text-white font-bold text-lg">2</span>
                </div>
                <h3 className="text-xl font-bold text-slate-800">Hyper-Personalized Messages</h3>
              </div>
              <p className="text-slate-600 leading-relaxed mb-4">
                Every message is unique, referencing their specific purchase history, preferences, and past interactions. Feels like a personal note, not a mass email.
              </p>
              <div className="space-y-2">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-sky-500 rounded-full mr-3"></div>
                  <span className="text-slate-600 text-sm">Name + purchase history</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-sky-500 rounded-full mr-3"></div>
                  <span className="text-slate-600 text-sm">Product recommendations based on past buys</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-sky-500 rounded-full mr-3"></div>
                  <span className="text-slate-600 text-sm">References to their last interaction</span>
                </div>
              </div>
            </div>

            <div className="premium-card rounded-2xl p-8 shadow-lg border border-slate-200">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center mr-4">
                  <span className="text-white font-bold text-lg">3</span>
                </div>
                <h3 className="text-xl font-bold text-slate-800">Exclusive Win-Back Offers</h3>
              </div>
              <p className="text-slate-600 leading-relaxed mb-4">
                Strategic discounts and exclusive offers designed to overcome objections and make coming back irresistible. Time-limited to create urgency.
              </p>
              <div className="space-y-2">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></div>
                  <span className="text-slate-600 text-sm">Tiered discount strategy</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></div>
                  <span className="text-slate-600 text-sm">Exclusive "we miss you" promotions</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></div>
                  <span className="text-slate-600 text-sm">Time-sensitive scarcity triggers</span>
                </div>
              </div>
            </div>

            <div className="premium-card rounded-2xl p-8 shadow-lg border border-slate-200">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mr-4">
                  <span className="text-white font-bold text-lg">4</span>
                </div>
                <h3 className="text-xl font-bold text-slate-800">Multi-Touch Sequences</h3>
              </div>
              <p className="text-slate-600 leading-relaxed mb-4">
                Strategic follow-up sequences across email, SMS, and other channels. Each touchpoint adds value and moves customers closer to re-engagement.
              </p>
              <div className="space-y-2">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                  <span className="text-slate-600 text-sm">Multi-channel messaging</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                  <span className="text-slate-600 text-sm">Escalating offer sequences</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                  <span className="text-slate-600 text-sm">Automatic stop on re-engagement</span>
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
              <DollarSign className="h-16 w-16 text-emerald-500 mx-auto mb-4" />
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
                Real Results: Client Case Study
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-slate-800 mb-4">
                  $6,000 in Month One
                </h3>
                <p className="text-slate-600 leading-relaxed mb-6">
                  An e-commerce business had 3,200+ inactive customers in their database. After launching our reactivation system:
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <DollarSign className="h-6 w-6 text-emerald-500 mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-semibold text-slate-800">$6,042 in Revenue</div>
                      <div className="text-slate-600 text-sm">First 30 days, fully automated</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Users className="h-6 w-6 text-sky-500 mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-semibold text-slate-800">741 Customers Re-engaged</div>
                      <div className="text-slate-600 text-sm">23% reactivation rate (industry average: 5-8%)</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <TrendingUp className="h-6 w-6 text-pink-500 mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-semibold text-slate-800">$18K+ in 90 Days</div>
                      <div className="text-slate-600 text-sm">Compound effect from returning customers</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-8 border border-emerald-200">
                <div className="text-6xl font-bold text-emerald-500 mb-4">23%</div>
                <div className="text-slate-700 text-lg font-semibold mb-2">
                  Reactivation Rate
                </div>
                <p className="text-slate-600 mb-4">
                  Nearly 1 in 4 inactive customers came back and made a purchase. This is 3x higher than industry average because of personalized messaging and perfect timing.
                </p>
                <div className="bg-white rounded-lg p-4 border border-emerald-200">
                  <div className="text-slate-700 font-medium text-sm">ROI Breakdown:</div>
                  <div className="text-slate-600 text-xs mt-2">
                    Cost to send 3,200 personalized messages: ~$240<br/>
                    Revenue generated: $6,042<br/>
                    <span className="font-semibold text-emerald-600">ROI: 2,418%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What You Get Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
              What You Get
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center premium-card rounded-2xl p-8 hover-scale will-change-transform">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-rose-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">Automated Campaigns</h3>
              <p className="text-slate-600 leading-relaxed">
                Set it and forget it. System runs 24/7 identifying and re-engaging inactive customers with zero manual work.
              </p>
            </div>

            <div className="text-center premium-card rounded-2xl p-8 hover-scale will-change-transform">
              <div className="w-16 h-16 bg-gradient-to-r from-sky-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">Smart Segmentation</h3>
              <p className="text-slate-600 leading-relaxed">
                AI-powered customer analysis to identify the best targets and optimal timing for maximum conversion rates.
              </p>
            </div>

            <div className="text-center premium-card rounded-2xl p-8 hover-scale will-change-transform">
              <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">Revenue Dashboard</h3>
              <p className="text-slate-600 leading-relaxed">
                Real-time tracking of reactivated customers, revenue generated, and ROI metrics to see your results clearly.
              </p>
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
            Stop Leaving Money on the Table
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Let's wake up your sleeping customer database and turn it into predictable monthly revenue.
          </p>
          <Button size="lg" onClick={scrollToContact} icon={ArrowRight} className="premium-button">
            Build Your Reactivation System
          </Button>
        </div>
      </section>
    </div>
  );
};
