import { useLayoutEffect, useRef } from 'react'
import s from './navbar-desktop.module.scss'

import cn from 'clsx'
import gsap from 'gsap'
import { useTranslation } from 'next-i18next'
import Link from 'next/link'

import CustomImage from '@/components/custom-image'
import IconArrowDropdown from '@/components/icons/icon-arrow-dropdown'
import { Locales, MainRoute, routes } from '@/global'
import { useMenuStore } from '@/lib/store/menu'

export function NavbarDesktop() {
  const ref = useRef<HTMLElement>(null)
  const q = gsap.utils.selector(ref)
  const { i18n, t } = useTranslation('common')
  const { currentRoute, isOpen, setCurrentRoute, setIsOpen } = useMenuStore()
  const currentLang = i18n.language as Locales
  const animation = useRef<gsap.core.Tween>()

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      animation.current = gsap.from(q('.menu'), {
        opacity: 0,
        scale: 0.5,
        yPercent: -10,
        pointerEvents: 'none',
        duration: 0.2,
        onComplete: () => {
          gsap.to(q('.menu'), {
            pointerEvents: 'auto',
          })
        },
      })
    })

    return () => ctx.revert()
  }, [])

  function handleMenu(type: MainRoute) {
    // closeMenu()

    // gsap.to(q('.links'), {
    //   opacity: 0,
    //   duration: 0.2,
    //   onComplete: () => {
    //     if (type) {
    //       setCurrentRoute(type)
    //     }

    //     gsap.to(q('.links'), {
    //       opacity: 1,
    //       delay: 0.2,
    //       duration: 0.2,
    //     })
    //   },
    // })

    if (type) {
      setCurrentRoute(type)
    }

    openMenu()
  }

  function openMenu() {
    setIsOpen(true)
  }

  function closeMenu() {
    setIsOpen(false)
  }

  useLayoutEffect(() => {
    if (!animation.current) return

    if (isOpen) {
      animation.current.play()
    } else {
      animation.current.reverse()
    }
  }, [isOpen])

  return (
    <nav
      className={cn(s.navigation, s.fixed, [
        s[currentRoute ? routes[currentLang][currentRoute].type : 'null'],
      ])}
      ref={ref}
      onMouseLeave={closeMenu}
    >
      {/* navbar items */}
      {Object.values(routes[currentLang]).map((value, i) => {
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
      })}

      <Link
        className={cn(s.navItemC, s.requestADemo, 'cursor-pointer')}
        href="/demo-request"
        onMouseEnter={closeMenu}
      >
        <p>{t('header.requestADemo')}</p>
      </Link>

      {/* menu */}

      <div className={cn(s.menuC, 'menuC')}>
        <div
          className={cn(s.menu, 'flex-center', 'menu')}
          onMouseLeave={closeMenu}
        >
          <div className={cn(s.links, 'links')}>
            {currentRoute &&
              Object.values(routes[currentLang][currentRoute].children).map(
                (item, i) => {
                  const currentPath = routes[currentLang][currentRoute].path

                  return (
                    <Link
                      className={cn(s.menuItem, 'cursor-pointer')}
                      href={`/${currentPath ? currentPath + '/' : ''}${
                        item.path
                      }`}
                      key={i}
                      onClick={closeMenu}
                    >
                      {currentRoute !== MainRoute.resources && (
                        <div className={cn(s.iconC, 'flex-center')}>
                          <CustomImage
                            alt="Route Icon"
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
                }
              )}
          </div>
        </div>
      </div>
    </nav>
  )
}
