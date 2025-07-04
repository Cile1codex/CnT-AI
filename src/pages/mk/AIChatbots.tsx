import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, MessageSquare, Zap, Settings, Globe, Users, Clock } from 'lucide-react';
import { Logo } from '../../components/Logo';
import { Button } from '../../components/ui/Button';

export const MacedonianAIChatbots: React.FC = () => {
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
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-20 h-20 bg-gradient-to-r from-sky-500 to-blue-600 rounded-3xl flex items-center justify-center mx-auto mb-8 hover-scale will-change-transform">
            <MessageSquare className="h-10 w-10 text-white" />
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight text-glow">
            24/7 AI Чатбот Системи
            <span className="block bg-gradient-to-r from-sky-400 to-emerald-400 bg-clip-text text-transparent text-glow-emerald">
              Паметна Поддршка Што Никогаш Не Спие
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Имплементирајте целосно прилагодени чатботови обучени врз вашата бизнис логика за автоматизација на разговори, водење корисници и заробување потенцијални клиенти 24/7.
          </p>
          
          <Button size="lg" onClick={scrollToContact} icon={ArrowRight} className="premium-button">
            Резервирајте Го Вашето Прилагодено Чатбот Демо
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
              Нашите AI чатботови се изградени специфично за вашиот бизнис, не генерички шаблони.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center premium-card rounded-2xl p-8 hover-scale will-change-transform">
              <div className="w-16 h-16 bg-gradient-to-r from-sky-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Settings className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">Изграден од Вашите Податоци</h3>
              <p className="text-slate-600 leading-relaxed">
                Го обучуваме вашиот чатбот користејќи ги вашите уникатни ЧПП, информации за производи и бизнис процеси — без генерички одговори.
              </p>
            </div>

            <div className="text-center premium-card rounded-2xl p-8 hover-scale will-change-transform">
              <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Globe className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">Безбедна Интеграција</h3>
              <p className="text-slate-600 leading-relaxed">
                Се интегрира директно во вашата веб-страница, CRM, helpdesk или било која платформа каде вашите клиенти интерагираат со вас.
              </p>
            </div>

            <div className="text-center premium-card rounded-2xl p-8 hover-scale will-change-transform">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">Континуирано Учење</h3>
              <p className="text-slate-600 leading-relaxed">
                Вашиот чатбот станува попаметен со време, учејќи од интеракции и подобрувајќи ги своите одговори автоматски.
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
                  <div className="w-3 h-3 bg-sky-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-800 mb-2">Ги Елиминира Повторливите Задачи за Поддршка</h3>
                    <p className="text-slate-600">Ракува со 80% од честите прашања моментално, ослободувајќи го вашиот тим за комплексни прашања што бараат човечки допир.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-3 h-3 bg-emerald-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-800 mb-2">Заробува Потенцијални Клиенти Надвор од Работно Време</h3>
                    <p className="text-slate-600">Никогаш не пропуштете потенцијален клиент. Вашиот чатбот ги квалификува потенцијалните клиенти и закажува средби дури и кога спиете.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-3 h-3 bg-purple-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-800 mb-2">Обезбедува Моментално Водење</h3>
                    <p className="text-slate-600">Ги води корисниците низ комплексни процеси, препорачува производи и обезбедува инструкции за следни чекори автоматски.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="premium-card rounded-2xl p-8 bg-gradient-to-br from-sky-500 to-emerald-500 text-black">
              <h3 className="text-2xl font-bold mb-6 text-black">Реални Резултати</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-black rounded-full mr-3"></div>
                  <span className="text-black">70% намалување на билети за поддршка</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-black rounded-full mr-3"></div>
                  <span className="text-black">24/7 достапност без вработување</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-black rounded-full mr-3"></div>
                  <span className="text-black">95% задоволство на клиентите одржано</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-black rounded-full mr-3"></div>
                  <span className="text-black">50% зголемување во заробување потенцијални клиенти</span>
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
              Карактеристики Што Нè Издвојуваат
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center premium-card rounded-lg p-6 hover-scale will-change-transform">
              <div className="w-12 h-12 bg-sky-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Zap className="h-6 w-6 text-sky-600" />
              </div>
              <h3 className="font-semibold text-slate-800 mb-2">Неограничени Текови</h3>
              <p className="text-sm text-slate-600">Создавајте комплексни патеки за разговор со неограничени намери и одговори.</p>
            </div>

            <div className="text-center premium-card rounded-lg p-6 hover-scale will-change-transform">
              <div className="w-12 h-12 bg-emerald-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Settings className="h-6 w-6 text-emerald-600" />
              </div>
              <h3 className="font-semibold text-slate-800 mb-2">API/CRM Синхронизација</h3>
              <p className="text-sm text-slate-600">Безбедна интеграција со вашите постоечки алатки и бази на податоци.</p>
            </div>

            <div className="text-center premium-card rounded-lg p-6 hover-scale will-change-transform">
              <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Globe className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="font-semibold text-slate-800 mb-2">Повеќејазичен</h3>
              <p className="text-sm text-slate-600">Поддржувајте клиенти на повеќе јазици автоматски.</p>
            </div>

            <div className="text-center premium-card rounded-lg p-6 hover-scale will-change-transform">
              <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Users className="h-6 w-6 text-orange-600" />
              </div>
              <h3 className="font-semibold text-slate-800 mb-2">Ескалација кон Луѓе</h3>
              <p className="text-sm text-slate-600">Глатко пренесување кон човечки агенти кога е потребно.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-sky-500 to-emerald-500 relative overflow-hidden">
        {/* Floating Particles */}
        <div className="floating-particle"></div>
        <div className="floating-particle"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="premium-card-dark rounded-3xl p-12 border border-white/20">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              💬 Готови да Го Имплементирате Вашиот Паметен Чатбот?
            </h2>
            <p className="text-xl text-sky-100 mb-8 max-w-2xl mx-auto">
              Да изградиме прилагоден AI чатбот што ги ракува вашите разговори со клиенти 24/7 додека го одржува гласот на вашиот бренд и експертиза.
            </p>
            <Button 
              size="lg" 
              onClick={scrollToContact}
              className="bg-white text-sky-600 hover:bg-gray-100 premium-button"
            >
              Резервирајте Го Вашето Прилагодено Чатбот Демо Денес
            </Button>
            <p className="text-sky-200 mt-4 text-sm">
              Бесплатна консултација • Прилагодено демо • Не се потребни обврски
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};