import cn from 'clsx'

import BlazeSlider from '@/components/blaze-slider'
import Header from '@/components/header'
import { Image } from '@/components/image'
import NextItemMarquee from '@/components/next-item-marquee'
import ReferencesMarquee from '@/components/references-marquee'
import RequestDemo from '@/components/request-demo'
import Subscribe from '@/components/subscribe'
import { Layout } from '@/layouts/default'
import s from './about.module.scss'

const About = () => {
  const references = [
    { logo: '/img/wired.svg', url: '/' },
    { logo: '/img/wired.svg', url: '/' },
    { logo: '/img/wired.svg', url: '/' },
    { logo: '/img/wired.svg', url: '/' },
    { logo: '/img/wired.svg', url: '/' },
    { logo: '/img/wired.svg', url: '/' },
  ]

  return (
    <Layout>
      <>
        <section className={cn(s.intro, 'content-box-sm')}>
          <Header />
          <div className={s.inner}>
            <RequestDemo />
            <div className={cn(s.imgC, s.gurl)}>
              <Image
                alt="Feature Icons"
                height={1080}
                src={`/img/cloud.png`}
                style={{ objectFit: 'contain' }}
                width={1270}
              />
            </div>
            <div className={cn(s.imgC, s.allInOne)}>
              <Image
                alt="Feature Icons"
                height={1080}
                src={`/img/all-in-one.png`}
                style={{ objectFit: 'contain' }}
                width={1270}
              />
            </div>
          </div>
        </section>

        <section className={s.marqueeC}>
          <ReferencesMarquee items={references} />
        </section>

        <section className="content-box-md">
          <div className={s.peopleFirst}>
            <div className={s.imgs}>
              <div className={s.imgC}>
                <Image
                  alt="Feature Icons"
                  height={1080}
                  src={`/img/conversation.jpg`}
                  width={1270}
                />
              </div>
              <div className={s.imgC}>
                <Image
                  alt="Feature Icons"
                  height={1080}
                  style={{ objectFit: 'contain' }}
                  src={`/img/app.png`}
                  width={1270}
                />
              </div>
            </div>
            <div className={s.text}>
              <h3 className={s.title}>
                We Put <br /> People First
              </h3>
              <p className={s.par}>
                We believe that the heart of any successful business lies in its
                people. Layers is built on the foundation of enhancing employee
                experiences, fostering engagement, and driving productivity.
              </p>
              <p className={s.par}>
                With our innovative features and user-friendly interface, we aim
                to revolutionize the way you manage your HR functions, allowing
                you to focus on what truly matters – your employees.
              </p>
            </div>
          </div>

          <div className={s.services}>
            <div className={s.title}>Our Value-added Services.</div>
            <div className={s.grid}>
              <div className={s.gridItem}>
                <div className={s.iconC}>
                  <Image
                    alt="Feature Icons"
                    height={100}
                    src={`/img/dart.png`}
                    style={{ objectFit: 'contain' }}
                    width={100}
                  />
                </div>
                <p className={s.par}>
                  We understand that managing human resources involves more than
                  just basic functions, which is why we have developed a range
                  of specialized services tailored to meet the unique needs of
                  your organization.
                </p>
              </div>
              <div className={s.gridItem}>
                <div className={s.iconC}>
                  <Image
                    alt="Feature Icons"
                    height={100}
                    src={`/img/megaphone.png`}
                    style={{ objectFit: 'contain' }}
                    width={100}
                  />
                </div>
                <p className={s.par}>
                  We understand that managing human resources involves more than
                  just basic functions, which is why we have developed a range
                  of specialized services tailored to meet the unique needs of
                  your organization.
                </p>
              </div>
              <div className={s.gridItem}>
                <div className={s.iconC}>
                  <Image
                    alt="Feature Icons"
                    height={100}
                    src={`/img/bell.png`}
                    style={{ objectFit: 'contain' }}
                    width={100}
                  />
                </div>
                <p className={s.par}>
                  We understand that managing human resources involves more than
                  just basic functions, which is why we have developed a range
                  of specialized services tailored to meet the unique needs of
                  your organization.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className={s.slidesC}>
            <BlazeSlider className={s.slides} slidesToShow={3}>
              <div className={s.slideItem}>lol - 1</div>
              <div className={s.slideItem}>lol - 2</div>
              <div className={s.slideItem}>lol - 3</div>
              <div className={s.slideItem}>lol - 4</div>
              <div className={s.slideItem}>lol - 5</div>
              <div className={s.slideItem}>lol - 6</div>
              <div className={s.slideItem}>lol - 7</div>
            </BlazeSlider>
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

export default About
