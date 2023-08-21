import { useEffect, useRef } from 'react'
import s from './popping-title.module.scss'

import cn from 'clsx'
import { Back, gsap } from 'gsap'
import { useTranslation } from 'next-i18next'
import { useMedia } from 'react-use'

import Button from '@/components/button'
import CustomImage from '@/components/custom-image'

const PoppingTitle = () => {
  const ref = useRef(null)
  const isMobile = useMedia('(max-width: 800px)', true)
  const { t } = useTranslation('common')

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
        height: isMobile ? 0 : 'auto',
        width: isMobile ? 'auto' : 0,
      })

      gsap.to(q('[data-animation-pop]'), {
        ease: Back.easeOut.config(1),
        duration: 1,
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
  }, [isMobile])

  return (
    <div className={s.requestDemo} ref={ref}>
      <h2>
        {t('poppingTitle.title.p1')}
        <span className={s.imgs} data-animation-pop-trigger>
          <div className={cn(s.imgC, 'hidden-overflow')} data-animation-pop>
            <CustomImage
              alt="Staff"
              className={s.img}
              height={200}
              src="/img/pop-3.png"
              style={{ objectFit: 'contain' }}
              width={200}
            />
          </div>
          <div className={cn(s.imgC, 'hidden-overflow')} data-animation-pop>
            <CustomImage
              alt="Staff"
              className={s.img}
              height={200}
              src="/img/pop-1.png"
              style={{ objectFit: 'contain' }}
              width={200}
            />
          </div>
          <div className={cn(s.imgC, 'hidden-overflow')} data-animation-pop>
            <CustomImage
              alt="Staff"
              className={s.img}
              height={200}
              src="/img/pop-2.png"
              style={{ objectFit: 'contain' }}
              width={200}
            />
          </div>
        </span>
        <span className={s.colored}>{t('poppingTitle.title.p2')}</span> <br />{' '}
        {t('poppingTitle.title.p3')}{' '}
        <span className={s.colored}> {t('poppingTitle.title.p4')} </span>
        {t('poppingTitle.title.p5')}
      </h2>
      <Button
        {...{
          text: t('poppingTitle.btn.text'),
          path: t('poppingTitle.btn.path'),
        }}
        size="lg"
      />
    </div>
  )
}

export default PoppingTitle
