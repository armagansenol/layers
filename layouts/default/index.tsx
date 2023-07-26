import CustomCursor from '@/components/custom-cursor'
import { CustomHead } from '@/components/custom-head'
import Footer from '@/components/footer'
import PageTransition from '@/components/page-transition'
import UpcomingAccordion from '@/components/upcoming-accordion'
import cn from 'clsx'
import { ReactElement } from 'react'
import s from './layout.module.scss'
import { useMenuStore } from '@/lib/menuStore'
import Header from '@/components/header'

// const Header = dynamic(
//   () => import('components/header').then(({ Header }) => Header),
//   {
//     ssr: false,
//   }
// )
// const Footer = dynamic(
//   () => import('components/footer').then(({ Footer }) => Footer),
//   {
//     ssr: false,
//   }
// )

type Props = {
  seo?: any
  children: ReactElement
  className?: string
}

export function Layout({
  seo = {
    title: 'Studio Freight - Built on Principle',
    description:
      'Studio Freight is an independent creative studio built on principle.',
    image: { url: 'https://studiofreight.com/sf-og.jpg' },
    keywords: [
      'freight',
      'studio',
      'UX',
      'UI',
      'userexperience',
      'webdesign',
      'webdeveloper',
      'design',
      'codedesign',
      'code',
      'hashtag',
      'development',
      'website',
      'websitedevelopment',
      'webservices',
      'art direction',
      'strategy',
      'web',
      'murals',
      'illustration',
      'photography',
      'signage',
      'video',
    ],
  },
  children,
  className,
}: Props) {
  return (
    <PageTransition>
      <CustomHead {...seo} />
      <div className={cn(s.layout, className)}>
        <CustomCursor />
        <UpcomingAccordion />
        <Header />
        <main className={s.main}>{children}</main>
        <Footer />
      </div>
    </PageTransition>
  )
}
