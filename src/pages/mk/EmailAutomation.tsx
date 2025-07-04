import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Mail, Zap, Target, TrendingUp, Users, BarChart3 } from 'lucide-react';
import { Logo } from '../../components/Logo';
import { Button } from '../../components/ui/Button';

export const MacedonianEmailAutomation: React.FC = () => {
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
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-red-600 rounded-3xl flex items-center justify-center mx-auto mb-8 hover-scale will-change-transform">
            <Mail className="h-10 w-10 text-white" />
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight text-glow">
            Email Секвенци Што Воведуваат,
            <span className="block bg-gradient-to-r from-orange-400 to-sky-400 bg-clip-text text-transparent text-glow-emerald">
              Продаваат и Задржуваат Автоматски
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Изградете моќни, автоматизирани кампањи што ги воведуваат корисниците, враќаат кошнички и продаваат услуги — без мануелна работа.
          </p>
          
          <Button size="lg" onClick={scrollToContact} icon={ArrowRight} className="premium-button">
            Лансирајте Ја Вашата Автоматизирана Email Стратегија
          </Button>
        </div>
      </section>

      {/* What You Get Section */}
      <section className="py-20 bg-gradient-to-b from-blue-50 to-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
              Што Добивате
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Комплетни системи за email автоматизација што ги негуваат потенцијалните клиенти и ги задржуваат клиентите на автопилот.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center premium-card rounded-2xl p-8 hover-scale will-change-transform">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">Активирани Текови</h3>
              <p className="text-slate-600 leading-relaxed">
                Email секвенци базирани на однесување за воведување, задржување, продажба и повторно ангажирање што се активираат автоматски.
              </p>
            </div>

            <div className="text-center premium-card rounded-2xl p-8 hover-scale will-change-transform">
              <div className="w-16 h-16 bg-gradient-to-r from-sky-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">Брендирани Шаблони</h3>
              <p className="text-slate-600 leading-relaxed">
                Прилагодено дизајнирани email шаблони што се совпаѓаат со вашиот бренд и се оптимизирани за ангажираност и конверзии.
              </p>
            </div>

            <div className="text-center premium-card rounded-2xl p-8 hover-scale will-change-transform">
              <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <BarChart3 className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">Аналитика и Тестирање</h3>
              <p className="text-slate-600 leading-relaxed">
                Целосна аналитичка табла со A/B тестирање способности за континуирано подобрување на вашите email перформанси.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
              Случаи на Употреба
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="premium-card rounded-2xl p-8 shadow-lg border border-slate-200 hover-scale will-change-transform">
              <h3 className="text-xl font-bold text-slate-800 mb-4">Текови за Добредојде</h3>
              <p className="text-slate-600 mb-6">
                Воведете нови претплатници или клиенти со серија едукативни и ангажирачки email-ови што градат доверба и поттикнуваат акција.
              </p>
              <div className="space-y-2">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                  <span className="text-sm text-slate-600">Серија за добредојде (3-7 email-ови)</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                  <span className="text-sm text-slate-600">Едукација за производи</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                  <span className="text-sm text-slate-600">Интеграција на социјални докази</span>
                </div>
              </div>
            </div>

            <div className="premium-card rounded-2xl p-8 shadow-lg border border-slate-200 hover-scale will-change-transform">
              <h3 className="text-xl font-bold text-slate-800 mb-4">Кампањи за Враќање</h3>
              <p className="text-slate-600 mb-6">
                Повторно ангажирајте неактивни претплатници и клиенти со насочени кампањи што ги враќаат во вашиот бизнис.
              </p>
              <div className="space-y-2">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-sky-500 rounded-full mr-3"></div>
                  <span className="text-sm text-slate-600">Враќање на напуштени кошнички</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-sky-500 rounded-full mr-3"></div>
                  <span className="text-sm text-slate-600">Секвенци за повторно ангажирање</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-sky-500 rounded-full mr-3"></div>
                  <span className="text-sm text-slate-600">Специјални понуди и поттици</span>
                </div>
              </div>
            </div>

            <div className="premium-card rounded-2xl p-8 shadow-lg border border-slate-200 hover-scale will-change-transform">
              <h3 className="text-xl font-bold text-slate-800 mb-4">Неделни/Месечни Билтени</h3>
              <p className="text-slate-600 mb-6">
                Одржете ја вашата публика ангажирана со редовен, вреден содржај што ве позиционира како експерт во индустријата.
              </p>
              <div className="space-y-2">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></div>
                  <span className="text-sm text-slate-600">Курација на содржина</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></div>
                  <span className="text-sm text-slate-600">Увиди од индустријата</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></div>
                  <span className="text-sm text-slate-600">Автоматизирано закажување</span>
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
              Карактеристики Што Поттикнуваат Ангажираност
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center premium-card rounded-lg p-6 hover-scale will-change-transform">
              <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Zap className="h-6 w-6 text-orange-600" />
              </div>
              <h3 className="font-semibold text-slate-800 mb-2">Активатори Базирани на Однесување</h3>
              <p className="text-sm text-slate-600">Email-ови активирани од акции на корисници, временски доцнења или специфични настани.</p>
            </div>

            <div className="text-center premium-card rounded-lg p-6 hover-scale will-change-transform">
              <div className="w-12 h-12 bg-sky-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Target className="h-6 w-6 text-sky-600" />
              </div>
              <h3 className="font-semibold text-slate-800 mb-2">Визуелен Градител</h3>
              <p className="text-sm text-slate-600">Drag-and-drop email градител со претходно дизајнирани шаблони.</p>
            </div>

            <div className="text-center premium-card rounded-lg p-6 hover-scale will-change-transform">
              <div className="w-12 h-12 bg-emerald-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Users className="h-6 w-6 text-emerald-600" />
              </div>
              <h3 className="font-semibold text-slate-800 mb-2">CRM Синхронизација</h3>
              <p className="text-sm text-slate-600">Безбедна интеграција со вашиот постоечки CRM и податоци за клиенти.</p>
            </div>

            <div className="text-center premium-card rounded-lg p-6 hover-scale will-change-transform">
              <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="font-semibold text-slate-800 mb-2">Мониторинг на Email Здравје</h3>
              <p className="text-sm text-slate-600">Следете доставливост, spam скорови и репутација на испраќач.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-sky-500 relative overflow-hidden">
        {/* Floating Particles */}
        <div className="floating-particle"></div>
        <div className="floating-particle"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="premium-card-dark rounded-3xl p-12 border border-white/20">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              ✉️ Готови да Го Автоматизирате Вашиот Email Маркетинг?
            </h2>
            <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
              Да изградиме email секвенци што ги негуваат потенцијалните клиенти, ги воведуваат клиентите и поттикнуваат продажби автоматски — за да можете да се фокусирате на растење на вашиот бизнис.
            </p>
            <Button 
              size="lg" 
              onClick={scrollToContact}
              className="bg-white text-orange-600 hover:bg-gray-100 premium-button"
            >
              Лансирајте Ја Вашата Email Стратегија Денес
            </Button>
            <p className="text-orange-200 mt-4 text-sm">
              Бесплатна стратешка сесија • Прилагодена email ревизија • План за имплементација вклучен
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};