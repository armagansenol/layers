import { ReactElement, useRef } from 'react'
import s from './marquee.module.scss'

import cn from 'clsx'
import { useIntersection } from 'react-use'

type Props = {
  children: ReactElement
  repeat?: number
  duration?: number
  offset?: number
  inverted?: boolean
  className?: string
  animationStart?: boolean
}

const Marquee = ({
  children,
  repeat = 2,
  duration = 20,
  offset = 0,
  inverted = false,
  className,
  animationStart = true,
  ...props
}: Props) => {
  const ref = useRef<HTMLDivElement>(null)
  const intersection = useIntersection(ref, { threshold: 0 })

  return (
    <div
      ref={ref}
      className={cn(
        className,
        s.marquee,
        inverted && s.inverted,
        intersection?.isIntersecting && 'running'
      )}
      style={
        {
          '--duration': duration + 's',
          '--offset': (offset % 100) + '%',
          '--animation-status':
            intersection?.isIntersecting && animationStart
              ? 'running'
              : 'paused',
        } as React.CSSProperties
      }
      {...props}
    >
      {new Array(repeat).fill(children).map((_, i) => (
        <div key={i} className={s.inner}>
          {children}
        </div>
      ))}
    </div>
  )
}

export { Marquee }
