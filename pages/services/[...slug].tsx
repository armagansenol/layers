import { GetStaticPaths, GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { ParsedUrlQuery } from 'querystring'
import { useTranslation } from 'react-i18next'

import { CustomHead } from '@/components/custom-head'
import { routes, services } from '@/global'
import { Layout } from '@/layouts/default'
import Detail from '@/layouts/detail'

interface IParams extends ParsedUrlQuery {
  slug: string
  locale: string
}

const Services = ({ data }: any) => {
  const { t } = useTranslation('common')

  return (
    <Layout theme="services">
      <>
        <CustomHead
          title={`${t('seo.features')} | ${data.data.intro.title}`}
          description={data.data.intro.desc}
        />
        <Detail pageData={data.data} pageType={data.type} />
      </>
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = () => {
  let paths: { params: { slug: string[] }; locale: string }[] = []

  Object.values(routes.en.services.children).map((value) => {
    paths = [...paths, { params: { slug: [value.path] }, locale: 'en' }]
  })

  Object.values(routes.tr.services.children).map((value) => {
    paths = [...paths, { params: { slug: [value.path] }, locale: 'tr' }]
  })

  return {
    paths, // indicates that no page needs be created at build time
    fallback: false, // indicates the type of fallback
  }
}

export const getStaticProps: GetStaticProps = async ({ params, locale }) => {
  const { slug } = params as IParams

  function getData() {
    const page = Object.values(
      locale === 'en' ? services.en : services.tr
    ).filter((value) => {
      return value.type === slug[0]
    })

    return page[0]
  }

  const data = getData() ?? null

  return {
    props: {
      data,
      ...(await serverSideTranslations(locale ?? 'en', [
        'services',
        'common',
        'detail',
      ])),
    },
  }
}

export default Services
