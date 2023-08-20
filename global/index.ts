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
  [key in MainRoute]: Route
}

export const routes: Routes = {
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
}
