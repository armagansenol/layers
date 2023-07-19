import HomeSlider from '@/components/home-slider'
import NextItemMarquee from '@/components/next-item-marquee'
import RequestDemo from '@/components/request-demo'
import Subscribe from '@/components/subscribe'
import WhyLayers from '@/components/why-layers'
import { Layout } from '@/layouts/default'
import cn from 'clsx'
import s from './home.module.scss'
import PinnedFeatures from '@/components/pinned-features'
import Button from '@/components/button'
import { Marquee } from '@/components/marquee'
import { Image } from '@/components/image'

const Home = () => {
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
            cards
          </div>
          <NextItemMarquee
            text={{ t1: 'See All Features', t2: 'See All Features' }}
            url="/"
          />
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

        <section className={s.references}>
          <Marquee duration={30}>
            <>
              <div className={s.iconC}>
                <img src="/img/layers-logo.svg" alt="Layers Logo" />
              </div>
              <div className={s.iconC}>
                <img src="/img/layers-logo.svg" alt="Layers Logo" />
              </div>
              <div className={s.iconC}>
                <img src="/img/layers-logo.svg" alt="Layers Logo" />
              </div>
              <div className={s.iconC}>
                <img src="/img/layers-logo.svg" alt="Layers Logo" />
              </div>
              <div className={s.iconC}>
                <img src="/img/layers-logo.svg" alt="Layers Logo" />
              </div>
              <div className={s.iconC}>
                <img src="/img/layers-logo.svg" alt="Layers Logo" />
              </div>
              <div className={s.iconC}>
                <img src="/img/layers-logo.svg" alt="Layers Logo" />
              </div>
              <div className={s.iconC}>
                <img src="/img/layers-logo.svg" alt="Layers Logo" />
              </div>
              <div className={s.iconC}>
                <img src="/img/layers-logo.svg" alt="Layers Logo" />
              </div>
            </>
          </Marquee>
        </section>

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
              <img
                className={s.img}
                src="https://images.unsplash.com/photo-1688504278800-fcbd88b2ea82?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1076&q=80"
                alt="alt"
              />
            </div>
            <div className={cn(s.sticker, s.hours)}>
              <Image
                src="/img/6-hours.svg"
                alt="6 hours"
                width="146"
                height="137"
                style={{ objectFit: 'contain' }}
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
