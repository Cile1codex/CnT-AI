import React, { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';

export const About: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('about');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-blue-50 to-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
            За Нас
          </h2>
          <p className="text-xl md:text-2xl font-semibold text-slate-700 mb-8">
            Попаметни Системи. Реални Резултати.
          </p>
          <div className="max-w-4xl mx-auto space-y-6">
            <p className="text-lg text-slate-600 leading-relaxed">
              Во CnT AI, веруваме дека најдобрите бизниси не работат потешко — туку попаметно. Нашата мисија е да им помогнеме на модерните компании да ги елиминираат повторливите задачи, да ги поедностават нивните backend процеси и да отклучат скалабилен раст преку прилагодена AI автоматизација.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              Не сме тука да продаваме шаблони или додатоци. Градиме интелигентни, целосно прилагодени системи што решаваат реални оперативни проблеми — од 24/7 чатбот поддршка и фунели за заробување потенцијални клиенти до backend API работни текови, автоматизирани email текови и CRM интеграции.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              Без разлика дали сте стартап што брзо расте или воспоставен бизнис што сака да го намали оперативното оптоварување, CnT AI донесува технологија и стратешко размислување за да го направи вашиот целокупен систем да работи поглатко — со помалку луѓе, помалку грешки и без губење време.
            </p>
          </div>
        </div>

        {/* What Sets Us Apart */}
        <div className={`mb-16 transition-all duration-1000 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-slate-800 mb-8 text-center">
              Што Нè Издвојува
            </h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-3 h-3 bg-sky-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                <div>
                  <h4 className="text-lg font-semibold text-slate-800 mb-2">Реална Автоматизација, Без Хајп</h4>
                  <p className="text-slate-600">Не автоматизираме заради автоматизација. Решаваме за време, перформанси и ROI.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-3 h-3 bg-emerald-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                <div>
                  <h4 className="text-lg font-semibold text-slate-800 mb-2">Прилагодени Системи</h4>
                  <p className="text-slate-600">Секој бизнис е различен. Нашите изградби се прилагодени да одговараат на вашата точна backend логика и работен тек.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-3 h-3 bg-purple-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                <div>
                  <h4 className="text-lg font-semibold text-slate-800 mb-2">Готови за Извршување</h4>
                  <p className="text-slate-600">Се движиме брзо, а нашата технологија работи. Повеќето клиенти почнуваат да гледаат влијание во рок од денови од имплементацијата.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Built by Operators */}
        <div className={`mb-16 transition-all duration-1000 delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-slate-800 mb-6">
              Изградено од Оператори, за Оператори
            </h3>
            <p className="text-lg text-slate-600 leading-relaxed">
              Знаеме како е да се губи време на повторливи задачи и неспретни системи. Затоа градиме платформи што работат тивко во позадина — давајќи му простор на вашиот тим да се фокусира на она што навистина е важно: раст, продажба и стратегија.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className={`text-center transition-all duration-1000 delay-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="bg-gradient-to-r from-sky-500 to-emerald-500 rounded-2xl p-8 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Да Ги Автоматизираме Досадните Работи</h3>
            <p className="text-sky-100 mb-6 text-lg">
              Ако се повторува, ние го автоматизираме.
            </p>
            <p className="text-sky-100 mb-8 max-w-2xl mx-auto">
              Резервирајте бесплатна консултација и откријте што би можел да прави вашиот бизнис без мануелни тесни грла што го забавуваат.
            </p>
            <button 
              onClick={scrollToContact}
              className="bg-white text-sky-600 font-semibold px-8 py-4 rounded-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 inline-flex items-center"
            >
              Резервирај Бесплатна Консултација
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};