import s from './about.module.scss'

import cn from 'clsx'
import { EmblaOptionsType } from 'embla-carousel-react'

import EmblaCarousel from '@/components/embla-carousel'
import Image from '@/components/image'
import MarqueeLink from '@/components/marquee-link'
import MarqueeReferences from '@/components/marquee-references'
import RequestDemo from '@/components/request-demo'
import Subscribe from '@/components/subscribe'
import { Layout } from '@/layouts/default'
import { Link } from '@/components/link'

const OPTIONS: EmblaOptionsType = {
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
            <Image
              src={props.img}
              alt="Your alt text"
              width={1500}
              height={1500}
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

const SLIDES = [
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

const About = () => {
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

        <section className={s.references}>
          <MarqueeReferences items={references} />
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
            <div className={s.title}>Our Value-added Services</div>
            <div className={s.grid}>
              <div className={s.gridItem}>
                <div className={s.iconC}>
                  <Image
                    alt="Service Icons"
                    height={500}
                    src={`/img/dart.png`}
                    style={{ objectFit: 'contain' }}
                    width={500}
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
                    alt="Service Icons"
                    height={500}
                    src={`/img/megaphone.png`}
                    style={{ objectFit: 'contain' }}
                    width={500}
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
                    alt="Service Icons"
                    height={500}
                    src={`/img/bell.png`}
                    style={{ objectFit: 'contain' }}
                    width={500}
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

        <section className={s.testimonials}>
          <h4>What Clients Say About Layers</h4>
          <EmblaCarousel
            slides={SLIDES.map((data, i) => {
              return <Slide key={i} {...data} />
            })}
            options={OPTIONS}
            slideSpacing={30}
          />
        </section>

        <Link href="/demo-request" className={'trial-c'}>
          <MarqueeLink text={{ t1: 'Started Now', t2: '30 Day Free Trial' }} />
        </Link>

        <Subscribe />
      </>
    </Layout>
  )
}

export default About
