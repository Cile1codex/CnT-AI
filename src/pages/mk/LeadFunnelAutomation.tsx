import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Users, Target, Zap, TrendingUp, Filter, BarChart3 } from 'lucide-react';
import { Logo } from '../../components/Logo';
import { Button } from '../../components/ui/Button';

export const MacedonianLeadFunnelAutomation: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const scrollToContact = () => {
    navigate('/mk#contact');
    // Small delay to ensure navigation completes before scrolling
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
            <Link to="/mk" className="flex items-center group">
              <Logo size="md" className="mr-3 group-hover:scale-110 transition-transform duration-300" />
              <span className="text-xl font-bold bg-gradient-to-r from-sky-600 to-emerald-600 bg-clip-text text-transparent">
                CnT AI
              </span>
            </Link>
            <Link
              to="/mk#services"
              className="flex items-center text-slate-600 hover:text-sky-600 transition-colors duration-200"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Назад кон Услуги
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 animated-gradient relative overflow-hidden">
        {/* Floating Particles */}
        <div className="floating-particle"></div>
        <div className="floating-particle"></div>

        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-3xl flex items-center justify-center mx-auto mb-8 hover-scale will-change-transform">
            <Users className="h-10 w-10 text-white" />
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight text-glow">
            Заробување Потенцијални Клиенти и Автоматизација на Фунели
            <span className="block bg-gradient-to-r from-purple-400 to-emerald-400 bg-clip-text text-transparent text-glow-emerald">
              Што Работи Додека Спиете
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Од паметни форми до интелигентни чет текови, ги автоматизираме целиот процес на заробување и квалификација на потенцијални клиенти.
          </p>
          
          <Button size="lg" onClick={scrollToContact} icon={ArrowRight} className="premium-button">
            Да Ја Автоматизираме Вашата Фунел за Потенцијални Клиенти
          </Button>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gradient-to-b from-blue-50 to-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
              Како Функционира
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Нашите интелигентни системи за потенцијални клиенти работат 24/7 за да заробуваат, квалификуваат и насочуваат ваши најдобри потенцијални клиенти.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center premium-card rounded-2xl p-8 hover-scale will-change-transform">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">Авто-Насочување кон CRM-ови</h3>
              <p className="text-slate-600 leading-relaxed">
                Квалификуваните потенцијални клиенти автоматски се испраќаат до вашиот CRM, email листи или продажен тим со сиот контекст што им е потребен.
              </p>
            </div>

            <div className="text-center premium-card rounded-2xl p-8 hover-scale will-change-transform">
              <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Filter className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">Скорирање и Сегментација на Потенцијални Клиенти</h3>
              <p className="text-slate-600 leading-relaxed">
                Паметни алгоритми ги скорираат потенцијалните клиенти врз основа на однесување, демографија и ангажираност за да ги приоритизираат вашите најдобри потенцијални клиенти.
              </p>
            </div>

            <div className="text-center premium-card rounded-2xl p-8 hover-scale will-change-transform">
              <div className="w-16 h-16 bg-gradient-to-r from-sky-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">Активирани Работни Текови</h3>
              <p className="text-slate-600 leading-relaxed">
                Автоматски email секвенци, webhook известувања и продажни аларми се активираат врз основа на акции и скорови на потенцијални клиенти.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why It Works Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
              Зошто Функционира
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="w-3 h-3 bg-purple-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-800 mb-2">Филтрира Низококвалитетни Потенцијални Клиенти</h3>
                    <p className="text-slate-600">Престанете да губите време на неквалификувани потенцијални клиенти. Нашите системи ги идентификуваат и приоритизираат потенцијалните клиенти што најверојатно ќе конвертираат.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-3 h-3 bg-emerald-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-800 mb-2">Ги Скратува Продажните Циклуси</h3>
                    <p className="text-slate-600">Претходно квалификуваните потенцијални клиенти пристигнуваат со контекст и намера, овозможувајќи му на вашиот продажен тим да затвора договори побрзо.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-3 h-3 bg-sky-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-800 mb-2">Работи 24/7 на Автопилот</h3>
                    <p className="text-slate-600">Никогаш повеќе не пропуштете потенцијален клиент. Вашата фунел заробува и квалификува потенцијални клиенти дури и кога спиете или сте на одмор.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="premium-card rounded-2xl p-8 bg-gradient-to-br from-purple-500 to-emerald-500 text-black">
              <h3 className="text-2xl font-bold mb-6 text-black">Докажани Резултати</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-black rounded-full mr-3"></div>
                  <span className="text-black">50% зголемување во квалификувани потенцијални клиенти</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-black rounded-full mr-3"></div>
                  <span className="text-black">90% подобрување во време на одговор</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-black rounded-full mr-3"></div>
                  <span className="text-black">Нула пропуштени можности</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-black rounded-full mr-3"></div>
                  <span className="text-black">2x зголемување во резервирани средби</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-slate-100 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
              Карактеристики Што Заробуваат Повеќе Потенцијални Клиенти
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center premium-card rounded-lg p-6 hover-scale will-change-transform">
              <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Filter className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="font-semibold text-slate-800 mb-2">Условна Логика</h3>
              <p className="text-sm text-slate-600">Паметни форми што се прилагодуваат врз основа на одговори и однесување на корисниците.</p>
            </div>

            <div className="text-center premium-card rounded-lg p-6 hover-scale will-change-transform">
              <div className="w-12 h-12 bg-emerald-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="h-6 w-6 text-emerald-600" />
              </div>
              <h3 className="font-semibold text-slate-800 mb-2">Аналитика на Фунели</h3>
              <p className="text-sm text-slate-600">Следете стапки на конверзија и оптимизирајте секој чекор од вашата фунел.</p>
            </div>

            <div className="text-center premium-card rounded-lg p-6 hover-scale will-change-transform">
              <div className="w-12 h-12 bg-sky-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Zap className="h-6 w-6 text-sky-600" />
              </div>
              <h3 className="font-semibold text-slate-800 mb-2">CRM Интеграции</h3>
              <p className="text-sm text-slate-600">Безбедна врска со Salesforce, HubSpot, Pipedrive и повеќе.</p>
            </div>

            <div className="text-center premium-card rounded-lg p-6 hover-scale will-change-transform">
              <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-6 w-6 text-orange-600" />
              </div>
              <h3 className="font-semibold text-slate-800 mb-2">Повеќе-чекорни Текови</h3>
              <p className="text-sm text-slate-600">Прогресивно профилирање за собирање повеќе податоци без преоптоварување на корисниците.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-500 to-emerald-500 relative overflow-hidden">
        {/* Floating Particles */}
        <div className="floating-particle"></div>
        <div className="floating-particle"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="premium-card-dark rounded-3xl p-12 border border-white/20">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              🎯 Готови да Ја Пополните Вашата Пајплајна со Квалификувани Потенцијални Клиенти?
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              Да изградиме интелигентна фунел за потенцијални клиенти што автоматски заробува, квалификува и насочува ваши најдобри потенцијални клиенти додека се фокусирате на затворање договори.
            </p>
            <Button 
              size="lg" 
              onClick={scrollToContact}
              className="bg-white text-purple-600 hover:bg-gray-100 premium-button"
            >
              Резервирајте Бесплатна Ревизија на Фунел за Потенцијални Клиенти
            </Button>
            <p className="text-purple-200 mt-4 text-sm">
              Бесплатна ревизија • Прилагодена стратегија • Патоказ за имплементација вклучен
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};