import s from './request-a-demo.module.scss'

import ContactForm from '@/components/contact-form'
import { FormType } from '@/components/contact-form/types'
import Subscribe from '@/components/subscribe'
import { Layout } from '@/layouts/default'

const RequestADemo = () => {
  return (
    <Layout theme="main">
      <>
        <section className="content-box-sm">
          <div className={s.text}>
            <h1>Request a Demo</h1>
            <p>See Layers in action.</p>
            <small>
              Step into the future of HR management and experience innovative
              solutions. Request a demo now!
            </small>
          </div>
          <div className={s.contactFormC}>
            <ContactForm formType={FormType.demo} />
          </div>
        </section>

        <Subscribe />
      </>
    </Layout>
  )
}

export default RequestADemo
