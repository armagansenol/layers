import React, { useEffect, useRef } from 'react'
import cn from 'clsx'
import s from './why-layers.module.scss'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

const WhyLayers = () => {
  const ref = useRef(null)
  const q = gsap.utils.selector(ref)

  const imgs = [
    'https://images.unsplash.com/photo-1688902325667-d26ac5bcc16b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=701&q=80',
    'https://images.unsplash.com/photo-1688902325667-d26ac5bcc16b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=701&q=80',
    'https://images.unsplash.com/photo-1688902325667-d26ac5bcc16b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=701&q=80',
    'https://images.unsplash.com/photo-1688902325667-d26ac5bcc16b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=701&q=80',
  ]

  useEffect(() => {
    const ctx = gsap.context(() => {
      const why = q('[data-text-why]')
      const layers = q('[data-text-layers]')

      const imgs = q('[data-imgs]')
      const imgsArr = q('[data-img]')

      gsap.set(imgs, {
        yPercent: -500,
      })

      imgsArr.forEach((img, i) => {
        gsap.set(img, {
          yPercent: () => -100 * i,
          rotate: () => -10 * i,
          opacity: () => 0 - i * 0.2,
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
          [imgs, ...imgsArr],
          {
            yPercent: -50,
            opacity: 1,
          },
          's'
        )

      ScrollTrigger.create({
        id: 'pinned-images',
        animation: tl,
        scrub: 1,
        trigger: ref.current,
        markers: true,
        pin: true,
        end: () => `+=${5000}px`,
      })
    })

    return () => ctx.revert()
  }, [q])

  return (
    <div className={cn(s.whyLayers, 'flex-center')} ref={ref}>
      <div className={s.imgs}>
        <div className={s.t} data-imgs>
          {imgs.map((img, i) => {
            return (
              <div key={i} className={s.imgC} data-img>
                <img src={img} alt="alt" />
              </div>
            )
          })}
        </div>
      </div>

      <h2 className={s.textC}>
        <span data-text-why>Why</span>
        <span data-text-layers>Layers?</span>
      </h2>
    </div>
  )
}

export default WhyLayers
