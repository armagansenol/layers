import { DynamicRoutes, SubRoutes, routes } from '@/global'
import Detail from '@/layouts/detail'
import { GetStaticPaths } from 'next'

const features = {
  employeeDatabase: {
    type: routes.features.children.employeeDatabase?.path,
    data: {
      intro: {
        title: 'Employee Database',
        desc: 'Access your personal database with just a click.',
        small:
          'Streamline organizational chart, files, docs, and personal info management with ease.',
        media: {
          path: '/',
        },
      },
      detail: {
        d1: {
          title: 'All your people data in one place.',
          desc: 'Easily manage, monitor and report your organizational chart, personnel personal information, documents and personal information.',
          media: {
            path: '/',
          },
        },
        d2: {
          desc: 'With Layers, you gain efficiency, accuracy, and a holistic perspective on your organization’s human capital.',
          media: {
            path: `/img/detail-${routes.features.children.employeeDatabase?.path}.png`,
          },
        },
      },
      nextPage: {
        title: 'Next Feature',
        text: { t1: 'Next Feature', t2: 'Employee Center & HR Reports' },
        url: routes.features.children.employeeDatabase?.path,
      },
    },
  },
  employeeCenterAndHrPortal: {
    type: routes.features.children.employeeCenterAndHrPortal?.path,
    data: {
      intro: {
        title: 'Employee Center & HR Portal',
        desc: 'Simplify employee needs with a centralized web/mobile center for leave, expenses, and more.',
        small:
          'Simplify employee needs with a centralized web/mobile center for leave, expenses, and more.',
        media: {
          path: '/',
        },
      },
      detail: {
        d1: {
          title: 'Effortless Expense Management.',
          desc: 'With just a few clicks, employees can submit leave requests, track their remaining leave balances, and manage their expenses seamlessly.',
          media: {
            path: '/',
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
        text: { t1: 'Next Feature', t2: 'Reporting & HR Analytics' },
        url: routes.features.children.employeeDatabase?.path,
      },
    },
  },
  reportingAndHrAnalytics: {
    type: routes.features.children.reportingAndHrAnalytics?.path,
    data: {
      intro: {
        title: 'Reporting & HR Analytics',
        desc: 'Effortlessly track your workforce with 50+ reports and AI-powered analytics.',
        small:
          'Effortlessly track your workforce with 50+ reports and AI-powered analytics.',
        media: {
          path: '/',
        },
      },
      detail: {
        d1: {
          title: 'Customizable Dashboards.',
          desc: 'Tailor your analytics experience with customizable dashboards. Layers App allows you to create personalized dashboards that display the metrics and visualizations most relevant to your organization.',
          media: {
            path: '/',
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
          t2: routes.features.children.workflowsAndForms?.ui,
        },
        url: routes.features.children.workflowsAndForms?.path,
      },
    },
  },
  workflowsAndForms: {
    type: routes.features.children.workflowsAndForms?.path,
    data: {
      intro: {
        title: 'Workflows & Forms',
        desc: 'Effortlessly manage 10+ processes and tasks.',
        small:
          'Automate processes, eliminate manual tasks, and enhance collaboration, all in one comprehensive solution.',
        media: {
          path: '/',
        },
      },
      detail: {
        d1: {
          title: 'Automated Workflows.',
          desc: 'Workflows & Forms feature allows automate workflows, reducing administrative burdens and improving efficiency.',
          media: {
            path: '/',
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
          t2: routes.features.children.feedbackManagement?.ui,
        },
        url: routes.features.children.feedbackManagement?.path,
      },
    },
  },
  feedbackManagement: {
    type: routes.features.children.feedbackManagement?.path,
    data: {
      intro: {
        title: 'Feedback Management',
        desc: 'Collect and report feedback from your employees.',
        small:
          'Feedbacks are the lifeblood of growth and innovation. That’s why we’ve developed a comprehensive feedback management feature within our app, designed to help businesses harness the power of customer insights and drive meaningful change.',
        media: {
          path: '/',
        },
      },
      detail: {
        d1: {
          title: 'Centralize Feedback',
          desc: 'Layers allows you to gather feedback from multiple channels, including surveys, reviews, all in one place. This centralized approach ensures that no valuable feedback goes unnoticed or gets lost in the shuffle.',
          media: {
            path: '/',
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
          t2: routes.features.children.orientationAndLearningCenter?.ui,
        },
        url: routes.features.children.orientationAndLearningCenter?.path,
      },
    },
  },
  orientationAndLearningCenter: {
    type: routes.features.children.orientationAndLearningCenter?.path,
    data: {
      intro: {
        title: 'Orientation & Learning Center',
        desc: 'Plan orientation sessions, presentations, and provide documents/videos for new and existing employees.',
        small:
          'Facilitating seamless onboarding and continuous growth by organizing orientation sessions, engaging presentations, and delivering comprehensive documents and videos for both new and existing employees.',
        media: {
          path: '/',
        },
      },
      detail: {
        d1: {
          title: 'Setting the Stage for Success',
          desc: 'Set the stage for success by providing new employees with a comprehensive introduction to our company’s values, culture, and expectations.',
          media: {
            path: '/',
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
          t2: routes.features.children.examAndSurveys?.ui,
        },
        url: routes.features.children.examAndSurveys?.path,
      },
    },
  },
  examAndSurveys: {
    type: routes.features.children.examAndSurveys?.path,
    data: {
      intro: {
        title: 'Exam & Surveys',
        desc: 'Evaluate through quizzes and surveys using 100+ predefined tests and templates.',
        small:
          'Empowers organizations to conduct comprehensive evaluations by utilizing quizzes, surveys, and an extensive library of over 100 predefined tests and templates.',
        media: {
          path: '/',
        },
      },
      detail: {
        d1: {
          title: 'Unlocking Growth and Success',
          desc: 'With the “Exam & Surveys” feature, empowers individuals and organizations to efficiently assess knowledge, gather feedback, and unlock new opportunities for growth and success.',
          media: {
            path: '/',
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
          t2: routes.features.children.gamificationsAndAppreciations?.ui,
        },
        url: routes.features.children.gamificationsAndAppreciations?.path,
      },
    },
  },
  gamificationsAndAppreciations: {
    type: routes.features.children.gamificationsAndAppreciations?.path,
    data: {
      intro: {
        title: 'Gamifications & Appreciations',
        desc: 'Collect points, win gifts with our gamification model.',
        small:
          'Drive motivation and evaluations by defining gamification scenarios linked to your business processes.',
        media: {
          path: '/',
        },
      },
      detail: {
        d1: {
          title: 'Level up your workforce',
          desc: 'With Layer’s gamification & appreciation features, you can foster a more motivated, connected, and productive workforce. Say goodbye to mundane routines and hello to a vibrant workplace where achievements are celebrated, and rewards await.',
          media: {
            path: '/',
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
          t2: routes.features.children.recruitmentCenter?.ui,
        },
        url: routes.features.children.recruitmentCenter?.path,
      },
    },
  },
  recruitmentCenter: {
    type: routes.features.children.recruitmentCenter?.path,
    data: {
      intro: {
        title: 'Recruitment Center',
        desc: 'Manage open positions, job postings, candidates, and interviews.',
        small:
          'It is an ATS system where you can manage and report your open positions, job postings, candidates, interviewers and interview processes.',
        media: {
          path: '/',
        },
      },
      detail: {
        d1: {
          title: 'Powerful Candidate Search and Filtering',
          desc: 'With the Recruitment Center, you can search and filter candidates based on various criteria, such as skills, experience, education, and more.',
          media: {
            path: '/',
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
          t2: routes.features.children.assesmentAndOnboarding?.ui,
        },
        url: routes.features.children.assesmentAndOnboarding?.path,
      },
    },
  },
  assessmentAndOnboarding: {
    type: routes.features.children.assesmentAndOnboarding?.path,
    data: {
      intro: {
        title: 'Assessment & Onboarding',
        desc: 'Convert candidates to employees with a single click.',
        small:
          'It can manage your recruitment and on-the-job processes, documents and papers in these processes. You can turn your candidates into personnel with a single click.',
        media: {
          path: '/',
        },
      },
      detail: {
        d1: {
          title: 'Automated Workflows',
          desc: 'Simplify your onboarding process with automated workflows. The Layers App enables you to automate repetitive tasks, such as sending welcome emails, assigning training modules, and generating necessary documentation.',
          media: {
            path: '/',
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
          t2: routes.features.children.compensationAndBenefits?.ui,
        },
        url: routes.features.children.compensationAndBenefits?.path,
      },
    },
  },
  compensationAndBenefits: {
    type: routes.features.children.compensationAndBenefits?.path,
    data: {
      intro: {
        title: 'Compensation & Benefits',
        desc: 'Track and report the transactions in your account.',
        small:
          'Effortlessly plan, maintain, and report on payroll systems and protections.',
        media: {
          path: '/',
        },
      },
      detail: {
        d1: {
          title: 'Improve Wellbeing',
          desc: 'Keep an eye on who opts out or reduces contributions to learn about your team’s needs.',
          media: {
            path: '/',
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
          t2: routes.features.children.okrAndPerformanceManagement?.ui,
        },
        url: routes.features.children.okrAndPerformanceManagement?.path,
      },
    },
  },
  okrAndPerformanceManagement: {
    type: routes.features.children.okrAndPerformanceManagement?.path,
    data: {
      intro: {
        title: 'OKR & Performance Management',
        desc: 'Observe your performance process with Layers.',
        small: 'Use KPIs or OKRs for performance management and reporting.',
        media: {
          path: '/',
        },
      },
      detail: {
        d1: {
          title: 'Analytics and insights',
          desc: 'Leverage the power of data to gain actionable insights into your organization’s performance.',
          media: {
            path: '/',
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
          t2: routes.features.children.employeeDatabase?.ui,
        },
        url: routes.features.children.employeeDatabase?.path,
      },
    },
  },
}

const Features = ({ data }: any) => {
  console.log('data', data)

  return <Detail pageData={data.data} pageType={data.type} />
}

export const getStaticPaths: GetStaticPaths<any> = async () => {
  let paths: any[] = []
  const subRoutes = { ...routes.features.children, ...routes.services.children }
  Object.values(subRoutes).map((value) => {
    paths = [...paths, { params: { slug: [value.path] } }]
  })

  return {
    paths, // indicates that no page needs be created at build time
    fallback: false, // indicates the type of fallback
  }
}

export async function getStaticProps(context: any) {
  const { slug } = context.params

  console.log('slug', slug[0])

  function getData() {
    const page = Object.values(features).filter((value) => {
      return value.type === slug[0]
    })

    return page[0]
  }

  const data = getData()

  return {
    props: {
      data,
    },
  }
}

export default Features
