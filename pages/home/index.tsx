import s from './home.module.scss'

import cn from 'clsx'

import Button from '@/components/button'
import CardStack from '@/components/card-stack'
import HomeSlider from '@/components/home-slider'
import { Image } from '@/components/image'
import NextItemMarquee from '@/components/next-item-marquee'
import PinnedFeatures from '@/components/pinned-features'
import ReferencesMarquee from '@/components/references-marquee'
import RequestDemo from '@/components/request-demo'
import Subscribe from '@/components/subscribe'
import WhyLayers from '@/components/why-layers'
import { MainRoute } from '@/global'
import { Layout } from '@/layouts/default'
import { useMenuStore } from '@/lib/menuStore'

const Home = () => {
  const { setIsOpen, setCurrentRoute } = useMenuStore()

  const references = [
    { logo: '/img/wired.svg', url: '/' },
    { logo: '/img/wired.svg', url: '/' },
    { logo: '/img/wired.svg', url: '/' },
    { logo: '/img/wired.svg', url: '/' },
    { logo: '/img/wired.svg', url: '/' },
    { logo: '/img/wired.svg', url: '/' },
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
        <section className={cn(s.intro, 'content-box-sm')}>
          <HomeSlider />
        </section>

        <section className={cn(s.whyLayersC, 'content-box-md')}>
          <RequestDemo />
          <WhyLayers />
          <PinnedFeatures />
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
            <NextItemMarquee
              text={{ t1: 'See All Features', t2: 'See All Features' }}
              url="/"
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
                <Image
                  className={s.img}
                  src="/img/bike.jpg"
                  alt="alt"
                  height={1000}
                  width={1000}
                />
              </div>

              <div className={cn(s.imgC, 'hidden-overflow')}>
                <Image
                  className={s.img}
                  src="/img/cat.jpg"
                  alt="alt"
                  height={1000}
                  width={1000}
                />
              </div>
            </div>
          </div>
        </section>

        <ReferencesMarquee items={references} />

        <section className="content-box-lg">
          <div className={s.flexible}>
            <div className={s.text}>
              <h2 className={s.title}>
                <span>
                  flexible{' '}
                  <span className={s.underline}>
                    <Image
                      src="/img/marker-flexible.svg"
                      alt="Pin"
                      width="122"
                      height="137"
                      style={{ objectFit: 'contain' }}
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
                <Image
                  alt="alt"
                  className={s.img}
                  height="1000"
                  src="/img/basketball.jpg"
                  width="1000"
                />
              </div>
              <div className={cn(s.sticker, s.hours)}>
                <Image
                  src="/img/6-hours.svg"
                  alt="6 hours"
                  style={{ objectFit: 'contain' }}
                  width="206"
                  height="193"
                />
              </div>
              <div className={cn(s.sticker, s.laptop)}>
                <Image
                  src="/img/laptop.png"
                  alt="6 hours"
                  width="206"
                  height="193"
                  style={{ objectFit: 'contain' }}
                />
              </div>
              <div className={cn(s.sticker, s.hybrid)}>
                <Image
                  src="/img/hybrid.svg"
                  alt="Hybrid Digital Solutions"
                  width="146"
                  height="137"
                  style={{ objectFit: 'contain' }}
                />
              </div>
              <div className={cn(s.sticker, s.swoosh)}>
                <Image
                  src="/img/swoosh.png"
                  alt="Swoosh"
                  width="161"
                  height="169"
                  style={{ objectFit: 'contain' }}
                />
              </div>
              <div className={cn(s.sticker, s.pin)}>
                <Image
                  src="/img/pin.png"
                  alt="Pin"
                  width="122"
                  height="137"
                  style={{ objectFit: 'contain' }}
                />
              </div>
            </div>
          </div>
        </section>

        <section className={'trial-c'}>
          <NextItemMarquee
            text={{ t1: 'Started Now', t2: '30 Day Free Trial' }}
            url="/"
          />
        </section>

        <Subscribe />
      </>
    </Layout>
  )
}

export default Home
