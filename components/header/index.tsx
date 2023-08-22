import { useCallback, useEffect, useReducer, useRef, useState } from 'react'
import s from './header.module.scss'

import cn from 'clsx'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { useMedia } from 'react-use'

import IconLogin from '@/components/icons/icon-login'
import CustomImage from '@/components/custom-image'
import { ClientOnly } from '@/hocs/isomorphic'
import LanguageSelect from '@/components/language-select'
import { CustomLink } from '@/components/custom-link'
import { NavbarDesktop } from '@/components/navbar/desktop'
import { NavbarMobile } from '@/components/navbar/mobile'
import { routes } from '@/global'
import { useMenuStore } from '@/lib/store/menu'
import { useTranslation } from 'next-i18next'

const Header = () => {
  const navbarRef = useRef<any>(null)
  const { currentRoute, isOpen, setIsOpen, isAbsolute } = useMenuStore()
  const isMobile = useMedia('(max-width: 800px)', true)
  const [isMounted, toggle] = useReducer((p) => !p, true)
  const [elementRect, setElementRect] = useState<any>()
  const showAnim = useRef<any>(null)
  const loginUrl = 'https://app.layersup.com/tr/login'
  const { i18n, t } = useTranslation('common')

  const handleRect = useCallback((node: HTMLDivElement) => {
    navbarRef.current = node
    setElementRect(node?.getBoundingClientRect())
  }, [])

  useEffect(() => {
    if (!elementRect) return

    showAnim.current = gsap
      .from(navbarRef.current, {
        autoAlpha: 0,
        paused: true,
        duration: 0.2,
      })
      .progress(1)

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        start: `top+=${window.innerHeight / 4} top+=${elementRect?.bottom}`,
        end: 'max',
        onEnter: () => {
          gsap.to(navbarRef.current, {
            yPercent: -50,
          })
        },
        onEnterBack: () => {
          gsap.to(navbarRef.current, {
            yPercent: 0,
            duration: 0.3,
          })
        },
        onLeave: () => {
          gsap.to(navbarRef.current, {
            yPercent: -50,
          })
        },
        onLeaveBack: () => {
          gsap.to(navbarRef.current, {
            yPercent: 0,
            duration: 0.3,
          })
        },
        onUpdate: (self) => {
          if (self.direction === -1) {
            showAnim.current.play()
          } else {
            showAnim.current.reverse()
            setIsOpen(false)
          }
        },
        // markers: true,
      })
    })

    return () => {
      ctx && ctx.revert()
    }
  }, [isMounted, elementRect, setIsOpen])

  useEffect(() => {
    if (!showAnim.current) return

    if (isOpen) {
      showAnim.current.play()
    }
  }, [isOpen])

  return (
    <>
      <header
        className={cn(s.header, [
          s[
            currentRoute
              ? routes[i18n.language === 'en' ? 'en' : 'tr'][currentRoute].type
              : 'null'
          ],
        ])}
      >
        <CustomLink href="/" className={cn(s.logoC, 'cursor-pointer')}>
          <CustomImage
            src="/img/layers-logo.svg"
            alt="Layers Logo"
            width={206}
            height={193}
            style={{ objectFit: 'contain' }}
            priority="high"
          />
        </CustomLink>

        <ClientOnly>
          {isMounted && (
            <div
              className={cn(s.navbarC, { [s.absolute]: isAbsolute })}
              ref={handleRect}
            >
              {!isMobile && <NavbarDesktop />}
              {isMobile && <NavbarMobile loginUrl={loginUrl} />}
            </div>
          )}
        </ClientOnly>

        <div className={s.actions}>
          <div className={s.btn}>
            <ClientOnly>
              <LanguageSelect />
            </ClientOnly>
          </div>
          <CustomLink
            href="https://app.layersup.com/tr/login"
            target="_blank"
            rel="noreferrer noopener"
            className={s.btn}
          >
            {t('header.login')}
            <div className={cn(s.iconC, 'flex-center')}>
              <IconLogin fill="var(--black)" />
            </div>
          </CustomLink>
        </div>
      </header>
    </>
  )
}

export default Header
