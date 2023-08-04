import { useRef, useState } from 'react'
import s from './navbar-mobile.module.scss'

import IconArrowDropdown from '@/components/icons/icon-arrow-dropdown'
import { MainRoute, routes } from '@/global'
import { useMenuStore } from '@/lib/menuStore'
import cn from 'clsx'
import { AnimatePresence, cubicBezier, motion } from 'framer-motion'
import Link from 'next/link'
import { useLockBodyScroll } from 'react-use'

const ease = cubicBezier(0.16, 1, 0.3, 1)

export function NavbarMobile() {
  const [hamburger, setHamburger] = useState(false)
  const { currentRoute, isOpen, setCurrentRoute, setIsOpen } = useMenuStore()
  const menuRef = useRef<HTMLElement>(null)
  useLockBodyScroll(hamburger)

  function handleMenu(type: MainRoute) {
    if (currentRoute) {
      setIsOpen(false)
      setCurrentRoute(null)
      return
    }

    if (type) {
      setCurrentRoute(type)
    }

    setIsOpen(true)
  }

  return (
    <>
      <div
        onClick={() => setHamburger((prev) => !prev)}
        className={s.hamburger}
      >
        menu
      </div>
      <AnimatePresence mode="wait">
        {hamburger && (
          <motion.nav
            key={`${hamburger}-m`}
            initial="closed"
            animate="open"
            exit="closed"
            variants={{
              open: {
                opacity: 1,
                transition: { duration: 1, ease },
              },
              closed: {
                opacity: 0,
                transition: { duration: 1, ease },
              },
            }}
            ref={menuRef}
            className={cn(s.navigation, s.fixed, 'hidden-overflow', [
              s[currentRoute ? routes[currentRoute].type : 'null'],
            ])}
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
                      <div className={cn(s.menuC, 'hidden-overflow')}>
                        <motion.div
                          className={cn(s.menu, 'flex-center')}
                          key={`${currentRoute}-menu`}
                          initial="closed"
                          animate="open"
                          exit="closed"
                          variants={{
                            open: {
                              height: 'auto',
                              opacity: 1,
                              transition: { duration: 1, ease },
                            },
                            closed: {
                              height: 0,
                              opacity: 0,
                              transition: { duration: 1, ease },
                            },
                          }}
                        >
                          <div className={cn(s.content)}>
                            {routes[currentRoute].children &&
                              Object.values(routes[currentRoute].children).map(
                                (item, i) => {
                                  return (
                                    <Link
                                      className={cn(
                                        s.menuItem,
                                        'cursor-pointer'
                                      )}
                                      href={`/${
                                        routes[currentRoute].path
                                          ? routes[currentRoute].path + '/'
                                          : ''
                                      }${item.path}`}
                                      key={i}
                                    >
                                      <div className={s.text}>
                                        {item.ui && <h5>{item.ui}</h5>}
                                      </div>
                                    </Link>
                                  )
                                }
                              )}
                          </div>
                        </motion.div>
                      </div>
                    )}
                  </AnimatePresence>
                </>
              )
            })}

            <Link
              href="/request-a-demo"
              className={cn(s.navItemC, s.requestADemo, 'cursor-pointer')}
              onClick={() => setIsOpen(false)}
            >
              <p>Request A Demo</p>
            </Link>

            <Link
              href="/request-a-demo"
              className={cn(s.navItemC, s.requestADemo, 'cursor-pointer')}
              onClick={() => setIsOpen(false)}
            >
              <p>Login</p>
            </Link>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  )
}
