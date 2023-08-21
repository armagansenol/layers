import { ReactElement } from 'react'
import s from './layout.module.scss'

import cn from 'clsx'

import { CustomHead } from '@/components/custom-head'
import Footer from '@/components/footer'
import Header from '@/components/header'
import ErrorMessage from '@/components/error-message'
import UpcomingAccordion from '@/components/upcoming-accordion'
import { useErrorStore } from '@/lib/store/errorStore'

type Props = {
  seo?: any
  children: ReactElement
  className?: string
  theme: 'main' | 'services' | 'features'
}

export function Layout({
  seo = {
    title: 'Layers',
    description: 'Hr Super App',
    image: { url: '/img/layers-logo-svg' },
    keywords: [
      'layers',
      'hr',
      'human resources',
      'code',
      'hashtag',
      'app',
      'employee',
      'employer',
      'career',
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
