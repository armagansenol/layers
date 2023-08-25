import { GetStaticPaths, GetStaticProps } from 'next'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { ParsedUrlQuery } from 'querystring'

import { CustomHead } from '@/components/custom-head'
import { features, routes } from '@/global'
import { Layout } from '@/layouts/default'
import Detail from '@/layouts/detail'

interface IParams extends ParsedUrlQuery {
  slug: string
  locale: string
}

const Features = ({ data }: any) => {
  const { t } = useTranslation('common')

  return (
    <Layout theme="features">
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

  Object.values(routes.en.features.children).map((value) => {
    paths = [...paths, { params: { slug: [value.path] }, locale: 'en' }]
  })

  Object.values(routes.tr.features.children).map((value) => {
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
      locale === 'en' ? features.en : features.tr
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
        'features',
        'common',
        'detail',
      ])),
    },
  }
}

export default Features
