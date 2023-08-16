import { i18n, useTranslation } from 'next-i18next'
import { useRouter } from 'next/router'

export default function LanguageSelect() {
  const router = useRouter()

  const onToggleLanguageClick = (newLocale: string) => {
    const { pathname, asPath, query } = router
    router.push({ pathname, query }, asPath, { locale: newLocale })
  }

  // const clientSideLanguageChange = (newLocale: string) => {
  //   i18n.changeLanguage(newLocale)
  // }

  console.log(i18n?.language)

  return (
    <div>
      <select
        onChange={(e) => onToggleLanguageClick(e.target.value)}
        value={i18n?.language}
      >
        <option value="en">en</option>
        <option value="tr">tr</option>
      </select>
    </div>
  )
}
