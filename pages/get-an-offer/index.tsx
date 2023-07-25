import React from 'react'
import s from './get-an-offer.module.scss'

import Header from '@/components/header'
import { Layout } from '@/layouts/default'
import cn from 'clsx'
import { Marquee } from '@/components/marquee'
import ContactForm from '@/components/contact-form'
import NextItemMarquee from '@/components/next-item-marquee'
import Subscribe from '@/components/subscribe'

const GetAnOffer = () => {
  return (
    <Layout>
      <>
        <section className={cn(s.intro, 'content-box-sm')}>
          <Header />
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

export default GetAnOffer
