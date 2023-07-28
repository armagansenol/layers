import React, { useEffect, useRef, memo } from 'react'
import cn from 'clsx'
import s from './why-layers.module.scss'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import Image from 'next/image'
gsap.registerPlugin(ScrollTrigger)

const WhyLayers = () => {
  const ref = useRef(null)
  const q = gsap.utils.selector(ref)

  const imgs = [
    'https://images.unsplash.com/photo-1688590361364-2d153dac2a15?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
    'https://images.unsplash.com/photo-1516519700326-137a56a20cb7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    'https://images.unsplash.com/photo-1688248335728-3ec6d3e1950b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
    'https://images.unsplash.com/photo-1687699498075-5cce2d93d019?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80',
  ]

  useEffect(() => {
    const ctx = gsap.context(() => {
      const why = q('[data-text-why]')
      const layers = q('[data-text-layers]')
      const imgsArr = q('[data-img]')

      imgsArr.forEach((img, i) => {
        gsap.set(img, {
          yPercent: () => Math.pow(i, 2.5),
          xPercent: () => gsap.utils.random(-10, 10) * gsap.utils.random(-1, 1),
          rotation: () =>
            i % 2 === 0 ? gsap.utils.random(-10, -5) : gsap.utils.random(5, 10),
          opacity: 0,
        })
      })

      gsap.set(why, {
        xPercent: -200,
      })

      gsap.set(layers, {
        xPercent: 200,
      })

      const tl = gsap
        .timeline()
        .to(
          [why, layers],
          {
            xPercent: 0,
          },
          's'
        )
        .to(
          imgsArr,
          {
            opacity: 1,
            stagger: 1,
            duration: 0,
          },
          's'
        )

      ScrollTrigger.create({
        id: 'pinned-images',
        animation: tl,
        scrub: true,
        trigger: ref.current,
        start: 'top+=25% center',
        end: 'center+=25% center',
        // markers: true,
      })
    })

    return () => ctx.revert()
  }, [q])

  return (
    <div className={cn(s.whyLayers, 'flex-center')} ref={ref}>
      <div className={s.imgs}>
        {imgs.map((img, i) => {
          return (
            <div key={i} className={s.imgC}>
              <div className={s.transformC} data-img>
                <Image
                  className={s.img}
                  src={`/img/pinned-${i + 1}.jpg`}
                  alt="People Using App"
                  height={10000}
                  width={10000}
                />
              </div>
            </div>
          )
        })}
      </div>

      <h2 className={s.textC}>
        <span data-text-why>Why</span>
        <span data-text-layers>Layers?</span>
      </h2>
    </div>
  )
}

export default memo(WhyLayers)
