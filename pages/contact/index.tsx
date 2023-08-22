import s from './contact.module.scss'

import { GetServerSideProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { Trans, useTranslation } from 'next-i18next'

import ContactForm from '@/components/contact-form'
import { FormType } from '@/components/contact-form/types'
import CustomImage from '@/components/custom-image'
import { CustomLink } from '@/components/custom-link'
import { Marquee } from '@/components/marquee'
import MarqueeLink from '@/components/marquee-link'
import Subscribe from '@/components/subscribe'
import { Layout } from '@/layouts/default'

const Contact = () => {
  const { t } = useTranslation('contact')

  return (
    <Layout theme="main">
      <>
        <section className="content-box-sm">
          <div className={s.text}>
            <h1>{t('title')}</h1>
            <p>{t('desc')}</p>
            <small>
              <Trans i18nKey="desc" components={{ span: <span /> }}>
                {t('small')}
              </Trans>
            </small>
            <div className={s.contactInfo}>
              <div className={s.detail}>
                <label>{t('info.email')}</label>
                <CustomLink href="mailto:hello@layersup.com" className={s.link}>
                  hello@layersup.com
                </CustomLink>
              </div>
              <div className={s.detail}>
                <label>{t('info.address')}</label>
                <CustomLink
                  href="https://www.google.com/maps/place/JUSTWork/@41.0234497,29.1265974,15z/data=!4m6!3m5!1s0x14cac9bf107aba8d:0x5af99b7e2004cb13!8m2!3d41.0234497!4d29.1265974!16s%2Fg%2F11fm2n73hv?entry=ttu"
                  external
                  className={s.link}
                >
                  Balkan Cd. 62/A Ümraniye, İstanbul, Türkiye
                </CustomLink>
              </div>
            </div>
          </div>
        </section>

        <section className={s.marqueeC}>
          <Marquee repeat={2} duration={20}>
            <div className={s.inner}>
              <h2 className={s.first}>{t('marquee.p1')}</h2>
              <div className={s.iconC}>
                <CustomImage
                  alt="Wave Emoji"
                  height={300}
                  loading="lazy"
                  src="/img/wave.png"
                  width={300}
                />
              </div>
              <h2 className={s.second}>{t('marquee.p2')}</h2>
              <div className={s.iconC}>
                <CustomImage
                  alt="Wave Emoji"
                  height={300}
                  loading="lazy"
                  src="/img/wave.png"
                  width={300}
                />
              </div>
            </div>
          </Marquee>
        </section>

        <section className="content-box-lg">
          <div className={s.contactFormC}>
            <ContactForm formType={FormType.contact} />
          </div>
        </section>

        <CustomLink href="/demo-request" className="trial-c">
          <MarqueeLink
            text={{ t1: t('common:trial.p1'), t2: t('common:trial.p2') }}
          />
        </CustomLink>

        <Subscribe />
      </>
    </Layout>
  )
}

// or getServerSideProps: GetServerSideProps<Props> = async ({ locale })
export const getServerSideProps: GetServerSideProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'en', ['contact', 'common'])),
  },
})

export default Contact
