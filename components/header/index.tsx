import { useEffect, useRef } from 'react'
import s from './header.module.scss'

import cn from 'clsx'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { useRouter } from 'next/router'
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
  const navbarCRef = useRef<HTMLDivElement>(null)
  const router = useRouter()
  const { currentRoute, setIsOpen } = useMenuStore()
  const isMobile = useMedia('(max-width: 800px)')

  useEffect(() => {
    if (!navbarCRef.current) return

    const ctx = gsap.context(() => {
      const showAnim = gsap
        .from(navbarCRef.current, {
          autoAlpha: 0,
          paused: true,
          duration: 0.2,
          yPercent: -100,
          // onComplete: () => {
          //   !navbarCRef.current?.classList.contains(s.fixed) &&
          //     navbarCRef.current?.classList.toggle(s.fixed)
          // },
        })
        .progress(1)

      ScrollTrigger.create({
        start: `top+=${window.innerHeight / 2} top+=${
          navbarCRef.current?.getBoundingClientRect().bottom
        }`,
        end: 'max',
        // onEnterBack: () => {
        //   !navbarCRef.current?.classList.contains(s.fixed) &&
        //     navbarCRef.current?.classList.toggle(s.fixed)
        // },
        onUpdate: (self) => {
          self.direction === -1 ? showAnim.play() : showAnim.reverse()
        },
        // markers: true,
      })
    })

    return () => {
      ctx && ctx.revert()
    }
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [router.asPath])

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
            alt="6 hours"
            width="206"
            height="193"
            style={{ objectFit: 'contain' }}
          />
        </Link>

        <ClientOnly>
          <div className={s.navbarC} ref={navbarCRef}>
            {isMobile ? <NavbarMobile /> : <NavbarDesktop />}
          </div>
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
