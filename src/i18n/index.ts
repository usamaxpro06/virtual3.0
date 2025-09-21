import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Translation resources
const resources = {
  en: {
    translation: {
      nav: {
        home: "Home",
        services: "Services",
        about: "About",
        contact: "Contact",
        pricing: "Pricing"
      },
      hero: {
        title: "Elite Virtual Computer",
        subtitle: "Services & Solutions",
        description: "Transform your technology experience with our premium remote computer services. Expert technicians available 24/7 for seamless solutions.",
        searchPlaceholder: "What computer service do you need?",
        exploreServices: "Explore Our Services",
        premiumPackages: "Premium Packages",
        trustedBy: "🏆 Trusted by 10,000+ Businesses",
        enterpriseSecurity: "Enterprise Security",
        bankGradeEncryption: "Bank-grade encryption",
        support247: "24/7 Support",
        lightningFastResponse: "Lightning-fast response",
        clientsCount: "10,000+ Clients",
        trustedWorldwide: "Trusted worldwide",
        premiumServices: "Premium Services",
        enterpriseGradeSolutions: "Enterprise-Grade Solutions",
        enterpriseGradeDescription: "Experience unparalleled expertise with our comprehensive suite of professional computer services, designed to elevate your digital infrastructure.",
        readyToStart: "Ready to Get Started?",
        joinThousands: "Join thousands of satisfied customers who trust us with their computer needs",
        getFreeQuote: "Get Free Quote",
        browseServices: "Browse Services"
      },
      testimonials: {
        title: "What Our Clients Say",
        description: "Trusted by thousands of satisfied customers worldwide"
      },
      about: {
        title: "About VirtualTech Pro",
        description: "We're a team of dedicated professionals providing reliable, secure, and efficient virtual computer services to clients worldwide.",
        ourStory: "Our Story",
        storyParagraph1: "Founded in 2020, VirtualTech Pro started with a simple mission: to provide professional computer services remotely, making expert technical help accessible to everyone, regardless of location.",
        storyParagraph2: "What began as a small team of tech enthusiasts has grown into a trusted service provider, helping thousands of clients with their computer needs. We've handled everything from simple Windows activations to complex system setups.",
        storyParagraph3: "Today, we continue to focus on delivering exceptional service quality, maintaining the highest security standards, and ensuring complete customer satisfaction with every interaction.",
        statsLabels: {
          happyClients: "Happy Clients",
          hoursOfService: "Hours of Service",
          successRate: "Success Rate",
          secureConnections: "Secure Connections"
        },
        coreValues: "Our Core Values",
        coreValuesDescription: "The principles that guide everything we do and drive our commitment to excellence",
        values: {
          professionalExcellence: {
            title: "Professional Excellence",
            description: "We deliver high-quality services with attention to detail and technical expertise that exceeds expectations."
          },
          securityFirst: {
            title: "Security First",
            description: "Your data security and privacy are our top priorities. We use encrypted connections and follow strict security protocols."
          },
          customerSatisfaction: {
            title: "Customer Satisfaction",
            description: "We're committed to ensuring every client is completely satisfied with our services and support."
          },
          fastReliable: {
            title: "Fast & Reliable",
            description: "Quick response times and reliable service delivery to get your computer issues resolved promptly."
          }
        },
        meetOurTeam: "Meet Our Team",
        teamDescription: "Experienced professionals dedicated to providing you with the best computer services",
        team: {
          alex: {
            name: "Alex Johnson",
            role: "Lead Technical Specialist",
            experience: "8+ years",
            description: "Expert in Windows systems, software installation, and system optimization."
          },
          sarah: {
            name: "Sarah Chen",
            role: "Data Entry Specialist",
            experience: "5+ years",
            description: "Specializes in accurate data entry, database management, and document processing."
          },
          mike: {
            name: "Mike Rodriguez",
            role: "Support Manager",
            experience: "6+ years",
            description: "Ensures exceptional customer service and manages technical support operations."
          }
        },
        whyChooseUs: "Why Choose VirtualTech Pro?",
        whatSetsUsApart: "What Sets Us Apart",
        whatSetsUsApartItems: {
          certified: "Certified technical professionals with years of experience",
          secure: "100% secure remote connections with encryption",
          transparent: "Transparent pricing with no hidden fees",
          support: "24/7 customer support and satisfaction guarantee",
          fast: "Fast turnaround times and reliable service delivery",
          comprehensive: "Comprehensive range of computer services under one roof"
        },
        readyToExperience: "Ready to Experience the Difference?",
        readyToExperienceDescription: "Join thousands of satisfied customers who trust VirtualTech Pro for their computer service needs. Get started today and see why we're the preferred choice for remote computer services."
      },
      pricing: {
        title: "Simple, Transparent Pricing",
        description: "Choose the package that best fits your needs. No hidden fees, no surprises.",
        packages: {
          basic: {
            name: "Basic Package",
            description: "Perfect for simple Windows activation needs",
            buttonText: "Choose Basic",
            features: [
              "Windows 10/11 activation",
              "1 software installation",
              "Basic system check",
              "30 minutes service time",
              "Email support"
            ]
          },
          advanced: {
            name: "Advanced Package",
            description: "Comprehensive setup with multiple installations",
            buttonText: "Choose Advanced",
            features: [
              "Windows activation included",
              "Up to 5 software installations",
              "Driver updates",
              "System optimization",
              "2 hours service time",
              "Priority support",
              "30-day follow-up"
            ]
          },
          premium: {
            name: "Premium Package",
            description: "Complete computer setup and ongoing support",
            buttonText: "Choose Premium",
            features: [
              "Everything in Advanced",
              "Unlimited software installations",
              "Security suite setup",
              "Data backup configuration",
              "Performance optimization",
              "4 hours service time",
              "24/7 chat support",
              "90-day warranty"
            ]
          }
        },
        additionalServices: "Additional Services",
        additionalServicesDescription: "Need something specific? We offer individual services at competitive rates.",
        services: {
          dataEntry: "Data Entry",
          dataEntryDescription: "Professional data entry services",
          technicalSupport: "Technical Support",
          technicalSupportDescription: "One-time technical support",
          virusRemoval: "Virus Removal",
          virusRemovalDescription: "Complete malware removal",
          systemRecovery: "System Recovery",
          systemRecoveryDescription: "Data recovery and system restore",
          customInstallation: "Custom Installation",
          customInstallationDescription: "Per software installation",
          trainingSession: "Training Session",
          trainingSessionDescription: "Personal computer training"
        },
        securePayment: "Secure Payment Options",
        securePaymentDescription: "We accept all major payment methods for your convenience",
        paymentMethods: {
          creditCards: "Credit Cards",
          bankTransfer: "Bank Transfer",
          paypal: "PayPal",
          crypto: "Crypto"
        },
        secureProcessing: "All payments are processed securely with 256-bit SSL encryption",
        satisfactionGuarantee: "100% Satisfaction Guarantee",
        satisfactionGuaranteeDescription: "Not satisfied with our service? We'll refund your payment or redo the work at no extra cost."
      },
      support: {
        needImmediateHelp: "Need Immediate Help?"
      },
      services: {
        title: "Professional Computer Services",
        description: "Expert remote computer services delivered with precision and care. Choose from our comprehensive range of professional solutions.",
        windowsActivation: "Windows Activation",
        windowsActivationDesc: "Professional Windows activation for all versions including Windows 10 and 11. Genuine licenses guaranteed.",
        softwareInstallation: "Software Installation",
        softwareInstallationDesc: "Expert installation and configuration of software applications, drivers, and system utilities.",
        dataEntry: "Data Entry Services",
        dataEntryDesc: "Accurate and efficient data entry for businesses and individuals. Fast turnaround guaranteed.",
        systemSetup: "System Setup & Optimization",
        systemSetupDesc: "Complete computer setup, optimization, and performance tuning for maximum efficiency.",
        technicalSupport: "Technical Support",
        technicalSupportDesc: "Comprehensive technical support for various computer issues and troubleshooting.",
        security: "Security & Maintenance",
        securityDesc: "Computer security setup, malware removal, and regular maintenance services.",
        webDevelopment: "Web Development",
        webDevelopmentDesc: "Professional web development services including websites, web applications, and e-commerce solutions.",
        logoDesigning: "Logo Designing",
        logoDesigningDesc: "Creative logo design services to establish your brand identity with professional graphics.",
        gameInstallation: "Game Installation",
        gameInstallationDesc: "Professional game installation and setup services for PC gaming enthusiasts.",
        getQuote: "Get Quote",
        contactUs: "Contact Us",
        howItWorks: "How It Works",
        howItWorksDesc: "Simple, secure, and efficient process to get your computer issues resolved quickly",
        contactUsStep: "Contact Us",
        contactUsStepDesc: "Reach out via our contact form or WhatsApp with your requirements",
        getQuoteStep: "Get Quote",
        getQuoteStepDesc: "Receive a detailed quote and timeline for your specific needs",
        secureConnection: "Secure Connection",
        secureConnectionDesc: "We establish a secure remote connection to your computer",
        serviceDelivery: "Service Delivery",
        serviceDeliveryDesc: "Expert completion of your requested service with full transparency",
        readyToFix: "Ready to Get Your Computer Fixed?",
        readyToFixDesc: "Don't let computer issues slow you down. Get professional help today.",
        getFreeQuote: "Get Free Quote",
        viewPricing: "View Pricing"
      },
      contact: {
        title: "Get In Touch",
        description: "Ready to get your computer issues resolved? Contact us today for a free quote and fast, professional service.",
        contactMethods: "Contact Methods",
        businessHours: "Business Hours",
        serviceArea: "Service Area",
        needHelp: "Need Immediate Help?",
        needHelpDesc: "Check out these common questions or contact us directly",
        sendMessage: "Send Us a Message",
        sendMessageDesc: "Fill out the form below and we'll get back to you within 2 hours during business hours.",
        emailUs: "Email Us",
        callUs: "Call Us",
        whatsapp: "WhatsApp",
        sendEmail: "Send Email",
        callNow: "Call Now",
        openWhatsApp: "Open WhatsApp",
        chatInstantly: "Chat with us instantly",
        serviceAreaDesc: "We provide remote computer services worldwide. No matter where you are, we can help!",
        emergencySupport: "Emergency Support: Available 24/7 for urgent issues (additional charges may apply)"
      },
      common: {
        learnMore: "Learn More",
        getStarted: "Get Started",
        readMore: "Read More",
        submit: "Submit",
        close: "Close",
        loading: "Loading...",
        error: "Error",
        success: "Success",
        mostPopular: "Most Popular"
      },
      footer: {
        brandDescription: "Professional virtual computer services for all your tech needs. Fast, reliable, and secure.",
        quickLinks: "Quick Links",
        ourServices: "Our Services",
        pricing: "Pricing",
        aboutUs: "About Us",
        contact: "Contact",
        services: "Services",
        windowsActivation: "Windows Activation",
        softwareInstallation: "Software Installation",
        dataEntry: "Data Entry",
        systemSetup: "System Setup",
        technicalSupport: "Technical Support",
        contactInfo: "Contact Info",
        availableWorldwide: "Available Worldwide",
        copyright: "© 2024 VirtualTech Pro. All rights reserved."
      },
      search: {
        placeholder: "Search for services...",
        button: "Search"
      },
      faq: {
        title: "Frequently Asked Questions",
        description: "Get answers to common questions about our services",
        questions: {
          remoteAccess: "How do you access my computer remotely?",
          dataSafety: "Is my data safe during the process?",
          serviceTime: "How long do services typically take?",
          satisfaction: "What if I'm not satisfied with the service?"
        },
        answers: {
          remoteAccess: "We use secure, encrypted remote desktop software like TeamViewer or AnyDesk. You maintain full control and can disconnect at any time.",
          dataSafety: "Absolutely. We follow strict security protocols and never access or store your personal data. All connections are encrypted end-to-end.",
          serviceTime: "Most services are completed within 30 minutes to 2 hours, depending on complexity. We provide time estimates upfront.",
          satisfaction: "We offer a 100% satisfaction guarantee. If you're not happy, we'll refund your payment or redo the work at no extra cost."
        }
      }
    }
  },
  ar: {
    translation: {
      nav: {
        home: "الرئيسية",
        services: "الخدمات",
        about: "حولنا",
        contact: "اتصل بنا",
        pricing: "الأسعار"
      },
      hero: {
        title: "خدمات الحاسوب الافتراضية",
        subtitle: "المتميزة والحلول",
        description: "حوّل تجربتك التقنية مع خدمات الحاسوب الافتراضية المتميزة. فنيون خبراء متاحون على مدار الساعة لحلول سلسة.",
        searchPlaceholder: "ما خدمة الحاسوب التي تحتاجها؟",
        exploreServices: "استكشف خدماتنا",
        premiumPackages: "الباقات المتميزة",
        trustedBy: "🏆 موثوق من قبل أكثر من 10,000 شركة",
        enterpriseSecurity: "أمان المؤسسات",
        bankGradeEncryption: "تشفير بمستوى البنوك",
        support247: "دعم 24/7",
        lightningFastResponse: "استجابة سريعة كالبرق",
        clientsCount: "10,000+ عميل",
        trustedWorldwide: "موثوق به عالميًا",
        premiumServices: "خدمات مميزة",
        enterpriseGradeSolutions: "حلول على مستوى المؤسسات",
        enterpriseGradeDescription: "اختبر خبرة لا مثيل لها مع مجموعتنا الشاملة من خدمات الحاسوب المهنية، المصممة لرفع مستوى البنية التحتية الرقمية لديك.",
        readyToStart: "مستعد للبدء؟",
        joinThousands: "انضم إلى آلاف العملاء الراضين الذين يثقون بنا في احتياجات الحاسوب الخاصة بهم",
        getFreeQuote: "احصل على عرض سعر مجاني",
        browseServices: "تصفح الخدمات"
      },
      testimonials: {
        title: "ماذا يقول عملاؤنا",
        description: "موثوق به من قبل آلاف العملاء الراضين حول العالم"
      },
      about: {
        title: "حول VirtualTech Pro",
        description: "نحن فريق من المهنيين المتفانين الذين يقدمون خدمات حاسوب افتراضية موثوقة وآمنة وفعالة للعملاء في جميع أنحاء العالم.",
        ourStory: "قصتنا",
        storyParagraph1: "تأسست VirtualTech Pro في عام 2020، بدأت بمهمة بسيطة: تقديم خدمات حاسوب مهنية عن بُعد، مما يجعل المساعدة التقنية المتخصصة في متناول الجميع، بغض النظر عن الموقع.",
        storyParagraph2: "ما بدأ كفريق صغير من عشاق التكنولوجيا نما ليصبح مقدم خدمة موثوق، يساعد آلاف العملاء في احتياجات الحاسوب الخاصة بهم. لقد تعاملنا مع كل شيء من تفعيل Windows البسيط إلى إعداد الأنظمة المعقدة.",
        storyParagraph3: "اليوم، نواصل التركيز على تقديم جودة خدمة استثنائية، والحفاظ على أعلى معايير الأمان، وضمان الرضا الكامل للعملاء مع كل تفاعل.",
        statsLabels: {
          happyClients: "عملاء سعداء",
          hoursOfService: "ساعات خدمة",
          successRate: "معدل النجاح",
          secureConnections: "اتصالات آمنة"
        },
        coreValues: "قيمنا الأساسية",
        coreValuesDescription: "المبادئ التي توجه كل ما نفعله وتدفع التزامنا بالتميز",
        values: {
          professionalExcellence: {
            title: "التميز المهني",
            description: "نقدم خدمات عالية الجودة مع الاهتمام بالتفاصيل والخبرة التقنية التي تتجاوز التوقعات."
          },
          securityFirst: {
            title: "الأمان أولاً",
            description: "أمان بياناتك وخصوصيتك هي أولوياتنا القصوى. نستخدم اتصالات مشفرة ونتبع بروتوكولات أمان صارمة."
          },
          customerSatisfaction: {
            title: "رضا العملاء",
            description: "نلتزم بضمان رضا كل عميل تمامًا عن خدماتنا ودعمنا."
          },
          fastReliable: {
            title: "سريع وموثوق",
            description: "أوقات استجابة سريعة وتسليم خدمة موثوق لحل مشاكل الحاسوب الخاصة بك بسرعة."
          }
        },
        meetOurTeam: "تعرف على فريقنا",
        teamDescription: "محترفون ذوو خبرة مكرسون لتقديم أفضل خدمات الحاسوب لك",
        team: {
          alex: {
            name: "أليكس جونسون",
            role: "أخصائي تقني رئيسي",
            experience: "8+ سنوات",
            description: "خبير في أنظمة Windows وتثبيت البرامج وتحسين النظام."
          },
          sarah: {
            name: "سارة تشين",
            role: "أخصائية إدخال بيانات",
            experience: "5+ سنوات",
            description: "متخصصة في إدخال البيانات الدقيق وإدارة قواعد البيانات ومعالجة الوثائق."
          },
          mike: {
            name: "مايك رودريغز",
            role: "مدير الدعم",
            experience: "6+ سنوات",
            description: "يضمن خدمة عملاء استثنائية ويدير عمليات الدعم التقني."
          }
        },
        whyChooseUs: "لماذا تختار VirtualTech Pro؟",
        whatSetsUsApart: "ما يميزنا",
        whatSetsUsApartItems: {
          certified: "محترفون تقنيون معتمدون بسنوات من الخبرة",
          secure: "اتصالات آمنة 100% عن بُعد مع التشفير",
          transparent: "تسعير شفاف بدون رسوم خفية",
          support: "دعم عملاء 24/7 وضمان الرضا",
          fast: "أوقات تسليم سريعة وخدمة موثوقة",
          comprehensive: "مجموعة شاملة من خدمات الحاسوب تحت سقف واحد"
        },
        readyToExperience: "مستعد لتجربة الفرق؟",
        readyToExperienceDescription: "انضم إلى آلاف العملاء الراضين الذين يثقون في VirtualTech Pro لاحتياجات خدمة الحاسوب الخاصة بهم. ابدأ اليوم وانظر لماذا نحن الخيار المفضل لخدمات الحاسوب عن بُعد."
      },
      pricing: {
        title: "أسعار بسيطة وشفافة",
        description: "اختر الباقة التي تناسب احتياجاتك بشكل أفضل. لا توجد رسوم مخفية، لا مفاجآت.",
        packages: {
          basic: {
            name: "الباقة الأساسية",
            description: "مثالية لاحتياجات تفعيل Windows البسيطة",
            buttonText: "اختر الأساسية",
            features: [
              "تفعيل Windows 10/11",
              "تثبيت برنامج واحد",
              "فحص نظام أساسي",
              "30 دقيقة وقت الخدمة",
              "دعم عبر البريد الإلكتروني"
            ]
          },
          advanced: {
            name: "الباقة المتقدمة",
            description: "إعداد شامل مع تثبيتات متعددة",
            buttonText: "اختر المتقدمة",
            features: [
              "تفعيل Windows مشمول",
              "حتى 5 تثبيتات برامج",
              "تحديثات التعريفات",
              "تحسين النظام",
              "ساعتان وقت الخدمة",
              "دعم ذو أولوية",
              "متابعة لمدة 30 يوم"
            ]
          },
          premium: {
            name: "الباقة المميزة",
            description: "إعداد حاسوب كامل ودعم مستمر",
            buttonText: "اختر المميزة",
            features: [
              "كل ما في الباقة المتقدمة",
              "تثبيتات برامج غير محدودة",
              "إعداد مجموعة الأمان",
              "تكوين النسخ الاحتياطي للبيانات",
              "تحسين الأداء",
              "4 ساعات وقت الخدمة",
              "دعم دردشة 24/7",
              "ضمان 90 يوم"
            ]
          }
        },
        additionalServices: "خدمات إضافية",
        additionalServicesDescription: "تحتاج شيئًا محددًا؟ نقدم خدمات فردية بأسعار تنافسية.",
        services: {
          dataEntry: "إدخال البيانات",
          dataEntryDescription: "خدمات إدخال بيانات مهنية",
          technicalSupport: "الدعم التقني",
          technicalSupportDescription: "دعم تقني لمرة واحدة",
          virusRemoval: "إزالة الفيروسات",
          virusRemovalDescription: "إزالة كاملة للبرامج الضارة",
          systemRecovery: "استعادة النظام",
          systemRecoveryDescription: "استعادة البيانات واستعادة النظام",
          customInstallation: "تثبيت مخصص",
          customInstallationDescription: "لكل تثبيت برنامج",
          trainingSession: "جلسة تدريب",
          trainingSessionDescription: "تدريب شخصي على الحاسوب"
        },
        securePayment: "خيارات دفع آمنة",
        securePaymentDescription: "نقبل جميع طرق الدفع الرئيسية لراحتك",
        paymentMethods: {
          creditCards: "البطاقات الائتمانية",
          bankTransfer: "التحويل البنكي",
          paypal: "PayPal",
          crypto: "العملات المشفرة"
        },
        secureProcessing: "جميع المدفوعات تتم معالجتها بأمان باستخدام تشفير SSL 256-bit",
        satisfactionGuarantee: "ضمان رضا 100%",
        satisfactionGuaranteeDescription: "غير راضٍ عن خدمتنا؟ سنسترد دفعتك أو نعيد العمل دون تكلفة إضافية."
      },
      support: {
        needImmediateHelp: "تحتاج مساعدة فورية؟"
      },
      services: {
        title: "خدمات الحاسوب المهنية",
        description: "خدمات الحاسوب الافتراضية المتخصصة المقدمة بدقة واهتمام. اختر من مجموعتنا الشاملة من الحلول المهنية.",
        windowsActivation: "تفعيل الويندوز",
        windowsActivationDesc: "تفعيل احترافي للويندوز لجميع الإصدارات بما في ذلك ويندوز 10 و 11. تراخيص أصلية مضمونة.",
        softwareInstallation: "تثبيت البرامج",
        softwareInstallationDesc: "تثبيت وتكوين خبير للتطبيقات والبرامج التشغيلية وأدوات النظام.",
        dataEntry: "خدمات إدخال البيانات",
        dataEntryDesc: "إدخال بيانات دقيق وفعال للشركات والأفراد. تسليم سريع مضمون.",
        systemSetup: "إعداد وتحسين النظام",
        systemSetupDesc: "إعداد كامل للحاسوب والتحسين وضبط الأداء للحصول على أقصى كفاءة.",
        technicalSupport: "الدعم التقني",
        technicalSupportDesc: "دعم تقني شامل لمختلف مشاكل الحاسوب واستكشاف الأخطاء وإصلاحها.",
        security: "الأمان والصيانة",
        securityDesc: "إعداد أمان الحاسوب وإزالة البرامج الضارة وخدمات الصيانة المنتظمة.",
        webDevelopment: "تطوير المواقع",
        webDevelopmentDesc: "خدمات تطوير مواقع احترافية تشمل المواقع وتطبيقات الويب وحلول التجارة الإلكترونية.",
        logoDesigning: "تصميم الشعارات",
        logoDesigningDesc: "خدمات تصميم شعارات إبداعية لتأسيس هوية علامتك التجارية مع رسومات احترافية.",
        gameInstallation: "تثبيت الألعاب",
        gameInstallationDesc: "خدمات تثبيت وإعداد ألعاب احترافية لعشاق الألعاب على الحاسوب.",
        getQuote: "احصل على عرض أسعار",
        contactUs: "اتصل بنا",
        howItWorks: "كيف يعمل",
        howItWorksDesc: "عملية بسيطة وآمنة وفعالة لحل مشاكل حاسوبك بسرعة",
        contactUsStep: "اتصل بنا",
        contactUsStepDesc: "تواصل معنا عبر نموذج الاتصال أو واتساب مع متطلباتك",
        getQuoteStep: "احصل على عرض أسعار",
        getQuoteStepDesc: "احصل على عرض أسعار مفصل والجدول الزمني لاحتياجاتك المحددة",
        secureConnection: "اتصال آمن",
        secureConnectionDesc: "نقوم بإنشاء اتصال آمن عن بُعد لحاسوبك",
        serviceDelivery: "تقديم الخدمة",
        serviceDeliveryDesc: "إنجاز خبير لخدمتك المطلوبة مع الشفافية الكاملة",
        readyToFix: "مستعد لإصلاح حاسوبك؟",
        readyToFixDesc: "لا تدع مشاكل الحاسوب تبطئك. احصل على مساعدة احترافية اليوم.",
        getFreeQuote: "احصل على عرض أسعار مجاني",
        viewPricing: "عرض الأسعار"
      },
      contact: {
        title: "ابق على تواصل",
        description: "هل أنت مستعد لحل مشاكل حاسوبك؟ اتصل بنا اليوم للحصول على عرض أسعار مجاني وخدمة سريعة ومهنية.",
        contactMethods: "طرق الاتصال",
        businessHours: "ساعات العمل",
        serviceArea: "منطقة الخدمة",
        needHelp: "تحتاج مساعدة فورية؟",
        needHelpDesc: "تحقق من هذه الأسئلة الشائعة أو اتصل بنا مباشرة",
        sendMessage: "أرسل لنا رسالة",
        sendMessageDesc: "املأ النموذج أدناه وسنعود إليك خلال ساعتين خلال ساعات العمل.",
        emailUs: "راسلنا عبر البريد الإلكتروني",
        callUs: "اتصل بنا",
        whatsapp: "واتساب",
        sendEmail: "أرسل بريد إلكتروني",
        callNow: "اتصل الآن",
        openWhatsApp: "فتح واتساب",
        chatInstantly: "تحدث معنا فورًا",
        serviceAreaDesc: "نقدم خدمات الحاسوب عن بُعد في جميع أنحاء العالم. بغض النظر عن مكانك، يمكننا المساعدة!",
        emergencySupport: "الدعم الطارئ: متوفر على مدار الساعة طوال أيام الأسبوع للمشاكل العاجلة (قد تطبق رسوم إضافية)"
      },
      common: {
        learnMore: "اعرف أكثر",
        getStarted: "ابدأ الآن",
        readMore: "اقرأ أكثر",
        submit: "إرسال",
        close: "إغلاق",
        loading: "جاري التحميل...",
        error: "خطأ",
        success: "نجح",
        mostPopular: "الأكثر شعبية"
      },
      footer: {
        brandDescription: "خدمات حاسوب افتراضية احترافية لجميع احتياجاتك التقنية. سريعة وموثوقة وآمنة.",
        quickLinks: "روابط سريعة",
        ourServices: "خدماتنا",
        pricing: "الأسعار",
        aboutUs: "حولنا",
        contact: "اتصل بنا",
        services: "الخدمات",
        windowsActivation: "تفعيل الويندوز",
        softwareInstallation: "تثبيت البرامج",
        dataEntry: "إدخال البيانات",
        systemSetup: "إعداد النظام",
        technicalSupport: "الدعم التقني",
        contactInfo: "معلومات الاتصال",
        availableWorldwide: "متوفر في جميع أنحاء العالم",
        copyright: "© 2024 VirtualTech Pro. جميع الحقوق محفوظة."
      },
      search: {
        placeholder: "البحث عن الخدمات...",
        button: "بحث"
      },
      faq: {
        title: "الأسئلة الأكثر شيوعاً",
        description: "احصل على إجابات للأسئلة الشائعة حول خدماتنا",
        questions: {
          remoteAccess: "كيف تصلون إلى حاسوبي عن بُعد؟",
          dataSafety: "هل بياناتي آمنة أثناء العملية؟",
          serviceTime: "كم من الوقت تستغرق الخدمات عادة؟",
          satisfaction: "ماذا لو لم أكن راضياً عن الخدمة؟"
        },
        answers: {
          remoteAccess: "نستخدم برامج سطح المكتب البعيد الآمنة والمشفرة مثل TeamViewer أو AnyDesk. تحتفظ بالتحكم الكامل ويمكنك قطع الاتصال في أي وقت.",
          dataSafety: "بالطبع. نتبع بروتوكولات أمنية صارمة ولا نصل أبداً إلى بياناتك الشخصية أو نخزنها. جميع الاتصالات مشفرة من طرف إلى طرف.",
          serviceTime: "معظم الخدمات تكتمل خلال 30 دقيقة إلى ساعتين، حسب التعقيد. نقدم تقديرات زمنية مسبقاً.",
          satisfaction: "نقدم ضمان رضا بنسبة 100%. إذا لم تكن راضياً، سنسترد دفعتك أو نعيد العمل دون تكلفة إضافية."
        }
      }
    }
  },
  fr: {
    translation: {
      nav: {
        home: "Accueil",
        services: "Services",
        about: "À propos",
        contact: "Contact",
        pricing: "Tarifs"
      },
      hero: {
        title: "Services Informatiques",
        subtitle: "Virtuels d'Élite",
        description: "Transformez votre expérience technologique avec nos services informatiques à distance premium. Des techniciens experts disponibles 24h/7j pour des solutions fluides.",
        searchPlaceholder: "De quel service informatique avez-vous besoin ?",
        exploreServices: "Explorez nos services",
        premiumPackages: "Forfaits Premium",
        trustedBy: "🏆 Approuvé par plus de 10 000 entreprises",
        enterpriseSecurity: "Sécurité d'Entreprise",
        bankGradeEncryption: "Chiffrement de niveau bancaire",
        support247: "Support 24/7",
        lightningFastResponse: "Réponse rapide comme l'éclair",
        clientsCount: "10 000+ Clients",
        trustedWorldwide: "Approuvé dans le monde entier",
        premiumServices: "Services Premium",
        enterpriseGradeSolutions: "Solutions de Niveau Entreprise",
        enterpriseGradeDescription: "Découvrez une expertise inégalée avec notre suite complète de services informatiques professionnels, conçue pour élever votre infrastructure numérique.",
        readyToStart: "Prêt à Commencer ?",
        joinThousands: "Rejoignez des milliers de clients satisfaits qui nous font confiance pour leurs besoins informatiques",
        getFreeQuote: "Obtenez un Devis Gratuit",
        browseServices: "Parcourir les Services"
      },
      testimonials: {
        title: "Ce Que Disent Nos Clients",
        description: "Approuvé par des milliers de clients satisfaits dans le monde entier"
      },
      about: {
        title: "À Propos de VirtualTech Pro",
        description: "Nous sommes une équipe de professionnels dévoués fournissant des services informatiques virtuels fiables, sécurisés et efficaces aux clients du monde entier.",
        ourStory: "Notre Histoire",
        storyParagraph1: "Fondée en 2020, VirtualTech Pro a commencé avec une mission simple : fournir des services informatiques professionnels à distance, rendant l'aide technique experte accessible à tous, quel que soit l'emplacement.",
        storyParagraph2: "Ce qui a commencé comme une petite équipe d'passionnés de technologie s'est développé en un fournisseur de services de confiance, aidant des milliers de clients avec leurs besoins informatiques. Nous avons tout géré, des activations Windows simples aux configurations système complexes.",
        storyParagraph3: "Aujourd'hui, nous continuons à nous concentrer sur la fourniture d'une qualité de service exceptionnelle, le maintien des plus hauts standards de sécurité, et la garantie d'une satisfaction client complète à chaque interaction.",
        statsLabels: {
          happyClients: "Clients Satisfaits",
          hoursOfService: "Heures de Service",
          successRate: "Taux de Réussite",
          secureConnections: "Connexions Sécurisées"
        },
        coreValues: "Nos Valeurs Fondamentales",
        coreValuesDescription: "Les principes qui guident tout ce que nous faisons et qui motivent notre engagement envers l'excellence",
        values: {
          professionalExcellence: {
            title: "Excellence Professionnelle",
            description: "Nous livrons des services de haute qualité avec attention aux détails et expertise technique qui dépasse les attentes."
          },
          securityFirst: {
            title: "Sécurité d'Abord",
            description: "La sécurité de vos données et votre confidentialité sont nos priorités absolues. Nous utilisons des connexions chiffrées et suivons des protocoles de sécurité stricts."
          },
          customerSatisfaction: {
            title: "Satisfaction Client",
            description: "Nous nous engageons à garantir que chaque client soit complètement satisfait de nos services et de notre support."
          },
          fastReliable: {
            title: "Rapide et Fiable",
            description: "Temps de réponse rapides et livraison de service fiable pour résoudre vos problèmes informatiques rapidement."
          }
        },
        meetOurTeam: "Rencontrez Notre Équipe",
        teamDescription: "Des professionnels expérimentés dédiés à vous fournir les meilleurs services informatiques",
        team: {
          alex: {
            name: "Alex Johnson",
            role: "Spécialiste Technique Principal",
            experience: "8+ années",
            description: "Expert en systèmes Windows, installation de logiciels et optimisation système."
          },
          sarah: {
            name: "Sarah Chen",
            role: "Spécialiste Saisie de Données",
            experience: "5+ années",
            description: "Se spécialise dans la saisie de données précise, la gestion de bases de données et le traitement de documents."
          },
          mike: {
            name: "Mike Rodriguez",
            role: "Gestionnaire de Support",
            experience: "6+ années",
            description: "Assure un service client exceptionnel et gère les opérations de support technique."
          }
        },
        whyChooseUs: "Pourquoi Choisir VirtualTech Pro ?",
        whatSetsUsApart: "Ce Qui Nous Distingue",
        whatSetsUsApartItems: {
          certified: "Professionnels techniques certifiés avec des années d'expérience",
          secure: "Connexions à distance 100% sécurisées avec chiffrement",
          transparent: "Tarification transparente sans frais cachés",
          support: "Support client 24/7 et garantie de satisfaction",
          fast: "Délais de livraison rapides et service fiable",
          comprehensive: "Gamme complète de services informatiques sous un même toit"
        },
        readyToExperience: "Prêt à Découvrir la Différence ?",
        readyToExperienceDescription: "Rejoignez des milliers de clients satisfaits qui font confiance à VirtualTech Pro pour leurs besoins de services informatiques. Commencez aujourd'hui et voyez pourquoi nous sommes le choix préféré pour les services informatiques à distance."
      },
      pricing: {
        title: "Tarification Simple et Transparente",
        description: "Choisissez le forfait qui correspond le mieux à vos besoins. Aucun frais caché, aucune surprise.",
        packages: {
          basic: {
            name: "Forfait de Base",
            description: "Parfait pour les besoins simples d'activation Windows",
            buttonText: "Choisir de Base",
            features: [
              "Activation Windows 10/11",
              "1 installation de logiciel",
              "Vérification système de base",
              "30 minutes de temps de service",
              "Support par e-mail"
            ]
          },
          advanced: {
            name: "Forfait Avancé",
            description: "Configuration complète avec installations multiples",
            buttonText: "Choisir Avancé",
            features: [
              "Activation Windows incluse",
              "Jusqu'à 5 installations de logiciels",
              "Mises à jour des pilotes",
              "Optimisation système",
              "2 heures de temps de service",
              "Support prioritaire",
              "Suivi de 30 jours"
            ]
          },
          premium: {
            name: "Forfait Premium",
            description: "Configuration informatique complète et support continu",
            buttonText: "Choisir Premium",
            features: [
              "Tout dans Avancé",
              "Installations de logiciels illimitées",
              "Configuration suite de sécurité",
              "Configuration sauvegarde des données",
              "Optimisation des performances",
              "4 heures de temps de service",
              "Support chat 24/7",
              "Garantie 90 jours"
            ]
          }
        },
        additionalServices: "Services Supplémentaires",
        additionalServicesDescription: "Besoin de quelque chose de spécifique ? Nous offrons des services individuels à des tarifs compétitifs.",
        services: {
          dataEntry: "Saisie de Données",
          dataEntryDescription: "Services de saisie de données professionnels",
          technicalSupport: "Support Technique",
          technicalSupportDescription: "Support technique ponctuel",
          virusRemoval: "Suppression de Virus",
          virusRemovalDescription: "Suppression complète de logiciels malveillants",
          systemRecovery: "Récupération Système",
          systemRecoveryDescription: "Récupération de données et restauration système",
          customInstallation: "Installation Personnalisée",
          customInstallationDescription: "Par installation de logiciel",
          trainingSession: "Session de Formation",
          trainingSessionDescription: "Formation informatique personnelle"
        },
        securePayment: "Options de Paiement Sécurisées",
        securePaymentDescription: "Nous acceptons toutes les principales méthodes de paiement pour votre commodité",
        paymentMethods: {
          creditCards: "Cartes de Crédit",
          bankTransfer: "Virement Bancaire",
          paypal: "PayPal",
          crypto: "Crypto"
        },
        secureProcessing: "Tous les paiements sont traités de manière sécurisée avec un chiffrement SSL 256-bit",
        satisfactionGuarantee: "Garantie de Satisfaction à 100%",
        satisfactionGuaranteeDescription: "Pas satisfait de notre service ? Nous rembourserons votre paiement ou referons le travail sans coût supplémentaire."
      },
      support: {
        needImmediateHelp: "Besoin d'Aide Immédiate ?"
      },
      services: {
        title: "Services Informatiques Professionnels",
        description: "Services informatiques à distance experts livrés avec précision et soin. Choisissez parmi notre gamme complète de solutions professionnelles.",
        windowsActivation: "Activation Windows",
        windowsActivationDesc: "Activation Windows professionnelle pour toutes les versions, y compris Windows 10 et 11. Licences authentiques garanties.",
        softwareInstallation: "Installation de Logiciels",
        softwareInstallationDesc: "Installation et configuration expertes d'applications logicielles, de pilotes et d'utilitaires système.",
        dataEntry: "Services de Saisie de Données",
        dataEntryDesc: "Saisie de données précise et efficace pour les entreprises et les particuliers. Livraison rapide garantie.",
        systemSetup: "Configuration et Optimisation Système",
        systemSetupDesc: "Configuration complète de l'ordinateur, optimisation et réglage des performances pour une efficacité maximale.",
        technicalSupport: "Support Technique",
        technicalSupportDesc: "Support technique complet pour divers problèmes informatiques et dépannage.",
        security: "Sécurité et Maintenance",
        securityDesc: "Configuration de sécurité informatique, suppression de logiciels malveillants et services de maintenance réguliers.",
        webDevelopment: "Développement Web",
        webDevelopmentDesc: "Services de développement web professionnels incluant sites web, applications web et solutions e-commerce.",
        logoDesigning: "Conception de Logo",
        logoDesigningDesc: "Services de conception de logo créatifs pour établir l'identité de votre marque avec des graphiques professionnels.",
        gameInstallation: "Installation de Jeux",
        gameInstallationDesc: "Services d'installation et de configuration de jeux professionnels pour les passionnés de jeux PC.",
        getQuote: "Obtenir un Devis",
        contactUs: "Contactez-nous",
        howItWorks: "Comment Ça Marche",
        howItWorksDesc: "Processus simple, sécurisé et efficace pour résoudre rapidement vos problèmes informatiques",
        contactUsStep: "Contactez-nous",
        contactUsStepDesc: "Contactez-nous via notre formulaire de contact ou WhatsApp avec vos exigences",
        getQuoteStep: "Obtenir un Devis",
        getQuoteStepDesc: "Recevez un devis détaillé et un calendrier pour vos besoins spécifiques",
        secureConnection: "Connexion Sécurisée",
        secureConnectionDesc: "Nous établissons une connexion à distance sécurisée à votre ordinateur",
        serviceDelivery: "Livraison de Service",
        serviceDeliveryDesc: "Réalisation experte de votre service demandé avec une transparence totale",
        readyToFix: "Prêt à Faire Réparer Votre Ordinateur ?",
        readyToFixDesc: "Ne laissez pas les problèmes informatiques vous ralentir. Obtenez de l'aide professionnelle aujourd'hui.",
        getFreeQuote: "Obtenir un Devis Gratuit",
        viewPricing: "Voir les Tarifs"
      },
      contact: {
        title: "Entrer en Contact",
        description: "Prêt à résoudre vos problèmes informatiques ? Contactez-nous aujourd'hui pour un devis gratuit et un service rapide et professionnel.",
        contactMethods: "Méthodes de Contact",
        businessHours: "Heures d'Ouverture",
        serviceArea: "Zone de Service",
        needHelp: "Besoin d'Aide Immédiate ?",
        needHelpDesc: "Consultez ces questions courantes ou contactez-nous directement",
        sendMessage: "Envoyez-nous un Message",
        sendMessageDesc: "Remplissez le formulaire ci-dessous et nous vous répondrons dans les 2 heures pendant les heures d'ouverture.",
        emailUs: "Envoyez-nous un Email",
        callUs: "Appelez-nous",
        whatsapp: "WhatsApp",
        sendEmail: "Envoyer un Email",
        callNow: "Appeler Maintenant",
        openWhatsApp: "Ouvrir WhatsApp",
        chatInstantly: "Discutez avec nous instantanément",
        serviceAreaDesc: "Nous fournissons des services informatiques à distance dans le monde entier. Peu importe où vous êtes, nous pouvons vous aider !",
        emergencySupport: "Support d'urgence : Disponible 24h/24, 7j/7 pour les problèmes urgents (des frais supplémentaires peuvent s'appliquer)"
      },
      common: {
        learnMore: "En Savoir Plus",
        getStarted: "Commencer",
        readMore: "Lire Plus",
        submit: "Soumettre",
        close: "Fermer",
        loading: "Chargement...",
        error: "Erreur",
        success: "Succès",
        mostPopular: "Le Plus Populaire"
      },
      footer: {
        brandDescription: "Services informatiques virtuels professionnels pour tous vos besoins technologiques. Rapides, fiables et sécurisés.",
        quickLinks: "Liens Rapides",
        ourServices: "Nos Services",
        pricing: "Tarification",
        aboutUs: "À Propos",
        contact: "Contact",
        services: "Services",
        windowsActivation: "Activation Windows",
        softwareInstallation: "Installation de Logiciels",
        dataEntry: "Saisie de Données",
        systemSetup: "Configuration Système",
        technicalSupport: "Support Technique",
        contactInfo: "Informations de Contact",
        availableWorldwide: "Disponible dans le Monde Entier",
        copyright: "© 2024 VirtualTech Pro. Tous droits réservés."
      },
      search: {
        placeholder: "Rechercher des services...",
        button: "Rechercher"
      },
      faq: {
        title: "Questions Fréquemment Posées",
        description: "Obtenez des réponses aux questions courantes sur nos services",
        questions: {
          remoteAccess: "Comment accédez-vous à mon ordinateur à distance ?",
          dataSafety: "Mes données sont-elles sécurisées pendant le processus ?",
          serviceTime: "Combien de temps durent généralement les services ?",
          satisfaction: "Et si je ne suis pas satisfait du service ?"
        },
        answers: {
          remoteAccess: "Nous utilisons des logiciels de bureau à distance sécurisés et cryptés comme TeamViewer ou AnyDesk. Vous gardez le contrôle total et pouvez vous déconnecter à tout moment.",
          dataSafety: "Absolument. Nous suivons des protocoles de sécurité stricts et n'accédons jamais à vos données personnelles ni ne les stockons. Toutes les connexions sont cryptées de bout en bout.",
          serviceTime: "La plupart des services sont terminés en 30 minutes à 2 heures, selon la complexité. Nous fournissons des estimations de temps à l'avance.",
          satisfaction: "Nous offrons une garantie de satisfaction à 100%. Si vous n'êtes pas satisfait, nous rembourserons votre paiement ou referons le travail sans frais supplémentaires."
        }
      }
    }
  }
};

// Custom language detector with IP-based detection
const customLanguageDetector = {
  name: 'customDetector',
  lookup: async () => {
    try {
      // Try to get user's country from IP
      const response = await fetch('https://ipapi.co/json/');
      const data = await response.json();
      const country = data.country_code?.toLowerCase();
      
      // Map countries to languages
      const countryToLanguage: { [key: string]: string } = {
        'sa': 'ar', // Saudi Arabia
        'ae': 'ar', // UAE
        'eg': 'ar', // Egypt
        'ma': 'ar', // Morocco
        'tn': 'ar', // Tunisia
        'dz': 'ar', // Algeria
        'jo': 'ar', // Jordan
        'lb': 'ar', // Lebanon
        'sy': 'ar', // Syria
        'iq': 'ar', // Iraq
        'kw': 'ar', // Kuwait
        'qa': 'ar', // Qatar
        'bh': 'ar', // Bahrain
        'om': 'ar', // Oman
        'ye': 'ar', // Yemen
        'fr': 'fr', // France
        'be': 'fr', // Belgium (has French speakers)
        'ch': 'fr', // Switzerland (has French speakers)
        'ca': 'fr', // Canada (has French speakers)
        'sn': 'fr', // Senegal
        'ci': 'fr', // Ivory Coast
        'ml': 'fr', // Mali
        'bf': 'fr', // Burkina Faso
        'ne': 'fr', // Niger
        'td': 'fr', // Chad
        'mg': 'fr', // Madagascar
      };
      
      return countryToLanguage[country] || 'en';
    } catch (error) {
      console.log('IP detection failed, using browser language');
      return navigator.language.split('-')[0] || 'en';
    }
  },
  cacheUserLanguage: () => {
    // Don't cache since we want to detect on each visit
  }
};

i18n
  .use({
    type: 'languageDetector',
    async: true,
    init: () => {},
    detect: customLanguageDetector.lookup,
    cacheUserLanguage: customLanguageDetector.cacheUserLanguage
  })
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    debug: false,
    interpolation: {
      escapeValue: false
    },
    detection: {
      order: ['customDetector', 'navigator', 'htmlTag'],
      caches: []
    }
  });

export default i18n;