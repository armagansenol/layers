import { memo, useEffect, useRef } from 'react'
import s from './pinned-features.module.scss'

import cn from 'clsx'
import gsap from 'gsap'

const PinnedFeatures = () => {
  const ref = useRef(null)
  const q = gsap.utils.selector(ref)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    function updateVideo(val: number) {
      if (videoRef.current) {
        const mapped = parseFloat(
          gsap.utils.mapRange(0, 1, 0, 22, val).toFixed(3)
        )
        console.log('mapped', mapped)
        videoRef.current.currentTime = mapped
      }
    }

    const ctx = gsap.context(() => {
      const scroll = q('[data-scroll]')
      const boxes = q('.box')

      const tl = gsap.timeline().to(
        scroll,
        {
          y: `-${window.innerHeight * 3}px`,
          ease: 'none',
        },
        's'
      )

      const containerAnim = gsap.to(scroll, {
        y: `-${window.innerHeight * 3}px`,
        ease: 'none',
        scrollTrigger: {
          id: 'pinned-features',
          scrub: true,
          trigger: ref.current,
          // markers: true,
          pin: true,
          pinSpacing: true,
          end: '15000px top',
          onUpdate: (self) => {
            //   console.log('progress', self.progress)
            updateVideo(self.progress)
          },
        },
      })

      // const containerAnim = ScrollTrigger.create({
      //   id: 'pinned-features',
      //   animation: tl,
      //   scrub: true,
      //   trigger: ref.current,
      //   // markers: true,
      //   pin: true,
      //   pinSpacing: true,
      //   // end: '5000px top',
      //   onUpdate: (self) => {
      //     //   console.log('progress', self.progress)
      //     updateVideo(self.progress)
      //   },
      // })

      gsap.set(boxes, {
        opacity: 0.3,
      })

      boxes.map((box, i) => {
        // red section
        gsap.to(box, {
          opacity: 1,
          scrollTrigger: {
            trigger: box,
            toggleClass: 'active',
            start: 'center bottom',
            end: 'center top',
            id: i.toString(),
            // markers: true,
          },
        })
      })
    })

    return () => ctx.revert()
  }, [q])

  return (
    <div className={s.pinnedFeatures} ref={ref}>
      <div className={s.features}>
        <div className={s.transformC} data-scroll>
          <div className={cn(s.box, 'box')}>
            <h3 className={s.title}>All-in-one Software</h3>
            <p className={s.par}>
              Layers defines the employee experience by placing people at the
              heart of all people operations systems and processes.
            </p>
            <p className={s.par}>
              By leveraging self-service functionality and seamless approvals,
              Layers ensures that employees can effortlessly access the
              resources they need without unnecessary hurdles.
            </p>
          </div>
          <div className={cn(s.box, 'box')}>
            <h3 className={s.title}>All-in-one Software</h3>
            <p className={s.par}>
              Layers defines the employee experience by placing people at the
              heart of all people operations systems and processes.
            </p>
            <p className={s.par}>
              By leveraging self-service functionality and seamless approvals,
              Layers ensures that employees can effortlessly access the
              resources they need without unnecessary hurdles.
            </p>
          </div>
          <div className={cn(s.box, 'box')}>
            <h3 className={s.title}>All-in-one Software</h3>
            <p className={s.par}>
              Layers defines the employee experience by placing people at the
              heart of all people operations systems and processes.
            </p>
            <p className={s.par}>
              By leveraging self-service functionality and seamless approvals,
              Layers ensures that employees can effortlessly access the
              resources they need without unnecessary hurdles.
            </p>
          </div>
          <div className={cn(s.box, 'box')}>
            <h3 className={s.title}>All-in-one Software</h3>
            <p className={s.par}>
              Layers defines the employee experience by placing people at the
              heart of all people operations systems and processes.
            </p>
            <p className={s.par}>
              By leveraging self-service functionality and seamless approvals,
              Layers ensures that employees can effortlessly access the
              resources they need without unnecessary hurdles.
            </p>
          </div>
        </div>
      </div>
      <div className={cn(s.media, 'flex-center')}>
        <div className={s.videoC}>
          <video
            className={s.video}
            // src="https://www.apple.com/media/us/mac-pro/2013/16C1b6b5-1d91-4fef-891e-ff2fc1c1bb58/videos/macpro_main_desktop.mp4"
            src="/video/sample120.mp4"
            // autoPlay
            // muted
            // loop
            // controls
            ref={videoRef}
          ></video>
        </div>
      </div>
    </div>
  )
}

export default memo(PinnedFeatures)
