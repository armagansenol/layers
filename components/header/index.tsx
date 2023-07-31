import { useEffect, useRef } from 'react'
import s from './header.module.scss'

import cn from 'clsx'
import { AnimatePresence, cubicBezier, motion } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

import IconArrowDropdown from '@/components/icons/icon-arrow-dropdown'
import { Image } from '@/components/image'
import { Link } from '@/components/link'
import { MainRoute, routes } from '@/global'
import { useMenuStore } from '@/lib/menuStore'
import { useRouter } from 'next/router'
import LanguageSelect from '@/components/languageSelect'

const ease = cubicBezier(0.16, 1, 0.3, 1)

const Header = () => {
  const menuRef = useRef<HTMLElement>(null)
  const router = useRouter()
  const { currentRoute, isOpen, setCurrentRoute, setIsOpen } = useMenuStore()

  function handleMenu(
    type: MainRoute.features | MainRoute.services | MainRoute.resources
  ) {
    if (type) {
      setCurrentRoute(type)
    }

    setIsOpen(true)
  }

  useEffect(() => {
    if (!menuRef.current) return

    const ctx = gsap.context(() => {
      const showAnim = gsap
        .from(menuRef.current, {
          autoAlpha: 0,
          paused: true,
          duration: 0.2,
          yPercent: -100,
          // onComplete: () => {
          //   !menuRef.current?.classList.contains(s.fixed) &&
          //     menuRef.current?.classList.toggle(s.fixed)
          // },
        })
        .progress(1)

      ScrollTrigger.create({
        start: `top+=${window.innerHeight / 2} top+=${
          menuRef.current?.getBoundingClientRect().bottom
        }`,
        end: 'max',
        // onEnterBack: () => {
        //   !menuRef.current?.classList.contains(s.fixed) &&
        //     menuRef.current?.classList.toggle(s.fixed)
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
                <p className={s.itemText}>{value.ui}</p>
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
            <p className={s.itemText}>Request A Demo</p>
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
