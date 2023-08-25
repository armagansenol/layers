import s from './home/home.module.scss'

import cn from 'clsx'

import type { GetServerSideProps } from 'next'
import { Trans, useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useMedia } from 'react-use'

import Button from '@/components/button'
import CardStack from '@/components/card-stack'
import CustomImage from '@/components/custom-image'
import { CustomLink } from '@/components/custom-link'
import HomeSlider from '@/components/home-slider'
import MarqueeLink from '@/components/marquee-link'
import MarqueeReferences from '@/components/marquee-references'
import PinnedFeatures from '@/components/pinned-features'
import PoppingTitle from '@/components/popping-title'
import Subscribe from '@/components/subscribe'
import WhyLayers from '@/components/why-layers'
import { MainRoute } from '@/global'
import { Layout } from '@/layouts/default'
import { useMenuStore } from '@/lib/store/menu'

const Home = () => {
  const { setIsOpen, setCurrentRoute, setHamburger } = useMenuStore()
  const { t } = useTranslation('home')
  const isMobile = useMedia('(max-width: 800px)', true)

  const slides = [
    {
      title: t('slider.s1.title'),
      desc: t('slider.s1.desc'),
      img: {
        src: '/img/downtown.jpg',
        alt: 'Lady',
      },
      btn: {
        text: t('slider.s1.btn.text'),
        path: t('slider.s1.btn.path'),
      },
    },
    {
      title: t('slider.s2.title'),
      desc: t('slider.s2.desc'),
      img: {
        src: '/img/conference.jpg',
        alt: 'Conference',
      },
      btn: {
        text: t('slider.s2.btn.text'),
        path: t('slider.s2.btn.path'),
      },
    },
  ]

  const references = [
    { logo: '/img/wired.svg' },
    { logo: '/img/microsoft.svg' },
    { logo: '/img/blizzard.svg' },
    { logo: '/img/uber.svg' },
    { logo: '/img/walmart.svg' },
  ]

  function toFeatures() {
    isMobile && setHamburger()
    setIsOpen(true)
    setCurrentRoute(MainRoute.features)
  }

  function toServices() {
    isMobile && setHamburger()
    setIsOpen(true)
    setCurrentRoute(MainRoute.services)
  }

  return (
    <Layout theme="main">
      <>
        <section className="content-box-sm">
          <HomeSlider slides={slides} />
        </section>

        <section className="content-box-md">
          <div className={s.whyLayersC}>
            <PoppingTitle />
            <WhyLayers />
            <PinnedFeatures />
          </div>
        </section>

        <section className={cn(s.features)}>
          <h2>
            <Trans i18nKey="features.title" components={{ strong: <strong /> }}>
              {t('features.title')}
            </Trans>
          </h2>
          <div className={cn(s.cards)}>
            <CardStack />
          </div>
          <div className={s.callToAction} onClick={toFeatures}>
            <MarqueeLink
              text={{
                t1: t('features.marqueeLink.p1'),
                t2: t('features.marqueeLink.p2'),
              }}
            />
          </div>
        </section>

        <section className="content-box-md">
          <div className={s.hrServices}>
            <div className={s.text}>
              <h2 className={s.title}>{t('hrServices.title')}</h2>
              <p>{t('hrServices.desc')}</p>
              <Button
                text={t('hrServices.btn.text')}
                size="md"
                callback={toServices}
              />
            </div>
            <div className={s.imgs}>
              <div className={cn(s.imgC, 'hidden-overflow')}>
                <CustomImage
                  alt="Man on phone call"
                  height={1000}
                  loading="lazy"
                  src="/img/bike.jpg"
                  width={1000}
                />
              </div>

              <div className={cn(s.imgC, 'hidden-overflow')}>
                <CustomImage
                  alt="Lady studying with a cat"
                  height={1000}
                  loading="lazy"
                  src="/img/cat.jpg"
                  width={1000}
                />
              </div>
            </div>
          </div>
        </section>

        <section className={s.references}>
          <MarqueeReferences items={references} />
        </section>

        <section className="content-box-lg">
          <div className={s.flexible}>
            <div className={s.text}>
              <h2 className={s.title}>
                <span>
                  {t('flexible.title.p1')}{' '}
                  <span className={s.underline}>
                    <CustomImage
                      alt="Underline"
                      height={137}
                      style={{ objectFit: 'contain' }}
                      src="/img/marker-flexible.svg"
                      width={122}
                    />
                  </span>{' '}
                </span>{' '}
                {t('flexible.title.p2')}
              </h2>
              <p>
                {t('flexible.desc.p1')} <br /> {t('flexible.desc.p2')}
              </p>
            </div>
            <div className={s.imgs}>
              <div className={cn(s.imgC, 'hidden-overflow')}>
                <CustomImage
                  alt="Teenage playing basketball"
                  className={s.img}
                  height={1000}
                  loading="lazy"
                  src="/img/basketball.jpg"
                  width={1000}
                />
              </div>
              <div className={cn(s.sticker, s.hours)}>
                <CustomImage
                  alt="6 hours"
                  loading="lazy"
                  style={{ objectFit: 'contain' }}
                  src="/img/6-hours.svg"
                  height={300}
                  width={300}
                />
              </div>
              <div className={cn(s.sticker, s.laptop)}>
                <CustomImage
                  alt="Laptop"
                  height={300}
                  loading="lazy"
                  style={{ objectFit: 'contain' }}
                  src="/img/laptop.png"
                  width={300}
                />
              </div>
              <div className={cn(s.sticker, s.hybrid)}>
                <CustomImage
                  alt="Hybrid Digital Solutions"
                  height={300}
                  loading="lazy"
                  style={{ objectFit: 'contain' }}
                  src="/img/hybrid.svg"
                  width={300}
                />
              </div>
              <div className={cn(s.sticker, s.swoosh)}>
                <CustomImage
                  alt="Swoosh"
                  height={300}
                  loading="lazy"
                  style={{ objectFit: 'contain' }}
                  src="/img/swoosh.png"
                  width={300}
                />
              </div>
              <div className={cn(s.sticker, s.pin)}>
                <CustomImage
                  alt="Pin"
                  height={300}
                  loading="lazy"
                  style={{ objectFit: 'contain' }}
                  src="/img/pin.png"
                  width={300}
                />
              </div>
            </div>
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
    ...(await serverSideTranslations(locale ?? 'en', ['home', 'common'])),
  },
})

export default Home
