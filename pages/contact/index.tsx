import s from './contact.module.scss'

import ContactForm from '@/components/contact-form'
import { FormType } from '@/components/contact-form/types'
import CustomImage from '@/components/custom-image'
import { CustomLink } from '@/components/custom-link'
import { Marquee } from '@/components/marquee'
import MarqueeLink from '@/components/marquee-link'
import Subscribe from '@/components/subscribe'
import { Layout } from '@/layouts/default'

const Contact = () => {
  return (
    <Layout theme="main">
      <>
        <section className="content-box-sm">
          <div className={s.text}>
            <h1>Contact Us</h1>
            <p>Let’s have a conversation about your HR needs.</p>
            <small>
              Drop us a line or use <span>the contact form</span> below to get
              in touch.
            </small>
            <div className={s.contactInfo}>
              <div className={s.detail}>
                <label>Email</label>
                <p>hello@layersup.com</p>
              </div>
              <div className={s.detail}>
                <label>Address</label>
                <p>Balkan Cd. 62/A Ümraniye, İstanbul, Türkiye</p>
              </div>
            </div>
          </div>
        </section>

        <section className={s.marqueeC}>
          <Marquee repeat={2} duration={20}>
            <div className={s.inner}>
              <h2 className={s.first}>Get in Touch</h2>
              <div className={s.iconC}>
                <CustomImage
                  alt="Man on phone call"
                  height={300}
                  loading="lazy"
                  src="/img/wave.png"
                  width={300}
                />
              </div>
              <h2 className={s.second}>Say Hello !</h2>
              <div className={s.iconC}>
                <CustomImage
                  alt="Man on phone call"
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
          <MarqueeLink text={{ t1: 'Started Now', t2: '30 Day Free Trial' }} />
        </CustomLink>

        <Subscribe />
      </>
    </Layout>
  )
}

export default Contact
