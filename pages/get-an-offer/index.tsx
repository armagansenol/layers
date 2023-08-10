import s from './get-an-offer.module.scss'

import ContactForm from '@/components/contact-form'
import MarqueeLink from '@/components/marquee-link'
import Subscribe from '@/components/subscribe'
import { Layout } from '@/layouts/default'
import { Link } from '@/components/link'
import { FormType } from '@/components/contact-form/types'

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
            <ContactForm formType={FormType.service} />
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

export default GetAnOffer
