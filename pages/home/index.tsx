import s from './home.module.scss'

import cn from 'clsx'

import Button from '@/components/button'
import HomeSlider from '@/components/home-slider'
import { Image } from '@/components/image'
import NextItemMarquee from '@/components/next-item-marquee'
import PinnedFeatures from '@/components/pinned-features'
import ReferencesMarquee from '@/components/references-marquee'
import RequestDemo from '@/components/request-demo'
import Subscribe from '@/components/subscribe'
import WhyLayers from '@/components/why-layers'
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
    setCurrentRoute('features')
  }

  return (
    <Layout>
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
          <div className={cn(s.cards, 'content-box-lg', 'flex-center')}>
            <div className={s.videoC} style={{ width: '200px' }}>
              <video
                style={{ width: '100%', height: '100%' }}
                className={s.video}
                // src="https://www.apple.com/media/us/mac-pro/2013/16C1b6b5-1d91-4fef-891e-ff2fc1c1bb58/videos/macpro_main_desktop.mp4"
                src="/video/gif.mp4"
                autoPlay
                muted
                loop
                // controls
              ></video>
            </div>
          </div>
          <div className={s.trigger} onClick={toFeatures}>
            <NextItemMarquee
              text={{ t1: 'See All Features', t2: 'See All Features' }}
              url="/"
            />
          </div>
        </section>

        <section className={cn(s.photo, 'content-box-md')}>
          <div className={s.textt}>
            <h2 className={s.title}>Human Resources Services</h2>
            <p>
              We provide customized human resources solutions for all of your
              business needs, utilizing our team of professionals and advanced
              technologies.
            </p>
            <Button text="See All Services" path="/" size="md" />
          </div>
          <div className={s.imgs}>
            <div className={s.imgC}>
              <img
                className={s.img}
                src="https://images.unsplash.com/photo-1688504278800-fcbd88b2ea82?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1076&q=80"
                alt="alt"
              />
            </div>

            <div className={s.imgC}>
              <img
                className={s.img}
                src="https://images.unsplash.com/photo-1688504278800-fcbd88b2ea82?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1076&q=80"
                alt="alt"
              />
            </div>
          </div>
        </section>

        <ReferencesMarquee items={references} />

        <section className={cn(s.flexible, 'content-box-lg')}>
          <div className={s.textt}>
            <h2 className={s.title}>
              <span className={s.dreamBeliever}>
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
            <div className={s.imgC}>
              <Image
                alt="alt"
                className={s.img}
                height="137"
                src="https://images.unsplash.com/photo-1688504278800-fcbd88b2ea82?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1076&q=80"
                width="146"
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
        </section>

        <section className={s.trialC}>
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
