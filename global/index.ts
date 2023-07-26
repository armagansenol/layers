export enum DynamicRoutes {
  features = 'features',
  services = 'services',
}

export enum SubRoutes {
  employeeDatabase = 'employeeDatabase',
  employeeCenterAndHrPortal = 'employeeCenterAndHrPortal',
  reportingAndHrAnalytics = 'reportingAndHrAnalytics',
  workflowsAndForms = 'workflowsAndForms',
  feedbackManagement = 'feedbackManagement',
  orientationAndLearningCenter = 'orientationAndLearningCenter',
  examsAndSurveys = 'examsAndSurveys',
  gamificationsAndAppreciations = 'gamificationsAndAppreciations',
  recruitmentCenter = 'recruitmentCenter',
  assesmentAndOnboarding = 'assesmentAndOnboarding',
  compensationAndBenefits = 'compensationAndBenefits',
  okrAndPerformanceManagement = 'okrAndPerformanceManagement',
  executiveSearchAndRecruitment = 'executiveSearchAndRecruitment',
  temporaryStaffingAndOutsourcing = 'temporaryStaffingAndOutsourcing',
  itRecruitment = 'itRecruitment',
  payroll = 'payroll',
  massRecruitmentSolutions = 'massRecruitmentSolutions',
  recruitmentProcessOutsourcing = 'recruitmentProcessOutsourcing',
  assesmentAndExam = 'assesmentAndExam',
  outplacementAndCareerCoaching = 'outplacementAndCareerCoaching',
  hrCoachingAndTraining = 'hrCoachingAndTraining',
  hrMapping = 'hrMapping',
  organisationalDueDiligence = 'organisationalDueDiligence',
  managementAuditAndBenchmarking = 'managementAuditAndBenchmarking',
}

export type Children = {
  [key in SubRoutes]?: {
    ui: string
    path: string
    desc?: string
  }
}

export type Route = {
  type: DynamicRoutes.features | DynamicRoutes.services
  ui: string
  path: string
  children: Children
}

export type Routes = {
  [key in DynamicRoutes]: Route
}

export const routes: Routes = {
  features: {
    type: DynamicRoutes.features,
    ui: 'Features',
    path: 'features',
    children: {
      employeeDatabase: {
        ui: 'Employee Database',
        path: 'employee-database',
        desc: 'Streamline organizational chart, files, docs, and personal info management with ease.',
      },
      employeeCenterAndHrPortal: {
        ui: 'Employee Center / HR Portal',
        path: 'employee-center-and-hr-portal',
        desc: 'Simplify employee needs with a centralized web/mobile center for leave, expenses, and more.',
      },
      reportingAndHrAnalytics: {
        ui: 'Reporting & HR Analytics',
        path: 'reporting-and-hr-analytics',
        desc: 'Effortlessly track your workforce with 50+ reports and AI-powered analytics.',
      },
      workflowsAndForms: {
        ui: 'Workflows & Forms',
        path: 'employee-database',
        desc: 'Manage 10+ processes and tasks: personal requests, leave, expenses, overtime, travel, and purchases.',
      },
      feedbackManagement: {
        ui: 'Feedback Management',
        path: 'feedback-management',
        desc: 'Collect and report feedback from your employees.',
      },
      orientationAndLearningCenter: {
        ui: 'Orientation & Learning Center',
        path: 'orientation-and-learning-center',
        desc: 'Plan orientation sessions, presentations, and provide documents/videos for new and existing employees.',
      },
      examsAndSurveys: {
        ui: 'Exams & Surveys',
        path: 'exams-and-surveys',
        desc: 'Evaluate through quizzes and surveys using 100+ predefined tests and templates.',
      },
      gamificationsAndAppreciations: {
        ui: 'Gamifications & Appreciations',
        path: 'gamifications-and-appreciations',
        desc: 'Drive motivation and evaluations by defining gamification scenarios linked to your business processes.',
      },
      recruitmentCenter: {
        ui: 'Recruitment Center',
        path: 'recruitment-center',
        desc: 'Manage open positions, job postings, candidates, and interviews with an ATS system and generate reports.',
      },
      assesmentAndOnboarding: {
        ui: 'Assessment & Onboarding',
        path: 'assessment-and-onboarding',
        desc: 'Manage documents and paperwork effortlessly. Convert candidates to employees with a single click.',
      },
      compensationAndBenefits: {
        ui: 'Compensation & Benefits',
        path: 'compensation-and-benefits',
        desc: 'Effortlessly plan, maintain, and report on payroll systems and protections.',
      },
      okrAndPerformanceManagement: {
        ui: 'OKR & Performance Management',
        path: 'okr-and-performance-management',
        desc: 'Use KPIs or OKRs for performance management and reporting.',
      },
    },
  },
  services: {
    type: DynamicRoutes.services,
    ui: 'Services',
    path: 'services',
    children: {
      executiveSearchAndRecruitment: {
        ui: 'Executive Search & Recruitment',
        path: 'executive-search-and-recruitment',
        desc: 'Streamlined service for finding top managers and professionals.',
      },
      temporaryStaffingAndOutsourcing: {
        ui: 'Temporary Staffing | Outsourcing',
        path: 'temporary-staffing-and-outsourcing',
        desc: 'Flexible office solutions with recruitment and payroll management.',
      },
      itRecruitment: {
        ui: 'IT Recruitment',
        path: 'it-recruitment',
        desc: 'Tech-focused experts for tailored candidate selection and recruitment.',
      },
      payroll: {
        ui: 'Payroll',
        path: 'payroll',
        desc: 'Accurate and timely payroll and personal affairs management for your financial benefit.',
      },
      massRecruitmentSolutions: {
        ui: 'Mass Recruitment Solutions',
        path: 'mass-recruitment-solutions',
        desc: 'Efficient end-to-end recruitment process for multiple roles simultaneously.',
      },
      recruitmentProcessOutsourcing: {
        ui: 'Recruitment Process Outsourcing',
        path: 'recruitment-process-outsourcing',
        desc: 'Outsource your recruitment processes.',
      },
      assesmentAndExam: {
        ui: 'Assessment & Exam',
        path: 'assessment-and-exam',
        desc: 'Comprehensive reporting on recruitment, promotion, and loss evaluations.',
      },
      outplacementAndCareerCoaching: {
        ui: 'Outplacement & Career Coaching',
        path: 'outplacement-and-career-coaching',
        desc: 'Need-based relocation and career coaching for employees.',
      },
      hrCoachingAndTraining: {
        ui: 'HR Coaching & Training',
        path: 'hr-coaching-and-training',
        desc: 'Effective coaching and training for improved management skills.',
      },
      hrMapping: {
        ui: 'HR Mapping',
        path: 'hr-mapping',
        desc: 'Data analysis and reporting on job-related skills, experience, and education.',
      },
      organisationalDueDiligence: {
        ui: 'Organisational Due Diligence',
        path: 'organisational-due-diligence',
        desc: 'Analysis of HR policy, management requirements, and workforce dynamics.',
      },
      managementAuditAndBenchmarking: {
        ui: 'Management Audit & Benchmarking',
        path: 'management-audit-and-benchmarking',
        desc: 'Comprehensive analysis and benchmarking of HR management and workforce.',
      },
    },
  },
  // resources: {
  //   type: DynamicRoutes.resources,
  //   ui: 'Resources',
  //   path: 'resources',
  //   children: [
  //     {
  //       ui: 'About Layers',
  //       path: 'about',
  //     },
  //     {
  //       ui: 'Get an Offer',
  //       path: 'get-an-offer',
  //     },
  //     {
  //       ui: 'Contact',
  //       path: 'contact',
  //     },
  //   ],
  // },
}
