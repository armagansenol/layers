import cn from 'clsx'
import { ReactElement, useRef } from 'react'
import { useIntersection } from 'react-use'
import s from './marquee.module.scss'

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
  duration = 5,
  offset = 0,
  inverted = true,
  className,
  animationStart = true,
  ...props
}: Props) => {
  const ref = useRef<HTMLDivElement>(null)

  const intersection = useIntersection(ref, { threshold: 0 })

  return (
    <div
      ref={ref}
      {...props}
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
