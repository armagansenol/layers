type Route = {
  type: 'features' | 'services' | 'resources' | 'requestADemo'
  ui: string
  path: string
  children?: {
    ui: string
    path: string
    desc: string
  }[]
}

type Routes = {
  [key: string]: Route
}

export const routes: Routes = {
  features: {
    type: 'features',
    ui: 'Features',
    path: 'features',
    children: [
      {
        ui: 'Employee Database',
        path: 'employee-database',
        desc: 'Streamline organizational chart, files, docs, and personal info management with ease.',
      },
      {
        ui: 'Employee Center / HR Portal',
        path: 'employee-center-and-hr-portal',
        desc: 'Simplify employee needs with a centralized web/mobile center for leave, expenses, and more.',
      },
      {
        ui: 'Reporting & HR Analytics',
        path: 'reporting-and-hr-analytics',
        desc: 'Effortlessly track your workforce with 50+ reports and AI-powered analytics.',
      },
      {
        ui: 'Workflows & Forms',
        path: 'employee-database',
        desc: 'Manage 10+ processes and tasks: personal requests, leave, expenses, overtime, travel, and purchases.',
      },
      {
        ui: 'Feedback Management',
        path: 'feedback-management',
        desc: 'Collect and report feedback from your employees.',
      },
      {
        ui: 'Orientation & Learning Center',
        path: 'orientation-and-learning-center',
        desc: 'Plan orientation sessions, presentations, and provide documents/videos for new and existing employees.',
      },
      {
        ui: 'Exam & Surveys',
        path: 'exam-and-surveys',
        desc: 'Evaluate through quizzes and surveys using 100+ predefined tests and templates.',
      },
      {
        ui: 'Gamifications & Appreciations',
        path: 'gamifications-and-appreciations',
        desc: 'Drive motivation and evaluations by defining gamification scenarios linked to your business processes.',
      },

      {
        ui: 'Recruitment Center',
        path: 'recruitment-center',
        desc: 'Manage open positions, job postings, candidates, and interviews with an ATS system and generate reports.',
      },
      {
        ui: 'Assessment & Onboarding',
        path: 'assessment-and-onboarding',
        desc: 'Manage documents and paperwork effortlessly. Convert candidates to employees with a single click.',
      },
      {
        ui: 'Compensation & Benefits',
        path: 'compensation-and-benefits',
        desc: 'Effortlessly plan, maintain, and report on payroll systems and protections.',
      },
      {
        ui: 'OKR & Performance Management',
        path: 'okr-and-performance-management',
        desc: 'Use KPIs or OKRs for performance management and reporting.',
      },
    ],
  },
  services: {
    type: 'services',
    ui: 'Services',
    path: 'services',
    children: [
      {
        ui: 'Executive Search & Recruitment',
        path: 'executive-search-and-recruitment',
        desc: 'Streamlined service for finding top managers and professionals.',
      },
      {
        ui: 'Temporary Staffing | Outsourcing',
        path: 'employee-center-and-hr-portal',
        desc: 'Flexible office solutions with recruitment and payroll management.',
      },
      {
        ui: 'IT Recruitment',
        path: 'it-recruitment',
        desc: 'Tech-focused experts for tailored candidate selection and recruitment.',
      },
      {
        ui: 'Payroll',
        path: 'payroll',
        desc: 'Accurate and timely payroll and personal affairs management for your financial benefit.',
      },
      {
        ui: 'Mass Recruitment Solutions',
        path: 'mass-recruitment-solutions',
        desc: 'Efficient end-to-end recruitment process for multiple roles simultaneously.',
      },
      {
        ui: 'Recruitment Process Outsourcing',
        path: 'recruitment-process-outsourcing',
        desc: 'Outsource your recruitment processes.',
      },
      {
        ui: 'Assessment & Exam',
        path: 'assessment-and-exam',
        desc: 'Comprehensive reporting on recruitment, promotion, and loss evaluations.',
      },
      {
        ui: 'Outplacement & Career Coaching',
        path: 'outplacement-and-career-coaching',
        desc: 'Need-based relocation and career coaching for employees.',
      },
      {
        ui: 'HR Coaching & Training',
        path: 'hr-coaching-and-training',
        desc: 'Effective coaching and training for improved management skills.',
      },
      {
        ui: 'HR Mapping',
        path: 'hr-mapping',
        desc: 'Data analysis and reporting on job-related skills, experience, and education.',
      },
      {
        ui: 'Organisational Due Diligence',
        path: 'organisational-due-diligence',
        desc: 'Analysis of HR policy, management requirements, and workforce dynamics.',
      },
      {
        ui: 'Management Audit & Benchmarking',
        path: 'management-audit-and-benchmarking',
        desc: 'Comprehensive analysis and benchmarking of HR management and workforce.',
      },
    ],
  },
  resources: {
    type: 'resources',
    ui: 'Resources',
    path: 'resources',
    children: [
      {
        ui: 'Employee Database',
        path: 'employee-database',
        desc: 'Streamline organizational chart, files, docs, and personal info management with ease.',
      },
      {
        ui: 'Employee Center / HR Portal',
        path: 'employee-center-and-hr-portal',
        desc: 'Simplify employee needs with a centralized web/mobile center for leave, expenses, and more.',
      },
      {
        ui: 'Reporting & HR Analytics',
        path: 'reporting-and-hr-analytics',
        desc: 'Effortlessly track your workforce with 50+ reports and AI-powered analytics.',
      },
      {
        ui: 'Workflows & Forms',
        path: 'employee-database',
        desc: 'Manage 10+ processes and tasks: personal requests, leave, expenses, overtime, travel, and purchases.',
      },
      {
        ui: 'Feedback Management',
        path: 'feedback-management',
        desc: 'Collect and report feedback from your employees.',
      },
      {
        ui: 'Orientation & Learning Center',
        path: 'orientation-and-learning-center',
        desc: 'Plan orientation sessions, presentations, and provide documents/videos for new and existing employees.',
      },
      {
        ui: 'Exam & Surveys',
        path: 'exam-and-surveys',
        desc: 'Evaluate through quizzes and surveys using 100+ predefined tests and templates.',
      },
      {
        ui: 'Gamifications & Appreciations',
        path: 'gamifications-and-appreciations',
        desc: 'Drive motivation and evaluations by defining gamification scenarios linked to your business processes.',
      },

      {
        ui: 'Recruitment Center',
        path: 'recruitment-center',
        desc: 'Manage open positions, job postings, candidates, and interviews with an ATS system and generate reports.',
      },
      {
        ui: 'Assessment & Onboarding',
        path: 'assessment-and-onboarding',
        desc: 'Manage documents and paperwork effortlessly. Convert candidates to employees with a single click.',
      },
      {
        ui: 'Compensation & Benefits',
        path: 'compensation-and-benefits',
        desc: 'Effortlessly plan, maintain, and report on payroll systems and protections.',
      },
      {
        ui: 'OKR & Performance Management',
        path: 'okr-and-performance-management',
        desc: 'Use KPIs or OKRs for performance management and reporting.',
      },
    ],
  },
}
