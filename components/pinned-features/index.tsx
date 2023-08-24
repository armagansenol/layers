import { memo, useEffect, useRef } from 'react'
import s from './pinned-features.module.scss'

import cn from 'clsx'
import gsap from 'gsap'
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
    const q = gsap.utils.selector(ref)

    function updateVideo(val: number) {
      if (videoRef.current) {
        const mapped = parseFloat(
          gsap.utils.mapRange(0, 1, 0, 22, val).toString()
        )
        videoRef.current.currentTime = mapped
      }
    }

    const ctx = gsap.context(() => {
      if (isMobile) return

      const scrollContainer = q('[data-animation-scroll-container]')
      const items = q('[data-animation-scroll-item]')

      const scrollLength =
        items[0].getBoundingClientRect().height * (items.length - 1)
      const multiplyBy = 1.5

      gsap.to(scrollContainer, {
        ease: 'none',
        y: `-${scrollLength}px`,
        scrollTrigger: {
          end: `${scrollLength * multiplyBy}px top`,
          id: 'pinned-features',
          // markers: true,
          pin: true,
          pinSpacing: true,
          scrub: true,
          trigger: ref.current,
          onUpdate: (self) => {
            updateVideo(self.progress)
          },
        },
      })

      // const tl = gsap
      //   .timeline({ paused: true, ease: 'none' })
      //   .to(items[0], { opacity: 1 })
      //   .to(items[0], { opacity: 0.3 })

      //   .to(items[1], { opacity: 0.3 })
      //   .to(items[1], { opacity: 1 })
      //   .to(items[1], { opacity: 0.3 })

      //   .to(items[2], { opacity: 0.3 })
      //   .to(items[2], { opacity: 1 })

      // ScrollTrigger.create({
      //   scrub: true,
      //   animation: tl,
      //   trigger: ref.current,
      //   end: `${scrollLength * multiplyBy}px top`,
      //   // markers: true,
      // })
    })

    return () => ctx.revert()
  }, [isMobile, i18n.language])

  return (
    <div className={s.pinnedFeatures} ref={ref}>
      <div className="hidden-overflow">
        <div className={s.transformC} data-animation-scroll-container>
          <div
            className={cn(s.item, 'flex-center')}
            data-animation-scroll-item
          ></div>

          <div className={cn(s.item, 'flex-center')} data-animation-scroll-item>
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

          <div className={cn(s.item, 'flex-center')} data-animation-scroll-item>
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

          <div className={cn(s.item, 'flex-center')} data-animation-scroll-item>
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
      <div className="flex-center">
        <div className={s.videoC}>{media}</div>
      </div>
    </div>
  )
}

export default memo(PinnedFeatures)
