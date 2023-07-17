import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { ComposableImage } from '../composable-image'
import s from './home-slider.module.scss'

import Button from '@/components/button'
import cn from 'clsx'

type Props = {}

const HomeSlider = (props: Props) => {
  const [currentSlide, setCurrentSlide] = useState(0)
  let timeout: ReturnType<typeof setTimeout>

  const slides = [
    {
      title: '1 - Let Layers manage your time.',
      desc: 'Simple, straightforward, reportable, and centralized HR data on a single platform.',
      img: {
        src: 'https://images.unsplash.com/photo-1597589827317-4c6d6e0a90bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80',
        title: 'alt',
      },
      btn: {
        text: '1 - Request a Demo',
        path: '/',
      },
    },
    {
      title: '2 - Let Layers manage your time.',
      desc: 'Simple, straightforward, reportable, and centralized HR data on a single platform.',
      img: {
        src: 'https://images.unsplash.com/photo-1688504278800-fcbd88b2ea82?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1076&q=80',
        title: 'alt',
      },
      btn: {
        text: '2 - Request a Demo',
        path: '/',
      },
    },
    {
      title: '3 - Let Layers manage your time.',
      desc: 'Simple, straightforward, reportable, and centralized HR data on a single platform.',
      img: {
        src: 'https://images.unsplash.com/photo-1688634219076-aa0815bfa7b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=699&q=80',
        title: 'alt',
      },
      btn: {
        text: '3 - Request a Demo',
        path: '/',
      },
    },
  ]

  //   useEffect(() => {
  //     autoplay()

  //     return () => {
  //       clearTimeout(timeout)
  //     }
  //   }, [currentSlide])

  //   function autoplay() {
  //     timeout = setTimeout(() => {
  //       setCurrentSlide((prev) => (prev + 1) % slides.length)
  //       console.log(currentSlide)
  //     }, 7000)
  //   }

  return (
    <motion.div
      className={s.slider}
      key={`${currentSlide}_slider`}
      initial="closed"
      animate="open"
      exit="closed"
      variants={{
        open: {
          opacity: 1,
          transition: { duration: 5, ease: 'easeInOut' },
        },
        closed: {
          opacity: 1,
          transition: { duration: 0, ease: 'easeInOut' },
        },
      }}
      onAnimationComplete={() =>
        setCurrentSlide((prev) => (prev + 1) % slides.length)
      }
    >
      <div className={s.text}>
        <motion.h2
          key={`${currentSlide}_h2`}
          initial="closed"
          animate="open"
          exit="closed"
          variants={{
            open: {
              opacity: 1,
              x: 0,
              transition: { duration: 1, ease: 'easeInOut' },
            },
            closed: {
              opacity: 0,
              x: -50,
              transition: { duration: 0.5, ease: 'easeInOut' },
            },
          }}
        >
          {slides[currentSlide].title}
        </motion.h2>
        <motion.p
          key={`${currentSlide}_p`}
          initial="closed"
          animate="open"
          exit="closed"
          variants={{
            open: {
              opacity: 1,
              x: 0,
              transition: { duration: 0.75, ease: 'easeInOut' },
            },
            closed: {
              opacity: 0,
              x: -100,
              transition: { duration: 0.5, ease: 'easeInOut' },
            },
          }}
        >
          {slides[currentSlide].desc}
        </motion.p>
        <motion.div
          className={s.btnC}
          key={`${currentSlide}_button`}
          initial="closed"
          animate="open"
          exit="closed"
          variants={{
            open: {
              opacity: 1,
              x: 0,
              transition: { duration: 0.5, ease: 'easeInOut' },
            },
            closed: {
              opacity: 0,
              x: -150,
              transition: { duration: 0.5, ease: 'easeInOut' },
            },
          }}
        >
          <Button
            text={slides[currentSlide].btn.text}
            path={slides[currentSlide].btn.path}
          />
        </motion.div>
      </div>
      <div className={s.media}>
        <motion.div
          className={s.imgC}
          key={`${currentSlide}_img`}
          initial="closed"
          animate="open"
          exit="closed"
          variants={{
            open: {
              opacity: 1,
              transition: { duration: 0.5, ease: 'easeInOut' },
            },
            closed: {
              opacity: 0,
              transition: { duration: 0.5, ease: 'easeInOut' },
            },
          }}
        >
          <ComposableImage
            sources={{
              items: [
                {
                  url: slides[currentSlide].img.src,
                  title: slides[currentSlide].img.title,
                },
              ],
            }}
          />
        </motion.div>
        <div className={s.nav}>
          <div className={s.items}>
            {slides.map((item, i) => {
              return (
                <div
                  className={cn(s.item, { [s.active]: i === currentSlide })}
                  key={i}
                >
                  <div className={s.bar}></div>
                  <div className={s.index}>0{i + 1}</div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default HomeSlider
