import { gsap } from 'gsap'
import { ReactElement, useEffect, useRef } from 'react'

type Props = {
  children: ReactElement
  wrapperClass?: string
  className?: string
  start?: number
  end?: number
  target?: any
  id?: string
  enabled?: boolean
  pinType?: 'fixed' | 'transform' | undefined
}

export function Sticky({
  children,
  wrapperClass,
  className,
  start = 0,
  end = 0,
  target,
  id = 'sticky',
  enabled = true,
  pinType = 'fixed',
}: Props) {
  const pinSpacer = useRef<any>()
  const trigger = useRef<any>()
  const targetRef = useRef<any>()

  useEffect(() => {
    if (!enabled || !pinSpacer.current || !trigger.current) return
    gsap.set(trigger.current, { clearProps: 'all' })

    const timeline = gsap.timeline({
      scrollTrigger: {
        id,
        pinType,
        pinSpacing: false,
        pinSpacer: pinSpacer.current,
        trigger: trigger.current,
        scrub: true,
        pin: true,
        start: `top top+=${start}px`,
        end: () => {
          if (!targetRef.current || !trigger.current) {
            return 'bottom top'
          }
          const targetRefRect = targetRef.current.getBoundingClientRect()
          const triggerRect = trigger.current.getBoundingClientRect()
          return `+=${targetRefRect.bottom - triggerRect.bottom + end}`
        },
        invalidateOnRefresh: true,
      },
    })

    return () => {
      timeline.kill()
    }
  }, [id, start, enabled, end, pinType])

  useEffect(() => {
    if (target) {
      targetRef.current = document.querySelector(target)
    } else {
      targetRef.current = pinSpacer.current.parentNode
    }
  }, [target])

  return (
    <div
      ref={(node) => {
        pinSpacer.current = node
      }}
      className={wrapperClass}
    >
      <div
        ref={(node) => {
          trigger.current = node
        }}
        className={className}
      >
        {children}
      </div>
    </div>
  )
}
