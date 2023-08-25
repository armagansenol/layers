import s from './language-select.module.scss'

import cn from 'clsx'
import { i18n } from 'next-i18next'
import { useRouter } from 'next/router'
import IconArrowDropdown from '@/components/icons/icon-arrow-dropdown'
import { gsap } from 'gsap'

export default function LanguageSelect() {
  const router = useRouter()

  const onToggleLanguageClick = (newLocale: string) => {
    const { pathname, asPath, query } = router

    gsap.to('body', {
      opacity: 0,
      duration: 0.2,
      onComplete: () => {
        router.push({ pathname, query }, asPath, { locale: newLocale })
        gsap.to('body', {
          opacity: 1,
          delay: 0.6,
          duration: 0.3,
        })
      },
    })
  }

  // const clientSideLanguageChange = (newLocale: string) => {
  //   i18n.changeLanguage(newLocale)
  // }

  return (
    <div className={s.lngSelect}>
      <select
        onChange={(e) => onToggleLanguageClick(e.target.value)}
        value={i18n?.language}
      >
        <option value="en">EN</option>
        <option value="tr">TR</option>
      </select>
      <div className={cn(s.iconC, 'flex-center')}>
        <IconArrowDropdown />
      </div>
    </div>
  )
}
