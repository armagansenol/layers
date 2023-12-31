import { useEffect, useRef, useState } from 'react'
import s from './preloader.module.scss'

import cn from 'clsx'
import { Expo, gsap } from 'gsap'
import { useLockBodyScroll } from 'react-use'

import CustomImage from '@/components/custom-image'

const Preloader = () => {
  const ref = useRef(null)
  const [locked, setLocked] = useState(true)
  useLockBodyScroll(locked)

  function up() {
    const q = gsap.utils.selector(ref)

    gsap.to(q('[data-preloader-img]'), {
      duration: 0,
      onComplete: () => {
        setLocked(false)
        q('[data-preloader-panel]').forEach((panel, i) => {
          gsap.to(panel, {
            width: 0,
            opacity: i > 0 ? i * 0.3 : 1,
            duration: 2,
            delay: i * -0.1,
            ease: Expo.easeInOut,
          })
        })
        gsap.to(ref.current, {
          pointerEvents: 'none',
        })
      },
    })
  }

  useEffect(() => {
    // let progress = 0
    let img: any, c: number, tot: number

    img = document.images
    c = 0
    tot = img.length

    const imgLoaded = () => {
      c += 1
      //   progress = ((100 / tot) * c) << 0

      if (c === tot) {
        up()
        return
      }
    }

    const counter = () => {
      for (let i = 0; i < tot; i++) {
        let tImg = new Image()
        tImg.onload = imgLoaded
        tImg.onerror = imgLoaded
        tImg.src = img[i].src
      }
    }

    counter()
  }, [])

  return (
    <div className={cn(s.preloader, 'flex-center')} ref={ref}>
      {/* <div
        className={s.bg}
        style={{ background: 'var(--negroni)' }}
        data-preloader-panel
      ></div> */}
      <div
        className={s.bg}
        style={{ background: 'var(--innocent-snowdrop)' }}
        data-preloader-panel
      ></div>
      <div
        className={s.bg}
        style={{ background: 'var(--negroni)' }}
        data-preloader-panel
      ></div>
      <div
        className={s.bg}
        style={{ background: 'var(--mint-blue)' }}
        data-preloader-panel
      ></div>
      <div
        className={s.bg}
        style={{ background: 'var(--white)' }}
        data-preloader-panel
      >
        <div className={s.transformC}>
          <div className={cn(s.imgC, 'flex-center')} data-preloader-img>
            <CustomImage
              src="/img/layers-logo-hr-technologies.svg"
              alt="Layers Logo"
              width={206}
              height={193}
              style={{ objectFit: 'contain' }}
              priority="high"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Preloader
