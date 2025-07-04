import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Globe, Zap, Target, TrendingUp, Smartphone, Search } from 'lucide-react';
import { Logo } from '../../components/Logo';
import { Button } from '../../components/ui/Button';

export const MacedonianConversionWebsites: React.FC = () => {
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
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-20 h-20 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-3xl flex items-center justify-center mx-auto mb-8 hover-scale will-change-transform">
            <Globe className="h-10 w-10 text-white" />
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight text-glow">
            Веб-страници Дизајнирани за Конверзија,
            <span className="block bg-gradient-to-r from-emerald-400 to-sky-400 bg-clip-text text-transparent text-glow-emerald">
              Не Само да Изгледаат Добро
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Градиме веб-страници насочени кон перформанси што ги претвораат посетителите во потенцијални клиенти — дизајнирани од основа да скалираат со автоматизација.
          </p>
          
          <Button size="lg" onClick={scrollToContact} icon={ArrowRight} className="premium-button">
            Започнете да Ја Градите Вашата Високо-Конвертирачка Веб-страница
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
              Секоја веб-страница што ја градиме е прилагодено дизајнирана за вашите бизнис цели и оптимизирана за конверзии.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center premium-card rounded-2xl p-8 hover-scale will-change-transform">
              <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">Целосно Прилагодени Изгледи</h3>
              <p className="text-slate-600 leading-relaxed">
                Без шаблони, без готови дизајни. Секој елемент е изработен специфично за вашиот бренд и цели за конверзија.
              </p>
            </div>

            <div className="text-center premium-card rounded-2xl p-8 hover-scale will-change-transform">
              <div className="w-16 h-16 bg-gradient-to-r from-sky-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">Оптимизирани Корисничи Патувања</h3>
              <p className="text-slate-600 leading-relaxed">
                Стратешко поставување на CTA-ови, форми и содржина што ги водат посетителите кон преземање акција на секој чекор.
              </p>
            </div>

            <div className="text-center premium-card rounded-2xl p-8 hover-scale will-change-transform">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">Вградена Автоматизација</h3>
              <p className="text-slate-600 leading-relaxed">
                Чатботови, форми за заробување потенцијални клиенти и backend интеграции се безбедно интегрирани од првиот ден.
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
              <h3 className="text-xl font-bold text-slate-800 mb-4">Страници за Слетување Што Конвертираат</h3>
              <p className="text-slate-600 mb-6">
                Високо-конвертирачки страници за слетување за кампањи, лансирања на производи или магнети за потенцијални клиенти со оптимизирани форми и јасни вредносни предлози.
              </p>
              <div className="space-y-2">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></div>
                  <span className="text-sm text-slate-600">A/B тестирани изгледи</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></div>
                  <span className="text-sm text-slate-600">Следење на конверзии</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></div>
                  <span className="text-sm text-slate-600">Оптимизација на заробување потенцијални клиенти</span>
                </div>
              </div>
            </div>

            <div className="premium-card rounded-2xl p-8 shadow-lg border border-slate-200 hover-scale will-change-transform">
              <h3 className="text-xl font-bold text-slate-800 mb-4">Целосни Веб-страници со Backend Логика</h3>
              <p className="text-slate-600 mb-6">
                Комплетни бизнис веб-страници со кориснички портали, системи за резервации, обработка на плаќања и автоматизирани работни текови.
              </p>
              <div className="space-y-2">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-sky-500 rounded-full mr-3"></div>
                  <span className="text-sm text-slate-600">Автентификација на корисници</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-sky-500 rounded-full mr-3"></div>
                  <span className="text-sm text-slate-600">Интеграција на плаќања</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-sky-500 rounded-full mr-3"></div>
                  <span className="text-sm text-slate-600">Управување со бази на податоци</span>
                </div>
              </div>
            </div>

            <div className="premium-card rounded-2xl p-8 shadow-lg border border-slate-200 hover-scale will-change-transform">
              <h3 className="text-xl font-bold text-slate-800 mb-4">Скалабилни, Брзи и Брендирани</h3>
              <p className="text-slate-600 mb-6">
                Веб-страници од ентерпрајз ниво што растат со вашиот бизнис, одржуваат конзистентност на брендот и се вчитуваат муњевито брзо.
              </p>
              <div className="space-y-2">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                  <span className="text-sm text-slate-600">Облачна инфраструктура</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                  <span className="text-sm text-slate-600">Насоки за бренд</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                  <span className="text-sm text-slate-600">Оптимизација на перформанси</span>
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
              Карактеристики Што Донесуваат Резултати
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center premium-card rounded-lg p-6 hover-scale will-change-transform">
              <div className="w-12 h-12 bg-emerald-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Smartphone className="h-6 w-6 text-emerald-600" />
              </div>
              <h3 className="font-semibold text-slate-800 mb-2">Мобилно-Прв Дизајн</h3>
              <p className="text-sm text-slate-600">Оптимизирано за мобилни уреди каде доаѓа поголемиот дел од вашиот сообраќај.</p>
            </div>

            <div className="text-center premium-card rounded-lg p-6 hover-scale will-change-transform">
              <div className="w-12 h-12 bg-sky-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Search className="h-6 w-6 text-sky-600" />
              </div>
              <h3 className="font-semibold text-slate-800 mb-2">SEO и Брзина Оптимизирани</h3>
              <p className="text-sm text-slate-600">Изградени за пребарувачи и муњевито брзи времиња на вчитување.</p>
            </div>

            <div className="text-center premium-card rounded-lg p-6 hover-scale will-change-transform">
              <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Zap className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="font-semibold text-slate-800 mb-2">Готови за Автоматизација</h3>
              <p className="text-sm text-slate-600">Претходно изградени компоненти за чатботови, форми и интеграции.</p>
            </div>

            <div className="text-center premium-card rounded-lg p-6 hover-scale will-change-transform">
              <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Target className="h-6 w-6 text-orange-600" />
              </div>
              <h3 className="font-semibold text-slate-800 mb-2">Следење на Конверзии</h3>
              <p className="text-sm text-slate-600">Вградена аналитика за следење што функционира и што не.</p>
            </div>

            <div className="text-center premium-card rounded-lg p-6 hover-scale will-change-transform">
              <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Globe className="h-6 w-6 text-cyan-600" />
              </div>
              <h3 className="font-semibold text-slate-800 mb-2">Глобален CDN</h3>
              <p className="text-sm text-slate-600">Брзи времиња на вчитување ширум светот со мрежи за достава на содржина.</p>
            </div>

            <div className="text-center premium-card rounded-lg p-6 hover-scale will-change-transform">
              <div className="w-12 h-12 bg-indigo-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="font-semibold text-slate-800 mb-2">Готови за Раст</h3>
              <p className="text-sm text-slate-600">Скалабилна архитектура што расте со потребите на вашиот бизнис.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-500 to-sky-500 relative overflow-hidden">
        {/* Floating Particles */}
        <div className="floating-particle"></div>
        <div className="floating-particle"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="premium-card-dark rounded-3xl p-12 border border-white/20">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              🚀 Готови да Ја Лансирате Вашата Високо-Конвертирачка Веб-страница?
            </h2>
            <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
              Да изградиме веб-страница што не само што изгледа неверојатно — туку ги конвертира посетителите во клиенти и го расти вашиот бизнис автоматски.
            </p>
            <Button 
              size="lg" 
              onClick={scrollToContact}
              className="bg-white text-emerald-600 hover:bg-gray-100 premium-button"
            >
              Започнете да Ја Градите Вашата Веб-страница Денес
            </Button>
            <p className="text-emerald-200 mt-4 text-sm">
              Бесплатна консултација • Прилагоден предлог • Без почетни трошоци
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};