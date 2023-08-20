import { memo, useCallback, useLayoutEffect, useRef } from 'react'
import s from './custom-cursor.module.scss'

import cn from 'clsx'
import { AnimatePresence, motion, useAnimationFrame } from 'framer-motion'
import { gsap } from 'gsap'

import { CursorType, useCursorStore } from '@/lib/cursorStore'

function useTicker(callback: () => void, paused: boolean) {
  useLayoutEffect(() => {
    if (!paused && callback) {
      gsap.ticker.add(callback)
    }
    return () => {
      gsap.ticker.remove(callback)
    }
  }, [callback, paused])
}

const EMPTY = {}

function useInstance(value = {}) {
  const ref = useRef(EMPTY)
  if (ref.current === EMPTY) {
    ref.current = typeof value === 'function' ? value() : value
  }
  return ref.current
}

// // Function for Mouse Move Scale Change
// function getScale(diffX: number, diffY: number) {
//   const distance = Math.sqrt(Math.pow(diffX, 2) + Math.pow(diffY, 2))
//   return Math.min(distance / 800, 0.25)
// }

// // Function For Mouse Movement Angle in Degrees
// function getAngle(diffX: number, diffY: number) {
//   return (Math.atan2(diffY, diffX) * 180) / Math.PI
// }

// Jelly Blob Function
const CustomCursor = () => {
  const jellyRef = useRef(null)
  // const textRef = useRef(null)

  // Save pos and velocity Objects
  const pos: any = useInstance(() => ({ x: 0, y: 0 }))
  // const vel: any = useInstance(() => ({ x: 0, y: 0 }))
  const set: any = useInstance()

  useLayoutEffect(() => {
    set.x = gsap.quickSetter(jellyRef.current, 'x', 'px')
    set.y = gsap.quickSetter(jellyRef.current, 'y', 'px')
    // set.r = gsap.quickSetter(jellyRef.current, 'rotate', 'deg')
    // set.sx = gsap.quickSetter(jellyRef.current, 'scaleX')
    // set.sy = gsap.quickSetter(jellyRef.current, 'scaleY')
    // set.rt = gsap.quickSetter(textRef.current, 'rotate', 'deg')
  }, [])

  // Start Animation loop
  const loop = useCallback(() => {
    // Calculate angle and scale based on velocity
    // var rotation = getAngle(vel.x, vel.y)
    // var scale = getScale(vel.x, vel.y)

    set.x(pos.x)
    set.y(pos.y)
    // set.r(rotation)
    // set.sx(1 + scale)
    // set.sy(1 - scale)
    // set.rt(-rotation)
  }, [])

  // Run on Mouse Move
  useLayoutEffect(() => {
    // Caluclate Everything Function
    const setFromEvent = (e: any) => {
      // Mouse X and Y
      const x = e.clientX
      const y = e.clientY
      // const mx = e.movementX
      // const my = e.movementY
      const speed = 0

      // Animate Pos Object and calculate Vel Object Velocity
      gsap.to(pos, {
        x: x,
        y: y,
        duration: speed,
        // onUpdate: () => {
        //   vel.x = x - pos.x
        //   vel.y = y - pos.y
        // },
      })

      loop()
    }

    window.addEventListener('mousemove', setFromEvent)

    return () => {
      window.removeEventListener('mousemove', setFromEvent)
    }
  }, [])

  useTicker(loop, false)

  const { cursorType, mediaSrc } = useCursorStore()

  const imgRef = useRef<HTMLDivElement | null>(null)

  useAnimationFrame((time, delta) => {
    if (!imgRef.current) return
    const y = (1 + Math.sin(time / 1000)) * -10
    const rotate = (1 + Math.sin(time / 1000)) * -5

    imgRef.current.style.transform = `translateY(${y}px) rotate(${rotate}deg)`
  })

  return (
    <div ref={jellyRef} className={cn(s.cursor, mediaSrc && [s[cursorType]])}>
      <AnimatePresence mode="popLayout">
        <motion.div
          key={`${cursorType}-cursor`}
          initial="open"
          animate="open"
          exit="closed"
          variants={{
            open: {
              scale: 1,
              opacity: 1,
              transition: { duration: 0.2 },
            },
            closed: {
              scale: 0,
              opacity: 0,
              transition: { duration: 0.2 },
            },
          }}
        >
          {cursorType === CursorType.marqueeLink ? (
            <div className={s.imgC}>
              <div className={s.transformC} ref={imgRef}>
                <img className={s.img} alt="Next Page Icon" src={mediaSrc} />
              </div>
            </div>
          ) : (
            <div className={s.default}></div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

export default memo(CustomCursor)
