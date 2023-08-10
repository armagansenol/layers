import { useEffect, useRef, useState } from 'react'
import s from './upcoming-accordion.module.scss'

import cn from 'clsx'
import { cubicBezier } from 'framer-motion'
import { useLockBodyScroll } from 'react-use'

import IconArrowDropdown from '@/components/icons/icon-arrow-dropdown'
import IconCalendar from '@/components/icons/icon-calendar'
import IconX from '@/components/icons/icon-x'
import { useMenuStore } from '@/lib/menuStore'
import { gsap } from 'gsap'
import { EventAccordion } from './event-accordion'

const ease = cubicBezier(0.16, 1, 0.3, 1)

const UpcomingAccordion = () => {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const [isOpen, setIsOpen] = useState(false)
  const { setPosition } = useMenuStore()
  useLockBodyScroll(isOpen)

  const accItems = [
    {
      name: 'GITEX AFRICA, Morocco',
      description:
        'GITEX AFRICA, the continent’s largest all-inclusive tech event, will connect tech titans, governments, SMEs, start-ups, coders, investors and academia, to accelerate, collaborate and explore new ventures. A curation of emerging technologies from fintech, e-commerce, cloud, IoT, AI, telecom to cybersecurity will be heavily featured during the three-day annual pan-African forum in Marrakech, Morocco.',
      info: {
        date: 'May 31 - June 02 2023',
        location: 'Istanbul, Turkey',
      },
      link: {
        text: 'Review Event',
        path: '/',
      },
    },
    {
      name: 'GITEX AFRICA, Morocco',
      description:
        'GITEX AFRICA, the continent’s largest all-inclusive tech event, will connect tech titans, governments, SMEs, start-ups, coders, investors and academia, to accelerate, collaborate and explore new ventures. A curation of emerging technologies from fintech, e-commerce, cloud, IoT, AI, telecom to cybersecurity will be heavily featured during the three-day annual pan-African forum in Marrakech, Morocco. GITEX AFRICA, the continent’s largest all-inclusive tech event, will connect tech titans, governments, SMEs, start-ups, coders, investors and academia, to accelerate, collaborate and explore new ventures. A curation of emerging technologies from fintech, e-commerce, cloud, IoT, AI, telecom to cybersecurity will be heavily featured during the three-day annual pan-African forum in Marrakech, Morocco.',
      info: {
        date: 'May 31 - June 02 2023',
        location: 'Istanbul, Turkey',
      },
      link: {
        text: 'Review Event',
        path: '/',
      },
    },
    {
      name: 'GITEX AFRICA, Morocco',
      description:
        'GITEX AFRICA, the continent’s largest all-inclusive tech event, will connect tech titans, governments, SMEs, start-ups, coders, investors and academia, to accelerate, collaborate and explore new ventures. A curation of emerging technologies from fintech, e-commerce, cloud, IoT, AI, telecom to cybersecurity will be heavily featured during the three-day annual pan-African forum in Marrakech, Morocco.',
      info: {
        date: 'May 31 - June 02 2023',
        location: 'Istanbul, Turkey',
      },
      link: {
        text: 'Review Event',
        path: '/',
      },
    },
    {
      name: 'GITEX AFRICA, Morocco',
      description:
        'GITEX AFRICA, the continent’s largest all-inclusive tech event, will connect tech titans, governments, SMEs, start-ups, coders, investors and academia, to accelerate, collaborate and explore new ventures. A curation of emerging technologies from fintech, e-commerce, cloud, IoT, AI, telecom to cybersecurity will be heavily featured during the three-day annual pan-African forum in Marrakech, Morocco.',
      info: {
        date: 'May 31 - June 02 2023',
        location: 'Istanbul, Turkey',
      },
      link: {
        text: 'Review Event',
        path: '/',
      },
    },
    {
      name: 'GITEX AFRICA, Morocco',
      description:
        'GITEX AFRICA, the continent’s largest all-inclusive tech event, will connect tech titans, governments, SMEs, start-ups, coders, investors and academia, to accelerate, collaborate and explore new ventures. A curation of emerging technologies from fintech, e-commerce, cloud, IoT, AI, telecom to cybersecurity will be heavily featured during the three-day annual pan-African forum in Marrakech, Morocco. GITEX AFRICA, the continent’s largest all-inclusive tech event, will connect tech titans, governments, SMEs, start-ups, coders, investors and academia, to accelerate, collaborate and explore new ventures. A curation of emerging technologies from fintech, e-commerce, cloud, IoT, AI, telecom to cybersecurity will be heavily featured during the three-day annual pan-African forum in Marrakech, Morocco.',
      info: {
        date: 'May 31 - June 02 2023',
        location: 'Istanbul, Turkey',
      },
      link: {
        text: 'Review Event',
        path: '/',
      },
    },
    {
      name: 'GITEX AFRICA, Morocco',
      description:
        'GITEX AFRICA, the continent’s largest all-inclusive tech event, will connect tech titans, governments, SMEs, start-ups, coders, investors and academia, to accelerate, collaborate and explore new ventures. A curation of emerging technologies from fintech, e-commerce, cloud, IoT, AI, telecom to cybersecurity will be heavily featured during the three-day annual pan-African forum in Marrakech, Morocco.',
      info: {
        date: 'May 31 - June 02 2023',
        location: 'Istanbul, Turkey',
      },
      link: {
        text: 'Review Event',
        path: '/',
      },
    },
    {
      name: 'GITEX AFRICA, Morocco',
      description:
        'GITEX AFRICA, the continent’s largest all-inclusive tech event, will connect tech titans, governments, SMEs, start-ups, coders, investors and academia, to accelerate, collaborate and explore new ventures. A curation of emerging technologies from fintech, e-commerce, cloud, IoT, AI, telecom to cybersecurity will be heavily featured during the three-day annual pan-African forum in Marrakech, Morocco.',
      info: {
        date: 'May 31 - June 02 2023',
        location: 'Istanbul, Turkey',
      },
      link: {
        text: 'Review Event',
        path: '/',
      },
    },
    {
      name: 'GITEX AFRICA, Morocco',
      description:
        'GITEX AFRICA, the continent’s largest all-inclusive tech event, will connect tech titans, governments, SMEs, start-ups, coders, investors and academia, to accelerate, collaborate and explore new ventures. A curation of emerging technologies from fintech, e-commerce, cloud, IoT, AI, telecom to cybersecurity will be heavily featured during the three-day annual pan-African forum in Marrakech, Morocco. GITEX AFRICA, the continent’s largest all-inclusive tech event, will connect tech titans, governments, SMEs, start-ups, coders, investors and academia, to accelerate, collaborate and explore new ventures. A curation of emerging technologies from fintech, e-commerce, cloud, IoT, AI, telecom to cybersecurity will be heavily featured during the three-day annual pan-African forum in Marrakech, Morocco.',
      info: {
        date: 'May 31 - June 02 2023',
        location: 'Istanbul, Turkey',
      },
      link: {
        text: 'Review Event',
        path: '/',
      },
    },
    {
      name: 'GITEX AFRICA, Morocco',
      description:
        'GITEX AFRICA, the continent’s largest all-inclusive tech event, will connect tech titans, governments, SMEs, start-ups, coders, investors and academia, to accelerate, collaborate and explore new ventures. A curation of emerging technologies from fintech, e-commerce, cloud, IoT, AI, telecom to cybersecurity will be heavily featured during the three-day annual pan-African forum in Marrakech, Morocco.',
      info: {
        date: 'May 31 - June 02 2023',
        location: 'Istanbul, Turkey',
      },
      link: {
        text: 'Review Event',
        path: '/',
      },
    },
    {
      name: 'GITEX AFRICA, Morocco',
      description:
        'GITEX AFRICA, the continent’s largest all-inclusive tech event, will connect tech titans, governments, SMEs, start-ups, coders, investors and academia, to accelerate, collaborate and explore new ventures. A curation of emerging technologies from fintech, e-commerce, cloud, IoT, AI, telecom to cybersecurity will be heavily featured during the three-day annual pan-African forum in Marrakech, Morocco.',
      info: {
        date: 'May 31 - June 02 2023',
        location: 'Istanbul, Turkey',
      },
      link: {
        text: 'Review Event',
        path: '/',
      },
    },
    {
      name: 'GITEX AFRICA, Morocco',
      description:
        'GITEX AFRICA, the continent’s largest all-inclusive tech event, will connect tech titans, governments, SMEs, start-ups, coders, investors and academia, to accelerate, collaborate and explore new ventures. A curation of emerging technologies from fintech, e-commerce, cloud, IoT, AI, telecom to cybersecurity will be heavily featured during the three-day annual pan-African forum in Marrakech, Morocco. GITEX AFRICA, the continent’s largest all-inclusive tech event, will connect tech titans, governments, SMEs, start-ups, coders, investors and academia, to accelerate, collaborate and explore new ventures. A curation of emerging technologies from fintech, e-commerce, cloud, IoT, AI, telecom to cybersecurity will be heavily featured during the three-day annual pan-African forum in Marrakech, Morocco.',
      info: {
        date: 'May 31 - June 02 2023',
        location: 'Istanbul, Turkey',
      },
      link: {
        text: 'Review Event',
        path: '/',
      },
    },
    {
      name: 'GITEX AFRICA, Morocco',
      description:
        'GITEX AFRICA, the continent’s largest all-inclusive tech event, will connect tech titans, governments, SMEs, start-ups, coders, investors and academia, to accelerate, collaborate and explore new ventures. A curation of emerging technologies from fintech, e-commerce, cloud, IoT, AI, telecom to cybersecurity will be heavily featured during the three-day annual pan-African forum in Marrakech, Morocco.',
      info: {
        date: 'May 31 - June 02 2023',
        location: 'Istanbul, Turkey',
      },
      link: {
        text: 'Review Event',
        path: '/',
      },
    },
  ]

  useEffect(() => {
    gsap.set(wrapperRef.current, {
      height: 0,
    })
  }, [])

  useEffect(() => {
    // const showAnim = gsap
    //   .from(wrapperRef.current, {
    //     ease: 'cubic-bezier(0.16, 1, 0.3, 1)',
    //     height: 0,
    //     onStart: () => {
    //       setPosition(true)
    //       console.log('start')
    //     },
    //     onComplete: () => {
    //       setPosition(false)
    //       console.log('end')
    //     },
    //   })
    //   .progress(1)
    // isOpen ? showAnim.play() : showAnim.reverse()

    if (isOpen) {
      gsap.to(wrapperRef.current, {
        ease: 'cubic-bezier(0.16, 1, 0.3, 1)',
        height: 'auto',
        onStart: () => {
          setPosition(true)
          console.log('start')
        },
      })
    } else {
      gsap.to(wrapperRef.current, {
        ease: 'cubic-bezier(0.16, 1, 0.3, 1)',
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
    >
      <div
        className={cn(s.accordionHeader, 'cursor-pointer')}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <div className={cn(s.close, s.dummy)}>
          <div className={cn(s.iconC, 'flex-center')}>
            <IconX />
          </div>
          <p className={s.text}>Close</p>
        </div>

        <div className={cn(s.title)}>
          <div className={s.iconC}>
            <IconCalendar />
          </div>

          <p className={s.text}>Upcoming Events</p>

          <div className={cn(s.iconC, s.arrow, 'flex-center')}>
            <IconArrowDropdown />
          </div>
        </div>

        <div className={s.close}>
          <div className={s.iconC}>
            <IconX />
          </div>
          <p className={s.text}>Close</p>
        </div>
      </div>

      <div className="hidden-overflow" ref={wrapperRef}>
        <div className={s.accordionBody}>
          <EventAccordion items={accItems} />
        </div>
      </div>
    </div>
  )
}

export default UpcomingAccordion
