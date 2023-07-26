import { routes } from '@/global'
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
  empployeeCenterAndHrPortal: {
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
}

const Features = ({ data }: any) => {
  return <Detail pageData={data} />
}

export const getStaticPaths: GetStaticPaths<any> = async () => {
  return {
    paths: [
      { params: { slug: [routes.features.children.employeeDatabase?.path] } },
      {
        params: {
          slug: [routes.features.children.employeeCenterAndHrPortal?.path],
        },
      },
    ], // indicates that no page needs be created at build time
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

  const data = getData().data

  return {
    props: {
      data,
    },
  }
}

export default Features
