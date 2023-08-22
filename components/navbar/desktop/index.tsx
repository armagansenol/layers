import { useRef } from 'react'
import s from './navbar-desktop.module.scss'

import cn from 'clsx'
import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link'
import { useTranslation } from 'next-i18next'

import IconArrowDropdown from '@/components/icons/icon-arrow-dropdown'
import CustomImage from '@/components/custom-image'
import { MainRoute, routes } from '@/global'
import { useMenuStore } from '@/lib/store/menu'
import { customEase1 } from '@/utils'

export function NavbarDesktop() {
  const { currentRoute, isOpen, setCurrentRoute, setIsOpen } = useMenuStore()
  const menuRef = useRef<HTMLElement>(null)
  const { i18n, t } = useTranslation('common')

  function handleMenu(type: MainRoute) {
    if (type) {
      setCurrentRoute(type)
    }

    setIsOpen(true)
  }

  function handleClose() {
    setIsOpen(false)
  }

  return (
    <nav
      ref={menuRef}
      className={cn(s.navigation, s.fixed, [
        s[
          currentRoute
            ? routes[i18n.language === 'en' ? 'en' : 'tr'][currentRoute].type
            : 'null'
        ],
      ])}
      onMouseLeave={handleClose}
    >
      {Object.values(routes[i18n.language === 'en' ? 'en' : 'tr']).map(
        (value, i) => {
          return (
            <div
              className={cn(s.navItemC, 'cursor-pointer', [s[value.type]], {
                [s.active]: value.type === currentRoute && isOpen,
              })}
              key={i}
              onMouseEnter={() => handleMenu(value.type)}
            >
              <p>{value.ui}</p>
              <div className={cn(s.iconC, 'flex-center')}>
                <IconArrowDropdown />
              </div>
            </div>
          )
        }
      )}
      <Link
        href="/demo-request"
        className={cn(s.navItemC, s.requestADemo, 'cursor-pointer')}
        onMouseEnter={handleClose}
      >
        <p>{t('header.requestADemo')}</p>
      </Link>
      <AnimatePresence mode="popLayout">
        {isOpen && (
          <motion.div className={s.menuC}>
            <motion.div
              className={cn(s.menu, 'flex-center')}
              key={`${currentRoute}-menu`}
              initial="closed"
              animate="open"
              exit="closed"
              variants={{
                open: {
                  opacity: 1,
                  scale: 1,
                  y: 0,
                  transition: { duration: 0.5, ease: customEase1 },
                },
                closed: {
                  opacity: 0,
                  scale: 0.75,
                  y: -50,
                  transition: { duration: 0.2, ease: customEase1 },
                },
              }}
            >
              <AnimatePresence>
                {currentRoute && (
                  <motion.div
                    className={cn(s.links)}
                    animate="open"
                    exit="closed"
                    initial="closed"
                    key={`${currentRoute}-links`}
                    variants={{
                      open: {
                        opacity: 1,
                        transition: { duration: 0.1, ease: 'easeInOut' },
                      },
                      closed: {
                        opacity: 0,
                        transition: { duration: 0.1, ease: 'easeInOut' },
                      },
                    }}
                  >
                    {routes[i18n.language === 'en' ? 'en' : 'tr'][currentRoute]
                      .children &&
                      Object.values(
                        routes[i18n.language === 'en' ? 'en' : 'tr'][
                          currentRoute
                        ].children
                      ).map((item, i) => {
                        return (
                          <Link
                            className={cn(s.menuItem, 'cursor-pointer')}
                            href={`/${
                              routes[i18n.language === 'en' ? 'en' : 'tr'][
                                currentRoute
                              ].path
                                ? routes[i18n.language === 'en' ? 'en' : 'tr'][
                                    currentRoute
                                  ].path + '/'
                                : ''
                            }${item.path}`}
                            key={i}
                            onClick={handleClose}
                          >
                            {currentRoute !== MainRoute.resources && (
                              <div className={cn(s.iconC, 'flex-center')}>
                                <CustomImage
                                  alt="Feature Icons"
                                  height={150}
                                  src={`/img/detail/${item.path}/menu-icon.png`}
                                  style={{ objectFit: 'contain' }}
                                  width={150}
                                />
                              </div>
                            )}
                            <div className={s.text}>
                              {item.ui && <h5>{item.ui}</h5>}
                              {item.desc && <p>{item.desc}</p>}
                            </div>
                          </Link>
                        )
                      })}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
