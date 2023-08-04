import React, { useRef } from 'react'
import s from './navbar-desktop.module.scss'

import cn from 'clsx'
import { AnimatePresence, cubicBezier, motion } from 'framer-motion'
import IconArrowDropdown from '@/components/icons/icon-arrow-dropdown'
import { useMenuStore } from '@/lib/menuStore'
import { MainRoute, routes } from '@/global'
import { Image } from '../../image'
import Link from 'next/link'

const ease = cubicBezier(0.16, 1, 0.3, 1)

export function NavbarDesktop() {
  const { currentRoute, isOpen, setCurrentRoute, setIsOpen } = useMenuStore()
  const menuRef = useRef<HTMLElement>(null)

  function handleMenu(type: MainRoute) {
    if (type) {
      setCurrentRoute(type)
    }

    setIsOpen(true)
  }

  return (
    <nav
      ref={menuRef}
      className={cn(s.navigation, s.fixed, [
        s[currentRoute ? routes[currentRoute].type : 'null'],
      ])}
      onMouseLeave={() => setIsOpen(false)}
    >
      {Object.values(routes).map((value, i) => {
        return (
          <div
            className={cn(s.navItemC, 'cursor-pointer', [s[value.type]])}
            key={i}
            onMouseEnter={() => handleMenu(value.type)}
          >
            <p>{value.ui}</p>
            <div className={s.iconC}>
              <IconArrowDropdown />
            </div>
          </div>
        )
      })}
      {/* <div
      className={cn(s.navItemC, s.resources, 'cursor-pointer')}
      // onMouseEnter={() =>
      //   value.type !== 'requestADemo' && handleMenu(value.type)
      // }
      // onMouseEnter={() => handleMenu("resources")}
    >
      <p className={s.itemText}>Resources</p>
      <div className={s.iconC}>
        <IconArrowDropdown />
      </div>
    </div> */}
      <Link
        href="/request-a-demo"
        className={cn(s.navItemC, s.requestADemo, 'cursor-pointer')}
        onMouseEnter={() => setIsOpen(false)}
      >
        <p>Request A Demo</p>
      </Link>
      <AnimatePresence>
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
                  transition: { duration: 0.5, ease },
                },
                closed: {
                  opacity: 0,
                  scale: 0.75,
                  y: -50,
                  transition: { duration: 0.2, ease },
                },
              }}
            >
              <AnimatePresence>
                {currentRoute && (
                  <motion.div
                    className={cn(s.content)}
                    key={`${currentRoute}-content`}
                    initial="closed"
                    animate="open"
                    exit="closed"
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
                            >
                              {currentRoute !== MainRoute.resources && (
                                <div className={s.iconC}>
                                  <Image
                                    src={`/img/detail/${item.path}/menu-icon.png`}
                                    width={150}
                                    height={150}
                                    alt="Feature Icons"
                                    style={{ objectFit: 'contain' }}
                                  />
                                </div>
                              )}
                              <div className={s.text}>
                                {item.ui && <h5>{item.ui}</h5>}
                                {item.desc && <p>{item.desc}</p>}
                              </div>
                            </Link>
                          )
                        }
                      )}
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
