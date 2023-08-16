import s from './detail.module.scss'

import cn from 'clsx'
import Link from 'next/link'

import Button from '@/components/button'
import FeatureList from '@/components/feature-list'
import { Image } from '@/components/image'
import MarqueeLink from '@/components/marquee-link'
import Subscribe from '@/components/subscribe'
import { DynamicPageContent } from '@/global'

type Props = {
  pageType: string
  pageData: DynamicPageContent
}

const Detail = ({ pageData, pageType }: Props) => {
  return (
    <>
      <section className="content-box-sm">
        <div className={s.content}>
          <div className={s.text}>
            <h1>{pageData.intro.title}</h1>
            <p>{pageData.intro.desc}</p>
            <small>{pageData.intro.small}</small>
          </div>
          <div className={s.mediaC}>
            {pageData.intro.media.type === 'image' ? (
              <Image
                src={`/img/detail/${pageType}/intro.png`}
                alt="Detail"
                width={1000}
                height={1000}
                style={{ objectFit: 'contain' }}
              />
            ) : (
              <video
                className={s.media}
                src={pageData.intro.media.path}
                autoPlay
                muted
                loop
                playsInline
              ></video>
            )}
          </div>
        </div>
      </section>

      <section className={cn(s.detail, 'content-box-md')}>
        <div className={cn(s.row, s.intro)}>
          <div className={s.mediaC}>
            <video
              className={s.media}
              src={pageData.detail.d1.media.path}
              autoPlay
              muted
              loop
              playsInline
            ></video>
          </div>
          <div className={s.text}>
            <h3>{pageData.detail.d1.title}</h3>
            <p>{pageData.detail.d1.desc}</p>
          </div>
        </div>

        <div className={cn(s.row, s.listC)}>
          <FeatureList />
        </div>

        <div className={cn(s.row, s.redirect)}>
          <div className={s.text}>
            <h4>{pageData.detail.d2.desc}</h4>
            <Button text="Request a Demo" path="/demo-request" />
          </div>
          <div className={s.mediaC}>
            <Image
              alt="Detail"
              height={1000}
              loading="lazy"
              src={`/img/detail/${pageType}/masked.png`}
              style={{ objectFit: 'contain' }}
              width={1000}
            />
          </div>
        </div>
      </section>

      <Link href={pageData.nextPage.url} className="next-item-c">
        <MarqueeLink
          title={pageData.nextPage.title}
          text={{
            t1: pageData.nextPage.text.t1,
            t2: pageData.nextPage.text.t2,
          }}
          mediaSrc={`/img/detail/${pageType}/next-cursor.png`}
          // path={pageData.nextPage.url}
        />
      </Link>

      <Subscribe />
    </>
  )
}

export default Detail
