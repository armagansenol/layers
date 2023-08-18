import s from './language-select.module.scss'

import cn from 'clsx'
import { i18n } from 'next-i18next'
import { useRouter } from 'next/router'
import IconArrowDropdown from '@/components/icons/icon-arrow-dropdown'

export default function LanguageSelect() {
  const router = useRouter()

  const onToggleLanguageClick = (newLocale: string) => {
    const { pathname, asPath, query } = router
    router.push({ pathname, query }, asPath, { locale: newLocale })
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
        <option value="en">en</option>
        <option value="tr">tr</option>
      </select>
      <div className={cn(s.iconC, 'flex-center')}>
        <IconArrowDropdown />
      </div>
    </div>
  )
}
