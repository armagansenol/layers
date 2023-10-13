import { memo, useEffect, useRef, useState } from 'react'
import s from './pinned-features.module.scss'

import cn from 'clsx'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { Trans, useTranslation } from 'next-i18next'
import { useMedia } from 'react-use'

// const mediaSrc =
//   'https://player.vimeo.com/progressive_redirect/playback/850057794/rendition/720p/file.mp4?loc=external&signature=5ca453ff652a314b3af459ccede5f72c3b12dd53c748df85f593dec31cee8d44'

const mediaSrc = '/video/pinned.mp4'

const PinnedFeatures = () => {
  const ref = useRef(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const isMobile = useMedia('(max-width: 800px)', true)
  const { t, i18n } = useTranslation('home')

  const media = (
    <video
      className={s.video}
      ref={videoRef}
      src={mediaSrc}
      playsInline
      {...(isMobile && { autoPlay: true, muted: true, loop: true })}
    ></video>
  )

  useEffect(() => {
    function updateVideo(val: number) {
      if (videoRef.current) {
        const mapped = parseFloat(
          gsap.utils
            .mapRange(0, 1, 0, videoRef.current?.duration, val)
            .toString()
        )
        videoRef.current.currentTime = mapped
      }
    }

    const ctx = gsap.context(() => {
      const q = gsap.utils.selector(ref)

      if (isMobile) return
      if (!ref.current) return

      const scrollContainer = q('.scroll-container')
      const items = q('.scroll-item')

      const scrollLength =
        items[0].getBoundingClientRect().height * (items.length - 1)
      const multiplyBy = 1.5

      const tl = gsap.timeline({ paused: true })

      tl.to(scrollContainer, {
        ease: 'none',
        y: `-${scrollLength}px`,
      })

      ScrollTrigger.create({
        animation: tl,
        end: `${scrollLength * multiplyBy}px top`,
        id: 'pinned-features-items',
        markers: true,
        pin: true,
        scrub: true,
        trigger: ref.current,
        onUpdate: (self) => {
          updateVideo(self.progress)
        },
      })
    }, ref)

    return () => ctx.revert()
  }, [isMobile, i18n.language])

  return (
    <div className={s.pinnedFeatures} ref={ref}>
      <div className={cn(s.left, 'hidden-overflow')}>
        <div className={cn('scroll-container')}>
          <div className={cn(s.item, 'flex-center', 'scroll-item')}>
            <div className={s.text}>
              <h3>{t('whyLayers.items.i1.title')}</h3>
              <Trans
                i18nKey="whyLayers.items.i1.desc"
                components={{ p: <p /> }}
              >
                {t('whyLayers.items.i1.desc')}
              </Trans>
            </div>
          </div>

          <div className={cn(s.item, 'flex-center', 'scroll-item')}>
            <div className={s.text}>
              <h3>{t('whyLayers.items.i2.title')}</h3>
              <Trans
                i18nKey="whyLayers.items.i2.desc"
                components={{ p: <p /> }}
              >
                {t('whyLayers.items.i2.desc')}
              </Trans>
            </div>
          </div>

          <div className={cn(s.item, 'flex-center', 'scroll-item')}>
            <div className={s.text}>
              <h3>{t('whyLayers.items.i3.title')}</h3>
              <Trans
                i18nKey="whyLayers.items.i3.desc"
                components={{ p: <p /> }}
              >
                {t('whyLayers.items.i3.desc')}
              </Trans>
            </div>
          </div>
        </div>
      </div>

      <div className={cn(s.right, 'hidden-overflow', 'flex-center')}>
        <div className={cn(s.videoC, 'flex-center')}>{media}</div>
      </div>
    </div>
  )
}

export default memo(PinnedFeatures)
