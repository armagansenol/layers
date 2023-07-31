import s from './detail.module.scss'

import cn from 'clsx'

import Button from '@/components/button'
import { Image } from '@/components/image'
import NextItemMarquee from '@/components/next-item-marquee'
import Subscribe from '@/components/subscribe'
import Link from 'next/link'

type Props = {
  pageType: string
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

const Detail = ({ pageData, pageType }: Props) => {
  return (
    <>
      <div className={cn(s.intro, 'content-box-sm')}>
        <div className={s.content}>
          <div className={s.text}>
            <h1>{pageData.intro.title}</h1>
            <p>{pageData.intro.desc}</p>
            <small>{pageData.intro.small}</small>
          </div>
          <div className={s.mediaC}>
            <Image
              src={`/img/detail/${pageType}/intro.png`}
              alt="Detail"
              width={10000}
              height={10000}
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
                // src="/video/gif.mp4"
                // src="https://player.vimeo.com/progressive_redirect/playback/848990750/rendition/360p/file.mp4?loc=external&signature=193c52bb77ebeb66c6156648de7654365f00fab852322cc420d9bb19e22cf43d"
                src={pageData.detail.d1.media.path}
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
            <Image
              src={`/img/detail/${pageType}/masked.png`}
              alt="Detail"
              style={{ objectFit: 'contain' }}
              loading="lazy"
              fill={true}
            />
          </div>
        </div>
      </div>

      <Link href={pageData.nextPage.url} className={s.mC}>
        <NextItemMarquee
          title={pageData.nextPage.title}
          text={{
            t1: pageData.nextPage.text.t1,
            t2: pageData.nextPage.text.t2,
          }}
          url={pageData.nextPage.url}
        />
      </Link>

      <Subscribe />
    </>
  )
}

export default Detail
