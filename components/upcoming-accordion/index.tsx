import React, { useState } from 'react'
import s from './upcoming-accordion.module.scss'

import { cubicBezier, motion } from 'framer-motion'
import cn from 'clsx'

const UpcomingAccordion = () => {
  const [isOpen, setIsOpen] = useState(false)

  const items = [
    { title: 'GITEX AFRICA, Morocco (May 31 - June 02 2023)' },
    { title: 'GITEX AFRICA, Morocco (May 31 - June 02 2023)' },
    { title: 'GITEX AFRICA, Morocco (May 31 - June 02 2023)' },
    { title: 'GITEX AFRICA, Morocco (May 31 - June 02 2023)' },
    { title: 'GITEX AFRICA, Morocco (May 31 - June 02 2023)' },
    { title: 'GITEX AFRICA, Morocco (May 31 - June 02 2023)' },
    { title: 'GITEX AFRICA, Morocco (May 31 - June 02 2023)' },
    { title: 'GITEX AFRICA, Morocco (May 31 - June 02 2023)' },
    { title: 'GITEX AFRICA, Morocco (May 31 - June 02 2023)' },
    { title: 'GITEX AFRICA, Morocco (May 31 - June 02 2023)' },
    { title: 'GITEX AFRICA, Morocco (May 31 - June 02 2023)' },
    { title: 'GITEX AFRICA, Morocco (May 31 - June 02 2023)' },
    { title: 'GITEX AFRICA, Morocco (May 31 - June 02 2023)' },
    { title: 'GITEX AFRICA, Morocco (May 31 - June 02 2023)' },
    { title: 'GITEX AFRICA, Morocco (May 31 - June 02 2023)' },
  ]

  const ease = cubicBezier(0.16, 1, 0.3, 1)

  return (
    <div className={s.accordion}>
      <div
        className={cn(s.accordionHeader, 'cursor-pointer')}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <p className={s.text}>Upcoming Events</p>
      </div>

      <motion.div
        className="overflow-hidden"
        initial="closed"
        animate={isOpen ? 'open' : 'closed'}
        exit="closed"
        variants={{
          open: {
            height: 'auto',
            opacity: 1,
            transition: { duration: 1, ease },
          },
          closed: {
            height: 0,
            opacity: 0,
            transition: { duration: 1, ease },
          },
        }}
      >
        <div className={s.accordionBody}>
          <div className={s.items}>
            {items.map((item, i) => {
              return (
                <div className={cn(s.item, 'cursor-pointer')} key={i}>
                  {item.title}
                </div>
              )
            })}
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default UpcomingAccordion
