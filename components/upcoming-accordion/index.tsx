import { useState } from 'react'
import s from './upcoming-accordion.module.scss'

import cn from 'clsx'
import { cubicBezier, motion } from 'framer-motion'
import { EventAccordion } from '../project-accordion'
import IconCalendar from '../icons/icon-calendar'
import IconX from '../icons/icon-x'
import IconArrowDropdown from '../icons/icon-arrow-dropdown'

const UpcomingAccordion = () => {
  const [isOpen, setIsOpen] = useState(false)

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
        ui: 'Review Event',
        url: '/',
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
        ui: 'Review Event',
        url: '/',
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
        ui: 'Review Event',
        url: '/',
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
        ui: 'Review Event',
        url: '/',
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
        ui: 'Review Event',
        url: '/',
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
        ui: 'Review Event',
        url: '/',
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
        ui: 'Review Event',
        url: '/',
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
        ui: 'Review Event',
        url: '/',
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
        ui: 'Review Event',
        url: '/',
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
        ui: 'Review Event',
        url: '/',
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
        ui: 'Review Event',
        url: '/',
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
        ui: 'Review Event',
        url: '/',
      },
    },
  ]

  const ease = cubicBezier(0.16, 1, 0.3, 1)

  return (
    <div className={s.accordion}>
      <div
        className={cn(s.accordionHeader, 'cursor-pointer', {
          [s.open]: isOpen,
        })}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <div className={cn(s.close, s.dummy)}>
          <div className={s.iconC}>
            <IconX />
          </div>
          <p className={s.text}>Close</p>
        </div>

        <div className={cn(s.title)}>
          <div className={s.iconC}>
            <IconCalendar />
          </div>

          <p className={s.text}>Upcoming Events</p>

          <div className={cn(s.iconC, s.arrow)}>
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

      <motion.div
        className="hidden-overflow"
        initial="closed"
        animate={isOpen ? 'open' : 'closed'}
        exit="closed"
        variants={{
          open: {
            height: 'auto',
            // opacity: 1,
            transition: { duration: 1, ease },
          },
          closed: {
            height: 0,
            // opacity: 0,
            transition: { duration: 1, ease },
          },
        }}
      >
        <div className={s.accordionBody}>
          <EventAccordion items={accItems} />
        </div>
      </motion.div>
    </div>
  )
}

export default UpcomingAccordion
