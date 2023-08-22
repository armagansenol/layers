import { ReactElement } from 'react'
import s from './layout.module.scss'

import cn from 'clsx'

import { CustomHead } from '@/components/custom-head'
import Footer from '@/components/footer'
import Header from '@/components/header'
import ErrorMessage from '@/components/error-message'
import UpcomingAccordion from '@/components/upcoming-accordion'
import { useErrorStore } from '@/lib/store/error'
import { useTranslation } from 'next-i18next'

type Props = {
  seo?: any
  children: ReactElement
  className?: string
  theme: 'main' | 'services' | 'features'
}

export function Layout({
  seo = {
    title: 'Layers | Hr Super App',
    description:
      'World’s first employee-centric HR Super app, designed to revolutionize how you manage your human resources.',
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
  const { i18n } = useTranslation()

  seo.description =
    i18n.language === 'en'
      ? 'World’s first employee-centric HR Super app, designed to revolutionize how you manage your human resources.'
      : 'Dünyanın ilk çalışan odaklı İK Süper uygulaması, insan kaynaklarınızı nasıl yönettiğinizi devrimleştirmek amacıyla tasarlandı.'

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
