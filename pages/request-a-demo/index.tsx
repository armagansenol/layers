import cn from 'clsx'
import s from './request-a-demo.module.scss'

import ContactForm from '@/components/contact-form'
import Subscribe from '@/components/subscribe'
import { Layout } from '@/layouts/default'

const RequestADemo = () => {
  return (
    <Layout theme="main">
      <>
        <section className={cn(s.intro, 'content-box-sm')}>
          {/* <Header /> */}
          <div className={s.text}>
            <h1>Request a Demo</h1>
            <p>See Layers in action.</p>
            <small>
              Step into the future of HR management and experience innovative
              solutions. Request a demo now!
            </small>
          </div>
          <div className={s.contactFormC}>
            <ContactForm formType="demo" />
          </div>
        </section>

        <Subscribe />
      </>
    </Layout>
  )
}

export default RequestADemo
