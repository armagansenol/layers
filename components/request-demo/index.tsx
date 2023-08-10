import s from './request-demo.module.scss'
import { useEffect, useRef } from 'react'

import cn from 'clsx'
import { Back, gsap } from 'gsap'

import Button from '@/components/button'
import { Image } from '@/components/image'

const RequestDemo = () => {
  const ref = useRef(null)

  useEffect(() => {
    const q = gsap.utils.selector(ref)

    const ctx = gsap.context(() => {
      gsap.set(q('[data-animation-pop]'), {
        opacity: 0,
        rotate: -360,
        scale: 0,
        xPercent: -50,
      })

      gsap.set(q('[data-animation-pop-trigger'), {
        height: 0,
        width: 0,
      })

      gsap.to(q('[data-animation-pop]'), {
        ease: Back.easeOut.config(1),
        opacity: 1,
        rotate: 0,
        scale: 1,
        xPercent: 0,
        stagger: -0.2,
        scrollTrigger: {
          trigger: q('[data-animation-pop-trigger'),
          // markers: true,
          start: 'top center+=25%',
          toggleActions: 'play none none none',
        },
      })

      gsap.to(q('[data-animation-pop-trigger'), {
        duration: 0.8,
        ease: Back.easeOut.config(1),
        height: 'auto',
        width: 'auto',
        scrollTrigger: {
          trigger: q('[data-animation-pop-trigger'),
          // markers: true,
          start: 'top center+=25%',
          toggleActions: 'play none none none',
        },
      })
    })

    return () => ctx.revert()
  }, [])

  return (
    <div className={s.requestDemo} ref={ref}>
      <h2>
        World’s first
        <span className={s.imgs} data-animation-pop-trigger>
          <div className={cn(s.imgC, 'hidden-overflow')} data-animation-pop>
            <Image
              alt="Smiling Person"
              className={s.img}
              height={200}
              loading="lazy"
              src="/img/pop-3.png"
              style={{ objectFit: 'contain' }}
              width={200}
            />
          </div>
          <div className={cn(s.imgC, 'hidden-overflow')} data-animation-pop>
            <Image
              alt="Smiling Person"
              className={s.img}
              height={200}
              loading="lazy"
              src="/img/pop-1.png"
              style={{ objectFit: 'contain' }}
              width={200}
            />
          </div>
          <div className={cn(s.imgC, 'hidden-overflow')} data-animation-pop>
            <Image
              alt="Smiling Person"
              className={s.img}
              height={200}
              loading="lazy"
              src="/img/pop-2.png"
              style={{ objectFit: 'contain' }}
              width={200}
            />
          </div>
        </span>
        <span className={s.colored}>employee-centric</span> <br /> HR Super app,
        designed to <span className={s.colored}>revolutionize</span> how you
        manage your human resources.
      </h2>
      <Button {...{ text: 'Get to Know Us', path: '/about' }} size="lg" />
    </div>
  )
}

export default RequestDemo
