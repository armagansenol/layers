import { NextSeo } from 'next-seo'
import NextHead from 'next/head'

type Props = {
  title: string
  description?: string
  keywords?: string[]
}

export function CustomHead({ title = '', description, keywords }: Props) {
  return (
    <>
      <NextHead>
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />

        <meta
          name="robots"
          content={
            process.env.NEXT_PUBLIC_NODE_ENV !== 'development'
              ? 'index,follow'
              : 'noindex,nofollow'
          }
        />
        <meta
          name="googlebot"
          content={
            process.env.NEXT_PUBLIC_NODE_ENV !== 'development'
              ? 'index,follow'
              : 'noindex,nofollow'
          }
        />

        <meta
          name="keywords"
          content={`${
            keywords && keywords.length ? keywords.join(',') : keywords
          }`}
        />
        <meta name="author" content="JUST DESIGN FX" />
        <meta name="referrer" content="no-referrer" />
        <meta name="format-detection" content="telephone=no" />
        <meta httpEquiv="x-dns-prefetch-control" content="off" />
        <meta httpEquiv="Window-Target" content="_value" />
        <meta name="geo.region" content="TR" />

        {/* START FAVICON */}
        {/* <link rel="manifest" href="/site.webmanifest" /> */}
        {/* <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        /> */}
        <link
          rel="icon"
          type="image/jpg"
          sizes="256x256"
          href="/img/favicon.jpg"
        />
        {/* <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        /> */}
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#00FF6A" />
        <meta name="msapplication-TileColor" content="#00FF6A" />
        <meta name="theme-color" content="#00FF6A" />
        <link rel="icon" href="/favicon.ico" />

        {/* END FAVICON */}

        <title>{title}</title>
      </NextHead>
      <NextSeo
        title={title}
        description={description}
        openGraph={{
          title,
          description,
          type: 'website',
          locale: 'en',
          site_name: '',
        }}
        twitter={{
          handle: '@layers_hrtech',
        }}
      />
    </>
  )
}
