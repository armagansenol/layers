import s from './detail.module.scss'

import cn from 'clsx'

import Button from '@/components/button'
import NextItemMarquee from '@/components/next-item-marquee'
import Subscribe from '@/components/subscribe'
import { Layout } from '@/layouts/default'
import { Image } from '@/components/image'

type Props = {
  pageData: {
    intro: {
      title: string
      desc: string
      small: string
      media: {
        path: string
      }
    }
    detail: {
      d1: {
        title: string
        desc: string
        media: {
          path: string
        }
      }
      d2: {
        desc: string
        media: {
          path: string
        }
      }
    }
    nextPage: {
      title: string
      text: { t1: string; t2: string }
      url: string
    }
  }
}

const Detail = ({ pageData }: Props) => {
  console.log('detail props', pageData)

  return (
    <Layout>
      <>
        <div className={cn(s.intro, 'content-box-sm')}>
          <div className={s.content}>
            <div className={s.text}>
              <h1>{pageData.intro.title}</h1>
              <p>{pageData.intro.desc}</p>
              <small>{pageData.intro.small}</small>
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
              <Image
                src={pageData.detail.d2.media.path}
                alt="Detail"
                width="1136"
                height="1291"
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
              <h3>{pageData.detail.d1.title}</h3>
              <p>{pageData.detail.d1.desc}</p>
            </div>
          </div>
          <div>
            <div className={s.text}>
              <h4>{pageData.detail.d2.desc}</h4>
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
                <Image
                  src={pageData.detail.d2.media.path}
                  alt="Detail"
                  width="1136"
                  height="1291"
                  style={{ objectFit: 'contain' }}
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
        <div className={s.mC}>
          <NextItemMarquee
            title={pageData.nextPage.title}
            text={{
              t1: pageData.nextPage.text.t1,
              t2: pageData.nextPage.text.t2,
            }}
            url={pageData.nextPage.url}
          />
        </div>
        <Subscribe />
      </>
    </Layout>
  )
}

export default Detail
