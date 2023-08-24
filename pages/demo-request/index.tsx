import s from './demo-request.module.scss'

import { GetServerSideProps } from 'next'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import ContactForm from '@/components/contact-form'
import { FormType } from '@/components/contact-form/types'
import Subscribe from '@/components/subscribe'
import { Layout } from '@/layouts/default'

const DemoRequest = () => {
  const { t } = useTranslation('demoRequest')

  return (
    <Layout theme="main">
      <>
        <section className="content-box-sm">
          <div className={s.text}>
            <h1>{t('title')}</h1>
            <p>{t('desc')}</p>
            <small>{t('small')}</small>
          </div>
          <div className={s.contactFormC}>
            <ContactForm formType={FormType.demo} />
          </div>
        </section>

        <Subscribe />
      </>
    </Layout>
  )
}

// or getServerSideProps: GetServerSideProps<Props> = async ({ locale })
export const getServerSideProps: GetServerSideProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'en', [
      'contactForm',
      'demoRequest',
      'common',
    ])),
  },
})

export default DemoRequest
