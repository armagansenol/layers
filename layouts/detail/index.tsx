import s from './detail.module.scss'

import cn from 'clsx'
import { Trans, useTranslation } from 'next-i18next'
import Head from 'next/head'

import Button from '@/components/button'
import CustomImage from '@/components/custom-image'
import { CustomLink } from '@/components/custom-link'
import MarqueeLink from '@/components/marquee-link'
import Subscribe from '@/components/subscribe'
import { DynamicPageContent } from '@/global'
// import { CustomHead } from '@/components/custom-head'

type Props = {
  pageType: string
  pageData: DynamicPageContent
}

const Detail = ({ pageData, pageType }: Props) => {
  const { t } = useTranslation('detail')

  return (
    <>
      {/* <CustomHead title={`Layers | ${pageData.intro.title}`} /> */}

      <Head>
        <link
          rel="preload"
          href={`/img/detail/${pageType}/next-cursor.png`}
          as="image"
        />
      </Head>

      <section className="content-box-sm">
        <div className={s.intro}>
          <div className={s.text}>
            <h1>{pageData.intro.title}</h1>
            <p>{pageData.intro.desc}</p>
            <small>{pageData.intro.small}</small>
          </div>
          <div className={s.mediaC}>
            {pageData.intro.media.type === 'image' ? (
              <div className={s.imgC}>
                <CustomImage
                  src={`/img/detail/${pageType}/intro.png`}
                  alt="Detail"
                  width={1000}
                  height={1000}
                  style={{ objectFit: 'contain' }}
                />
              </div>
            ) : (
              <video
                className={s.media}
                src={pageData.intro.media.path}
                autoPlay
                loop
                muted
                playsInline
              ></video>
            )}
          </div>
        </div>
      </section>

      <section className="content-box-md">
        <div className={cn(s.row, s.desc)}>
          <div className={s.mediaC}>
            <div className={s.transformC}>
              <video
                className={s.media}
                src={pageData.detail.d1.media.path}
                autoPlay
                muted
                loop
                playsInline
              ></video>
            </div>
          </div>
          <div className={s.text}>
            <h3>{pageData.detail.d1.title}</h3>
            <p>
              <Trans
                i18nKey={pageData.detail.d1.desc}
                components={{ span: <span /> }}
              >
                {pageData.detail.d1.desc}
              </Trans>
            </p>
          </div>
        </div>

        {/* <div className={cn(s.row, s.listC)}>
          <FeatureList />
        </div> */}

        <div className={cn(s.row, s.redirect)}>
          <div className={s.text}>
            <h4>{pageData.detail.d2.desc}</h4>
            <Button text={t('btn.btnText')} path={t('btn.path')} />
          </div>
          <div className={s.mediaC}>
            <CustomImage
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

      <CustomLink href={pageData.nextPage.url} className="next-item-c">
        <MarqueeLink
          title={pageData.nextPage.title}
          text={{
            t1: pageData.nextPage.text.t1,
            t2: pageData.nextPage.text.t2,
          }}
          mediaSrc={`/img/detail/${pageType}/next-cursor.png`}
        />
      </CustomLink>

      <Subscribe />
    </>
  )
}

export default Detail
