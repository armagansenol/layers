import { useRef } from 'react'
import s from './navbar-desktop.module.scss'

import cn from 'clsx'
import gsap from 'gsap'
import { useTranslation } from 'next-i18next'
import Link from 'next/link'

import CustomImage from '@/components/custom-image'
import IconArrowDropdown from '@/components/icons/icon-arrow-dropdown'
import { Locales, MainRoute, routes } from '@/global'
import { useMenuStore } from '@/lib/store/menu'

const animationVariants = {
  close: {
    opacity: 0,
    scale: 0.75,
    duration: 0.2,
    ease: 'expo.in',
  },
  open: {
    opacity: 1,
    scale: 1,
    duration: 0.3,
    ease: 'expo.out',
  },
}

export function NavbarDesktop() {
  const ref = useRef<HTMLElement>(null)
  const q = gsap.utils.selector(ref)
  const { i18n, t } = useTranslation('common')
  const { currentRoute, isOpen, setCurrentRoute, setIsOpen } = useMenuStore()
  const currentLang = i18n.language as Locales

  function open(type: MainRoute) {
    setIsOpen(true)

    gsap.to(q('.menu'), {
      ...animationVariants.close,
      onComplete: () => {
        setCurrentRoute(type)
        gsap.to(q('.menu'), {
          ...animationVariants.open,
        })
      },
    })
  }

  function close() {
    if (!currentRoute) {
      return
    }

    gsap.to(q('.menu'), {
      ...animationVariants.close,
      onComplete: () => {
        setCurrentRoute(null)
        setIsOpen(false)
      },
    })
  }

  return (
    <nav
      className={cn(s.navigation, s.fixed, [
        s[currentRoute ? routes[currentLang][currentRoute].type : 'null'],
      ])}
      ref={ref}
      onMouseLeave={close}
    >
      {Object.values(routes[currentLang]).map((value, i) => {
        return (
          <div
            className={cn(s.navItemC, 'cursor-pointer', [s[value.type]], {
              [s.active]: value.type === currentRoute && isOpen,
            })}
            key={i}
            onMouseEnter={() => open(value.type)}
          >
            <p>{value.ui}</p>
            <div className={cn(s.iconC, 'flex-center')}>
              <IconArrowDropdown />
            </div>
          </div>
        )
      })}

      {/* navbar items */}
      <Link
        className={cn(s.navItemC, s.requestADemo, 'cursor-pointer')}
        href="/demo-request"
        onMouseEnter={close}
      >
        <p>{t('header.requestADemo')}</p>
      </Link>

      {/* menu */}
      <div className={s.menuC}>
        <div className={cn(s.menu, 'flex-center', 'menu')} onMouseLeave={close}>
          {currentRoute && (
            <div className={cn(s.links, 'links', [s[currentRoute]])}>
              {Object.values(routes[currentLang][currentRoute].children).map(
                (item, i) => {
                  const currentPath = routes[currentLang][currentRoute].path

                  return (
                    <Link
                      className={cn(s.menuItem, 'cursor-pointer')}
                      href={`/${currentPath ? currentPath + '/' : ''}${
                        item.path
                      }`}
                      key={i}
                      onClick={close}
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
          )}
        </div>
      </div>
    </nav>
  )
}
