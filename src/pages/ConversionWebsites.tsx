import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Globe, Zap, Target, TrendingUp, Smartphone, Search } from 'lucide-react';
import { Logo } from '../components/Logo';
import { Button } from '../components/ui/Button';

export const ConversionWebsites: React.FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const scrollToContact = () => {
    window.location.href = '/#contact';
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
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-20 h-20 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-3xl flex items-center justify-center mx-auto mb-8">
            <Globe className="h-10 w-10 text-white" />
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Websites Designed to Convert,
            <span className="block bg-gradient-to-r from-emerald-400 to-sky-400 bg-clip-text text-transparent">
              Not Just Look Good
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            We build performance-driven websites that turn visitors into leads — designed from the ground up to scale with automation.
          </p>
          
          <Button size="lg" onClick={scrollToContact} icon={ArrowRight}>
            Book Demo
          </Button>
        </div>
      </section>

      {/* What You Get Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
              What You Get
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Every website we build is custom-designed for your business goals and optimized for conversions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">Fully Custom Layouts</h3>
              <p className="text-slate-600 leading-relaxed">
                No templates, no cookie-cutter designs. Every element is crafted specifically for your brand and conversion goals.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-sky-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">Optimized User Journeys</h3>
              <p className="text-slate-600 leading-relaxed">
                Strategic placement of CTAs, forms, and content that guide visitors toward taking action at every step.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">Automation Built-In</h3>
              <p className="text-slate-600 leading-relaxed">
                Chatbots, lead capture forms, and backend integrations are seamlessly integrated from day one.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
              Use Cases
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200">
              <h3 className="text-xl font-bold text-slate-800 mb-4">Landing Pages That Convert</h3>
              <p className="text-slate-600 mb-6">
                High-converting landing pages for campaigns, product launches, or lead magnets with optimized forms and clear value propositions.
              </p>
              <div className="space-y-2">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></div>
                  <span className="text-sm text-slate-600">A/B tested layouts</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></div>
                  <span className="text-sm text-slate-600">Conversion tracking</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></div>
                  <span className="text-sm text-slate-600">Lead capture optimization</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200">
              <h3 className="text-xl font-bold text-slate-800 mb-4">Full Websites with Backend Logic</h3>
              <p className="text-slate-600 mb-6">
                Complete business websites with user portals, booking systems, payment processing, and automated workflows.
              </p>
              <div className="space-y-2">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-sky-500 rounded-full mr-3"></div>
                  <span className="text-sm text-slate-600">User authentication</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-sky-500 rounded-full mr-3"></div>
                  <span className="text-sm text-slate-600">Payment integration</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-sky-500 rounded-full mr-3"></div>
                  <span className="text-sm text-slate-600">Database management</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200">
              <h3 className="text-xl font-bold text-slate-800 mb-4">Scalable, Fast & Branded</h3>
              <p className="text-slate-600 mb-6">
                Enterprise-grade websites that grow with your business, maintain brand consistency, and load lightning-fast.
              </p>
              <div className="space-y-2">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                  <span className="text-sm text-slate-600">Cloud infrastructure</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                  <span className="text-sm text-slate-600">Brand guidelines</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                  <span className="text-sm text-slate-600">Performance optimization</span>
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
              Features That Drive Results
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-emerald-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Smartphone className="h-6 w-6 text-emerald-600" />
              </div>
              <h3 className="font-semibold text-slate-800 mb-2">Mobile-First Design</h3>
              <p className="text-sm text-slate-600">Optimized for mobile devices where most of your traffic comes from.</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-sky-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Search className="h-6 w-6 text-sky-600" />
              </div>
              <h3 className="font-semibold text-slate-800 mb-2">SEO & Speed Optimized</h3>
              <p className="text-sm text-slate-600">Built for search engines and lightning-fast loading times.</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Zap className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="font-semibold text-slate-800 mb-2">Automation-Ready</h3>
              <p className="text-sm text-slate-600">Pre-built components for chatbots, forms, and integrations.</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Target className="h-6 w-6 text-orange-600" />
              </div>
              <h3 className="font-semibold text-slate-800 mb-2">Conversion Tracking</h3>
              <p className="text-sm text-slate-600">Built-in analytics to track what's working and what's not.</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Globe className="h-6 w-6 text-cyan-600" />
              </div>
              <h3 className="font-semibold text-slate-800 mb-2">Global CDN</h3>
              <p className="text-sm text-slate-600">Fast loading times worldwide with content delivery networks.</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-indigo-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="font-semibold text-slate-800 mb-2">Growth-Ready</h3>
              <p className="text-sm text-slate-600">Scalable architecture that grows with your business needs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-500 to-sky-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-12 border border-white/20">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              🚀 Ready to Launch Your High-Converting Website?
            </h2>
            <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
              Let's build a website that doesn't just look amazing — it converts visitors into customers and grows your business automatically.
            </p>
            <Button 
              size="lg" 
              onClick={scrollToContact}
              className="bg-white text-emerald-600 hover:bg-gray-100"
            >
              Book Demo
            </Button>
            <p className="text-emerald-200 mt-4 text-sm">
              Free consultation • Custom proposal • No upfront costs
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};