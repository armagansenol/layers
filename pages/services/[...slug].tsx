import { routes } from '@/global'
import Detail from '@/layouts/detail'
import { GetStaticPaths } from 'next'

const services = {
  executiveSearchAndRecruitment: {
    type: routes.services.children.executiveSearchAndRecruitment?.path,
    data: {
      intro: {
        title: 'Executive Search & Recruitment',
        desc: 'Streamlined service for finding top managers and professionals.',
        small:
          'We provide end-to-end services for quickly and effectively finding, assessing and hiring top executives and professionals.',
        media: {
          path: '/',
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
            path: `/img/detail-${routes.services.children.executiveSearchAndRecruitment?.path}.png`,
          },
        },
      },
      nextPage: {
        title: 'Next Service',
        text: {
          t1: 'Next Service',
          t2: routes.services.children.temporaryStaffingAndOutsourcing?.ui,
        },
        url: routes.services.children.temporaryStaffingAndOutsourcing?.path,
      },
    },
  },
  temporaryStaffingAndOutsourcing: {
    type: routes.services.children.temporaryStaffingAndOutsourcing?.path,
    data: {
      intro: {
        title: 'Temporary Staffing | Outsourcing',
        desc: 'Flexible office solutions with recruitment and payroll management.',
        small:
          'Flexible office solutions with recruitment and payroll management.',
        media: {
          path: '/',
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
          t2: routes.services.children.itRecruitment?.ui,
        },
        url: routes.services.children.itRecruitment?.path,
      },
    },
  },
  itRecruitment: {
    type: routes.services.children.itRecruitment?.path,
    data: {
      intro: {
        title: 'IT Recruitment',
        desc: 'Tech-focused experts for tailored candidate selection and recruitment.',
        small:
          'Tech-focused experts for tailored candidate selection and recruitment.',
        media: {
          path: '/',
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
          t2: routes.services.children.payroll?.ui,
        },
        url: routes.services.children.payroll?.path,
      },
    },
  },
  payroll: {
    type: routes.services.children.payroll?.path,
    data: {
      intro: {
        title: 'Payroll',
        desc: 'Accurate and timely payroll and personal affairs management for your financial benefit.',
        small:
          'Accurate and timely payroll and personal affairs management for your financial benefit.',
        media: {
          path: '/',
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
          t2: routes.services.children.massRecruitmentSolutions?.ui,
        },
        url: routes.services.children.massRecruitmentSolutions?.path,
      },
    },
  },
  massRecruitmentSolutions: {
    type: routes.services.children.massRecruitmentSolutions?.path,
    data: {
      intro: {
        title: 'Mass Recruitment Solutions',
        desc: 'Efficient end-to-end recruitment process for multiple roles simultaneously.',
        small:
          'Efficient end-to-end recruitment process for multiple roles simultaneously.',
        media: {
          path: '/',
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
          t2: routes.services.children.recruitmentProcessOutsourcing?.ui,
        },
        url: routes.services.children.recruitmentProcessOutsourcing?.path,
      },
    },
  },
  recruitmentProcessOutsourcing: {
    type: routes.services.children.recruitmentProcessOutsourcing?.path,
    data: {
      intro: {
        title: 'Recruitment Process Outsourcing',
        desc: 'Outsource your recruitment processes.',
        small:
          'Perform some or all of your recruitment processes such as candidate search, interview, selection and placement for you.',
        media: {
          path: '/',
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
          t2: routes.services.children.assessmentAndExam?.ui,
        },
        url: routes.services.children.assessmentAndExam?.path,
      },
    },
  },
  assessmentAndExam: {
    type: routes.services.children.assessmentAndExam?.path,
    data: {
      intro: {
        title: 'Assessment & Exam',
        desc: 'Comprehensive reporting on recruitment, promotion, and loss evaluations.',
        small:
          'In your recruitment, promotion or loss, review your observations and benefit from the exams, we will report in the format you want.',
        media: {
          path: '/',
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
          t2: routes.services.children.outplacementAndCareerCoaching?.ui,
        },
        url: routes.services.children.outplacementAndCareerCoaching?.path,
      },
    },
  },
  outplacementAndCareerCoaching: {
    type: routes.services.children.outplacementAndCareerCoaching?.path,
    data: {
      intro: {
        title: 'Outplacement & Career Coaching',
        desc: 'Need-based relocation and career coaching for employees.',
        small:
          'We offer your employees from the company of a professional to this need-based relocation and career coaching service.',
        media: {
          path: '/',
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
          t2: routes.services.children.hrCoachingAndTraining?.ui,
        },
        url: routes.services.children.hrCoachingAndTraining?.path,
      },
    },
  },
  hrCoachingAndTraining: {
    type: routes.services.children.hrCoachingAndTraining?.path,
    data: {
      intro: {
        title: 'HR Coaching & Training',
        desc: 'Effective coaching and training for improved management skills.',
        small:
          'Leadership, communication, teamwork, performance, etc. We provide coaching and training that will enable you to manage issues more effectively.',
        media: {
          path: '/',
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
          t2: routes.services.children.hrMapping?.ui,
        },
        url: routes.services.children.hrMapping?.path,
      },
    },
  },
  hrMapping: {
    type: routes.services.children.hrMapping?.path,
    data: {
      intro: {
        title: 'HR Mapping',
        desc: 'Data analysis and reporting on job-related skills, experience, and education.',
        small:
          'We analyze and report the data related to the current job by analyzing the equipment such as skills, experience and education level of the enterprises.',
        media: {
          path: '/',
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
          t2: routes.services.children.organisationalDueDiligence?.ui,
        },
        url: routes.services.children.organisationalDueDiligence?.path,
      },
    },
  },
  organisationalDueDiligence: {
    type: routes.services.children.organisationalDueDiligence?.path,
    data: {
      intro: {
        title: 'Organisational Due Diligence',
        desc: 'Analysis of HR policy, management requirements, and workforce dynamics.',
        small:
          "We analyze the human resources policy and management's requirements, ethical values and workforce traffic.",
        media: {
          path: '/',
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
          t2: routes.services.children.managementAuditAndBenchmarking?.ui,
        },
        url: routes.services.children.managementAuditAndBenchmarking?.path,
      },
    },
  },
  managementAuditAndBenchmarking: {
    type: routes.services.children.managementAuditAndBenchmarking?.path,
    data: {
      intro: {
        title: 'Management Audit & Benchmarking',
        desc: 'Comprehensive analysis and benchmarking of HR management and workforce.',
        small:
          'We analyze the human resources management and workforce of your business, compare them with similar businesses and report them.',
        media: {
          path: '/',
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
          t2: routes.services.children.executiveSearchAndRecruitment?.ui,
        },
        url: routes.services.children.executiveSearchAndRecruitment?.path,
      },
    },
  },
}

const Services = ({ data }: any) => {
  return <Detail pageData={data.data} pageType={data.type} />
}

export const getStaticPaths: GetStaticPaths<any> = async () => {
  let paths: any[] = []
  const subRoutes = { ...routes.services.children }
  Object.values(subRoutes).map((value) => {
    paths = [...paths, { params: { slug: [value.path] } }]
  })

  return {
    paths, // indicates that no page needs be created at build time
    fallback: true, // indicates the type of fallback
  }
}

export async function getStaticProps(context: any) {
  const { slug } = context.params

  console.log('ctx', context)

  function getData() {
    const page = Object.values(services).filter((value) => {
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

export default Services
