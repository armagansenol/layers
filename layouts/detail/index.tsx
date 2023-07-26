import s from './detail.module.scss'

import Button from '@/components/button'
import NextItemMarquee from '@/components/next-item-marquee'
import Subscribe from '@/components/subscribe'
import { Layout } from '@/layouts/default'
import cn from 'clsx'

type Props = {
  pageData: {
    intro: {
      h1: string
      p: string
      small: string
      media: {
        path: string
      }
    }
    detail: {
      d1: {
        h3: string
        p: string
        media: {
          path: string
        }
      }
      d2: {
        h4: string
        media: {
          path: string
        }
      }
    }
    nextPage: {
      title: string
      text: string
      url: string
    }
  }
}

const Detail = (props: Props) => {
  return (
    <Layout>
      <>
        <div className={cn(s.intro, 'content-box-sm')}>
          <div className={s.content}>
            <div className={s.text}>
              <h1>Employee Database</h1>
              <p>Access your personal database with just a click.</p>
              <small>
                Streamline organizational chart, files, docs, and personal info
                management with ease.
              </small>
            </div>
          </div>
          <div className={s.mediaC}>
            <div className={s.media}>
              {/* <video
                  style={{ width: '100%', height: '100%' }}
                  className={s.video}
                  // src="https://www.apple.com/media/us/mac-pro/2013/16C1b6b5-1d91-4fef-891e-ff2fc1c1bb58/videos/macpro_main_desktop.mp4"
                  src="/video/gif.mp4"
                  autoPlay
                  muted
                  loop
                  // controls
                ></video> */}
              <img
                src="/img/detail-employee-database.png"
                alt="Detail"
                width="100"
                height="100"
                style={{ objectFit: 'contain' }}
              />
            </div>
          </div>
        </div>
        <div className={cn(s.detail, 'content-box-md')}>
          <div>
            <div className={s.mediaC}>
              <div className={s.media}>
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
            <div className={s.text}>
              <h3>All your people data in one place.</h3>
              <p>
                Easily manage, monitor and report your organizational chart,
                personnel personal information, documents and personal
                information.
              </p>
            </div>
          </div>
          <div>
            <div className={s.text}>
              <h4>
                With Layers, you gain efficiency, accuracy, and a holistic
                perspective on your organization’s human capital.
              </h4>
              <Button text="Request a Demo" path="/request-a-demo" />
            </div>
            <div className={s.mediaC}>
              <div className={s.media}>
                {/* <video
                  style={{ width: '100%', height: '100%' }}
                  className={s.video}
                  // src="https://www.apple.com/media/us/mac-pro/2013/16C1b6b5-1d91-4fef-891e-ff2fc1c1bb58/videos/macpro_main_desktop.mp4"
                  src="/video/gif.mp4"
                  autoPlay
                  muted
                  loop
                  // controls
                ></video> */}
                <img
                  src="/img/detail-employee-database.png"
                  alt="Detail"
                  width="100"
                  height="100"
                  style={{ objectFit: 'contain' }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className={s.mC}>
          <NextItemMarquee
            title="Next Feature"
            text={{ t1: 'Next Feature', t2: 'Employee Center / HR Portal' }}
            url="/"
          />
        </div>
        <Subscribe />
      </>
    </Layout>
  )
}

export default Detail
