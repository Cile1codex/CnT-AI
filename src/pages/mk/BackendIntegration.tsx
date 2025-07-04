import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Database, Zap, Settings, Globe, Calendar, BarChart3 } from 'lucide-react';
import { Logo } from '../../components/Logo';
import { Button } from '../../components/ui/Button';

export const MacedonianBackendIntegration: React.FC = () => {
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
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-3xl flex items-center justify-center mx-auto mb-8 hover-scale will-change-transform">
            <Database className="h-10 w-10 text-white" />
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight text-glow">
            Безбедна Backend Интеграција.
            <span className="block bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent text-glow-emerald">
              Целосно Автоматизирани Работни Текови.
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Ги поврзуваме вашите алатки — CRM-ови, бази на податоци, аналитика и повеќе — за да го одржиме вашиот backend во совршена синхронизација.
          </p>
          
          <Button size="lg" onClick={scrollToContact} icon={ArrowRight} className="premium-button">
            Побарајте Backend Автоматизација Поставување
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
              Градиме невидлива инфраструктура што го прави вашиот бизнис да работи глатко.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center premium-card rounded-2xl p-8 hover-scale will-change-transform">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Settings className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">Прилагодено-Изградени API Мостови</h3>
              <p className="text-slate-600 leading-relaxed">
                Создаваме безбедни, прилагодени врски помеѓу вашите алатки што комуницираат едни со други безбедно.
              </p>
            </div>

            <div className="text-center premium-card rounded-2xl p-8 hover-scale will-change-transform">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">Синхронизација на Податоци во Реално Време</h3>
              <p className="text-slate-600 leading-relaxed">
                Одржете ги сите ваши платформи синхронизирани со моментални ажурирања на податоци низ вашиот целокупен технолошки стек.
              </p>
            </div>

            <div className="text-center premium-card rounded-2xl p-8 hover-scale will-change-transform">
              <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Globe className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">Работни Текови Активирани од Настани</h3>
              <p className="text-slate-600 leading-relaxed">
                Автоматизирајте комплексни бизнис процеси што се активираат врз основа на специфични настани или промени во податоци.
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
              <h3 className="text-xl font-bold text-slate-800 mb-4">CRM + Автоматизација на Форми</h3>
              <p className="text-slate-600 mb-6">
                Автоматски синхронизирајте поднесоци од форми до вашиот CRM, активирајте секвенци за следење и ажурирајте скорови на потенцијални клиенти во реално време.
              </p>
              <div className="space-y-2">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-cyan-500 rounded-full mr-3"></div>
                  <span className="text-sm text-slate-600">Автоматизација на скорирање потенцијални клиенти</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-cyan-500 rounded-full mr-3"></div>
                  <span className="text-sm text-slate-600">Превенција на дупликати</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-cyan-500 rounded-full mr-3"></div>
                  <span className="text-sm text-slate-600">Известувања за продажен тим</span>
                </div>
              </div>
            </div>

            <div className="premium-card rounded-2xl p-8 shadow-lg border border-slate-200 hover-scale will-change-transform">
              <h3 className="text-xl font-bold text-slate-800 mb-4">Интеграции за Резервации/Календар</h3>
              <p className="text-slate-600 mb-6">
                Поврзете системи за резервации со календари, CRM-ови и процесори за плаќања за безбедно управување со термини.
              </p>
              <div className="space-y-2">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                  <span className="text-sm text-slate-600">Синхронизација на календар</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                  <span className="text-sm text-slate-600">Обработка на плаќања</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                  <span className="text-sm text-slate-600">Автоматизирани потсетници</span>
                </div>
              </div>
            </div>

            <div className="premium-card rounded-2xl p-8 shadow-lg border border-slate-200 hover-scale will-change-transform">
              <h3 className="text-xl font-bold text-slate-800 mb-4">Синхронизација на Аналитички Табли</h3>
              <p className="text-slate-600 mb-6">
                Агрегирајте податоци од повеќе извори во унифицирани табли за подобра бизнис интелигенција и известување.
              </p>
              <div className="space-y-2">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></div>
                  <span className="text-sm text-slate-600">Агрегација на податоци од повеќе извори</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></div>
                  <span className="text-sm text-slate-600">Известување во реално време</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></div>
                  <span className="text-sm text-slate-600">Прилагодено следење на KPI</span>
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
              Карактеристики Што Ги Одржуваат Сè Поврзано
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center premium-card rounded-lg p-6 hover-scale will-change-transform">
              <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Database className="h-6 w-6 text-cyan-600" />
              </div>
              <h3 className="font-semibold text-slate-800 mb-2">Безбедни Backend Текови</h3>
              <p className="text-sm text-slate-600">Безбедност од ентерпрајз ниво со енкриптирана трансмисија и складирање на податоци.</p>
            </div>

            <div className="text-center premium-card rounded-lg p-6 hover-scale will-change-transform">
              <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Settings className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="font-semibold text-slate-800 mb-2">Визуализирани Логички Патеки</h3>
              <p className="text-sm text-slate-600">Јасна визуелна репрезентација на вашите автоматизирани работни текови и текови на податоци.</p>
            </div>

            <div className="text-center premium-card rounded-lg p-6 hover-scale will-change-transform">
              <div className="w-12 h-12 bg-emerald-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Globe className="h-6 w-6 text-emerald-600" />
              </div>
              <h3 className="font-semibold text-slate-800 mb-2">Готови за Трети Страни</h3>
              <p className="text-sm text-slate-600">Поврзете се со било кој API или услуга со прилагодени интеграциски способности.</p>
            </div>

            <div className="text-center premium-card rounded-lg p-6 hover-scale will-change-transform">
              <div className="w-12 h-12 bg-sky-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Zap className="h-6 w-6 text-sky-600" />
              </div>
              <h3 className="font-semibold text-slate-800 mb-2">Обработка во Реално Време</h3>
              <p className="text-sm text-slate-600">Моментална синхронизација на податоци низ сите ваши поврзани платформи.</p>
            </div>

            <div className="text-center premium-card rounded-lg p-6 hover-scale will-change-transform">
              <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-6 w-6 text-orange-600" />
              </div>
              <h3 className="font-semibold text-slate-800 mb-2">Закажани Задачи</h3>
              <p className="text-sm text-slate-600">Автоматизирани задачи што се извршуваат според распореди или специфични временски интервали.</p>
            </div>

            <div className="text-center premium-card rounded-lg p-6 hover-scale will-change-transform">
              <div className="w-12 h-12 bg-indigo-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="font-semibold text-slate-800 mb-2">Мониторинг на Перформанси</h3>
              <p className="text-sm text-slate-600">Следете здравје и перформанси на интеграции со детална аналитика.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-500 to-purple-500 relative overflow-hidden">
        {/* Floating Particles */}
        <div className="floating-particle"></div>
        <div className="floating-particle"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="premium-card-dark rounded-3xl p-12 border border-white/20">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              🔧 Готови да Го Поврзете Вашиот Целокупен Технолошки Стек?
            </h2>
            <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto">
              Да ја изградиме backend инфраструктурата што го прави вашиот бизнис да работи како часовник — со сите ваши алатки што работат заедно безбедно.
            </p>
            <Button 
              size="lg" 
              onClick={scrollToContact}
              className="bg-white text-cyan-600 hover:bg-gray-100 premium-button"
            >
              Побарајте Backend Автоматизација Поставување Сега
            </Button>
            <p className="text-cyan-200 mt-4 text-sm">
              Бесплатна консултација • Прилагоден план за интеграција • Патоказ за имплементација
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};