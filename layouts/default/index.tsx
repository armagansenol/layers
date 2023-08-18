import { ReactElement } from 'react'
import s from './layout.module.scss'

import cn from 'clsx'

import { CustomHead } from '@/components/custom-head'
import Footer from '@/components/footer'
import Header from '@/components/header'
import UpcomingAccordion from '@/components/upcoming-accordion'
import { useMedia } from 'react-use'
import ErrorMessage from '@/components/error-message'
import { useErrorStore } from '@/lib/errorStore'

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
  theme: 'main' | 'services' | 'features'
}

export function Layout({
  seo = {
    title: 'Layers',
    description: '',
    image: { url: '' },
    keywords: [
      'layers',
      'hr',
      'human resources',
      'code',
      'hashtag',
      'app',
      'employee',
      'employer',
    ],
  },
  children,
  className,
  theme = 'main',
}: Props) {
  const errorStore = useErrorStore()

  return (
    <>
      <CustomHead {...seo} />

      <div className={cn(s.layout, className, `theme-${theme}`)}>
        <ErrorMessage messages={errorStore.messages} />
        <UpcomingAccordion />
        <Header />
        <main className={s.main}>{children}</main>
        <Footer />
      </div>
    </>
  )
}
