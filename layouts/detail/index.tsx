import s from './detail.module.scss'

import cn from 'clsx'

import Button from '@/components/button'
import { Image } from '@/components/image'
import NextItemMarquee from '@/components/next-item-marquee'
import Subscribe from '@/components/subscribe'
import Link from 'next/link'
import { DynamicPageContent } from '@/global'

type Props = {
  pageType: string
  pageData: DynamicPageContent
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
              ></video>
            )}
          </div>
        </div>
      </div>

      <div className={cn(s.detail, 'content-box-md')}>
        <div>
          <div className={s.mediaC}>
            <video
              className={s.media}
              src={pageData.detail.d1.media.path}
              autoPlay
              muted
              loop
            ></video>
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
