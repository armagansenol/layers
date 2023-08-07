import s from './get-an-offer.module.scss'

import ContactForm from '@/components/contact-form'
import NextItemMarquee from '@/components/next-item-marquee'
import Subscribe from '@/components/subscribe'
import { Layout } from '@/layouts/default'

const GetAnOffer = () => {
  return (
    <Layout theme="main">
      <>
        <section className="content-box-sm">
          <div className={s.text}>
            <h1>Get an Offer</h1>
            <p>
              Unleash HR excellence with our <span>exclusive offer</span> for
              Layers HR Services.
            </p>
          </div>
          <div className={s.contactFormC}>
            <ContactForm formType="service" />
          </div>
        </section>

        <section className="trial-c">
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

export default GetAnOffer
