import { useEffect, useRef, useState } from 'react'
import s from './upcoming-accordion.module.scss'

import cn from 'clsx'
import { useLockBodyScroll, useMedia } from 'react-use'
import { useTranslation } from 'next-i18next'
import { Expo, gsap } from 'gsap'

import IconArrowDropdown from '@/components/icons/icon-arrow-dropdown'
import IconCalendar from '@/components/icons/icon-calendar'
import IconX from '@/components/icons/icon-x'
import { useMenuStore } from '@/lib/store/menu'
import { EventAccordion } from './event-accordion'

const UpcomingAccordion = () => {
  const ref = useRef<HTMLDivElement>(null)
  const wrapperRef = useRef<HTMLDivElement>(null)
  const isMobile = useMedia('(max-width: 800px)', true)
  const [isOpen, setIsOpen] = useState(false)
  const { setPosition } = useMenuStore()
  useLockBodyScroll(isOpen && !isMobile)
  const { t } = useTranslation('common')

  const accItems = [
    {
      name: t('upcomingEvents.items.i1.title'),
      description: t('upcomingEvents.items.i1.desc'),
      info: {
        date: t('upcomingEvents.items.i1.date'),
        location: t('upcomingEvents.items.i1.location'),
      },
      link: {
        text: t('upcomingEvents.items.i1.btn.btnText'),
        path: t('upcomingEvents.items.i1.btn.path'),
      },
    },
  ]

  useEffect(() => {
    if (isOpen) {
      gsap.to(wrapperRef.current, {
        ease: Expo.easeInOut,
        duration: 1,
        height: 'auto',
        onStart: () => {
          setPosition(true)
          console.log('start')
        },
      })
    } else {
      gsap.to(wrapperRef.current, {
        ease: Expo.easeInOut,
        duration: 0.8,
        height: 0,
        onComplete: () => {
          setPosition(false)
          console.log('end')
        },
      })
    }
  }, [isOpen, setPosition])

  return (
    <div
      className={cn(s.accordion, {
        [s.open]: isOpen,
      })}
      ref={ref}
    >
      <div
        className={cn(s.accordionHeader, 'cursor-pointer')}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {/* <div className={cn(s.close, s.dummy)}>
          <div className={cn(s.iconC, 'flex-center')}>
            <IconX />
          </div>
          <p className={s.text}>Close</p>
        </div> */}

        <div className={cn(s.title)}>
          <div className={s.iconC}>
            <IconCalendar />
          </div>

          <p className={s.text}>{t('upcomingEvents.title')}</p>

          <div className={cn(s.iconC, s.arrow, 'flex-center')}>
            <IconArrowDropdown />
          </div>
        </div>

        {/* <div className={s.close}>
          <div className={s.iconC}>
            <IconX />
          </div>
          <p className={s.text}>Close</p>
        </div> */}
      </div>

      <div className={cn(s.overflowC, 'hidden-overflow')} ref={wrapperRef}>
        <div className={s.accordionBody}>
          <EventAccordion items={accItems} />
        </div>
      </div>
    </div>
  )
}

export default UpcomingAccordion
