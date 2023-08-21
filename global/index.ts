export enum Locales {
  en = 'en',
  tr = 'tr',
}

export interface DynamicPageContent {
  intro: {
    title: string
    desc: string
    small: string
    media: {
      type: 'video' | 'image'
      path?: string
    }
  }
  detail: {
    d1: {
      title: string
      desc: string
      media: {
        path: string
      }
    }
    d2: {
      desc: string
      media: {
        path: string
      }
    }
  }
  nextPage: {
    title: string
    text: { t1: string; t2: string }
    url: string
  }
}

export enum MainRoute {
  features = 'features',
  services = 'services',
  resources = 'resources',
}

export enum SubRoute {
  employeeDatabase = 'employeeDatabase',
  employeeCenterAndHrPortal = 'employeeCenterAndHrPortal',
  reportingAndHrAnalytics = 'reportingAndHrAnalytics',
  workflowsAndForms = 'workflowsAndForms',
  feedbackManagement = 'feedbackManagement',
  orientationAndLearningCenter = 'orientationAndLearningCenter',
  examAndSurveys = 'examAndSurveys',
  gamificationsAndAppreciations = 'gamificationsAndAppreciations',
  recruitmentCenter = 'recruitmentCenter',
  assessmentAndOnboarding = 'assessmentAndOnboarding',
  compensationAndBenefits = 'compensationAndBenefits',
  okrAndPerformanceManagement = 'okrAndPerformanceManagement',
  executiveSearchAndRecruitment = 'executiveSearchAndRecruitment',
  temporaryStaffingAndOutsourcing = 'temporaryStaffingAndOutsourcing',
  itRecruitment = 'itRecruitment',
  payroll = 'payroll',
  massRecruitmentSolutions = 'massRecruitmentSolutions',
  recruitmentProcessOutsourcing = 'recruitmentProcessOutsourcing',
  assessmentAndExam = 'assessmentAndExam',
  outplacementAndCareerCoaching = 'outplacementAndCareerCoaching',
  hrCoachingAndTraining = 'hrCoachingAndTraining',
  hrMapping = 'hrMapping',
  organisationalDueDiligence = 'organisationalDueDiligence',
  managementAuditAndBenchmarking = 'managementAuditAndBenchmarking',
  getAnOffer = 'getAnOffer',
  aboutLayers = 'aboutLayers',
  contact = 'contact',
}

export type Children = {
  [key in SubRoute]?: {
    type: MainRoute
    ui: string
    path: string
    desc?: string
  }
}

export type Route = {
  type: MainRoute
  ui: string
  path: string
  children: Children
}

export type Routes = {
  [key in Locales]: { [key in MainRoute]: Route }
}

export const routes: Routes = {
  en: {
    features: {
      type: MainRoute.features,
      ui: 'Features',
      path: 'features',
      children: {
        employeeDatabase: {
          ui: 'Employee Database',
          path: 'employee-database',
          desc: 'Streamline organizational chart, files, docs, and personal info management with ease.',
          type: MainRoute.features,
        },
        employeeCenterAndHrPortal: {
          ui: 'Employee Center / HR Portal',
          path: 'employee-center-and-hr-portal',
          desc: 'Simplify employee needs with a centralized web/mobile center for leave, expenses, and more.',
          type: MainRoute.features,
        },
        reportingAndHrAnalytics: {
          ui: 'Reporting & HR Analytics',
          path: 'reporting-and-hr-analytics',
          desc: 'Effortlessly track your workforce with 50+ reports and AI-powered analytics.',
          type: MainRoute.features,
        },
        workflowsAndForms: {
          ui: 'Workflows & Forms',
          path: 'workflows-and-forms',
          desc: 'Manage 10+ processes and tasks: personal requests, leave, expenses, overtime, travel, and purchases.',
          type: MainRoute.features,
        },
        feedbackManagement: {
          ui: 'Feedback Management',
          path: 'feedback-management',
          desc: 'Collect and report feedback from your employees.',
          type: MainRoute.features,
        },
        orientationAndLearningCenter: {
          ui: 'Orientation & Learning Center',
          path: 'orientation-and-learning-center',
          desc: 'Plan orientation sessions, presentations, and provide documents/videos for new and existing employees.',
          type: MainRoute.features,
        },
        examAndSurveys: {
          ui: 'Exam & Surveys',
          path: 'exam-and-surveys',
          desc: 'Evaluate through quizzes and surveys using 100+ predefined tests and templates.',
          type: MainRoute.features,
        },
        gamificationsAndAppreciations: {
          ui: 'Gamifications & Appreciations',
          path: 'gamifications-and-appreciations',
          desc: 'Drive motivation and evaluations by defining gamification scenarios linked to your business processes.',
          type: MainRoute.features,
        },
        recruitmentCenter: {
          ui: 'Recruitment Center',
          path: 'recruitment-center',
          desc: 'Manage open positions, job postings, candidates, and interviews with an ATS system and generate reports.',
          type: MainRoute.features,
        },
        assessmentAndOnboarding: {
          ui: 'Assessment & Onboarding',
          path: 'assessment-and-onboarding',
          desc: 'Manage documents and paperwork effortlessly. Convert candidates to employees with a single click.',
          type: MainRoute.features,
        },
        compensationAndBenefits: {
          ui: 'Compensation & Benefits',
          path: 'compensation-and-benefits',
          desc: 'Effortlessly plan, maintain, and report on payroll systems and protections.',
          type: MainRoute.features,
        },
        okrAndPerformanceManagement: {
          ui: 'OKR & Performance Management',
          path: 'okr-and-performance-management',
          desc: 'Use KPIs or OKRs for performance management and reporting.',
          type: MainRoute.features,
        },
      },
    },
    services: {
      type: MainRoute.services,
      ui: 'Services',
      path: 'services',
      children: {
        executiveSearchAndRecruitment: {
          ui: 'Executive Search & Recruitment',
          path: 'executive-search-and-recruitment',
          desc: 'Streamlined service for finding top managers and professionals.',
          type: MainRoute.services,
        },
        temporaryStaffingAndOutsourcing: {
          ui: 'Temporary Staffing | Outsourcing',
          path: 'temporary-staffing-and-outsourcing',
          desc: 'Flexible office solutions with recruitment and payroll management.',
          type: MainRoute.services,
        },
        itRecruitment: {
          ui: 'IT Recruitment',
          path: 'it-recruitment',
          desc: 'Tech-focused experts for tailored candidate selection and recruitment.',
          type: MainRoute.services,
        },
        payroll: {
          ui: 'Payroll',
          path: 'payroll',
          desc: 'Accurate and timely payroll and personal affairs management for your financial benefit.',
          type: MainRoute.services,
        },
        massRecruitmentSolutions: {
          ui: 'Mass Recruitment Solutions',
          path: 'mass-recruitment-solutions',
          desc: 'Efficient end-to-end recruitment process for multiple roles simultaneously.',
          type: MainRoute.services,
        },
        recruitmentProcessOutsourcing: {
          ui: 'Recruitment Process Outsourcing',
          path: 'recruitment-process-outsourcing',
          desc: 'Outsource your recruitment processes.',
          type: MainRoute.services,
        },
        assessmentAndExam: {
          ui: 'Assessment & Exam',
          path: 'assessment-and-exam',
          desc: 'Comprehensive reporting on recruitment, promotion, and loss evaluations.',
          type: MainRoute.services,
        },
        outplacementAndCareerCoaching: {
          ui: 'Outplacement & Career Coaching',
          path: 'outplacement-and-career-coaching',
          desc: 'Need-based relocation and career coaching for employees.',
          type: MainRoute.services,
        },
        hrCoachingAndTraining: {
          ui: 'HR Coaching & Training',
          path: 'hr-coaching-and-training',
          desc: 'Effective coaching and training for improved management skills.',
          type: MainRoute.services,
        },
        hrMapping: {
          ui: 'HR Mapping',
          path: 'hr-mapping',
          desc: 'Data analysis and reporting on job-related skills, experience, and education.',
          type: MainRoute.services,
        },
        organisationalDueDiligence: {
          ui: 'Organisational Due Diligence',
          path: 'organisational-due-diligence',
          desc: 'Analysis of HR policy, management requirements, and workforce dynamics.',
          type: MainRoute.services,
        },
        managementAuditAndBenchmarking: {
          ui: 'Management Audit & Benchmarking',
          path: 'management-audit-and-benchmarking',
          desc: 'Comprehensive analysis and benchmarking of HR management and workforce.',
          type: MainRoute.services,
        },
      },
    },
    resources: {
      type: MainRoute.resources,
      ui: 'Resources',
      path: '',
      children: {
        aboutLayers: {
          ui: 'About Layers',
          path: 'about',
          type: MainRoute.resources,
        },
        getAnOffer: {
          ui: 'Get an Offer',
          path: 'get-an-offer',
          type: MainRoute.resources,
        },
        contact: {
          ui: 'Contact',
          path: 'contact',
          type: MainRoute.resources,
        },
      },
    },
  },
  tr: {
    features: {
      type: MainRoute.features,
      ui: 'Özellikler',
      path: 'features',
      children: {
        employeeDatabase: {
          ui: 'Çalışan Veritabanı',
          path: 'employee-database',
          desc: 'Kolaylıkla kurumsal yapı şemasını, dosyaları, belgeleri ve kişisel bilgi yönetimini optimize edin.',
          type: MainRoute.features,
        },
        employeeCenterAndHrPortal: {
          ui: 'Çalışan Merkezi / İK Portalı',
          path: 'employee-center-and-hr-portal',
          desc: 'İzinler, masraflar ve daha fazlası için merkezi bir web/mobil merkezi ile çalışan ihtiyaçlarını basitleştirin.',
          type: MainRoute.features,
        },
        reportingAndHrAnalytics: {
          ui: 'Raporlama ve İK Analitiği',
          path: 'reporting-and-hr-analytics',
          desc: "50'den fazla rapor ve yapay zeka destekli analizlerle iş gücünüzü zahmetsizce takip edin.",
          type: MainRoute.features,
        },
        workflowsAndForms: {
          ui: 'İş akışları ve Formlar',
          path: 'workflows-and-forms',
          desc: "10'dan fazla süreci ve görevi yönetin: kişisel talepler, izin, masraflar, fazla mesai, seyahat ve satın alımlar.",
          type: MainRoute.features,
        },
        feedbackManagement: {
          ui: 'Geri Bildirim Yönetimi',
          path: 'feedback-management',
          desc: 'Çalışanlardan geri bildirim toplayın ve raporlayın.',
          type: MainRoute.features,
        },
        orientationAndLearningCenter: {
          ui: 'Oryantasyon ve Öğrenme Merkezi',
          path: 'orientation-and-learning-center',
          desc: 'Yeni ve mevcut çalışanlar için yönlendirme oturumları, sunumlar planlayın ve belgeler/videolar sağlayın.',
          type: MainRoute.features,
        },
        examAndSurveys: {
          ui: 'Sınav & Anketler',
          path: 'exam-and-surveys',
          desc: "100+'dan fazla önceden tanımlanmış test ve şablon kullanarak sınavlar ve anketlerle değerlendirme yapın.",
          type: MainRoute.features,
        },
        gamificationsAndAppreciations: {
          ui: 'Oyunlaştırmalar & Takdirler',
          path: 'gamifications-and-appreciations',
          desc: 'İş süreçlerinizle bağlantılı oyunlaştırma senaryolarını tanımlayarak motivasyonu ve değerlendirmeleri artırın.',
          type: MainRoute.features,
        },
        recruitmentCenter: {
          ui: 'İşe Alım Merkezi',
          path: 'recruitment-center',
          desc: 'Açık pozisyonları, iş ilanlarını, adayları ve görüşmeleri ATS sistemi ile yönetin ve raporlar oluşturun.',
          type: MainRoute.features,
        },
        assessmentAndOnboarding: {
          ui: 'Değerlendirme & İşe Alım Süreci',
          path: 'assessment-and-onboarding',
          desc: 'Belgeleri ve evrakları kolayca yönetin. Adayları tek tıklamayla çalışanlara dönüştürün.',
          type: MainRoute.features,
        },
        compensationAndBenefits: {
          ui: 'Maaş & Yan Haklar',
          path: 'compensation-and-benefits',
          desc: 'Maaş sistemlerini ve hakları kolayca planlayın, sürdürün ve raporlayın.',
          type: MainRoute.features,
        },
        okrAndPerformanceManagement: {
          ui: 'Hedef & Performans Yönetimi',
          path: 'okr-and-performance-management',
          desc: "Performans yönetimi ve raporlama için KPI'lar veya Hedef ve Sonuç Anahtarları'nı (OKR) kullanın.",
          type: MainRoute.features,
        },
      },
    },
    services: {
      type: MainRoute.services,
      ui: 'Hizmetler',
      path: 'services',
      children: {
        executiveSearchAndRecruitment: {
          ui: 'Üst Düzey Yönetici Arama ve İşe Alım',
          path: 'executive-search-and-recruitment',
          desc: 'En üst düzey yönetici ve profesyonelleri bulma için optimize edilmiş hizmet.',
          type: MainRoute.services,
        },
        temporaryStaffingAndOutsourcing: {
          ui: 'Geçici Personel Temini | Dış Kaynak Kullanımı',
          path: 'temporary-staffing-and-outsourcing',
          desc: 'İşe alım ve maaş yönetimi ile esnek ofis çözümleri.',
          type: MainRoute.services,
        },
        itRecruitment: {
          ui: 'IT İşe Alımı',
          path: 'it-recruitment',
          desc: 'Özelleştirilmiş aday seçimi ve işe alım için teknoloji odaklı uzmanlar.',
          type: MainRoute.services,
        },
        payroll: {
          ui: 'Maaş Hesaplamaları',
          path: 'payroll',
          desc: 'Finansal faydanız için doğru ve zamanında maaş ve kişisel işler yönetimi.',
          type: MainRoute.services,
        },
        massRecruitmentSolutions: {
          ui: 'Toplu İşe Alım Çözümleri',
          path: 'mass-recruitment-solutions',
          desc: 'Aynı anda birden fazla rol için verimli işe alım süreci.',
          type: MainRoute.services,
        },
        recruitmentProcessOutsourcing: {
          ui: 'İşe Alım Süreç Dış Kaynak Kullanımı',
          path: 'recruitment-process-outsourcing',
          desc: 'İşe alım süreçlerinizi dış kaynak kullanımı ile optimize edin.',
          type: MainRoute.services,
        },
        assessmentAndExam: {
          ui: 'Değerlendirme & Sınav',
          path: 'assessment-and-exam',
          desc: 'İşe alım, terfi ve kayıp değerlendirmeleri için kapsamlı raporlama.',
          type: MainRoute.services,
        },
        outplacementAndCareerCoaching: {
          ui: 'Yeniden İşe Yerleştirme ve Kariyer Koçluğu',
          path: 'outplacement-and-career-coaching',
          desc: 'Çalışanlar için ihtiyaca yönelik yer değiştirme ve kariyer koçluğu.',
          type: MainRoute.services,
        },
        hrCoachingAndTraining: {
          ui: 'İK Koçluğu & Eğitim',
          path: 'hr-coaching-and-training',
          desc: 'Geliştirilmiş yönetim becerileri için etkili koçluk ve eğitim.',
          type: MainRoute.services,
        },
        hrMapping: {
          ui: 'İK Haritalama',
          path: 'hr-mapping',
          desc: 'İşle ilgili beceriler, deneyim ve eğitim konularında veri analizi ve raporlama.',
          type: MainRoute.services,
        },
        organisationalDueDiligence: {
          ui: 'Kurumsal İnceleme',
          path: 'organisational-due-diligence',
          desc: 'İK politikaları, yönetim gereksinimleri ve iş gücü dinamiklerinin analizi.',
          type: MainRoute.services,
        },
        managementAuditAndBenchmarking: {
          ui: 'Yönetim Denetimi & Karşılaştırmalı Analiz',
          path: 'management-audit-and-benchmarking',
          desc: 'İK yönetimi ve iş gücünün kapsamlı analizi ve karşılaştırmalı analizi.',
          type: MainRoute.services,
        },
      },
    },
    resources: {
      type: MainRoute.resources,
      ui: 'Kaynaklar',
      path: '',
      children: {
        aboutLayers: {
          ui: 'Layers',
          path: 'about',
          type: MainRoute.resources,
        },
        getAnOffer: {
          ui: 'Teklif Alın',
          path: 'get-an-offer',
          type: MainRoute.resources,
        },
        contact: {
          ui: 'İletişim',
          path: 'contact',
          type: MainRoute.resources,
        },
      },
    },
  },
}

export const features = {
  en: {
    employeeDatabase: {
      type: routes.en.features.children.employeeDatabase?.path,
      data: {
        intro: {
          title: 'Employee Database',
          desc: 'Access your personal database with just a click.',
          small:
            'Streamline organizational chart, files, docs, and personal info management with ease.',
          media: {
            type: 'video',
            path: 'https://player.vimeo.com/progressive_redirect/playback/850179933/rendition/1080p/file.mp4?loc=external&signature=7ae4a329db4cf971dee94284b7a870881014e21130f6afb10bd4fb52fc30fe8a',
          },
        },
        detail: {
          d1: {
            title: 'All your people data in one place.',
            desc: 'Easily manage, monitor and report your organizational chart, personnel personal information, documents and personal information.',
            media: {
              path: 'https://player.vimeo.com/progressive_redirect/playback/850058184/rendition/360p/file.mp4?loc=external&signature=e159fe66e5d3439cdfb9b89349978f841e87991b48cf540f2f0394c0a21205fe',
            },
          },
          d2: {
            desc: 'With Layers, you gain efficiency, accuracy, and a holistic perspective on your organization’s human capital.',
            media: {
              path: `/img/detail-${routes.en.features.children.employeeDatabase?.path}.png`,
            },
          },
        },
        nextPage: {
          title: 'Next Feature',
          text: {
            t1: 'Next Feature',
            t2: routes.en.features.children.employeeCenterAndHrPortal?.ui,
          },
          url: routes.en.features.children.employeeCenterAndHrPortal?.path,
        },
      },
    },
    employeeCenterAndHrPortal: {
      type: routes.en.features.children.employeeCenterAndHrPortal?.path,
      data: {
        intro: {
          title: 'Employee Center & HR Portal',
          desc: 'Simplify employee needs with a centralized web/mobile center for leave, expenses, and more.',
          small:
            'Simplify employee needs with a centralized web/mobile center for leave, expenses, and more.',
          media: {
            type: 'image',
          },
        },
        detail: {
          d1: {
            title: 'Effortless Expense Management.',
            desc: 'With just a few clicks, employees can submit leave requests, track their remaining leave balances, and manage their expenses seamlessly.',
            media: {
              path: 'https://player.vimeo.com/progressive_redirect/playback/850059769/rendition/360p/file.mp4?loc=external&signature=5652eb600e56f88064b7dbbb14892d6915ad4bb66ace3427255ccac0eebb8aea',
            },
          },
          d2: {
            desc: 'With Layers, you gain efficiency, accuracy, and a holistic perspective on your organization’s human capital.',
            media: {
              path: '/',
            },
          },
        },
        nextPage: {
          title: 'Next Feature',
          text: {
            t1: 'Next Feature',
            t2: routes.en.features.children.reportingAndHrAnalytics?.ui,
          },
          url: routes.en.features.children.reportingAndHrAnalytics?.path,
        },
      },
    },
    reportingAndHrAnalytics: {
      type: routes.en.features.children.reportingAndHrAnalytics?.path,
      data: {
        intro: {
          title: 'Reporting & HR Analytics',
          desc: 'Effortlessly track your workforce with 50+ reports and AI-powered analytics.',
          small:
            'Effortlessly track your workforce with 50+ reports and AI-powered analytics.',
          media: {
            type: 'image',
          },
        },
        detail: {
          d1: {
            title: 'Customizable Dashboards.',
            desc: 'Tailor your analytics experience with customizable dashboards. Layers App allows you to create personalized dashboards that display the metrics and visualizations most relevant to your organization.',
            media: {
              path: 'https://player.vimeo.com/progressive_redirect/playback/850059231/rendition/360p/file.mp4?loc=external&signature=2b4ac5b9e5eda8181ccc3407577f71e7af62c531c0b4d716fadfe0490f391862',
            },
          },
          d2: {
            desc: 'With Layers, you gain efficiency, accuracy, and a holistic perspective on your organization’s human capital.',
            media: {
              path: '/',
            },
          },
        },
        nextPage: {
          title: 'Next Feature',
          text: {
            t1: 'Next Feature',
            t2: routes.en.features.children.workflowsAndForms?.ui,
          },
          url: routes.en.features.children.workflowsAndForms?.path,
        },
      },
    },
    workflowsAndForms: {
      type: routes.en.features.children.workflowsAndForms?.path,
      data: {
        intro: {
          title: 'Workflows & Forms',
          desc: 'Effortlessly manage 10+ processes and tasks.',
          small:
            'Automate processes, eliminate manual tasks, and enhance collaboration, all in one comprehensive solution.',
          media: {
            type: 'video',
            path: 'https://player.vimeo.com/progressive_redirect/playback/850179396/rendition/720p/file.mp4?loc=external&signature=f94f86a7ec76c84b33f952b4985fa784d228658d9eaf10d8f88ebff0d3c88ead',
          },
        },
        detail: {
          d1: {
            title: 'Automated Workflows.',
            desc: 'Workflows & Forms feature allows automate workflows, reducing administrative burdens and improving efficiency.',
            media: {
              path: 'https://player.vimeo.com/progressive_redirect/playback/850061977/rendition/360p/file.mp4?loc=external&signature=db2b8ac8b77cc2eb672bf1dcb7118753d86256996254874a1ac48652a6144961',
            },
          },
          d2: {
            desc: 'With Layers, you gain efficiency, accuracy, and a holistic perspective on your organization’s human capital.',
            media: {
              path: '/',
            },
          },
        },
        nextPage: {
          title: 'Next Feature',
          text: {
            t1: 'Next Feature',
            t2: routes.en.features.children.feedbackManagement?.ui,
          },
          url: routes.en.features.children.feedbackManagement?.path,
        },
      },
    },
    feedbackManagement: {
      type: routes.en.features.children.feedbackManagement?.path,
      data: {
        intro: {
          title: 'Feedback Management',
          desc: 'Collect and report feedback from your employees.',
          small:
            'Feedbacks are the lifeblood of growth and innovation. That’s why we’ve developed a comprehensive feedback management feature within our app, designed to help businesses harness the power of customer insights and drive meaningful change.',
          media: {
            type: 'image',
          },
        },
        detail: {
          d1: {
            title: 'Centralize Feedback',
            desc: 'Layers allows you to gather feedback from multiple channels, including surveys, reviews, all in one place. This centralized approach ensures that no valuable feedback goes unnoticed or gets lost in the shuffle.',
            media: {
              path: 'https://player.vimeo.com/progressive_redirect/playback/850062282/rendition/360p/file.mp4?loc=external&signature=6c2d6e90dd62d67bf847443ac668c8fd180af5b4133e23e64cc690d4ded7f40f',
            },
          },
          d2: {
            desc: 'With Layers, you gain efficiency, accuracy, and a holistic perspective on your organization’s human capital.',
            media: {
              path: '/',
            },
          },
        },
        nextPage: {
          title: 'Next Feature',
          text: {
            t1: 'Next Feature',
            t2: routes.en.features.children.orientationAndLearningCenter?.ui,
          },
          url: routes.en.features.children.orientationAndLearningCenter?.path,
        },
      },
    },
    orientationAndLearningCenter: {
      type: routes.en.features.children.orientationAndLearningCenter?.path,
      data: {
        intro: {
          title: 'Orientation & Learning Center',
          desc: 'Plan orientation sessions, presentations, and provide documents/videos for new and existing employees.',
          small:
            'Facilitating seamless onboarding and continuous growth by organizing orientation sessions, engaging presentations, and delivering comprehensive documents and videos for both new and existing employees.',
          media: {
            type: 'image',
          },
        },
        detail: {
          d1: {
            title: 'Setting the Stage for Success',
            desc: 'Set the stage for success by providing new employees with a comprehensive introduction to our company’s values, culture, and expectations.',
            media: {
              path: 'https://player.vimeo.com/progressive_redirect/playback/850060596/rendition/360p/file.mp4?loc=external&signature=b6f5ea0e3ab421c560041615fe66d482d5d87ad4567d1e7a55ea5237e8df0021',
            },
          },
          d2: {
            desc: 'With Layers, you gain efficiency, accuracy, and a holistic perspective on your organization’s human capital.',
            media: {
              path: '/',
            },
          },
        },
        nextPage: {
          title: 'Next Feature',
          text: {
            t1: 'Next Feature',
            t2: routes.en.features.children.examAndSurveys?.ui,
          },
          url: routes.en.features.children.examAndSurveys?.path,
        },
      },
    },
    examAndSurveys: {
      type: routes.en.features.children.examAndSurveys?.path,
      data: {
        intro: {
          title: 'Exam & Surveys',
          desc: 'Evaluate through quizzes and surveys using 100+ predefined tests and templates.',
          small:
            'Empowers organizations to conduct comprehensive evaluations by utilizing quizzes, surveys, and an extensive library of over 100 predefined tests and templates.',
          media: {
            type: 'video',
            path: 'https://player.vimeo.com/progressive_redirect/playback/850180515/rendition/720p/file.mp4?loc=external&signature=b4349e949160d1cd132dc13af365ae71dca31eb8c60a8d33aa045dd906170f85',
          },
        },
        detail: {
          d1: {
            title: 'Unlocking Growth and Success',
            desc: 'With the “Exam & Surveys” feature, empowers individuals and organizations to efficiently assess knowledge, gather feedback, and unlock new opportunities for growth and success.',
            media: {
              path: 'https://player.vimeo.com/progressive_redirect/playback/850062625/rendition/360p/file.mp4?loc=external&signature=335e371f0d0ed9d087d1b68ad6d0a26925b79763a2b8fe08085d59d882741eb9',
            },
          },
          d2: {
            desc: 'With Layers, you gain efficiency, accuracy, and a holistic perspective on your organization’s human capital.',
            media: {
              path: '/',
            },
          },
        },
        nextPage: {
          title: 'Next Feature',
          text: {
            t1: 'Next Feature',
            t2: routes.en.features.children.gamificationsAndAppreciations?.ui,
          },
          url: routes.en.features.children.gamificationsAndAppreciations?.path,
        },
      },
    },
    gamificationsAndAppreciations: {
      type: routes.en.features.children.gamificationsAndAppreciations?.path,
      data: {
        intro: {
          title: 'Gamifications & Appreciations',
          desc: 'Collect points, win gifts with our gamification model.',
          small:
            'Drive motivation and evaluations by defining gamification scenarios linked to your business processes.',
          media: {
            type: 'image',
          },
        },
        detail: {
          d1: {
            title: 'Level up your workforce',
            desc: 'With Layer’s gamification & appreciation features, you can foster a more motivated, connected, and productive workforce. Say goodbye to mundane routines and hello to a vibrant workplace where achievements are celebrated, and rewards await.',
            media: {
              path: 'https://player.vimeo.com/progressive_redirect/playback/850063171/rendition/360p/file.mp4?loc=external&signature=b24ab8a1b4ec48ed11700cba67a20a4605b32b53d579061bc5010f20ae3bf307',
            },
          },
          d2: {
            desc: 'With Layers, you gain efficiency, accuracy, and a holistic perspective on your organization’s human capital.',
            media: {
              path: '/',
            },
          },
        },
        nextPage: {
          title: 'Next Feature',
          text: {
            t1: 'Next Feature',
            t2: routes.en.features.children.recruitmentCenter?.ui,
          },
          url: routes.en.features.children.recruitmentCenter?.path,
        },
      },
    },
    recruitmentCenter: {
      type: routes.en.features.children.recruitmentCenter?.path,
      data: {
        intro: {
          title: 'Recruitment Center',
          desc: 'Manage open positions, job postings, candidates, and interviews.',
          small:
            'It is an ATS system where you can manage and report your open positions, job postings, candidates, interviewers and interview processes.',
          media: {
            type: 'image',
          },
        },
        detail: {
          d1: {
            title: 'Powerful Candidate Search and Filtering',
            desc: 'With the Recruitment Center, you can search and filter candidates based on various criteria, such as skills, experience, education, and more.',
            media: {
              path: 'https://player.vimeo.com/progressive_redirect/playback/850060884/rendition/360p/file.mp4?loc=external&signature=edab1692285d9091fd47624a7e0b6cf1e88f388f378b54761d59516b0109e196',
            },
          },
          d2: {
            desc: 'With Layers, you gain efficiency, accuracy, and a holistic perspective on your organization’s human capital.',
            media: {
              path: '/',
            },
          },
        },
        nextPage: {
          title: 'Next Feature',
          text: {
            t1: 'Next Feature',
            t2: routes.en.features.children.assessmentAndOnboarding?.ui,
          },
          url: routes.en.features.children.assessmentAndOnboarding?.path,
        },
      },
    },
    assessmentAndOnboarding: {
      type: routes.en.features.children.assessmentAndOnboarding?.path,
      data: {
        intro: {
          title: 'Assessment & Onboarding',
          desc: 'Convert candidates to employees with a single click.',
          small:
            'It can manage your recruitment and on-the-job processes, documents and papers in these processes. You can turn your candidates into personnel with a single click.',
          media: {
            type: 'image',
          },
        },
        detail: {
          d1: {
            title: 'Automated Workflows',
            desc: 'Simplify your onboarding process with automated workflows. The Layers App enables you to automate repetitive tasks, such as sending welcome emails, assigning training modules, and generating necessary documentation.',
            media: {
              path: 'https://player.vimeo.com/progressive_redirect/playback/850058792/rendition/360p/file.mp4?loc=external&signature=8f3fe9e448b1c723ccaad8ac0c7e96bbddd07980dcb3d921709e3e3f6e1e6f03',
            },
          },
          d2: {
            desc: 'With Layers, you gain efficiency, accuracy, and a holistic perspective on your organization’s human capital.',
            media: {
              path: '/',
            },
          },
        },
        nextPage: {
          title: 'Next Feature',
          text: {
            t1: 'Next Feature',
            t2: routes.en.features.children.compensationAndBenefits?.ui,
          },
          url: routes.en.features.children.compensationAndBenefits?.path,
        },
      },
    },
    compensationAndBenefits: {
      type: routes.en.features.children.compensationAndBenefits?.path,
      data: {
        intro: {
          title: 'Compensation & Benefits',
          desc: 'Track and report the transactions in your account.',
          small:
            'Effortlessly plan, maintain, and report on payroll systems and protections.',
          media: {
            type: 'image',
          },
        },
        detail: {
          d1: {
            title: 'Improve Wellbeing',
            desc: 'Keep an eye on who opts out or reduces contributions to learn about your team’s needs.',
            media: {
              path: 'https://player.vimeo.com/progressive_redirect/playback/850061510/rendition/360p/file.mp4?loc=external&signature=b394000fc1547c9a198fa958fcca02b5808337228617cd621357525b4fecd8a2',
            },
          },
          d2: {
            desc: 'With Layers, you gain efficiency, accuracy, and a holistic perspective on your organization’s human capital.',
            media: {
              path: '/',
            },
          },
        },
        nextPage: {
          title: 'Next Feature',
          text: {
            t1: 'Next Feature',
            t2: routes.en.features.children.okrAndPerformanceManagement?.ui,
          },
          url: routes.en.features.children.okrAndPerformanceManagement?.path,
        },
      },
    },
    okrAndPerformanceManagement: {
      type: routes.en.features.children.okrAndPerformanceManagement?.path,
      data: {
        intro: {
          title: 'OKR & Performance Management',
          desc: 'Observe your performance process with Layers.',
          small: 'Use KPIs or OKRs for performance management and reporting.',
          media: {
            type: 'image',
          },
        },
        detail: {
          d1: {
            title: 'Analytics and insights',
            desc: 'Leverage the power of data to gain actionable insights into your organization’s performance.',
            media: {
              path: 'https://player.vimeo.com/progressive_redirect/playback/850058432/rendition/360p/file.mp4?loc=external&signature=e60ed0ca64220da01397084a178980d1c4a71bb6a2a7d842e01e3e5ad0539359',
            },
          },
          d2: {
            desc: 'With Layers, you gain efficiency, accuracy, and a holistic perspective on your organization’s human capital.',
            media: {
              path: '/',
            },
          },
        },
        nextPage: {
          title: 'Next Feature',
          text: {
            t1: 'Next Feature',
            t2: routes.en.features.children.employeeDatabase?.ui,
          },
          url: routes.en.features.children.employeeDatabase?.path,
        },
      },
    },
  },
  tr: {
    employeeDatabase: {
      type: routes.tr.features.children.employeeDatabase?.path,
      data: {
        intro: {
          title: 'Çalışan Veritabanı',
          desc: 'Sadece bir tıklamayla kişisel veritabanınıza erişin.',
          small:
            'Kurumsal şema, dosyalar, belgeler ve kişisel bilgi yönetimini kolayca optimize edin.',
          media: {
            type: 'video',
            path: 'https://player.vimeo.com/progressive_redirect/playback/850179933/rendition/1080p/file.mp4?loc=external&signature=7ae4a329db4cf971dee94284b7a870881014e21130f6afb10bd4fb52fc30fe8a',
          },
        },
        detail: {
          d1: {
            title: 'Tüm çalışan verileriniz bir arada.',
            desc: 'Kurumsal şemanızı, personel bilgilerini, belgeleri ve kişisel bilgileri kolayca yönetin, izleyin ve raporlayın.',
            media: {
              path: 'https://player.vimeo.com/progressive_redirect/playback/850058184/rendition/360p/file.mp4?loc=external&signature=e159fe66e5d3439cdfb9b89349978f841e87991b48cf540f2f0394c0a21205fe',
            },
          },
          d2: {
            desc: 'Layers ile verimlilik, doğruluk ve organizasyonunuzun insan sermayesi konusunda bütünsel bir bakış kazanırsınız.',
            media: {
              path: `/img/detail-${routes.tr.features.children.employeeDatabase?.path}.png`,
            },
          },
        },
        nextPage: {
          title: 'Sıradaki Özellik',
          text: {
            t1: 'Sıradaki Özellik',
            t2: routes.tr.features.children.employeeCenterAndHrPortal?.ui,
          },
          url: routes.tr.features.children.employeeCenterAndHrPortal?.path,
        },
      },
    },
    employeeCenterAndHrPortal: {
      type: routes.tr.features.children.employeeCenterAndHrPortal?.path,
      data: {
        intro: {
          title: 'Çalışan Merkezi / İK Portalı',
          desc: 'İzinler, masraflar ve daha fazlası için merkezi bir web/mobil merkezi ile çalışan ihtiyaçlarını basitleştirin.',
          small:
            'Çalışan ihtiyaçlarını izinler, masraflar ve daha fazlası için merkezi bir web/mobil merkezi ile kolaylaştırın.',
          media: {
            type: 'image',
          },
        },
        detail: {
          d1: {
            title: 'Zahmetsiz Masraf Yönetimi',
            desc: 'Sadece birkaç tıklama ile çalışanlar, izin taleplerini iletebilir, kalan izin bakiyelerini takip edebilir ve masraflarını sorunsuz bir şekilde yönetebilirler.',
            media: {
              path: 'https://player.vimeo.com/progressive_redirect/playback/850059769/rendition/360p/file.mp4?loc=external&signature=5652eb600e56f88064b7dbbb14892d6915ad4bb66ace3427255ccac0eebb8aea',
            },
          },
          d2: {
            desc: 'Layers ile verimlilik, doğruluk ve organizasyonunuzun insan sermayesi konusunda bütünsel bir bakış kazanırsınız.',
            media: {
              path: '/',
            },
          },
        },
        nextPage: {
          title: 'Sıradaki Özellik',
          text: {
            t1: 'Sıradaki Özellik',
            t2: routes.tr.features.children.reportingAndHrAnalytics?.ui,
          },
          url: routes.tr.features.children.reportingAndHrAnalytics?.path,
        },
      },
    },
    reportingAndHrAnalytics: {
      type: routes.tr.features.children.reportingAndHrAnalytics?.path,
      data: {
        intro: {
          title: 'Raporlama ve İK Analitiği',
          desc: "50'den fazla rapor ve yapay zeka destekli analizlerle iş gücünüzü zahmetsizce takip edin.",
          small:
            "50'den fazla rapor ve yapay zeka destekli analizlerle iş gücünüzü zahmetsizce takip edin.",
          media: {
            type: 'image',
          },
        },
        detail: {
          d1: {
            title: 'Kişiselleştirilebilir Paneller.',
            desc: 'Özelleştirilebilir paneller ile analiz deneyiminizi şekillendirin. Layers, kuruluşunuzla en ilgili metrikleri ve görselleştirmeleri görüntüleyen kişisel panolar oluşturmanıza olanak tanır.',
            media: {
              path: 'https://player.vimeo.com/progressive_redirect/playback/850059231/rendition/360p/file.mp4?loc=external&signature=2b4ac5b9e5eda8181ccc3407577f71e7af62c531c0b4d716fadfe0490f391862',
            },
          },
          d2: {
            desc: 'Layers ile verimlilik, doğruluk ve organizasyonunuzun insan sermayesi konusunda bütünsel bir bakış kazanırsınız.',
            media: {
              path: '/',
            },
          },
        },
        nextPage: {
          title: 'Sıradaki Özellik',
          text: {
            t1: 'Sıradaki Özellik',
            t2: routes.tr.features.children.workflowsAndForms?.ui,
          },
          url: routes.tr.features.children.workflowsAndForms?.path,
        },
      },
    },
    workflowsAndForms: {
      type: routes.tr.features.children.workflowsAndForms?.path,
      data: {
        intro: {
          title: 'İş akışları ve Formlar',
          desc: "10'dan fazla süreci ve görevi zahmetsizce yönetin.",
          small:
            'Otomatik olarak süreçleri yönlendirin, manuel görevleri ortadan kaldırın ve tüm bunları kapsamlı bir çözümde iş birliğini artırarak gerçekleştirin.',
          media: {
            type: 'video',
            path: 'https://player.vimeo.com/progressive_redirect/playback/850179396/rendition/720p/file.mp4?loc=external&signature=f94f86a7ec76c84b33f952b4985fa784d228658d9eaf10d8f88ebff0d3c88ead',
          },
        },
        detail: {
          d1: {
            title: 'Otomatik İş Akışları',
            desc: 'İş Akışları ve Formlar özelliği iş akışlarını otomatikleştirmenizi sağlar, bu da idari yükü azaltır ve verimliliği artırır.',
            media: {
              path: 'https://player.vimeo.com/progressive_redirect/playback/850061977/rendition/360p/file.mp4?loc=external&signature=db2b8ac8b77cc2eb672bf1dcb7118753d86256996254874a1ac48652a6144961',
            },
          },
          d2: {
            desc: 'Layers ile verimlilik, doğruluk ve organizasyonunuzun insan sermayesi konusunda bütünsel bir bakış kazanırsınız.',
            media: {
              path: '/',
            },
          },
        },
        nextPage: {
          title: 'Sıradaki Özellik',
          text: {
            t1: 'Sıradaki Özellik',
            t2: routes.tr.features.children.feedbackManagement?.ui,
          },
          url: routes.tr.features.children.feedbackManagement?.path,
        },
      },
    },
    feedbackManagement: {
      type: routes.tr.features.children.feedbackManagement?.path,
      data: {
        intro: {
          title: 'Geri Bildirim Yönetimi',
          desc: 'Çalışanlardan geri bildirim toplayın ve raporlayın.',
          small:
            'Geri bildirimler, büyüme ve inovasyonun hayati bileşenleridir. Bu nedenle, müşteri görüşlerinin gücünden faydalanmaya yardımcı olmak için uygulamamız içinde kapsamlı bir geri bildirim yönetimi özelliği geliştirdik ve anlamlı değişiklikleri tetiklemeyi amaçladık.',
          media: {
            type: 'image',
          },
        },
        detail: {
          d1: {
            title: 'Geri Bildirimi Merkezileştirin',
            desc: 'Layers, anketler, incelemeler gibi farklı kanallardan gelen geri bildirimleri tek bir yerde toplamanıza olanak tanır. Bu merkezi yaklaşım, değerli geri bildirimlerin gözden kaçmasını veya karışıklık içinde kaybolmasını engeller.',
            media: {
              path: 'https://player.vimeo.com/progressive_redirect/playback/850062282/rendition/360p/file.mp4?loc=external&signature=6c2d6e90dd62d67bf847443ac668c8fd180af5b4133e23e64cc690d4ded7f40f',
            },
          },
          d2: {
            desc: 'Layers ile verimlilik, doğruluk ve organizasyonunuzun insan sermayesi konusunda bütünsel bir bakış kazanırsınız.',
            media: {
              path: '/',
            },
          },
        },
        nextPage: {
          title: 'Sıradaki Özellik',
          text: {
            t1: 'Sıradaki Özellik',
            t2: routes.tr.features.children.orientationAndLearningCenter?.ui,
          },
          url: routes.tr.features.children.orientationAndLearningCenter?.path,
        },
      },
    },
    orientationAndLearningCenter: {
      type: routes.tr.features.children.orientationAndLearningCenter?.path,
      data: {
        intro: {
          title: 'Oryantasyon ve Öğrenme Merkezi',
          desc: 'Yeni ve mevcut çalışanlar için yönlendirme oturumları, sunumlar planlayın ve belgeler/videolar sağlayın.',
          small:
            'Yeni çalışanların ve mevcut çalışanların sorunsuz bir şekilde entegrasyonunu ve sürekli büyümelerini sağlamak için yönlendirme oturumları düzenleme, etkileşimli sunumlar yapma ve kapsamlı belgeler ile videolar sunma imkanı sağlamaktayız.',
          media: {
            type: 'image',
          },
        },
        detail: {
          d1: {
            title: 'Sahneyi Başarı İçin Hazırlayın',
            desc: 'Yeni çalışanlara şirket değerleri, kültürü ve beklentilerine kapsamlı bir şekilde tanıtarak başarı için sahneyi hazırlayın.',
            media: {
              path: 'https://player.vimeo.com/progressive_redirect/playback/850060596/rendition/360p/file.mp4?loc=external&signature=b6f5ea0e3ab421c560041615fe66d482d5d87ad4567d1e7a55ea5237e8df0021',
            },
          },
          d2: {
            desc: 'Layers ile verimlilik, doğruluk ve organizasyonunuzun insan sermayesi konusunda bütünsel bir bakış kazanırsınız.',
            media: {
              path: '/',
            },
          },
        },
        nextPage: {
          title: 'Sıradaki Özellik',
          text: {
            t1: 'Sıradaki Özellik',
            t2: routes.tr.features.children.examAndSurveys?.ui,
          },
          url: routes.tr.features.children.examAndSurveys?.path,
        },
      },
    },
    examAndSurveys: {
      type: routes.tr.features.children.examAndSurveys?.path,
      data: {
        intro: {
          title: 'Sınav & Anketler',
          desc: "100'den fazla önceden tanımlanmış test ve şablon kullanarak sınavlar ve anketlerle değerlendirme yapın.",
          small:
            "Organizasyonlara, sınavlar, anketler ve 100'den fazla önceden tanımlanmış test ve şablonun bulunduğu kapsamlı bir kütüphane kullanarak kapsamlı değerlendirmeler yapma imkanı sağlar.",
          media: {
            type: 'video',
            path: 'https://player.vimeo.com/progressive_redirect/playback/850180515/rendition/720p/file.mp4?loc=external&signature=b4349e949160d1cd132dc13af365ae71dca31eb8c60a8d33aa045dd906170f85',
          },
        },
        detail: {
          d1: {
            title: 'Büyümeyi ve Başarıyı Açığa Çıkarma',
            desc: '"Sınav ve Anketler" özelliği ile bireyleri ve organizasyonları bilgiyi etkili bir şekilde değerlendirmeye, geri bildirim toplamaya ve büyüme ve başarı için yeni fırsatları açığa çıkarmaya güçlendirir.',
            media: {
              path: 'https://player.vimeo.com/progressive_redirect/playback/850062625/rendition/360p/file.mp4?loc=external&signature=335e371f0d0ed9d087d1b68ad6d0a26925b79763a2b8fe08085d59d882741eb9',
            },
          },
          d2: {
            desc: 'Layers ile verimlilik, doğruluk ve organizasyonunuzun insan sermayesi konusunda bütünsel bir bakış kazanırsınız.',
            media: {
              path: '/',
            },
          },
        },
        nextPage: {
          title: 'Sıradaki Özellik',
          text: {
            t1: 'Sıradaki Özellik',
            t2: routes.tr.features.children.gamificationsAndAppreciations?.ui,
          },
          url: routes.tr.features.children.gamificationsAndAppreciations?.path,
        },
      },
    },
    gamificationsAndAppreciations: {
      type: routes.tr.features.children.gamificationsAndAppreciations?.path,
      data: {
        intro: {
          title: 'Oyunlaştırmalar & Takdirler',
          desc: 'Oyunlaştırma modellerimizle puan toplayın ve hediyeler kazanın.',
          small:
            'İş süreçlerinizle bağlantılı oyunlaştırma senaryolarını tanımlayarak motivasyonu ve değerlendirmeleri artırın.',
          media: {
            type: 'image',
          },
        },
        detail: {
          d1: {
            title: 'İş gücünüze seviye atlatın.',
            desc: "Layers'ın Oyunlaştırma ve Takdir özellikleriyle daha motive edilmiş, bağlı ve verimli bir çalışan grubu oluşturabilirsiniz. Sıradan rutinlere veda edin ve başarıların kutlandığı, ödüllerin beklediği canlı bir iş ortamına merhaba deyin.",
            media: {
              path: 'https://player.vimeo.com/progressive_redirect/playback/850063171/rendition/360p/file.mp4?loc=external&signature=b24ab8a1b4ec48ed11700cba67a20a4605b32b53d579061bc5010f20ae3bf307',
            },
          },
          d2: {
            desc: 'Layers ile verimlilik, doğruluk ve organizasyonunuzun insan sermayesi konusunda bütünsel bir bakış kazanırsınız.',
            media: {
              path: '/',
            },
          },
        },
        nextPage: {
          title: 'Sıradaki Özellik',
          text: {
            t1: 'Sıradaki Özellik',
            t2: routes.tr.features.children.recruitmentCenter?.ui,
          },
          url: routes.tr.features.children.recruitmentCenter?.path,
        },
      },
    },
    recruitmentCenter: {
      type: routes.tr.features.children.recruitmentCenter?.path,
      data: {
        intro: {
          title: 'İşe Alım Merkezi',
          desc: 'Açık pozisyonları, iş ilanlarını, adayları ve mülakatları yönetin.',
          small:
            "Layers'ın İşe Alım Yönetim Sistemi ile, açık pozisyonlarınızı, iş ilanlarınızı, adaylarınızı, işe alım uzmanlarınızı ve mülakat süreçlerinizi yönetebilirsiniz.",
          media: {
            type: 'image',
          },
        },
        detail: {
          d1: {
            title: 'Güçlü Aday Arama ve Filtreleme',
            desc: 'İşe Alım Merkezi ile yetenekler, deneyim, eğitim gibi çeşitli kriterlere göre adayları arayabilir ve filtreleyebilirsiniz.',
            media: {
              path: 'https://player.vimeo.com/progressive_redirect/playback/850060884/rendition/360p/file.mp4?loc=external&signature=edab1692285d9091fd47624a7e0b6cf1e88f388f378b54761d59516b0109e196',
            },
          },
          d2: {
            desc: 'Layers ile verimlilik, doğruluk ve organizasyonunuzun insan sermayesi konusunda bütünsel bir bakış kazanırsınız.',
            media: {
              path: '/',
            },
          },
        },
        nextPage: {
          title: 'Sıradaki Özellik',
          text: {
            t1: 'Sıradaki Özellik',
            t2: routes.tr.features.children.assessmentAndOnboarding?.ui,
          },
          url: routes.tr.features.children.assessmentAndOnboarding?.path,
        },
      },
    },
    assessmentAndOnboarding: {
      type: routes.tr.features.children.assessmentAndOnboarding?.path,
      data: {
        intro: {
          title: 'Değerlendirme & İşe Alım Süreci',
          desc: 'Belgeleri ve evrakları kolayca yönetin. Adayları tek tıklamayla çalışanlara dönüştürün.',
          small:
            'Bu süreçlerdeki işe alım ve iş başı süreçlerinizi, belgeleri ve evrakları yönetebilir. Adaylarınızı tek bir tıklama ile personel haline getirebilirsiniz.',
          media: {
            type: 'image',
          },
        },
        detail: {
          d1: {
            title: 'Otomatik İş Akışları',
            desc: 'Otomatik iş akışlarıyla entegrasyon sürecinizi basitleştirin. Layers, e-postaları gönderme, eğitim modülleri atama ve gerekli belgeleri oluşturma gibi tekrarlayan görevleri otomatikleştirmenizi sağlar.',
            media: {
              path: 'https://player.vimeo.com/progressive_redirect/playback/850058792/rendition/360p/file.mp4?loc=external&signature=8f3fe9e448b1c723ccaad8ac0c7e96bbddd07980dcb3d921709e3e3f6e1e6f03',
            },
          },
          d2: {
            desc: 'Layers ile verimlilik, doğruluk ve organizasyonunuzun insan sermayesi konusunda bütünsel bir bakış kazanırsınız.',
            media: {
              path: '/',
            },
          },
        },
        nextPage: {
          title: 'Sıradaki Özellik',
          text: {
            t1: 'Sıradaki Özellik',
            t2: routes.tr.features.children.compensationAndBenefits?.ui,
          },
          url: routes.tr.features.children.compensationAndBenefits?.path,
        },
      },
    },
    compensationAndBenefits: {
      type: routes.tr.features.children.compensationAndBenefits?.path,
      data: {
        intro: {
          title: 'Maaş & Yan Haklar',
          desc: 'Hesabınızdaki işlemleri izleyin ve raporlayın.',
          small:
            'Maaş sistemlerini ve hakları kolayca planlayın, sürdürün ve raporlayın.',
          media: {
            type: 'image',
          },
        },
        detail: {
          d1: {
            title: 'Standartları iyileştirin',
            desc: 'Bu özelliği kullanarak, organizasyonlar öz bakım, direnç ve iş-yaşam dengesi kültürünü geliştirebilirler, bu da iş tatmininin artmasına, stresin azalmasına ve daha fazla bağlılık gösteren bir çalışan grubuna yol açar.',
            media: {
              path: 'https://player.vimeo.com/progressive_redirect/playback/850061510/rendition/360p/file.mp4?loc=external&signature=b394000fc1547c9a198fa958fcca02b5808337228617cd621357525b4fecd8a2',
            },
          },
          d2: {
            desc: 'Layers ile verimlilik, doğruluk ve organizasyonunuzun insan sermayesi konusunda bütünsel bir bakış kazanırsınız.',
            media: {
              path: '/',
            },
          },
        },
        nextPage: {
          title: 'Sıradaki Özellik',
          text: {
            t1: 'Sıradaki Özellik',
            t2: routes.tr.features.children.okrAndPerformanceManagement?.ui,
          },
          url: routes.tr.features.children.okrAndPerformanceManagement?.path,
        },
      },
    },
    okrAndPerformanceManagement: {
      type: routes.tr.features.children.okrAndPerformanceManagement?.path,
      data: {
        intro: {
          title: 'Hedef & Performans Yönetimi',
          desc: 'Layers’ın Hedef ve Performans desteği ile performans sürecinizi gözlemleyin.',
          small:
            "Performans yönetimi ve raporlama için KPI'lar veya Hedef ve Sonuç Anahtarları'nı (OKR) kullanın.",
          media: {
            type: 'image',
          },
        },
        detail: {
          d1: {
            title: 'Analiz ve Öngörüler',
            desc: 'Verinin gücünden faydalanarak organizasyonunuzun performansına dair işlenebilir görüşler elde edin.',
            media: {
              path: 'https://player.vimeo.com/progressive_redirect/playback/850058432/rendition/360p/file.mp4?loc=external&signature=e60ed0ca64220da01397084a178980d1c4a71bb6a2a7d842e01e3e5ad0539359',
            },
          },
          d2: {
            desc: 'Layers ile verimlilik, doğruluk ve organizasyonunuzun insan sermayesi konusunda bütünsel bir bakış kazanırsınız.',
            media: {
              path: '/',
            },
          },
        },
        nextPage: {
          title: 'Sıradaki Özellik',
          text: {
            t1: 'Sıradaki Özellik',
            t2: routes.tr.features.children.employeeDatabase?.ui,
          },
          url: routes.tr.features.children.employeeDatabase?.path,
        },
      },
    },
  },
}

export const services = {
  en: {
    executiveSearchAndRecruitment: {
      type: routes.en.services.children.executiveSearchAndRecruitment?.path,
      data: {
        intro: {
          title: 'Executive Search & Recruitment',
          desc: 'Streamlined service for finding top managers and professionals.',
          small:
            'We provide end-to-end services for quickly and effectively finding, assessing and hiring top executives and professionals.',
          media: {
            type: 'video',
            path: 'https://player.vimeo.com/progressive_redirect/playback/850180986/rendition/720p/file.mp4?loc=external&signature=c9405f4dc204aa7d5ffe9681c403b4b545929b62b3f9869494c436b21719e7f5',
          },
        },
        detail: {
          d1: {
            title: 'All your people data in one place.',
            desc: 'Streamlined service for finding top managers and professionals.',
            media: {
              path: 'https://player.vimeo.com/progressive_redirect/playback/850063525/rendition/360p/file.mp4?loc=external&signature=874f1ad2b3b128f6323239302918f666a821caa9ff57cd6d0826ada780f3c425',
            },
          },
          d2: {
            desc: 'With Layers, you gain efficiency, accuracy, and a holistic perspective on your organization’s human capital.',
            media: {
              path: `/img/detail-${routes.en.services.children.executiveSearchAndRecruitment?.path}.png`,
            },
          },
        },
        nextPage: {
          title: 'Next Service',
          text: {
            t1: 'Next Service',
            t2: routes.en.services.children.temporaryStaffingAndOutsourcing?.ui,
          },
          url: routes.en.services.children.temporaryStaffingAndOutsourcing
            ?.path,
        },
      },
    },
    temporaryStaffingAndOutsourcing: {
      type: routes.en.services.children.temporaryStaffingAndOutsourcing?.path,
      data: {
        intro: {
          title: 'Temporary Staffing | Outsourcing',
          desc: 'Flexible office solutions with recruitment and payroll management.',
          small:
            'Flexible office solutions with recruitment and payroll management.',
          media: {
            type: 'image',
          },
        },
        detail: {
          d1: {
            title: 'All your people data in one place.',
            desc: 'From top-level legal executives to specialized attorneys and legal support staff, we have the experience and resources to deliver outstanding candidates that will help you build a dynamic and successful legal team.',
            media: {
              path: 'https://player.vimeo.com/progressive_redirect/playback/850063828/rendition/360p/file.mp4?loc=external&signature=1e72cca8cbebbbcd9799cbe598562b5093f44753582df7399928ddf6a4c41e83',
            },
          },
          d2: {
            desc: 'With Layers, you gain efficiency, accuracy, and a holistic perspective on your organization’s human capital.',
            media: {
              path: '/',
            },
          },
        },
        nextPage: {
          title: 'Next Service',
          text: {
            t1: 'Next Service',
            t2: routes.en.services.children.itRecruitment?.ui,
          },
          url: routes.en.services.children.itRecruitment?.path,
        },
      },
    },
    itRecruitment: {
      type: routes.en.services.children.itRecruitment?.path,
      data: {
        intro: {
          title: 'IT Recruitment',
          desc: 'Tech-focused experts for tailored candidate selection and recruitment.',
          small:
            'Tech-focused experts for tailored candidate selection and recruitment.',
          media: {
            type: 'image',
          },
        },
        detail: {
          d1: {
            title: 'All your people data in one place.',
            desc: 'With our expert staff dedicated to the technology sector, we find and measure the most suitable and common candidates for you and manage the recruitment process.',
            media: {
              path: 'https://player.vimeo.com/progressive_redirect/playback/850064877/rendition/360p/file.mp4?loc=external&signature=bd262d49dca6277e3ff4a11af32d0f9de2b663aaf25b01a7bdedd1a0efbf58cf',
            },
          },
          d2: {
            desc: 'With Layers, you gain efficiency, accuracy, and a holistic perspective on your organization’s human capital.',
            media: {
              path: '/',
            },
          },
        },
        nextPage: {
          title: 'Next Service',
          text: {
            t1: 'Next Service',
            t2: routes.en.services.children.payroll?.ui,
          },
          url: routes.en.services.children.payroll?.path,
        },
      },
    },
    payroll: {
      type: routes.en.services.children.payroll?.path,
      data: {
        intro: {
          title: 'Payroll',
          desc: 'Accurate and timely payroll and personal affairs management for your financial benefit.',
          small:
            'Accurate and timely payroll and personal affairs management for your financial benefit.',
          media: {
            type: 'image',
          },
        },
        detail: {
          d1: {
            title: 'All your people data in one place.',
            desc: 'Evaluate your payroll and all your personal affairs accurately and on time, so you can spend and benefit and save.',
            media: {
              path: 'https://player.vimeo.com/progressive_redirect/playback/850065305/rendition/360p/file.mp4?loc=external&signature=16cb108f826fd824f5942bc9938984c8df2c9e850e74ad4c0daefa39c96dc038',
            },
          },
          d2: {
            desc: 'With Layers, you gain efficiency, accuracy, and a holistic perspective on your organization’s human capital.',
            media: {
              path: '/',
            },
          },
        },
        nextPage: {
          title: 'Next Service',
          text: {
            t1: 'Next Service',
            t2: routes.en.services.children.massRecruitmentSolutions?.ui,
          },
          url: routes.en.services.children.massRecruitmentSolutions?.path,
        },
      },
    },
    massRecruitmentSolutions: {
      type: routes.en.services.children.massRecruitmentSolutions?.path,
      data: {
        intro: {
          title: 'Mass Recruitment Solutions',
          desc: 'Efficient end-to-end recruitment process for multiple roles simultaneously.',
          small:
            'Efficient end-to-end recruitment process for multiple roles simultaneously.',
          media: {
            type: 'video',
            path: 'https://player.vimeo.com/progressive_redirect/playback/850180986/rendition/720p/file.mp4?loc=external&signature=c9405f4dc204aa7d5ffe9681c403b4b545929b62b3f9869494c436b21719e7f5',
          },
        },
        detail: {
          d1: {
            title: 'All your people data in one place.',
            desc: 'Evaluate your payroll and all your personal affairs accurately and on time, so you can spend and benefit and save.',
            media: {
              path: 'https://player.vimeo.com/progressive_redirect/playback/850065653/rendition/360p/file.mp4?loc=external&signature=85607e5b308e1c0706412ef598cc7bf8aabb07b6ede60a84bd795e8618c5633a',
            },
          },
          d2: {
            desc: 'With Layers, you gain efficiency, accuracy, and a holistic perspective on your organization’s human capital.',
            media: {
              path: '/',
            },
          },
        },
        nextPage: {
          title: 'Next Service',
          text: {
            t1: 'Next Service',
            t2: routes.en.services.children.recruitmentProcessOutsourcing?.ui,
          },
          url: routes.en.services.children.recruitmentProcessOutsourcing?.path,
        },
      },
    },
    recruitmentProcessOutsourcing: {
      type: routes.en.services.children.recruitmentProcessOutsourcing?.path,
      data: {
        intro: {
          title: 'Recruitment Process Outsourcing',
          desc: 'Outsource your recruitment processes.',
          small:
            'Perform some or all of your recruitment processes such as candidate search, interview, selection and placement for you.',
          media: {
            type: 'image',
          },
        },
        detail: {
          d1: {
            title: 'All your people data in one place.',
            desc: 'Evaluate your payroll and all your personal affairs accurately and on time, so you can spend and benefit and save.',
            media: {
              path: 'https://player.vimeo.com/progressive_redirect/playback/850066247/rendition/360p/file.mp4?loc=external&signature=69ba10ea9b3f8dee577d9eae3965106421989c673c4c724764fe05c3f895ccd2',
            },
          },
          d2: {
            desc: 'With Layers, you gain efficiency, accuracy, and a holistic perspective on your organization’s human capital.',
            media: {
              path: '/',
            },
          },
        },
        nextPage: {
          title: 'Next Service',
          text: {
            t1: 'Next Service',
            t2: routes.en.services.children.assessmentAndExam?.ui,
          },
          url: routes.en.services.children.assessmentAndExam?.path,
        },
      },
    },
    assessmentAndExam: {
      type: routes.en.services.children.assessmentAndExam?.path,
      data: {
        intro: {
          title: 'Assessment & Exam',
          desc: 'Comprehensive reporting on recruitment, promotion, and loss evaluations.',
          small:
            'In your recruitment, promotion or loss, review your observations and benefit from the exams, we will report in the format you want.',
          media: {
            type: 'image',
          },
        },
        detail: {
          d1: {
            title: 'All your people data in one place',
            desc: 'Evaluate your payroll and all your personal affairs accurately and on time, so you can spend and benefit and save.',
            media: {
              path: 'https://player.vimeo.com/progressive_redirect/playback/850066552/rendition/360p/file.mp4?loc=external&signature=ed5c227825936020448c59346eb017c245459d73a4b3341b8451fcc7f18c91a3',
            },
          },
          d2: {
            desc: 'With Layers, you gain efficiency, accuracy, and a holistic perspective on your organization’s human capital.',
            media: {
              path: '/',
            },
          },
        },
        nextPage: {
          title: 'Next Service',
          text: {
            t1: 'Next Service',
            t2: routes.en.services.children.outplacementAndCareerCoaching?.ui,
          },
          url: routes.en.services.children.outplacementAndCareerCoaching?.path,
        },
      },
    },
    outplacementAndCareerCoaching: {
      type: routes.en.services.children.outplacementAndCareerCoaching?.path,
      data: {
        intro: {
          title: 'Outplacement & Career Coaching',
          desc: 'Need-based relocation and career coaching for employees.',
          small:
            'We offer your employees from the company of a professional to this need-based relocation and career coaching service.',
          media: {
            type: 'image',
          },
        },
        detail: {
          d1: {
            title: 'All your people data in one place.',
            desc: 'Evaluate your payroll and all your personal affairs accurately and on time, so you can spend and benefit and save.',
            media: {
              path: 'https://player.vimeo.com/progressive_redirect/playback/850067034/rendition/360p/file.mp4?loc=external&signature=a871341d745f150e064cd97be2495dc83be372f3c6cd592ce7348f2ca32a6342',
            },
          },
          d2: {
            desc: 'With Layers, you gain efficiency, accuracy, and a holistic perspective on your organization’s human capital.',
            media: {
              path: '/',
            },
          },
        },
        nextPage: {
          title: 'Next Service',
          text: {
            t1: 'Next Service',
            t2: routes.en.services.children.hrCoachingAndTraining?.ui,
          },
          url: routes.en.services.children.hrCoachingAndTraining?.path,
        },
      },
    },
    hrCoachingAndTraining: {
      type: routes.en.services.children.hrCoachingAndTraining?.path,
      data: {
        intro: {
          title: 'HR Coaching & Training',
          desc: 'Effective coaching and training for improved management skills.',
          small:
            'Leadership, communication, teamwork, performance, etc. We provide coaching and training that will enable you to manage issues more effectively.',
          media: {
            type: 'image',
          },
        },
        detail: {
          d1: {
            title: 'All your people data in one place.',
            desc: 'Evaluate your payroll and all your personal affairs accurately and on time, so you can spend and benefit and save.',
            media: {
              path: 'https://player.vimeo.com/progressive_redirect/playback/850067428/rendition/360p/file.mp4?loc=external&signature=c6c2805eb5e3ec706eb6b101d368e87ff8b0d89189b99ddb59f577a60ca912f9',
            },
          },
          d2: {
            desc: 'With Layers, you gain efficiency, accuracy, and a holistic perspective on your organization’s human capital.',
            media: {
              path: '/',
            },
          },
        },
        nextPage: {
          title: 'Next Service',
          text: {
            t1: 'Next Service',
            t2: routes.en.services.children.hrMapping?.ui,
          },
          url: routes.en.services.children.hrMapping?.path,
        },
      },
    },
    hrMapping: {
      type: routes.en.services.children.hrMapping?.path,
      data: {
        intro: {
          title: 'HR Mapping',
          desc: 'Data analysis and reporting on job-related skills, experience, and education.',
          small:
            'We analyze and report the data related to the current job by analyzing the equipment such as skills, experience and education level of the enterprises.',
          media: {
            type: 'image',
          },
        },
        detail: {
          d1: {
            title: 'All your people data in one place.',
            desc: 'Evaluate your payroll and all your personal affairs accurately and on time, so you can spend and benefit and save.',
            media: {
              path: 'https://player.vimeo.com/progressive_redirect/playback/850068422/rendition/360p/file.mp4?loc=external&signature=2522f249fa2d50d13d2a56d0368d54eee29e4c3603f59b153a7c70ed39a7079c',
            },
          },
          d2: {
            desc: 'With Layers, you gain efficiency, accuracy, and a holistic perspective on your organization’s human capital.',
            media: {
              path: '/',
            },
          },
        },
        nextPage: {
          title: 'Next Service',
          text: {
            t1: 'Next Service',
            t2: routes.en.services.children.organisationalDueDiligence?.ui,
          },
          url: routes.en.services.children.organisationalDueDiligence?.path,
        },
      },
    },
    organisationalDueDiligence: {
      type: routes.en.services.children.organisationalDueDiligence?.path,
      data: {
        intro: {
          title: 'Organisational Due Diligence',
          desc: 'Analysis of HR policy, management requirements, and workforce dynamics.',
          small:
            "We analyze the human resources policy and management's requirements, ethical values and workforce traffic.",
          media: {
            type: 'image',
          },
        },
        detail: {
          d1: {
            title: 'All your people data in one place.',
            desc: 'Evaluate your payroll and all your personal affairs accurately and on time, so you can spend and benefit and save.',
            media: {
              path: 'https://player.vimeo.com/progressive_redirect/playback/850068865/rendition/360p/file.mp4?loc=external&signature=4271f0069201adef017d36f8cd464f8866ee12a8feb6348f7d4ce1eb57865d3a',
            },
          },
          d2: {
            desc: 'With Layers, you gain efficiency, accuracy, and a holistic perspective on your organization’s human capital.',
            media: {
              path: '/',
            },
          },
        },
        nextPage: {
          title: 'Next Service',
          text: {
            t1: 'Next Service',
            t2: routes.en.services.children.managementAuditAndBenchmarking?.ui,
          },
          url: routes.en.services.children.managementAuditAndBenchmarking?.path,
        },
      },
    },
    managementAuditAndBenchmarking: {
      type: routes.en.services.children.managementAuditAndBenchmarking?.path,
      data: {
        intro: {
          title: 'Management Audit & Benchmarking',
          desc: 'Comprehensive analysis and benchmarking of HR management and workforce.',
          small:
            'We analyze the human resources management and workforce of your business, compare them with similar businesses and report them.',
          media: {
            type: 'image',
          },
        },
        detail: {
          d1: {
            title: 'All your people data in one place.',
            desc: 'Evaluate your payroll and all your personal affairs accurately and on time, so you can spend and benefit and save.',
            media: {
              path: 'https://player.vimeo.com/progressive_redirect/playback/850069672/rendition/360p/file.mp4?loc=external&signature=69be39c1fb62b07fc1a1b0230a9f11a13cb3b4667627d787674396a7c6988eb3',
            },
          },
          d2: {
            desc: 'With Layers, you gain efficiency, accuracy, and a holistic perspective on your organization’s human capital.',
            media: {
              path: '/',
            },
          },
        },
        nextPage: {
          title: 'Next Service',
          text: {
            t1: 'Next Service',
            t2: routes.en.services.children.executiveSearchAndRecruitment?.ui,
          },
          url: routes.en.services.children.executiveSearchAndRecruitment?.path,
        },
      },
    },
  },
  tr: {
    executiveSearchAndRecruitment: {
      type: routes.tr.services.children.executiveSearchAndRecruitment?.path,
      data: {
        intro: {
          title: 'Executive Search & Recruitment',
          desc: 'Streamlined service for finding top managers and professionals.',
          small:
            'We provide end-to-end services for quickly and effectively finding, assessing and hiring top executives and professionals.',
          media: {
            type: 'video',
            path: 'https://player.vimeo.com/progressive_redirect/playback/850180986/rendition/720p/file.mp4?loc=external&signature=c9405f4dc204aa7d5ffe9681c403b4b545929b62b3f9869494c436b21719e7f5',
          },
        },
        detail: {
          d1: {
            title: 'All your people data in one place.',
            desc: 'Streamlined service for finding top managers and professionals.',
            media: {
              path: 'https://player.vimeo.com/progressive_redirect/playback/850063525/rendition/360p/file.mp4?loc=external&signature=874f1ad2b3b128f6323239302918f666a821caa9ff57cd6d0826ada780f3c425',
            },
          },
          d2: {
            desc: 'With Layers, you gain efficiency, accuracy, and a holistic perspective on your organization’s human capital.',
            media: {
              path: `/img/detail-${routes.tr.services.children.executiveSearchAndRecruitment?.path}.png`,
            },
          },
        },
        nextPage: {
          title: 'Next Service',
          text: {
            t1: 'Next Service',
            t2: routes.tr.services.children.temporaryStaffingAndOutsourcing?.ui,
          },
          url: routes.tr.services.children.temporaryStaffingAndOutsourcing
            ?.path,
        },
      },
    },
    temporaryStaffingAndOutsourcing: {
      type: routes.tr.services.children.temporaryStaffingAndOutsourcing?.path,
      data: {
        intro: {
          title: 'Temporary Staffing | Outsourcing',
          desc: 'Flexible office solutions with recruitment and payroll management.',
          small:
            'Flexible office solutions with recruitment and payroll management.',
          media: {
            type: 'image',
          },
        },
        detail: {
          d1: {
            title: 'All your people data in one place.',
            desc: 'From top-level legal executives to specialized attorneys and legal support staff, we have the experience and resources to deliver outstanding candidates that will help you build a dynamic and successful legal team.',
            media: {
              path: 'https://player.vimeo.com/progressive_redirect/playback/850063828/rendition/360p/file.mp4?loc=external&signature=1e72cca8cbebbbcd9799cbe598562b5093f44753582df7399928ddf6a4c41e83',
            },
          },
          d2: {
            desc: 'With Layers, you gain efficiency, accuracy, and a holistic perspective on your organization’s human capital.',
            media: {
              path: '/',
            },
          },
        },
        nextPage: {
          title: 'Next Service',
          text: {
            t1: 'Next Service',
            t2: routes.tr.services.children.itRecruitment?.ui,
          },
          url: routes.tr.services.children.itRecruitment?.path,
        },
      },
    },
    itRecruitment: {
      type: routes.tr.services.children.itRecruitment?.path,
      data: {
        intro: {
          title: 'IT Recruitment',
          desc: 'Tech-focused experts for tailored candidate selection and recruitment.',
          small:
            'Tech-focused experts for tailored candidate selection and recruitment.',
          media: {
            type: 'image',
          },
        },
        detail: {
          d1: {
            title: 'All your people data in one place.',
            desc: 'With our expert staff dedicated to the technology sector, we find and measure the most suitable and common candidates for you and manage the recruitment process.',
            media: {
              path: 'https://player.vimeo.com/progressive_redirect/playback/850064877/rendition/360p/file.mp4?loc=external&signature=bd262d49dca6277e3ff4a11af32d0f9de2b663aaf25b01a7bdedd1a0efbf58cf',
            },
          },
          d2: {
            desc: 'With Layers, you gain efficiency, accuracy, and a holistic perspective on your organization’s human capital.',
            media: {
              path: '/',
            },
          },
        },
        nextPage: {
          title: 'Next Service',
          text: {
            t1: 'Next Service',
            t2: routes.tr.services.children.payroll?.ui,
          },
          url: routes.tr.services.children.payroll?.path,
        },
      },
    },
    payroll: {
      type: routes.tr.services.children.payroll?.path,
      data: {
        intro: {
          title: 'Payroll',
          desc: 'Accurate and timely payroll and personal affairs management for your financial benefit.',
          small:
            'Accurate and timely payroll and personal affairs management for your financial benefit.',
          media: {
            type: 'image',
          },
        },
        detail: {
          d1: {
            title: 'All your people data in one place.',
            desc: 'Evaluate your payroll and all your personal affairs accurately and on time, so you can spend and benefit and save.',
            media: {
              path: 'https://player.vimeo.com/progressive_redirect/playback/850065305/rendition/360p/file.mp4?loc=external&signature=16cb108f826fd824f5942bc9938984c8df2c9e850e74ad4c0daefa39c96dc038',
            },
          },
          d2: {
            desc: 'With Layers, you gain efficiency, accuracy, and a holistic perspective on your organization’s human capital.',
            media: {
              path: '/',
            },
          },
        },
        nextPage: {
          title: 'Next Service',
          text: {
            t1: 'Next Service',
            t2: routes.tr.services.children.massRecruitmentSolutions?.ui,
          },
          url: routes.tr.services.children.massRecruitmentSolutions?.path,
        },
      },
    },
    massRecruitmentSolutions: {
      type: routes.tr.services.children.massRecruitmentSolutions?.path,
      data: {
        intro: {
          title: 'Mass Recruitment Solutions',
          desc: 'Efficient end-to-end recruitment process for multiple roles simultaneously.',
          small:
            'Efficient end-to-end recruitment process for multiple roles simultaneously.',
          media: {
            type: 'video',
            path: 'https://player.vimeo.com/progressive_redirect/playback/850180986/rendition/720p/file.mp4?loc=external&signature=c9405f4dc204aa7d5ffe9681c403b4b545929b62b3f9869494c436b21719e7f5',
          },
        },
        detail: {
          d1: {
            title: 'All your people data in one place.',
            desc: 'Evaluate your payroll and all your personal affairs accurately and on time, so you can spend and benefit and save.',
            media: {
              path: 'https://player.vimeo.com/progressive_redirect/playback/850065653/rendition/360p/file.mp4?loc=external&signature=85607e5b308e1c0706412ef598cc7bf8aabb07b6ede60a84bd795e8618c5633a',
            },
          },
          d2: {
            desc: 'With Layers, you gain efficiency, accuracy, and a holistic perspective on your organization’s human capital.',
            media: {
              path: '/',
            },
          },
        },
        nextPage: {
          title: 'Next Service',
          text: {
            t1: 'Next Service',
            t2: routes.tr.services.children.recruitmentProcessOutsourcing?.ui,
          },
          url: routes.tr.services.children.recruitmentProcessOutsourcing?.path,
        },
      },
    },
    recruitmentProcessOutsourcing: {
      type: routes.tr.services.children.recruitmentProcessOutsourcing?.path,
      data: {
        intro: {
          title: 'Recruitment Process Outsourcing',
          desc: 'Outsource your recruitment processes.',
          small:
            'Perform some or all of your recruitment processes such as candidate search, interview, selection and placement for you.',
          media: {
            type: 'image',
          },
        },
        detail: {
          d1: {
            title: 'All your people data in one place.',
            desc: 'Evaluate your payroll and all your personal affairs accurately and on time, so you can spend and benefit and save.',
            media: {
              path: 'https://player.vimeo.com/progressive_redirect/playback/850066247/rendition/360p/file.mp4?loc=external&signature=69ba10ea9b3f8dee577d9eae3965106421989c673c4c724764fe05c3f895ccd2',
            },
          },
          d2: {
            desc: 'With Layers, you gain efficiency, accuracy, and a holistic perspective on your organization’s human capital.',
            media: {
              path: '/',
            },
          },
        },
        nextPage: {
          title: 'Next Service',
          text: {
            t1: 'Next Service',
            t2: routes.tr.services.children.assessmentAndExam?.ui,
          },
          url: routes.tr.services.children.assessmentAndExam?.path,
        },
      },
    },
    assessmentAndExam: {
      type: routes.tr.services.children.assessmentAndExam?.path,
      data: {
        intro: {
          title: 'Assessment & Exam',
          desc: 'Comprehensive reporting on recruitment, promotion, and loss evaluations.',
          small:
            'In your recruitment, promotion or loss, review your observations and benefit from the exams, we will report in the format you want.',
          media: {
            type: 'image',
          },
        },
        detail: {
          d1: {
            title: 'All your people data in one place',
            desc: 'Evaluate your payroll and all your personal affairs accurately and on time, so you can spend and benefit and save.',
            media: {
              path: 'https://player.vimeo.com/progressive_redirect/playback/850066552/rendition/360p/file.mp4?loc=external&signature=ed5c227825936020448c59346eb017c245459d73a4b3341b8451fcc7f18c91a3',
            },
          },
          d2: {
            desc: 'With Layers, you gain efficiency, accuracy, and a holistic perspective on your organization’s human capital.',
            media: {
              path: '/',
            },
          },
        },
        nextPage: {
          title: 'Next Service',
          text: {
            t1: 'Next Service',
            t2: routes.tr.services.children.outplacementAndCareerCoaching?.ui,
          },
          url: routes.tr.services.children.outplacementAndCareerCoaching?.path,
        },
      },
    },
    outplacementAndCareerCoaching: {
      type: routes.tr.services.children.outplacementAndCareerCoaching?.path,
      data: {
        intro: {
          title: 'Outplacement & Career Coaching',
          desc: 'Need-based relocation and career coaching for employees.',
          small:
            'We offer your employees from the company of a professional to this need-based relocation and career coaching service.',
          media: {
            type: 'image',
          },
        },
        detail: {
          d1: {
            title: 'All your people data in one place.',
            desc: 'Evaluate your payroll and all your personal affairs accurately and on time, so you can spend and benefit and save.',
            media: {
              path: 'https://player.vimeo.com/progressive_redirect/playback/850067034/rendition/360p/file.mp4?loc=external&signature=a871341d745f150e064cd97be2495dc83be372f3c6cd592ce7348f2ca32a6342',
            },
          },
          d2: {
            desc: 'With Layers, you gain efficiency, accuracy, and a holistic perspective on your organization’s human capital.',
            media: {
              path: '/',
            },
          },
        },
        nextPage: {
          title: 'Next Service',
          text: {
            t1: 'Next Service',
            t2: routes.tr.services.children.hrCoachingAndTraining?.ui,
          },
          url: routes.tr.services.children.hrCoachingAndTraining?.path,
        },
      },
    },
    hrCoachingAndTraining: {
      type: routes.tr.services.children.hrCoachingAndTraining?.path,
      data: {
        intro: {
          title: 'HR Coaching & Training',
          desc: 'Effective coaching and training for improved management skills.',
          small:
            'Leadership, communication, teamwork, performance, etc. We provide coaching and training that will enable you to manage issues more effectively.',
          media: {
            type: 'image',
          },
        },
        detail: {
          d1: {
            title: 'All your people data in one place.',
            desc: 'Evaluate your payroll and all your personal affairs accurately and on time, so you can spend and benefit and save.',
            media: {
              path: 'https://player.vimeo.com/progressive_redirect/playback/850067428/rendition/360p/file.mp4?loc=external&signature=c6c2805eb5e3ec706eb6b101d368e87ff8b0d89189b99ddb59f577a60ca912f9',
            },
          },
          d2: {
            desc: 'With Layers, you gain efficiency, accuracy, and a holistic perspective on your organization’s human capital.',
            media: {
              path: '/',
            },
          },
        },
        nextPage: {
          title: 'Next Service',
          text: {
            t1: 'Next Service',
            t2: routes.tr.services.children.hrMapping?.ui,
          },
          url: routes.tr.services.children.hrMapping?.path,
        },
      },
    },
    hrMapping: {
      type: routes.tr.services.children.hrMapping?.path,
      data: {
        intro: {
          title: 'HR Mapping',
          desc: 'Data analysis and reporting on job-related skills, experience, and education.',
          small:
            'We analyze and report the data related to the current job by analyzing the equipment such as skills, experience and education level of the enterprises.',
          media: {
            type: 'image',
          },
        },
        detail: {
          d1: {
            title: 'All your people data in one place.',
            desc: 'Evaluate your payroll and all your personal affairs accurately and on time, so you can spend and benefit and save.',
            media: {
              path: 'https://player.vimeo.com/progressive_redirect/playback/850068422/rendition/360p/file.mp4?loc=external&signature=2522f249fa2d50d13d2a56d0368d54eee29e4c3603f59b153a7c70ed39a7079c',
            },
          },
          d2: {
            desc: 'With Layers, you gain efficiency, accuracy, and a holistic perspective on your organization’s human capital.',
            media: {
              path: '/',
            },
          },
        },
        nextPage: {
          title: 'Next Service',
          text: {
            t1: 'Next Service',
            t2: routes.tr.services.children.organisationalDueDiligence?.ui,
          },
          url: routes.tr.services.children.organisationalDueDiligence?.path,
        },
      },
    },
    organisationalDueDiligence: {
      type: routes.tr.services.children.organisationalDueDiligence?.path,
      data: {
        intro: {
          title: 'Organisational Due Diligence',
          desc: 'Analysis of HR policy, management requirements, and workforce dynamics.',
          small:
            "We analyze the human resources policy and management's requirements, ethical values and workforce traffic.",
          media: {
            type: 'image',
          },
        },
        detail: {
          d1: {
            title: 'All your people data in one place.',
            desc: 'Evaluate your payroll and all your personal affairs accurately and on time, so you can spend and benefit and save.',
            media: {
              path: 'https://player.vimeo.com/progressive_redirect/playback/850068865/rendition/360p/file.mp4?loc=external&signature=4271f0069201adef017d36f8cd464f8866ee12a8feb6348f7d4ce1eb57865d3a',
            },
          },
          d2: {
            desc: 'With Layers, you gain efficiency, accuracy, and a holistic perspective on your organization’s human capital.',
            media: {
              path: '/',
            },
          },
        },
        nextPage: {
          title: 'Next Service',
          text: {
            t1: 'Next Service',
            t2: routes.tr.services.children.managementAuditAndBenchmarking?.ui,
          },
          url: routes.tr.services.children.managementAuditAndBenchmarking?.path,
        },
      },
    },
    managementAuditAndBenchmarking: {
      type: routes.tr.services.children.managementAuditAndBenchmarking?.path,
      data: {
        intro: {
          title: 'Management Audit & Benchmarking',
          desc: 'Comprehensive analysis and benchmarking of HR management and workforce.',
          small:
            'We analyze the human resources management and workforce of your business, compare them with similar businesses and report them.',
          media: {
            type: 'image',
          },
        },
        detail: {
          d1: {
            title: 'All your people data in one place.',
            desc: 'Evaluate your payroll and all your personal affairs accurately and on time, so you can spend and benefit and save.',
            media: {
              path: 'https://player.vimeo.com/progressive_redirect/playback/850069672/rendition/360p/file.mp4?loc=external&signature=69be39c1fb62b07fc1a1b0230a9f11a13cb3b4667627d787674396a7c6988eb3',
            },
          },
          d2: {
            desc: 'With Layers, you gain efficiency, accuracy, and a holistic perspective on your organization’s human capital.',
            media: {
              path: '/',
            },
          },
        },
        nextPage: {
          title: 'Next Service',
          text: {
            t1: 'Next Service',
            t2: routes.tr.services.children.executiveSearchAndRecruitment?.ui,
          },
          url: routes.tr.services.children.executiveSearchAndRecruitment?.path,
        },
      },
    },
  },
}
