import React, { useEffect, useRef, memo } from 'react'
import s from './why-layers.module.scss'

import cn from 'clsx'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import CustomImage from 'next/image'

const WhyLayers = () => {
  const ref = useRef(null)
  const q = gsap.utils.selector(ref)

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
        // start: 'top+=25% center',
        // end: 'center+=25% center',
        pinSpacing: true,
        pin: true,
        // markers: true,
      })
    })

    return () => ctx.revert()
  }, [q])

  return (
    <div className={cn(s.whyLayers, 'flex-center')} ref={ref}>
      <div className={s.imgs}>
        {new Array(4).fill('img').map((img, i) => {
          return (
            <div key={i} className={s.imgC}>
              <div className={s.transformC} data-img>
                <CustomImage
                  className={s.img}
                  src={`/img/pinned-${i + 1}.jpg`}
                  alt="People Using App"
                  height={1000}
                  width={1000}
                  loading="lazy"
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
