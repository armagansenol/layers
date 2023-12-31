import s from './about.module.scss'

import cn from 'clsx'
import { GetServerSideProps } from 'next'
import { Trans, useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import CustomImage from '@/components/custom-image'
import { CustomLink } from '@/components/custom-link'
import MarqueeLink from '@/components/marquee-link'
import MarqueeReferences from '@/components/marquee-references'
import Subscribe from '@/components/subscribe'
import { Layout } from '@/layouts/default'
import { CustomHead } from '@/components/custom-head'
import PoppingTitle from '@/components/popping-title'
import SliderTestimonials from '@/components/slider-testimonials'

const About = () => {
  const { t } = useTranslation('about')

  const references = [
    { logo: '/img/wired.svg' },
    { logo: '/img/microsoft.svg' },
    { logo: '/img/blizzard.svg' },
    { logo: '/img/uber.svg' },
    { logo: '/img/walmart.svg' },
  ]

  const slides = [
    {
      img: '/img/pinned-1.jpg',
      name: t('testimonials.slides.s1.name'),
      role: t('testimonials.slides.s1.role'),
      comment: t('testimonials.slides.s1.comment'),
    },
    {
      img: '/img/pinned-2.jpg',
      name: t('testimonials.slides.s1.name'),
      role: t('testimonials.slides.s1.role'),
      comment: t('testimonials.slides.s1.comment'),
    },
    {
      img: '/img/pinned-3.jpg',
      name: t('testimonials.slides.s1.name'),
      role: t('testimonials.slides.s1.role'),
      comment: t('testimonials.slides.s1.comment'),
    },
    {
      img: '/img/pinned-4.jpg',
      name: t('testimonials.slides.s1.name'),
      role: t('testimonials.slides.s1.role'),
      comment: t('testimonials.slides.s1.comment'),
    },
  ]

  return (
    <Layout theme="main">
      <>
        <CustomHead title={`Layers | ${t('common:seo.about')}`} />
        <section className="content-box-sm">
          <div className={s.intro}>
            <PoppingTitle type="requestADemo" />
            <div className={cn(s.imgC, s.gurl)}>
              <CustomImage
                alt="Lady at plaza"
                height={1080}
                src={`/img/cloud.png`}
                style={{ objectFit: 'contain' }}
                width={1270}
              />
            </div>
            <div className={cn(s.imgC, s.allInOne)}>
              <CustomImage
                alt="Feature Icons"
                height={300}
                src={`/img/all-in-one.png`}
                style={{ objectFit: 'contain' }}
                width={300}
              />
            </div>
          </div>
        </section>

        <section className={s.references}>
          <MarqueeReferences items={references} />
        </section>

        <section className="content-box-md">
          <div className={s.peopleFirst}>
            <div className={s.imgs}>
              <div className={s.imgC}>
                <CustomImage
                  alt="Meeting"
                  height={1080}
                  loading="lazy"
                  src={`/img/conversation.jpg`}
                  width={1270}
                />
              </div>
              <div className={s.imgC}>
                <CustomImage
                  alt="Feature Icons"
                  height={1080}
                  loading="lazy"
                  style={{ objectFit: 'contain' }}
                  src={`/img/app.png`}
                  width={1270}
                />
              </div>
            </div>
            <div className={s.text}>
              <h3>
                {t('box1.title.p1')} <br /> {t('box1.title.p2')}
              </h3>
              <Trans i18nKey="box1.desc" components={{ p: <p /> }}>
                {t('box1.desc')}
              </Trans>
            </div>
          </div>

          <div className={s.services}>
            <div className={s.title}>{t('box1.services.title')}</div>
            <div className={s.grid}>
              <div className={s.gridItem}>
                <div className={s.iconC}>
                  <CustomImage
                    alt="Service Icons"
                    height={500}
                    loading="lazy"
                    src={`/img/dart.png`}
                    style={{ objectFit: 'contain' }}
                    width={500}
                  />
                </div>
                <p>{t('box1.services.s1')}</p>
              </div>
              <div className={s.gridItem}>
                <div className={s.iconC}>
                  <CustomImage
                    alt="Service Icons"
                    height={500}
                    loading="lazy"
                    src={`/img/megaphone.png`}
                    style={{ objectFit: 'contain' }}
                    width={500}
                  />
                </div>
                <p>{t('box1.services.s2')}</p>
              </div>
              <div className={s.gridItem}>
                <div className={s.iconC}>
                  <CustomImage
                    alt="Service Icons"
                    height={500}
                    loading="lazy"
                    src={`/img/bell.png`}
                    style={{ objectFit: 'contain' }}
                    width={500}
                  />
                </div>
                <p>{t('box1.services.s3')}</p>
              </div>
            </div>
          </div>
        </section>

        {/* <section className={s.testimonials}>
          <h4>{t('testimonials.title')}</h4>
          <SliderTestimonials slides={slides} />
        </section> */}

        <CustomLink href="/demo-request" className="trial-c">
          <MarqueeLink text={{ t1: t('trial.p1'), t2: t('trial.p2') }} />
        </CustomLink>

        <Subscribe />
      </>
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'en', ['about', 'common'])),
  },
})

export default About
