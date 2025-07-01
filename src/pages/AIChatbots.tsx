import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, MessageSquare, Zap, Globe, Users, Settings, Clock } from 'lucide-react';
import { Logo } from '../components/Logo';
import { Button } from '../components/ui/Button';

export const AIChatbots: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleBookDemo = () => {
    navigate('/#contact');
    // Small delay to ensure navigation completes before scrolling
    setTimeout(() => {
      const element = document.getElementById('contact');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-blue-50">
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
      <section className="py-20 bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-800 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-20 h-20 bg-gradient-to-r from-sky-500 to-blue-600 rounded-3xl flex items-center justify-center mx-auto mb-8">
            <MessageSquare className="h-10 w-10 text-white" />
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            24/7 AI Chatbot Systems
            <span className="block bg-gradient-to-r from-sky-400 to-emerald-400 bg-clip-text text-transparent">
              Smart Support That Never Sleeps
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Deploy fully customized chatbots trained on your business logic to automate conversations, guide users, and capture leads 24/7.
          </p>
          
          <Button size="lg" onClick={handleBookDemo} icon={ArrowRight}>
            Book Demo
          </Button>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
              How It Works
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Our AI chatbots are built specifically for your business, not generic templates.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-sky-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Settings className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">Built from Your Data</h3>
              <p className="text-slate-600 leading-relaxed">
                We train your chatbot using your unique FAQs, product information, and business processes — no generic responses.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Globe className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">Seamless Integration</h3>
              <p className="text-slate-600 leading-relaxed">
                Integrates directly into your website, CRM, helpdesk, or any platform where your customers interact with you.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">Continuous Learning</h3>
              <p className="text-slate-600 leading-relaxed">
                Your chatbot gets smarter over time, learning from interactions and improving its responses automatically.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why It Works Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
              Why It Works
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="w-3 h-3 bg-sky-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-800 mb-2">Eliminates Repetitive Support Tasks</h3>
                    <p className="text-slate-600">Handle 80% of common questions instantly, freeing your team for complex issues that need human touch.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-3 h-3 bg-emerald-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-800 mb-2">Captures Leads After Hours</h3>
                    <p className="text-slate-600">Never miss a potential customer. Your chatbot qualifies leads and schedules meetings even when you're sleeping.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-3 h-3 bg-purple-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-800 mb-2">Provides Instant Guidance</h3>
                    <p className="text-slate-600">Guide users through complex processes, recommend products, and provide next-step instructions automatically.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-sky-500 to-emerald-500 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Real Results</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  <span>70% reduction in support tickets</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  <span>24/7 availability without hiring</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  <span>95% customer satisfaction maintained</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  <span>50% increase in lead capture</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
              Features That Set Us Apart
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-sky-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Zap className="h-6 w-6 text-sky-600" />
              </div>
              <h3 className="font-semibold text-slate-800 mb-2">Unlimited Flows</h3>
              <p className="text-sm text-slate-600">Create complex conversation paths with unlimited intents and responses.</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-emerald-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Settings className="h-6 w-6 text-emerald-600" />
              </div>
              <h3 className="font-semibold text-slate-800 mb-2">API/CRM Sync</h3>
              <p className="text-sm text-slate-600">Seamlessly integrate with your existing tools and databases.</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Globe className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="font-semibold text-slate-800 mb-2">Multilingual</h3>
              <p className="text-sm text-slate-600">Support customers in multiple languages automatically.</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Users className="h-6 w-6 text-orange-600" />
              </div>
              <h3 className="font-semibold text-slate-800 mb-2">Human Escalation</h3>
              <p className="text-sm text-slate-600">Smooth handoff to human agents when needed.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-sky-500 to-emerald-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-12 border border-white/20">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Deploy Your Smart Chatbot?
            </h2>
            <p className="text-xl text-sky-100 mb-8 max-w-2xl mx-auto">
              Let's build a custom AI chatbot that handles your customer conversations 24/7 while maintaining your brand voice and expertise.
            </p>
            <Button 
              size="lg" 
              onClick={handleBookDemo}
              className="bg-white text-sky-600 hover:bg-gray-100"
            >
              💬 Book your custom chatbot demo today
            </Button>
            <p className="text-sky-200 mt-4 text-sm">
              Free consultation • Custom demo • No commitment required
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};