import s from '../pages/home/home.module.scss'

import cn from 'clsx'

import type { GetServerSideProps } from 'next'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import Button from '@/components/button'
import CardStack from '@/components/card-stack'
import HomeSlider from '@/components/home-slider'
import CustomImage from '@/components/custom-image'
import { Link } from '@/components/link'
import MarqueeLink from '@/components/marquee-link'
import MarqueeReferences from '@/components/marquee-references'
import PinnedFeatures from '@/components/pinned-features'
import RequestDemo from '@/components/request-demo'
import Subscribe from '@/components/subscribe'
import WhyLayers from '@/components/why-layers'
import { MainRoute } from '@/global'
import { Layout } from '@/layouts/default'
import { useMenuStore } from '@/lib/menuStore'

const Home = () => {
  const { setIsOpen, setCurrentRoute } = useMenuStore()
  const { t } = useTranslation('home')

  const references = [
    { logo: '/img/wired.svg' },
    { logo: '/img/microsoft.svg' },
    { logo: '/img/blizzard.svg' },
    { logo: '/img/uber.svg' },
    { logo: '/img/walmart.svg' },
  ]

  function toFeatures() {
    setIsOpen(true)
    setCurrentRoute(MainRoute.features)
  }

  function toServices() {
    setIsOpen(true)
    setCurrentRoute(MainRoute.services)
  }

  return (
    <Layout theme="main">
      <>
        <section className="content-box-sm">
          <HomeSlider />
        </section>

        <section className="content-box-md">
          <div className={s.whyLayersC}>
            <RequestDemo />
            <WhyLayers />
            <PinnedFeatures />
          </div>
        </section>

        <section className={cn(s.features)}>
          <h2>
            Succeed in all <strong>Layers</strong> of employee management with
            our <strong>all-in-one </strong>
            software.
          </h2>
          <div className={cn(s.cards)}>
            <CardStack />
          </div>
          <div className={s.callToAction} onClick={toFeatures}>
            <MarqueeLink
              text={{ t1: 'See All Features', t2: 'See All Features' }}
            />
          </div>
        </section>

        <section className="content-box-md">
          <div className={s.hrServices}>
            <div className={s.text}>
              <h2 className={s.title}>Human Resources Services</h2>
              <p>
                We provide customized human resources solutions for all of your
                business needs, utilizing our team of professionals and advanced
                technologies.
              </p>
              <Button text="See All Services" size="md" callback={toServices} />
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
                  flexible{' '}
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
                HR Management strategies!
              </h2>
              <p>
                Whenever you are doesn’t matter! <br /> Even if you are on the
                other side of the world, you can still manage your company with
                our hybrid digital solutions.
              </p>
            </div>
            <div className={s.imgs}>
              <div className={cn(s.imgC, 'hidden-overflow')}>
                <CustomImage
                  alt="Man playing basketball"
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

        <Link href="/demo-request" className="trial-c">
          <MarqueeLink text={{ t1: 'Started Now', t2: '30 Day Free Trial' }} />
        </Link>

        <Subscribe />
      </>
    </Layout>
  )
}

// or getServerSideProps: GetServerSideProps<Props> = async ({ locale })
export const getServerSideProps: GetServerSideProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'en', ['home'])),
  },
})

export default Home
