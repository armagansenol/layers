import React, { useState } from 'react'
import cn from 'clsx'
import s from './header.module.scss'
import { Image } from '@/components/image'
import IconArrowDropdown from '@/components/icons/icon-arrow-dropdown'
import { AnimatePresence, cubicBezier, motion } from 'framer-motion'
import Link from 'next/link'

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

const Header = () => {
  const [currentRoute, setCurrentRoute] = useState<any>(null)
  const [isOpen, setIsOpen] = useState(false)
  const ease = cubicBezier(0.16, 1, 0.3, 1)

  const routes: Routes = {
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
    requestADemo: {
      type: 'requestADemo',
      ui: 'Request A Demo',
      path: 'request-a-demo',
    },
  }

  function handleMenu(type: any) {
    if (type) {
      setCurrentRoute(type)
    }

    setIsOpen(true)
  }

  return (
    <header
      className={cn(s.header, [s[currentRoute && routes[currentRoute].type]])}
    >
      <div className={s.logoC}>
        <Image
          src="/img/layers-logo.svg"
          alt="6 hours"
          width="206"
          height="193"
          style={{ objectFit: 'contain' }}
        />
      </div>

      <nav className={s.navigation} onMouseLeave={() => setIsOpen(false)}>
        {Object.entries(routes).map(([key, value], i) => {
          return (
            <div
              className={cn(s.navItemC, 'cursor-pointer', [s[value.type]])}
              key={i}
              onMouseEnter={() =>
                value.type !== 'requestADemo' && handleMenu(value.type)
              }
            >
              <p className={s.itemText}>{value.ui}</p>
              {value.children && (
                <div className={s.iconC}>
                  <IconArrowDropdown />
                </div>
              )}
            </div>
          )
        })}
        <AnimatePresence>
          {isOpen && (
            <motion.div className={s.menuC}>
              <motion.div
                className={cn(s.menu, 'flex-center')}
                key={`${currentRoute}-menu`}
                initial="closed"
                animate="open"
                exit="closed"
                variants={{
                  open: {
                    opacity: 1,
                    scale: 1,
                    y: 0,
                    transition: { duration: 0.5, ease },
                  },
                  closed: {
                    opacity: 0,
                    scale: 0.75,
                    y: -50,
                    transition: { duration: 0.2, ease },
                  },
                }}
              >
                <AnimatePresence>
                  {currentRoute && (
                    <motion.div
                      className={cn(s.content)}
                      key={`${currentRoute}-content`}
                      initial="closed"
                      animate="open"
                      exit="closed"
                      variants={{
                        open: {
                          opacity: 1,
                          transition: { duration: 0.1, ease: 'easeInOut' },
                        },
                        closed: {
                          opacity: 0,
                          transition: { duration: 0.1, ease: 'easeInOut' },
                        },
                      }}
                    >
                      {routes[currentRoute].children &&
                        routes[currentRoute].children?.map((item, i) => {
                          return (
                            <Link
                              href={item.path}
                              key={i}
                              className={cn(s.menuItem, 'cursor-pointer')}
                            >
                              <div className={s.iconC}>
                                <Image
                                  src={`/img/${item.path}.png`}
                                  width={100}
                                  height={100}
                                  alt="Feature Icons"
                                  style={{ objectFit: 'contain' }}
                                />
                              </div>
                              <div>
                                <h5 className={s.title}>{item.ui}</h5>
                                <p className={s.desc}>{item.desc}</p>
                              </div>
                            </Link>
                          )
                        })}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <div className={s.actions}>
        <div className={s.btn}>tr</div>
        <button className={s.btn}>
          Login{' '}
          <div className={s.iconC}>
            <IconArrowDropdown />
          </div>
        </button>
      </div>
    </header>
  )
}

export default Header
