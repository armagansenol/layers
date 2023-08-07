import { useCallback, useEffect, useReducer, useRef, useState } from 'react'
import s from './header.module.scss'

import cn from 'clsx'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { useMedia } from 'react-use'

import IconArrowDropdown from '@/components/icons/icon-arrow-dropdown'
import { Image } from '@/components/image'
import { ClientOnly } from '@/components/isomorphic'
import LanguageSelect from '@/components/languageSelect'
import { Link } from '@/components/link'
import { NavbarDesktop } from '@/components/navbar/desktop'
import { NavbarMobile } from '@/components/navbar/mobile'
import { routes } from '@/global'
import { useMenuStore } from '@/lib/menuStore'

const Header = () => {
  const navbarRef = useRef<any>(null)
  const { currentRoute } = useMenuStore()
  const isMobile = useMedia('(max-width: 800px)')

  const [isMounted, toggle] = useReducer((p) => !p, true)
  const [elementRect, setElementRect] = useState<any>()

  const handleRect = useCallback((node: HTMLDivElement) => {
    navbarRef.current = node
    setElementRect(node?.getBoundingClientRect())
  }, [])

  useEffect(() => {
    if (!elementRect) return

    const ctx = gsap.context(() => {
      const showAnim = gsap
        .from(navbarRef.current, {
          autoAlpha: 0,
          paused: true,
          duration: 0.2,
        })
        .progress(1)

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
          self.direction === -1 ? showAnim.play() : showAnim.reverse()
        },
        // markers: true,
      })
    })

    return () => {
      ctx && ctx.revert()
    }
  }, [isMounted, elementRect])

  return (
    <>
      <header
        className={cn(s.header, [
          s[currentRoute ? routes[currentRoute].type : 'null'],
        ])}
      >
        <Link href="/" className={cn(s.logoC, 'cursor-pointer')}>
          <Image
            src="/img/layers-logo.svg"
            alt="Layers Logo"
            width="206"
            height="193"
            style={{ objectFit: 'contain' }}
          />
        </Link>

        <ClientOnly>
          {isMounted && (
            <div className={s.navbarC} ref={handleRect}>
              {isMobile ? <NavbarMobile /> : <NavbarDesktop />}
            </div>
          )}
        </ClientOnly>

        <div className={s.actions}>
          <div className={s.btn}>
            <LanguageSelect />
          </div>
          <button className={s.btn}>
            Login{' '}
            <div className={s.iconC}>
              <IconArrowDropdown />
            </div>
          </button>
        </div>
      </header>
    </>
  )
}

export default Header
