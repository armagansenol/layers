import { memo, useCallback, useLayoutEffect, useRef } from 'react'
import s from './custom-cursor.module.scss'

import { gsap } from 'gsap'

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

// Function for Mouse Move Scale Change
function getScale(diffX: number, diffY: number) {
  const distance = Math.sqrt(Math.pow(diffX, 2) + Math.pow(diffY, 2))
  return Math.min(distance / 800, 0.25)
}

// Function For Mouse Movement Angle in Degrees
function getAngle(diffX: number, diffY: number) {
  return (Math.atan2(diffY, diffX) * 180) / Math.PI
}

// Jelly Blob Function
const CustomCursor = () => {
  const jellyRef = useRef(null)
  const textRef = useRef(null)

  // Save pos and velocity Objects
  const pos: any = useInstance(() => ({ x: 0, y: 0 }))
  const vel: any = useInstance(() => ({ x: 0, y: 0 }))
  const set: any = useInstance()

  useLayoutEffect(() => {
    set.x = gsap.quickSetter(jellyRef.current, 'x', 'px')
    set.y = gsap.quickSetter(jellyRef.current, 'y', 'px')
    set.r = gsap.quickSetter(jellyRef.current, 'rotate', 'deg')
    set.sx = gsap.quickSetter(jellyRef.current, 'scaleX')
    set.sy = gsap.quickSetter(jellyRef.current, 'scaleY')
    set.rt = gsap.quickSetter(textRef.current, 'rotate', 'deg')
  }, [])

  // Start Animation loop
  const loop = useCallback(() => {
    // Calculate angle and scale based on velocity
    var rotation = getAngle(vel.x, vel.y)
    var scale = getScale(vel.x, vel.y)

    set.x(pos.x)
    set.y(pos.y)
    set.r(rotation)
    set.sx(1 + scale)
    set.sy(1 - scale)
    set.rt(-rotation)
  }, [])

  // Run on Mouse Move
  useLayoutEffect(() => {
    // Caluclate Everything Function
    const setFromEvent = (e: any) => {
      // Mouse X and Y
      const x = e.clientX
      const y = e.clientY
      const mx = e.movementX
      const my = e.movementY
      const speed = 0.25

      // Animate Pos Object and calculate Vel Object Velocity
      gsap.to(pos, {
        x: x,
        y: y,
        duration: speed,
        onUpdate: () => {
          vel.x = x - pos.x
          vel.y = y - pos.y
        },
      })

      loop()
    }

    window.addEventListener('mousemove', setFromEvent)

    return () => {
      window.removeEventListener('mousemove', setFromEvent)
    }
  }, [])

  useTicker(loop, false)

  return (
    <div ref={jellyRef} id={'jelly-id'} className={s.jellyBlob}>
      {/* <div ref={textRef} id={'text-id'} className={s.insideText}>
        #
      </div> */}
    </div>
  )
}

export default memo(CustomCursor)
