import { useRef } from 'react'
import s from './navbar-mobile.module.scss'

import cn from 'clsx'
import { AnimatePresence, motion } from 'framer-motion'
import { useTranslation } from 'next-i18next'

import { CustomLink } from '@/components/custom-link'
import IconArrowDropdown from '@/components/icons/icon-arrow-dropdown'
import LanguageSelect from '@/components/language-select'
import { Locales, MainRoute, routes } from '@/global'
import { useMenuStore } from '@/lib/store/menu'
import { customEase1 } from '@/utils'

type Props = {
  loginUrl: string
}

export function NavbarMobile(props: Props) {
  const menuRef = useRef<HTMLElement>(null)
  const { currentRoute, setCurrentRoute, setIsOpen, hamburger, setHamburger } =
    useMenuStore()
  const { i18n, t } = useTranslation('common')
  // useLockBodyScroll(hamburger)

  function handleMenu(type: MainRoute) {
    if (currentRoute) {
      currentRoute === type ? setCurrentRoute(null) : setCurrentRoute(type)
      return
    }

    setCurrentRoute(type)
    setIsOpen(true)
  }

  function closeMenu() {
    setHamburger()
    setIsOpen(false)
  }

  function toggleHamburger() {
    setHamburger()
  }

  return (
    <>
      <div
        onClick={toggleHamburger}
        className={cn(s.hamburger, 'flex-center', { [s.open]: hamburger })}
      >
        {hamburger ? t('hamburger.close') : t('hamburger.menu')}
      </div>

      <AnimatePresence mode="wait">
        {hamburger && (
          <motion.nav
            initial="closed"
            animate={hamburger ? 'open' : 'closed'}
            exit="closed"
            variants={{
              open: {
                opacity: 1,
                transition: { duration: 0.2 },
              },
              closed: {
                opacity: 0,
                transition: { duration: 0.2 },
              },
            }}
            className={cn(s.navigation, [
              s[
                currentRoute
                  ? routes[i18n.language as Locales][currentRoute].type
                  : 'null'
              ],
            ])}
            ref={menuRef}
          >
            {Object.values(routes[i18n.language as Locales]).map((value, i) => {
              return (
                <>
                  <div
                    className={cn(s.navItemC, [
                      s[value.type],
                      {
                        [s.active]: value.type === currentRoute,
                      },
                    ])}
                    key={i}
                    onClick={() => handleMenu(value.type)}
                  >
                    <p>{value.ui}</p>
                    <div className={s.iconC}>
                      <IconArrowDropdown />
                    </div>
                  </div>
                  <AnimatePresence mode="wait">
                    {currentRoute && (
                      <motion.div
                        layout
                        key={`${value.type}-submenu`}
                        className={s.submenu}
                        initial="closed"
                        animate={
                          currentRoute === value.type ? 'open' : 'closed'
                        }
                        exit="closed"
                        variants={{
                          open: {
                            height: 'auto',
                            opacity: 1,
                            transition: { duration: 0.8, ease: customEase1 },
                          },
                          closed: {
                            height: 0,
                            opacity: 0,
                            transition: { duration: 0.6, ease: customEase1 },
                          },
                        }}
                      >
                        <div className={s.links}>
                          {routes[i18n.language as Locales][currentRoute]
                            .children &&
                            Object.values(
                              routes[i18n.language as Locales][currentRoute]
                                .children
                            ).map((item, i) => {
                              return (
                                <CustomLink
                                  className={s.menuItem}
                                  href={`/${
                                    routes[i18n.language as Locales][
                                      currentRoute
                                    ].path
                                      ? routes[i18n.language as Locales][
                                          currentRoute
                                        ].path + '/'
                                      : ''
                                  }${item.path}`}
                                  key={i}
                                  onClick={closeMenu}
                                >
                                  {item.ui && <h5>{item.ui}</h5>}
                                </CustomLink>
                              )
                            })}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </>
              )
            })}

            <CustomLink
              className={cn(s.navItemC, s.requestADemo)}
              href="/demo-request"
              onClick={closeMenu}
            >
              <p>{t('header.requestADemo')}</p>
            </CustomLink>

            <CustomLink
              className={s.navItemC}
              href={props.loginUrl}
              onClick={closeMenu}
              external
            >
              <p>{t('header.login')}</p>
            </CustomLink>

            <div className={cn(s.lngBtn, s.navItemC)}>
              <p>
                <LanguageSelect />
              </p>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  )
}
