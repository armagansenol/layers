import { useState } from 'react'
import s from './button.module.scss'

import cn from 'clsx'
import { AnimatePresence, cubicBezier, motion } from 'framer-motion'
import { useRouter } from 'next/router'

import IconArrow from '@/components/icons/icon-arrow'
import { Marquee } from '@/components/marquee'

const animationVariants = {
  open: {
    opacity: 1,
  },
  closed: {
    opacity: 0,
  },
}

type Props = {
  text: string
  path?: string
  size?: 'sm' | 'md' | 'lg' | 'xl'
  callback?: (() => void) | null
}

const Button: React.FC<Props> = ({
  text = 'Button Text',
  path = '/',
  size = 'md',
  callback = null,
}: Props) => {
  const router = useRouter()
  const [hovered, setHovered] = useState(false)

  return (
    <button
      className={cn(s.button, 'cursor-pointer', [s[size]])}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      {...(callback
        ? { onClick: callback }
        : { onClick: () => router.push(path) })}
    >
      <AnimatePresence mode="popLayout">
        <motion.div
          className={s.text}
          key={`${hovered}`}
          animate={hovered ? 'open' : 'close'}
          variants={animationVariants}
        >
          {hovered ? (
            <Marquee repeat={3} duration={3}>
              <span>{text}</span>
            </Marquee>
          ) : (
            <span>{text}</span>
          )}
        </motion.div>
      </AnimatePresence>

      <span className={s.iconC}>
        <div className={cn(s.transformC, s.tuple, 'flex-center')}>
          <div className={s.icon}>
            <IconArrow />
          </div>
        </div>

        <div className={cn(s.transformC, 'flex-center')}>
          <div className={s.icon}>
            <IconArrow />
          </div>
        </div>
      </span>
    </button>
  )
}

export default Button
