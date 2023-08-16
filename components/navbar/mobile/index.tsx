import { useRef, useState } from 'react'
import s from './navbar-mobile.module.scss'

import cn from 'clsx'
import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link'

import IconArrowDropdown from '@/components/icons/icon-arrow-dropdown'
import { MainRoute, routes } from '@/global'
import { useMenuStore } from '@/lib/menuStore'
import { customEase1 } from '@/utils'

type Props = {
  loginUrl: string
}

export function NavbarMobile(props: Props) {
  const menuRef = useRef<HTMLElement>(null)
  const [hamburger, setHamburger] = useState(false)
  const { currentRoute, setCurrentRoute, setIsOpen } = useMenuStore()
  // useLockBodyScroll(hamburger)

  function handleMenu(type: MainRoute) {
    if (currentRoute) {
      closeMenu()
      currentRoute === type ? setCurrentRoute(null) : setCurrentRoute(type)
      return
    }

    setCurrentRoute(type)
    setIsOpen(true)
  }

  function closeMenu() {
    setIsOpen(false)
  }

  return (
    <>
      <div
        onClick={() => setHamburger((prev) => !prev)}
        className={cn(s.hamburger, 'flex-center', { [s.open]: hamburger })}
      >
        {hamburger ? 'close' : 'menu'}
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
              s[currentRoute ? routes[currentRoute].type : 'null'],
            ])}
            ref={menuRef}
          >
            {Object.values(routes).map((value, i) => {
              return (
                <>
                  <div
                    className={cn(s.navItemC, 'cursor-pointer', [
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
                    {currentRoute === value.type && (
                      <motion.div
                        className={s.submenu}
                        initial="closed"
                        animate={hamburger ? 'open' : 'closed'}
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
                          {routes[currentRoute].children &&
                            Object.values(routes[currentRoute].children).map(
                              (item, i) => {
                                return (
                                  <Link
                                    className={cn(s.menuItem, 'cursor-pointer')}
                                    href={`/${
                                      routes[currentRoute].path
                                        ? routes[currentRoute].path + '/'
                                        : ''
                                    }${item.path}`}
                                    key={i}
                                    onClick={closeMenu}
                                  >
                                    {item.ui && <h5>{item.ui}</h5>}
                                  </Link>
                                )
                              }
                            )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </>
              )
            })}

            <Link
              href="/demo-request"
              className={s.navItemC}
              onClick={closeMenu}
            >
              <p>Request A Demo</p>
            </Link>

            <Link
              href={props.loginUrl}
              target="_blank"
              rel="noreferrer noopener"
              className={s.navItemC}
              onClick={closeMenu}
            >
              <p>Login</p>
            </Link>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  )
}
