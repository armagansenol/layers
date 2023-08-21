import React from 'react'
import s from './error-message.module.scss'

import { AnimatePresence, motion } from 'framer-motion'
import cn from 'clsx'
import IconX from '@/components/icons/icon-x'
import { useErrorStore } from '@/lib/store/error'

type Props = {
  messages: string[]
}

const ErrorMessage = ({ messages = [] }: Props) => {
  const errorStore = useErrorStore()

  return (
    <AnimatePresence mode="wait">
      <motion.div
        className={s.errorMessage}
        animate={messages?.length > 0 ? 'open' : 'closed'}
        initial="closed"
        variants={{
          open: {
            opacity: 1,
            transition: { duration: 0.2, ease: 'easeInOut' },
            x: 0,
          },
          closed: {
            opacity: 0,
            transition: { duration: 0.2, ease: 'easeInOut' },
            x: 100,
          },
        }}
        onClick={() => errorStore.clearMessages()}
      >
        <ul>
          {messages.map((message, i) => {
            return (
              <li key={i}>
                <p>{message}</p>
              </li>
            )
          })}
        </ul>
        <div className={cn(s.close, 'flex-center', 'cursor-pointer')}>
          <IconX />
        </div>
      </motion.div>
    </AnimatePresence>
  )
}

export default ErrorMessage
