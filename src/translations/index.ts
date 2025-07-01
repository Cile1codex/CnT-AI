export interface Translation {
  // Navigation
  nav: {
    home: string;
    whyUs: string;
    services: string;
    useCases: string;
    about: string;
    contact: string;
    bookDemo: string;
  };
  
  // Hero Section
  hero: {
    badge: string;
    title: string;
    subtitle: string;
    description: string;
    bookConsultation: string;
    seeServices: string;
    realAI: string;
    realAIDesc: string;
    systems247: string;
    systems247Desc: string;
    quickDeployment: string;
    quickDeploymentDesc: string;
  };
  
  // Why Choose Us
  whyChooseUs: {
    title: string;
    realAITitle: string;
    realAIDesc: string;
    systems247Title: string;
    systems247Desc: string;
    customBuiltTitle: string;
    customBuiltDesc: string;
    fewerTasksTitle: string;
    fewerTasksDesc: string;
    quickDeploymentTitle: string;
    quickDeploymentDesc: string;
  };
  
  // Services
  services: {
    title: string;
    chatbots: {
      title: string;
      description: string;
    };
    websites: {
      title: string;
      description: string;
    };
    leadFunnels: {
      title: string;
      description: string;
    };
    emailAutomation: {
      title: string;
      description: string;
    };
    backendIntegration: {
      title: string;
      description: string;
    };
    learnMore: string;
  };
  
  // Use Cases
  useCases: {
    title: string;
    subtitle: string;
    ecommerce: {
      industry: string;
      title: string;
      challenge: string;
      solution: string;
      results: string[];
    };
    service: {
      industry: string;
      title: string;
      challenge: string;
      solution: string;
      results: string[];
    };
    agency: {
      industry: string;
      title: string;
      challenge: string;
      solution: string;
      results: string[];
    };
    saas: {
      industry: string;
      title: string;
      challenge: string;
      solution: string;
      results: string[];
    };
    seeFullCaseStudy: string;
    yourIndustryNext: string;
    yourIndustryDesc: string;
    scheduleCall: string;
  };
  
  // About
  about: {
    title: string;
    subtitle: string;
    description1: string;
    description2: string;
    description3: string;
    whatSetsUsApart: string;
    realAutomation: string;
    realAutomationDesc: string;
    tailoredSystems: string;
    tailoredSystemsDesc: string;
    executionReady: string;
    executionReadyDesc: string;
    builtByOperators: string;
    builtByOperatorsDesc: string;
    ctaTitle: string;
    ctaSubtitle: string;
    ctaDescription: string;
    ctaButton: string;
  };
  
  // Contact
  contact: {
    title: string;
    subtitle: string;
    formTitle: string;
    fullName: string;
    email: string;
    company: string;
    message: string;
    messagePlaceholder: string;
    privacyPolicy: string;
    privacyText: string;
    submitButton: string;
    submitting: string;
    successMessage: string;
    getInTouch: string;
    getInTouchDesc: string;
    callUs: string;
    emailUs: string;
    basedIn: string;
    responseTime: string;
    responseTimeValue: string;
    whatHappensNext: string;
    step1: string;
    step2: string;
    step3: string;
    step4: string;
    recaptchaNotice: string;
  };
  
  // Footer
  footer: {
    tagline: string;
    copyright: string;
    privacyPolicy: string;
    termsOfService: string;
  };
  
  // Common
  common: {
    challenge: string;
    solution: string;
    results: string;
    features: string;
    backToHome: string;
    backToServices: string;
    backToUseCases: string;
    bookConsultation: string;
    freeConsultation: string;
    noCommitment: string;
    customDemo: string;
  };
}

export const translations: Record<'en' | 'mk', Translation> = {
  en: {
    nav: {
      home: 'Home',
      whyUs: 'Why Us',
      services: 'Services',
      useCases: 'Use Cases',
      about: 'About',
      contact: 'Contact',
      bookDemo: 'Book Demo',
    },
    hero: {
      badge: '🚀 Transform Your Business with AI Automation',
      title: 'AI-Powered Automation',
      subtitle: 'for Modern Business',
      description: 'We build smart systems that automate your backend, customer support, websites, and lead flows — so your business works around the clock.',
      bookConsultation: 'Book a Free Consultation',
      seeServices: 'See What We Automate',
      realAI: 'Real AI. Real Results.',
      realAIDesc: 'Our solutions integrate directly with your workflows and tools',
      systems247: '24/7 Systems',
      systems247Desc: 'From chatbots to backend processes, your systems never sleep',
      quickDeployment: 'Quick Deployment. Fast ROI.',
      quickDeploymentDesc: 'Our clients start seeing results within days',
    },
    whyChooseUs: {
      title: 'Why Leading Teams Choose CnT AI',
      realAITitle: 'Real AI. Real Results.',
      realAIDesc: 'Our solutions integrate directly with your workflows and tools.',
      systems247Title: '24/7 Systems',
      systems247Desc: 'From chatbots to backend processes, your systems never sleep.',
      customBuiltTitle: 'Custom-Built Logic',
      customBuiltDesc: 'No templates. Every automation is designed for your business.',
      fewerTasksTitle: 'Fewer Tasks. More Growth.',
      fewerTasksDesc: 'Free up your team and scale faster with automation.',
      quickDeploymentTitle: 'Quick Deployment. Fast ROI.',
      quickDeploymentDesc: 'Our clients start seeing results within days.',
    },
    services: {
      title: 'What We Automate',
      chatbots: {
        title: '24/7 AI Chatbot Systems',
        description: 'Custom-trained chatbots that handle customer support, FAQs, lead capture, and product guidance — available at all hours.',
      },
      websites: {
        title: 'Conversion-Optimized Websites',
        description: 'Fully custom websites built from scratch to convert traffic into clients. Designed with automation and scalability in mind.',
      },
      leadFunnels: {
        title: 'Lead Capture & Funnel Automation',
        description: 'We build smart forms and chat flows that collect and qualify leads — automatically sent to your CRM or email list.',
      },
      emailAutomation: {
        title: 'Automated Email Campaigns & Newsletters',
        description: 'Trigger-based email flows for onboarding, sales, retention, and announcements — sent without you lifting a finger.',
      },
      backendIntegration: {
        title: 'Backend API & CRM Integration',
        description: 'We connect all your tools: CRMs, forms, databases, booking systems, analytics platforms — synced in real-time.',
      },
      learnMore: 'Learn More',
    },
    useCases: {
      title: 'Real-World Success Stories',
      subtitle: 'See how businesses across different industries are saving time and money with our AI automation solutions.',
      ecommerce: {
        industry: 'E-commerce & Retail',
        title: 'Automated Customer Support',
        challenge: 'Overwhelming customer inquiries and support tickets',
        solution: 'AI chatbots handling 80% of customer questions automatically',
        results: ['24/7 customer support', '70% reduction in support costs', '95% customer satisfaction'],
      },
      service: {
        industry: 'Service Businesses',
        title: 'Lead Qualification & Booking',
        challenge: 'Manual lead follow-up and appointment scheduling',
        solution: 'Automated lead capture with smart qualification and booking flows',
        results: ['50% more qualified leads', '90% faster response time', 'Zero missed opportunities'],
      },
      agency: {
        industry: 'Marketing Agencies',
        title: 'Client Onboarding Automation',
        challenge: 'Time-consuming manual client onboarding processes',
        solution: 'Automated workflows for contracts, payments, and project kickoffs',
        results: ['5x faster onboarding', 'Consistent client experience', 'More time for strategy'],
      },
      saas: {
        industry: 'SaaS Companies',
        title: 'User Activation Flows',
        challenge: 'Low user activation and high churn rates',
        solution: 'Intelligent onboarding sequences with personalized guidance',
        results: ['60% higher activation', '40% churn reduction', 'Scalable growth'],
      },
      seeFullCaseStudy: 'See Full Case Study',
      yourIndustryNext: 'Your Industry Next?',
      yourIndustryDesc: 'Every business has unique challenges. Let us show you how AI automation can solve yours with a personalized demo.',
      scheduleCall: 'Schedule Strategy Call',
    },
    about: {
      title: 'About Us',
      subtitle: 'Smarter Systems. Real Results.',
      description1: 'At CnT AI, we believe the best businesses don\'t run harder — they run smarter. Our mission is to help modern companies eliminate repetitive tasks, streamline their backend, and unlock scalable growth through tailored AI automation.',
      description2: 'We\'re not here to sell templates or plug-ins. We build intelligent, fully customized systems that solve real operational problems — from 24/7 chatbot support and lead capture funnels to backend API workflows, automated email flows, and CRM integrations.',
      description3: 'Whether you\'re a startup scaling fast or an established business looking to reduce operational drag, CnT AI brings the tech and strategic thinking to make your entire system run smoother — with fewer people, fewer mistakes, and no wasted time.',
      whatSetsUsApart: 'What Sets Us Apart',
      realAutomation: 'Real Automation, No Hype',
      realAutomationDesc: 'We don\'t automate for the sake of it. We solve for time, performance, and ROI.',
      tailoredSystems: 'Tailored Systems',
      tailoredSystemsDesc: 'Every business is different. Our builds are customized to fit your exact backend logic and workflow.',
      executionReady: 'Execution-Ready',
      executionReadyDesc: 'We move fast, and our tech works. Most clients start seeing impact within days of deployment.',
      builtByOperators: 'Built by Operators, for Operators',
      builtByOperatorsDesc: 'We know what it\'s like to lose time to repetitive tasks and clunky systems. That\'s why we build platforms that run silently in the background — giving your team space to focus on what really matters: growth, sales, and strategy.',
      ctaTitle: 'Let\'s Automate the Boring Stuff',
      ctaSubtitle: 'If it repeats, we automate it.',
      ctaDescription: 'Book a free consultation and discover what your business could do without manual bottlenecks slowing it down.',
      ctaButton: 'Book a Free Consultation',
    },
    contact: {
      title: 'Ready to Automate and Grow?',
      subtitle: 'Let\'s build a system that saves you time, reduces stress, and keeps working while you sleep.',
      formTitle: 'Book Your Free Consultation',
      fullName: 'Full Name',
      email: 'Email Address',
      company: 'Company Name',
      message: 'Tell Us About Your Automation Needs',
      messagePlaceholder: 'Describe the manual processes that are wasting your time...',
      privacyPolicy: 'Privacy Policy',
      privacyText: 'I have read and agree to the',
      submitButton: 'Book Your Free Consultation',
      submitting: 'Submitting...',
      successMessage: '✅ Thank you! We\'ll be in touch within 24 hours.',
      getInTouch: 'Get In Touch',
      getInTouchDesc: 'Ready to transform your business operations? We\'re here to help you eliminate manual work and focus on what matters most - growing your business.',
      callUs: 'Call Us',
      emailUs: 'Email Us',
      basedIn: 'Based in',
      responseTime: 'Response Time',
      responseTimeValue: 'Within 24 hours',
      whatHappensNext: 'What Happens Next?',
      step1: 'We analyze your current processes',
      step2: 'Create a custom automation plan',
      step3: 'Show you the potential ROI',
      step4: 'Start implementation within 48 hours',
      recaptchaNotice: 'This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.',
    },
    footer: {
      tagline: 'Transforming businesses through intelligent automation solutions.',
      copyright: '© 2025 CnT AI. All rights reserved.',
      privacyPolicy: 'Privacy Policy',
      termsOfService: 'Terms of Service',
    },
    common: {
      challenge: 'The Challenge',
      solution: 'Our Solution',
      results: 'Results Achieved',
      features: 'Features',
      backToHome: 'Back to Home',
      backToServices: 'Back to Services',
      backToUseCases: 'Back to Success Stories',
      bookConsultation: 'Book Your Free Consultation',
      freeConsultation: 'Free consultation',
      noCommitment: 'No commitment required',
      customDemo: 'Custom demo',
    },
  },
  mk: {
    nav: {
      home: 'Почетна',
      whyUs: 'Зошто ние',
      services: 'Услуги',
      useCases: 'Примери',
      about: 'За нас',
      contact: 'Контакт',
      bookDemo: 'Резервирај демо',
    },
    hero: {
      badge: '🚀 Трансформирајте го вашиот бизнис со AI автоматизација',
      title: 'AI-Автоматизација',
      subtitle: 'за модерен бизнис',
      description: 'Градиме паметни системи што ги автоматизираат вашите backend процеси, корисничка поддршка, веб-страници и lead flows — за да работи вашиот бизнис 24/7.',
      bookConsultation: 'Резервирај бесплатна консултација',
      seeServices: 'Видете што автоматизираме',
      realAI: 'Вистинска AI. Вистински резултати.',
      realAIDesc: 'Нашите решенија се интегрираат директно со вашите работни процеси и алатки',
      systems247: '24/7 Системи',
      systems247Desc: 'Од chatbots до backend процеси, вашите системи никогаш не спијат',
      quickDeployment: 'Брза имплементација. Брз ROI.',
      quickDeploymentDesc: 'Нашите клиенти почнуваат да гледаат резултати во рок од денови',
    },
    whyChooseUs: {
      title: 'Зошто водечките тимови избираат CnT AI',
      realAITitle: 'Вистинска AI. Вистински резултати.',
      realAIDesc: 'Нашите решенија се интегрираат директно со вашите работни процеси и алатки.',
      systems247Title: '24/7 Системи',
      systems247Desc: 'Од chatbots до backend процеси, вашите системи никогаш не спијат.',
      customBuiltTitle: 'Прилагодена логика',
      customBuiltDesc: 'Без шаблони. Секоја автоматизација е дизајнирана за вашиот бизнис.',
      fewerTasksTitle: 'Помалку задачи. Повеќе раст.',
      fewerTasksDesc: 'Ослободете го вашиот тим и скалирајте побрзо со автоматизација.',
      quickDeploymentTitle: 'Брза имплементација. Брз ROI.',
      quickDeploymentDesc: 'Нашите клиенти почнуваат да гледаат резултати во рок од денови.',
    },
    services: {
      title: 'Што автоматизираме',
      chatbots: {
        title: '24/7 AI Chatbot системи',
        description: 'Прилагодено обучени chatbots што се справуваат со корисничка поддршка, ЧПП, заробување на leads и водење на производи — достапни во секое време.',
      },
      websites: {
        title: 'Веб-страници оптимизирани за конверзија',
        description: 'Целосно прилагодени веб-страници изградени од нула за да го претворат сообраќајот во клиенти. Дизајнирани со автоматизација и скалабилност.',
      },
      leadFunnels: {
        title: 'Заробување на leads и автоматизација на фуниите',
        description: 'Градиме паметни форми и chat flows што собираат и квалификуваат leads — автоматски испратени до вашиот CRM или email листа.',
      },
      emailAutomation: {
        title: 'Автоматизирани email кампањи и билтени',
        description: 'Trigger-базирани email flows за onboarding, продажба, задржување и објави — испратени без да крените прст.',
      },
      backendIntegration: {
        title: 'Backend API и CRM интеграција',
        description: 'Ги поврзуваме сите ваши алатки: CRMs, форми, бази на податоци, системи за резервации, аналитички платформи — синхронизирани во реално време.',
      },
      learnMore: 'Дознајте повеќе',
    },
    useCases: {
      title: 'Вистински приказни за успех',
      subtitle: 'Видете како бизнисите од различни индустрии штедат време и пари со нашите AI автоматизациски решенија.',
      ecommerce: {
        industry: 'E-commerce и малопродажба',
        title: 'Автоматизирана корисничка поддршка',
        challenge: 'Преголем број на корисничи барања и поддршка билети',
        solution: 'AI chatbots што се справуваат со 80% од корисничките прашања автоматски',
        results: ['24/7 корисничка поддршка', '70% намалување на трошоците за поддршка', '95% задоволство на корисниците'],
      },
      service: {
        industry: 'Услужни бизниси',
        title: 'Квалификација на leads и резервации',
        challenge: 'Мануелно следење на leads и закажување на термини',
        solution: 'Автоматизирано заробување на leads со паметна квалификација и booking flows',
        results: ['50% повеќе квалификувани leads', '90% побрзо време на одговор', 'Нула пропуштени можности'],
      },
      agency: {
        industry: 'Маркетинг агенции',
        title: 'Автоматизација на onboarding на клиенти',
        challenge: 'Времетрошни мануелни процеси за onboarding на клиенти',
        solution: 'Автоматизирани работни процеси за договори, плаќања и започнување на проекти',
        results: ['5x побрз onboarding', 'Конзистентно искуство за клиентите', 'Повеќе време за стратегија'],
      },
      saas: {
        industry: 'SaaS компании',
        title: 'User activation flows',
        challenge: 'Ниска активација на корисници и високи стапки на напуштање',
        solution: 'Интелигентни onboarding секвенци со персонализирано водење',
        results: ['60% повисока активација', '40% намалување на churn', 'Скалабилен раст'],
      },
      seeFullCaseStudy: 'Видете целосна студија на случај',
      yourIndustryNext: 'Вашата индустрија следна?',
      yourIndustryDesc: 'Секој бизнис има уникатни предизвици. Дозволете ни да ви покажеме како AI автоматизацијата може да ги реши вашите со персонализирано демо.',
      scheduleCall: 'Закажете стратешки повик',
    },
    about: {
      title: 'За нас',
      subtitle: 'Попаметни системи. Вистински резултати.',
      description1: 'Во CnT AI, веруваме дека најдобрите бизниси не работат потешко — туку попаметно. Нашата мисија е да им помогнеме на модерните компании да ги елиминираат повторливите задачи, да го поедностават backend-от и да отклучат скалабилен раст преку прилагодена AI автоматизација.',
      description2: 'Не сме тука да продаваме шаблони или додатоци. Градиме интелигентни, целосно прилагодени системи што решаваат вистински оперативни проблеми — од 24/7 chatbot поддршка и lead capture фунии до backend API работни процеси, автоматизирани email flows и CRM интеграции.',
      description3: 'Без разлика дали сте startup што брзо скалира или воспоставен бизнис што сака да го намали оперативното оптоварување, CnT AI донесува технологија и стратешко размислување за да го направи целиот ваш систем да работи поглатко — со помалку луѓе, помалку грешки и без загубено време.',
      whatSetsUsApart: 'Што нè издвојува',
      realAutomation: 'Вистинска автоматизација, без хајп',
      realAutomationDesc: 'Не автоматизираме заради автоматизација. Решаваме за време, перформанси и ROI.',
      tailoredSystems: 'Прилагодени системи',
      tailoredSystemsDesc: 'Секој бизнис е различен. Нашите изградби се прилагодени да одговараат на вашата точна backend логика и работен процес.',
      executionReady: 'Подготвени за извршување',
      executionReadyDesc: 'Се движиме брзо, а нашата технологија работи. Повеќето клиенти почнуваат да гледаат влијание во рок од денови од имплементацијата.',
      builtByOperators: 'Изградено од оператори, за оператори',
      builtByOperatorsDesc: 'Знаеме како е да се губи време на повторливи задачи и неспретни системи. Затоа градиме платформи што работат тивко во позадина — давајќи му простор на вашиот тим да се фокусира на она што навистина е важно: раст, продажба и стратегија.',
      ctaTitle: 'Да ги автоматизираме досадните работи',
      ctaSubtitle: 'Ако се повторува, ние го автоматизираме.',
      ctaDescription: 'Резервирајте бесплатна консултација и откријте што би можел да прави вашиот бизнис без мануелни пречки што го забавуваат.',
      ctaButton: 'Резервирај бесплатна консултација',
    },
    contact: {
      title: 'Подготвени да автоматизирате и растете?',
      subtitle: 'Да изградиме систем што ќе ви заштеди време, ќе го намали стресот и ќе продолжи да работи додека спиете.',
      formTitle: 'Резервирајте ја вашата бесплатна консултација',
      fullName: 'Полно име',
      email: 'Email адреса',
      company: 'Име на компанија',
      message: 'Кажете ни за вашите потреби за автоматизација',
      messagePlaceholder: 'Опишете ги мануелните процеси што ви го губат времето...',
      privacyPolicy: 'Политика за приватност',
      privacyText: 'Ја прочитав и се согласувам со',
      submitButton: 'Резервирај ја твојата бесплатна консултација',
      submitting: 'Се испраќа...',
      successMessage: '✅ Ви благодариме! Ќе се јавиме во рок од 24 часа.',
      getInTouch: 'Контактирајте не',
      getInTouchDesc: 'Подготвени да ги трансформирате вашите бизнис операции? Тука сме да ви помогнеме да ја елиминирате мануелната работа и да се фокусирате на она што е најважно - растењето на вашиот бизнис.',
      callUs: 'Јавете се',
      emailUs: 'Испратете email',
      basedIn: 'Базирани во',
      responseTime: 'Време на одговор',
      responseTimeValue: 'Во рок од 24 часа',
      whatHappensNext: 'Што следува?',
      step1: 'Ги анализираме вашите тековни процеси',
      step2: 'Создаваме прилагоден план за автоматизација',
      step3: 'Ви го покажуваме потенцијалниот ROI',
      step4: 'Започнуваме имплементација во рок од 48 часа',
      recaptchaNotice: 'Оваа страница е заштитена со reCAPTCHA и се применуваат Google Политиката за приватност и Условите за користење.',
    },
    footer: {
      tagline: 'Трансформираме бизниси преку интелигентни автоматизациски решенија.',
      copyright: '© 2025 CnT AI. Сите права се задржани.',
      privacyPolicy: 'Политика за приватност',
      termsOfService: 'Услови за користење',
    },
    common: {
      challenge: 'Предизвикот',
      solution: 'Нашето решение',
      results: 'Постигнати резултати',
      features: 'Карактеристики',
      backToHome: 'Назад кон почетна',
      backToServices: 'Назад кон услуги',
      backToUseCases: 'Назад кон приказни за успех',
      bookConsultation: 'Резервирај ја твојата бесплатна консултација',
      freeConsultation: 'Бесплатна консултација',
      noCommitment: 'Без обврска',
      customDemo: 'Прилагодено демо',
    },
  },
};

export const useTranslation = (language: 'en' | 'mk' = 'en') => {
  return translations[language];
};