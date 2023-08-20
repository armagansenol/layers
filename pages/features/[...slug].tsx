import { routes } from '@/global'
import { Layout } from '@/layouts/default'
import Detail from '@/layouts/detail'
import { GetStaticPaths, GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { ParsedUrlQuery } from 'querystring'
import { useTranslation } from 'next-i18next'

interface IParams extends ParsedUrlQuery {
  slug: string
  locale: string
}

const features = {
  en: {
    employeeDatabase: {
      type: routes.features.children.employeeDatabase?.path,
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
              path: `/img/detail-${routes.features.children.employeeDatabase?.path}.png`,
            },
          },
        },
        nextPage: {
          title: 'Next Feature',
          text: {
            t1: 'Next Feature',
            t2: routes.features.children.employeeCenterAndHrPortal?.ui,
          },
          url: routes.features.children.employeeCenterAndHrPortal?.path,
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
            t2: routes.features.children.reportingAndHrAnalytics?.ui,
          },
          url: routes.features.children.reportingAndHrAnalytics?.path,
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
            t2: routes.features.children.assessmentAndOnboarding?.ui,
          },
          url: routes.features.children.assessmentAndOnboarding?.path,
        },
      },
    },
    assessmentAndOnboarding: {
      type: routes.features.children.assessmentAndOnboarding?.path,
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
            t2: routes.features.children.employeeDatabase?.ui,
          },
          url: routes.features.children.employeeDatabase?.path,
        },
      },
    },
  },
  tr: {
    employeeDatabase: {
      type: routes.features.children.employeeDatabase?.path,
      data: {
        intro: {
          title: 'Çalışan Veritabanı',
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
              path: `/img/detail-${routes.features.children.employeeDatabase?.path}.png`,
            },
          },
        },
        nextPage: {
          title: 'Next Feature',
          text: {
            t1: 'Next Feature',
            t2: routes.features.children.employeeCenterAndHrPortal?.ui,
          },
          url: routes.features.children.employeeCenterAndHrPortal?.path,
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
            t2: routes.features.children.reportingAndHrAnalytics?.ui,
          },
          url: routes.features.children.reportingAndHrAnalytics?.path,
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
            t2: routes.features.children.assessmentAndOnboarding?.ui,
          },
          url: routes.features.children.assessmentAndOnboarding?.path,
        },
      },
    },
    assessmentAndOnboarding: {
      type: routes.features.children.assessmentAndOnboarding?.path,
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
            t2: routes.features.children.employeeDatabase?.ui,
          },
          url: routes.features.children.employeeDatabase?.path,
        },
      },
    },
  },
}

const Features = ({ data }: any) => {
  const { t } = useTranslation('features')

  return (
    <Layout theme="features">
      <Detail pageData={data.data} pageType={data.type} />
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = () => {
  let paths: { params: { slug: string[] }; locale: string }[] = []

  Object.values(routes.features.children).map((value) => {
    paths = [...paths, { params: { slug: [value.path] }, locale: 'en' }]
  })

  Object.values(routes.features.children).map((value) => {
    paths = [...paths, { params: { slug: [value.path] }, locale: 'tr' }]
  })

  console.log(paths)

  return {
    paths, // indicates that no page needs be created at build time
    fallback: true, // indicates the type of fallback
  }
}

export const getStaticProps: GetStaticProps = async ({ params, locale }) => {
  const { slug } = params as IParams

  function getData() {
    const page = Object.values(
      locale === 'en' ? features.en : features.tr
    ).filter((value) => {
      return value.type === slug[0]
    })

    return page[0]
  }

  const data = getData()

  return {
    props: {
      data,
      ...(await serverSideTranslations(locale ?? 'en', ['features'])),
    },
  }
}

export default Features
