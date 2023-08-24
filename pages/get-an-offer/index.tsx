import s from './get-an-offer.module.scss'

import { Trans, useTranslation } from 'next-i18next'
import { GetServerSideProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import ContactForm from '@/components/contact-form'
import MarqueeLink from '@/components/marquee-link'
import Subscribe from '@/components/subscribe'
import { Layout } from '@/layouts/default'
import { CustomLink } from '@/components/custom-link'
import { FormType } from '@/components/contact-form/types'

const GetAnOffer = () => {
  const { t } = useTranslation('getAnOffer')

  return (
    <Layout theme="main">
      <>
        <section className="content-box-sm">
          <div className={s.text}>
            <h1>{t('title')}</h1>
            <p>
              <Trans i18nKey="desc" components={{ span: <span /> }}>
                {t('desc')}
              </Trans>
            </p>
          </div>
          <div className={s.contactFormC}>
            <ContactForm formType={FormType.service} />
          </div>
        </section>

        <CustomLink href="/demo-request" className="trial-c">
          <MarqueeLink text={{ t1: t('trial.p1'), t2: t('trial.p2') }} />
        </CustomLink>

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
      'getAnOffer',
      'common',
    ])),
  },
})

export default GetAnOffer
