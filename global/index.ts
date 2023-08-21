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
