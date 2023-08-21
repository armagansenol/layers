import s from './about.module.scss'

import cn from 'clsx'
import { EmblaOptionsType } from 'embla-carousel-react'
import { GetServerSideProps } from 'next'
import { Trans, useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import CustomImage from '@/components/custom-image'
import EmblaCarousel from '@/components/embla-carousel'
import { Link } from '@/components/link'
import MarqueeLink from '@/components/marquee-link'
import MarqueeReferences from '@/components/marquee-references'
import RequestDemo from '@/components/popping-title'
import Subscribe from '@/components/subscribe'
import { Layout } from '@/layouts/default'

const carouselOptions: EmblaOptionsType = {
  slidesToScroll: 1,
  breakpoints: {
    '(min-width: 800px)': { align: 0.1, containScroll: false },
  },
}

type Slide = {
  img: string
  name: string
  role: string
  comment: string
}

function Slide(props: Slide) {
  return (
    <>
      <div className={s.slide}>
        <div className={s.info}>
          <div className={s.imgC}>
            <CustomImage
              src={props.img}
              alt="Client Profile Photo"
              loading="lazy"
              width={500}
              height={500}
            />
          </div>
          <div className={s.text}>
            <p>{props.name}</p>
            <small>{props.role}</small>
          </div>
        </div>
        <p>{props.comment}</p>
      </div>
    </>
  )
}

const About = () => {
  const { t } = useTranslation('about')

  const slides = [
    {
      img: '/img/pinned-1.jpg',
      name: 'Ford Prefect',
      role: 'Future Mobility Specialist of Herman Group',
      comment:
        'Thanks to Layers, our employee onboarding experience has become seamless and efficient. The app’s features have saved us time and improved new hire engagement.',
    },
    {
      img: '/img/pinned-2.jpg',
      name: 'Ford Prefect',
      role: 'Future Mobility Specialist of Herman Group',
      comment:
        'Thanks to Layers, our employee onboarding experience has become seamless and efficient. The app’s features have saved us time and improved new hire engagement.',
    },
    {
      img: '/img/pinned-3.jpg',
      name: 'Ford Prefect',
      role: 'Future Mobility Specialist of Herman Group',
      comment:
        'Thanks to Layers, our employee onboarding experience has become seamless and efficient. The app’s features have saved us time and improved new hire engagement.',
    },
    {
      img: '/img/pinned-4.jpg',
      name: 'Ford Prefect',
      role: 'Future Mobility Specialist of Herman Group',
      comment:
        'Thanks to Layers, our employee onboarding experience has become seamless and efficient. The app’s features have saved us time and improved new hire engagement.',
    },
  ]

  const references = [
    { logo: '/img/wired.svg' },
    { logo: '/img/microsoft.svg' },
    { logo: '/img/blizzard.svg' },
    { logo: '/img/uber.svg' },
    { logo: '/img/walmart.svg' },
  ]

  return (
    <Layout theme="main">
      <>
        <section className="content-box-sm">
          <div className={s.intro}>
            <RequestDemo />
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

        <section className={s.testimonials}>
          <h4>What Clients Say About Layers</h4>
          <EmblaCarousel
            options={carouselOptions}
            slides={slides.map((data, i) => {
              return <Slide key={i} {...data} />
            })}
            slideSpacing={30}
          />
        </section>

        <Link href="/demo-request" className="trial-c">
          <MarqueeLink text={{ t1: t('trial.p1'), t2: t('trial.p2') }} />
        </Link>

        <Subscribe />
      </>
    </Layout>
  )
}

// or getServerSideProps: GetServerSideProps<Props> = async ({ locale })
export const getServerSideProps: GetServerSideProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'en', ['about', 'common'])),
  },
})

export default About
